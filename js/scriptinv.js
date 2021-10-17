var affagoinv = document.getElementById("affsliderinv").defaultValue;
var selagoinv = document.getElementById("selsliderinv").defaultValue;
var negeffagoinv = document.getElementById("negeffsliderinv").defaultValue;
var allagoinv = document.getElementById("allsliderinv").defaultValue;
var ampliagoinv = [0.3, 1, 3, 10, 100, 1000];

var linestylesinv = ["solid", "solid", "solid", "solid", "solid", "solid"];
var linecoloursinv = ["rgb(102,178,255)", "rgb(255,128,0)", "rgb(128,128,128)", "rgb(255,215,55)", "rgb(0,0,255)", "rgb(0,255,0)"];

var lineData0inv;
var lineData1inv;
var lineData2inv;
var lineData3inv;
var lineData4inv;
var lineData5inv;

/*var animation = {
    transition: {
        duration: 0,
        easing: "cubic-in-out"
    },
    frame: {
        duration: 0,
        redraw: false,
 }
};*/

var animation = {
    transition: {
        duration: 0,
        easing: "exp-in-out"
    },
    frame: {
        duration: 0,
        redraw: false,
    }
};

//
function checkSliderMinInv(){
    let ret = false;
    if(document.getElementById("affsliderinv").value === "6"){
        ret = true;
    }
    if(document.getElementById("selsliderinv").value === "-3"){
        ret = true;
    }
    if(document.getElementById("negeffsliderinv").value === "-3"){
        ret = true;
    }
    if(document.getElementById("allsliderinv").value === "-2"){
        ret = true;
    }
    return ret;
}

//
function calcLinesInv(affinity, selectivity, negefficacy, allosteric, amplification){

    /*
    Parameters:
    Affinity (1/KA), use logarithmic scale.
    KA = 1/Affinity = Affinity^-1.
    Selectivity (a), ues a decreasing scale and logarithmic scale.
    Negative Efficacy (y), ues a decreasing scale and logarithmic scale.
    Allosteric Constant (L), use logarithmic scale.
    Signal Amplification (tR), values are [0.3, 1, 3, 10, 100, 1000].
    Concentration of the [Inverse Agonist] ([A]), range is [-12, -2], use logarithmic scale.
    [G]/KG = 1, constant.
    Effect (% Emax).
    */

    const STEP = 0.01;
    var data = [[],[]];

    var kA = 10 ** (-1 * affinity);
    var selec = 10 ** (0-(selectivity - (-3)));
    var negef = 10 ** (0-(negefficacy - (-3)));
    var allos = 10 ** allosteric;
    var conce;
    const GKG = 1;

    for (conce = -12; conce < -2; conce = conce + STEP){
        var linexData = conce;
        var lineyData = (allos * GKG * (1 + selec * negef * (10**conce / kA)) * amplification * 100) / ((10**conce / kA) * (1 + selec * allos * (1 + negef * GKG * (1 + amplification))) + allos * GKG * (1 + amplification) + 1);
        data[0].push(linexData);
        data[1].push(lineyData); 
    }
    return data;
}

//
function updateAffinityInv(value){
    affagoinv = value;
    if(checkSliderMinInv()){
        Plotly.restyle("inverse", "visible", false);
        graphAlert("invalert","inv");
    }
    else{
        graphRemoveAlert("invalert");
        Plotly.restyle("inverse", "visible", true);
        lineData0inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[0]);
        lineData1inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[1]);
        lineData2inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[2]);
        lineData3inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[3]);
        lineData4inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[4]);
        lineData5inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[5]);

        Plotly.animate("inverse",{
            data: [{x: lineData0inv[0], y: lineData0inv[1]}, 
            {x: lineData1inv[0], y: lineData1inv[1]},
            {x: lineData2inv[0], y: lineData2inv[1]}, 
            {x: lineData3inv[0], y: lineData3inv[1]}, 
            {x: lineData4inv[0], y: lineData4inv[1]},
            {x: lineData5inv[0], y: lineData5inv[1]},],
            traces: [0,1,2,3,4,5], layout: {}
        },animation);
    }
} 

//
function updateSelectivityInv(value){
    selagoinv = value;
    if(checkSliderMinInv()){
        Plotly.restyle("inverse", "visible", false);
        graphAlert("invalert","inv");
    }
    else{
        graphRemoveAlert("invalert");
        Plotly.restyle("inverse", "visible", true);
        lineData0inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[0]);
        lineData1inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[1]);
        lineData2inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[2]);
        lineData3inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[3]);
        lineData4inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[4]);
        lineData5inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[5]);

        Plotly.animate("inverse",{
            data: [{x: lineData0inv[0], y: lineData0inv[1]}, 
            {x: lineData1inv[0], y: lineData1inv[1]},
            {x: lineData2inv[0], y: lineData2inv[1]}, 
            {x: lineData3inv[0], y: lineData3inv[1]}, 
            {x: lineData4inv[0], y: lineData4inv[1]},
            {x: lineData5inv[0], y: lineData5inv[1]},],
            traces: [0,1,2,3,4,5], layout: {}
        },animation);
    }
}

//
function updateNegeffInv(value){
    negeffagoinv = value;
    if(checkSliderMinInv()){
        Plotly.restyle("inverse", "visible", false);
        graphAlert("invalert","inv");
    }
    else{
        graphRemoveAlert("invalert");
        Plotly.restyle("inverse", "visible", true);
        lineData0inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[0]);
        lineData1inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[1]);
        lineData2inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[2]);
        lineData3inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[3]);
        lineData4inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[4]);
        lineData5inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[5]);

        Plotly.animate("inverse",{
            data: [{x: lineData0inv[0], y: lineData0inv[1]}, 
            {x: lineData1inv[0], y: lineData1inv[1]},
            {x: lineData2inv[0], y: lineData2inv[1]}, 
            {x: lineData3inv[0], y: lineData3inv[1]}, 
            {x: lineData4inv[0], y: lineData4inv[1]},
            {x: lineData5inv[0], y: lineData5inv[1]},],
            traces: [0,1,2,3,4,5], layout: {}
        },animation);
    }
}

//
function updateAllInv(value){
    allagoinv = value;
    if(checkSliderMinInv()){
        Plotly.restyle("inverse", "visible", false);
        graphAlert("invalert", "inv");
    }
    else{
        graphRemoveAlert("invalert");
        Plotly.restyle("inverse", "visible", true);
        lineData0inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[0]);
        lineData1inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[1]);
        lineData2inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[2]);
        lineData3inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[3]);
        lineData4inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[4]);
        lineData5inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[5]);

        Plotly.animate("inverse",{
            data: [{x: lineData0inv[0], y: lineData0inv[1]}, 
            {x: lineData1inv[0], y: lineData1inv[1]},
            {x: lineData2inv[0], y: lineData2inv[1]}, 
            {x: lineData3inv[0], y: lineData3inv[1]}, 
            {x: lineData4inv[0], y: lineData4inv[1]},
            {x: lineData5inv[0], y: lineData5inv[1]},],
            traces: [0,1,2,3,4,5], layout: {}
        },animation);
    }
}

//
function resetInv(){
	affagoinv = document.getElementById("affsliderinv").value = document.getElementById("affsliderinv").defaultValue;
    selagoinv = document.getElementById("selsliderinv").value = document.getElementById("selsliderinv").defaultValue;
    negeffagoinv = document.getElementById("negeffsliderinv").value = document.getElementById("negeffsliderinv").defaultValue;
    allagoinv = document.getElementById("allsliderinv").value = document.getElementById("allsliderinv").defaultValue;
    
    graphRemoveAlert("invalert");
    Plotly.restyle("inverse", "visible", true);
    lineData0inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[0]);
    lineData1inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[1]);
    lineData2inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[2]);
    lineData3inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[3]);
    lineData4inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[4]);
    lineData5inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[5]);

    Plotly.animate("inverse", {
        data: [{x: lineData0inv[0], y: lineData0inv[1]}, 
        {x: lineData1inv[0], y: lineData1inv[1]},
        {x: lineData2inv[0], y: lineData2inv[1]}, 
        {x: lineData3inv[0], y: lineData3inv[1]}, 
        {x: lineData4inv[0], y: lineData4inv[1]},
        {x: lineData5inv[0], y: lineData5inv[1]}],
        traces: [0,1,2,3,4,5], layout: {}
    },animation);
}

function plotGraphInv(chart){
    var layout = {
        //legend: "Signal amplification of Constitutively Active Receptor",
        xaxis:{
            title: "[Inverse Agonist] ([A])",
            showline: true,
            range: [-12,-2],
            dtick: 1
        },
        yaxis:{
            title: "Effect (% Emax)",
            showline: true,
            range: [0,100],
            dtick: 10
      }
    };

    var lineNumber = ampliagoinv.length;
    for(var i = 0; i < lineNumber; i++){
        var data = [];
        var lineData = calcLinesInv(affagoinv, selagoinv, negeffagoinv, allagoinv, ampliagoinv[i]);
        var graph;
        graph = {
            x: lineData[0],
            y: lineData[1],
            mode: "lines",
            name: "Signal Amplification " + ampliagoinv[i],
            line: {
                dash: linestylesinv[i],
                color: linecoloursinv[i],
                width: 1.2
    	    	},
    	}
        data.push(graph);

        Plotly.plot(chart, data, layout, {responsive: true});
    }
}

plotGraphInv("inverse");

//QUESTION BOX
var questionsInv = ["What is the principal effect produced by an inverse agonist?",
"Is the effect of an inverse agonist influenced by the properties of the agonist?",
"What other factors might influence the actions of an inverse agonist?",
"Can an inverse agonist abolish constitutive receptor activity?",
"What other actions might an inverse agonist exhibit that might affect receptor-mediated effects in a cell?",
"Do partial inverse agonists exist?",
"What is a neutral antagonist?"];

var answersInv = ["The main effect produced by an inverse agonist is to dose-dependently reduce the level of effect induced by constitutive receptor activity <br><div style='text-align:center'><video width='320' height='240' controls><source src='images/Const. Active Rec. & Inverse agonism.mp4' type='video/mp4'></source></video></div><br> Inverse agonists selectively bind to the inactive receptor conformation, thereby increasing the proportion of receptors in the inactive conformation (R<sub>i</sub>).  This causes a decrease the population of receptors in the active conformation (R<sub>a</sub>*), and thus reduces constitutive receptor activity.",
"<b>YES</b>, the shape and position of the dose-response curves to the inverse agonist depends on several agonist-dependent factors including: <br>(1) the affinity (K<sub>A</sub>) of the inverse agonist for the inactive receptor (R<sub>i</sub>), <br>(2) the relative selectivity of the inverse agonist for the active and inactive conformations of the receptor (&#945), and<br>(3) the capacity of the inverse agonist-bound receptor to activate G proteins (&#947).<br>Test this using the Dose Response Visualiser.",
"A key determinant of the shape and position of the dose response curve for the inverse agonist is the initial level of effect produced via constitutively active receptors, which is influenced by many receptor- and cell-dependent factors, including:<br>(1) a thermodynamic constant unique for each receptor type describing the tendency of the receptor to spontaneous adopt the active state (L),<br>(2) the concentrations of the receptors ([R]) and G proteins ([G]),<br>(3) the affinity of the receptor for the G protein (K<sub>G</sub>) and<br>(4) the level of signal amplification produced following G protein activation.<br>In the Dose-Response Visualiser – Inverse agonist page, the default inverse agonist dose-response curves have been obtained at six initial levels of constitutive receptor activity-induced effect, each reflecting a set level of L, [R], [G] and K<sub>G</sub>, and a different level of signal amplification.  It is possible to vary the magnitude of L and observe the effect on the level of constitutive receptor activity and on the activity of the inverse agonist.",
"<b>YES</b>, but this depends on the relative properties of the inverse agonist, receptor and cell.  An inverse agonist is more likely to abolish constitutive receptor activity if:<br>(1) the inverse agonist is highly selective for the inactive receptor (low &#945 value)<br>(2) inverse agonist reduces the affinity of the receptor for the G protein (low &#947 value)<br>(3) the initial level of constitutive receptor activity is low (relatively low L value, low [R] and/or [G], low affinity of receptor for G protein).",
"Because inverse agonists bind to the orthosteric site on the receptor, without activating the receptor, they act as competitive antagonists in the absence of constitutive receptor activity.  Indeed, many drugs that have been characterised as competitive antagonists, including histamine receptor antagonists and beta adrenoceptor antagonists, exhibit inverse agonist activity in constitutive receptor systems.  The relative importance of competitive antagonism and inverse agonism for these drugs in vivo, remains unresolved.  Importantly, just because a drug possesses inverse agonist activity, it does not mean that all of the drug’s effects are due to reducing constitutive activity (inverse agonism).",
"<b>YES</b>, partial inverse agonists are ligands that have greater affinity for R<sub>i</sub> than R<sub>a</sub>*, but less selectivity for R<sub>i</sub> over R<sub>a</sub>*, compared to full inverse agonists.  Compared to full inverse agonists, partial inverse agonists are likely to produce less complete reversal of constitutive receptor activity.",
"A neutral antagonist is a ligand that has equal affinity for both the inactive (R<sub>i</sub>) and active (R<sub>a</sub>*) conformations of the receptor, and therefore does not affect the equilibrium between R<sub>i</sub> and R<sub>a</sub>* (same relative levels of R<sub>i</sub> and R<sub>a</sub>*).  Thus, a neutral antagonist will equally inhibit the binding and actions of conventional and inverse agonists, and cause a rightward shift of both their respective dose-response curves.  Consider a situation whereby an effect is produced by a combination of constitutive receptor activity and the actions of an endogenous agonist.  Here, a neutral antagonist will only inhibit the component of effect that is mediated via the endogenous agonist, whereas the inverse agonist is likely to produce a greater level of inhibition, by inhibiting effects induced by the endogenous agonist and constitutive receptor activity."];    

var questionCounterInv = 0;

document.getElementById("invQuestion").innerHTML = "<b>" + questionsInv[questionCounterInv] + "</b>";

function revealAnswerInv() {
    document.getElementById("invAnswer").innerHTML = answersInv[questionCounterInv];
    $('#invAnswerModal').modal('show');
}


function nextQuestionInv() {
    if (questionCounterInv + 1 == questionsInv.length) { //end of questions
        questionCounterInv++;
        document.getElementById("invQuestion").style.display = "none";
        document.getElementById("revealInvAnswer").style.display = "none";
        document.getElementById("restartMessageInv").style.display = "inline-block";
        document.getElementById("restartQuestionInv").style.display = "inline-block";
        document.getElementById("nextInvQuestion").style.display = "none";
    }
    else {
        questionCounterInv++;
        document.getElementById("restartMessageInv").style.display = "none";
        document.getElementById("restartQuestionInv").style.display = "none";
        document.getElementById("invQuestion").innerHTML = "<b>" + questionsInv[questionCounterInv] + "</b>";
    }
}

function prevQuestionInv() {
    if (!questionCounterInv) { //beginning of questions
        alert("Already at beginning of questions");
    }
    else {
        questionCounterInv--;
        document.getElementById("invQuestion").style.display = "block";
        document.getElementById("nextInvQuestion").style.display = "inline-block";
        document.getElementById("revealInvAnswer").style.display = "inline-block";
        document.getElementById("restartMessageInv").style.display = "none";
        document.getElementById("restartQuestionInv").style.display = "none";
        document.getElementById("invQuestion").innerHTML = "<b>" + questionsInv[questionCounterInv] + "</b>";
    }
}

function restartQuestionInv() {
    questionCounterInv = 0;
    document.getElementById("invQuestion").style.display = "block";
    document.getElementById("nextInvQuestion").style.display = "inline-block";
    document.getElementById("restartMessageInv").style.display = "none";
    document.getElementById("restartQuestionInv").style.display = "none";
    document.getElementById("invQuestion").innerHTML = "<b>" + questionsInv[questionCounterInv] + "</b>";
    document.getElementById("revealInvAnswer").style.display = "inline-block";
}