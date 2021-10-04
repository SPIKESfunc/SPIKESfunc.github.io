
var affaff = document.getElementById("affaffslider").defaultValue;
var effaff = document.getElementById("effaffslider").defaultValue;
var denaff = document.getElementById("denaffslider").defaultValue;
var efficaff = document.getElementById("efficiaffslider").defaultValue;
var agoaffaff = document.getElementById("antagoaff").value = document.getElementById("agoaffslider").defaultValue;
var agoeffaff = document.getElementById("agoeffaffslider").defaultValue;
document.getElementById("antcoopaff").value = Math.round(10**(-agoeffaff) * Math.pow(10,3)) / Math.pow(10,3);

var agoconcarr = [0, -9, -8, -7, -6];
var calc50aff;
var linecolours = ["#000000", "#ff6666", "#ff3333", "#ff0000", "#cc0000"];
var linestyles = ["solid", "dot", "dashdot", "dot", "dashdot"];
var lineData0;
var lineData1;
var lineData2;
var lineData3;
var lineData4;
var halfData0;
var halfData1;
var halfData2;
var halfData3;
var halfData4;

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

function checkSliderMinAff(){
    let ret = false;
    if(document.getElementById("affaffslider").value === "5"){
        ret = true;
    }
    if(document.getElementById("effaffslider").value === "-0.7"){
        ret = true;
    }
    if(document.getElementById("denaffslider").value === "-1"){
        ret = true;
    }
    if(document.getElementById("efficiaffslider").value === "0"){
        ret = true;
    }
    return ret;
}

function calcLinesAff(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoeffect, agoconcentration){
    const STEP = 0.01;
    var data = [[],[]];
    //Inverse log input values

    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);
    var agoeff = 10**(-1*agoeffect);
    var agoconc;

    if(agoconcentration === 0){
        agoconc = 0;
        agoaffin = 0;
        var i;
        for (i=-12; i<-2;i=i+STEP){
            //effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin);
            data[0].push(i);
            data[1].push((10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1-efcay)+affin));
        }
    }
    else{
        agoconc = 10**agoconcentration;
        var i;
        for (i=-12; i<-2;i=i+STEP){
            //effect = ((10**i)*efcay*recep*efcey*100)/((10**i)*(efcay*recep*efcey+1)+((affin*(agoconc/agoaffin + 1))/(1+((agoeff*agoconc)/agoaffin))));
            data[0].push(i);
            data[1].push(((10**i)*efcay*recep*efcey*100)/((10**i)*(efcay*recep*efcey+1-efcay)+((affin*(agoconc/agoaffin + 1))/(1+((agoeff*agoconc)/agoaffin)))));
        }
    }
    return data;
}
function calc50(lineData){

    var halfMaxEffect = Math.max.apply(Math, lineData[1])/2; //get the 50% value
	var maxEffectAgoIndex = lineData[1].findIndex(function(number) { //get the x-index for the 50% value
        return number >= halfMaxEffect;
    });
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    var agoret = [[halfAgoEffect], [halfMaxEffect]];
	return agoret; //return x, y

}

function updateAffinityAff(value){
    affaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("alloaffin", "visible", false);
        graphAlert("affalert","aff");
    }
    else{
        graphRemoveAlert("affalert");
        Plotly.restyle("alloaffin", "visible", true);
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
        lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
	
        Plotly.animate("alloaffin",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation);
    }	 
}  

// This is used to update the Concentration Values Table
function updateConcentrationAff(value, index){
    // use this to reference the id of the box
    //let line_id = "comline" + index;
    agoconcarr[index] = value;

    // used from existing functions below. (updateEfficacyAff())
    Plotly.restyle("alloaffin", "visible", true);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    
    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation);

}

function updateEfficacyAff(value){
    effaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("alloaffin", "visible", false);
        graphAlert("affalert","eff");
    }
    else{
        graphRemoveAlert("affalert");
        Plotly.restyle("alloaffin", "visible", true);
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
        lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        
        Plotly.animate("alloaffin",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation);
    }
} 

function updateDensityAff(value){
    denaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("alloaffin", "visible", false);
        graphAlert("affalert","den");
    }
    else{
        graphRemoveAlert("affalert");
        Plotly.restyle("alloaffin", "visible", true);
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
        lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        
        Plotly.animate("alloaffin",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation);
    }
} 

function updateEfficiencyAff(value){
    efficaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("alloaffin", "visible", false);
        graphAlert("affalert","effic");
    }
    else{
        graphRemoveAlert("affalert");
        Plotly.restyle("alloaffin", "visible", true);
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
        lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);

        Plotly.animate("alloaffin",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation);

    }

} 

function updateAgoAffinityAff(value){
    agoaffaff = document.getElementById("antagoaff").value = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);

	Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation);

}

function updateAgoEffectAff(value){
    agoeffaff = value;
    document.getElementById("antcoopaff").value = Math.round(10**(-value) * Math.pow(10,3)) / Math.pow(10,3);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);

    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation);
}

function resetAff(){
    affaff = document.getElementById("affaffslider").value = document.getElementById("affaffslider").defaultValue;
    effaff = document.getElementById("effaffslider").value = document.getElementById("effaffslider").defaultValue;
    denaff = document.getElementById("denaffslider").value = document.getElementById("denaffslider").defaultValue;
    efficaff = document.getElementById("efficiaffslider").value = document.getElementById("efficiaffslider").defaultValue;
    agoaffaff = document.getElementById("agoaffslider").value = document.getElementById("agoaffslider").defaultValue;
    agoeffaff = document.getElementById("agoeffaffslider").value = document.getElementById("agoeffaffslider").defaultValue;
    document.getElementById("antagoaff").value = document.getElementById("agoaffslider").defaultValue;
    document.getElementById("antcoopaff").value = Math.round(10**(-agoeffaff) * Math.pow(10,3)) / Math.pow(10,3);

    //updates lines concentration
    document.getElementById("affline2").value = document.getElementById("affline2").defaultValue;
    document.getElementById("affline3").value = document.getElementById("affline3").defaultValue;
    document.getElementById("affline4").value = document.getElementById("affline4").defaultValue;
    document.getElementById("affline5").value = document.getElementById("affline5").defaultValue;
    agoconcarr = [0, -9, -8, -7, -6]; // need this to reset values


    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);

    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation);
}

function plotGraphAff(chart){

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
	var data50 = [];
    for(var j = 0; j<5; j++){
        var data= [];
        var lineData = calcLinesAff(affaff, effaff, denaff, efficaff, agoaffaff, agoeffaff, agoconcarr[j]);
        var graph;
        if(j === 0){
            graph = {
                x: lineData[0],
                y: lineData[1],
                mode: "lines",
                name: 0+"nM",
                line: {
                    color: linecolours[j],
                    width: 1
                }
            }
        }
        else{
            graph = {
                x: lineData[0],
                y: lineData[1],
                mode: "lines",
                //name: 10**agoconcarr[j]*1000000000+"nM",
                name: "[Antagonist] #" + j,
                line: {
                    color: linecolours[j],
                    width: 1.2,
                    dash: linestyles[j]
                }
            }
        }
    data.push(graph);
	data50[j] = calc50(lineData);
	
    Plotly.plot(chart,data,layout, {responsive: true});
    }
    var i;
    var legendview = [true, false, false, false, false];
    for(i = 0; i<5; i++){
        var halfData = calcLinesAff(affaff, effaff, denaff, efficaff, agoaffaff, agoeffaff, agoconcarr[i]);
        data50 = calc50(halfData); //plot the 50% effect marker
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

plotGraphAff("alloaffin");


//QUESTION BOX
var questionsAff = ["What is the principal effect produced by an Allosteric Antagonist (affecting agonist affinity) antagonist on an agonist dose-response curve?<br><i>Test this using the Dose Response Visualiser.</i>",
    "Does an Allosteric Antagonist (affecting agonist affinity) affect the maximum effect induced by the agonist?<br><i>Test this using the Dose Response Visualiser.</i>",
    "Is the effect of an Allosteric Antagonist (affecting agonist affinity) dependent upon the agonist?",
    "Can an Allosteric Antagonist (affecting agonist affinity) abolish agonist-induced effects?<br><i>Test this using the Dose Response Visualiser.</i>"];

var answersAff = ["Allosteric antagonists (affecting only agonist affinity) cause dose-dependent parallel shifts of the agonist dose-response to the right (since the antagonist has reduced the affinity of the agonist for the receptor, higher [agonist] must be used to achieve the same level of agonist binding). <div style='text-align:center'><video width='320' height='240' controls><source src='images/Allosteric Antag. affinity - cellular effect.mp4' type='video/mp4'></source></video></div><br> A feature of allosteric antagonists is their effect is <b>SATURABLE</b>, and the extent of the rightward shift of the agonist dose-response curve is <b>LIMITED</b> (up to a dose ratio of 1/α where α is the cooperativity factor). <div style='text-align:center'><video width='320' height='240' controls><source src='images/Allosteric Antag. affinity - agonist DR effect.mp4' type='video/mp4'></source></video></div><br> This is in contrast to a competitive antagonist where the rightward shift of the agonist dose-response curve is theoretically unlimited. This effect can be observed using the visualiser.",
    "<b>NO</b>, since the allosteric antagonist (affecting only agonist affinity) will not significant affect those factors that determine the maximum agonist-induced effect (ε, R<sub>T</sub> or <i>&#947</i> ). This effect can be observed using the visualiser.",
    "<b>YES</b>, the effect of an allosteric ligand is dependent on the nature of the agonist.  An allosteric antagonist-induced change in the conformation of the binding site of the receptor that increases the affinity of the receptor for one agonist may have a <b>DIFFERENT</b> effect on the affinity of another agonist (no effect, decrease affinity).",
    "<b>NO</b>, the inhibitory effects produced by an allosteric antagonists (affecting agonist affinity) are <b>LIMITED</b> and can always be overcome by increasing the [agonist]. Test this using the Dose Response Visualiser."];

var questionCounterAff = 0;
document.getElementById("affQuestion").innerHTML = "<b>" + questionsAff[questionCounterAff] + "</b>";


function revealAnswerAff() {
    document.getElementById("affAnswer").innerHTML = answersAff[questionCounterAff];
    $("#affAnswerModal").modal("show");
}


function nextQuestionAff() {
    if (questionCounterAff + 1 === questionsAff.length) { //end of questions
        questionCounterAff++;
        document.getElementById("affQuestion").style.display = "none";
        document.getElementById("revealAffAnswer").style.display = "none";
        document.getElementById("restartMessageAff").style.display = "inline-block";
        document.getElementById("restartQuestionAff").style.display = "inline-block";
        document.getElementById("nextAffQuestion").style.display = "none";
    }
    else {
        questionCounterAff++;
        document.getElementById("restartMessageAff").style.display = "none";
        document.getElementById("restartQuestionAff").style.display = "none";
        document.getElementById("affQuestion").innerHTML = "<b>" + questionsAff[questionCounterAff] + "</b>";
    }
}

function prevQuestionAff() {
    if (!questionCounterAff) { //beginning of questions
        alert("Already at beginning of questions");
    }
    else {
        questionCounterAff--;
        document.getElementById("affQuestion").style.display = "block";
        document.getElementById("nextAffQuestion").style.display = "inline-block";
        document.getElementById("revealAffAnswer").style.display = "inline-block";
        document.getElementById("restartMessageAff").style.display = "none";
        document.getElementById("restartQuestionAff").style.display = "none";
        document.getElementById("affQuestion").innerHTML = "<b>" + questionsAff[questionCounterAff] + "</b>";
    }
}

function restartQuestionAff() {
    questionCounterAff = 0;
    document.getElementById("affQuestion").style.display = "block";
    document.getElementById("nextAffQuestion").style.display = "inline-block";
    document.getElementById("restartMessageAff").style.display = "none";
    document.getElementById("restartQuestionAff").style.display = "none";
    document.getElementById("affQuestion").innerHTML = "<b>" + questionsAff[questionCounterAff] + "</b>";
    document.getElementById("revealAffAnswer").style.display = "inline-block";
}
