// Batch 36 Pie Chart
        const batch36Pie = document.getElementById('batch36PieChart').getContext('2d');
        new Chart(batch36Pie, {
            type: 'pie',
            data: {
                labels: ['Male', 'Female'],
                datasets: [{
                    data: [26, 21],
                    backgroundColor: ['#3B82F6', '#EC4899'],
                    borderColor: ['#1E40AF', '#BE185D'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' },
                    title: { display: false }
                }
            }
        });

        // Batch 37 Pie Chart
        const batch37Pie = document.getElementById('batch37PieChart').getContext('2d');
        new Chart(batch37Pie, {
            type: 'pie',
            data: {
                labels: ['Male', 'Female'],
                datasets: [{
                    data: [15, 15],
                    backgroundColor: ['#3B82F6', '#EC4899'],
                    borderColor: ['#1E40AF', '#BE185D'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' },
                    title: { display: false }
                }
            }
        });

        // Graduates Bar Chart
        const graduatesBar = document.getElementById('graduatesBarChart').getContext('2d');
        new Chart(graduatesBar, {
            type: 'bar',
            data: {
                labels: [
                    'Data Analysis',
                    'UI/UX',
                    'Advanced UI/UX',
                    'Web Dev with PHP',
                    'Beg., Frontend Dev',
                    'Graphics Design',
                    'Python Programming',
                    'Business Intelligence'
                ],
                datasets: [
                    {
                        label: 'Male',
                        data: [1, 3, 2, 4, 1, 1, 1, 0],
                        backgroundColor: '#3B82F6',
                        borderColor: '#1E40AF',
                        borderWidth: 1
                    },
                    {
                        label: 'Female',
                        data: [3, 2, 1, 1, 0, 0, 0, 1],
                        backgroundColor: '#EC4899',
                        borderColor: '#BE185D',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: { stacked: true },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        title: { display: true, text: 'Number of Graduates' }
                    }
                },
                plugins: {
                    legend: { position: 'bottom' },
                    title: { display: false }
                }
            }
        });