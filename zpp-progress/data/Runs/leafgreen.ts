/// <reference path="../tpp-data.ts" />
ZEvent2022.Runs.push(
    {
        RunName: "Vert Feuille",
        ColorPrimary: "#67c50a",
        ColorSecondary: "#0f9730",
        StartDate: "2022-09-09T18:11:19Z",
        Duration: "2022-09-12T01:15:00Z",
        HostName: "JJJJJJ",
        HostImage: "img/hosts/jjjjjj.png",
        // HostImageSource: "",
        Region: "Kanto",
        Generation: 3,
        Pokedex: "National",
        FinalStateLink: "./states/leafgreen.json",
		AlwaysShowHOF,
        Events: [
		
			// Following timestamps are estimates due to lack of VOD
		
			{ Name: "Bulbasaur", Time: "0d00h08m56s", Group: "Pokemon" }, 
			
			{ Name: "Rattata", Time: "0d00h57m", Group: "Pokemon" }, // Real time unknown, between 0h55m15s and 2h05m14s
			{ Name: "Pidgey", Time: "0d01h04m", Group: "Pokemon" }, // Real time unknown, between 0h55m15s and 1h09m35s
			
			{
                Group: "Badges", Name: "Badge Roche", Image: "img/badges/boulder.png", ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                Time: "0d02h36m09s", Attempts: 0 // Attempt number uncertain due to lack of VOD
            },
			
			{ Name: "Ivysaur", Time: "0d04h06m44s", Group: "Pokemon" },
			
            {
                Group: "Badges", Name: "Badge Cascade", Image: "img/badges/cascade.png", ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                Time: "0d09h30m17s", Attempts: 1 // Estimate due to lack of VOD
            },
			
			{ Name: "Sandshrew", Time: "0d10h08m10s", Group: "Pokemon" },
			{ Name: "Spearow", Time: "0d10h09m03s", Group: "Pokemon" },
			
			{ Name: "Pidgeotto", Time: "0d10h55m", Group: "Pokemon" }, // Estimate taken from GDoc
			
			{
                Group: "Trainers", Name: "BAAAIJR", Image: "img/trainers/firered/blue.png",
                Time: "0d11h10m", Attempts: 1 // Estimate taken from GDoc
            },
			
			{
                Group: "Trainers", Name: "BAAAIJR", Image: "img/trainers/firered/blue.png",
                Time: "0d12h46m", Attempts: 1 // Estimate taken from GDoc
            },
			
            {
                Group: "Badges", Name: "Badge Foudre", Image: "img/badges/thunder.png", ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                Time: "0d14h58m", Attempts: 1 // Estimate taken from GDoc
            },
			
			{ Name: "Diglett", Time: "0d15h17m", Group: "Pokemon" }, // Estimate taken from GDoc
			
			// Following timestamps are estimates due to lack of preceding VODs and unknown length of blackout
			
			{ Name: "Geodude", Time: "0d18h54m50s", Group: "Pokemon" },
			{ Name: "Zubat", Time: "0d18h59m14s", Group: "Pokemon" },
			{ Name: "Venusaur", Time: "0d20h17m15s", Group: "Pokemon" },
			
            {
                Group: "Badges", Name: "Badge Prisme", Image: "img/badges/rainbow.png", ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                Time: "0d20h48m16s", Attempts: 2
            },
			
			{ Name: "Eevee", Time: "0d21h16m31s", Group: "Pokemon" },
			{ Name: "Jolteon", Time: "0d21h41m08s", Group: "Pokemon" },
			
			{
                Group: "Trainers", Name: "Giovanni", Image: "img/trainers/firered/giovanni.png",
                Time: "0d23h43m30s", Attempts: 1
            },
			
			{
                Group: "Trainers", Name: "BAAAIJR", Image: "img/trainers/firered/blue.png",
                Time: "1d00h40m31s", Attempts: 1
            },
			
			{ Name: "Pidgeot", Time: "1d05h04m44s", Group: "Pokemon" },
			{ Name: "Bellsprout", Time: "1d05h51m14s", Group: "Pokemon" },
			
			{
                Group: "Trainers", Name: "BAAAIJR", Image: "img/trainers/firered/blue.png",
                Time: "1d10h34m25s", Attempts: 1
            },
			
			{ Name: "Lapras", Time: "1d10h37m06s", Group: "Pokemon" },
			
			{
                Group: "Trainers", Name: "Giovanni", Image: "img/trainers/firered/giovanni.png",
                Time: "1d10h58m33s", Attempts: 1
            },
			
			{ Name: "Snorlax", Time: "1d11h18m05s", Group: "Pokemon" },
			
            {
                Group: "Badges", Name: "Badge Âme", Image: "img/badges/soul.png", ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                Time: "1d12h00m14s", Attempts: 4
            },
            {
                Group: "Badges", Name: "Badge Marais", Image: "img/badges/marsh.png", ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                Time: "1d12h49m32s", Attempts: 1 // Unconfirmed
            },
			
			{ Name: "Nidorina", Time: "1d13h56m37s", Group: "Pokemon" },
			{ Name: "NidoranF", Time: "1d14h11m13s", Group: "Pokemon" },
			{ Name: "Paras", Time: "1d14h14m20s", Group: "Pokemon" },
			
            {
                Group: "Badges", Name: "Badge Volcan", Image: "img/badges/volcano.png", ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                Time: "1d19h21m54s", Attempts: 2
            },
			
            {
                Group: "Badges", Name: "Badge Terre", Image: "img/badges/earth.png", ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                Time: "1d20h51m48s", Attempts: 2
            },
			
			{ Name: "Tentacool", Time: "1d22h15m34s", Group: "Pokemon" },
			
			{
                Group: "Trainers", Name: "BAAAIJR", Image: "img/trainers/firered/blue.png",
                Time: "2d0h27m18s", Attempts: 4
            },
			
			// Following timestamps are estimates due to unknown length of blackout
			
            {
                Group: "Elite Four", Name: "Olga", Image: "img/trainers/firered/lorelei.png",
                Time: "02d06h24m01s", Attempts: 6
            },
			{
                Group: "Elite Four", Name: "Aldo", Image: "img/trainers/firered/bruno.png",
                Time: "02d06h51m51s", Attempts: 1
            },
			
            /*
            {
                Group: "Elite Four", Name: "Agatha", Image: "img/trainers/firered/agatha.png",
                Time: "2024-02-17T12:31:18.4941498Z", Attempts: 2
            },
            {
                Group: "Elite Four", Name: "Lance", Image: "img/trainers/firered/lance.png",
                Time: "2024-02-17T16:24:42.8260747Z", Attempts: 7
            },
            {
                Group: "Champions", Name: "BLUE", Image: "img/trainers/firered/blue.png",
                Time: "2024-02-17T17:45:56.9261072Z", Attempts: 3
            },*/
			
			
        ]
    }
);