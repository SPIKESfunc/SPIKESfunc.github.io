/*global Plotly graphAlert graphRemoveAlert*/
var affeff = document.getElementById("affeffslider").defaultValue;
var effeff = document.getElementById("effeffslider").defaultValue;
var deneff = document.getElementById("deneffslider").defaultValue;
var efficeff = document.getElementById("efficieffslider").defaultValue;
var agoaffeff = (document.getElementById(
  "antagoeff"
).value = document.getElementById("agoaffeffslider").defaultValue);
var agoeffeff = document.getElementById("agoeffeffslider").defaultValue;
document.getElementById("antcoopeff").value =
  Math.round(10 ** -agoeffeff * Math.pow(10, 3)) / Math.pow(10, 3);

var agoconcarr = [0, -9, -8, -7, -6];
var linestyles = ["solid", "dot", "dashdot", "dot", "dashdot"];

var animation = {
  transition: {
    duration: 0,
    easing: "cubic-in-out"
  },
  frame: {
    duration: 0,
    redraw: false
  }
};

//new vars
var dotsize = 10 // defines 50% dot size

function checkSliderMinEff() {
  let ret = false;
  if (document.getElementById("affeffslider").value === "5") {
    ret = true;
  }
  if (document.getElementById("effeffslider").value === "-0.7") {
    ret = true;
  }
  if (document.getElementById("deneffslider").value === "-1") {
    ret = true;
  }
  if (document.getElementById("efficieffslider").value === "0") {
    ret = true;
  }
  return ret;
}

function calcLinesEff(
  affinity,
  efficacy,
  recepDensity,
  efficiency,
  agoaffinity,
  agoeffect,
  agoconcentration
) {
  const STEP = 0.01;
  var data = [[], []];
  var i, effect;

  //Inverse log input values

  var affin = 10 ** (-1 * affinity);
  var efcay = 10 ** efficacy;
  var recep = 10 ** recepDensity;
  var efcey = 10 ** efficiency;
  var agoaffin = 10 ** (-1 * agoaffinity);
  var agoeff = 10 ** (-1 * agoeffect);

  if (agoconcentration === 0) {
    var agoconc = 0;
    agoaffin = 0;
    for (i = -12; i < -2; i = i + STEP) {
      data[0].push(i);
      data[1].push((10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1-efcay)+affin));
    }
  } else {
    agoconc = 10 ** agoconcentration;
    for (i = -12; i < -2; i = i + STEP) {
      var aconc = 10 ** i;
      var effect1 = 100 / (agoconc / agoaffin + 1);
      var effect2 =
        (aconc * efcay * recep * efcey) /
        (aconc * (efcay * recep * efcey + 1) + affin);
      var effect3 = agoconc / agoaffin;
      var effect4 =
        (aconc * agoeff * efcay * recep * efcey) /
        (aconc * (agoeff * efcay * recep * efcey + 1) + affin);
      effect = effect1 * (effect2 + effect3 * effect4);
      data[0].push(i);
      data[1].push(effect);
    }
  }
  return data;
}

function calc50(lineData) {
  var halfMaxEffect = Math.max.apply(Math, lineData[1]) / 2; //get the 50% value
  var maxEffectAgoIndex = lineData[1].findIndex(function(number) {
    //get the x-index for the 50% value
    return number >= halfMaxEffect;
  });
  var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
  var agoret = [[halfAgoEffect], [halfMaxEffect]];
  return agoret; //return x, y
}


// This is used to update the Concentration Values Table
function updateConcentrationEff(value, index){
  // use this to reference the id of the box
  //let line_id = "comline" + index;
  agoconcarr[index] = value;

  // used existing functions (updateAffinityEff())
  Plotly.restyle("alloeffic", "visible", true);
  var lineData0 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[0]
  );
  var lineData1 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[1]
  );
  var lineData2 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[2]
  );
  var lineData3 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[3]
  );
  var lineData4 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[4]
  );
  var halfData0 = calc50(lineData0);
  var halfData1 = calc50(lineData1);
  var halfData2 = calc50(lineData2);
  var halfData3 = calc50(lineData3);
  var halfData4 = calc50(lineData4);
  Plotly.animate(
    "alloeffic",
    {
      data: [
        { y: lineData0[1] },
        { y: lineData1[1] },
        { y: lineData2[1] },
        { y: lineData3[1] },
        { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        {
          x: halfData2[0],
          y: halfData2[1]
        },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }
      ],
      traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      layout: {}
    },
    animation
  );

}

function updateAffinityEff(value) {
  affeff = value;
  if (checkSliderMinEff()) {
    Plotly.restyle("alloeffic", "visible", false);
    graphAlert("effalert", "aff");
  } else {
    graphRemoveAlert("effalert");
    Plotly.restyle("alloeffic", "visible", true);
    var lineData0 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[0]
    );
    var lineData1 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[1]
    );
    var lineData2 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[2]
    );
    var lineData3 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[3]
    );
    var lineData4 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[4]
    );
    var halfData0 = calc50(lineData0);
    var halfData1 = calc50(lineData1);
    var halfData2 = calc50(lineData2);
    var halfData3 = calc50(lineData3);
    var halfData4 = calc50(lineData4);
    Plotly.animate(
      "alloeffic",
      {
        data: [
          { y: lineData0[1] },
          { y: lineData1[1] },
          { y: lineData2[1] },
          { y: lineData3[1] },
          { y: lineData4[1] },
          { x: halfData0[0], y: halfData0[1] },
          { x: halfData1[0], y: halfData1[1] },
          {
            x: halfData2[0],
            y: halfData2[1]
          },
          { x: halfData3[0], y: halfData3[1] },
          { x: halfData4[0], y: halfData4[1] }
        ],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
      },
      animation
    );
  }
}

function updateEfficacyEff(value) {
  effeff = value;
  if (checkSliderMinEff()) {
    Plotly.restyle("alloeffic", "visible", false);
    graphAlert("effalert", "eff");
  } else {
    graphRemoveAlert("effalert");
    Plotly.restyle("alloeffic", "visible", true);
    var lineData0 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[0]
    );
    var lineData1 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[1]
    );
    var lineData2 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[2]
    );
    var lineData3 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[3]
    );
    var lineData4 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[4]
    );
    var halfData0 = calc50(lineData0);
    var halfData1 = calc50(lineData1);
    var halfData2 = calc50(lineData2);
    var halfData3 = calc50(lineData3);
    var halfData4 = calc50(lineData4);
    Plotly.animate(
      "alloeffic",
      {
        data: [
          { y: lineData0[1] },
          { y: lineData1[1] },
          { y: lineData2[1] },
          { y: lineData3[1] },
          { y: lineData4[1] },
          { x: halfData0[0], y: halfData0[1] },
          { x: halfData1[0], y: halfData1[1] },
          {
            x: halfData2[0],
            y: halfData2[1]
          },
          { x: halfData3[0], y: halfData3[1] },
          { x: halfData4[0], y: halfData4[1] }
        ],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
      },
      animation
    );
  }
}

function updateDensityEff(value) {
  deneff = value;
  if (checkSliderMinEff()) {
    Plotly.restyle("alloeffic", "visible", false);
    graphAlert("effalert", "den");
  } else {
    graphRemoveAlert("effalert");
    Plotly.restyle("alloeffic", "visible", true);
    var lineData0 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[0]
    );
    var lineData1 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[1]
    );
    var lineData2 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[2]
    );
    var lineData3 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[3]
    );
    var lineData4 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[4]
    );
    var halfData0 = calc50(lineData0);
    var halfData1 = calc50(lineData1);
    var halfData2 = calc50(lineData2);
    var halfData3 = calc50(lineData3);
    var halfData4 = calc50(lineData4);
    Plotly.animate(
      "alloeffic",
      {
        data: [
          { y: lineData0[1] },
          { y: lineData1[1] },
          { y: lineData2[1] },
          { y: lineData3[1] },
          { y: lineData4[1] },
          { x: halfData0[0], y: halfData0[1] },
          { x: halfData1[0], y: halfData1[1] },
          {
            x: halfData2[0],
            y: halfData2[1]
          },
          { x: halfData3[0], y: halfData3[1] },
          { x: halfData4[0], y: halfData4[1] }
        ],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
      },
      animation
    );
  }
}

function updateEfficiencyEff(value) {
  efficeff = value;
  if (checkSliderMinEff()) {
    Plotly.restyle("alloeffic", "visible", false);
    graphAlert("effalert", "effic");
  } else {
    graphRemoveAlert("effalert");
    Plotly.restyle("alloeffic", "visible", true);
    var lineData0 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[0]
    );
    var lineData1 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[1]
    );
    var lineData2 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[2]
    );
    var lineData3 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[3]
    );
    var lineData4 = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[4]
    );
    var halfData0 = calc50(lineData0);
    var halfData1 = calc50(lineData1);
    var halfData2 = calc50(lineData2);
    var halfData3 = calc50(lineData3);
    var halfData4 = calc50(lineData4);
    Plotly.animate(
      "alloeffic",
      {
        data: [
          { y: lineData0[1] },
          { y: lineData1[1] },
          { y: lineData2[1] },
          { y: lineData3[1] },
          { y: lineData4[1] },
          { x: halfData0[0], y: halfData0[1] },
          { x: halfData1[0], y: halfData1[1] },
          {
            x: halfData2[0],
            y: halfData2[1]
          },
          { x: halfData3[0], y: halfData3[1] },
          { x: halfData4[0], y: halfData4[1] }
        ],
        traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {}
      },
      animation
    );
  }
}

function updateAgoAffinityEff(value) {
  agoaffeff = document.getElementById("antagoeff").value = value;
  var lineData0 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[0]
  );
  var lineData1 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[1]
  );
  var lineData2 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[2]
  );
  var lineData3 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[3]
  );
  var lineData4 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[4]
  );
  var halfData0 = calc50(lineData0);
  var halfData1 = calc50(lineData1);
  var halfData2 = calc50(lineData2);
  var halfData3 = calc50(lineData3);
  var halfData4 = calc50(lineData4);
  Plotly.animate(
    "alloeffic",
    {
      data: [
        { y: lineData0[1] },
        { y: lineData1[1] },
        { y: lineData2[1] },
        { y: lineData3[1] },
        { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        {
          x: halfData2[0],
          y: halfData2[1]
        },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }
      ],
      traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      layout: {}
    },
    animation
  );
}

function updateAgoEffectEff(value) {
  agoeffeff = value;
  document.getElementById("antcoopeff").value =
    Math.round(10 ** -value * Math.pow(10, 3)) / Math.pow(10, 3);
  var lineData0 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[0]
  );
  var lineData1 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[1]
  );
  var lineData2 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[2]
  );
  var lineData3 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[3]
  );
  var lineData4 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[4]
  );
  var halfData0 = calc50(lineData0);
  var halfData1 = calc50(lineData1);
  var halfData2 = calc50(lineData2);
  var halfData3 = calc50(lineData3);
  var halfData4 = calc50(lineData4);
  Plotly.animate(
    "alloeffic",
    {
      data: [
        { y: lineData0[1] },
        { y: lineData1[1] },
        { y: lineData2[1] },
        { y: lineData3[1] },
        { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        {
          x: halfData2[0],
          y: halfData2[1]
        },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }
      ],
      traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      layout: {}
    },
    animation
  );
}

function resetEff() {
  affeff = document.getElementById("affeffslider").value = document.getElementById("affeffslider").defaultValue;
  effeff = document.getElementById("effeffslider").value = document.getElementById("effeffslider").defaultValue;
  deneff = document.getElementById("deneffslider").value = document.getElementById("deneffslider").defaultValue;
  efficeff = document.getElementById("efficieffslider").value = document.getElementById("efficieffslider").defaultValue;
  agoaffeff = document.getElementById("agoaffeffslider").value = document.getElementById("agoaffeffslider").defaultValue;
  agoeffeff = document.getElementById("agoeffeffslider").value = document.getElementById("agoeffeffslider").defaultValue;
  document.getElementById("antagoeff").value = document.getElementById("agoaffeffslider").defaultValue;
  document.getElementById("antcoopeff").value = Math.round(10 ** -agoeffeff * Math.pow(10, 3)) / Math.pow(10, 3);

  //updates lines concentration
  document.getElementById("effline2").value = document.getElementById("effline2").defaultValue;
  document.getElementById("effline3").value = document.getElementById("effline3").defaultValue;
  document.getElementById("effline4").value = document.getElementById("effline4").defaultValue;
  document.getElementById("effline5").value = document.getElementById("effline5").defaultValue;
  agoconcarr = [0, -9, -8, -7, -6]; // need this to reset values

  var lineData0 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[0]
  );
  var lineData1 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[1]
  );
  var lineData2 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[2]
  );
  var lineData3 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[3]
  );
  var lineData4 = calcLinesEff(
    affeff,
    effeff,
    deneff,
    efficeff,
    agoaffeff,
    agoeffeff,
    agoconcarr[4]
  );
  var halfData0 = calc50(lineData0);
  var halfData1 = calc50(lineData1);
  var halfData2 = calc50(lineData2);
  var halfData3 = calc50(lineData3);
  var halfData4 = calc50(lineData4);
  //console.log(lineData0)
  Plotly.animate(
    "alloeffic",
    {
      data: [
        { y: lineData0[1] },
        { y: lineData1[1] },
        { y: lineData2[1] },
        { y: lineData3[1] },
        { y: lineData4[1] },
        { x: halfData0[0], y: halfData0[1] },
        { x: halfData1[0], y: halfData1[1] },
        {
          x: halfData2[0],
          y: halfData2[1]
        },
        { x: halfData3[0], y: halfData3[1] },
        { x: halfData4[0], y: halfData4[1] }
      ],
      traces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      layout: {}
    },
    animation
  );
}

var linecolours = ["#000000", "#ff6666", "#ff3333", "#ff0000", "#cc0000"];

function plotGraphEff(chart) {
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
  };
  var j;
  for (j = 0; j < 5; j++) {
    var data = [];
    var graph;
    var lineData = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[j]
    );

    if (j === 0) {
      graph = {
        x: lineData[0],
        y: lineData[1],
        mode: "lines",
        name: 0 + "nM",
        line: {
          color: linecolours[j],
          width: 1
        }
      };
    } else {
      graph = {
        x: lineData[0],
        y: lineData[1],
        mode: "lines",
        //name: 10 ** agoconcarr[j] * 1000000000 + "nM",
        name:"[Antagonist] #" + j,
        line: {
          color: linecolours[j],
          width: 1.2,
          dash: linestyles[j]
      }
      };
    }
    data.push(graph);

    Plotly.plot(chart, data, layout, { responsive: true });
  }
  var i;
  var legendview = [true, false, false, false, false];
  for (i = 0; i < 5; i++) {
    var halfData = calcLinesEff(
      affeff,
      effeff,
      deneff,
      efficeff,
      agoaffeff,
      agoeffeff,
      agoconcarr[i]
    );
    var data50 = calc50(halfData); //plot the 50% effect marker
    var trace1 = [
      {
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
      }
    ];
    Plotly.plot(chart, trace1, layout, { responsive: true });
  }
}

plotGraphEff("alloeffic");

//QUESTION BOX
var questionsEff = [
  "What is the principal effect produced by an Allosteric Antagonist (affecting agonist efficacy) antagonist on an agonist dose-response curve?<br><i>Test this using the Dose Response Visualiser.</i>",
  "Does an Allosteric Antagonist (affecting agonist efficacy) affect the maximum effect induced by the agonist?<br><i>Test this using the Dose Response Visualiser.</i>",
  "Is the effect of an Allosteric Antagonist (affecting agonist efficacy) influenced by the properties of the agonist (Affinity, Intrinsic Efficacy) <br> or the cell (R<sub>T</sub>, <i>&#947</i> )?<br><i>Test this using the Dose Response Visualiser.</i>",
  "Can an Allosteric Antagonist (affecting agonist efficacy) abolish agonist-induced effects?<br><i>Test this using the Dose Response Visualiser.</i>"
];

var answersEff = [
  "An Allosteric antagonist (affecting only agonist efficacy) will cause a reduction in the maximum effect produced by an agonist (since the antagonist has reduced the efficacy of the agonist for the receptor). A feature of allosteric antagonists is their effect is <b>SATURABLE</b>, and the extent of the suppression of the maximum effect is <b>LIMITED</b>. This is in contrast to an irreversible antagonist where the suppression of the maximum effect is unlimited. <br> Test this using the Dose Response Visualiser.",
  "<b>YES</b>, but this will dependent upon whether the agonist is a partial or full agonist.  For partial agonists, the allosteric antagonist will reduce the maximum response.  However, for a full agonist (acting on a cell with high R<sub>T</sub> and signal amplification), the allosteric antagonist (affecting agonist efficacy) will produce a rightward shift of the agonist dose-response curve (at low [allosteric antagonist]) prior to suppression of the maximum response (at higher [allosteric antagonist]). <br> Test this using the Dose Response Visualiser.",
  "<b>YES</b>, the effects of an allosteric antagonist (affecting agonist efficacy) will be <b>GREATER</b> against agonists will low efficacy and in cells with low receptor densities (R<sub>T</sub>)and coupling efficiencies (<i>&#947</i>). <br> Test this using the Dose Response Visualiser.",
  "<b>NOT TYPICALLY</b>. The inhibitory effects produced by an allosteric antagonists (affecting agonist efficacy) are typically limited and can usually be overcome (at least to some degree) by increasing the [agonist].  This is unlike irreversible antagonists which can abolish agonist-induced effects.  However, in some more extreme circumstances (e.g. if the allosteric antagonist has a very high capacity to decrease agonist intrinsic efficacy and/or the agonist has low intrinsic efficacy) the allosteric antagonist may essentially abolish agonist-induced responses. <br> Test this using the Dose Response Visualiser."
];

var questionCounterEff = 0;
document.getElementById("effQuestion").innerHTML =
  "<b>" + questionsEff[questionCounterEff] + "</b>";

function revealAnswerEff() {
  document.getElementById("effAnswer").innerHTML =
    answersEff[questionCounterEff];
  $("#effAnswerModal").modal("show");
}

function nextQuestionEff() {
  if (questionCounterEff + 1 === questionsEff.length) {
    //end of questions
    questionCounterEff++;
    document.getElementById("effQuestion").style.display = "none";
    document.getElementById("revealEffAnswer").style.display = "none";
    document.getElementById("restartMessageEff").style.display = "inline-block";
    document.getElementById("restartQuestionEff").style.display = "inline-block";
    document.getElementById("nextEffQuestion").style.display = "none";
  } 
  else {
    questionCounterEff++;
    document.getElementById("restartMessageEff").style.display = "none";
    document.getElementById("restartQuestionEff").style.display = "none";
    document.getElementById("effQuestion").innerHTML ="<b>" + questionsEff[questionCounterEff] + "</b>";
  }
}

function prevQuestionEff() {
  if (!questionCounterEff) { //beginning of questions
      alert("Already at beginning of questions");
  }
  else {
      questionCounterEff--;
      document.getElementById("effQuestion").style.display = "block";
      document.getElementById("nextEffQuestion").style.display = "inline-block";
      document.getElementById("revealEffAnswer").style.display = "inline-block";
      document.getElementById("restartMessageEff").style.display = "none";
      document.getElementById("restartQuestionEff").style.display = "none";
      document.getElementById("effQuestion").innerHTML = "<b>" + questionsEff[questionCounterEff] + "</b>";
  }
}

function restartQuestionEff() {
  questionCounterEff = 0;
  document.getElementById("effQuestion").style.display = "block";
  document.getElementById("nextEffQuestion").style.display = "inline-block";
  document.getElementById("restartMessageEff").style.display = "none";
  document.getElementById("restartQuestionEff").style.display = "none";
  document.getElementById("effQuestion").innerHTML = "<b>" + questionsEff[questionCounterEff] + "</b>";
  document.getElementById("revealEffAnswer").style.display = "inline-block";
}
/*EOF*/
