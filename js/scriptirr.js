
var agoconcarr = [0, -9, -8, -7, -6];

var affirr = document.getElementById("affirrslider").defaultValue;
var effirr = document.getElementById("effirrslider").defaultValue;
var denirr = document.getElementById("denirrslider").defaultValue;
var efficirr = document.getElementById("efficiirrslider").defaultValue;
var agoaffirr = document.getElementById("antagoirr").value = document.getElementById("agoaffirrslider").defaultValue;

var animation = {
    transition: {
        duration: 100,
        easing: "exp-in-out"
    },
    frame: {
        duration: 0,
        redraw: false,
    }
}

//new vars
var dotsize = 10 // defines 50% dot size


/**
 * Checks if the input value is zero and returns the value 
 * @returns 
 */
function checkSliderMinIrr() {
    let ret = false;
    if (document.getElementById("affirrslider").value == 5) {
        ret = true
    }
    if (document.getElementById("effirrslider").value == -0.7) {
        ret = true
    }
    if (document.getElementById("denirrslider").value == -1) {
        ret = true
    }
    if (document.getElementById("efficiirrslider").value == 0) {
        ret = true
    }
    return ret
}

function updateAffinityIrr(value) {
    affirr = value;
    if (checkSliderMinIrr()) {
        Plotly.restyle("irreversible", 'visible', false)
        graphAlert("irralert", "aff")
    }
    else {
        graphRemoveAlert("irralert")
        Plotly.restyle("irreversible", 'visible', true)
        lineData0 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[0]);
        lineData1 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[1]);
        lineData2 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[2]);
        lineData3 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[3]);
        lineData4 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        Plotly.animate("irreversible", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] }, { x: halfData1[0], y: halfData1[1] }, {
                x: halfData2[0],
                y: halfData2[1]
            }, { x: halfData3[0], y: halfData3[1] }, { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
    }

}


// This is used to update the Concentration Values Table
function updateConcentrationIrr(value, index){
    // use this to reference the id of the box
    //let line_id = "comline" + index;
    agoconcarr[index] = value;

    // used from existing functions below. (updateEfficacyIrr())
    Plotly.restyle("irreversible", 'visible', true)
    lineData0 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[0]);
    lineData1 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[1]);
    lineData2 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[2]);
    lineData3 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[3]);
    lineData4 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    Plotly.animate("irreversible", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] }, { x: halfData1[0], y: halfData1[1] }, {
            x: halfData2[0],
            y: halfData2[1]
        }, { x: halfData3[0], y: halfData3[1] }, { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)

}

function updateEfficacyIrr(value) {
    effirr = value;
    if (checkSliderMinIrr()) {
        Plotly.restyle("irreversible", 'visible', false)
        graphAlert("irralert", "eff")
    }
    else {
        graphRemoveAlert("irralert")
        Plotly.restyle("irreversible", 'visible', true)
        lineData0 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[0]);
        lineData1 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[1]);
        lineData2 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[2]);
        lineData3 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[3]);
        lineData4 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        Plotly.animate("irreversible", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] }, { x: halfData1[0], y: halfData1[1] }, {
                x: halfData2[0],
                y: halfData2[1]
            }, { x: halfData3[0], y: halfData3[1] }, { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
    }
}

function updateDensityIrr(value) {
    denirr = value;
    if (checkSliderMinIrr()) {
        Plotly.restyle("irreversible", 'visible', false)
        graphAlert("irralert", "den")
    }
    else {
        graphRemoveAlert("irralert")
        Plotly.restyle("irreversible", 'visible', true)
        lineData0 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[0]);
        lineData1 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[1]);
        lineData2 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[2]);
        lineData3 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[3]);
        lineData4 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        Plotly.animate("irreversible", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] }, { x: halfData1[0], y: halfData1[1] }, {
                x: halfData2[0],
                y: halfData2[1]
            }, { x: halfData3[0], y: halfData3[1] }, { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
    }
}

function updateEfficiencyIrr(value) {
    efficirr = value;
    if (checkSliderMinIrr()) {
        Plotly.restyle("irreversible", 'visible', false)
        graphAlert("irralert", "effic")
    }
    else {
        graphRemoveAlert("irralert")
        Plotly.restyle("irreversible", 'visible', true)
        lineData0 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[0]);
        lineData1 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[1]);
        lineData2 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[2]);
        lineData3 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[3]);
        lineData4 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        Plotly.animate("irreversible", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] }, { x: halfData1[0], y: halfData1[1] }, {
                x: halfData2[0],
                y: halfData2[1]
            }, { x: halfData3[0], y: halfData3[1] }, { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
    }

}

function updateAgoAffinityIrr(value) {
    agoaffirr = document.getElementById("antagoirr").value = value;

    lineData0 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[0]);
    lineData1 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[1]);
    lineData2 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[2]);
    lineData3 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[3]);
    lineData4 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    Plotly.animate("irreversible", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] }, { x: halfData1[0], y: halfData1[1] }, {
            x: halfData2[0],
            y: halfData2[1]
        }, { x: halfData3[0], y: halfData3[1] }, { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
}

function resetIrr() {
    affirr = document.getElementById("affirrslider").value = document.getElementById("affirrslider").defaultValue;
    effirr = document.getElementById("effirrslider").value = document.getElementById("effirrslider").defaultValue;
    denirr = document.getElementById("denirrslider").value = document.getElementById("denirrslider").defaultValue;
    efficirr = document.getElementById("efficiirrslider").value = document.getElementById("efficiirrslider").defaultValue;
    agoaffirr = document.getElementById("agoaffirrslider").value = document.getElementById("agoaffirrslider").defaultValue;
    document.getElementById("antagoirr").value = document.getElementById("agoaffirrslider").defaultValue;

    //updates lines concentration
    document.getElementById("irrline2").value = document.getElementById("irrline2").defaultValue;
    document.getElementById("irrline3").value = document.getElementById("irrline3").defaultValue;
    document.getElementById("irrline4").value = document.getElementById("irrline4").defaultValue;
    document.getElementById("irrline5").value = document.getElementById("irrline5").defaultValue;
    agoconcarr = [0, -9, -8, -7, -6]; // need this to reset values

    lineData0 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[0]);
    lineData1 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[1]);
    lineData2 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[2]);
    lineData3 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[3]);
    lineData4 = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    Plotly.animate("irreversible", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] }, { x: halfData1[0], y: halfData1[1] }, {
            x: halfData2[0],
            y: halfData2[1]
        }, { x: halfData3[0], y: halfData3[1] }, { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
}

function calc50(lineData) {

    var halfMaxEffect = Math.max.apply(Math, lineData[1]) / 2; //get the 50% value
    var maxEffectAgoIndex = lineData[1].findIndex(function (number) { //get the x-index for the 50% value
        return number >= halfMaxEffect;
    });
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    var agoret = [[halfAgoEffect], [halfMaxEffect]];
    return agoret; //return x, y

}

function calcLinesIrr(affinity, efficacy, recepDensity, efficiency, agoaffinity, agoconcentration) {
    const STEP = 0.01;
    var data = [[], []];
    //Inverse log input values

    var affin = 10 ** (-1 * affinity);
    var efcay = 10 ** efficacy;
    var recep = 10 ** recepDensity;
    var efcey = 10 ** efficiency;
    var agoaffin = 10 ** (-1 * agoaffinity);

    if (agoconcentration == 0) {
        agoconc = 0;
        agoaffin = 0;
        for (i = -12; i < -2; i = i + STEP) {
            data[0].push(i);
            data[1].push((10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1-efcay)+affin));
        }
    }
    else {
        agoconc = 10 ** agoconcentration;
        for (i = -12; i < -2; i = i + STEP) {
            data[0].push(i);
            data[1].push((((10 ** i)) * efcay * recep * efcey * 100) / (((10 ** i)) * (efcay * recep * efcey + 1 - efcay + (agoconc / agoaffin)) + affin));
        }
    }

    return data;
}

var linecolours = ["#000000", "#ff6666", "#ff3333", "#ff0000", "#cc0000"]

function plotGraphIrr(chart) {

    var layout = {
        xaxis: {
            title: "[Agonist] (log M)",
            showline: true,
            range: [-12, -2],
            dtick: 1

        },
        yaxis: {
            title: "Effect (% Emax)",
            showline: true,
            range: [0, 100],
            dtick: 10

        }
    }

    var j;
    for (j = 0; j < 5; j++) {
        var data = [];
        var lineData = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[j])

        if (j == 0) {
            var graph = {
                x: lineData[0],
                y: lineData[1],
                mode: "lines",
                name: 0 + "nM",
                line: {
                    color: linecolours[j],
                    width: 1
                }
            }
        }
        else {
            var graph = {
                x: lineData[0],
                y: lineData[1],
                mode: "lines",
                //name: 10 ** agoconcarr[j] * 1000000000 + "nM",
                name: "[Antagonist] #" + j,
                line: {
                    color: linecolours[j],
                    width: 1
                }
            }
        }
        data.push(graph);

        Plotly.plot(chart, data, layout, { responsive: true });
    }
    var i;
    legendview = [true, false, false, false, false]
    for (i = 0; i < 5; i++) {
        var halfData = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[i]);
        data50 = calc50(halfData); //plot the 50% effect marker
        var trace1 = [{
            x: data50[0],
            y: data50[1],
            mode: 'markers',
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
        Plotly.plot(chart, trace1, layout, { responsive: true });
    }
}
plotGraphIrr("irreversible");


//QUESTION BOX
var questionsIrr = ["What is the principal effect produced by an irreversible receptor antagonist on an agonist dose-response curve?<br><i>Test this using the Dose Response Visualiser.</i>",
    "What effect does an irreversible antagonist with a higher affinity have on the position of the agonist dose-response curve?<br><i>Test this using the Dose Response Visualiser.</i>",
    "Does an irreversible antagonist affect the maximum effect induced by the agonist?<br><i>Test this using the Dose Response Visualiser.</i>",
    "Is the effect of an irreversible antagonist influenced by the properties of the agonist (Affinity, Intrinsic Efficacy) or the cell (R<sub>T</sub>, <i>&#947</i> )?<br><i>Test this using the Dose Response Visualiser.</i>",
    "What other factors might influence the actions of an irreversible antagonist on agonist-induced effects?",
    "Can an irreversible antagonist abolish agonist-induced effects?<br><i>Test this using the Dose Response Visualiser.</i>"];

var answersIrr = ["Irreversible antagonists have profound effects on agonist dose-response curves. <br><div style='text-align:center'><video width='320' height='240' controls><source src='images/Irrev. Antagonist - agonist DR effect.mp4' type='video/mp4'></source></video></div><br> The effect produced by irreversible antagonists is AGONIST-DEPENDENT (unlike competitive antagonists).  For PARTIAL AGONISTS (that need to activate all receptors to produce a sub-maximal response), the primary effect of an irreversible antagonist on the agonist dose-response curve is a REDUCTION IN THE MAXIMUM RESPONSE, with little effect on potency (EC<sub>50</sub> value).  For FULL AGONISTS (that do not need to activate all receptors to produce 100% Emax, i.e. there are spare receptors) the irreversible antagonist will not reduce the maximum effect until there is sufficient antagonism to block that fraction of the receptors required to achieve a maximal response.  Prior to reducing the maximal response, the irreversible antagonist will SHIFT THE FULL AGONIST DOSE-RESPONSE CURVE TO THE RIGHT (higher EC<sub>50</sub>, lower potency).   This effect can be observed using the visualiser.",
    "An irreversible antagonist with a higher affinity will exert is inhibitory actions at LOWER DOSES than an irreversible antagonist with a lower affinity.  This effect can be observed using the visualiser.",
    "<b>YES</b>, eventually irreversible antagonists will REDUCE THE MAXIMUM EFFECT induced by the agonist. For partial agonists (that need to activate all receptors to produce a maximal response), the irreversible antagonist will reduce the maximum response.  For full agonists (that do not need to activate all receptors to produce 100% Emax, i.e. there are spare receptors) the irreversible antagonist will not reduce the maximum effect until there is sufficient antagonism to block that fraction of the receptors required to achieve a maximal response.  This effect can be observed using the visualiser.",
    "<b>YES</b>, the inhibitory effect of an irreversible antagonist will be greater against agonists with low efficacy and in cells with low signal amplification (<i>&#947</i>) and fewer receptors (R<sub>T</sub>). The magnitude of the inhibitory effect produced by an irreversible antagonist does not depend on the affinity of the agonist. Test this using the Dose Response Visualiser.",
    "In addition to concentration, the magnitude of the effect produced by an irreversible antagonist is TIME-DEPENDENT – the longer the time the irreversible antagonist is incubated with the receptors the greater the reduction in the number of functional receptors, and the greater reduction in agonist-induced response. ",
    "<b>YES</b>, if used at sufficiently high concentration or for a sufficiently long time then the irreversible antagonist can reduce the number of functional receptors to zero, and thereby abolish agonist-induced responses.  This is a point of different between irreversible antagonists and competitive or allosteric antagonists. Test this using the Dose Response Visualiser."];

var questionCounterIrr = 0;
document.getElementById("irrQuestion").innerHTML = "<b>" + questionsIrr[questionCounterIrr] + "</b>";


function revealAnswerIrr() {
    document.getElementById("irrAnswer").innerHTML = answersIrr[questionCounterIrr];
    $('#irrAnswerModal').modal('show');
}


function nextQuestionIrr() {
    if (questionCounterIrr + 1 == questionsIrr.length) { //end of questions
        questionCounterIrr++;
        document.getElementById("irrQuestion").style.display = "none";
        document.getElementById("revealIrrAnswer").style.display = "none";
        document.getElementById("restartMessageIrr").style.display = "inline-block";
        document.getElementById("restartQuestionIrr").style.display = "inline-block";
        document.getElementById("nextIrrQuestion").style.display = "none";
    }
    else {
        questionCounterIrr++;
        document.getElementById("restartMessageIrr").style.display = "none";
        document.getElementById("restartQuestionIrr").style.display = "none";
        document.getElementById("irrQuestion").innerHTML = "<b>" + questionsIrr[questionCounterIrr] + "</b>";
    }
}

function prevQuestionIrr() {
    if (!questionCounterIrr) { //beginning of questions
        alert("Already at beginning of questions");
    }
    else {
        questionCounterIrr--;
        document.getElementById("irrQuestion").style.display = "block";
        document.getElementById("nextIrrQuestion").style.display = "inline-block";
        document.getElementById("revealIrrAnswer").style.display = "inline-block";
        document.getElementById("restartMessageIrr").style.display = "none";
        document.getElementById("restartQuestionIrr").style.display = "none";
        document.getElementById("irrQuestion").innerHTML = "<b>" + questionsIrr[questionCounterIrr] + "</b>";
    }
}

function restartQuestionIrr() {
    questionCounterIrr = 0;
    document.getElementById("irrQuestion").style.display = "block";
    document.getElementById("nextIrrQuestion").style.display = "inline-block";
    document.getElementById("restartMessageIrr").style.display = "none";
    document.getElementById("restartQuestionIrr").style.display = "none";
    document.getElementById("irrQuestion").innerHTML = "<b>" + questionsIrr[questionCounterIrr] + "</b>";
    document.getElementById("revealIrrAnswer").style.display = "inline-block";
}