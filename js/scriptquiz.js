//Array of objects that contain -log Ki values for each receptor subtype
var drugs =[
    {name:"Atropine",m1:9.0,m2:8.8,m3:9.3,m4:8.9,m5:9.2},
    {name:"Pirenzepine",m1:8.2,m2:6.5,m3:6.9,m4:7.4,m5:7.2},
    {name:"Methotramine",m1:6.7,m2:7.7,m3:6.0,m4:7.0,m5:6.3},
    {name:"Darifenacin",m1:7.8,m2:7.0,m3:8.8,m4:7.7,m5:8.0},
    {name:"MT-3",m1:6.7,m2:5.9,m3:6.0,m4:8.1,m5:6.0},
    {name:"S-Secoverine",m1:8.0,m2:7.9,m3:7.7,m4:7.7,m5:6.5},
    {name:"Solifenacin",m1:7.6,m2:6.8,m3:7.9,m4:7.0,m5:7.5},
    {name:"DAU-5884",m1:8.9,m2:7.1,m3:8.9,m4:8.5,m5:8.1}
]

//Choose receptor subtype
receptor = rand(5) + 1;

//Determine which antagonists are to be used
var i;
for(i=0;i<5;i++){
    var t = rand(drugs.length)
    //TODO
    drugs.splice(t,1);
    //Remove drugs[t] from array, after this is complete remaining drugs will be graphed, with drugs[4] only having a dot on schild
}



//Returns value between 0 and maxval-1
function rand(maxval){
    var ret = Math.floor((Math.random()*maxval));
    return ret;
}

