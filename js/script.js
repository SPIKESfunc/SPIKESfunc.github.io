var affago = document.getElementById("affslider").defaultValue;
var effago = document.getElementById("effslider").defaultValue;
var denago = document.getElementById("denslider").defaultValue;
var efficago = document.getElementById("efficislider").defaultValue;
var lineData;
var data50;
var calc50aff;

var animation = {
    transition: {
        duration: 0,
        easing: "cubic-in-out"
    },
    frame: {
        duration: 0,
        redraw: false,
 }
};

//new vars
var dotsize = 10 // defines 50% dot size

$(document).ready(function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.visibility = "visible";
  document.getElementById("page").style.position = "relative";
  document.getElementById("footer").style.visibility = "visible";
});

function calc50(lineData){

    var halfMaxEffect = Math.max.apply(Math, lineData[1])/2; //get the 50% value
	var maxEffectAgoIndex = lineData[1].findIndex(function(number) { //get the x-index for the 50% value
        return number >= halfMaxEffect;
    });
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    var agoret = [[halfAgoEffect], [halfMaxEffect]];
	return agoret; //return x, y

}

function graphAlert(div, property){
    if(property === "aff"){
    document.getElementById(div).innerHTML = "Affinity is required for an agonist to bind to receptors and induce an effect – when agonist affinity = 0, agonist-induced effect = 0";
    }
    if(property === "eff"){
    document.getElementById(div).innerHTML = "Intrinsic efficacy is required for an agonist to activate a receptor and induce an effect – when &#949 = 0, agonist-induced effect = 0";
    }
    if(property === "den"){
    document.getElementById(div).innerHTML = "An agonist cannot induce an effect if the cell contains no functional receptors for the agonist – when R<sub>T</sub> = 0, agonist-induced effect = 0";
    }
    if(property === "effic"){
    document.getElementById(div).innerHTML = "An agonist cannot induce an effect if the cell contains no functioning signalling pathways that link the activated receptor to the observed effect – when <i>&#947</i> = 0, agonist-induced effect = 0";
    }
}

function graphRemoveAlert(div){
    //Determine which graph to remove alert from
    document.getElementById(div).innerHTML = "";
}

function checkSliderMinAgo(){
    let ret = false;
    if(document.getElementById("affslider").value === "5"){
        ret = true;
    }
    if(document.getElementById("effslider").value === "-0.7"){
        ret = true;
    }
    if(document.getElementById("denslider").value === "-1"){
        ret = true;
    }
    if(document.getElementById("efficislider").value === "0"){
        ret = true;
    }
    return ret;
}

function calcLines(affinity, efficacy, recepDensity, efficiency){
    const STEP = 0.01;
    var data = [[],[]];

    //Inverse log input values

    var affin = (10**(-1*affinity));
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    for(var i=-12; i<-2;i=i+STEP){
        //effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin);
        data[0].push(i);
        data[1].push((10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1-efcay)+affin));
    }
    return data;
}

function updateAffinity(value){
    affago = value;
    if(checkSliderMinAgo()){
        Plotly.restyle("agonist", "visible", false);
        graphAlert("agoalert", "aff");
    }
    else{
        graphRemoveAlert("agoalert");
        Plotly.restyle("agonist", "visible", true);
        lineData = calcLines(affago,effago,denago,efficago);
        calc50aff = calc50(lineData);

        Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: calc50aff[0], y: calc50aff[1]}], traces: [0,1], layout: {}},animation);

    }
} 

function updateEfficacy(value){
    effago = value;
    if(checkSliderMinAgo()){
        Plotly.restyle("agonist", "visible", false);
        graphAlert("agoalert","eff");
    }
    else{
        graphRemoveAlert("agoalert");
        Plotly.restyle("agonist", "visible", true);
        lineData = calcLines(affago,effago,denago,efficago);
        calc50aff = calc50(lineData);

        Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: calc50aff[0], y: calc50aff[1]}], traces: [0,1], layout: {}},animation);
    }
} 

function updateDensity(value){
    denago = value;
    if(checkSliderMinAgo()){
        Plotly.restyle("agonist", "visible", false);
        graphAlert("agoalert","den");
    }
    else{
        graphRemoveAlert("agoalert");
        Plotly.restyle("agonist", "visible", true);
        lineData = calcLines(affago,effago,denago,efficago);
        calc50aff = calc50(lineData);

        Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: calc50aff[0], y: calc50aff[1]}], traces: [0,1], layout: {}},animation);
    }
} 

function updateEfficiency(value){
    efficago = value;
    if(checkSliderMinAgo()){
        Plotly.restyle("agonist", "visible", false);
        graphAlert("agoalert","effic");
    }
    else{
        graphRemoveAlert("agoalert");
        Plotly.restyle("agonist", "visible", true);
        lineData = calcLines(affago,effago,denago,efficago);
        calc50aff = calc50(lineData);

        Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: calc50aff[0], y: calc50aff[1]}], traces: [0,1], layout: {}},animation);
    }
} 

function resetAgo(){
    affago = document.getElementById("affslider").value = document.getElementById("affslider").defaultValue;
    effago = document.getElementById("effslider").value = document.getElementById("effslider").defaultValue;
    denago = document.getElementById("denslider").value = document.getElementById("denslider").defaultValue;
    efficago = document.getElementById("efficislider").value = document.getElementById("efficislider").defaultValue;
    lineData = calcLines(affago,effago,denago,efficago);
    calc50aff = calc50(lineData);

    Plotly.animate("agonist",{data: [{y: lineData[1]}, {x: calc50aff[0], y: calc50aff[1]}], traces: [0,1], layout: {}},animation);
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
            dtick: 10

        },
    };
    var data = [];
    lineData = calcLines(affago, effago, denago, efficago);
    var graph = {
        showlegend: false,
        x: lineData[0],
        y: lineData[1],
        name: "Curve",
        mode: "lines",
        line: {
            color: "#000000",
            width: 1,
        }
    }
    data.push(graph);

    Plotly.plot(chart,data,layout, {responsive: true});
	
	data50 = calc50(lineData); //plot the 50% effect marker
	var trace1 = [{
		x: data50[0],
		y: data50[1],
		mode: "markers",
		name: "EC<sub>50</sub> value",
        marker: {
            color: "red",
            size: dotsize,
            line: {
                color: 'black',
                width: 1
              }
        }
	}];
	Plotly.plot(chart,trace1,layout, {responsive: true});
}
plotGraph("agonist");

function showInstructionsQual() {
    $("#instructions").modal("show");
    $('.nav-tabs a[href="#qual"]').tab("show");
}

//QUESTION BOX
var questionsAgonist = ["What is agonism?",
    "Does increasing agonist affinity shift the agonist dose-response curve to the RIGHT or the LEFT?<br><i>Test this using the Dose Response Visualiser.</i>",
    "Does increasing agonist affinity INCREASE or DECREASE the EC<sub>50</sub> value of the agonist?<br><i>Test this using the Dose Response Visualiser.</i>",
    "Is AFFINITY required for an agonist to induce an effect?<br><i>Test this using the Dose Response Visualiser.</i>",
    "Is INTRINSIC EFFICACY required for an agonist to induce an effect?<br><i>Test this using the Dose Response Visualiser.</i>",
    "Are RECEPTORS required for an agonist to induce an effect?<br><i>Test this using the Dose Response Visualiser.</i>",
    "Is SIGNAL AMPLIFICATION required for an agonist to induce an effect?<br><i>Test this using the Dose Response Visualiser.</i>",
    "What is agonist POTENCY?",
    "What is a PARTIAL agonist?",
    "What is a FULL agonist?",
    "For a partial agonist, increasing which of the following variables will increase the maximum effect produced – intrinsic efficacy (ε), receptor density (R<sub>T</sub>) or signal amplification (<i>&#947</i>)? <br><i>Test this using the Dose Response Visualiser.</i>",
    "For a full agonist, does INCREASING intrinsic efficacy (ε), receptor density (R<sub>T</sub>) and/or signal amplification (<i>&#947</i>) produce a noticeable INCREASE in maximum effect produced? <br><i>Test this using the Dose Response Visualiser.</i>", 
    "Can a full agonist produce a maximum response when occupying and activating only a fraction of the total receptor population?",
    "Can an agonist be a partial agonist in one cell type, be a full agonist in a different cell type?"];
				
var answersAgonist = ["Agonism is the process via which a ligand called the agonist binds to a receptor and alters the receptor state resulting in a biological response.<img src=\"images/agonistchart.png\" alt=\"Ago1 Answer\" style=\"max-height:100%; max-width:100%;\"> For more information, see the Agonist Binding video in the videos tab.",
    "Increasing agonist affinity will shift the agonist dose-response curve to the <b>LEFT</b>.  Increasing affinity increases the number of receptors that are bound and activated by the agonist. Increasing affinity is associated with a reduction in the K<sub>A</sub> value, as a lower [agonist] will be required to occupy 50% of receptors. This effect can be observed using the visualiser.",
    "The EC<sub>50</sub> is the [agonist] that produces 50% of the maximum effect produced by that agonist.  Increasing agonist affinity will <b>DECREASE</b> the EC<sub>50</sub> value because agonists with higher affinity require a <b>LOWER</b> [agonist] to achieve receptor binding and activation, and to produce an effect. This effect can be observed using the visualiser.",
    "<b>YES</b>, at least some level of affinity is required for an agonist to bind to receptors and induce an effect – when agonist affinity = 0, agonist-induced effect = 0.  This effect can be observed using the visualiser.",
    "<b>YES</b>, at least some level of Intrinsic Efficacy is  required to turn the binding signal into receptor activation, and thus produce an effect – when ε = 0, agonist-induced effect = 0.  This effect can be observed using the visualiser. ",
    "<b>YES</b>, an agonist cannot induce an effect if the cell contains no functional receptors for the agonist – when R<sub>T</sub> = 0, agonist-induced effect = 0. This effect can be observed using the visualiser.",
    "<b>YES</b>, an agonist cannot induce an effect if the cell contains no functioning signalling pathways that link the activated receptor to the observed effect – when <i>&#947</i> = 0, agonist-induced effect = 0.  Test this using the Dose Response Visualiser.",
    "Potency is one expression of the activity of a drug, in terms of the concentration or amount needed to produce a defined effect.  Potency depends on both agonist-dependent (affinity, efficacy) and cell-dependent (R<sub>T</sub>, <i>&#947</i> ) parameters, and thus can vary significantly between different cells and tissues. The term DOES NOT refer to the maximum effect attainable.  The EC<sub>50</sub> value is a commonly used measure of agonist potency and is the molar concentration of the agonist that produces 50% of the maximum response induced by that agonist (NOT the [agonist] producing 50% max. effect). It is represented by the orange ball on the agonist dose-response curve.  The pD<sub>2</sub> is another measure of agonist potency, and is simply the –logEC<sub>50</sub>.",
    "An agonist that in a given tissue, under specified conditions, cannot elicit as large an effect as can another full agonist acting through the same receptors in the same cell or tissue (even when applied at high concentration, so that all the receptors should be occupied).  Partial agonists possess lower intrinsic efficacy than full agonists.  An agonist acting as a partial agonist in one cell/tissue type may act as a full agonist in another cell type that has greater Receptor Density and/or Signal Amplification (or indeed as a competitive antagonist in a cell/tissue that has lesser Receptor Density and/or Signal Amplification.",
    "An agonist that in a given tissue, under specified conditions, elicits the largest possible effect (100%Emax).  Increase ε, R<sub>T</sub> and/or <i>&#947</i>  to change a partial agonist into a full agonist.",
    "For a partial agonist, increasing any of the following variables – intrinsic efficacy (ε), receptor density (R<sub>T</sub>) or signal amplification (<i>&#947</i>) – will increase the maximum effect produced.  Increasing these variables may change a partial agonist into a full agonist. This effect can be observed using the visualiser.",
    "<b>NO</b>, increasing intrinsic efficacy (ε), receptor density (R<sub>T</sub>) and/or signal amplification (<i>&#947</i>) will not produce a noticeable increase in the maximum effect produced by a full agonist. However, an increase in any of these variables will cause an increase in agonist potency, as indicated by a leftward shift of the agonist dose-response curve (decrease in EC<sub>50</sub> value). This effect can be observed using the visualiser.",
    "<b>YES</b>, a full agonist can produce a maximum response when occupying only a fraction of the total receptor population (less than 100%).  That is, not all of the receptors in the tissue are required to achieve a maximal response with some high efficacy agonists. This has been amply demonstrated experimentally in that reducing the number of functional receptors (e.g. by using irreversible antagonist) may result in a decrease in agonist potency without a decreased maximal response. At sufficiently high degrees of receptor inactivation, the maximum response even to full agonists is finally reduced.  This is often referred to as the cell having ‘spare receptors’ or a ‘receptor reserve’ (not all receptors are required to induce a maximal response).",
    "<b>YES</b>.  Agonists with low-moderate efficacy may act as full agonists in cells with high R<sub>T</sub> and/or <i>&#947</i>, but act as partial agonists in cells with low R<sub>T</sub> and/or <i>&#947</i>.  Test the effects of increasing or decreasing R<sub>T</sub> and/or <i>&#947</i> on agonist-induced effects. This effect can be observed using the visualiser."];

var questionCounterAgonist = 0;
document.getElementById("agonistQuestion").innerHTML = "<b>" + questionsAgonist[questionCounterAgonist] + "</b>";


function revealAnswerAgonist(){
    document.getElementById("agonistAnswer").innerHTML = answersAgonist[questionCounterAgonist];
    $("#agonistAnswerModal").modal("show");
}


function nextQuestionAgonist() {
    if (questionCounterAgonist + 1 === questionsAgonist.length) { //end of questions
        questionCounterAgonist++;
        document.getElementById("agonistQuestion").style.display = "none";
        document.getElementById("revealAgonistAnswer").style.display = "none";
        document.getElementById("restartMessageAgonist").style.display = "inline-block";
        document.getElementById("restartQuestionAgonist").style.display = "inline-block";
        document.getElementById("nextAgonistQuestion").style.display = "none";    }
    else {
        questionCounterAgonist++; 
        document.getElementById("restartMessageAgonist").style.display = "none";
        document.getElementById("restartQuestionAgonist").style.display = "none";
        document.getElementById("agonistQuestion").innerHTML = "<b>" + questionsAgonist[questionCounterAgonist] + "</b>";
    }
}

function prevQuestionAgonist() {
    if (!questionCounterAgonist) { //beginning of questions
        alert("Already at beginning of questions");
    }
    else {
        questionCounterAgonist--;
        document.getElementById("agonistQuestion").style.display = "block";
        document.getElementById("nextAgonistQuestion").style.display = "inline-block";
        document.getElementById("revealAgonistAnswer").style.display = "inline-block";
        document.getElementById("restartMessageAgonist").style.display = "none";
        document.getElementById("restartQuestionAgonist").style.display = "none";
        document.getElementById("agonistQuestion").innerHTML = "<b>" + questionsAgonist[questionCounterAgonist] + "</b>";
    }
}

function restartQuestionAgonist() {
    questionCounterAgonist = 0;    
    document.getElementById("agonistQuestion").style.display = "block";
    document.getElementById("nextAgonistQuestion").style.display = "inline-block";
    document.getElementById("restartMessageAgonist").style.display = "none";
    document.getElementById("restartQuestionAgonist").style.display = "none";
    document.getElementById("agonistQuestion").innerHTML = "<b>" + questionsAgonist[questionCounterAgonist] + "</b>";
	document.getElementById("revealAgonistAnswer").style.display = "inline-block";
}

