import Chart from 'chart.js/auto'

const data = [
    { year: 2010, count: 10000 },
    { year: 2011, count: 200 },
    { year: 2012, count: 1534 },
    { year: 2013, count: 2544 },
    { year: 2014, count: 222 },
    { year: 2015, count: 307976 },
    { year: 2016, count: 287686 },
];

const chart = new Chart(
    document.getElementById('example'),
    {
        type: 'bar',
        data: {
        labels: data.map(row => row.year),
        datasets: [
            {
                label: 'Sample data by year',
                data: data.map(row => row.count)
            }
        ]
        },
        options: {
            indexAxis: 'y',
        }
    }
    );

export { chart };
