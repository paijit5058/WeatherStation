document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    const weatherTableBody = document.querySelector('#weather-table tbody');

    dateInput.addEventListener('change', function() {
        const selectedDate = this.value;
        if (selectedDate) {
            fetchWeatherData(selectedDate);
        }
    });

    function fetchWeatherData(date) {
        // Example URL: Adjust to match your actual API or data source
        const apiUrl = `https://api.example.com/weather?date=${date}`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                updateWeatherTable(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                // Optionally handle errors and update the UI accordingly
            });
    }

    function updateWeatherTable(data) {
        weatherTableBody.innerHTML = ''; // Clear previous data

        // Example data format: Adjust according to your API response
        const weatherRow = document.createElement('tr');
        weatherRow.innerHTML = `
            <td>${data.date}</td>
            <td>${data.temperature}</td>
            <td>${data.humidity}</td>
            <td>${data.pressure}</td>
            <td>${data.windSpeed}</td>
            <td>${data.windDirection}</td>
            <td>${data.rainfall}</td>
            <td>${data.dust}</td>
        `;
        weatherTableBody.appendChild(weatherRow);
    }
});
