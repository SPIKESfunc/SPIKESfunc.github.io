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
/*
Old:
var Ant3311 =[
	{type:"allosteric",e1:[[-7.0,-6.0,-5.0],[0.5,1.5,1.8]],e2:[[-6.5,-5.5,-4.5],[1.0,2.0,2.3]],e3:[[-6.0,-5.0,-4.0],[1.5,2.3,2.6]]},
	{type:"irreversible",e1:[[-7.0,-6.5,-6.0],[0.5,1.5,2.5]],e2:[[-6.5,-6.0,-5.5],[1.0,2.0,3.4]],e3:[[-6.0,-5.5,-5.0],[1.5,2.7,4.0]]},
	{type:"toxic",e1:[[-7.0,-6.0,-5.0],[0.5,1.5,3.0]],e2:[[-6.5,-5.5,-4.5],[1.0,2.0,3.5]],e3:[[-6.0,-5.0,-4.0],[1.5,2.5,4.0]]},
	{type:"saturable",e1:[[-7.0,-6.0,-5.0],[0.5,1.2,1.9]],e2:[[-6.5,-5.5,-4.5],[1.0,1.7,2.4]],e3:[[-6.0,-7.0,-5.0],[1.5,2.2,2.9]]}
]
*/
var Ant3311 =[
	{type:"allosteric",e1:[[-9.0,-8.0,-7.0],[0.0,1.0,1.4]],e2:[[-8.5,-7.5,-6.5],[0.0,1.0,1.4]],e3:[[-8.0,-7.0,-6.0],[0.0,1.0,1.4]]},
	{type:"irreversible",e1:[[-9.0,-8.5,-8.0],[0.0,1.0,2.0]],e2:[[-8.5,-8.0,-7.5],[0.0,1.0,2.0]],e3:[[-8.0,-7.5,-7.0],[0.0,1.0,2.0]]},
	{type:"toxic",e1:[[-9.0,-8.0,-7.0],[0.0,1.0,2.6]],e2:[[-8.5,-7.5,-6.5],[0.0,1.0,2.6]],e3:[[-8.0,-7.0,-6.0],[0.0,1.0,2.6]]},
	{type:"substrate",e1:[[-9.0,-8.0,-7.0],[0.0,1.5,2.5]],e2:[[-8.5,-7.5,-6.5],[0.0,1.5,2.5]],e3:[[-8.0,-7.0,-6.0],[0.0,1.5,2.5]]}
]

//saving the default value of numboxes

default_value = $('#drug1pa2').val();

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
	PlotQuizSchild("quizschild",0.2, false)
	//document.querySelector('[data-title="Autoscale"]').click();
	PlotQuizSchild("actualanswer",1.0, true)
	PlotQuizSchild("correctanswer",1.0, true)
	document.getElementById("loader").style.display = "none";
  	document.getElementById("page").style.visibility = "visible";
  	document.getElementById("page").style.position = "relative";
  	document.getElementById("footer").style.visibility = "visible";
	
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

	//Choose ant3311 version
	ant = rand(4);
	example = rand(3);
	
	//Get a random error adjustment from 1-5%
	var error=[];
	var i;
	err = [0.2,0.1,-0.1,-0.2];
	for(i=0; i<4; i++){
		ran = rand(4);
		error[i] = err[ran];
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

	for(i=0;i<4;i++){
		lb1 = 0.5-drugs[i].receptors[recep];
		lb2 = 1.5-drugs[i].receptors[recep];
		lb3 = 2.5-drugs[i].receptors[recep];
	
		if(drugs[i].name == "Darifenacin"){
			lDR1 = (drugs[i].receptors[recep]+lb1); //add error adjustment, keep gradient = to 1
			lDR2 = (drugs[i].receptors[recep]+lb2);// - (error[i]-1); 
			lDR3 = (drugs[i].receptors[recep]+lb3);// - 2*(error[i]-1);

			plotPoints[i] = [[lb3,lb2,lb1],[lDR3,lDR2,lDR1]]
		}
		else{
			lDR1 = (drugs[i].receptors[recep]+lb1) + error[i]; //add error adjustment, keep gradient = to 1
			lDR2 = (drugs[i].receptors[recep]+lb2) + error[i];// - (error[i]-1); 
			lDR3 = (drugs[i].receptors[recep]+lb3) + error[i];// - 2*(error[i]-1);

			plotPoints[i] = [[lb3,lb2,lb1],[lDR3,lDR2,lDR1]]
		}
	}


	plotPoints[4] = [Ant3311[ant][examples[example]][0],Ant3311[ant][examples[example]][1]];

	for(var i = 0;i < 4; i++){
		console.log(drugs)
		document.getElementById("drug"+(i+1)).innerHTML=drugs[i].name;
		for(var j = 0; j < 5;j++){
			if(drugs[i].receptors[j].toString().length === 1) document.getElementById("drug"+(i+1)+"log"+(j+1)).innerHTML=drugs[i].receptors[j] + ".0";
			else document.getElementById("drug"+(i+1)+"log"+(j+1)).innerHTML=(drugs[i].receptors[j]).toFixed(1);
		}
	}
	/*document.getElementById("drug1").innerHTML=drugs[0].name;
	document.getElementById("drug2").innerHTML=drugs[1].name;
	document.getElementById("drug3").innerHTML=drugs[2].name;
	document.getElementById("drug4").innerHTML=drugs[3].name;*/
	document.getElementById("drug5").innerHTML="Ant3311";


	console.log(drugs);


	drugs[4] = {name: "Ant3311"};			

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
	var l;
	var answer1 = 1;
	var answer2 = 0;
	for(l=0;l<ans.length;l++){
		if(ans[l].name=="drug5reason"){
			if(ans[l].value == ""){
					answer1 = 0;
				}
			}
		if(ans[l].name=="receptor"){
			answer2 = 1;
		}
	}
	if(answer1 == 0 && answer2 == 0){
		alert("Please provide an answer for why the Ant3311 is non-linear and which receptor is mitigating the response")
		return 1;
	}
	if(answer1 == 0){
		alert("Please select a reason for the Ant3311")
		return 1;
	}
	if(answer2 == 0){
		alert("Please select your choice of receptor which is mitigating the response")
		return 1;
	}
	//antFeedback()
	$("#quizcontainer").hide();
	$('#feedbackcontainer').show();
	PlotQuizSchild("actualanswer",1.0, true)
	console.log(ans[ans.length-2].value + "," + Ant3311[ant].type)
	if(ans[ans.length-2].value == Ant3311[ant].type){
		var reason = "Well done! You got the correct reason for why the Schild plot for Ant3311 was nonlinear!";
		antFeedback(reason)
	}
	else{
		var reason = "Your reason for why the Schild plot for Ant3311 is nonlinear was incorrect. This was the correct answer:";
		antFeedback(reason)
	}
	if(ans[ans.length-1].value == recep){
		$('#incorrectFeedback').hide()
		$('#correctFeedback').show()
		document.getElementById("recCorrectFeedback").innerHTML = "Your answer of (M" + (recep + 1) + ") was correct and produced this plot:";

	}
	else{
		$('#correctFeedback').hide()
		$('#incorrectFeedback').show()
		plotAnswerSchild("youranswer",ans[ans.length-1].value)
		document.getElementById("recAnswerFeedback").innerHTML = "The receptor you chose (M" + (parseInt(ans[ans.length-1].value)+1) + "), is incorrect, and produces this plot:";
		document.getElementById("recIncorrectFeedback").innerHTML = "The correct answer of (M" + (recep + 1) + ") produced this plot:";


	}
	
}

function resetInputs(){
	$('#quizsection').find('input[type=checkbox]:checked').prop('checked',false);
	$('#drug1shape').get(0).selectedIndex = 0;
	$('#drug1gradient').get(0).selectedIndex = 0;
	$('#drug1equal').get(0).selectedIndex = 0;
	$('#drug2shape').get(0).selectedIndex = 0;
	$('#drug2gradient').get(0).selectedIndex = 0;
	$('#drug2equal').get(0).selectedIndex = 0;
	$('#drug3shape').get(0).selectedIndex = 0;
	$('#drug3gradient').get(0).selectedIndex = 0;
	$('#drug3equal').get(0).selectedIndex = 0;
	$('#drug4shape').get(0).selectedIndex = 0;
	$('#drug4gradient').get(0).selectedIndex = 0;
	$('#drug4equal').get(0).selectedIndex = 0;
	$('#drug5shape').get(0).selectedIndex = 0;
	$('#drug5gradient').get(0).selectedIndex = 0;
	$('#drug5equal').get(0).selectedIndex = 0;
	$('#drug5reason').get(0).selectedIndex = 0;
	$('#drug1pa2').val(default_value);
	$('#drug2pa2').val(default_value);
	$('#drug3pa2').val(default_value);
	$('#drug4pa2').val(default_value);
	$('#drug5pa2').val(default_value);
	$('#solution').find('input[type=radio]:checked').prop('checked',false);
}

function quizReturn(){
	$('#feedbackcontainer').hide();
	$("#quizcontainer").show();
	$('#incorrectFeedback').hide()
	$('#correctFeedback').hide()
	PlotQuizSchild("quizschild",0.2, false)
	PlotQuizSchild("actualanswer",1.0, true)
	PlotQuizSchild("correctanswer",1.0, true)
	//document.querySelector('[data-title="Autoscale"]').click();
}

function quizReset(){
	$('#feedbackcontainer').hide();
	$("#quizcontainer").show();
	$('#incorrectFeedback').hide()
	$('#correctFeedback').hide()
	selectDrugs();
	resetInputs();
	PlotQuizSchild("quizschild",0.2, false)
	PlotQuizSchild("actualanswer",1.0, true)
	PlotQuizSchild("correctanswer",1.0, true)
	//document.querySelector('[data-title="Autoscale"]').click();
}

// Schlid

var animation = {
	transition: {
        duration: 0,
        easing: "cubic-in-out"
    },
    frame: {
        duration: 0,
        redraw: false,
 }
}

function plotAnswerSchild(chart, rec){
	intrec = parseInt(rec)
	var layout = {
		xaxis:{
			title:"Log [ Antagonist ] (log M)",
			showline: true,
			range:[-9.0,-2.0],
			tickvals: ["-9.0","-8.9","-8.8","-8.7","-8.6","-8.5","-8.4","-8.3","-8.2","-8.1","-8.0","-7.9","-7.8","-7.7",
"-7.6","-7.5","-7.4","-7.3","-7.2","-7.1","-7.0","-6.9","-6.8","-6.7","-6.6","-6.5","-6.4","-6.3","-6.2","-6.1","-6.0","-5.9","-5.8",
"-5.7","-5.6","-5.5","-5.4","-5.3","-5.2","-5.1","-5.0","-4.9","-4.8","-4.7","-4.6","-4.5","-4.4","-4.3","-4.2","-4.1","-4.0","-3.9",
"-3.8","-3.7","-3.6","-3.5","-3.4","-3.3","-3.2","-3.1","-3.0","-2.9","-2.8","-2.7","-2.6","-2.5","-2.4","-2.3","-2.2","-2.1","-2.0"],
			ticktext: ["-9","","","","","-8.5","","","","","-8","","","","","-7.5","","","","","-7","","","","","-6.5","","","","","-6",
"","","","","-5.5","","","","","-5","","","","","-4.5","","","","","-4","","","","","-3.5","","","","","-3","","","","","-2.5","","","",
"","-2"],
			ticks: 'outside',
			autorange: true
		},
		yaxis:{
			title:"Log(DR-1)",
			showline: true,
			range:[0.0,5.0],
			autorange: true
		},
		showlegend: true
	}
	var data=[];
	ansPlotPoints = [	
				[[0,0,0],[0,0,0]],
				[[0,0,0],[0,0,0]],
				[[0,0,0],[0,0,0]],
				[[0],[0]]
				];
	for(i=0;i<4;i++){
		lb1 = 0.5-drugs[i].receptors[rec];
		lb2 = 1.5-drugs[i].receptors[rec];
		lb3 = 2.5-drugs[i].receptors[rec];
		
		lDR1 = drugs[i].receptors[rec]+lb1;
		lDR2 = drugs[i].receptors[rec]+lb2;
		lDR3 = drugs[i].receptors[rec]+lb3;
		
		ansPlotPoints[i] = [[lb3,lb2,lb1],[lDR3,lDR2,lDR1]]
	}

	Plotly.newPlot(chart,data,layout, {responsive: true})
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
		Plotly.plot(chart,data,layout, {responsive: true})
	}
}

function PlotQuizSchild(chart, ticksize, show){
	var layout = {
		xaxis:{
			title:"Log [ Antagonist ] (log M)",
			showline: true,
			range:[-9.0,-2.0],
			tickvals: ["-9.0","-8.9","-8.8","-8.7","-8.6","-8.5","-8.4","-8.3","-8.2","-8.1","-8.0","-7.9","-7.8","-7.7",
"-7.6","-7.5","-7.4","-7.3","-7.2","-7.1","-7.0","-6.9","-6.8","-6.7","-6.6","-6.5","-6.4","-6.3","-6.2","-6.1","-6.0","-5.9","-5.8",
"-5.7","-5.6","-5.5","-5.4","-5.3","-5.2","-5.1","-5.0","-4.9","-4.8","-4.7","-4.6","-4.5","-4.4","-4.3","-4.2","-4.1","-4.0","-3.9",
"-3.8","-3.7","-3.6","-3.5","-3.4","-3.3","-3.2","-3.1","-3.0","-2.9","-2.8","-2.7","-2.6","-2.5","-2.4","-2.3","-2.2","-2.1","-2.0"],
			ticktext: ["-9","","","","","-8.5","","","","","-8","","","","","-7.5","","","","","-7","","","","","-6.5","","","","","-6",
"","","","","-5.5","","","","","-5","","","","","-4.5","","","","","-4","","","","","-3.5","","","","","-3","","","","","-2.5","","","",
"","-2"],
			ticks: 'outside',
			autorange: true
		},
		yaxis:{
			title:"Log(DR-1)",
			showline: true,
			range:[0.0,5.0],
			autorange: true
		},
		showlegend: show
	}
	var data = [];
	Plotly.newPlot(chart,data,layout, {responsive: true})
	var jj
	for(jj = 0;jj<5;jj++){
		var data = []
		var eqn1 = {
			x: plotPoints[jj][0],
			y: plotPoints[jj][1],
			mode: 'lines+markers',
			name: drugs[jj].name,
			line: {
				width: 3
			}
		}
		switch(jj){
			case 0:
				document.getElementById("drug"+(jj+1)).style.color='#1f77b4';
				document.getElementById("drug"+(jj+1)+"logs").style.color='#1f77b4';
				break;
			case 1:
				document.getElementById("drug"+(jj+1)).style.color='#ff7f0e';
				document.getElementById("drug"+(jj+1)+"logs").style.color='#ff7f0e';
				break;
			case 2:
				document.getElementById("drug"+(jj+1)).style.color='#2ca02c';
				document.getElementById("drug"+(jj+1)+"logs").style.color='#2ca02c';
				break;
			case 3:
				document.getElementById("drug"+(jj+1)).style.color='#d62728';
				document.getElementById("drug"+(jj+1)+"logs").style.color='#d62728';
				break;
			case 4:
				document.getElementById("drug"+(jj+1)).style.color='#9467bd';
				break;
		}
		data.push(eqn1);
		Plotly.plot(chart,data,layout, {responsive: true})
	}
	
}

function antFeedback(reason){
	var inequality
	var ant3311Feedback	
	var nonlinearScript
	switch(Ant3311[ant].type) {
		case "allosteric":
			inequality = "<";
			ant3311Feedback = '<a href="nonlinear.html#detailed6" target="_blank">allosteric antagonist.</a>';
			nonlinearScript = "<br>The Schild plot for Ant3311 is nonlinear with slope ";
			break;
		case "irreversible":
			inequality = ">";
			ant3311Feedback = '<a href="nonlinear.html#detailed5" target="_blank">irreversible antagonist.</a>';
			nonlinearScript = "<br>The Schild plot for Ant3311 has slope ";
			break;
		case "toxic":
			inequality = ">";
			ant3311Feedback = '<a href="nonlinear.html#detailed4" target="_blank">antagonist that produces toxicity at high concentrations.</a>'; 
			nonlinearScript = "<br>The Schild plot for Ant3311 is nonlinear with slope ";
			break;
		case "substrate":
			inequality = ">";
			ant3311Feedback = '<a href="nonlinear.html#detailed2" target="_blank">antagonist that is the substrate of a substrate uptake process.</a>';
			nonlinearScript = "<br>The Schild plot for Ant3311 is nonlinear with slope ";
			break;

	} 
	document.getElementById("antFeedback").innerHTML = reason + nonlinearScript + inequality + " 1.0, which is expected for an " + ant3311Feedback;
	document.getElementById("antFeedback1").innerHTML = document.getElementById("antFeedback").innerHTML;
}

function showInstructionsQuiz() {
    $('#instructions').modal('show');
    $('.nav-tabs a[href="#quizz"]').tab('show');
};