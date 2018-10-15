var affago = document.getElementById("affslider").defaultValue;
var effago = document.getElementById("effslider").defaultValue;
var denago = document.getElementById("denslider").defaultValue;
var efficago = document.getElementById("efficislider").defaultValue;

//var calc50aff;

var animation = {
    transition: {
        duration: 100,
        easing: "cubic-in-out"
    }
}

$(document).ready(function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.visibility = "visible";
  document.getElementById("page").style.position = "relative";
  document.getElementById("footer").style.visibility = "visible";
})

function calc50(lineData){

    var halfMaxEffect = Math.max.apply(Math, lineData[1])/2; //get the 50% value
    //var halfMaxEffect = lineData[1][1000]/2
	console.log("halfmaxeffect" + halfMaxEffect);
	var maxEffectAgoIndex = lineData[1].findIndex(function(number) { //get the x-index for the 50% value
	    return number >= halfMaxEffect;
    });
    console.log("maxeffectagoindex" + maxEffectAgoIndex);
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    console.log("halfagoeffect" + halfAgoEffect)
    var agoret = [[halfAgoEffect], [halfMaxEffect]];
    console.log("agoret"+ agoret)
	return agoret; //return x, y

}

function graphAlert(div, property){
    if(property == "aff"){
    document.getElementById(div).innerHTML = "Affinity is required for an agonist to bind to receptors and induce an effect – when agonist affinity = 0, agonist-induced effect = 0"
    }
    if(property == "eff"){
    document.getElementById(div).innerHTML = "Intrinsic efficacy is required for an agonist to activate a receptor and induce an effect – when &#949 = 0, agonist-induced effect = 0"
    }
    if(property == "den"){
    document.getElementById(div).innerHTML = "An agonist cannot induce an effect if the cell contains no functional receptors for the agonist – when R<sub>T</sub> = 0, agonist-induced effect = 0"
    }
    if(property == "effic"){
    document.getElementById(div).innerHTML = "An agonist cannot induce an effect if the cell contains no functioning signalling pathways that link the activated receptor to the observed effect – when <i>f</i> = 0, agonist-induced effect = 0"
    }
}

function graphRemoveAlert(div){
    //Determine which graph to remove alert from
    document.getElementById(div).innerHTML = ""
}

function checkSliderMinAgo(){
    let ret = false;
    if(document.getElementById("affslider").value == 4){
        ret = true
    }
    if(document.getElementById("effslider").value == -0.3){
        ret = true
    }
    if(document.getElementById("denslider").value == -0.3){
        ret = true
    }
    if(document.getElementById("efficislider").value == -0.3){
        ret = true
    }
    return ret
}

function updateAffinity(value){
    affago = value;
    if(checkSliderMinAgo()){
        Plotly.restyle("agonist", 'visible', false)
        graphAlert("agoalert", "aff")
    }
    else{
        graphRemoveAlert("agoalert")
        Plotly.restyle("agonist", 'visible', true)
        lineData = calcLines(affago,effago,denago,efficago);
        calc50aff = calc50(lineData); //not calling properly
        console.log(calc50aff[0]); //getting undefined here!

        /*var graph = {
            y: lineData[1],
            traces:[0]
        }
        newData.push(graph);*/
        
        //I'm doing something wrong if I try just place lineData into newData, below works though
        //Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: [calc50aff]}], traces: [0,1], layout: {}},animation)

        Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: calc50aff[0], y: calc50aff[1]}], traces: [0,1], layout: {}},animation)

    }
} 

function updateEfficacy(value){
    effago = value;
    if(checkSliderMinAgo()){
        Plotly.restyle("agonist", 'visible', false)
        graphAlert("agoalert","eff")
    }
    else{
        graphRemoveAlert("agoalert")
        Plotly.restyle("agonist", 'visible', true)
        lineData = calcLines(affago,effago,denago,efficago);
        calc50aff = calc50(lineData);

        //I'm doing something wrong if I try just place lineData into newData, below works though
        Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: calc50aff[0], y: calc50aff[1]}], traces: [0,1], layout: {}},animation)
    }
} 

function updateDensity(value){
    denago = value;
    if(checkSliderMinAgo()){
        Plotly.restyle("agonist", 'visible', false)
        graphAlert("agoalert","den")
    }
    else{
        graphRemoveAlert("agoalert")
        Plotly.restyle("agonist", 'visible', true)
        lineData = calcLines(affago,effago,denago,efficago);
        calc50aff = calc50(lineData);

        //I'm doing something wrong if I try just place lineData into newData, below works though
        Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: calc50aff[0], y: calc50aff[1]}], traces: [0,1], layout: {}},animation)
    }
} 

function updateEfficiency(value){
    efficago = value;
    if(checkSliderMinAgo()){
        Plotly.restyle("agonist", 'visible', false)
        graphAlert("agoalert","effic")
    }
    else{
        graphRemoveAlert("agoalert")
        Plotly.restyle("agonist", 'visible', true)
        lineData = calcLines(affago,effago,denago,efficago);
        calc50aff = calc50(lineData);

        //I'm doing something wrong if I try just place lineData into newData, below works though
        Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: calc50aff[0], y: calc50aff[1]}], traces: [0,1], layout: {}},animation)
    }
} 

function resetAgo(){
    affago = document.getElementById("affslider").value = document.getElementById("affslider").defaultValue;
    effago = document.getElementById("effslider").value = document.getElementById("effslider").defaultValue;
    denago = document.getElementById("denslider").value = document.getElementById("denslider").defaultValue;
    efficago = document.getElementById("efficislider").value = document.getElementById("efficislider").defaultValue;
    lineData = calcLines(affago,effago,denago,efficago);
    calc50aff = calc50(lineData);

    Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: [calc50aff]}], traces: [0,1], layout: {}},animation)
}

function calcLines(affinity, efficacy, recepDensity, efficiency){
    const STEP = 0.01;
    var data = [[],[]];
    //Inverse log input values

    var affin = (10**(-1*affinity));
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    for (i=-12; i<-2;i=i+STEP){
        effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin);
        data[0].push(i);
        data[1].push(effect);
    }
    return data;
}

function plotGraph(chart){

    var layout = {
        xaxis:{
            title: "[Agonist] (log M)",
            showline: true,
            range: [-12,-2],
            dtick: 1
            
        },
        yaxis:{
            title: "Effect (% Emax)",
            showline: true,
            range: [0,100],
            //tickvals: [0,20,40,60,80,100],
            dtick: 10

        },
        /*sliders: [
            {
                label: 'Slider 1',
                pad: {t: 30},
                active: 50,
                font:{color: 'transparent'}, 
                tickcolor: 'transparent',
                steps: sliderSteps
            },
            {
                label: 'Slider 2',
                pad: {t: 30},
                active: 50,
                font:{color: 'transparent'}, 
                tickcolor: 'transparent',
                steps: sliderSteps
            }
        ]*/
    }
    var data = []
    var lineData = calcLines(affago, effago, denago, efficago)
	
    //console.log(lineData)
    var graph = {
        showlegend: false,
        x: lineData[0],
        y: lineData[1],
        mode: "lines",
        line: {
            color: '#000000',
            width: 1
        }
    }
    data.push(graph);

    Plotly.plot(chart,data,layout, {responsive: true});
	
	data50 = calc50(lineData); //plot the 50% effect marker
	var trace1 = [{
		x: data50[0],
		y: data50[1],
		mode: 'markers',
		name: "EC<sub>50</sub> value",
        marker: {
            color: "orange"
        }
	}];
	Plotly.plot(chart,trace1,layout, {responsive: true});
}
plotGraph("agonist");

function showInstructionsQual() {
    $('#instructions').modal('show');
    $('.nav-tabs a[href="#qual"]').tab('show');
};


//QUESTION BOX
var questions = ["What is agonism? <br><br><img src=\"images/agonistchart.png\" alt=\"Ago1 Answer\" style=\"max-height:100%; max-width:100%;\">",
    "What is a PARTIAL agonist?",
    "What is a FULL agonist?",
    "For a partial agonist, increasing which of the following variables will increase the maximum effect produced – intrinsic efficacy (ε), receptor density (R<sub>T</sub>) or coupling efficiency (<i>f</i>)? <br><i>This can be tested using the Visualiser</i>",
    "For a full agonist, does INCREASING intrinsic efficacy (ε), receptor density (R<sub>T</sub>) and/or coupling efficiency (<i>f</i>) produce a noticeable INCREASE in maximum effect produced? <br><i>This can be tested using the Visualiser</i>", 
    "Can a full agonist produce a maximum response when occupying and activating only a fraction of the total receptor population?<br><i>This can be tested using the Visualiser</i>",
    "Can an agonist be a partial agonist in one cell type, be a full agonist in a different cell type?"];
				
var answers = ["It is represented by the red ball on the agonist dose-response curve.  The pD<sub>2</sub> is another measure of agonist potency, and is simply the –logEC<sub>50</sub>.",
    "An agonist that in a given tissue, under specified conditions, cannot elicit as large an effect as can another agonist acting through the same receptors in the same cell or tissue (even when applied at high concentration, so that all the receptors should be occupied).  The default agonist shown is a partial agonist.",
    "An agonist that in a given tissue, under specified conditions, elicits the largest possible effect (100%Emax).  Increase ε, R<sub>T</sub> and/or <i>f</i>  to change a partial agonist into a full agonist.",
    "For a partial agonist, increasing any of the following variables – intrinsic efficacy (ε), receptor density (R<sub>T</sub>) or coupling efficiency (<i>f</i>) – will increase the maximum effect produced.  Increasing these variables may change a partial agonist into a full agonist. This effect can be observed using the visualiser.",
    "<b>NO</b>, increasing intrinsic efficacy (ε), receptor density (R<sub>T</sub>) and/or coupling efficiency (<i>f</i>) will not produce a noticeable increase in the maximum effect produced by a full agonist. However, an increase in any of these variables will cause an increase in agonist potency, as indicated by a leftward shift of the agonist dose-response curve (decrease in EC<sub>50</sub> value). This effect can be observed using the visualiser.",
    "<b>YES</b>, a full agonist can produce a maximum response when occupying only a fraction of the total receptor population (less than 100%).  That is, not all of the receptors in the tissue are required to achieve a maximal response with some high efficacy agonists. This has been amply demonstrated experimentally in that reducing the number of functional receptors (e.g. by using irreversible antagonist) may result in a decrease in agonist potency without a decreased maximal response. At sufficiently high degrees of receptor inactivation, the maximum response even to full agonists is finally reduced.  This is often referred to as the cell having ‘spare receptors’ or a ‘receptor reserve’ (not all receptors are required to induce a maximal response). This effect can be observed using the visualiser.",
    "<b>YES</b>.  Agonists with low-moderate efficacy may act as full agonists in cells with high R<sub>T</sub> and/or <i>f</i>, but act as partial agonists in cells with low R<sub>T</sub> and/or <i>f</i>.  Test the effects of increasing or decreasing R<sub>T</sub> and/or <i>f</i> on agonist-induced effects. This effect can be observed using the visualiser."];

var questionCounter = 0;
document.getElementById("agonistQuestion").innerHTML = "<b>" + questions[questionCounter] + "</b>";


function revealAnswerAgonist(){
	document.getElementById("agonistAnswer").innerHTML = answers[questionCounter];
    $('#agonistAnswerModal').modal('show');
}


function nextQuestionAgonist() {
    if (questionCounter + 1 == questions.length) { //end of questions
        document.getElementById("agonistQuestion").style.display = "none";
        document.getElementById("revealAgonistAnswer").style.display = "none";
        document.getElementById("restartMessage").style.display = "block";
        document.getElementById("restartQuestion").style.display = "block";
        document.getElementById("nextAgonistQuestion").style.display = "none";
        document.getElementById("agonistQuestion").innerHTML = "<b>" + questions[questionCounter] + "</b>";
        questionCounter = 0;
    }
    else {
        questionCounter++; 
        document.getElementById("restartMessage").style.display = "none";
        document.getElementById("restartQuestion").style.display = "none";
        document.getElementById("agonistQuestion").innerHTML = "<b>" + questions[questionCounter] + "</b>";
    }
}

function restartQuestionAgonist() {
    document.getElementById("agonistQuestion").style.display = "block";
    document.getElementById("nextAgonistQuestion").style.display = "block";
    document.getElementById("restartMessage").style.display = "none";
	document.getElementById("restartQuestion").style.display = "none";
	document.getElementById("agonistQuestion").innerHTML = "<b>" + questions[questionCounter] + "</b>";
	document.getElementById("revealAgonistAnswer").style.display = "block";
}

