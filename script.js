// script.js

// Load data from data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Render interactive charts using Chart.js

        // Case Trends Bar Chart
        const ctx1 = document.getElementById('caseTrends').getContext('2d');
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: data.caseTrends.labels,
                datasets: [{
                    label: 'Cases',
                    data: data.caseTrends.values,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });

        // Closure Rates Bar Chart
        const ctx2 = document.getElementById('closureRates').getContext('2d');
        new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: data.closureRates.labels,
                datasets: [{
                    label: 'Closure Rates',
                    data: data.closureRates.values,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });

        // Utilization Trends Bar Chart
        const ctx3 = document.getElementById('utilizationTrends').getContext('2d');
        new Chart(ctx3, {
            type: 'bar',
            data: {
                labels: data.utilizationTrends.labels,
                datasets: [{
                    label: 'Utilization',
                    data: data.utilizationTrends.values,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });

        // SecOps Case Breakdown Bar Chart
        const ctx4 = document.getElementById('secOpsBreakdown').getContext('2d');
        new Chart(ctx4, {
            type: 'bar',
            data: {
                labels: data.secOpsBreakdown.labels,
                datasets: [{
                    label: 'SecOps Cases',
                    data: data.secOpsBreakdown.values,
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    })
    .catch(error => console.error('Error loading data:', error));
