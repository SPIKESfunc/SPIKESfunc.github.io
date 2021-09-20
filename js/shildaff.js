var agoconcarraff = [0, -9, -8, -7];
var affaff = document.getElementById("affaffslider").defaultValue;
var effaff = document.getElementById("effaffslider").defaultValue;
var denaff = document.getElementById("denaffslider").defaultValue;
var efficaff = document.getElementById("efficiaffslider").defaultValue;
var agoaffaff = document.getElementById("agoaffnumaff").defaultValue;
var agoafflogaff = document.getElementById("agoafflognumaff").defaultValue;
var agoeffaff = document.getElementById("agoeffaff").defaultValue;
var efflevelaff = document.getElementById("efflevelaff").defaultValue;
document.getElementById("displayeffectaff").innerHTML = (efflevelaff*100).toFixed(2);
document.getElementById("efftableaff").innerHTML = (efflevelaff*100).toFixed(2);
var isPointValidaff = [true, true, true, true];

var antval0aff = document.getElementById("ant0aff").defaultValue;
var antval1aff = document.getElementById("ant1aff").defaultValue;
var antval2aff = document.getElementById("ant2aff").defaultValue;
var antval3aff = document.getElementById("ant3aff").defaultValue;
var antlogval1aff = document.getElementById("antlog1aff").defaultValue;
var antlogval2aff = document.getElementById("antlog2aff").defaultValue;
var antlogval3aff = document.getElementById("antlog3aff").defaultValue;
var affHalfMaxEffect;

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

function titleAff(){
    document.getElementById("tabtitle").innerHTML = "Schild Plot Generator for Allosteric Antagonist (Affinity)"
}

function findAffHalfMaxEffect(lineData){
    affHalfMaxEffect = Math.max.apply(Math, lineData[1]) * efflevelaff;
} 

function calc50Aff(lineData){
    
	var maxEffectAgoIndex = lineData[1].findIndex(function(number) { //get the x-index for the 50% value
	    return number >= affHalfMaxEffect;
    });
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    var agoret = [[halfAgoEffect], [affHalfMaxEffect]];
	return agoret; //return x, y
}

function resetQuantAff(){
    agoconcarraff = [0, -9, -8, -7];
    affaff = document.getElementById("affaffslider").value = document.getElementById("affaffslider").defaultValue;
    effaff = document.getElementById("effaffslider").value = document.getElementById("effaffslider").defaultValue;
    denaff = document.getElementById("denaffslider").value = document.getElementById("denaffslider").defaultValue;
    efficaff = document.getElementById("efficiaffslider").value = document.getElementById("efficiaffslider").defaultValue;
    agoaffaff = document.getElementById("agoaffnumaff").value = document.getElementById("agoaffnumaff").defaultValue;
    agoafflogaff = document.getElementById("agoafflognumaff").value = document.getElementById("agoafflognumaff").defaultValue;
    efflevelaff = document.getElementById("efflevelaff").value = document.getElementById("efflevelaff").defaultValue;
    document.getElementById("displayeffectaff").innerHTML = (efflevelaff*100).toFixed(2);
    document.getElementById("efftableaff").innerHTML = (efflevelaff*100).toFixed(2);
    
    antval0aff = document.getElementById("ant0aff").value = document.getElementById("ant0aff").defaultValue;
    antval1aff = document.getElementById("ant1aff").value = document.getElementById("ant1aff").defaultValue;
    antval2aff = document.getElementById("ant2aff").value = document.getElementById("ant2aff").defaultValue;
    antval3aff = document.getElementById("ant3aff").value = document.getElementById("ant3aff").defaultValue;
    antlogval1aff = document.getElementById("antlog1aff").value = document.getElementById("antlog1aff").defaultValue;
    antlogval2aff = document.getElementById("antlog2aff").value = document.getElementById("antlog2aff").defaultValue;
    antlogval3aff = document.getElementById("antlog3aff").value = document.getElementById("antlog3aff").defaultValue;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    updateValidAff(halfData0, halfData1, halfData2, halfData3);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function graphAlertAff(div){

    document.getElementById(div).innerHTML = "Agonist property has decreased too far to sustain curve"
}

function graphRemoveAlertAff(div){
    document.getElementById(div).innerHTML = ""
}
//set min with new range
function checkSliderMinAff(){
    let ret = false;
    if(document.getElementById("affaffslider").value == 4){
        ret = true
    }
    if(document.getElementById("effaffslider").value == 0.04){
        ret = true
    }
    if(document.getElementById("denaffslider").value == 0.04){
        ret = true
    }
    if(document.getElementById("efficiaffslider").value == 0.04){
        ret = true
    }
    if(document.getElementById("efflevelaff").value == 0){
        ret = true
    }
    return ret
}

function updateAffinityAff(value){
    affaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("quantitativeAff", 'visible', false)
        graphAlertAff("quantalertAff")
    }
    else{
        graphRemoveAlertAff("quantalertAff")
        Plotly.restyle("quantitativeAff", 'visible', true)
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
        findAffHalfMaxEffect(lineData0);
        halfData0 = calc50Aff(lineData0);
        halfData1 = calc50Aff(lineData1);
        halfData2 = calc50Aff(lineData2);
        halfData3 = calc50Aff(lineData3);
        updateValidAff(halfData0, halfData1, halfData2, halfData3);
        
        updateEverythingAff();
        Plotly.animate("quantitativeAff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
        Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 

function updateEfficacyAff(value){
    effaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("quantitativeAff", 'visible', false)
        graphAlertAff("quantalertAff")
    }
    else{
        graphRemoveAlertAff("quantalertAff")
        Plotly.restyle("quantitativeAff", 'visible', true)
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
        findAffHalfMaxEffect(lineData0);
        halfData0 = calc50Aff(lineData0);
        halfData1 = calc50Aff(lineData1);
        halfData2 = calc50Aff(lineData2);
        halfData3 = calc50Aff(lineData3);
        updateValidAff(halfData0, halfData1, halfData2, halfData3);

        updateEverythingAff();
        Plotly.animate("quantitativeAff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
        Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 

function updateDensityAff(value){
    denaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("quantitativeAff", 'visible', false)
        graphAlertAff("quantalertAff")
    }
    else{
        graphRemoveAlertAff("quantalertAff")
        Plotly.restyle("quantitativeAff", 'visible', true)
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
        findAffHalfMaxEffect(lineData0);
        halfData0 = calc50Aff(lineData0);
        halfData1 = calc50Aff(lineData1);
        halfData2 = calc50Aff(lineData2);
        halfData3 = calc50Aff(lineData3);
        updateValidAff(halfData0, halfData1, halfData2, halfData3);

        updateEverythingAff();
        Plotly.animate("quantitativeAff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
        Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }

} 

function updateEfficiencyAff(value){
    efficaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("quantitativeAff", 'visible', false)
        graphAlertAff("quantalertAff")
    }
    else{
        graphRemoveAlertAff("quantalertAff")
        Plotly.restyle("quantitativeAff", 'visible', true)
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
        findAffHalfMaxEffect(lineData0);
        halfData0 = calc50Aff(lineData0);
        halfData1 = calc50Aff(lineData1);
        halfData2 = calc50Aff(lineData2);
        halfData3 = calc50Aff(lineData3);
        updateValidAff(halfData0, halfData1, halfData2, halfData3);
        
        updateEverythingAff();
        Plotly.animate("quantitativeAff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
        Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }

} 

function updateAgoAffinityAff(value){
    agoaffaff = value;
    agoafflogaff = -1*Math.log10(value);
    document.getElementById("agoafflognumaff").value = agoafflogaff.toFixed(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    updateValidAff(halfData0, halfData1, halfData2, halfData3);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAgoAffinityLogAff(value){
    agoafflogaff = value;
    agoaffaff = Math.pow(10, -value);
    document.getElementById("agoaffnumaff").value = agoaffaff.toExponential(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    updateValidAff(halfData0, halfData1, halfData2, halfData3);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAgoEffAff(value){
    agoeffaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    updateValidAff(halfData0, halfData1, halfData2, halfData3);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAntagonist1Aff(value){
    antval1aff = value;
    agoconcarraff[1] = Math.log10(value);
    document.getElementById("antlog1aff").value = agoconcarraff[1].toFixed(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    updateValidAff(halfData0, halfData1, halfData2, halfData3);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateefflevelAff(value){
    efflevelaff = value;
    document.getElementById("displayeffectaff").innerHTML = (efflevelaff*100).toFixed(2);
    document.getElementById("efftableaff").innerHTML = (efflevelaff*100).toFixed(2);
    if(checkSliderMinAff()){
        Plotly.restyle("quantitativeAff", 'visible', false)
        graphAlertAff("quantalertAff")
    }
    else{
        graphRemoveAlertAff("quantalertAff")
        Plotly.restyle("quantitativeAff", 'visible', true)
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
        findAffHalfMaxEffect(lineData0);
        halfData0 = calc50Aff(lineData0);
        halfData1 = calc50Aff(lineData1);
        halfData2 = calc50Aff(lineData2);
        halfData3 = calc50Aff(lineData3);
        updateValidAff(halfData0, halfData1, halfData2, halfData3);

        updateEverythingAff();
        Plotly.animate("quantitativeAff",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
        Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 

function updateAntagonistLog1Aff(value){
    agoconcarraff[1] = value;
    antval1aff = Math.pow(10, value);
    document.getElementById("ant1aff").value = antval1aff.toExponential(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    updateValidAff(halfData0, halfData1, halfData2, halfData3);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAntagonist2Aff(value){
    antval2aff = value;
    agoconcarraff[2] = Math.log10(value);
    document.getElementById("antlog2aff").value = agoconcarraff[2].toFixed(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    updateValidAff(halfData0, halfData1, halfData2, halfData3);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAntagonistLog2Aff(value){
    agoconcarraff[2] = value;
    antval2aff = Math.pow(10, value);
    document.getElementById("ant2aff").value = antval2aff.toExponential(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    updateValidAff(halfData0, halfData1, halfData2, halfData3);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonist3Aff(value){
    antval3aff = value;
    agoconcarraff[3] = Math.log10(value);
    document.getElementById("antlog3aff").value = agoconcarraff[3].toFixed(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    updateValidAff(halfData0, halfData1, halfData2, halfData3);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonistLog3Aff(value){
    agoconcarraff[3] = value;
    antval3aff = Math.pow(10, value);
    document.getElementById("ant3aff").value = antval3aff.toExponential(2);
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoafflogaff, agoeffaff, agoconcarraff[3]);
    findAffHalfMaxEffect(lineData0);
    halfData0 = calc50Aff(lineData0);
    halfData1 = calc50Aff(lineData1);
    halfData2 = calc50Aff(lineData2);
    halfData3 = calc50Aff(lineData3);
    updateValidAff(halfData0, halfData1, halfData2, halfData3);

    updateEverythingAff();
    Plotly.animate("quantitativeAff",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildAff(agoconcarraff[1], agoconcarraff[2], agoconcarraff[3], logdr1aff, logdr2aff, logdr3aff);
    Plotly.animate("schildAff",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function calcAgoHalfEffectAff(affinity, efficacy, recepDensity, efficiency, agoaffinity, antagconc){
    var ago;
    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);
    var antconc = antagconc;
    ago = (affHalfMaxEffect*(affin*(1+antconc/agoaffin)))/((efcay*recep*efcey*100)-(affHalfMaxEffect*(efcay*recep*efcey+1)));
    return ago;
}

function calcDoseRatioAff(presant, absant){
    var doserat;
    doserat = presant/absant;
    return doserat;
}

function calcLogDRAff(doseratio){
    var logdr;
    logdr = Math.log10(doseratio-1);
    return logdr;
}

function updateEverythingAff(){
    anthalfeff0aff = document.getElementById("anteff0aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, antval0aff).toExponential(2);
    anthalfeff1aff = document.getElementById("anteff1aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, antval1aff).toExponential(2);
    anthalfeff2aff = document.getElementById("anteff2aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, antval2aff).toExponential(2);
    anthalfeff3aff = document.getElementById("anteff3aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, antval3aff).toExponential(2);
    
    doseratio1aff = document.getElementById("antdose1aff").value = calcDoseRatioAff(anthalfeff1aff, anthalfeff0aff).toFixed(2);
    doseratio2aff = document.getElementById("antdose2aff").value = calcDoseRatioAff(anthalfeff2aff, anthalfeff0aff).toFixed(2);
    doseratio3aff = document.getElementById("antdose3aff").value = calcDoseRatioAff(anthalfeff3aff, anthalfeff0aff).toFixed(2);
    
    logdr1aff = document.getElementById("antlogdr1aff").value = calcLogDRAff(doseratio1aff).toFixed(2);
    logdr2aff = document.getElementById("antlogdr2aff").value = calcLogDRAff(doseratio2aff).toFixed(2);
    logdr3aff = document.getElementById("antlogdr3aff").value = calcLogDRAff(doseratio3aff).toFixed(2);
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

    if(agoconcentration == 0){
        agoconc = 0;
        agoaffin = 0;
        for (i=-12; i<-2;i=i+STEP){
            data[0].push(i);
            //data[1].push((10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin));
            data[1].push((10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin));
        }
    }
    else{
    	agoconc = 10**agoconcentration;
    	for (i=-12; i<-2;i=i+STEP){
        	data[0].push(i);
        	//data[1].push((10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin*(1+agoconc/agoaffin)));
            data[1].push(((10**i)*efcay*recep*efcey*100)/((10**i)*(efcay*recep*efcey+1)+((affin*(agoconc/agoaffin + 1))/(1+((agoeff*agoconc)/agoaffin)))));
    	}
	}
    return data;
}

var linecoloursaff = ["#000000", "#ff6666", "#ff3333", "#ff0000"]

function plotGraphAff(chart){
    var layout = {
        height:372,
        width:450,
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
            tickvals: [0,20,40,60,80,100],
            dtick: 10
        }
    }
    var j;

    for(j = 0; j<4; j++){
    	var data = []
    	var lineData = calcLinesAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[j])
   		if(j==0){
			var graph = {
        		x: lineData[0],
        		y: lineData[1],
       			mode: "lines",
       			name: 0+"nM",
                line: {
                    color: linecoloursaff[j],
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
       			name: 10**agoconcarraff[j]*1000000000+"nM",
                line: {
                    color: linecoloursaff[j],
                    width: 1
                },
                showlegend: false
    		}
    	}
    	data.push(graph);
    	Plotly.plot(chart,data,layout, {responsive: true});
	}
    var i;
    legendview = [true, false, false, false]
    for(i = 0; i<4; i++){
        var halfData = calcLinesAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[i]);
        findAffHalfMaxEffect(calcLinesAff(affaff, effaff, denaff, efficaff, agoafflogaff, agoeffaff, agoconcarraff[0]));
        data50 = calc50Aff(halfData); //plot the 50% effect marker
        var trace1 = [{
            x: data50[0],
            y: data50[1],
            mode: 'markers',
            name: "EC Value",
            marker: {
                color: "orange"
            },
            showlegend: legendview[i]
        }];
        Plotly.plot(chart,trace1,layout, {responsive: true});
    }
}
plotGraphAff("quantitativeAff");

var anthalfeff0aff = document.getElementById("anteff0aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, antval0aff).toExponential(2);
var anthalfeff1aff = document.getElementById("anteff1aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, antval1aff).toExponential(2);
var anthalfeff2aff = document.getElementById("anteff2aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, antval2aff).toExponential(2);
var anthalfeff3aff = document.getElementById("anteff3aff").value = calcAgoHalfEffectAff(affaff, effaff, denaff, efficaff, agoafflogaff, antval3aff).toExponential(2);

var doseratio1aff = document.getElementById("antdose1aff").value = calcDoseRatioAff(anthalfeff1aff, anthalfeff0aff).toFixed(2);
var doseratio2aff = document.getElementById("antdose2aff").value = calcDoseRatioAff(anthalfeff2aff, anthalfeff0aff).toFixed(2);
var doseratio3aff = document.getElementById("antdose3aff").value = calcDoseRatioAff(anthalfeff3aff, anthalfeff0aff).toFixed(2);

var logdr1aff = document.getElementById("antlogdr1aff").value = calcLogDRAff(doseratio1aff).toFixed(2);
var logdr2aff = document.getElementById("antlogdr2aff").value = calcLogDRAff(doseratio2aff).toFixed(2);
var logdr3aff = document.getElementById("antlogdr3aff").value = calcLogDRAff(doseratio3aff).toFixed(2);

function updateValidAff(data0, data1, data2, data3){
    var validdata = [data0[0], data1[0], data2[0], data3[0]];

    for(i = 0; i<4; i++){
        if(validdata[i]>=-12 && validdata[i]<=-2){
            isPointValidaff[i] = true;
        }
        else{
            isPointValidaff[i] = false;
        }
    }
}

function calcSchildAff(logval1,logval2, logval3, dr1, dr2, dr3){ //add 3 other concentrations as args
    var data = [[],[]];
	var allxLogs = [-agoafflog, logval1, logval2, logval3] //x values for the schild
	var alllogDr1 = [0, dr1, dr2, dr3]
    var xLogs = [];
    var logDr1 = [];
    var j = 0;

    for(i = 0; i<4; i++){
        if(isPointValidaff[i]){
            xLogs[j] =  allxLogs[i];
            logDr1[j] = alllogDr1[i];
            j++;
        }
    }

	data[0] = xLogs;
	data[1] = logDr1;

    return data;

}

function plotSchildAff(chart){
	var layout = {
        height:403,
        width:450,
        xaxis:{
            title: "Log [Antagonist] (log M)",
            showline: true,
            range: [-11,-4],
            
        },
        yaxis:{
            title: "Log(DR-1)",
            showline: true,
            range: [0,4],
            tickvals: [0, 1, 2, 3, 4]

        },
	}	
	var data = []

    var lineData = calcSchildAff(antlogval1aff, antlogval2aff, antlogval3aff, logdr1aff, logdr2aff, logdr3aff);
	var trace1 = {
		x: lineData[0],
		y: lineData[1],
		mode: 'lines+markers',
		line: {
			width: 1
		}
	}
	data.push(trace1);
	
	Plotly.plot(chart, data, layout, {responsive: true});
}

plotSchildAff("schildAff");



function showInstructionsQuant() {
    $('#instructions').modal('show');
    $('.nav-tabs a[href="#quant"]').tab('show');
};

//QUESTION BOX
var questionsSchildaff = ["For an allosteric antagonist that reduces agonist affinity only, will the Schild plot be linear with a slope = 1.0?",
"Is the shape and position of the Schild plot likely to be independent of the properties of the agonist (affinity / efficacy) and/or cell (receptor density, signal amplification)?",
"Can the pA<sub>2</sub> values derived from the Schild plot be used to calculate –logK<sub>B</sub> values for an allosteric antagonist?",
"Are allosteric antagonists appropriate for use in Schild analyses?"];
	
	
var answersSchildaff = ["YES and NO, depending on the concentration range of allosteric antagonist used and the maximum level of rightward shift produced by the antagonist. <br> Let’s first consider an allosteric antagonist that has a large propensity to reduce agonist affinity.  For example, an allosteric antagonist with a low  value of 0.001 will cause a maximum 1000-fold (1/) rightward shift of an agonist dose-response curve (when high [allosteric antagonist] saturate the allosteric binding site).  When such an allosteric antagonist is used at concentrations that produce 5, 20 and 100-fold rightward shifts (much less than the maximum level of possible shift), it will appear that the agonist dose-response curves are shifted to the right in a parallel manner, akin to that produced by a competitive antagonist.  Using these concentrations of allosteric antagonist, the generated Schild plot will appear linear with a slope of unity. <br>Secondly, if an allosteric antagonist has either a low propensity to reduce agonist affinity, or if high concentrations are used (that approach the maximum level of possible shift), then the resultant Schild plot will be nonlinear (a plateau region appearing at high [antagonist]) with a slope < 1.0.  This can be readily observed by using the Dose-Response Visualiser.  (see Kenakin p188 and p428).",
"YES, for an allosteric antagonist that affects agonist affinity only, the shape and position of the Schild plot may be dependent upon the agonist used (unlike competitive antagonists).  This is because allosteric antagonists display ‘probe dependence’, whereby the effects of an allosteric antagonist on the affinity of the agonist for the orthosteric binding site on the receptor may vary markedly between agonists, i.e. be substantial for one agonist but inconsequential for another agonist.  Thus, whereas the use of the former agonist may produce a characteristic Schild plot (linear with slope = 1.0) the latter agonist may NOT produce a Schild plot at all (as the allosteric antagonist does not affect the affinity of this particular agonist).  If the allosteric antagonist only affects agonist affinity, then the impact of changing agonist efficacy, receptor density or signal amplification on the shape and position of the Schild plot should be minimal.",
"YES, it is possible to determine the –logK<sub>B</sub> value for an allosteric antagonist that affects agonist affinity from a pA<sub>2</sub> value derived from a Schild plot.<br> As indicated in the first question of this series, a Schild plot for an allosteric antagonist that affects agonist affinity will appear linear with a slope of 1.0 IF the allosteric antagonist has a large propensity to reduce agonist affinity and the [allosteric antagonist] used produce dose ratios (shifts) that are much less than the maximum dose ratio.  In this instance, the pA<sub>2</sub> value is likely to be a reliable estimate of the affinity (-logK<sub>B</sub>) of the antagonist for the allosteric binding site on the receptor.  Alternately, the fitting of experimental agonist dose-response data obtained over a wide range of [allosteric antagonist] to an appropriate model of allosteric antagonism using nonlinear least squares regression analysis may generate reliable K<sub>B</sub> values (and &#946 values) (see Kenakin p428). ",
"As indicated in the answers to previous questions, careful analyses of Schild plots obtained to allosteric antagonists that affect agonist affinity can provide reliable measures of the affinity of the antagonist for the allosteric binding site on the receptor."]; 

 
var questionCounterSchildaff = 0;
document.getElementById("schildQuestionaff").innerHTML = "<b>" + questionsSchildaff[questionCounterSchildaff] + "</b>";


function revealAnswerSchildAff() {
    document.getElementById("schildAnsweraff").innerHTML = answersSchildaff[questionCounterSchildaff];
    $('#schildAnswerModalaff').modal('show');
}


function nextQuestionSchildAff() {
    if (questionCounterSchildaff + 1 == questionsSchildaff.length) { //end of questions
        questionCounterSchildaff++;
        document.getElementById("schildQuestionaff").style.display = "none";
        document.getElementById("revealSchildAnsweraff").style.display = "none";
        document.getElementById("restartMessageSchildaff").style.display = "inline-block";
        document.getElementById("restartQuestionSchildaff").style.display = "inline-block";
        document.getElementById("nextSchildQuestionaff").style.display = "none";
    }
    else {
        questionCounterSchildaff++;
        document.getElementById("restartMessageSchildaff").style.display = "none";
        document.getElementById("restartQuestionSchildaff").style.display = "none";
        document.getElementById("schildQuestionaff").innerHTML = "<b>" + questionsSchildaff[questionCounterSchildaff] + "</b>";
    }
}

function prevQuestionSchildAff() {
    if (!questionCounterSchildaff) { //beginning of questions
        alert("Already at beginning of questions");
    }
    else {
        questionCounterSchildaff--;
        document.getElementById("schildQuestionaff").style.display = "block";
        document.getElementById("nextSchildQuestionaff").style.display = "inline-block";
        document.getElementById("revealSchildAnsweraff").style.display = "inline-block";
        document.getElementById("restartMessageSchildaff").style.display = "none";
        document.getElementById("restartQuestionSchildaff").style.display = "none";
        document.getElementById("schildQuestionaff").innerHTML = "<b>" + questionsSchildaff[questionCounterSchildaff] + "</b>";
    }
}

function restartQuestionSchildAff() {
    questionCounterSchildaff = 0;
    document.getElementById("schildQuestionaff").style.display = "block";
    document.getElementById("nextSchildQuestionaff").style.display = "inline-block";
    document.getElementById("restartMessageSchildaff").style.display = "none";
    document.getElementById("restartQuestionSchildaff").style.display = "none";
    document.getElementById("schildQuestionaff").innerHTML = "<b>" + questionsSchildaff[questionCounterSchildaff] + "</b>";
    document.getElementById("revealSchildAnsweraff").style.display = "inline-block";
}
