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

//Array of objects that contain coordinates for each type. e1,e2,e3 correspond to different examples.
// e1[0] = x, e1[1] = y 
var Ant3321 =[
	{type:"allosteric",e1:[[-7.0,-6.0,-5.0],[0.5,1.5,1.8]],e2:[[-6.5,-5.5,-4.5],[1.0,2.0,2.3]],e3:[[-6.0,-5.0,-4.0],[1.5,2.3,2.6]]},
	{type:"irreversible",e1:[[-7.0,-6.5,-6.0],[0.5,1.5,2.5]],e2:[[-6.5,-6.0,-5.5],[1.0,2.0,3.4]],e3:[[-6.0,-5.5,-5.0],[1.5,2.7,4.0]]},
	{type:"toxic",e1:[[-7.0,-6.0,-5.0],[0.5,1.5,3.0]],e2:[[-6.5,-5.5,-4.5],[1.0,2.0,3.5]],e3:[[-6.0,-5.0,-4.0],[1.5,2.5,4.0]]},
	{type:"saturable",e1:[[-7.0,-6.0,-5.0],[0.5,1.2,1.9]],e2:[[-6.5,-5.5,-4.5],[1.0,1.7,2.4]],e3:[[-6.0,-7.0,-5.0],[1.5,2.2,2.9]]}
]
// for ^^, make sure that we add the Feedback comment into that. 

//Choose receptor subtype
receptor = rand(5) + 1;

// My attempt at concatenating. Did a very brief test and it didn't seem to throw an error.
// Might still not work, however.
str_receptor = receptor.toString();
mX = "m" + str_receptor;


//Determine which antagonists are to be used
var i;

for(i=0;i<5;i++){
    var t = rand(drugs.length)
    drugs.splice(t,1);
    //Remove drugs[t] from array, after this is complete remaining drugs will be graphed, with drugs[4] only having a dot on schild
}

// See line 74.
shuffle(drugs);

// Array of points is the best that I can think of at the moment, will probably change later
// goddamnit why doesnt js just have tuples
plotPoints = [	[[0,0,0],[0,0,0]],
				[[0,0,0],[0,0,0]],
				[[0,0,0],[0,0,0]],
				[0,0],
				[[0,0,0],[0,0,0]],
				];
				
// format for ^^ is 0 = drug[0] ... 2 = drug[2], 3 = point (drug[3]), 4 = Ant3321



// Looping over drugs. Basically dong slide 52

for(i=0;i<3;i++){
	lb1 = 1-drugs[i].mX;
	lb2 = 2-drugs[i].mX;
	lb3 = 3-drugs[i].mX;
	
	lDR1 = drugs[i].mX+lb1;
	lDR2 = drugs[i].mX+lb2;
	lDR3 = drugs[i].mX+lb3;
	
	plotPoints[i] = [[lb1,lb2,lb3],[lDR1,lDR2,lDR3]]
}




//Shuffles the array, to remove the slight bias towards the final element of drugs(initial) being drugs[4]
//Also because it's impossible for drug[0] to become drug[4] without this step.
//Using the modern algorithm of the Fisher-Yates Shuffle

// Basically ripped from the pseudocode from wikipedia, but I have a feeling it will throw an index out of range
// -- to shuffle an array a of n elements (indices 0..n-1):
// for i from 0 to n-2 do
//     j <- random integer such that i <= j < n
//	   exchange a[i] and a[j]
//

function shuffle(arrayOfElements){
	for(i=0;i<arrayOfElements.length-2;i++){
		var j = rand(arrayOfElements.length - i);
		var temp = arrayOfElements[i];
		arrayOfElements[i] = arrayOfElements[j];
		arrayOfElements[j] = temp;
	}
}

//Returns value between 0 and maxval-1
function rand(maxval){
    var ret = Math.floor((Math.random()*maxval));
    return ret;
}












// Schlid

// Reading over the other graphs code, not 100% sure atm how it's working. Will go over it later

var animation = {
	transition: {
		duration: 100,
		easing: "cubic-in-out"
	}
}

function PlotAndPray(chart){
	var layout = {
		xaxis:{
			title:"Log [ Antagonist ] (log M)",
			showline: true,
			range:[-10.0,-4.0],
		},
		yaxis:{
			title:"Log(DR-1)",
			showline: true,
			range:[0.0,5.0],
		},
	}
	
	var data = []
	// It's probably going to fail here because I'm not passing plotPoints in
	var eqn1 = {
		x: plotPoints[0][0],
		y: plotPoints[0][1],
		mode: 'lines',
		line: {
			width: 3
		}
	}
	data.push(eqn1);
