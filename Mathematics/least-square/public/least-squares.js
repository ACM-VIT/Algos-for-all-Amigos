document.addEventListener('DOMContentLoaded', init, false);

function init() {
  const currentData = {
    pairs: [],
    slope: 0,
    coeficient: 0,
    line: [],
  };

  const chart = initChart();
}
 
function initChart() {
  const ctx = document.getElementById('myChart').getContext('2d');

  return new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Scatter Dataset',
        backgroundColor: 'rgb(125,67,120)',
        data: [],
      }, {
        label: 'Line Dataset',
        fill: false,
        data: [],
        type: 'line',
      }],
    },
    options: {
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          display: true,
          scaleLabel: {
            display: true,
            labelString: '(X)',
          },
        }],
        yAxes: [{
          type: 'linear',
          position: 'bottom',
          display: true,
          scaleLabel: {
            display: true,
            labelString: '(Y)',
          },
        }],
      },
    },
  });
}


document.addEventListener('DOMContentLoaded', init, false);

function init() {
  const currentData = {
    pairs: [],
    slope: 0,
    coeficient: 0,
    line: [],
  };
  const btnUpdateGraph = document.querySelector('.btn-update-graph');
  const tablePairs = document.querySelector('.table-pairs');
  const spanFormula = document.querySelector('.span-formula');

  const inputX = document.querySelector('.input-x');
  const inputY = document.querySelector('.input-y');

  const chart = initChart();

  btnUpdateGraph.addEventListener('click', () => {
    const x = parseFloat(inputX.value);
    const y = parseFloat(inputY.value);

    updateTable(x, y);
  });
  
  function updateTable(x, y) {
    const tr = document.createElement('tr');
    const tdX = document.createElement('td');
    const tdY = document.createElement('td');

    tdX.innerHTML = x;
    tdY.innerHTML = y;

    tr.appendChild(tdX);
    tr.appendChild(tdY);

    tablePairs.querySelector('tbody').appendChild(tr);
  }
  btnUpdateGraph.addEventListener('click', () => {
  
    const x = parseFloat(inputX.value);
    const y = parseFloat(inputY.value);
  
    updateTable(x, y);
    updateFormula(x, y);
  });



  function updateFormula(x, y) {
    currentData.pairs.push({ x, y });
    const pairsAmount = currentData.pairs.length;
  
    const sum = currentData.pairs.reduce((acc, pair) => ({
      x: acc.x + pair.x,
      y: acc.y + pair.y,
    }), { x: 0, y: 0 });
  
    const average = {
      x: sum.x / pairsAmount,
      y: sum.y / pairsAmount,
    };
  
    const slopeDividend = currentData.pairs
      .reduce((acc, pair) => parseFloat(acc + ((pair.x - average.x) * (pair.y - average.y))), 0);
    const slopeDivisor = currentData.pairs
      .reduce((acc, pair) => parseFloat(acc + (pair.x - average.x) ** 2), 0);
  
    const slope = slopeDivisor !== 0
      ? parseFloat((slopeDividend / slopeDivisor).toFixed(2))
      : 0;
  
    const coeficient = parseFloat(
      (-(slope * average.x) + average.y).toFixed(2),
    );
  
    currentData.line = currentData.pairs
      .map((pair) => ({
        x: pair.x,
        y: parseFloat((coeficient + (slope * pair.x)).toFixed(2)),
      }));
  
    spanFormula.innerHTML = `Formula: Y = ${coeficient} + ${slope} * X`;
  }
}



