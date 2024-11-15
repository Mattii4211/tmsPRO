import { chart } from "./example";

const selectId = 'floatingSelect';
const exampleApiUrl = 'http://localhost:3000/index.php';

function addDataToChart() {
    document.getElementById(selectId).addEventListener('change', async (e) => {
        const selectedYear = e.target.value;
        const newData = await getData(selectedYear);
        addData(chart, {year: selectedYear, count: newData});
    });
}

async function getData(year) {
    let data;
    const url = `${exampleApiUrl}?getCountForYear=${year}`;
    try {
        const response = await fetch(url);
        const result = await response.json();
        data = result.data;
      } catch (error) {
        data = Math.floor(Math.random() * year);
      }
    
    return data;
}

function addData(chart, newData) {
    if (!chart.data.labels.includes(newData.year)) {
        chart.data.labels.push(newData.year);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(newData.count);
        });
        chart.update();
    }
}

addDataToChart();