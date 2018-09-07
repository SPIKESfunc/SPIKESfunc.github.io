
var affaff = document.getElementById("affaffslider").defaultValue;
var effaff = document.getElementById("effaffslider").defaultValue;
var denaff = document.getElementById("denaffslider").defaultValue;
var efficaff = document.getElementById("efficiaffslider").defaultValue;

var agoaffaff = document.getElementById("agoaffslider").defaultValue;
var agoeffaff = document.getElementById("agoeffaffslider").defaultValue;


var agoconcarr = [0, -6, -7, -8, -9];

var animation = {
    transition: {
        duration: 100,
        easing: "cubic-in-out"
    }
}

function updateAffinityAff(value){
    affaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

} 

function updateEfficacyAff(value){
    effaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
} 

function updateDensityAff(value){
    denaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
} 

function updateEfficiencyAff(value){
    efficaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

} 

function updateAgoAffinityAff(value){
    agoaffaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

}

function updateAgoEffectAff(value){
    agoeffaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
}

function calcLinesAff(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoeffect, agoconcentration){
    //console.log("calclines ran")
    //console.log(affinity, efficacy, recepDensity, efficiency)
    const STEP = 0.05;
    var data = [[],[]];
    //Inverse log input values

    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);

    //var agoeff = 10**(agoeffect)
    var agoeff = 10**(-1*agoeffect);
    if(agoconcentration == 0){
        //console.log("agoconc 0 activated")
        agoconc = 0;
        agoaffin = 0;
        for (i=-12; i<-2;i=i+STEP){
            effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin);
            data[0].push(i);
            data[1].push(effect);
        }
    }
    else{
        //console.log("agoconc not 0 activated")
        agoconc = 10**agoconcentration;
        for (i=-12; i<-2;i=i+STEP){
            effect = ((10**i)*efcay*recep*efcey*100)/((10**i)*(efcay*recep*efcey+1)+((affin*(agoconc/agoaffin + 1))/(1+((agoeff*agoconc)/agoaffin))));
            data[0].push(i);
            data[1].push(effect);
        }
    }
    return data;
}

function plotGraphAff(chart){

    var layout = {
        xaxis:{
            title: "[Agonist] (log M)",
            showline: true,
            range: [-12,-2],
            
        },
        yaxis:{
            title: "Effect (% Emax)",
            showline: true,
            range: [0,100],
            tickvals: [0,20,40,60,80,100]

        }
    }
    var j;
    for(j = 0; j<5; j++){
        var data= [];
        //console.log("for loop ran "+j)
        console.log("value of agoconc:"+agoconcarr[j])
        var lineData = calcLinesAff(affaff, effaff, denaff, efficaff, agoaffaff, agoeffaff, agoconcarr[j])
        console.log(lineData)
        var graph = {
            x: lineData[0],
            y: lineData[1],
            mode: "lines",
            line: {
                width: 1
            }
        }
    data.push(graph);

    Plotly.plot(chart,data,layout);
    }
}

plotGraphAff("alloaffin");

