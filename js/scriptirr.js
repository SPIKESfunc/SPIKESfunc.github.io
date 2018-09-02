
var agoconcarr = [0, -6, -7, -8, -9];

var aff = document.getElementById("affirrslider").defaultValue;
var eff = document.getElementById("effirrslider").defaultValue;
var den = document.getElementById("denirrslider").defaultValue;
var effic = document.getElementById("efficiirrslider").defaultValue;
var agoaff = document.getElementById("agoaffirrslider").defaultValue;

var animation = {
    transition: {
        duration: 100,
        easing: "exp-in-out"
    }
}

function updateAffinityIrr(value){
    aff = value;

    lineData0 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[0]);
    lineData1 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[1]);
    lineData2 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[2]);
    lineData3 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[3]);
    lineData4 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[4]);
    Plotly.animate("irreversible",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

} 

function updateEfficacyIrr(value){
    eff = value;

    lineData0 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[0]);
    lineData1 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[1]);
    lineData2 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[2]);
    lineData3 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[3]);
    lineData4 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[4]);
    Plotly.animate("irreversible",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

} 

function updateDensityIrr(value){
    den = value;

    lineData0 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[0]);
    lineData1 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[1]);
    lineData2 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[2]);
    lineData3 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[3]);
    lineData4 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[4]);
    Plotly.animate("irreversible",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
} 

function updateEfficiencyIrr(value){
    effic = value;

    lineData0 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[0]);
    lineData1 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[1]);
    lineData2 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[2]);
    lineData3 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[3]);
    lineData4 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[4]);
    Plotly.animate("irreversible",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

} 

function updateAgoAffinityIrr(value){
    agoaff = value;
    
    lineData0 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[0]);
    lineData1 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[1]);
    lineData2 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[2]);
    lineData3 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[3]);
    lineData4 = calcLinesIrr(aff,eff,den,effic,agoaff,agoconcarr[4]);
    Plotly.animate("irreversible",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
    //I'm doing something wrong if I try just place lineData into newData, below works though
    

}

function calcLinesIrr(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoconcentration){
    console.log("calclinesirr ran")
    //console.log(affinity, efficacy, recepDensity, efficiency)
    const STEP = 0.05;
    var data = [[],[]];
    //Inverse log input values

    // var affin = 10**affinity;
    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    // var agoaffin = 10**agoaffinity;
    var agoaffin = 10**(-1*agoaffinity);
    //var agoconc = 0.000001;
    if(agoconcentration == 0){
        console.log("agoconc 0 activated")
        agoconc = 0;
        agoaffin = 0;
        for (i=-12; i<-2;i=i+STEP){
            effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin);
            data[0].push(i);
            data[1].push(effect);
        }
    }
    else{
        console.log("agoconc not 0 activated")
        agoconc = 10**agoconcentration;
        for (i=-12; i<-2;i=i+STEP){
            effect = (((10**i)/affin)*efcay*recep*efcey*100)/(((10**i)/affin)*(efcay*recep*efcey+1+(agoconc/agoaffin))+1+(agoconc/agoaffin));
            data[0].push(i);
            data[1].push(effect);
        }
    }
    
    return data;
}

function plotGraph(chart){

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
    //var data = []
    console.log(agoconcarr.length);
    var j;
    for(j = 0; j<5; j++){
        var data= [];
        console.log("for loop ran "+j)
        console.log("value of agoconc:"+agoconcarr[j])
        var lineData = calcLinesIrr(aff, eff, den, effic, agoaff, agoconcarr[j])
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
plotGraph("irreversible");