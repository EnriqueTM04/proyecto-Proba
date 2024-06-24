$(document).ready(function () {
    // Función para mostrar el corazón y la sección bonita después de la animación del pulse
    function showHeartAndSection() {
        $('.pulse').fadeOut('slow', function () {
            // Ocultar containerPulse después de la animación
            $('.containerPulse').hide();
            
            // Mostrar el corazón después de que termine la animación del pulse
            $('.heart-container').fadeIn('slow', function () {
                // Mostrar la sección de texto y botón
                $('#seccionBonita').fadeIn('slow');
            });
        });
    }

    // Función para crear gráficos Highcharts
    function createCharts() {
        // Gráfico 1
        Highcharts.chart('container1', {
            chart: {
                type: 'pie'
            },
            title: {
                text: '¿Con qué frecuencia consume alimentos procesados?'
            },
            tooltip: {
                valueSuffix: '%'
            },
            plotOptions: {
                series: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '{point.percentage:.1f}%',
                        distance: -30,
                        filter: {
                            property: 'percentage',
                            operator: '>',
                            value: 4
                        }
                    }
                }
            },
            series: [{
                name: 'Frecuencia',
                colorByPoint: true,
                data: [
                    { name: 'Diariamente', y: 15.8 },
                    { name: '3-4 veces a la semana', y: 26.3 },
                    { name: '1-2 veces a la semana', y: 38.6 },
                    { name: '1-2 veces al mes', y: 14 },
                    { name: 'Nunca o casi nunca', y: 5.3 }
                ]
            }]
        });

        // Gráfico 2
        Highcharts.chart('container2', {
            chart: {
                type: 'pie'
            },
            title: {
                text: '¿Con qué frecuencia consume alimentos altos en azúcar y grasas?'
            },
            tooltip: {
                valueSuffix: '%'
            },
            plotOptions: {
                series: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '{point.percentage:.1f}%',
                        distance: -30,
                        filter: {
                            property: 'percentage',
                            operator: '>',
                            value: 4
                        }
                    }
                }
            },
            series: [{
                name: 'Frecuencia',
                colorByPoint: true,
                data: [
                    { name: 'Diariamente', y: 15.8 },
                    { name: '3-4 veces a la semana', y: 33.3 },
                    { name: '1-2 veces a la semana', y: 40.4 },
                    { name: '1-2 veces al mes', y: 8.8 },
                    { name: 'Nunca o casi nunca', y: 1.8 }
                ]
            }]
        });

        // Mostrar los gráficos después de la animación del pulse
        setTimeout(function () {
            showHeartAndSection();
            $('#containerCharts').fadeIn('slow');
        }, 4000);
    }

    // Llamar a la función para crear los gráficos después de que el documento esté listo
    createCharts();
});
