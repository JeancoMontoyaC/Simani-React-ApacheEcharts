import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';

function Boton({ chartId }) {
    const [contenido, setContenido] = useState(null);

    useEffect(() => {
        if (contenido) {
            const chartDom = document.getElementById(chartId);
            const myChart = echarts.init(chartDom);

            let option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: 'line',
                    },
                ],
            };

            myChart.setOption(option);

            // Puedes devolver una función de limpieza si es necesario
            return () => {
                myChart.dispose();
            };
        }
    }, [contenido, chartId]);

    const handleClick = () => {
        setContenido(
            <div style={{ width: '20vw', height: '20vw' }} id={chartId}></div>
        );
    };

    return (
        <div>
            Boton
            <button onClick={handleClick}>Click</button>
            <div>{contenido}</div>
        </div>
    );
}

export default Boton;

