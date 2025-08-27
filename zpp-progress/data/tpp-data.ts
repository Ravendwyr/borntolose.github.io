/// <reference path="../models/collection.ts" />
/// <reference path="../models/duration.ts" />
var ZEvent2022: TPP.Collection = {
    Name: "ZEvent 2022",
    Scale: TPP.Scale.Hours,
    Runs: []
};
var ZEvent2024: TPP.Collection = {
    Name: "ZEvent 2024",
    Scale: TPP.Scale.Hours,
    Runs: []
};
var Sidegames: TPP.Collection = {
    Name: "Sidegames",
    SingularName: "Sidegame",
    Scale: TPP.Scale.Weeks,
    Runs: []
};
var QuickSidegames: TPP.Collection = {
    Name: "Quick Sidegames",
    SingularName: "Quick Sidegame",
    Scale: TPP.Scale.Days,
    Runs: []
};
var Revisits: TPP.Collection = {
    Name: "Revisits",
    SingularName: "Revisit",
    Scale: TPP.Scale.Hours,
    Runs: []
};
var Intermissions: TPP.Collection = {
    Name: "Intermissions",
    SingularName: "Intermission",
    Scale: TPP.Scale.Hours,
    Runs: []
};
var LongIntermissions: TPP.Collection = {
    Name: "Long Intermissions",
    SingularName: "Long Intermission",
    Scale: TPP.Scale.Days,
    Runs: []
}
var ShortIntermissions: TPP.Collection = {
    Name: "Short Intermissions",
    SingularName: "Short Intermission",
    Scale: TPP.Scale.Minutes,
    Runs: []
}
var tppData: TPP.Collection[] = [ZEvent2022, ZEvent2024, Revisits];

var exports = exports || {};
exports.tppData = tppData;

const Shiny = true; // for HoF shorthand
const AlwaysShowHOF = true; // for HOF shorthand

//post-processing
setTimeout(() => {
    //remove runs with blank start dates
    tppData.forEach(c => c.Runs = c.Runs.filter(r => r.StartDate != ""));
    //remove events with blank times
    tppData.forEach(c => c.Runs.forEach(r => r.Events = r.Events.filter(e => e.Time != "")));

    //set StartTime/EndTime for each run and UnixTime for each event
    tppData.forEach(c => c.Runs.forEach(r => {
        r.StartTime = r.StartTime || (r.StartDate ? Math.floor(Date.parse(r.StartDate) / 1000) : 0);
        r.EndTime = r.EndTime || (TPP.Duration.parse(r.EndDate || r.Duration, r.StartTime).TotalSeconds + r.StartTime);
        r.Events.forEach(e => {
            e.UnixTime = TPP.Duration.parse(e.Time, r.StartTime).TotalSeconds + r.StartTime;
            if ((<TPP.HallOfFame>e).FirstAttemptDate) {
                (<TPP.HallOfFame>e).FirstAttemptUnixTime = TPP.Duration.parse((<TPP.HallOfFame>e).FirstAttemptDate, r.StartTime).TotalSeconds + r.StartTime;
            }
        });
    }));

    //do event copying
    tppData.forEach(c => c.Runs.forEach(baseRunInfo => {
        if (!baseRunInfo.CopyEvents) return;
        var events: TPP.Event[] = [];
        tppData.forEach(c => c.Runs.filter(r => baseRunInfo != r && baseRunInfo.CopyEvents.indexOf(r.RunName) >= 0).forEach(r => events = events.concat.apply(events, r.Events.map(e => {
            var newE = <TPP.Event>{};
            Object.keys(e).forEach(k => newE[k] = e[k]);
            try {
                newE.Time = new Date((TPP.Duration.parse(e.Time, r.StartTime).TotalSeconds + r.StartTime) * 1000).toISOString();
            }
            catch (ex) {
                newE.Time = e.Time;
            }
            return newE;
        }))));
        events.forEach(e => !baseRunInfo.Events.filter(e2 => e2.Name == e.Name && e2.Time == e.Time).length ? baseRunInfo.Events.push(e) : null);
    }));

    //put runs in order
    tppData.forEach(c => c.Runs = c.Runs.sort((r1, r2) => r1.StartTime - r2.StartTime));
    //put events in order
    tppData.forEach(c => c.Runs.forEach(r => r.Events = r.Events.sort((e1, e2) => e1.UnixTime - e2.UnixTime)));

    //autonumber unnumbered Hall of Fame/Tournament entries
    ["Hall of Fame", "Champion Tournament", "Galarian Star Tournament", "Academy Ace Tournament"].map(t => t.toLowerCase()).forEach(tournament => tppData.forEach(c => c.Runs.forEach(r => r.Events.filter(e => (<TPP.HallOfFame>e).Party && e.Name.toLowerCase().trim() == tournament).forEach((hof, i, hofArr) => hof.Name += hofArr.length > 1 ? " #" + (i + 1) : ""))));

    //filter out empty collections
    tppData = tppData.filter(c => c.Runs.length > 0);

}, 0);