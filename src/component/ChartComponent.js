import React, { useEffect } from 'react';
import * as echarts from 'echarts';



const ChartComponent = ({ data, chartId }) => {
    useEffect(() => {


        var chartDom = document.getElementById(chartId);
        var myChart = echarts.init(chartDom);
        var option;

        // This example requires ECharts v5.4.0 or later
        myChart.showLoading();
        const usaJson = data;
        echarts.registerMap('USA', usaJson, {});

        option = {
            geo: {
                map: 'USA',
                roam: true,
                itemStyle: {
                    areaColor: '#e7e8ea'
                }
            },
            tooltip: {},
            legend: {},
            series: [
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: [
                        { value: [-76.30729675220047, 8.619299889431787, 7000], name: "Universidad del Valle" },
                        { value: [-76.30729675220047, 7.0, 7000], name: "Universidad del Valle2" },
                    ],
                    geoIndex: 0,
                    itemStyle: {
                        color: 'red',
                    }, symbolSize: 20,
                    encode: {
                        tooltip: 2
                    },
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{@[3]}', // Muestra el nombre del punto
                    },
                }
            ]
        }
        myChart.hideLoading();
        myChart.setOption(option);
        ;

        option && myChart.setOption(option);

        // Limpia la instancia de ECharts al desmontar el componente
        return () => {
            myChart.dispose();
        };
    }, []); // Se ejecuta solo una vez al montar el componente

    return <div id={chartId} style={{ width: '100%', height: '100%' }} />;
};

export default ChartComponent;
