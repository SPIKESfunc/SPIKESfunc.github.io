

var affcom = document.getElementById("affcomslider").defaultValue;
var effcom = document.getElementById("effcomslider").defaultValue;
var dencom = document.getElementById("dencomslider").defaultValue;
var efficcom = document.getElementById("efficicomslider").defaultValue;
var agoaffcom = document.getElementById("agoaffcomslider").defaultValue;

var animation = {
    transition: {
        duration: 100,
        easing: "cubic-in-out"
    }
}

/*
var trace = {
    x: [-10,-9,-8],
    y: [10,20,30],
    
};

//var data = [trace];
var sliderSteps = [];
for(i = -0.3;i<0.7;i+=0.01){
    sliderSteps.push({
        method:'animate',
        label: i,
              
        args: [[i],{
            
            mode:'immediate',
            transition:{duration: 100},
            frame: {duration: 100, redraw: false},
        }]
    });
    
    
}*/

function updateAffinityCom(value){
    //newData = [];
    affcom = value;
    //console.log(aff)
    lineData = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom);
    /*var graph = {
        y: lineData[1],
        traces:[0]
    }
    console.log(lineData)
    newData.push(graph);*/
    
    //I'm doing something wrong if I try just place lineData into newData, below works though
    Plotly.animate("competitive",{data: [{y: lineData[1]}], traces: [0], layout: {}},animation)

} 

function updateEfficacyCom(value){
    effcom = value;
    lineData = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom);
    //I'm doing something wrong if I try just place lineData into newData, below works though
    Plotly.animate("competitive",{data: [{y: lineData[1]}], traces: [0], layout: {}},animation)

} 

function updateDensityCom(value){
    dencom = value;
    lineData = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom);
    //I'm doing something wrong if I try just place lineData into newData, below works though
    Plotly.animate("competitive",{data: [{y: lineData[1]}], traces: [0], layout: {}},animation)
} 

function updateEfficiencyCom(value){
    efficcom = value;
    lineData = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom);
    //I'm doing something wrong if I try just place lineData into newData, below works though
    Plotly.animate("competitive",{data: [{y: lineData[1]}], traces: [0], layout: {}},animation)

} 

function updateAgoAffinityCom(value){
    agoaffcom = value;
    lineData = calcLinesCom(affcom,effcom,dencom,efficcom,agoaffcom);
    //I'm doing something wrong if I try just place lineData into newData, below works though
    Plotly.animate("competitive",{data: [{y: lineData[1]}], traces: [0], layout: {}},animation)

}

function calcLinesCom(affinity, efficacy, recepDensity, efficiency,agoaffinity){
    //console.log("calclines ran")
    //console.log(affinity, efficacy, recepDensity, efficiency)
    const STEP = 0.05;
    var data = [[],[]];
    //Inverse log input values

    //var affin = 10**affinity;
    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    //var agoaffin = 10**agoaffinity;
    var agoaffin = 10**(-1*agoaffinity);
    var agoconc = 10**(-9);
    console.log(efcay)
    for (i=-12; i<-2;i=i+STEP){
        effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin*(1+agoconc/agoaffin));
        data[0].push(i);
        data[1].push(effect);
    }
    return data;
}

function plotGraphCom(chart){
    var layout = {
        xaxis:{
            title: "Log [Antagonist] (log M)",
            showline: true,
            range: [-10,-4],
            
        },
        yaxis:{
            title: "log (DR-1)",
            showline: true,
            range: [0,4],
            tickvals: [0,1,2,3,4]

        },
        /*sliders: [
            {
                label: 'Slider 1',
                pad: {t: 30},
                active: 50,
                font:{color: 'transparent'}, 
                tickcolor: 'transparent',
                steps: sliderSteps
            },
            {
                label: 'Slider 2',
                pad: {t: 30},
                active: 50,
                font:{color: 'transparent'}, 
                tickcolor: 'transparent',
                steps: sliderSteps
            }
        ]*/
    }
    var data = []
    var lineData = calcLinesCom(affcom, effcom, dencom, efficcom, agoaffcom)
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
plotGraphCom("schild");
