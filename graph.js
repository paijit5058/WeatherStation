document.addEventListener('DOMContentLoaded', function () {
    
    const ctxTemperature = document.getElementById('temperatureChart').getContext('2d');
    const ctxHumidity = document.getElementById('humidityChart').getContext('2d');
    const ctxPressure = document.getElementById('pressureChart').getContext('2d');
    const ctxWindSpeed = document.getElementById('windSpeedChart').getContext('2d');
    const ctxWindDirection = document.getElementById('windDirectionChart').getContext('2d');
    const ctxRainfall = document.getElementById('rainfallChart').getContext('2d');
    const ctxPm25 = document.getElementById('pm25Chart').getContext('2d');

    const temperatureChart = new Chart(ctxTemperature, {
        type: 'line',
        data: {
            labels: ['00:00', '01:00', '02:00', '04:00','05:00', '06:00', '07:00', '08:00','09:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00','17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00'],
            datasets: [{
                label: 'Temperature (°C)',
                data: [27, 26, 26, 27,27, 27, 29, 29,30 , 31, 31, 34,34, 33, 34, 28, 28, 27, 28, 26, 26, 28, 27, 27],
                borderColor: 'rgba(0, 255, 60, 1)',
                backgroundColor: 'rgba(0, 255, 60, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: 'rgba(255, 255, 255, 1)'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });

    const humidityChart = new Chart(ctxHumidity, {
        type: 'line',
        data: {
            labels: ['00:00', '01:00', '02:00', '04:00','05:00', '06:00', '07:00', '08:00','09:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00','17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00'],
            datasets: [{
                label: 'Humidity (%)',
                data: [74, 55, 68, 63, 72, 78, 69, 80, 62, 58, 85, 91, 67, 75, 82, 60, 88, 54, 83, 77, 66, 81, 73, 70]                ,
                borderColor: 'rgba(255, 255, 16, 1)',
                backgroundColor: 'rgba(255, 255, 16, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: 'rgba(255, 255, 255, 1)'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });

    const pressureChart = new Chart(ctxPressure, {
        type: 'line',
        data: {
            labels: ['00:00', '01:00', '02:00', '04:00','05:00', '06:00', '07:00', '08:00','09:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00','17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00'],
            datasets: [{
                label: 'Pressure (hPa)',
                data: [1012, 1015, 1010, 1013, 1017, 1014, 1012, 1016, 1013, 1015, 1014, 1018, 1011, 1017, 1013, 1012, 1016, 1015, 1014, 1016, 1013, 1011, 1018, 1014]                ,
                borderColor: 'rgba(255, 255, 255, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: 'rgba(255, 255, 255, 1)'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });

    const windSpeedChart = new Chart(ctxWindSpeed, {
        type: 'line',
        data: {
            labels: ['00:00', '01:00', '02:00', '04:00','05:00', '06:00', '07:00', '08:00','09:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00','17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00'],
            datasets: [{
                label: 'Wind Speed (km/h)',
                data: [12, 8, 15, 10, 5, 20, 18, 13, 7, 9, 14, 17, 11, 19, 6, 16, 10, 22, 14, 12, 8, 13, 15, 11]                ,
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: 'rgba(255, 255, 255, 1)'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });

    const windDirectionData = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    
    const windDirections = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    
    const dataCounts = windDirections.map(direction => (
        windDirectionData.map((_, hourIndex) => (
            windDirectionData.slice(hourIndex * 1, (hourIndex + 1) * 1).filter(d => d === direction).length
        ))
    ));
    
    const windDirectionChart = new Chart(ctxWindDirection, {
        type: 'bar',
        data: {
            labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
            datasets: windDirections.map((direction, index) => ({
                label: `${direction}`,
                data: dataCounts[index],
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`,
                borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
                borderWidth: 1
            }))
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: 'rgba(255, 255, 255, 1)'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                },
                y: {
                    display: false,
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            barThickness: 3,
        }
    });

    
    const rainfallChart = new Chart(ctxRainfall, {
        type: 'line',
        data: {
            labels: ['00:00', '01:00', '02:00', '04:00','05:00', '06:00', '07:00', '08:00','09:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00','17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00'],
            datasets: [{
                label: 'Rainfall (mm)',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]                ,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: 'rgba(255, 255, 255, 1)'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });

    const pm25Chart = new Chart(ctxPm25, {
        type: 'line',
        data: {
            labels: ['00:00', '01:00', '02:00', '04:00','05:00', '06:00', '07:00', '08:00','09:00', '10:00', '11:00', '12:00','13:00', '14:00', '15:00', '16:00','17:00', '18:00', '19:00', '20:00','21:00', '22:00', '23:00'],
            datasets: [{
                label: 'PM2.5 (µg/m³)',
                data: [35, 42, 28, 50, 33, 55, 48, 39, 41, 29, 62, 53, 37, 44, 52, 31, 49, 60, 45, 38, 56, 54, 47, 50]                ,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: 'rgba(255, 255, 255, 1)'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
});
