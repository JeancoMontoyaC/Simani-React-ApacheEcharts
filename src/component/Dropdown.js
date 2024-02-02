import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function Dropdown({ chartId }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [chartContent, setChartContent] = useState(null);
    const chartRef = useRef(null);
    const [data2, setData2] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const fetchdata = async () => {
        try {
            let response = await fetch('http://localhost:8080/user/country');
            let data = await response.json();
            setData2(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        // Llamada inicial a fetchdata
        fetchdata();
    }, []);

    useEffect(() => {
        // Actualizar datos cuando la opción seleccionada cambie
        fetchdata();
    }, [selectedOption]);

    useEffect(() => {
        if (selectedOption && data2 != null) {
            var nombresPaises = [];
            var valores = [];

            // Recorrer el array original
            for (var i = 0; i < data2.length; i++) {
                // Agregar el nombre del país a la lista de nombresPaises
                nombresPaises.push(data2[i].name);

                // Agregar el valor a la lista de valores
                valores.push(data2[i].value);
            }

            // Configuración específica para cada opción
            let option;

            if (selectedOption === 'opcion1') {
                option = {
                    xAxis: {
                        type: 'category',
                        data: nombresPaises,
                        axisLabel: {
                            rotate: 45,
                        },
                    },
                    yAxis: {
                        type: 'value',
                    },
                    series: [
                        {
                            data: valores,
                            type: 'line',
                        },
                    ],
                };
            } else if (selectedOption === 'opcion2') {
                option = {
                    xAxis: {
                        type: 'category',
                        data: nombresPaises,
                        axisLabel: {
                            rotate: 45,
                        },
                    },
                    yAxis: {
                        type: 'value',
                    },
                    series: [
                        {
                            data: valores,
                            type: 'bar',
                        },
                    ],
                };
            }

            // Limpiar el gráfico anterior
            if (chartRef.current) {
                chartRef.current.dispose();
            }

            // Crear el contenido del gráfico
            const chartDom = document.getElementById(chartId);

            if (chartDom) {
                // Limpiar el contenido previo del contenedor
                chartDom.innerHTML = '';

                // Inicializar el gráfico en el contenedor
                const myChart = echarts.init(chartDom);
                myChart.setOption(option);

                // Guardar referencia al gráfico actual
                chartRef.current = myChart;

                // Establecer el contenido del gráfico en el estado
                setChartContent(chartDom);
            }
        }
    }, [selectedOption, chartId, data2]);

    return (
        <div>
            <label htmlFor="dropdown">Selecciona una opción:</label>
            <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
                <option value=""></option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
            </select>

            {selectedOption && (
                <div>
                    <p>Has seleccionado: {selectedOption}</p>
                    <div style={{ width: '20vw', height: '20vw' }} id={chartId}>
                        {/* Renderizar el gráfico */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
