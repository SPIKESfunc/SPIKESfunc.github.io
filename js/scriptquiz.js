function loadingScreen() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.visibility = "visible";
  document.getElementById("page").style.position = "relative";
}

var drugsmaster =[
    {name:"Pirenzepine",receptors: [8.2,6.5,6.9,7.4,7.2]},
    {name:"Methotramine",receptors: [6.7,7.7,6.0,7.0,6.3]},
    {name:"Darifenacin",receptors: [7.8,7.0,8.8,7.7,8.0]},
    {name:"MT-3",receptors:[6.7,5.9,6.0,8.1,6.0]},
    {name:"S-Secoverine",receptors:[8.0,7.9,7.7,7.7,6.5]},
    {name:"Solifenacin",receptors:[7.6,6.8,7.9,7.0,7.5]},
    {name:"DAU-5884",receptors:[8.9,7.1,8.9,8.5,8.1]},
    {name:"PD102807",receptors:[5.79,5.78,6.42,7.56,4.74]}
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

var op = ["Methotramine","DAU-5884"] 

var drugs;
var option;
var recep;
var ant;
var example;
var examples = ['e1', 'e2', 'e3'];
var plotPoints;
var antagonists;

$(document).ready(function () {
	$("#feedbackcontainer").hide();
	$('#incorrectFeedback').hide()
	$('#correctFeedback').hide()
	selectDrugs();
	PlotQuizSchild("quizschild")
	PlotQuizSchild("actualanswer")
	PlotQuizSchild("correctanswer")
	
})

function selectDrugs(){
	drugs = [];
	
	option = rand(2);
	var options=[
		{name:"m1", choices: ["Pirenzepine","Darifenacin","MT-3","S-Secoverine","PD102807",op[option]]},
		{name:"m2", choices: ["Pirenzepine","Darifenacin","MT-3","S-Secoverine","PD102807",op[option]]},
		{name:"m3", choices: ["Pirenzepine","PD102807","Darifenacin","MT-3","S-Secoverine","Methotramine"]},
		{name:"m4", choices: ["Pirenzepine","Darifenacin","MT-3","PD102807","S-Secoverine",op[option]]},
		{name:"m5", choices: ["Pirenzepine","Darifenacin","MT-3","S-Secoverine","PD102807",op[option]]}
	]
	//Choose receptor
	recep = rand(5);

	//Choose ant3321 version
	ant = rand(4);
	example = rand(3);
	
	//Get a random error adjustment from 1-5%
	var error=[];
	var i;
	for(i=0; i<4; i++){
	var  err = ((+ (Math.random() * 5) + 1)/100 + 1)
	error[i] = Math.round(err * 100) / 100; //round to 2 dp.
	}

	//Determine which antagonists are to be used
	var j=0;
	var l=0;
	antagonists = options[recep].choices.slice()

	while(antagonists.length > 4){
		var t = rand(antagonists.length)
		antagonists.splice(t,1);
		if(antagonists.length==4){
			if(recep==0){
				if((antagonists.includes("Pirenzepine")||antagonists.includes(op[option]))&&(antagonists.includes("Pirenzepine")||antagonists.includes("Darifenacin"))&&(antagonists.includes("MT-3")||antagonists.includes("PD102807"))){
					break;
				}
			}
			if(recep==1){
				if((antagonists.includes("Pirenzepine")||antagonists.includes(op[option]))&&(antagonists.includes(op[option])||antagonists.includes("Darifenacin"))&&(antagonists.includes("MT-3")||antagonists.includes("PD102807"))){
					break;
				}
			}
			if(recep==2){
				if((antagonists.includes("Pirenzepine")||antagonists.includes("Darifenacin"))&&(antagonists.includes("Methotramine")||antagonists.includes("Darifenacin"))&&(antagonists.includes("S-Secoverine")||antagonists.includes("PD102807"))){
					break;
				}
			}
			if(recep==3){
				if((antagonists.includes("MT-3")||antagonists.includes("PD102807"))){
					break;
				}
			}
			if(recep==4){
				if((antagonists.includes("S-Secoverine")||antagonists.includes("PD102807"))){
					break;
				}
			}
			antagonists = options[recep].choices.slice()
		}
	}

	while(j<8){
		if(antagonists.includes(drugsmaster[j].name)){
			drugs[l]=drugsmaster[j]
			l+=1
		}
		j+=1
	}

	shuffle(drugs)

	plotPoints = [	
				[[0,0,0],[0,0,0]],
				[[0,0,0],[0,0,0]],
				[[0,0,0],[0,0,0]],
				[[0],[0]],
				[[0,0,0],[0,0,0]],
				];

	for(i=0;i<3;i++){
	lb1 = 1-drugs[i].receptors[recep];
	lb2 = 2-drugs[i].receptors[recep];
	lb3 = 3-drugs[i].receptors[recep];
	
	lDR1 = (drugs[i].receptors[recep]+lb1) * error[i]; //add error adjustment, keep gradient = to 1
	lDR2 = (drugs[i].receptors[recep]+lb2) * error[i] - (error[i]-1); 
	lDR3 = (drugs[i].receptors[recep]+lb3) * error[i] - 2*(error[i]-1);
	
	plotPoints[i] = [[lb1,lb2,lb3],[lDR1,lDR2,lDR3]]
	//plotPoints[i] = [[lb3,lb2,lb1,-1+lb1],[lDR3,lDR2,lDR1,0]]
	}
	lb = 1.5-drugs[3].receptors[recep];
	lDR = (drugs[3].receptors[recep]+lb) * error[3];
	plotPoints[3]=[[lb],[lDR]];
	//plotPoints[3]=[[lb, -1.5+lb],[lDR, 0]]

	plotPoints[4] = [Ant3321[ant][examples[example]][0],Ant3321[ant][examples[example]][1]];

	document.getElementById("drug1").innerHTML=drugs[0].name;
	document.getElementById("drug2").innerHTML=drugs[1].name;
	document.getElementById("drug3").innerHTML=drugs[2].name;
	document.getElementById("drug4").innerHTML=drugs[3].name;
	document.getElementById("drug5").innerHTML="Ant3321";


	drugs[4] = {name: "Ant3321"};			

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

function markAnswers(){
	var ans = $('form').serializeArray();
	if(ans.length < 22){
		alert("You have not filled out Question 3")
		return 1;
	}
	//antFeedback()
	$("#quizcontainer").hide();
	$('#feedbackcontainer').show();
	PlotQuizSchild("actualanswer")
	console.log(ans)
	if(ans[20].value == Ant3321[ant].type){
		console.log("drug 5 reason is correct")
		var reason = "Well done! You got the correct reason for why the Schild plot for ant3321 was nonlinear!";
		antFeedback(reason)
	}
	else{
		console.log("drug5reason is wrong")
		var reason = "Your reason for why the Schild plot for ant3321 is nonlinear was incorrect. This was the correct answer:";
		antFeedback(reason)
	}
	//if(ans[21].value == "m"+(recep+1)){
	if(ans[21].value == recep){
		$('#incorrectFeedback').hide()
		$('#correctFeedback').show()
		document.getElementById("recCorrectFeedback").innerHTML = "Your answer of (m" + (recep + 1) + ") was correct and produced this plot:";

	}
	else{
		console.log("receptor is wrong")
		$('#correctFeedback').hide()
		$('#incorrectFeedback').show()
		plotAnswerSchild("youranswer",ans[21].value)
		document.getElementById("recAnswerFeedback").innerHTML = "The receptor you chose (m" + (parseInt(ans[21].value)+1) + "), is incorrect, and produces this plot:";
		document.getElementById("recIncorrectFeedback").innerHTML = "The correct answer of (m" + (recep + 1) + ") produced this plot:";


	}
	
}

function quizReturn(){
	$('#feedbackcontainer').hide();
	$("#quizcontainer").show();
	$('#incorrectFeedback').hide()
	$('#correctFeedback').hide()
	selectDrugs();
	PlotQuizSchild("quizschild")
	PlotQuizSchild("actualanswer")
	PlotQuizSchild("correctanswer")
}

// Schlid

var animation = {
	transition: {
		duration: 100,
		easing: "cubic-in-out"
	}
}

function plotAnswerSchild(chart,rec){
	console.log("red is"+rec)
	intrec = parseInt(rec)
	var layout = {
		xaxis:{
			title:"Log [ Antagonist ] (log M)",
			showline: true,
			range:[-8.0,-2.0],
		},
		yaxis:{
			title:"Log(DR-1)",
			showline: true,
			range:[0.0,4.0],
		},
	}
	var data=[];
	ansPlotPoints = [	
				[[0,0,0],[0,0,0]],
				[[0,0,0],[0,0,0]],
				[[0,0,0],[0,0,0]],
				[[0],[0]]
				];
	for(i=0;i<3;i++){
		lb1 = 1-drugs[i].receptors[rec];
		lb2 = 2-drugs[i].receptors[rec];
		lb3 = 3-drugs[i].receptors[rec];
		
		lDR1 = drugs[i].receptors[rec]+lb1;
		lDR2 = drugs[i].receptors[rec]+lb2;
		lDR3 = drugs[i].receptors[rec]+lb3;
		
		ansPlotPoints[i] = [[lb1,lb2,lb3],[lDR1,lDR2,lDR3]]
		//ansPlotPoints[i] = [[lb3,lb2,lb1,-1+lb1],[lDR3,lDR2,lDR1,0]]
	}
	lb = 1.5-drugs[3].receptors[rec];
	lDR = drugs[3].receptors[rec]+lb;
	ansPlotPoints[3]=[[lb],[lDR]]
	//ansPlotPoints[3]=[[lb, -1.5+lb],[lDR, 0]]

	Plotly.newPlot(chart,data,layout, {responsive: true})
	//var data = []
	var jj
	for(jj = 0;jj<4;jj++){
		var data = []
		var eqn1 = {
			x: ansPlotPoints[jj][0],
			y: ansPlotPoints[jj][1],
			name: drugs[jj].name,
			mode: 'lines+markers',
			line: {
				width: 3
			}
		}
		data.push(eqn1);
		//console.log(data)
		Plotly.plot(chart,data,layout, {responsive: true})
	}
}

function PlotQuizSchild(chart){
	var layout = {
		xaxis:{
			title:"Log [ Antagonist ] (log M)",
			showline: true,
			range:[-8.0,-2.0],
			dtick: 0.25,
			ticks: 'outside',
			tickwidth:4
		},
		yaxis:{
			title:"Log(DR-1)",
			showline: true,
			range:[0.0,4.0],
		},
	}
	var data = [];
	Plotly.newPlot(chart,data,layout, {responsive: true})
	//var data = []
	var jj
	for(jj = 0;jj<5;jj++){
		var data = []
		var eqn1 = {
			x: plotPoints[jj][0],
			y: plotPoints[jj][1],
			name: drugs[jj].name,
			mode: 'lines+markers',
			line: {
				width: 3
			}
		}
		data.push(eqn1);
		//console.log(data)
		Plotly.plot(chart,data,layout, {responsive: true})
	}
	document.querySelector('[data-title="Autoscale"]').click()
	
}

function antFeedback(reason){
	var inequality
	var ant3321Feedback	
	switch(Ant3321[ant].type) {
		case "allosteric":
			inequality = "<";
			ant3321Feedback = "<b>allosteric antagonist.</b>";
			break;
		case "irreversible":
			inequality = ">";
			ant3321Feedback = "<b>irreversible antagonist.</b>" 
			break;
		case "toxic":
			inequality = ">";
			ant3321Feedback = "<b>antagonist that produces toxicity at high concentrations.</b>" 
			break;
		case "saturable":
			inequality = "<";
			ant3321Feedback = "<b>antagonist that is the substrate of a saturable uptake process.</b>"
			break;

	} 
	document.getElementById("antFeedback").innerHTML = reason + "<br>The Schild plot for ant3321 is nonlinear with slope " + inequality + " 1.0, which is expected for an " + ant3321Feedback;

}

