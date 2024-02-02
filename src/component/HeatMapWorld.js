import React, { useEffect, useState } from 'react';
import useFetch from './useFetch'
import * as echarts from 'echarts';
function HeatMapWorld({ data, chartId }) {
    const [data2, setData2] = useState(null)
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:8080/user/country');
                const data2 = await response.json();
                setData2(data2);
            }
            catch (e) {
                console.log(e)
            };

        }
        fetchdata();
    }, []);


    useEffect(() => {


        var chartDom = document.getElementById(chartId);
        var myChart = echarts.init(chartDom);
        var option;
        var usaJson = data;
        myChart.showLoading();
        if (data2 != null) {
            const jsonString = JSON.stringify(data2);

            // Convertir la cadena JSON a un objeto JavaScript
            const jsonArray = JSON.parse(jsonString);

            // Mapear y reestructurar el objeto según tus necesidades
            const restructuredArray = jsonArray.map(item => {
                return {
                    name: item.name,
                    value: item.value
                };
            });
            console.log(restructuredArray);
            echarts.registerMap('USA', usaJson, {});
            option = {

                tooltip: {
                    trigger: 'item',
                    showDelay: 0,
                    transitionDuration: 0.2,

                },
                visualMap: {
                    left: 'right',
                    min: 1,
                    max: 1000000,
                    inRange: {
                        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                    },
                    text: ['High', 'Low'],           // 文本，默认为数值文本
                    calculable: true
                },
                toolbox: {
                    show: true,
                    //orient: 'vertical',
                    left: 'left',
                    top: 'top',
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        name: 'USA PopEstimates',
                        type: 'map',
                        roam: true,
                        map: 'USA',
                        emphasis: {
                            label: {
                                show: true
                            }
                        },
                        data: restructuredArray

                    }
                ]
            };

            myChart.setOption(option);
            myChart.hideLoading();
        };
        return () => {
            myChart.dispose();
        };
    }, [data2]);

    return <div id={chartId} style={{ width: '100%', height: '100%' }} />;

}

export default HeatMapWorld