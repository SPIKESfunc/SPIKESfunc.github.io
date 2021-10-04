var agoconcarr = [0, -9, -8, -7, -6];
var affcom = document.getElementById("affcomslider").defaultValue;
var effcom = document.getElementById("effcomslider").defaultValue;
var dencom = document.getElementById("dencomslider").defaultValue;
var efficcom = document.getElementById("efficicomslider").defaultValue;
var agoaff = document.getElementById("agoaffnum").defaultValue;
var agoafflog = document.getElementById("agoafflognum").defaultValue;
var efflevelcom = document.getElementById("efflevelcom").defaultValue;
document.getElementById("displayeffectcom").innerHTML = (efflevelcom * 100).toFixed(2);
document.getElementById("efftablecom").innerHTML = (efflevelcom * 100).toFixed(2);
var isPointValid = [true, true, true, true];


var antval0 = document.getElementById("ant0").defaultValue;
var antval1 = document.getElementById("ant1").defaultValue;
var antval2 = document.getElementById("ant2").defaultValue;
var antval3 = document.getElementById("ant3").defaultValue;
var antval4 = document.getElementById("ant4").defaultValue;
var antlogval1 = document.getElementById("antlog1").defaultValue;
var antlogval2 = document.getElementById("antlog2").defaultValue;
var antlogval3 = document.getElementById("antlog3").defaultValue;
var antlogval4 = document.getElementById("antlog4").defaultValue;
var comHalfMaxEffect;

$(document).ready(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.visibility = "visible";
    document.getElementById("page").style.position = "relative";
    document.getElementById("footer").style.visibility = "visible";
})

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


function titleCom() {
    document.getElementById("tabtitle").innerHTML = "Schild Plot Generator for Competitive Antagonist"
}

//new vars
var dotsize = 10 // defines 50% dot size


function findComHalfMaxEffect(lineData) {
    comHalfMaxEffect = Math.max.apply(Math, lineData[1]) * efflevelcom;
}

function calc50(lineData) {

    var maxEffectAgoIndex = lineData[1].findIndex(function (number) { //get the x-index for the 50% value
        return number >= comHalfMaxEffect;
    });
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    var agoret = [[halfAgoEffect], [comHalfMaxEffect]];
    return agoret; //return x, y
}

function resetQuant() {
    agoconcarr = [0, -9, -8, -7, -6];
    affcom = document.getElementById("affcomslider").value = document.getElementById("affcomslider").defaultValue;
    effcom = document.getElementById("effcomslider").value = document.getElementById("effcomslider").defaultValue;
    dencom = document.getElementById("dencomslider").value = document.getElementById("dencomslider").defaultValue;
    efficcom = document.getElementById("efficicomslider").value = document.getElementById("efficicomslider").defaultValue;
    agoaff = document.getElementById("agoaffnum").value = document.getElementById("agoaffnum").defaultValue;
    agoafflog = document.getElementById("agoafflognum").value = document.getElementById("agoafflognum").defaultValue;
    efflevelcom = document.getElementById("efflevelcom").value = document.getElementById("efflevelcom").defaultValue;
    document.getElementById("displayeffectcom").innerHTML = (efflevelcom * 100).toFixed(2);
    document.getElementById("efftablecom").innerHTML = (efflevelcom * 100).toFixed(2);

    antval0 = document.getElementById("ant0").value = document.getElementById("ant0").defaultValue;
    antval1 = document.getElementById("ant1").value = document.getElementById("ant1").defaultValue;
    antval2 = document.getElementById("ant2").value = document.getElementById("ant2").defaultValue;
    antval3 = document.getElementById("ant3").value = document.getElementById("ant3").defaultValue;
    antval4 = document.getElementById("ant4").value = document.getElementById("ant4").defaultValue;
    antlogval1 = document.getElementById("antlog1").value = document.getElementById("antlog1").defaultValue;
    antlogval2 = document.getElementById("antlog2").value = document.getElementById("antlog2").defaultValue;
    antlogval3 = document.getElementById("antlog3").value = document.getElementById("antlog3").defaultValue;
    antlogval4 = document.getElementById("antlog4").value = document.getElementById("antlog4").defaultValue;
    lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    updateValid(halfData1, halfData2, halfData3, halfData4);

    updateEverything();
    Plotly.animate("quantitative", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
    Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
}

function graphAlert(div) {

    document.getElementById(div).innerHTML = "Agonist property has decreased too far to sustain curve"
}

function graphRemoveAlert(div) {
    document.getElementById(div).innerHTML = ""
}

function checkSliderMinCom() {
    let ret = false;
    if (document.getElementById("affcomslider").value == 4) {
        ret = true
    }
    if (document.getElementById("effcomslider").value == 0.04) {
        ret = true
    }
    if (document.getElementById("dencomslider").value == 0.04) {
        ret = true
    }
    if (document.getElementById("efficicomslider").value == 0.04) {
        ret = true
    }
    if (document.getElementById("efflevelcom").value == 0) {
        ret = true
    }
    return ret
}

/**
function schildDataFunction() {
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
}
**/


function updateAffinityCom(value) {
    affcom = value;
    if (checkSliderMinCom()) {
        Plotly.restyle("quantitative", 'visible', false)
        graphAlert("quantalert")
    }
    else {
        graphRemoveAlert("quantalert")
        Plotly.restyle("quantitative", 'visible', true)
        lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
        lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
        findComHalfMaxEffect(lineData0);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        updateValid(halfData1, halfData2, halfData3, halfData4);

        updateEverything();
        Plotly.animate("quantitative", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] },
            { x: halfData1[0], y: halfData1[1] },
            { x: halfData2[0], y: halfData2[1] },
            { x: halfData3[0], y: halfData3[1] },
            { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
        schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
        Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    }
}

function updateEfficacyCom(value) {
    effcom = value;
    if (checkSliderMinCom()) {
        Plotly.restyle("quantitative", 'visible', false)
        graphAlert("quantalert")
    }
    else {
        graphRemoveAlert("quantalert")
        Plotly.restyle("quantitative", 'visible', true)
        lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
        lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
        findComHalfMaxEffect(lineData0);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        updateValid(halfData1, halfData2, halfData3, halfData4);

        updateEverything();
        Plotly.animate("quantitative", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] },
            { x: halfData1[0], y: halfData1[1] },
            { x: halfData2[0], y: halfData2[1] },
            { x: halfData3[0], y: halfData3[1] },
            { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
        schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
        Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    }
}

function updateDensityCom(value) {
    dencom = value;
    if (checkSliderMinCom()) {
        Plotly.restyle("quantitative", 'visible', false)
        graphAlert("quantalert")
    }
    else {
        graphRemoveAlert("quantalert")
        Plotly.restyle("quantitative", 'visible', true)
        lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
        lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
        findComHalfMaxEffect(lineData0);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        updateValid(halfData1, halfData2, halfData3, halfData4);
        updateEverything();
        Plotly.animate("quantitative", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] },
            { x: halfData1[0], y: halfData1[1] },
            { x: halfData2[0], y: halfData2[1] },
            { x: halfData3[0], y: halfData3[1] },
            { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
        schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
        Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    }

}

function updateEfficiencyCom(value) {
    efficcom = value;
    if (checkSliderMinCom()) {
        Plotly.restyle("quantitative", 'visible', false)
        graphAlert("quantalert")
    }
    else {
        graphRemoveAlert("quantalert")
        Plotly.restyle("quantitative", 'visible', true)
        lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
        lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
        findComHalfMaxEffect(lineData0);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        updateValid(halfData1, halfData2, halfData3, halfData4);

        updateEverything();
        Plotly.animate("quantitative", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] },
            { x: halfData1[0], y: halfData1[1] },
            { x: halfData2[0], y: halfData2[1] },
            { x: halfData3[0], y: halfData3[1] },
            { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
        schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
        Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    }

}

function updateAgoAffinity(value) {
    agoaff = value;
    agoafflog = -1 * Math.log10(value);
    document.getElementById("agoafflognum").value = agoafflog.toFixed(2);
    lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    updateValid(halfData1, halfData2, halfData3, halfData4);

    updateEverything();
    Plotly.animate("quantitative", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
    Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)

}

function updateAgoAffinityLog(value) {
    agoafflog = value;
    agoaff = Math.pow(10, -value);
    document.getElementById("agoaffnum").value = agoaff.toExponential(2);
    lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    updateValid(halfData1, halfData2, halfData3, halfData4);

    updateEverything();
    Plotly.animate("quantitative", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
    Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)

}

function updateefflevelCom(value) {
    efflevelcom = value;
    document.getElementById("displayeffectcom").innerHTML = (efflevelcom * 100).toFixed(2);
    document.getElementById("efftablecom").innerHTML = (efflevelcom * 100).toFixed(2);
    if (checkSliderMinCom()) {
        Plotly.restyle("quantitative", 'visible', false)
        graphAlert("quantalert")
    }
    else {
        graphRemoveAlert("quantalert")
        Plotly.restyle("quantitative", 'visible', true)
        lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
        lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
        findComHalfMaxEffect(lineData0);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        updateValid(halfData1, halfData2, halfData3, halfData4);

        updateEverything();
        Plotly.animate("quantitative", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] },
            { x: halfData1[0], y: halfData1[1] },
            { x: halfData2[0], y: halfData2[1] },
            { x: halfData3[0], y: halfData3[1] },
            { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
        schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
        Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    }
}

function updateAntagonist1(value) {
    antval1 = value;
    agoconcarr[1] = Math.log10(value);
    document.getElementById("antlog1").value = agoconcarr[1].toFixed(2);
    lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    updateValid(halfData1, halfData2, halfData3, halfData4);

    updateEverything();
    Plotly.animate("quantitative", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
    Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)

}

function updateAntagonistLog1(value) {
    agoconcarr[1] = value;
    antval1 = Math.pow(10, value);
    document.getElementById("ant1").value = antval1.toExponential(2);
    lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    updateValid(halfData1, halfData2, halfData3, halfData4);

    updateEverything();
    Plotly.animate("quantitative", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
    Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)

}

function updateAntagonist2(value) {
    antval2 = value;
    agoconcarr[2] = Math.log10(value);
    document.getElementById("antlog2").value = agoconcarr[2].toFixed(2);
    lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    updateValid(halfData1, halfData2, halfData3, halfData4);

    updateEverything();
    Plotly.animate("quantitative", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
    Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)

}

function updateAntagonistLog2(value) {
    agoconcarr[2] = value;
    antval2 = Math.pow(10, value);
    document.getElementById("ant2").value = antval2.toExponential(2);
    lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    updateValid(halfData1, halfData2, halfData3, halfData4);

    updateEverything();
    Plotly.animate("quantitative", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
    Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
}

function updateAntagonist3(value) {
    antval3 = value;
    agoconcarr[3] = Math.log10(value);
    document.getElementById("antlog3").value = agoconcarr[3].toFixed(2);
    lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    updateValid(halfData1, halfData2, halfData3, halfData4);

    updateEverything();
    Plotly.animate("quantitative", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
    Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
}

function updateAntagonistLog3(value) {
    agoconcarr[3] = value;
    antval3 = Math.pow(10, value);
    document.getElementById("ant3").value = antval3.toExponential(2);
    lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    updateValid(halfData1, halfData2, halfData3, halfData4);

    updateEverything();
    Plotly.animate("quantitative", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
    Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)

}

function updateAntagonist4(value) {
    antval4 = value;
    agoconcarr[4] = Math.log10(value);
    document.getElementById("antlog4").value = agoconcarr[4].toFixed(2);
    lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    updateValid(halfData1, halfData2, halfData3, halfData4);

    updateEverything();
    Plotly.animate("quantitative", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
    Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
}

function updateAntagonistLog4(value) {
    agoconcarr[4] = value;
    antval4 = Math.pow(10, value);
    document.getElementById("ant4").value = antval4.toExponential(2);
    lineData0 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[4]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    updateValid(halfData1, halfData2, halfData3, halfData4);

    updateEverything();
    Plotly.animate("quantitative", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], agoconcarr[4], logdr1, logdr2, logdr3, logdr4);
    Plotly.animate("schild", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)

}

function calcAgoHalfEffect(affinity, efficacy, recepDensity, efficiency, agoaffinity, antagconc) {
    var ago;
    var affin = 10 ** (-1 * affinity);
    var efcay = 10 ** efficacy;
    var recep = 10 ** recepDensity;
    var efcey = 10 ** efficiency;
    var agoaffin = 10 ** (-1 * agoaffinity);
    var antconc = antagconc;
    ago = (comHalfMaxEffect * (affin * (1 + antconc / agoaffin))) / ((efcay * recep * efcey * 100) - (comHalfMaxEffect * (efcay * recep * efcey + 1)));
    return ago;
}

function calcDoseRatio(presant, absant) {
    var doserat;
    doserat = presant / absant;
    return doserat;
}

function calcLogDR(doseratio) {
    var logdr;
    logdr = Math.log10(doseratio - 1);
    return logdr;
}

function updateEverything() {
    anthalfeff0 = document.getElementById("anteff0").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval0).toExponential(2);
    anthalfeff1 = document.getElementById("anteff1").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval1).toExponential(2);
    anthalfeff2 = document.getElementById("anteff2").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval2).toExponential(2);
    anthalfeff3 = document.getElementById("anteff3").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval3).toExponential(2);
    anthalfeff4 = document.getElementById("anteff4").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval4).toExponential(2);

    doseratio1 = document.getElementById("antdose1").value = calcDoseRatio(anthalfeff1, anthalfeff0).toFixed(2);
    doseratio2 = document.getElementById("antdose2").value = calcDoseRatio(anthalfeff2, anthalfeff0).toFixed(2);
    doseratio3 = document.getElementById("antdose3").value = calcDoseRatio(anthalfeff3, anthalfeff0).toFixed(2);
    doseratio4 = document.getElementById("antdose4").value = calcDoseRatio(anthalfeff4, anthalfeff0).toFixed(2);

    logdr1 = document.getElementById("antlogdr1").value = calcLogDR(doseratio1).toFixed(2);
    logdr2 = document.getElementById("antlogdr2").value = calcLogDR(doseratio2).toFixed(2);
    logdr3 = document.getElementById("antlogdr3").value = calcLogDR(doseratio3).toFixed(2);
    logdr4 = document.getElementById("antlogdr4").value = calcLogDR(doseratio4).toFixed(2);

    updateSchildPropertyTableCom();
}

function calcLinesCom(affinity, efficacy, recepDensity, efficiency, agoaffinity, agoconcentration) {
    const STEP = 0.01;
    var data = [[], []];

    var affin = 10 ** (-1 * affinity);
    var efcay = 10 ** efficacy;
    var recep = 10 ** recepDensity;
    var efcey = 10 ** efficiency;
    var agoaffin = 10 ** (-1 * agoaffinity);
    var agoconc;

    // graphs base line
    if (agoconcentration === 0) {
        agoconc = 0;
        agoaffin = 0;
        for (var i = -12; i < -2; i = i + STEP) {
            //effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin);
            data[0].push(i);
            data[1].push((10 ** i * efcay * recep * efcey * 100) / (10 ** i * (efcay * recep * efcey + 1 - efcay) + affin));
        }
    }
    //graphs other lines
    else {
        agoconc = 10 ** agoconcentration;
        for (var i = -12; i < -2; i = i + STEP) {
            //effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin*(1+agoconc/agoaffin));
            data[0].push(i);
            data[1].push((10 ** i * efcay * recep * efcey * 100) / (10 ** i * (efcay * recep * efcey + 1 - efcay) + affin * (1 + agoconc / agoaffin)));
        }
    }
    return data;
}

var linecolours = ["#000000", "#ff6666", "#ff3333", "#ff0000", "#ff0000"]

function plotGraphCom(chart) {
    var layout = {
        height: 372,
        width: 450,
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
            tickvals: [0, 20, 40, 60, 80, 100],
            dtick: 10
        }
    }
    var j;

    for (j = 0; j < 5; j++) {
        var data = []
        var lineData = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[j])
        if (j == 0) {
            var graph = {
                x: lineData[0],
                y: lineData[1],
                mode: "lines",
                name: 0 + "nM",
                line: {
                    color: linecolours[j],
                    width: 1
                },
                showlegend: false
            }
        }
        else {
            var graph = {
                x: lineData[0],
                y: lineData[1],
                mode: "lines",
                name: 10 ** agoconcarr[j] * 1000000000 + "nM",
                line: {
                    color: linecolours[j],
                    width: 1
                },
                showlegend: false
            }
        }
        data.push(graph);
        Plotly.plot(chart, data, layout, { responsive: true });
    }

    var i;
    legendview = [true, false, false, false, false]
    for (i = 0; i < 5; i++) {
        var halfData = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[i]);
        findComHalfMaxEffect(calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]));
        data50 = calc50(halfData); //plot the 50% effect marker

        var trace1 = [{
            x: data50[0],
            y: data50[1],
            mode: 'markers',
            name: "EC Value",
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
plotGraphCom("quantitative");

var anthalfeff0 = document.getElementById("anteff0").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval0).toExponential(2);
var anthalfeff1 = document.getElementById("anteff1").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval1).toExponential(2);
var anthalfeff2 = document.getElementById("anteff2").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval2).toExponential(2);
var anthalfeff3 = document.getElementById("anteff3").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval3).toExponential(2);
var anthalfeff4 = document.getElementById("anteff4").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval4).toExponential(2);

var doseratio1 = document.getElementById("antdose1").value = calcDoseRatio(anthalfeff1, anthalfeff0).toFixed(2);
var doseratio2 = document.getElementById("antdose2").value = calcDoseRatio(anthalfeff2, anthalfeff0).toFixed(2);
var doseratio3 = document.getElementById("antdose3").value = calcDoseRatio(anthalfeff3, anthalfeff0).toFixed(2);
var doseratio4 = document.getElementById("antdose4").value = calcDoseRatio(anthalfeff4, anthalfeff0).toFixed(2);

var logdr1 = document.getElementById("antlogdr1").value = calcLogDR(doseratio1).toFixed(2);
var logdr2 = document.getElementById("antlogdr2").value = calcLogDR(doseratio2).toFixed(2);
var logdr3 = document.getElementById("antlogdr3").value = calcLogDR(doseratio3).toFixed(2);
var logdr4 = document.getElementById("antlogdr4").value = calcLogDR(doseratio4).toFixed(2);

updateSchildPropertyTableCom();

function updateValid(data0, data1, data2, data3) {
    var validdata = [data0[0], data1[0], data2[0], data3[0]];

    for (i = 0; i < 4; i++) {
        if (validdata[i] >= -12 && validdata[i] <= -2) {
            isPointValid[i] = true;
        }
        else {
            isPointValid[i] = false;
        }
    }
}

function calcSchild(logval1, logval2, logval3, logval4, dr1, dr2, dr3, dr4) { //add 3 other concentrations as args

    var data = [[], []];
    var allxLogs = [logval1, logval2, logval3, logval4] //x values for the schild
    var alllogDr1 = [dr1, dr2, dr3, dr4]
    var xLogs = [];
    var logDr1 = [];
    var j = 0;

    for (i = 0; i < 4; i++) {
        if (isPointValid[i]) {
            xLogs[j] = allxLogs[i];
            logDr1[j] = alllogDr1[i];
            j++;
        }
    }

    data[0] = xLogs;
    data[1] = logDr1;
    return data;

}

function plotSchild(chart) {
    var layout = {
        height: 403,
        width: 450,
        xaxis: {
            title: "Log [Antagonist] (log M)",
            showline: true,
            range: [-11, -4],

        },
        yaxis: {
            title: "Log(DR-1)",
            showline: true,
            range: [0, 4],
            tickvals: [0, 1, 2, 3, 4]

        },
    }
    var data = []

    var lineData = calcSchild(antlogval1, antlogval2, antlogval3, antlogval4, logdr1, logdr2, logdr3, logdr4);
    var trace1 = {
        x: lineData[0],
        y: lineData[1],
        mode: 'lines+markers',
        line: {
            width: 1
        }
    }
    data.push(trace1);

    Plotly.plot(chart, data, layout, { responsive: true });
}

plotSchild("schild");

//Define a function to calculate real line values for Shild Plot Property Table, the formulas need to be modified here, this part hasn't been finished yet.
function updateSchildPropertyTableCom(){
    //Get x values and y values.
    var tableDataCom = calcSchild(antlogval1, antlogval2, antlogval3, antlogval4, logdr1, logdr2, logdr3, logdr4);
    var xtableDataCom = tableDataCom[0];
    var ytableDataCom = tableDataCom[1];
    for (i = 0; i < xtableDataCom.length; i++){
        xtableDataCom[i] = Number(xtableDataCom[i]);
    }
    for (i = 0; i < ytableDataCom.length; i++){
        ytableDataCom[i] = Number(ytableDataCom[i]);
    }

    //Calculate the slope.
    var slopeValueCom = (ytableDataCom[3] - ytableDataCom[2]) / (xtableDataCom[3] - xtableDataCom[2]);
    document.getElementById("slopevaluecom").innerHTML = slopeValueCom.toFixed(3);
    //document.getElementById("slopevaluecom").innerHTML = xtableDataCom[3];

    //Calculate pA2.
    var bCom = ytableDataCom[0] - (slopeValueCom * xtableDataCom[0]);
    var pA2ValueCom = (0 - bCom) / slopeValueCom;
    document.getElementById("pA2valuecom").innerHTML = pA2ValueCom.toFixed(3);

    //Calculate R square.

    //Calculate the mean of x.
    var xtotal = 0;
    for (var i = 0; i < xtableDataCom.length; i++) {
      xtotal += xtableDataCom[i];
    }
    var xmean = xtotal/xtableDataCom.length;

    //Calculate the mean of y.
    var ytotal = 0;
    for (var i = 0; i < ytableDataCom.length; i++) {
      ytotal += ytableDataCom[i];
    }
    var ymean = ytotal/ytableDataCom.length;

    //Calculate sum of regression.
    var regressionSum = 0;
    for (var i = 0; i < xtableDataCom.length; i++) {
        regressionSum += (xtableDataCom[i] - xmean) * (ytableDataCom[i] - ymean);
    }

    //Calculate sum of total.
    var sumx2 = 0;
    for (var i = 0; i < xtableDataCom.length; i++) {
        sumx2 += (xtableDataCom[i] - xmean) ** 2;
    }

    var sumy2 = 0;
    for (var i = 0; i < ytableDataCom.length; i++) {
        sumy2 += (ytableDataCom[i] - ymean) ** 2;
    }

    var totalSum = Math.sqrt(sumx2 * sumy2);

    //Calculate R square value.
    var rValue = regressionSum/totalSum;
    var r2ValueCom = rValue ** 2;

    document.getElementById("r2valuecom").innerHTML = r2ValueCom.toFixed(3);
}

function showInstructionsQuant() {
    $('#instructions').modal('show');
    $('.nav-tabs a[href="#quant"]').tab('show');
};

//QUESTION BOX
var questionsSchild = ["Why would you consider conducting a Schild analysis?",
    "Competitive antagonists cause parallel rightward shifts of the agonist dose-response curve.  How is this quantitated? <br><i>This effect can be tested using the Schild Plot Generator</i>",
    "What does a Schild Plot plot?<br><i>This can be determined using the Schild Plot Generator</i>",
    "What useful information regarding the properties of the competitive antagonist can be obtained from a Schild Plot? ",
    "What are the key criteria a Schild Plot should satisfy for the pA<sub>2</sub> value to be a valid estimate of –logK<sub>B</sub>?",
    "Do the characteristics of the Schild Plot depend on the properties of the agonist or cell? ",
    "What criteria are used to choose the most appropriate antagonist and concentrations for use in a Schild Analysis?",
    "Why might a Schild Plot be NONLINEAR or have a SLOPE THAT IS DIFFERENT FROM UNITY?",
    "From the Reference Table of –logK<sub>i</sub> values, which Competitive Antagonist has the highest affinity for M<sub>1</sub> receptors and which is the most selective for M<sub>1</sub> receptors?",
    "From the Reference Table of –logK<sub>i</sub> values, which Competitive Antagonist has the highest affinity for M<sub>2</sub> receptors and which is the most selective for M<sub>2</sub> receptors?",
    "From the Reference Table of –logK<sub>i</sub> values, which Competitive Antagonist has the highest affinity for M<sub>3</sub> receptors and which is the most selective for M<sub>3</sub> receptors?",
    "From the Reference Table of –logK<sub>i</sub> values, which Competitive Antagonist has the highest affinity for M<sub>4</sub> receptors and which is the most selective for M<sub>4</sub> receptors?",
    "From the Reference Table of –logK<sub>i</sub> values, which Competitive Antagonist has the highest affinity for M<sub>5</sub> receptors and which is the most selective for M<sub>5</sub> receptors?",
    "What concentration of methoctramine would be required to occupy 50% of M<sub>3</sub> receptors (in the absence of any other competing ligands)?",
    "What concentration of methoctramine would be required to occupy 50% of M<sub>4</sub> receptors (in the absence of any other competing ligands)?",
    "What concentration of darifenacin would be required to occupy 50% of M<sub>5</sub> receptors (in the absence of any other competing ligands)?",
    "What concentration of methoctramine would be required to occupy 50% of M<sub>5</sub> receptors (in the absence of any other competing ligands)?",
    "Your research team has conducted a radioligand binding study and determined that Cell X contains a pure population of M<sub>1</sub> receptors. You wish to confirm that this subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists.  Having selected an agonist known to activate the M<sub>1</sub> receptor subtype, <br><b>1.</b> Which antagonist would most clearly identify whether the M<sub>1</sub> receptor subtype mediates the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that is most selective for M<sub>1</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plot would look like if the response was mediated by M<sub>1</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>1</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> If the response was mediated by the M<sub>1</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",
    "Your research team has conducted a radioligand binding study and determined that Cell X contains a pure population of M<sub>2</sub> receptors. You wish to confirm that this subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists.  Having selected an agonist known to activate the M<sub>2</sub> receptor subtype, <br><b>1.</b> Which antagonist would most clearly identify whether the M<sub>2</sub> receptor subtype mediates the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that is most selective for M<sub>2</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plot would look like if the response was mediated by M<sub>2</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>2</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> If the response was mediated by the M<sub>2</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",
    "Your research team has conducted a radioligand binding study and determined that Cell X contains a pure population of M<sub>3</sub> receptors. You wish to confirm that this subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists.  Having selected an agonist known to activate the M<sub>3</sub> receptor subtype, <br><b>1.</b> Which antagonist would most clearly identify whether the M<sub>3</sub> receptor subtype mediates the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that is most selective for M<sub>3</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plot would look like if the response was mediated by M<sub>3</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>3</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> If the response was mediated by the M<sub>3</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",
    "Your research team has conducted a radioligand binding study and determined that Cell X contains a pure population of M<sub>4</sub> receptors. You wish to confirm that this subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists.  Having selected an agonist known to activate the M<sub>4</sub> receptor subtype, <br><b>1.</b> Which antagonist would most clearly identify whether the M<sub>4</sub> receptor subtype mediates the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that is most selective for M<sub>4</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plot would look like if the response was mediated by M<sub>4</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>4</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> If the response was mediated by the M<sub>4</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",
    "Your research team has conducted a radioligand binding study and determined that Cell X contains a pure population of M<sub>5</sub> receptors. You wish to confirm that this subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists.  Having selected an agonist known to activate the M<sub>5</sub> receptor subtype, <br><b>1.</b> Which antagonist would most clearly identify whether the M<sub>5</sub> receptor subtype mediates the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that is most selective for M<sub>5</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plot would look like if the response was mediated by M<sub>5</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>5</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> If the response was mediated by the M<sub>5</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",
    "Your research team has conducted a radioligand binding study and determined that Cell X contains a mixed population of M<sub>1</sub> and M<sub>2</sub> receptors. You wish to determine which of these subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists. Having selected an agonist that activates both receptor subtypes, <br><b>1.</b> Which antagonist would most clearly identify the receptor subtype mediating the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that best distinguishes between M<sub>1</sub> and M<sub>2</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plots would look like if the response was mediated by M<sub>1</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>1</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> Repeat (2) using the same antagonist to predict what the Schild Plot would look like if the agonist was activating M<sub>2</sub> receptors. <br><b>4.</b> If the response was mediated by the M<sub>1</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",
    "Your research team has conducted a radioligand binding study and determined that Cell X contains a mixed population of M<sub>2</sub> and M<sub>4</sub> receptors. You wish to determine which of these subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists. Having selected an agonist that activates both receptor subtypes, <br><b>1.</b> Which antagonist would most clearly identify the receptor subtype mediating the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that best distinguishes between M<sub>2</sub> and M<sub>4</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plots would look like if the response was mediated by M<sub>2</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>2</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> Repeat (2) using the same antagonist to predict what the Schild Plot would look like if the agonist was activating M<sub>4</sub> receptors. <br><b>4.</b> If the response was mediated by the M<sub>2</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",
    "Your research team has conducted a radioligand binding study and determined that Cell X contains a mixed population of M<sub>3</sub> and M<sub>5</sub> receptors. You wish to determine which of these subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists. Having selected an agonist that activates both receptor subtypes, <br><b>1.</b> Which antagonist would most clearly identify the receptor subtype mediating the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that best distinguishes between M<sub>3</sub> and M<sub>5</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plots would look like if the response was mediated by M<sub>3</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>3</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> Repeat (2) using the same antagonist to predict what the Schild Plot would look like if the agonist was activating M<sub>5</sub> receptors. <br><b>4.</b> If the response was mediated by the M<sub>3</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",
    "Your research team has conducted a radioligand binding study and determined that Cell X contains a mixed population of M<sub>2</sub> and M<sub>3</sub> receptors. You wish to determine which of these subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists. Having selected an agonist that activates both receptor subtypes, <br><b>1.</b> Which antagonist would most clearly identify the receptor subtype mediating the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that best distinguishes between M<sub>2</sub> and M<sub>3</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plots would look like if the response was mediated by M<sub>2</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>2</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> Repeat (2) using the same antagonist to predict what the Schild Plot would look like if the agonist was activating M<sub>3</sub> receptors. <br><b>4.</b> If the response was mediated by the M<sub>2</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",
    "Your research team has conducted a radioligand binding study and determined that Cell X contains a mixed population of M<sub>2</sub>, M<sub>4</sub> and M<sub>5</sub> receptors. You wish to determine which of these subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists. Having selected an agonist that activates both receptor subtypes, <br><b>1.</b> Which antagonist would most clearly identify the receptor subtype mediating the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that best distinguishes between M<sub>2</sub> and M<sub>4</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plots would look like if the response was mediated by M<sub>2</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>2</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> Repeat (2) using the same antagonist to predict what the Schild Plot would look like if the agonist was activating M<sub>4</sub> or M<sub>5</sub> receptors. <br><b>4.</b> Which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?"];


var answersSchild = ["The Schild analysis is particularly useful for the classification and identification of the functional roles played by various receptor subtypes.  The Schild analysis allows the determination of the affinity (K<sub>B</sub>) of a competitive antagonist at a particular receptor that is mediating the response produced by an agonist.  By comparing the determined K<sub>B</sub> value of the antagonist to known affinity values (typically –logK<sub>i</sub> values determined from competition binding studies using homogeneous populations of pure receptor subtypes) the receptor mediating the response can be identified.  The process typically involves the study of numerous receptor-selective competitive antagonists. <br><br> Characterising Receptors: <br><div style='text-align:center'><video width='320' height='240' controls><source src='images/Receptor Expression and Function.mp4' type='video/mp4'></source></video></div><br>",
    "The extent of the shift of the agonist dose-response curve is quantitated in terms of a dose ratio (DR).  The dose ratio, also referred to as the concentration ratio, is the ratio of the concentration of an agonist that produces a specified response (often but not necessarily 50% Emax) in the presence of an antagonist, to the agonist concentration that produces the same response in the absence of the competitive antagonist.  The larger the rightward shift of the agonist dose-response curve, the larger the dose ratio.  This effect can be observed using the Schild Plot Generator.",
    "The Schild Plot plots the log[antagonist] (M) on the x-axis against the calculated log(DR-1) on the y-axis.  This effect can be observed using the Schild Plot Generator.",
    "If certain conditions are met (linearity, unity of slope), then a Schild Plot can be used to generate a pA<sub>2</sub> value, which is an estimate of the affinity of the competitive antagonist (K<sub>B</sub> value) for the receptor through which the agonist is producing the response.  The pA<sub>2</sub> is determined by measuring the value of the dose ratio (DR) at several antagonist concentrations, allowing an estimate of the antagonist concentration at which log(DR-1) is zero (i.e. where the Schild plot intercepts with the x-axis).  This is commonly done by graphical extrapolation or interpolation.  Thus, pA<sub>2</sub> is the –log[antagonist] that produces a DR equal to 2, and is the –logK<sub>B</sub> value of the antagonist for the receptor. ",
    "<br><b>1.</b> The Schild plot should be linear.  In order to establish linearity, the Schild plot should be determined using 3 or more [antagonist].<br><b>2.</b> The Schild Plot should have a slope of unity (a slope that is not significantly different from one). ",
    "<b>NO</b>, the shape and position of the Schild Plot should be independent of agonist affinity or efficacy and cell R<sub>T</sub> or <i>&#947</i>.   Test this by changing the properties of the agonist and/or cell and observing the effect on the Schild plot.  This is one of the great advantages of the Schild Analysis.  ",
    "<br><b>1.</b> Use a range of different antagonists that display selectivity for the receptor subtypes.  For example, the characterisation of the M receptor subtype mediating a response may require the use of antagonists such as pirenzepine (M<sub>1</sub> receptor-selective), methoctramine (M<sub>2</sub>-selective), darifenacin (M<sub>3</sub>), MT-3 (M<sub>4</sub>) and S-secoverine (M<sub>5</sub>).<br><b>2.</b> Use a wide range of concentrations of the antagonists (at least 30-100 fold concentration range), ensuring that the lower concentrations used generate log(DR-1) values that are close to zero and thus more likely to provide a good estimate of the pA<sub>2</sub> value (less extrapolation to the x-axis required). This effect can be observed using the Schild Plot Generator.",
    "<br>Schild plots for a competitive antagonist may be non-ideal for many different reasons (see Non-Ideal Schild Plot page … provide link).  For example:<br><b>1.</b> If the antagonist (or agonist) produces toxicity at high concentrations then the Schild Plot will be nonlinear with slope > 1 at higher antagonist concentrations.<br><b>2.</b> If the antagonist is a substrate of a saturable uptake system, then the Schild plot will be nonlinear with a slope > 1.0 at low (non-saturating) antagonist concentrations.<br><b>3.</b> If the agonist is a substrate of a saturable uptake system, then the Schild plot will be nonlinear with a slope < 1.0 at low (non-saturating) agonist concentrations.<br><b>4.</b> If insufficient time is allowed for the antagonist to equilibrate with the receptor (Agonist-antagonist hemi-equilibria), then the Schild plot will be nonlinear with a slope < 1.0 at low antagonist concentrations.<br>",
    "DAU-5884 has the highest affinity because it has the highest –logK<sub>i</sub> value at M<sub>1</sub> receptors (8.9). <br>Pirenzepine is the most selective for M<sub>1</sub> receptors because it has the greatest difference in –logK<sub>i</sub> values for M<sub>1</sub> compared to any other receptor subtype (at least 0.8 log units different).",
    "S-secoverine has the highest affinity because it has the highest –logK<sub>i</sub> value at M<sub>2</sub> receptors (7.9). <br>DAU-5884 is the most selective for M<sub>2</sub> receptors because it has the greatest difference in –logK<sub>i</sub> values for M<sub>2</sub> compared to any other receptor subtype (at least 1.0 log units different).",
    "DAU-5884 has the highest affinity because it has the highest –logK<sub>i</sub> value at M<sub>3</sub> receptors (8.9). <br>Darifenacin is the most selective for M<sub>3</sub> receptors because it has the greatest difference in –logK<sub>i</sub> values for M<sub>3</sub> compared to any other receptor subtype (at least 0.8 log units different).",
    "DAU-5884 has the highest affinity because it has the highest –logK<sub>i</sub> value at M<sub>4</sub> receptors (8.5). <br>MT-3 is the most selective for M<sub>4</sub> receptors because it has the greatest difference in –logK<sub>i</sub> values for M<sub>4</sub> compared to any other receptor subtype (at least 1.4 log units different).",
    "DAU-5884 has the highest affinity because it has the highest –logK<sub>i</sub> value at M<sub>5</sub> receptors (8.1). <br>S-secoverine is the most selective for M<sub>5</sub> receptors because it has the greatest difference in –logK<sub>i</sub> values for M<sub>5</sub> compared to any other receptor subtype (at least 1.2 log units different).",
    "10<sup>-6</sup>M.  The –logK<sub>i</sub> value of methoctramine for M<sub>3</sub> receptors is 6.0.  The K<sub>i</sub> value should be the same as the K<sub>A</sub> value (just measured using different experimental approaches), and the K<sub>A</sub> value is the concentration of ligand (antagonist in this case) that occupies 50% of receptors.  Thus, the antilog of -6.0 (i.e. 10<sup>-6</sup>) is the molar concentration of methoctramine that will occupy 50% of M<sub>3</sub> receptors.",
    "10<sup>-7</sup>M.  The –logK<sub>i</sub> value of methoctramine for M<sub>4</sub> receptors is 7.0.  The K<sub>i</sub> value should be the same as the K<sub>A</sub> value (just measured using different experimental approaches), and the K<sub>A</sub> value is the concentration of ligand (antagonist in this case) that occupies 50% of receptors.  Thus, the antilog of -7.0 (i.e. 10<sup>-7</sup>) is the molar concentration of methoctramine that will occupy 50% of M<sub>4</sub> receptors.",
    "10<sup>-8</sup>M.  The –logK<sub>i</sub> value of darifenacin for M<sub>5</sub> receptors is 8.0.  The K<sub>i</sub> value should be the same as the K<sub>A</sub> value (just measured using different experimental approaches), and the K<sub>A</sub> value is the concentration of ligand (antagonist in this case) that occupies 50% of receptors.  Thus, the antilog of -8.0 (i.e. 10<sup>-8</sup>) is the molar concentration of darifenacin that will occupy 50% of M<sub>5</sub> receptors.",
    "5x10<sup>-7</sup>M.  The –logK<sub>i</sub> value of methoctramine for M<sub>5</sub> receptors is 6.3.  The K<sub>i</sub> value should be the same as the K<sub>A</sub> value (just measured using different experimental approaches), and the K<sub>A</sub> value is the concentration of ligand (antagonist in this case) that occupies 50% of receptors.  Thus, the antilog of -6.3 (i.e. 10<sup>-6.3</sup>, i.e. 5x10<sup>-7</sup>) is the molar concentration of methoctramine that will occupy 50% of M<sub>5</sub> receptors.",
    "<br><b>1.</b> Pirenzepine, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>1</sub> compared to any other receptor subtype (at least 0.8 log units different).<br><b>2.</b> The pA<sub>2</sub> value for pirenzepine should be the same as the –logK<sub>i</sub> value (8.2).<br><b>3.</b> MT-3 with at least a 0.7 log unit difference between M<sub>1</sub> and any other subtype, and would also be useful for confirming M<sub>1</sub> receptors.",
    "<br><b>1.</b> DAU-5884, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>2</sub> compared to any other receptor subtype (at least 1.0 log units different).<br><b>2.</b> The pA<sub>2</sub> value for DAU-5884 should be the same as the –logK<sub>i</sub> value (7.1).<br><b>3.</b> Methoctramine and darifenacin both have at least a 0.7 log unit difference between M<sub>2</sub> and any other subtype, and would also be useful for confirming M<sub>2</sub> receptors.",
    "<br><b>1.</b> Darifenacin, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>3</sub> compared to any other receptor subtype (at least 0.8 log units different).<br><b>2.</b> The pA<sub>2</sub> value for darifenacin should be the same as the –logK<sub>i</sub> value (8.8).<br><b>3.</b> PD102807 with at least a 0.6 log unit difference between M<sub>3</sub> and any other subtype, and would also be useful for confirming M<sub>3</sub> receptors.",
    "<br><b>1.</b> MT-3, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>4</sub> compared to any other receptor subtype (at least 1.4 log units different).<br><b>2.</b> The pA<sub>2</sub> value for MT-3 should be the same as the –logK<sub>i</sub> value (8.1).<br><b>3.</b> PD102807 has at least a 1.2 log unit difference between M<sub>4</sub> and any other subtype, and would also be useful for confirming M<sub>4</sub> receptors.",
    "<br><b>1.</b> S-secoverine, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>5</sub> compared to any other receptor subtype (at least 1.2 log units different).<br><b>2.</b> The pA<sub>2</sub> value for S-secoverine should be the same as the –logK<sub>i</sub> value (6.5).<br><b>3.</b> PD102807 with at least a 1.1 log unit difference between M<sub>5</sub> and any other subtype, and would also be useful for confirming M<sub>5</sub> receptors.",
    "<br><b>1.</b> DAU-5884, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>1</sub> and M<sub>2</sub> receptors (1.8 log units).<br><b>2. & 3.</b> The pA<sub>2</sub> values should be the same as the –logK<sub>i</sub> values and also differ by 1.8 log units.<br><b>4.</b> Pirenzepine with a 1.7 log unit difference between M<sub>1</sub> and M<sub>2</sub> receptors would also be useful for distinguishing between M<sub>1</sub> and M<sub>2</sub> receptors.",
    "<br><b>1.</b> MT-3, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>2</sub> and M<sub>4</sub> receptors (2.2 log units).<br><b>2. & 3.</b> The pA<sub>2</sub> values should be the same as the –logK<sub>i</sub> values and also differ by 2.2 log units.<br><b>4.</b> PD102807 with a 1.8 log unit difference between M<sub>2</sub> and M<sub>4</sub> receptors would also be useful for distinguishing between M<sub>2</sub> and M<sub>4</sub> receptors.",
    "<br><b>1.</b> PD102807, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>3</sub> and M<sub>5</sub> receptors (1.7 log units).<br><b>2. & 3.</b> The pA<sub>2</sub> values should be the same as the –logK<sub>i</sub> values and also differ by 1.7 log units.<br><b>4.</b> S-secoverine with a 1.2 log unit difference between M<sub>3</sub> and M<sub>5</sub> receptors would also be useful for distinguishing between M<sub>3</sub> and M<sub>5</sub> receptors.",
    "<br><b>1.</b> Could choose either darifenacin or DAU-5884 because both the greatest difference in –logK<sub>i</sub> values for M<sub>2</sub> and M<sub>3</sub> receptors (1.8 log units).<br><b>2. & 3.</b> The pA<sub>2</sub> values should be the same as the –logK<sub>i</sub> values and also differ by 1.8 log units.<br><b>4.</b> Methoctramine with a 1.7 log unit difference between M<sub>2</sub> and M<sub>3</sub> receptors would also be useful for distinguishing between M<sub>2</sub> and M<sub>3</sub> receptors.",
    "<br><b>1.</b> PD102807, because it has at least a 1 log unit difference in –logK<sub>i</sub> values for each pair of M<sub>2</sub>, M<sub>4</sub> and M<sub>5</sub> receptors.<br><b>2. & 3.</b> The pA<sub>2</sub> values should be the same as the –logK<sub>i</sub> values and also differ by &gt; 1.0 log units.<br><b>4.</b> Methoctramine with a 0.7 log unit difference between each M<sub>2</sub>, M<sub>4</sub> and M<sub>5</sub> receptors would also be useful, but not highly selective. Instead of using one antagonist, consider using 3 antagonists known to be selective for the 3 subtypes (i.e. use DAU-5884 to include/exclude M<sub>2</sub>, MT-3 to include/exclude M<sub>4</sub> & S-secoverine to include/exclude M<sub>5</sub>). "];


var questionCounterSchild = 0;
document.getElementById("schildQuestion").innerHTML = "<b>" + questionsSchild[questionCounterSchild] + "</b>";


function revealAnswerSchild() {
    document.getElementById("schildAnswer").innerHTML = answersSchild[questionCounterSchild];
    $('#schildAnswerModal').modal('show');
}


function nextQuestionSchild() {
    if (questionCounterSchild + 1 == questionsSchild.length) { //end of questions
        questionCounterSchild++;
        document.getElementById("schildQuestion").style.display = "none";
        document.getElementById("revealSchildAnswer").style.display = "none";
        document.getElementById("restartMessageSchild").style.display = "inline-block";
        document.getElementById("restartQuestionSchild").style.display = "inline-block";
        document.getElementById("nextSchildQuestion").style.display = "none";
    }
    else {
        questionCounterSchild++;
        document.getElementById("restartMessageSchild").style.display = "none";
        document.getElementById("restartQuestionSchild").style.display = "none";
        document.getElementById("schildQuestion").innerHTML = "<b>" + questionsSchild[questionCounterSchild] + "</b>";
    }
}

function prevQuestionSchild() {
    if (!questionCounterSchild) { //beginning of questions
        alert("Already at beginning of questions");
    }
    else {
        questionCounterSchild--;
        document.getElementById("schildQuestion").style.display = "block";
        document.getElementById("nextSchildQuestion").style.display = "inline-block";
        document.getElementById("revealSchildAnswer").style.display = "inline-block";
        document.getElementById("restartMessageSchild").style.display = "none";
        document.getElementById("restartQuestionSchild").style.display = "none";
        document.getElementById("schildQuestion").innerHTML = "<b>" + questionsSchild[questionCounterSchild] + "</b>";
    }
}

function restartQuestionSchild() {
    questionCounterSchild = 0;
    document.getElementById("schildQuestion").style.display = "block";
    document.getElementById("nextSchildQuestion").style.display = "inline-block";
    document.getElementById("restartMessageSchild").style.display = "none";
    document.getElementById("restartQuestionSchild").style.display = "none";
    document.getElementById("schildQuestion").innerHTML = "<b>" + questionsSchild[questionCounterSchild] + "</b>";
    document.getElementById("revealSchildAnswer").style.display = "inline-block";
}

//Task 6
//Addition information, more details about that particular type of Schild plot.
var linear = []
var nonlinear = []

function whySchildPlotsNonidealFunction() {
    document.getElementById("whySchildPlotsNonidealPage").innerHTML;
    $('#whySchildPlotsNonidealModal').modal('show');
}