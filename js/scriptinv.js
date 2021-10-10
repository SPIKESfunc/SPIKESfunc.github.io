var affagoinv = document.getElementById("affsliderinv").defaultValue;
var selagoinv = document.getElementById("selsliderinv").defaultValue;
var negeffagoinv = document.getElementById("negeffsliderinv").defaultValue;
var allagoinv = document.getElementById("allsliderinv").defaultValue;
var invHalfMaxEffect;
var ampliagoinv = [0.3, 1, 3, 10, 100, 1000];
var linecoloursinv = ["#000000", "#ff6666", "#ff3333", "#ff0000", "#cc0000"];
var linestylesinv = ["solid", "dot", "dashdot", "dot", "dashdot"];
var lineData0inv;
var lineData1inv;
var lineData2inv;
var lineData3inv;
var lineData4inv;
var lineData5inv;
var lineData6inv;
var halfData0inv;
var halfData1inv;
var halfData2inv;
var halfData3inv;
var halfData4inv;
var halfData5inv;
var halfData6inv;
var data50inv;
var calc50inv;

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

var dotsizeinv = 10 // defines 50% dot size

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
function findInvHalfMaxEffect(lineData){
    invHalfMaxEffect = Math.max.apply(Math, lineData[1])/2;
} 
//
function checkSliderMinInv(){
    let ret = false;
    if(document.getElementById("affsliderinv").value === "-10"){
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

//haven't done
function calcLinesInv(affinity, selectivity, negefficacy, allosteric, ampliagoinv){
    const STEP = 0.01;
    var data = [[],[]];

    var affin = 10**(-1*affinity);
    var selec = 10**efficacy;
    var negeff = 10**recepDensity;
    var allosteric = 10**efficiency;
}
//
function calc50Inv(lineData){

	var halfMaxEffect = Math.max.apply(Math, lineData[1])/2; //get the 50% value
	var maxEffectAgoIndex = lineData[1].findIndex(function(number) { //get the x-index for the 50% value
        return number >= halfMaxEffect;
    });
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    var agoret = [[halfAgoEffect], [halfMaxEffect]];
	return agoret; //return x, y
}
//
function updateAffinityInv(value){
    affagoinv = value;
    if(checkSliderMinInv()){
        Plotly.restyle("agonistinv", "visible", false);
        graphAlert("agoalertinv","inv");
    }
    else{
        graphRemoveAlert("invalert");
        Plotly.restyle("agonistinv", "visible", true);
        lineData0inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[0]);
        lineData1inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[1]);
        lineData2inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[2]);
        lineData3inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[3]);
        lineData4inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[4]);
        lineData5inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[5]);
        lineData6inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[6]);
        halfData0inv = calc50(lineData0inv);
        halfData1inv = calc50(lineData1inv);
        halfData2inv = calc50(lineData2inv);
        halfData3inv = calc50(lineData3inv);
        halfData4inv = calc50(lineData4inv);
        halfData4inv = calc50(lineData5inv);
        halfData4inv = calc50(lineData6inv);

        Plotly.animate("agonistinv",{
                data: [{y: lineData0inv[1]}, {y: lineData1inv[1]}, {y: lineData2inv[1]}, {y: lineData3inv[1]}, {y: lineData4inv[1]}, {y: lineData6inv[1]}, {y: lineData6inv[1]},
                {x: halfData0inv[0], y: halfData0inv[1]}, 
                {x: halfData1inv[0], y: halfData1inv[1]}, 
                {x: halfData2inv[0], y: halfData2inv[1]}, 
                {x: halfData3inv[0], y: halfData3inv[1]}, 
                {x: halfData4inv[0], y: halfData4inv[1]},
                {x: halfData5inv[0], y: halfData5inv[1]}, 
                {x: halfData6inv[0], y: halfData6inv[1]}, ],
                traces: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],
                layout: {}
                },animation);
    }
} 
//
function updateSelectivityInv(value){
    selagoinv = value;
    if(checkSliderMinInv()){
        Plotly.restyle("agonistinv", "visible", false);
        graphAlert("agoalertinv","inv");
    }
    else{
        graphRemoveAlert("invalert");
        Plotly.restyle("agonistinv", "visible", true);
        lineData0inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[0]);
        lineData1inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[1]);
        lineData2inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[2]);
        lineData3inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[3]);
        lineData4inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[4]);
        lineData5inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[5]);
        lineData6inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[6]);
        halfData0inv = calc50(lineData0inv);
        halfData1inv = calc50(lineData1inv);
        halfData2inv = calc50(lineData2inv);
        halfData3inv = calc50(lineData3inv);
        halfData4inv = calc50(lineData4inv);
        halfData4inv = calc50(lineData5inv);
        halfData4inv = calc50(lineData6inv);

        Plotly.animate("agonistinv",{
                data: [{y: lineData0inv[1]}, {y: lineData1inv[1]}, {y: lineData2inv[1]}, {y: lineData3inv[1]}, {y: lineData4inv[1]}, {y: lineData6inv[1]}, {y: lineData6inv[1]},
                {x: halfData0inv[0], y: halfData0inv[1]}, 
                {x: halfData1inv[0], y: halfData1inv[1]}, 
                {x: halfData2inv[0], y: halfData2inv[1]}, 
                {x: halfData3inv[0], y: halfData3inv[1]}, 
                {x: halfData4inv[0], y: halfData4inv[1]},
                {x: halfData5inv[0], y: halfData5inv[1]}, 
                {x: halfData6inv[0], y: halfData6inv[1]}, ],
                traces: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],
                layout: {}
                },animation);
    }
} 
//
function updateNegeffInv(value){
    negeffagoinv = value;
    if(checkSliderMinInv()){
        Plotly.restyle("agonistinv", "visible", false);
        graphAlert("agoalertinv","inv");
    }
    else{
        graphRemoveAlert("invalert");
        Plotly.restyle("agonistinv", "visible", true);
        lineData0inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[0]);
        lineData1inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[1]);
        lineData2inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[2]);
        lineData3inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[3]);
        lineData4inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[4]);
        lineData5inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[5]);
        lineData6inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[6]);
        halfData0inv = calc50(lineData0inv);
        halfData1inv = calc50(lineData1inv);
        halfData2inv = calc50(lineData2inv);
        halfData3inv = calc50(lineData3inv);
        halfData4inv = calc50(lineData4inv);
        halfData4inv = calc50(lineData5inv);
        halfData4inv = calc50(lineData6inv);

        Plotly.animate("agonistinv",{
                data: [{y: lineData0inv[1]}, {y: lineData1inv[1]}, {y: lineData2inv[1]}, {y: lineData3inv[1]}, {y: lineData4inv[1]}, {y: lineData6inv[1]}, {y: lineData6inv[1]},
                {x: halfData0inv[0], y: halfData0inv[1]}, 
                {x: halfData1inv[0], y: halfData1inv[1]}, 
                {x: halfData2inv[0], y: halfData2inv[1]}, 
                {x: halfData3inv[0], y: halfData3inv[1]}, 
                {x: halfData4inv[0], y: halfData4inv[1]},
                {x: halfData5inv[0], y: halfData5inv[1]}, 
                {x: halfData6inv[0], y: halfData6inv[1]}, ],
                traces: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],
                layout: {}
                },animation);
    }
}
//
function updateAllInv(value){
    allagoinv = value;
    if(checkSliderMinInv()){
        Plotly.restyle("agonistinv", "visible", false);
        graphAlert("agoalertinv","inv");
    }
    else{
        graphRemoveAlert("invalert");
        Plotly.restyle("agonistinv", "visible", true);
        lineData0inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[0]);
        lineData1inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[1]);
        lineData2inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[2]);
        lineData3inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[3]);
        lineData4inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[4]);
        lineData5inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[5]);
        lineData6inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[6]);
        halfData0inv = calc50(lineData0inv);
        halfData1inv = calc50(lineData1inv);
        halfData2inv = calc50(lineData2inv);
        halfData3inv = calc50(lineData3inv);
        halfData4inv = calc50(lineData4inv);
        halfData4inv = calc50(lineData5inv);
        halfData4inv = calc50(lineData6inv);

        Plotly.animate("agonistinv",{
                data: [{y: lineData0inv[1]}, {y: lineData1inv[1]}, {y: lineData2inv[1]}, {y: lineData3inv[1]}, {y: lineData4inv[1]}, {y: lineData6inv[1]}, {y: lineData6inv[1]},
                {x: halfData0inv[0], y: halfData0inv[1]}, 
                {x: halfData1inv[0], y: halfData1inv[1]}, 
                {x: halfData2inv[0], y: halfData2inv[1]}, 
                {x: halfData3inv[0], y: halfData3inv[1]}, 
                {x: halfData4inv[0], y: halfData4inv[1]},
                {x: halfData5inv[0], y: halfData5inv[1]}, 
                {x: halfData6inv[0], y: halfData6inv[1]}, ],
                traces: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],
                layout: {}
                },animation);
    }
}
//
function resetInv(){
	affagoinv = document.getElementById("affsliderinv").value = document.getElementById("affsliderinv").defaultValue;
    selagoinv = document.getElementById("selsliderinv").value = document.getElementById("selsliderinv").defaultValue;
    negeffagoinv = document.getElementById("negeffsliderinv").value = document.getElementById("negeffsliderinv").defaultValue;
    allagoinv = document.getElementById("allsliderinv").value = document.getElementById("allsliderinv").defaultValue;
    ampliagoinv = [0.3, 1, 3, 10, 100, 1000];
    
    lineData0inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[0]);
    lineData1inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[1]);
    lineData2inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[2]);
    lineData3inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[3]);
    lineData4inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[4]);
    lineData5inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[5]);
    lineData6inv = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[6]);
    halfData0inv = calc50(lineData0inv);
    halfData1inv = calc50(lineData1inv);
    halfData2inv = calc50(lineData2inv);
    halfData3inv = calc50(lineData3inv);
    halfData4inv = calc50(lineData4inv);
    halfData4inv = calc50(lineData5inv);
    halfData4inv = calc50(lineData6inv);

    Plotly.animate("agonistinv",{
        data: [{y: lineData0inv[1]}, {y: lineData1inv[1]}, {y: lineData2inv[1]}, {y: lineData3inv[1]}, {y: lineData4inv[1]}, {y: lineData6inv[1]}, {y: lineData6inv[1]},
        {x: halfData0inv[0], y: halfData0inv[1]}, 
        {x: halfData1inv[0], y: halfData1inv[1]}, 
        {x: halfData2inv[0], y: halfData2inv[1]}, 
        {x: halfData3inv[0], y: halfData3inv[1]}, 
        {x: halfData4inv[0], y: halfData4inv[1]},
        {x: halfData5inv[0], y: halfData5inv[1]}, 
        {x: halfData6inv[0], y: halfData6inv[1]}, ],
        traces: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],
        layout: {}
        },animation);
}

function plotGraphInv(chart){
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

        }
    };
    for(var j = 0; j<6; j++){
        var data = [];
        var lineData = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[j]);
        var graph;
        if(j === 0){
			graph = {
        		x: lineData[0],
        		y: lineData[1],
       			mode: "lines",
       			name: 0+"nM",
       			line: {
                    color: linecoloursinv[j],
                    width: 1
    	    	}
    		}
   		}
   		else{
    	    graph = {
        		x: lineData[0],
        		y: lineData[1],
       			mode: "lines",
                //old 
                //name: 10**agoconcarr[j]*1000000000+"nM",
                //new
                name: "[Antagonist] #" + j,
                line: {
                    color: linecoloursinv[j],
                    width: 1.2,
                    dash: linestylesinv[j]
                }
    		}
        }
        data.push(graph);
        Plotly.plot(chart,data,layout, {responsive: true}); 
    }
    var legendview = [true, false, false, false, false];
    for(var i = 0; i<6; i++){
        var halfData = calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[i]);
        findInvHalfMaxEffect(calcLinesInv(affagoinv,selagoinv,negeffagoinv,allagoinv,ampliagoinv[0]));
        data50 = calc50inv(halfData);
        var trace1 = [{
            x: data50[0],
            y: data50[1],
            mode: "markers",
            name: "EC<sub>50</sub> Value",
            marker: {
                color: "red",
                size: dotsize,
                line: {
                    color: 'black',
                    width: 1
                  }
            },
            showlegend: legendview[i]
        }];
        Plotly.plot(chart,trace1,layout, {responsive: true});
    }
}
plotGraphInv("agonistinv");

//QUESTION BOX
var questionsInv = ["1"];

var answersInv = ["1"];

var questionCounterInv = 0;
document.getElementById("invQuestion").innerHTML = "<b>" + questionsInv[questionCounterInv] + "</b>";


function revealAnswerInv() {
    document.getElementById("invAnswer").innerHTML = answersInv[questionCounterInv];
    $("#invAnswerModal").modal("show");
}


function nextQuestionInv() {
    if (questionCounterInv + 1 === questionsInv.length) { //end of questions
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
        document.getElementById("invQuestion").innerHTML = "<b>" + questionsINv[questionCounterInv] + "</b>";
    }
}

function restartQuestionInv() {
    questionCounterInv = 0;
    document.getElementById("invQuestion").style.display = "block";
    document.getElementById("nextInvQuestion").style.display = "inline-block";
    document.getElementById("restartMessageInv").style.display = "none";
    document.getElementById("restartQuestionInv").style.display = "none";
    document.getElementById("invQuestion").innerHTML = "<b>" + questionsINv[questionCounterInv] + "</b>";
    document.getElementById("revealINVAnswer").style.display = "inline-block";
}
