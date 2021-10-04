var affcom = document.getElementById("affcomslider").defaultValue;
var effcom = document.getElementById("effcomslider").defaultValue;
var dencom = document.getElementById("dencomslider").defaultValue;
var efficcom = document.getElementById("efficicomslider").defaultValue;
var agoaffcom = document.getElementById("antagocomp").value = document.getElementById("agoaffcomslider").defaultValue;
var comHalfMaxEffect;
var agoconcarr = [0, -9, -8, -7, -6];
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
var data50;
var calc50;

//new vars
var dotsize = 10 // defines 50% dot size

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

function findComHalfMaxEffect(lineData){
    comHalfMaxEffect = Math.max.apply(Math, lineData[1])/2;
} 

function checkSliderMinCom(){
    let ret = false;
    if(document.getElementById("affcomslider").value === "5"){
        ret = true;
    }
    if(document.getElementById("effcomslider").value === "-0.7"){
        ret = true;
    }
    if(document.getElementById("dencomslider").value === "-1"){
        ret = true;
    }
    if(document.getElementById("efficicomslider").value === "0"){
        ret = true;
    }
    return ret;
}

function calcLinesCom(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoconcentration){
    const STEP = 0.01;
    var data = [[],[]];

    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);
    var agoconc;

    // graphs base line
    if(agoconcentration === 0){
        agoconc = 0;
        agoaffin = 0;
        for (var i=-12; i<-2;i=i+STEP){
            //effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin);
            data[0].push(i);
            data[1].push((10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1-efcay)+affin));
        }
    }
    //graphs other lines
    else{
        agoconc = 10**agoconcentration;
        for (var i=-12; i<-2;i=i+STEP){
            //effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin*(1+agoconc/agoaffin));
            data[0].push(i);
            data[1].push((10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1-efcay)+affin*(1+agoconc/agoaffin)));
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

function updateAffinityCom(value){
    affcom = value;
    if(checkSliderMinCom()){
        Plotly.restyle("competitive", "visible", false);
        graphAlert("comalert","aff");
    }
    else{
        graphRemoveAlert("comalert");
        Plotly.restyle("competitive", "visible", true);
        lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[3]);
        lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);

        Plotly.animate("competitive",{
                data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
                {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
                y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],
                traces: [0,1,2,3,4,5,6,7,8,9],
                layout: {}
                },animation);
    }
} 

function updateEfficacyCom(value){
    effcom = value;
    if(checkSliderMinCom()){
        Plotly.restyle("competitive", "visible", false);
        graphAlert("comalert","eff");
    }
    else{
        graphRemoveAlert("comalert");
        Plotly.restyle("competitive", "visible", true);
        lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[3]);
        lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);

        Plotly.animate("competitive",{
                data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
                {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
                y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],
                traces: [0,1,2,3,4,5,6,7,8,9],
                layout: {}
                },animation);
    }

} 


// This is used to update the Concentration Values Table
function updateConcentrationCom(value, index){
    // use this to reference the id of the box
    //let line_id = "comline" + index;
    agoconcarr[index] = value;

    // used from existing functions below. (updateDensityCom())
    Plotly.restyle("competitive", "visible", true);
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);    
        
    Plotly.animate("competitive",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],
        traces: [0,1,2,3,4,5,6,7,8,9],
        layout: {}
        },animation);

}

function updateDensityCom(value){
    dencom = value;
    if(checkSliderMinCom()){
        Plotly.restyle("competitive", "visible", false);
        graphAlert("comalert","den");
    }
    else{
        graphRemoveAlert("comalert");
        Plotly.restyle("competitive", "visible", true);
        lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[3]);
        lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);    
        
        Plotly.animate("competitive",{
                data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
                {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
                y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],
                traces: [0,1,2,3,4,5,6,7,8,9],
                layout: {}
                },animation);
    }
} 

function updateEfficiencyCom(value){
    efficcom = value;
    if(checkSliderMinCom()){
        Plotly.restyle("competitive", "visible", false);
        graphAlert("comalert","effic");
    }
    else{
        graphRemoveAlert("comalert");
        Plotly.restyle("competitive", "visible", true);
        lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[3]);
        lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);   
        Plotly.animate("competitive",{
                data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
                {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
                y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],
                traces: [0,1,2,3,4,5,6,7,8,9],
                layout: {}
                },animation);
    }

} 

function updateAgoAffinityCom(value){
    agoaffcom = document.getElementById("antagocomp").value = value;
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);

    Plotly.animate("competitive",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],
     		traces: [0,1,2,3,4,5,6,7,8,9],
     		layout: {}
     		},animation);

}

function resetCom(){
	affcom = document.getElementById("affcomslider").value = document.getElementById("affcomslider").defaultValue;
	effcom = document.getElementById("effcomslider").value = document.getElementById("effcomslider").defaultValue;
	dencom = document.getElementById("dencomslider").value = document.getElementById("dencomslider").defaultValue;
	efficcom = document.getElementById("efficicomslider").value = document.getElementById("efficicomslider").defaultValue;
    agoaffcom = document.getElementById("agoaffcomslider").value = document.getElementById("agoaffcomslider").defaultValue;
    document.getElementById("antagocomp").value = document.getElementById("agoaffcomslider").defaultValue;

    //updates lines concentration
    document.getElementById("comline2").value = document.getElementById("comline2").defaultValue;
    document.getElementById("comline3").value = document.getElementById("comline3").defaultValue;
    document.getElementById("comline4").value = document.getElementById("comline4").defaultValue;
    document.getElementById("comline5").value = document.getElementById("comline5").defaultValue;
    agoconcarr = [0, -9, -8, -7, -6]; // need this to reset values
    
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom, agoconcarr[4]);    
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);

    Plotly.animate("competitive",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],
            traces: [0,1,2,3,4,5,6,7,8,9],
            layout: {}
            },animation);
}

function plotGraphCom(chart){
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
    for(var j = 0; j<5; j++){
        var data = [];
        var lineData = calcLinesCom(affcom, effcom, dencom, efficcom, agoaffcom, agoconcarr[j]);
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
                //old 
                //name: 10**agoconcarr[j]*1000000000+"nM",
                //new
                name: "[Antagonist] #" + j,
                line: {
                    color: linecolours[j],
                    width: 1.2,
                    dash: linestyles[j]
                }
    		}
        }
        data.push(graph);
        Plotly.plot(chart,data,layout, {responsive: true}); 
    }
    var legendview = [true, false, false, false, false];
    for(var i = 0; i<5; i++){
        var halfData = calcLinesCom(affcom, effcom, dencom, efficcom, agoaffcom, agoconcarr[i]);
        findComHalfMaxEffect(calcLinesCom(affcom, effcom, dencom, efficcom, agoaffcom, agoconcarr[0]));
        data50 = calc50(halfData);
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
plotGraphCom("competitive");

//QUESTION BOX
var questionsCom = ["What is the principal effect produced by a competitive receptor antagonist on an agonist dose-response curve?<br><i>Test this using the Dose Response Visualiser.</i>",
    "What effect does a competitive antagonist with a higher affinity have on the position of the agonist dose-response curve?<br><i>Test this using the Dose Response Visualiser.</i>",
    "Does a competitive antagonist affect the maximum effect induced by the agonist?<br><i>Test this using the Dose Response Visualiser.</i>",
    "Is the effect of the competitive antagonist likely to be influenced by the properties of the agonist (Affinity, Intrinsic Efficacy) or the cell (R<sub>T</sub>, <i>&#947</i>)?<br><i>Test this using the Dose Response Visualiser.</i>",
    "Why might the actions of competitive antagonists be best demonstrated using agonists with high potency?<br><i>Test this using the Dose Response Visualiser.</i>",
    "Why do competitive antagonists produce unlimited rightward shifts of the agonist dose-response curve?"];

var answersCom = ["The principal effect of a competitive antagonist is to produce a <b>PARALLEL, RIGHTWARD SHIFT OF THE AGONIST DOSE-RESPONSE CURVE</b> with no reduction in the maximum agonist-induced effect. <br><div style='text-align:center'><video width='320' height='240' controls><source src='images/Comp. Antagonist - agonist DR effect.mp4' type='video/mp4'></source></video></div><br> The magnitude of the rightward shift increase as the [competitive antagonist] increases.  Experimentally the magnitude of the shift can be used to measure the affinity of the competitive antagonist for the receptor (Schild analysis). This effect can be observed using the visualiser.",
    "A competitive antagonist with a higher affinity will cause a <b>LARGER RIGHTWARD SHIFT</b> of the agonist dose-response curve, compared to a lower affinity antagonist (when used at the same concentration), as the higher affinity antagonist will occupy a greater proportion of receptors. This effect can be observed using the visualiser.",
    "<b>NO</b>, a competitive antagonist should cause a parallel rightward shift of the agonist dose-response curve <b>WITHOUT ANY CHANGE IN THE MAXIMUM EFFECT</b> produced by the agonist.  This is because theoretically the agonist (if used at a sufficiently high concentration) should always be able to out-compete the antagonist. This effect can be observed using the visualiser.",
    "<b>NO</b>, a competitive antagonist should cause the <b>SAME EXTENT OF RIGHTWARD SHIFT IRRESPECTIVE OF THE PROPERTIES OF THE AGONIST OR CELL.</b> Test this using the Dose Response Visualiser.",
    "The major effect produced by a competitive antagonist is the production of a parallel, rightward shift of the agonist dose-response curve.  The greater the potency of the agonist, the more easily the rightward shift of the agonist dose-response curve can be demonstrated before the agonists effects are limited by properties such as solubility or toxicity. This effect can be observed using the visualiser.",
    "A key factor is that both the agonist and the antagonist bind <b>REVERSIBLY</b> to the same binding site. The probability of the receptor binding site is being bound by the agonist or antagonist is determined by just two factors – the relative affinities and concentrations of the agonist and antagonist. <br><div style='text-align:center'><video width='320' height='240' controls><source src='images/Comp. Antagonist - agonist DR effect.mp4' type='video/mp4'></source></video></div><br>"];

var questionCounterCom = 0;
document.getElementById("comQuestion").innerHTML = "<b>" + questionsCom[questionCounterCom] + "</b>";


function revealAnswerCom() {
    document.getElementById("comAnswer").innerHTML = answersCom[questionCounterCom];
    $("#comAnswerModal").modal("show");
}


function nextQuestionCom() {
    if (questionCounterCom + 1 === questionsCom.length) { //end of questions
        questionCounterCom++;
        document.getElementById("comQuestion").style.display = "none";
        document.getElementById("revealComAnswer").style.display = "none";
        document.getElementById("restartMessageCom").style.display = "inline-block";
        document.getElementById("restartQuestionCom").style.display = "inline-block";
        document.getElementById("nextComQuestion").style.display = "none";
    }
    else {
        questionCounterCom++;
        document.getElementById("restartMessageCom").style.display = "none";
        document.getElementById("restartQuestionCom").style.display = "none";
        document.getElementById("comQuestion").innerHTML = "<b>" + questionsCom[questionCounterCom] + "</b>";
    }
}

function prevQuestionCom() {
    if (!questionCounterCom) { //beginning of questions
        alert("Already at beginning of questions");
    }
    else {
        questionCounterCom--;
        document.getElementById("comQuestion").style.display = "block";
        document.getElementById("nextComQuestion").style.display = "inline-block";
        document.getElementById("revealComAnswer").style.display = "inline-block";
        document.getElementById("restartMessageCom").style.display = "none";
        document.getElementById("restartQuestionCom").style.display = "none";
        document.getElementById("comQuestion").innerHTML = "<b>" + questionsCom[questionCounterCom] + "</b>";
    }
}

function restartQuestionCom() {
    questionCounterCom = 0;
    document.getElementById("comQuestion").style.display = "block";
    document.getElementById("nextComQuestion").style.display = "inline-block";
    document.getElementById("restartMessageCom").style.display = "none";
    document.getElementById("restartQuestionCom").style.display = "none";
    document.getElementById("comQuestion").innerHTML = "<b>" + questionsCom[questionCounterCom] + "</b>";
    document.getElementById("revealComAnswer").style.display = "inline-block";
}
