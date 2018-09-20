
var afffun = document.getElementById("afffunslider").defaultValue;
var efffun = document.getElementById("efffunslider").defaultValue;
var denfun = document.getElementById("denfunslider").defaultValue;
var efficfun = document.getElementById("efficifunslider").defaultValue;
var agoafffun = document.getElementById("agoafffunslider").defaultValue;
var agoefffun = document.getElementById("agoefffunslider").defaultValue;
var agodenfun = document.getElementById("agodenfunslider").defaultValue;
var agoefficfun = document.getElementById("agoefficifunslider").defaultValue;

var agoconcarr = [0, -9, -8, -7, -6];

var animation = {
    transition: {
        duration: 100,
        easing: "exp-in-out"
    }
}

function updateAffinityFun(value){
    afffun = value;
    lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
    lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
    lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
    lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
    lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
    Plotly.animate("functional",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

} 

function updateEfficacyFun(value){
    efffun = value;
    lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
    lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
    lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
    lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
    lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
    Plotly.animate("functional",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
} 

function updateDensityFun(value){
    denfun = value;
    lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
    lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
    lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
    lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
    lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
    Plotly.animate("functional",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
} 

function updateEfficiencyFun(value){
    efficfun = value;
    lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
    lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
    lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
    lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
    lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
    Plotly.animate("functional",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

} 

function updateAgoAffinityFun(value){
    agoafffun = value;
    lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
    lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
    lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
    lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
    lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
    Plotly.animate("functional",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

}

function updateAgoEfficacyFun(value){
    agoefffun = value;
    lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
    lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
    lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
    lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
    lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
    Plotly.animate("functional",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
}

function updateAgoDensityFun(value){
    agodenfun = value;
    lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
    lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
    lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
    lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
    lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
    Plotly.animate("functional",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
} 

function updateAgoEfficiencyFun(value){
    agoefficfun = value;
    lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
    lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
    lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
    lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
    lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
    Plotly.animate("functional",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)

} 

function resetFun(){
    afffun = document.getElementById("afffunslider").value = document.getElementById("afffunslider").defaultValue;
    efffun = document.getElementById("efffunslider").value = document.getElementById("efffunslider").defaultValue;
    denfun = document.getElementById("denfunslider").value = document.getElementById("denfunslider").defaultValue;
    efficfun = document.getElementById("efficifunslider").value = document.getElementById("efficifunslider").defaultValue;
    agoafffun = document.getElementById("agoafffunslider").value = document.getElementById("agoafffunslider").defaultValue;
    agoefffun = document.getElementById("agoefffunslider").value = document.getElementById("agoefffunslider").defaultValue;
    agodenfun = document.getElementById("agodenfunslider").value = document.getElementById("agodenfunslider").defaultValue;
    agoefficfun = document.getElementById("agoefficifunslider").value = document.getElementById("agoefficifunslider").defaultValue;
    lineData0 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[0],agodenfun,agoefficfun);
    lineData1 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[1],agodenfun,agoefficfun);
    lineData2 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[2],agodenfun,agoefficfun);
    lineData3 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[3],agodenfun,agoefficfun);
    lineData4 = calcLinesFun(afffun,efffun,denfun,efficfun,agoafffun,agoefffun,agoconcarr[4],agodenfun,agoefficfun);
    Plotly.animate("functional",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}], 
        traces: [0,1,2,3,4], 
        layout: {}
        },animation)
}

function calcLinesFun(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoefficacy, agoconcentration, agodensity, agoefficiency){
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
    var agoeff = 10**(agoefficacy);
    var agoden = 10**agodensity;
    var agoeffic = 10**agoefficiency;

    var emaxa = 100;
    var emaxb = 100;

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
            var aconc = 10**i;
            /*effect1 = (100/((agoconc/agoaffin) +1));
            effect2 = aconc*efcay*recep*efcey;
            effect3 = (aconc*((efcay*recep*efcey)+1))+affin;
            effect4 = agoconc*aconc*agoeff*agoden*agoeffic;
            effect5 = agoaffin*((aconc*((agoeff*agoden*agoeffic)+1))+affin);
            effect = effect1*((effect2/effect3)+(effect4/effect5));*/

            effect1 = aconc*efcay*recep*efcey*emaxa;
            effect2 = (aconc*((efcay*recep*efcey)+1))+affin;
            effect3 = agoconc*agoeff*agoden*agoeffic*emaxb;
            effect4 = (agoconc*((agoeff*agoden*agoeffic)+1))+agoaffin;

            effect = ((effect1/effect2)-(effect3/effect4));

            //effect = (100/((agoconc/agoaffin)+1))*(((aconc*efcay*recep*efcey)/((aconc*((efcay*recep*efcey)+1))+affin))+((agoconc*aconc*(agoeff*agoden*agoeffic))/(agoaffin*aconc*((agoeff*agoden*agoeffic)+1)+affin)));
            data[0].push(i);
            data[1].push(effect);
        }
    }
    return data;
}

function plotGraphFun(chart){

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
        var lineData = calcLinesFun(afffun, efffun, denfun, efficfun, agoafffun, agoefffun, agoconcarr[j],agodenfun,agoefficfun)
        
        if(j==0){
            var graph = {
                x: lineData[0],
                y: lineData[1],
                mode: "lines",
                name: 0+"nM",
                line: {
                width: 1
                }
            }
        }
        else{
        var graph = {
                x: lineData[0],
                y: lineData[1],
                mode: "lines",
                name: 10**agoconcarr[j]*1000000000+"nM",
                line: {
                width: 1
                }
            }
        }
    data.push(graph);

    Plotly.plot(chart,data,layout);
    }
}

plotGraphFun("functional");

