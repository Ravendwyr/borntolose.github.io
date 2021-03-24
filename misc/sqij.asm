1 goto 2                
3 paper 0               
  cls
  beep 0.1, 34          
  opt=0                 
  o=0			
  ink 7                 
  x=0			
  y=1			
  p=1			
  paz=0                 
  u=10			
  lo=0                  
  beep 0.1, 9           
  border 0
  beep 0.2, 45
6 kl=0                  
  ob=0                  
  sc=0			
  trc=0                 
  pas=0                 
  tree=0                
  food=0                
  room=29               
  d1=0                  
  d2=0
  d3=0
  d4=0
  d5=0
  d6=0
7 obj3=0                
  obj4=0		
  obj5=0
  obj6=0
  obj7=0
  obj8=0
  obj9=0
  obj10=0
  obj11=0
  obj12=0
  obj13=0
  obj14=0
  obj15=0
  obj16=0
*  r=0                    
*8 d3=0                  
*  d4=0
*  d5=0
*  d6=0
  xc=0                  
  ro=0
9 z=0			
  left=0                
  right=0               
  up=0
  down=0
10 obj1=0               
   obj2=0
   h=1                  
   door=1               
   dl=0                 
                        
*   d2=0                
                        
   energy=90            
30 .aton                
   .spn=5               
   .col=6               
   .row=7               
   .ptbl                
31 .spn=35              
   .col=22
   .row=7
   .ptbl
32 print at 0,14 "welcome"
33 print at 4,16 "to"
34 print at 10,15 "sqij!!"
62 print at 20,10 "1)play game."
90 if inkey$="1" then go to 900 (DRAW_ROOM)
111 go to 90            







900 (DRAW_ROOM) z=0     
    k=10		
    u=10                
    kill0=0             
    kill2=0
    go to 918
905 (SPECIALSETUPGAME) z=1    
910 (MID_ROOM_INIT) k=5 
                        
                        
918 paz=0               
    aq=0                
    sos=0               
*   yh=0                
    ink 1
    paper 0

    
    for f=0 to 21
      print at f,0 "**************************"
    next f

    
919 for g=2 to 16
      print at g,4 "                        "
    next g

    
930 .aton
    .spn=3        
    .col=3	  
931 .row=2
    .ptbl
933 .spn=55       
    .row=2 	  
934 .col=4
    .ptbl
    .col=13	  
    .ptbl
936 .col=28       
    .spn=57       
    .row=2
    .ptbl
940 .spn=56       
    .col=3        
941 .row=16
942 .ptbl
945 .col=14       
    .ptbl



964 if y=1 then
      for n=6 to 10
        print at n,0 "     "
      next n


974 if o=1 then
      for n=0 to 3
         print at n,11 "         "
      next n


984 if p=1 then
      for n=6 to 10
         print at n,28 "     "
      next n



994 if x=1 then print at 17,11 "         "
996 if x=1 then print at 18,11 "         "
997 if x=1 then print at 16,11 "         "



998 print at 10,80 ink 7 "score;"
    ink 7
    print at 19,20 sc




1000 (GAME_LOOP) 
     print at 20,0 ink 7 "energy:" energy
     print at 21,0 ink 7 "level :"



1001 (GAME_LOOP_NOUPDATE) 
      if paz=0 then 
        paz=1
        .col=k
        .row=u
        go to 9836 (FLAP_IN_ANI)




1011 if opt=0 and lo=1 then 
        opt=1
        go to 9720 (DRAW_SQIJ_START_RIGHT)
1012 if opt=0 and lo=0 then
        opt=1
        go to 9700 (DRAW_SQIJ_START_LEFT)


1013 (REENTRY_FROM_DRAW_SQIJ_START):
      if room=39 or room=4 or room=7 or room=14 or room=47 or room=54 then
        go to 7006 (COMPLETELY_POINTLESS_CYCLE_1)
                    
                    
                    



1112 if u=3 and k>=2 and o=0 then
        down=1
        go to 8000 (TAKE_DAMAGE)


1113 if u=11 and k>=3 and x=0 then
        up=1
        go to 8000 (TAKE_DAMAGE)


1114 if k=3 and u>=3 and y=0 then
        left=1
        go to 8000 (TAKE_DAMAGE)


1115 if k=20 and u>=3 and p=0 then
        right=1
        go to 8000 (TAKE_DAMAGE)


1116 if k=3 and u=10 then
        left=1
        go to 8000 (TAKE_DAMAGE)
1117 if k=3 and u=4 then
        left=1 
        go to 8000 (TAKE_DAMAGE)
1118 if k=20 and u=4 then
        right=1
        go to 8000 (TAKE_DAMAGE)
1119 if k=20 and u=10 then
        right=1
        go to 8000 (TAKE_DAMAGE)


1120 if u=3 and k<11 then
        down=1
        go to 8000 (TAKE_DAMAGE)
1121 if u=3 and k>18 then
        down=1
        go to 8000 (TAKE_DAMAGE)
1122 if u=11 and k<18 then
        up=1
        go to 8000 (TAKE_DAMAGE)
1123 if u=11 and k<10 then
        up=1
        go to 8000 (TAKE_DAMAGE)
* 1124 if u=3 and k<11 and k<16 then  
*        down=1                      
*        go to 8000 (TAKE_DAMAGE)

1151 go to 1225              
* 1152 go to 7015 (ANIMATE_ENEMIES)             



1225 if inkey$="x" then
       lo=0
       print at u+1, k-1 " "
       print at u+2, k-1 " "
       go to 8121 (MOVE_FORWARD)






1226 if inkey$="l" then
       go to 3136 (WTF_L_ENTRY)


1227 if inkey$="z" then
       lo=1
       print at u+1, k+9 " "
       print at u+2, k+9 " "
       go to 8121 (MOVE_FORWARD)


1228 if inkey$="k" then go to 9850 (ANIMATE_MOVE_UP)


1229 if inkey$="m" then go to 9883 (ANIMATE_MOVE_DOWN)


1230 if inkey$="j" then go to 5499 (OPEN_DOOR_WITH_PASS)



1231 (PASS_REENTRY) if inkey$="b" and k>7 and k<15 then go to 9810 (FIRE_LASER)




1232 if inkey$="i" and room=22 and tree=1 then
       tree=tree-1
       sc=sc+2000
       beep 0.1,45
       beep 0.3,37
       trc=trc+1




1233 if room=22 then
       print at 0,0 ink 7 "e.t.r."
       print at 16,12 ink 2 "********"




1234 if trc=6 then go to 6500 (WIN_GAME)


1235 go to 7015 (ANIMATE_ENEMIES)

1236 (ENEMY_REENTRY)

1241 if inkey$="n" and not room=7 and not room=14 and not room=39 and not room=47 then go to 3300 (INVENTORY_SCREEN)



1242 if door=1 then go to 1249


1243 if door=0 and room=4 and d1=0 then go to 5000 (DRAW_CLOSED_DOOR)
1244 if door=0 and room=7 and d2=0 then go to 5000 (DRAW_CLOSED_DOOR)
1245 if door=0 and room=14 and d3=0 then go to 5000 (DRAW_CLOSED_DOOR)
1246 if d4=0 and door=0 and room=390 then go to 5000 (DRAW_CLOSED_DOOR)
1247 if door=0 and room=47 and d5=0 then go to 5000 (DRAW_CLOSED_DOOR)
1248 if door=0 and room=54 and d6=0 then go to 5000 (DRAW_CLOSED_DOOR)



1249 if ro=0 then go to 1297 (falls through to CHECK_EXIT_ROOM)                          
1250 if xc=1 then go to 1297 (falls through to CHECK_EXIT_ROOM)


1251 if room=6 or 9 or 57 or 58 or 40 then go to 1261 (DRAW_PLATFORM)
1259 if room=37 or 27 or 15 or 1 then go to 1261 (DRAW_PLATFORM)
1260 go to 1397 (CHECK_EXIT_ROOM)



1261 (DRAW_PLATFORM)
     .aton
1262 .row=6
1263 .col=18
1264 .spn=2
1265 .ptbl






1397 (CHECK_EXIT_ROOM) if u>=6 and k=0 and y=1 then go to 1430 (LEFT_EXIT_ARRAY)


1398 if u=0 and k>=11 and o=1 then go to 1492 (UP_EXIT_ARRAY)


1400 if u>=12 and u<=20 and k>=11 and x=1 then go to 1523 (DOWN_EXIT_ARRAY)


1401 if u>=6 and k=31 and p=1 then go to 1566 (RIGHT_EXIT_ARRAY)



1405 if ob=1 then   
        ob=0
        go to 2066 (DRAW_ROOM_OBJECT)



1406 go to 9999 (ANOTHER_POINTLESS_REDIRECT_TO_INC_SCORE_AND_LOOP)





1430-1491 is Left exits
1492-1522 is Upward exits
1523-1565 is Down exits
1566-1784 Right exits



2000-2063 Room setup statements.




* 2065 if ob=0 then go to 8996 (INC_SCORE_AND_LOOP)




2066 (DRAW_ROOM_OBJECT) .row=3
2068 if room=9 and obj=0 then go to 2076
2070 if room=62 and obj10=0 then go to 2076
2071 if room=5 and obj14=0 then go to 2076
2072 if room=2 and obj15=0 then go to 2076
2073 if room=6 and obj2=0 then go to 2076
2074 if room=40 and obj6=0 then go to 2076
2075 go to 2081                  
2076 .row=4
     .spn=11                     
2077 .col=18
2078 .ptbl
     go to 8996 (INC_SCORE_AND_LOOP)



2081 if room=27 and obj4=0 then go to 2089
2082 if room=37 and obj5=0 then go to 2089
2084 if room=53 and obj11=0 then go to 2089
2085 if room=21 and obj13=0 then go to 2089
2086 if room=1 and obj1=0 then go to 2089
2087 if room=57 and obj8=0 then go to 2089
2088 go to 3135                  
2089 .col=18
2090 .spn=7                      
     .ptbl
     go to 8996 (INC_SCORE_AND_LOOP)
3135 .row=4



     if room=15 then go to 3139
3136 (WTF_L_ENTRY) if room=58 then go to 3139
3137 if room=59 then go to 3139
3138 go to 3147         
3139 .col=18 
     .aton
3140 .spn=9
     .ptbl
3147 go to 8996 (INC_SCORE_AND_LOOP)






* 3148 (COLLECT_OBJECT_DEAD)
*      if room=1 and obj1=0 then obj1=1: go to 3179 (FOOD_COLLECTED)
* 3149 if room=6 and obj2=0 then obj2=1: go to 3180 (TREE_COLLECTED)
* 3150 if room=40 then
*       
*        go to 3150   
* 3151 if room=15 or room=58 or room=59 and food=1 or food=2 then go to 3181 (PASS_COLLECTED)
* 3152 if room=27 and obj4=0 then obj4=1: go to 3179 (FOOD_COLLECTED)
* 3153 if room=37 and obj5=0 then obj5=1: go to 3179 (FOOD_COLLECTED)
* 
* 
* 3154 if room=40 and obj6=0 then obj6=1: go to 3180 (TREE_COLLECTED) 
* 3155 if room=58 and food=1 or food=2 then go to 3181 (PASS_COLLECTED)
* 3157 if room=57 and obj8=0 then obj8=1: go to 3179 (FOOD_COLLECTED)
* 3160 if room=9 and obj9=0 then obj9=1: go to 3180 (TREE_COLLECTED)
* 3162 if room=62 and obj10=0 then obj10=1: go to 3180 (TREE_COLLECTED)
* 3164 if room=53 and obj11=0 then obj11=1: go to 3179 (FOOD_COLLECTED)
* 3168 if room=59 and food=1 or food=2 then go to 3181 (PASS_COLLECTED)
* 3170 if room=21 and obj13=0 then obj13=1: go to 3179 (FOOD_COLLECTED)
* 3172 if room=5 and obj14=0 then obj14=1: go to 3180 (TREE_COLLECTED)
* 3174 if room=2 and obj15=0 then obj15=1: go to 3180 (TREE_COLLECTED)
* 3175 go to 3268 (UPDATE_SCORE_AND_LOOP)


* 3176 .spn=6
*      .col=18
* 3177.row=3
*      .ptbl
* 3178 go to 3266 (falls through to UPDATE_SCORE_AND_LOOP)




* 3179 (FOOD_COLLECTED) 
*      beep 0.3, 56
*      beep 0.1, 23
*      ob=0
*      food=food+1
*      go to 3268 (UPDATE_SCORE_AND_LOOP)
* 3180 (TREE_COLLECTED) 
*      beep 0.3, 56
*      beep 0.1, 13
*      ob=0
*      sc=sc+2000
*      tree=tree+1
*      go to 3268 (UPDATE_SCORE_AND_LOOP)
* 3181 (PASS_COLLECTED) 
*      beep 0.3, 56
*      beep 0.1, 23
*      food=food-1
*      ob=0
*      pas=pas+1


3268 (UPDATE_SCORE_AND_LOOP) print at 19,20 sc
     go to 1000 (GAME_LOOP)





3300 (INVENTORY_SCREEN) cls
     print at 0,10 ink 7 "inventory:"
3302 print at 6,0 ink 7 "enertree carried " tree " bit(s)"
3304 print at 8,0 ink 7 "food carried " food " bit(s)"
3306 print at 10,0 ink 7 "passes carried " pas 
3307 print at 12,0 ink 7 "bits of tree collected " trc
3308 print at 21,12 ink 5 "any key."
     pause 0
     cls
3310 go to 900 (DRAW_ROOM)



5048 door=1
     kl=1
     .spn=10
5050 .col=16
     .row=2
5051 .ptbl
     .spn=33
     .col=k
     .row=u
     go to 3260 (nonexistant line but falls through to 3268 UPDATE_SCORE_AND_LOOP)





5499 (OPEN_DOOR_WITH_PASS) if pas=0 then go to 1231 (PASS_REENTRY)



5506 if room=7 and d2=0 and pas>0 then d2=1:go to 5513 (SUBTRACT_PASS)
5507 if d1=0 and room=4 and pas>0 then d1=1:go to 5513 (SUBTRACT_PASS)
5508 if d3=0 and room=14 and pas>0 then d3=1:go to 5513 (SUBTRACT_PASS)
5509 if d4=0 and room=39 and pas>0 then d4=1:go to 5513 (SUBTRACT_PASS)
5510 if d5=0 and room=47 and pas>0 then d5=1:go to 5513 (SUBTRACT_PASS)
5511 if d6=0 and room=54 and pas>0 then d6=1:go to 5513 (SUBTRACT_PASS)
5512 go to 5999   
5513 (SUBTRACT_PASS) 
     pas=pas-1
5999 z=0
     go to 910 (MID_ROOM_INIT) 



6004 (COMPLETELY_POINTLESS_CYCLE_1) go to 7000  




6500 (WIN_GAME)
     opt=0
     cls
     print at 0,6 "w e l l  d o n e"
     print at 3,6 "o l d  b e a n !!"
     print at 6,7 "you've done it."
     print at 9,3 "but for me it means another"
     print at 10,3 "2 months in a dark dank bed-"
     print at 11,3 "room (which badly needs decorating)"
     print at 13,3 "writeing a follow up.oh well"
     print at 14,3 "never mind."
     print at 17,11 "bye for now."
6501 pause 0
     cls
6999 go to 1



7000 (COMPLETELY_POINTLESS_CYCLE_2)
7013 go to 1015





7015 .aton
     if aq=1 then go to 7024 



7016 sos=0
     aq=1


7020 if kill2=0 then
       .spn=17
       .col=22
       go to 7022
7021 go to 7023 
7022 .row=5
     .ptbl


7023 if kill0=0 then
        .spn=37
        .col=5
        go to 7025
7024 go to 7028
7025 .row=4 
     .ptbl




7028 if d1=1 then go to 7045






7029 let sos=sos+.25


     if kill0=0 then
       .spn=37
       .hgt=11
       go to 7032
7030 go to 7035
7032 .col=5
     .row=4
     .len=5
7033 .atdv




7034 if sos<7.25 then
       .npx=-2
       .wcrv
7035 if sos=7.25 then
        dl=1
        go to 7070 (ENEMY_EXIT)


7036 if kill2=0 then go to 7038
7037 go to 7074 (ENEMY_EXIT)


7038 .spn=17
     .col=22
7039 .row=5
     .hgt=11
7040 .len=4
7041 .npx=-2
     .wcrv
7042 .atdv
7043 go to 7074 (ENEMY_EXIT)


7044 if kill2=1 then go to 7049
7045 .spn=17
     .col=22
7046 .row=5
     .hgt=11
7047 .len=4
     .npx=+2
7048 .wcrv
     .atdv
7049 sos=sos+.25
7050 if kill0=1 then go to 7060
7056 .spn=37
     .col=5
7057 .row=4
     .hgt=11
7058 .len=5
     .npx=+2
     .wcrv




7060 if sos=14 then 
       d1=0
       sos=0
7070 (ENEMY_EXIT)
7074 go to 1236 (ENEMY_REENTRY)





8099 energy = energy - 10
8100 if energy<=0 then go to 8900 (GAME_OVER)
8010 print at 20,7 energy



8103 if up=1 then up=0, go to 9850 (ANIMATE_MOVE_UP)
8104 if down=1 then down=0, go to 9883 (ANIMATE_MOVE_DOWN)

8105 if left=1 then left=0, k=k+1, go to 9830 (ANIMATE_FLAP_RIGHT)
8106 if right=1 then right=0, k=k-2, go to 9800 (ANIMATE_FLAP_LEFT)






8121 (MOVE_FORWARD) if kill2=0 and k=14 then 
        print at u+1, 21 " "
        print at u+2, 21 " "
        right=1
        go to 8000 (TAKE_DAMAGE)


8122 if kill0=0 and k=9 then
        left=1
        go to 8000 (TAKE_DAMAGE)


8123 if z=1 and k=8 then 
        right=1
        go to 8000 (TAKE_DAMAGE)


8124 if z=1 and k=17 then
        left=1
        go to 8000 (TAKE_DAMAGE)


8128 if lo=0 then go to 9830 (ANIMATE_FLAP_RIGHT)
8129 if lo=1 then go to 9800 (ANIMATE_FLAP_LEFT)
8887 (POINTLESS_REDIRECT_TO_INC_SCORE_AND_LOOP) go to 8996 (INC_SCORE_AND_LOOP)
8890 go to 8901 (falls through to INC_SCORE_AND_LOOP)




8900 (GAME_OVER) cls
     print at 10,0 ink 7 "what a plonker.you've just got"
     print "       yourself killed."
     for j=0 to 350
     next j
     cls
     go to 1





8996 (INC_SCORE_AND_LOOP) sc=sc+1
     print at 19,0 sc
8999 ink 7
     go to 1001 (GAME_LOOP_NOUPDATE)








9001 (LASER_FIRED) if u>5 and U<14 and k<18 and lo=1 and kill2=0 then 
       kill2=1
       for h=5 to 15
         print at h,22 "    "
         go to 9004  



9002 if u<5 and u<14 and k<18 and lo=0 and kill0=0 then
        kill0=1
        for h=4 to 15
        print at h,5 "     "
        go to 9004
9003 go to 9499  
9004 next h             
                        
     sc=sc+20           
     print at 19,0 sc
9499 go to 9901  





9500 if lo=0 then
       .spn=35
       energy=energy-10
       print at 20,7 energy
       u=u-1
       .row=u
       .col=k
       print at u+4, k+2 "     "
       .ptbl
       go to 8200
9501 if lo=1 then
       .spn=5                  
       energy=energy-10
       print at 20,7 energy
       u=u-1
       .row=u
       .col=k
       print at u+4, k+2 "     "
       .ptbl
       go to 8200



9700 (DRAW_SQIJ_START_LEFT) .spn=30
9701 opt=1                
9702 .aton
9703 .col=10
9704 .row=10
9705 .ptbl
9706 go to 1013

9700 (DRAW_SQIJ_START_RIGHT) .spn=5                     
9721 opt=1                
9722 .aton                
9723 .col=10
9724 .row=10
9725 .ptbl
9750 go to 1013




9800 (ANIMATE_FLAP_LEFT) lo=0
9801 .col=k
9802 .row=u
9803 .spn=30
9804 .ptbl
9805 for n=1 to 3
9806 .spn=33
9807 .ptbl
     .spn=35
     for n=1 to 3
9808 .ptbl
     for n=1 to 3
9809 k=k-1
     go to 1229




9810 (FIRE_LASER) if lo=0 then
       .spn=20          
       opt=1
       go to 9812
9811 go to 9820
9812 .aton
9813 .col=k-4
9814 .row=u+1
9815 .ptbl
9816 pause 15          
                       
                       
9817 .atof
     .spn=90           
9818 .ptbl

9819 go to 9001 (LASER_FIRED)

9820 if lo=1 then
       .spn=20         
       opt=1


9821 .aton
9822 .col=k+9
9823 .row=u+1
9824 .ptbl
9825 pause 15
9826 .atof
     .spn=90           
9827 .ptbl

9828 go to 9001 (LASER_FIRED)




9830 (ANIMATE_FLAP_RIGHT) .aton
     lo=1
9831 .col=k
9832 .col=u
9833 .spn=5                  
9834 .ptbl
9835 for n=1 to 3 next n


9836 (FLAP_IN_ANI) .spn=29                 
9837 .ptbl
9838 for n=1 to 3 next n
9839 .spn=25                 
9840 .ptbl
9841 for n=1 to 3 next n
9842 k=k+1
     k=k                     
9843 go to 1397 (CHECK_EXIT_ROOM)





9850 (ANIMATE_MOVE_UP) if lo=0 then
       u=u-1
       go to 9852
9851 go to 9860
9852 .col=k
     .hgt=6
9853 .row=u
     .len=9
9854 .spn=30
9855 .ptbl
     .atuv
9856 print at u+5, k+2 "      "
9857 go to 1397 (CHECK_EXIT_ROOM)


9860 if lo=1 then
       u=u-1
       go to 9862
9861 go to 9900
9862 .col=k
     .hgt=6
9863 .row=u
     .len=9
9864 .spn=25             
9865 print at u+5, k+1 "       "
9866 .ptbl
     .atuv
9867 go to 1397 (CHECK_EXIT_ROOM)







9870 if lo=1 then go to 9872
9871 go to 9881
9872 .rol=k
9873 .row=u
9874 .spn=25            
9875 .hgt=5
9876 .len=9
9877 .npx=-8
9878 .scrv
     .atdv
9879 u=u+1
9880 go to 9900
9881 if lo=0 then go to 9883
9882 go to 9900
9883 (ANIMATE_MOVE_DOWN) 
     .col=k
9884 .row=u
9885 .spn=35
9886 .hgt=6
9887 .len=9
9888. npx=-4
9889 .scrv
9890 .npx=-4
9891 .scrv
     .atdv
9893 go to 1337 (ENEMY_REENTRY) 
9894 go to 8887 (POINTLESS_REDIRECT_TO_INC_SCORE_AND_LOOP)


9895 save "sqij!" line 1
     randomize usr 0
9999 (ANOTHER_POINTLESS_REDIRECT_TO_INC_SCORE_AND_LOOP) go to 8887 (POINTLESS_REDIRECT_TO_INC_SCORE_AND_LOOP)