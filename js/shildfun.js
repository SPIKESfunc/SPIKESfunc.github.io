var afffun1 = document.getElementById("afffunslider1").defaultValue;
var efffun1 = document.getElementById("efffunslider1").defaultValue;
var denfun1 = document.getElementById("denfunslider1").defaultValue;
var efficfun1 = document.getElementById("efficifunslider1").defaultValue;
var afffun2 = document.getElementById("afffunslider2").defaultValue;
var efffun2 = document.getElementById("efffunslider2").defaultValue;
var denfun2 = document.getElementById("denfunslider2").defaultValue;
var efficfun2 = document.getElementById("efficifunslider2").defaultValue;
var agoafflogfun = -1 * Math.log10(afffun2);
var efflevelfun = document.getElementById("efflevelfun").defaultValue;
document.getElementById("displayeffectfun").innerHTML = (efflevelfun *89).toFixed(1);
document.getElementById("efftablefun").innerHTML = (efflevelfun *89).toFixed(1);

var isPointValidfun = [true, true, true, true];
var allmarkercoloursfun = ['rgb(255,215,0)', 'rgb(0,255,0)', 'rgb(255,0,0)', 'rgb(0,0,255)'];
var markercoloursfun = ['rgb(255,215,0)', 'rgb(0,255,0)', 'rgb(255,0,0)', 'rgb(0,0,255)'];
var linestyles = ["solid", "solid", "solid", "solid", "solid"];
var markercolours = ['rgb(255,215,0)', 'rgb(0,255,0)', 'rgb(255,0,0)', 'rgb(0,0,255)'];

var plotmarkercolors = ['rgb(225,225,225)','rgb(255,215,55)', 'rgb(0,255,0)', 'rgb(255,0,0)', 'rgb(0,0,255)'];

var antval0fun = document.getElementById("ant0fun").defaultValue;
var antval1fun = document.getElementById("ant1fun").defaultValue;
var antval2fun = document.getElementById("ant2fun").defaultValue;
var antval3fun = document.getElementById("ant3fun").defaultValue;
var antval4fun = document.getElementById("ant4fun").defaultValue;
var agoconcarrfun = [0, Math.log10(antval1fun), Math.log10(antval2fun), Math.log10(antval3fun), Math.log10(antval4fun)];
var antlogval1fun = Math.log10(antval1fun);
var antlogval2fun = Math.log10(antval2fun);
var antlogval3fun = Math.log10(antval3fun);
var antlogval4fun = Math.log10(antval4fun);

document.getElementById("antlog1fun").value = Math.log10(antval1fun).toFixed(1);
document.getElementById("antlog2fun").value = Math.log10(antval2fun).toFixed(1);
document.getElementById("antlog3fun").value = Math.log10(antval3fun).toFixed(1);
document.getElementById("antlog4fun").value = Math.log10(antval4fun).toFixed(1);
var funHalfMaxEffect;


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

//new vars
var dotsize = 10 // defines 50% dot size

//
function titleFun() {
    document.getElementById("tabtitle").innerHTML = "Schild Plot Generator for Functional Antagonist"
}
//
function findFunHalfMaxEffect(lineData) {
    funHalfMaxEffect = Math.max.apply(Math, lineData[1]) * efflevelfun;
}
//
function calc50Fun(lineData) {
    var maxEffectAgoIndex = lineData[1].findIndex(function (number) { //get the x-index for the 50% value
        return number >= funHalfMaxEffect;
    });
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    var agoret = [[halfAgoEffect], [funHalfMaxEffect]];
    return agoret; //return x, y

}
//
function resetQuantFun() {
    afffun1 = document.getElementById("afffunslider1").value = document.getElementById("afffunslider1").defaultValue;
    efffun1 = document.getElementById("efffunslider1").value = document.getElementById("efffunslider1").defaultValue;
    denfun1 = document.getElementById("denfunslider1").value = document.getElementById("denfunslider1").defaultValue;
    efficfun1 = document.getElementById("efficifunslider1").value = document.getElementById("efficifunslider1").defaultValue;
    afffun2 = document.getElementById("afffunslider2").value = document.getElementById("afffunslider2").defaultValue;
    efffun2 = document.getElementById("efffunslider2").value = document.getElementById("efffunslider2").defaultValue;
    denfun2 = document.getElementById("denfunslider2").value = document.getElementById("denfunslider2").defaultValue;
    efficfun2 = document.getElementById("efficifunslider2").value = document.getElementById("efficifunslider2").defaultValue;
    efflevelfun = document.getElementById("efflevelfun").value = document.getElementById("efflevelfun").defaultValue;
    document.getElementById("displayeffectfun").innerHTML = (efflevelfun *89).toFixed(1);
    document.getElementById("efftablefun").innerHTML = (efflevelfun *89).toFixed(1);

    antval0fun = document.getElementById("ant0fun").value = document.getElementById("ant0fun").defaultValue;
    antval1fun = document.getElementById("ant1fun").value = document.getElementById("ant1fun").defaultValue;
    antval2fun = document.getElementById("ant2fun").value = document.getElementById("ant2fun").defaultValue;
    antval3fun = document.getElementById("ant3fun").value = document.getElementById("ant3fun").defaultValue;
    antval4fun = document.getElementById("ant4fun").value = document.getElementById("ant4fun").defaultValue;
    agoconcarrfun = [0, Math.log10(antval1fun), Math.log10(antval2fun), Math.log10(antval3fun), Math.log10(antval4fun)];
    antlogval1fun = Math.log10(antval1fun);
    antlogval2fun = Math.log10(antval2fun);
    antlogval3fun = Math.log10(antval3fun);
    antlogval4fun = Math.log10(antval4fun);

    document.getElementById("antlog1fun").value = Math.log10(antval1fun).toFixed(1);
    document.getElementById("antlog2fun").value = Math.log10(antval2fun).toFixed(1);
    document.getElementById("antlog3fun").value = Math.log10(antval3fun).toFixed(1);
    document.getElementById("antlog4fun").value = Math.log10(antval4fun).toFixed(1);
    lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
    lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
    lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
    lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
    findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);
    halfData4 = calc50Fun(lineData4);
    updateValidFun(halfData1, halfData2, halfData3, halfData4);

    updateEverythingFun();
    graphRemoveAlert("quantalertFun");
    Plotly.restyle("quantitativeFun", 'visible', true);
    Plotly.animate("quantitativeFun", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
    idealSchildData = calcIdealSchildFun(afffun2);
    Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}, {x: idealSchildData[0], y: idealSchildData[1]}], traces: [0, 1], layout: {}},animation)
}
//
function graphAlertFun(div) {
    document.getElementById(div).innerHTML = "Agonist property has decreased too far to sustain curve"
}
//
function graphRemoveAlertFun(div) {
    document.getElementById(div).innerHTML = ""
}
//
function checkSliderMinFun() {
    let ret = false;
    if(document.getElementById("afffunslider1").value == 5){
        ret = true
    }
    if(document.getElementById("efffunslider1").value == -0.7){
        ret = true
    }
    if(document.getElementById("denfunslider1").value == -1){
        ret = true
    }
    if(document.getElementById("efficifunslider1").value == 0){
        ret = true
    }
    if (document.getElementById("efflevelfun").value == 0) {
        ret = true
    }
    return ret
}
//
function updateAffinityFun1(value) {
    afffun1 = value;
    if (checkSliderMinFun()) {
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else {
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
        lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
        lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
        lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
        //findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);
        halfData4 = calc50Fun(lineData4);
        updateValidFun(halfData1, halfData2, halfData3, halfData4);

        updateEverythingFun();
        Plotly.animate("quantitativeFun", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] },
            { x: halfData1[0], y: halfData1[1] },
            { x: halfData2[0], y: halfData2[1] },
            { x: halfData3[0], y: halfData3[1] },
            { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
        Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    }
}
//
function updateEfficacyFun1(value) {
    efffun1 = value;
    if (checkSliderMinFun()) {
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else {
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
        lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
        lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
        lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
        //findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);
        halfData4 = calc50Fun(lineData4);
        updateValidFun(halfData1, halfData2, halfData3, halfData4);

        updateEverythingFun();
        Plotly.animate("quantitativeFun", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] },
            { x: halfData1[0], y: halfData1[1] },
            { x: halfData2[0], y: halfData2[1] },
            { x: halfData3[0], y: halfData3[1] },
            { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
        Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    }
}
//
function updateDensityFun1(value) {
    denfun1 = value;
    if (checkSliderMinFun()) {
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else {
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
        lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
        lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
        lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
        //findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);
        halfData4 = calc50Fun(lineData4);
        updateValidFun(halfData1, halfData2, halfData3, halfData4);

        updateEverythingFun();
        Plotly.animate("quantitativeFun", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] },
            { x: halfData1[0], y: halfData1[1] },
            { x: halfData2[0], y: halfData2[1] },
            { x: halfData3[0], y: halfData3[1] },
            { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
        Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    }
}
//
function updateEfficiencyFun1(value) {
    efficfun1 = value;
    if (checkSliderMinFun()) {
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else {
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
        lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
        lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
        lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
        //findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);
        halfData4 = calc50Fun(lineData4);
        updateValidFun(halfData1, halfData2, halfData3, halfData4);

        updateEverythingFun();
        Plotly.animate("quantitativeFun", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] },
            { x: halfData1[0], y: halfData1[1] },
            { x: halfData2[0], y: halfData2[1] },
            { x: halfData3[0], y: halfData3[1] },
            { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
        Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    }

}
//
function updateAffinityFun2(value) {
    afffun2 = value;
    agoafflogfun = -1 * Math.log10(value);
    if (checkSliderMinFun()) {
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else {
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
        lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
        lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
        lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
        //findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);
        halfData4 = calc50Fun(lineData4);
        updateValidFun(halfData1, halfData2, halfData3, halfData4);

        updateEverythingFun();
        Plotly.animate("quantitativeFun", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] },
            { x: halfData1[0], y: halfData1[1] },
            { x: halfData2[0], y: halfData2[1] },
            { x: halfData3[0], y: halfData3[1] },
            { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
        idealSchildData = calcIdealSchildFun(afffun2);
        Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}, {x: idealSchildData[0], y: idealSchildData[1]}], traces: [0, 1], layout: {}},animation)
    }
}
//
function updateEfficacyFun2(value) {
    efffun2 = value;
    if (checkSliderMinFun()) {
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else {
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
        lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
        lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
        lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
        //findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);
        halfData4 = calc50Fun(lineData4);
        updateValidFun(halfData1, halfData2, halfData3, halfData4);

        updateEverythingFun();
        Plotly.animate("quantitativeFun", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] },
            { x: halfData1[0], y: halfData1[1] },
            { x: halfData2[0], y: halfData2[1] },
            { x: halfData3[0], y: halfData3[1] },
            { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
        Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    }
}
//
function updateDensityFun2(value) {
    denfun2 = value;
    if (checkSliderMinFun()) {
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else {
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
        lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
        lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
        lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
        //findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);
        halfData4 = calc50Fun(lineData4);
        updateValidFun(halfData1, halfData2, halfData3, halfData4);

        updateEverythingFun();
        Plotly.animate("quantitativeFun", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] },
            { x: halfData1[0], y: halfData1[1] },
            { x: halfData2[0], y: halfData2[1] },
            { x: halfData3[0], y: halfData3[1] },
            { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
        Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    }
}
//
function updateEfficiencyFun2(value) {
    efficfun2 = value;
    if (checkSliderMinFun()) {
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else {
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
        lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
        lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
        lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
        //findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);
        halfData4 = calc50Fun(lineData4);
        updateValidFun(halfData1, halfData2, halfData3, halfData4);

        updateEverythingFun();
        Plotly.animate("quantitativeFun", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] },
            { x: halfData1[0], y: halfData1[1] },
            { x: halfData2[0], y: halfData2[1] },
            { x: halfData3[0], y: halfData3[1] },
            { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
        Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    }
}
//

function updateefflevelfun(value) {
    efflevelfun = value;
    document.getElementById("displayeffectfun").innerHTML = (efflevelfun *89).toFixed(1);
    document.getElementById("efftablefun").innerHTML = (efflevelfun *89).toFixed(1);
    if (checkSliderMinFun()) {
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else {
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
        lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
        lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
        lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
        findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);
        halfData4 = calc50Fun(lineData4);
        updateValidFun(halfData1, halfData2, halfData3, halfData4);

        updateEverythingFun();
        Plotly.animate("quantitativeFun", {
            data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
            { x: halfData0[0], y: halfData0[1] },
            { x: halfData1[0], y: halfData1[1] },
            { x: halfData2[0], y: halfData2[1] },
            { x: halfData3[0], y: halfData3[1] },
            { x: halfData4[0], y: halfData4[1] }],
            traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            layout: {}
        }, animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
        Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    }
}

function updateAntagonist1Fun(value) {
    antval1fun = value;
    agoconcarrfun[1] = Math.log10(value);
    document.getElementById("antlog1fun").value = agoconcarrfun[1].toFixed(2);
    lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
    lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
    lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
    lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
    //findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);
    halfData4 = calc50Fun(lineData4);
    updateValidFun(halfData1, halfData2, halfData3, halfData4);

    updateEverythingFun();
    Plotly.animate("quantitativeFun", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
    //Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    idealSchildData = calcIdealSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4]);
    Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}, {x: idealSchildData[0], y: idealSchildData[1]}], traces: [0, 1], layout: {}},animation)
}
//
function updateAntagonistLog1Fun(value) {
    agoconcarrfun[1] = value;
    antval1fun = Math.pow(10, value);
    document.getElementById("ant1fun").value = antval1fun.toExponential(2);
    lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
    lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
    lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
    lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
    //findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);
    halfData4 = calc50Fun(lineData4);
    updateValidFun(halfData1, halfData2, halfData3, halfData4);

    updateEverythingFun();
    Plotly.animate("quantitativeFun", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
    Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
}

function updateAntagonist2Fun(value) {
    antval2fun = value;
    agoconcarrfun[2] = Math.log10(value);
    document.getElementById("antlog2fun").value = agoconcarrfun[2].toFixed(2);
    lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
    lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
    lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
    lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
    //findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);
    halfData4 = calc50Fun(lineData4);
    updateValidFun(halfData1, halfData2, halfData3, halfData4);

    updateEverythingFun();
    Plotly.animate("quantitativeFun", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
    Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
}
//
function updateAntagonistLog2Fun(value) {
    agoconcarrfun[2] = value;
    antval2fun = Math.pow(10, value);
    document.getElementById("ant2fun").value = antval2fun.toExponential(2);
    lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
    lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
    lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
    lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
    //findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);
    halfData4 = calc50Fun(lineData4);
    updateValidFun(halfData1, halfData2, halfData3, halfData4);

    updateEverythingFun();
    Plotly.animate("quantitativeFun", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
    Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
}
//
function updateAntagonist3Fun(value) {
    antval3fun = value;
    agoconcarrfun[3] = Math.log10(value);
    document.getElementById("antlog3fun").value = agoconcarrfun[3].toFixed(2);
    lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
    lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
    lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
    lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
    //findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);
    halfData4 = calc50Fun(lineData4);
    updateValidFun(halfData1, halfData2, halfData3, halfData4);

    updateEverythingFun();
    Plotly.animate("quantitativeFun", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
    Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
}
//
function updateAntagonistLog3Fun(value) {
    agoconcarrfun[3] = value;
    antval3fun = Math.pow(10, value);
    document.getElementById("ant3fun").value = antval3fun.toExponential(2);
    lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
    lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
    lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
    lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
    //findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);
    halfData4 = calc50Fun(lineData4);
    updateValidFun(halfData1, halfData2, halfData3, halfData4);

    updateEverythingFun();
    Plotly.animate("quantitativeFun", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
    //Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
    idealSchildData = calcIdealSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4]);
    Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}, {x: idealSchildData[0], y: idealSchildData[1]}], traces: [0, 1], layout: {}},animation)
}

function updateAntagonist4Fun(value) {
    antval4fun = value;
    agoconcarrfun[4] = Math.log10(value);
    document.getElementById("antlog4fun").value = agoconcarrfun[4].toFixed(2);
    lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
    lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
    lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
    lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
    //findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);
    halfData4 = calc50Fun(lineData4);
    updateValidFun(halfData1, halfData2, halfData3, halfData4);

    updateEverythingFun();
    Plotly.animate("quantitativeFun", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
    Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
}
//
function updateAntagonistLog4Fun(value) {
    agoconcarrfun[4] = value;
    antval4fun = Math.pow(10, value);
    document.getElementById("ant4fun").value = antval4fun.toExponential(2);
    lineData0 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]);
    lineData2 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]);
    lineData3 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]);
    lineData4 = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]);
    //findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);
    halfData4 = calc50Fun(lineData4);
    updateValidFun(halfData1, halfData2, halfData3, halfData4);

    updateEverythingFun();
    Plotly.animate("quantitativeFun", {
        data: [{ y: lineData0[1] }, { y: lineData1[1] }, { y: lineData2[1] }, { y: lineData3[1] }, { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        { x: halfData2[0], y: halfData2[1] },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
    }, animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], agoconcarrfun[4], logdr1fun, logdr2fun, logdr3fun, logdr4fun);
    Plotly.animate("schildFun", { data: [{ x: schildData[0], y: schildData[1] }], traces: [0], layout: {} }, animation)
}
// 
function calcAgoHalfEffectFun(affinity, efficacy, recepDensity, efficiency, affinity2, efficacy2, recepDensity2, efficiency2, antagconc) {
    var ago;
    /**
    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);
    var antconc = antagconc;
    ago = (funHalfMaxEffect*(affin*(antconc/agoaffin)))/((efcay*recep*efcey*100)-(funHalfMaxEffect*(efcay*recep*efcey+1)));
    return ago;
    */
    var lineData = calcLinesFun(affinity, efficacy, recepDensity, efficiency, affinity2, efficacy2, recepDensity2, efficiency2, antagconc);
    //findFunHalfMaxEffect(calcLinesFun(affinity, efficacy, recepDensity, efficiency, affinity2, efficacy2, recepDensity2, efficiency2, agoconcarrfun[0]));
    var data50 = calc50Fun(lineData);
    if (10 ** data50[0] == 1) {
        ago = NaN;
        //console.log("undefine dectected")
    }
    else {
        ago = 10 ** (data50[0]);
    }
    return ago;
}
//
function calcDoseRatioFun(presant, absant) {
    var doserat;
    doserat = presant / absant;
    return doserat;
}
//
function calcLogDRFun(doseratio) {
    var logdr;
    logdr = Math.log10(doseratio - 1);
    return logdr;
}
//
function updateEverythingFun() {

    antlogval1fun = Math.log10(antval1fun);
    antlogval2fun = Math.log10(antval2fun);
    antlogval3fun = Math.log10(antval3fun);
    antlogval4fun = Math.log10(antval4fun);

    anthalfeff0fun = document.getElementById("anteff0fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]).toExponential(2);
    anthalfeff1fun = document.getElementById("anteff1fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]).toExponential(2);
    anthalfeff2fun = document.getElementById("anteff2fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]).toExponential(2);
    anthalfeff3fun = document.getElementById("anteff3fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]).toExponential(2);
    anthalfeff4fun = document.getElementById("anteff4fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]).toExponential(2);

    doseratio1fun = document.getElementById("antdose1fun").value = calcDoseRatioFun(anthalfeff1fun, anthalfeff0fun).toFixed(2);
    doseratio2fun = document.getElementById("antdose2fun").value = calcDoseRatioFun(anthalfeff2fun, anthalfeff0fun).toFixed(2);
    doseratio3fun = document.getElementById("antdose3fun").value = calcDoseRatioFun(anthalfeff3fun, anthalfeff0fun).toFixed(2);
    doseratio4fun = document.getElementById("antdose4fun").value = calcDoseRatioFun(anthalfeff4fun, anthalfeff0fun).toFixed(2);

    logdr1fun = document.getElementById("antlogdr1fun").value = calcLogDRFun(doseratio1fun).toFixed(2);
    logdr2fun = document.getElementById("antlogdr2fun").value = calcLogDRFun(doseratio2fun).toFixed(2);
    logdr3fun = document.getElementById("antlogdr3fun").value = calcLogDRFun(doseratio3fun).toFixed(2);
    logdr4fun = document.getElementById("antlogdr4fun").value = calcLogDRFun(doseratio4fun).toFixed(2);

    updateSchildPropertyTableFun();
}
// something wrong here
function calcLinesFun(affinity, efficacy, recepDensity, efficiency, agoaffinity, agoefficacy, agoconcentration, agodensity, agoefficiency) {
    const STEP = 0.01;
    var data = [[], []];
    //Inverse log input values

    var affin = 10 ** (-1 * affinity);
    var efcay = 10 ** efficacy;
    var recep = 10 ** recepDensity;
    var efcey = 10 ** efficiency;
    var agoaffin = 10 ** (-1 * agoaffinity);
    var agoeff = 10 ** (agoefficacy);
    var agoden = 10 ** agodensity;
    var agoeffic = 10 ** agoefficiency;

    var emaxa = 100;
    var emaxb = 100;

    if (agoconcentration == 0) {
        agoconc = 0;
        agoaffin = 0;
        for (i = -12; i < -2; i = i + STEP) {
            //effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin);
            data[0].push(i);
            data[1].push((10 ** i * efcay * recep * efcey * 100) / (10 ** i * (efcay * recep * efcey + 1 - efcay) + affin));
        }
    }
    else {
        agoconc = 10 ** agoconcentration;
        for (i = -12; i < -2; i = i + STEP) {
            var aconc = 10 ** i;

            effect1 = aconc * efcay * recep * efcey * emaxa;
            effect2 = (aconc * ((efcay * recep * efcey) + 1 - efcay)) + affin;
            effect3 = agoconc * agoeff * agoden * agoeffic * emaxb;
            effect4 = (agoconc * ((agoeff * agoden * agoeffic) + 1 - agoeff)) + agoaffin;

            effect = ((effect1 / effect2) - (effect3 / effect4));

            data[0].push(i);
            data[1].push(effect);
        }
    }
    return data;
}

function calcLinesFun(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoefficacy, agodensity, agoefficiency, agoconcentration){
    const STEP = 0.01;
    var data = [[], []];
    //Inverse log input values

    var affin = 10 ** (-1 * affinity);
    var efcay = 10 ** efficacy;
    var recep = 10 ** recepDensity;
    var efcey = 10 ** efficiency;
    var agoaffin = 10 ** (-1 * agoaffinity);
    var agoeff = 10 ** (agoefficacy);
    var agoden = 10 ** agodensity;
    var agoeffic = 10 ** agoefficiency;

    var emaxa = 100;
    var emaxb = 100;

    if (agoconcentration == 0) {
        agoconc = 0;
        agoaffin = 0;
        for (i = -12; i < -2; i = i + STEP) {
            //effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin);
            data[0].push(i);
            data[1].push((10 ** i * efcay * recep * efcey * 100) / (10 ** i * (efcay * recep * efcey + 1 - efcay) + affin));
        }
    }
    else {
        agoconc = 10 ** agoconcentration;
        for (i = -12; i < -2; i = i + STEP) {
            var aconc = 10 ** i;

            effect1 = aconc * efcay * recep * efcey * emaxa;
            effect2 = (aconc * ((efcay * recep * efcey) + 1 - efcay)) + affin;
            effect3 = agoconc * agoeff * agoden * agoeffic * emaxb;
            effect4 = (agoconc * ((agoeff * agoden * agoeffic) + 1 - agoeff)) + agoaffin;

            effect = ((effect1 / effect2) - (effect3 / effect4));

            data[0].push(i);
            data[1].push(effect);
        }
    }
    return data;
}

var linecoloursfun = ['rgb(0,0,0)','rgb(255,215,55)', 'rgb(0,255,0)', 'rgb(255,0,0)', 'rgb(0,0,255)'];

//
function plotGraphFun(chart) {
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
        var lineData = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[j])
        if (j == 0) {
            var graph = {
                x: lineData[0],
                y: lineData[1],
                mode: "lines",
                name: 0 + "nM",
                line: {
                    color: linecoloursfun[j],
                    width: 1
                },
                showlegend: false
    		}
   		}
   		else{
    	var graph = {
        		x: lineData[0],
        		y: lineData[1],
       			mode: "lines",
       			name: 10**agoconcarrfun[j]*1000000000+"nM",
                   line: {
                    color: linecolours[j],
                    width: 1.2,
                    dash: linestyles[j]
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
        var halfData = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[i]);
        findFunHalfMaxEffect(calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]));
        data50 = calc50Fun(halfData); //plot the 50% effect marker
        var trace1 = [{
            x: data50[0],
            y: data50[1],
            mode: 'markers',
            name: "Level of Effect",
            marker: {
                color: plotmarkercolors[i],
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
//
plotGraphFun("quantitativeFun");

var anthalfeff0fun = document.getElementById("anteff0fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[0]).toExponential(2);
var anthalfeff1fun = document.getElementById("anteff1fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[1]).toExponential(2);
var anthalfeff2fun = document.getElementById("anteff2fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[2]).toExponential(2);
var anthalfeff3fun = document.getElementById("anteff3fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[3]).toExponential(2);
var anthalfeff4fun = document.getElementById("anteff4fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[4]).toExponential(2);

var doseratio1fun = document.getElementById("antdose1fun").value = calcDoseRatioFun(anthalfeff1fun, anthalfeff0fun).toFixed(2);
var doseratio2fun = document.getElementById("antdose2fun").value = calcDoseRatioFun(anthalfeff2fun, anthalfeff0fun).toFixed(2);
var doseratio3fun = document.getElementById("antdose3fun").value = calcDoseRatioFun(anthalfeff3fun, anthalfeff0fun).toFixed(2);
var doseratio4fun = document.getElementById("antdose4fun").value = calcDoseRatioFun(anthalfeff4fun, anthalfeff0fun).toFixed(2);

var logdr1fun = document.getElementById("antlogdr1fun").value = calcLogDRFun(doseratio1fun).toFixed(2);
var logdr2fun = document.getElementById("antlogdr2fun").value = calcLogDRFun(doseratio2fun).toFixed(2);
var logdr3fun = document.getElementById("antlogdr3fun").value = calcLogDRFun(doseratio3fun).toFixed(2);
var logdr4fun = document.getElementById("antlogdr4fun").value = calcLogDRFun(doseratio4fun).toFixed(2);

function updateValidFun(data0, data1, data2, data3) {

    var validdata = [data0[0], data1[0], data2[0], data3[0]];
    for (i = 0; i < 4; i++) {
        if (validdata[i] >= -12 && validdata[i] <= -2) {
            isPointValidfun[i] = true;
        }
        else {
            isPointValidfun[i] = false;
        }
    }

    markercoloursfun = [];
    for (j = 0; j < 4; j++) {
        if (isPointValidfun[j]){
            markercoloursfun.push(allmarkercoloursfun[j]);
        }
    }
    var update = {
        marker :{
            color: markercoloursfun,
            size: dotsize,
        }
    };
    Plotly.restyle("schildFun", update, 0);
}

function calcSchildFun(logval1, logval2, logval3, logval4, dr1, dr2, dr3, dr4) { //add 3 other concentrations as args
    var data = [[], []];
    var allxLogs = [logval1, logval2, logval3, logval4] //x values for the schild
    var alllogDr1 = [dr1, dr2, dr3, dr4]
    var xLogs = [];
    var logDr1 = [];
    var j = 0;

    for (i = 0; i < 4; i++) {
        if (isPointValidfun[i]) {
            xLogs[j] = allxLogs[i];
            logDr1[j] = alllogDr1[i];
            j++;
        }
    }

    data[0] = xLogs;
    data[1] = logDr1;

    return data;

}

//Define a function to calculate the x values and y values for ideal plot in Schild plot.
function calcIdealSchildFun(affinityFunValue){ 
    var idealData = [[],[]];

    //Ideal Plot Equation: y = 1 * x + (-logKBValue).
    
    //Calculate x values for ideal plot.
	var idealAllxLogs = [-10, -9, -8, -7, -6];

    //Calculate y values for ideal plot based on the equation.
    var idealAllLogDr1 = [];
    var negLogKBValue = Number(affinityFunValue);
    for(i = 0; i < idealAllxLogs.length; i++){
        idealAllLogDr1[i] = 1 * idealAllxLogs[i] + negLogKBValue;
    }
	
	idealData[0] = idealAllxLogs;
	idealData[1] = idealAllLogDr1;

    return idealData;
}

function plotSchildFun(chart) {
    var layout = {
        height: 403,
        width: 450,
        xaxis: {
            title: "Log [Antagonist] (log M)",
            showline: true,
            range: [-10,-6],

        },
        yaxis: {
            title: "Log(DR-1)",
            showline: true,
            range: [0,2],
            tickvals: [0, 0.5, 1, 1.5, 2]

        },
    }
    var data = []

    var lineData = calcSchildFun(antlogval1fun, antlogval2fun, antlogval3fun, antlogval4fun, logdr1fun, logdr2fun, logdr3fun, logdr4fun);
    var trace1 = {
        x: lineData[0],
        y: lineData[1],
        mode: 'lines+markers',
        name: 'Actual Plot',
        line: {
            width: 1,
            color: 'rgb(0,0,0)',
        },
        marker: {
            color: markercoloursfun,
            size: dotsize,
            line: {
                color: 'black',
                width: 1
            }
        }
    }
    data.push(trace1);
  
    //Add a ideal plot on Schild plot.
    var lineData2 = calcIdealSchildFun(afffun2);
    var trace2 = {
      x: lineData2[0],
      y: lineData2[1],
      mode: 'lines',
      name: 'Ideal Plot',
      line: {
        dash: 'dot',
        color:'rgb(128, 128, 128)',
        width: 1
      }
    }
    data.push(trace2);

    Plotly.plot(chart, data, layout, { responsive: true });
}

plotSchildFun("schildFun");

//Define a function to calculate actual plot properties for Shild Plot Property Table.
function updateSchildPropertyTableFun(){
    //Get x values and y values.
    var tableData = calcSchildFun(antlogval1fun, antlogval2fun, antlogval3fun, antlogval4fun, logdr1fun, logdr2fun, logdr3fun, logdr4fun);
    var tempxTableData = tableData[0];
    var tempyTableData = tableData[1];
    var tempNumberofx = tempxTableData.length;
    for(i = 0; i < tempNumberofx; i++){
        tempxTableData[i] = Number(tempxTableData[i]);
        tempyTableData[i] = Number(tempyTableData[i]);
    }

    //Check if there are any equal x values and remove duplicated one(s).
    var x1 = tempxTableData[0];
    var y1 = tempyTableData[0];
    var xTableData = [x1];
    var yTableData = [y1];
    for (i = 1; i < tempNumberofx; i++){
        if(xTableData[0] != tempxTableData[i]){
            xTableData.push(tempxTableData[i]);
            yTableData.push(tempyTableData[i]);
        }
    }
    var numberofx = xTableData.length;
    var numberofy = yTableData.length;

     /*
    Calculate actual plot properties.
    Note: There are some cases can't calculate actual plot properties, need to provide error messages.
          1. There are multiple groups of coordinates with same x values and y values, or there is less than one group of coordinates.
          2. There are multiple x values but some y values are -infinity.
    */
    if (numberofx < 2){
        document.getElementById("slopevaluefun").innerHTML = "NA";
        document.getElementById("pA2valuefun").innerHTML = "NA";
        document.getElementById("r2valuefun").innerHTML = "NA";
        document.getElementById("notefun").innerHTML = "Note: Values are not avaliable (NA), becasue Schild Plot has no point or only one point - please try changing the properties of the agonist or antagonist, or the Level of Effect.";
    }
    else{
        if(isFinite(y1) == false){
            document.getElementById("slopevaluefun").innerHTML = "NA";
            document.getElementById("pA2valuefun").innerHTML = "NA";
            document.getElementById("r2valuefun").innerHTML = "NA";
            document.getElementById("notefun").innerHTML = "Note: Values are not avaliable (NA), becasue Schild Plot has no point - please try changing the properties of the agonist or antagonist, or the Level of Effect.";
        }
        else{
            var x1Calc = xTableData[0];
            var x2Calc = xTableData[numberofx - 1];
            var y1Calc = yTableData[0];
            var y2Calc = yTableData[numberofy - 1];

            //Calculate slope.
            var slopeValueFun = (y2Calc - y1Calc) / (x2Calc - x1Calc);
            document.getElementById("slopevaluefun").innerHTML = slopeValueFun.toFixed(2);

            //Calculate pA2 (x-intercept).
            var b = y1Calc - (slopeValueFun * x1Calc);
            pA2Value = (0 - b) / slopeValueFun;
            document.getElementById("pA2valuefun").innerHTML = pA2Value.toFixed(2);

            //Calculate R square.

            //Calculate the mean of x and y.
            var xTotal = 0;
            var yTotal = 0;
            for (var i = 0; i < numberofx; i++) {
                xTotal += xTableData[i];
                yTotal += yTableData[i];
            }
            var xMean = xTotal / numberofx;
            var yMean = yTotal / numberofy;

            //Calculate sum of regression.
            var regressionSum = 0;
            for (var i = 0; i < numberofx; i++) {
                regressionSum += (xTableData[i] - xMean) * (yTableData[i] - yMean);
            }

            //Calculate sum of total.
            var sumx2 = 0;
            var sumy2 = 0;
            for (var i = 0; i < numberofx; i++) {
                sumx2 += (xTableData[i] - xMean) ** 2;
                sumy2 += (yTableData[i] - yMean) ** 2;
            }
            var totalSum = Math.sqrt(sumx2 * sumy2);

            //Calculate R square value.
            var rValue = regressionSum / totalSum;
            var r2ValueFun = rValue ** 2;
            document.getElementById("r2valuefun").innerHTML = r2ValueFun.toFixed(2);

            document.getElementById("notefun").innerHTML = "";
        }
    }
}

updateSchildPropertyTableFun();


//QUESTION BOX
var questionsSchildfun = ["Will the Schild plot for a functional antagonist be linear with a slope = 1.0?",
"Is the shape and position of the Schild plot likely to be independent of the properties of the agonist (affinity / efficacy) and/or cell (receptor density, signal amplification)?",
"Can the pA<sub>2</sub> values derived from the Schild plot for a functional antagonist be used to calculate –logK<sub>B</sub> values?",
"Are functional antagonists appropriate for use in Schild analyses?"];
	
	
var answersSchildfun = ["Almost always <b>NO</b>.  There are published examples of functional antagonists producing Schild plots that are linear with a slope not different from one (Kenakin, 1981). Indeed, particular simulations can generate Schild plots for functional antagonists that appear to linear with slope = 1.0 (at least over a specified and restricted concentration range of functional antagonist).  However, Schild plots obtained using functional antagonists may be linear or nonlinear, or have a slope <, = or > 1.0, depending upon the characteristics of the agonist and functional antagonist, their respective receptor-effector pathways, and the level of effect used to calculate dose ratio values. This can be readily observed by using the Dose-Response Visualiser.",
"<b>NO</b>. The shape and position of the Schild plot will be highly dependent upon the properties of both sets of agonist (agonist and functional antagonist), especially the efficacy of the functional antagonist.  The shape and position of the Schild plot for the functional antagonist will also depend upon the properties of the cell, including the receptor densities and signal amplification for each agonist.  Moreover, the Schild plot shape and position will depend upon the relative maximum capacities of the two receptor-effector systems within the cell.",
"<b>NO</b>.  pA<sub>2</sub> values obtained from Schild plots using functional antagonists are highly unlikely to be accurate measures of the affinity of the functional antagonist for its receptor.  Amongst other reasons, this is because the effect produced by a functional antagonist will relate to its potency, which is dependent upon numerous factors including affinity, efficacy, receptor density and signal amplification.  Any pA<sub>2</sub> obtained is likely to be an over-estimate of the –logK<sub>A</sub> value of the functional antagonist for its receptor.",
"<b>NO</b>.  Even in the unlikely event that a Schild plot obtained to a functional antagonist is linear with a slope of one, the information obtained (e.g. pA<sub>2</sub>) is of little value.  It is important to restate that the inhibitory actions of a functional antagonist do not occur at the level of the receptor, rather occur further down the stimulus-response cascade, and thus bear no mechanistic resemblance to competitive antagonism.  This highlights the fact that the appearance of a linear Schild plot with a slope of one <b>DOES NOT</b> prove that the inhibitor is acting as a competitive antagonist."]; 


var questionCounterSchildfun = 0;
document.getElementById("schildQuestionfun").innerHTML = "<b>" + questionsSchildfun[questionCounterSchildfun] + "</b>";


function revealAnswerSchildFun() {
    document.getElementById("schildAnswerfun").innerHTML = answersSchildfun[questionCounterSchildfun];
    $('#schildAnswerModalfun').modal('show');
}


function nextQuestionSchildFun() {
    if (questionCounterSchildfun + 1 == questionsSchildfun.length) { //end of questions
        questionCounterSchildfun++;
        document.getElementById("schildQuestionfun").style.display = "none";
        document.getElementById("revealSchildAnswerfun").style.display = "none";
        document.getElementById("restartMessageSchildfun").style.display = "inline-block";
        document.getElementById("restartQuestionSchildfun").style.display = "inline-block";
        document.getElementById("nextSchildQuestionfun").style.display = "none";
    }
    else {
        questionCounterSchildfun++;
        document.getElementById("restartMessageSchildfun").style.display = "none";
        document.getElementById("restartQuestionSchildfun").style.display = "none";
        document.getElementById("schildQuestionfun").innerHTML = "<b>" + questionsSchildfun[questionCounterSchildfun] + "</b>";
    }
}

function prevQuestionSchildFun() {
    if (!questionCounterSchildfun) { //beginning of questions
        alert("Already at beginning of questions");
    }
    else {
        questionCounterSchildfun--;
        document.getElementById("schildQuestionfun").style.display = "block";
        document.getElementById("nextSchildQuestionfun").style.display = "inline-block";
        document.getElementById("revealSchildAnswerfun").style.display = "inline-block";
        document.getElementById("restartMessageSchildfun").style.display = "none";
        document.getElementById("restartQuestionSchildfun").style.display = "none";
        document.getElementById("schildQuestionfun").innerHTML = "<b>" + questionsSchildfun[questionCounterSchildfun] + "</b>";
    }
}

function restartQuestionSchildFun() {
    questionCounterSchildfun = 0;
    document.getElementById("schildQuestionfun").style.display = "block";
    document.getElementById("nextSchildQuestionfun").style.display = "inline-block";
    document.getElementById("restartMessageSchildfun").style.display = "none";
    document.getElementById("restartQuestionSchildfun").style.display = "none";
    document.getElementById("schildQuestionfun").innerHTML = "<b>" + questionsSchildfun[questionCounterSchildfun] + "</b>";
    document.getElementById("revealSchildAnswerfun").style.display = "inline-block";
}

