(function () {
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    var yearData = [
        {
            year:"2022",
            data: [[2.05, 1.8816, 0.8058, 2, 1.6665,1.8],
        ]
        },
        {
            year:"2023",
            data: [[3.33, 3.2642, 1, 2.78, 2.34,3.29],
        ]
        },
        {
            year:"2024",
            data: [[0.12, 0.3, 0.4048, 0.19, 0.2344,0.3135],
        ]
        },
    ]
    var option = {
        
        color:['#2f89cf'],
        xAxis: {
          type: 'category',
          data: ['武汉', '上海', '杭州',  '西安','广州','北京'],
          axisLabel: {
            
              color: "rgba(255,255,255,.6)",
              fontSize:"10",
          },
          axisLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            
            color: "rgba(255,255,255,.6)",
            fontSize:"10",
        },
        axisLine: {
            lineStyle: {
                color: "rgba(255,255,255,.1)",
                while: 2
            }
          },
          splitLine: {
            lineStyle: {
                color: "rgba(255,255,255,.1)"
            }
          }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
          },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '4%',
            top: '10px',
            containLabel: true
        },
        series: [
          {
            data: [5.5, 5.3358, 2.2106, 4.97, 4.2409,5.4035],
            type: 'bar',
            barWidth:"25%",
            itemStyle: {
                
                barBorderRadius: 5
            }
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize',function() {
        myChart.resize();
        
      }) 
      $(".no-bd").on('click','a',function(){
        var obj=yearData[$(this).index()];
        
        option.series[0].data = obj.data[0];
        myChart.setOption(option);
      })
      $(".index").on('click','a',function(){
        option.series[0].data = [5.5, 5.3358, 2.2106, 4.97, 4.2409,5.4035];
        myChart.setOption(option);
      })

})();
(function () {
    var myColor = ['#1089E7','#F57474','#56D0E3'];
    var myChart = echarts.init(document.querySelector('.bar2 .chart'));
    var option = {
        grid: {
            left: '22%',
            bottom: '10%',
            top: '10%',
        },
        xAxis: {
          show:false,
        },
        yAxis: [
            {
                type: 'category',
                data: ['家庭出游  ', '与友出游  ', '独自出游  ', '情侣出游  ','自驾团队  ','车友会  '],
                axisLine: {
                  show: false
                },
                axisLabel: {
                  
                    color: "#fff",
                    
                },
                axisTick: {
                  show: false
                },
                splitLine: {
                  lineStyle: {
                      color: "rgba(255,255,255,.1)"
                      
                  }
              }
              },
              {
                    show:false,
                    data:[0,0,0,0,0,0],
                    axisLine :{
                        show: false
                    },
                    axisTick: {
                      show: false
                    },
                    axisLabel: {
                      textStyle: {
                        color: "#fff",
                        fontSize: 12
                      }
                    },
              }
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            data: [42, 28, 13,7,5,6],
            barCategoryGap:50,
            barWidth: 10,
            yAxisIndex: 0,
            itemStyle: {
                color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num]
                },
                barBorderRadius: 20
                
                
            },
            label: {
                show:true,
                position:"inside",
                formatter:'{c}%',
            }
          },
          {
            name: '框框',
            type: 'bar',
            data: [50, 50, 50,50,50,50],
            barCategoryGap:50,
            barWidth: 15,
            yAxisIndex: 1,
            itemStyle: {
                color: 'none',
                borderColor: '#00c1de',
                borderWidth: 3,
                barBorderRadius: 100
            }
          },
          
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize',function() {
        myChart.resize();
      })
})();
(function() {
    var yearData = [
        {
            year:"2022",
            data: [[6.21, 4.7, 5.08, 3.29],
            [2.09, 1.55, 1.3, 1.07],  
        ]
        },
        {
            year:"2023",
            data: [[9.44, 9.15, 9.87, 9.12],
            [2.72, 2.53, 3.03, 3.05]
        ]
        },
        {
            year:"2024",
            data: [[10.77, 0, 0, 0],
            [3.42, 0, 0, 0]
        ]
        },
    ]
    var myChart = echarts.init(document.querySelector('.line .chart'));
    var option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['城镇', '乡村'],
          textStyle: {
            color: "#4c9bfd"
          },
          right: '10%',
        
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            show : true,
            borderColor : '#012f4a',
            containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['22年一季度', '22年二季度', '22年三季度', '22年四季度','23年一季度', '23年二季度', '23年三季度', '23年四季度','24年一季度'],
          axisLine: {
            show: false
          },
          axisLabel: {
            
            color: "#4c9bfd",
            fontSize:"10",
            },
            axisTick: {
            show: false
            },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            
            color: "rgba(255,255,255,.6)",
            fontSize:"10",
        },
        axisLine: {
            lineStyle: {
                color: "rgba(255,255,255,.1)",
                while: 2
            }
          },
          splitLine: {
            lineStyle: {
                color: "rgba(255,255,255,.1)"
            }
          }
        },
        series: [
          {
            name: '城镇',
            type: 'line',
            smooth : true,
            data: [6.21, 4.7, 5.08,3.29,9.44,9.15,9.87,9.12,10.77]
          },
          {
            name: '乡村',
            type: 'line',
            smooth : true,
            data: [2.09, 1.55, 1.3, 1.07, 2.72, 2.53, 3.03, 3.05, 3.42]
          },
          
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize',function() {
        myChart.resize();
      })
      $(".no-bd").on('click','a',function(){
        var obj=yearData[$(this).index()];
        
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        option.xAxis.data =  ['第一季度', '第二季度', '第三季度', '第四季度']
        myChart.setOption(option);
      })
      $(".index").on('click','a',function(){
        option.series[0].data = [6.21, 4.7, 5.08,3.29,9.44,9.15,9.87,9.12,10.77];
        option.series[1].data = [2.09, 1.55, 1.3, 1.07, 2.72, 2.53, 3.03, 3.05, 3.42];
        option.xAxis.data =  ['22年一季度', '22年二季度', '22年三季度', '22年四季度','23年一季度', '23年二季度', '23年三季度', '23年四季度','24年一季度']
        myChart.setOption(option);
      })
})();
(function() {
    var myChart = echarts.init(document.querySelector('.line2 .chart'));
    var option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
            top: "0%",
          data: ['2022', '2023','2024'],
          textStyle: {
            color: "rbga(255,255,255,.5)",
            fontSize: "12",
          },
        },
        grid: {
          left: '10',
          right: '10',
          bottom: '10',
          top:'30',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['元旦','春节', '清明节', '劳动节', '端午', '国庆节', '中秋节' ],
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "10",
              },
              axisLine: {
                lineStyle:{
                  color: "rgba(255,255,255,.1)"
                }
              },
              splitLine:{
                lineStyle:{
                    color: "rgba(255,255,255,.1)"
                }
              }
          },
          
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
            
                color: "rgba(255,255,255,.6)",
                fontSize:"10",
            },
          }
          
        ],
        series: [
          {
            name: '2022',
            type: 'line',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: 'rgba(1,132,213,0.4)'},
                    {offset: 0.8, color: 'rgba(1,132,213,0.1)'}
                  ],
                  false
                ),
                shadowColor: 'rgba(0,0,0,0.1)',
            },
            emphasis: {
              focus: 'series'
            },
            lineStyle:{
                color:"#0184d5",
                width:2
            },
            
            Symbol:'circle',
            SymbolSize:8,
            itemStyle:{
                color:"#0184d5",
                borderColor:"rgba(221,220,107,.1)",
                borderWidth:12
            },
            showSymbol: false,
            smooth: true,
            data: [0.52, 2.51, 0.75, 1.6, 0.8, 0.73, 4.22]
          },
          {
            name: '2023',
            type: 'line',
            areaStyle: {},
            smooth: true,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: 'rgba(0,216,135,0.4)'},
                    {offset: 0.8, color: 'rgba(0,216,135,0.1)'}
                  ],
                  false
                ),
                shadowColor: 'rgba(0,0,0,0.1)',
            },
            emphasis: {
              focus: 'series'
            },
            lineStyle:{
                color:"cyan",
                width:2
            },
            Symbol:'circle',
            SymbolSize:8,
            itemStyle:{
                color:"#00d887",
                borderColor:"rgba(221,220,107,.1)",
                borderWidth:12
            },
            showSymbol: false,
            data: [0.53, 3.08, 0.24, 2.74, 1.06, 8.26, 8.26]
          },
          {
            name: '2024',
            type: 'line',
            areaStyle: {},
            smooth: true,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: 'rgba(0,216,135,0.4)'},
                    {offset: 0.8, color: 'rgba(0,216,135,0.1)'}
                  ],
                  false
                ),
                shadowColor: 'rgba(0,0,0,0.1)',
            },
            emphasis: {
              focus: 'series'
            },
            lineStyle:{
                color:"orange",
                width:2
            },
            Symbol:'circle',
            SymbolSize:8,
            itemStyle:{
                color:"#00d887",
                borderColor:"rgba(221,220,107,.1)",
                borderWidth:12
            },
            showSymbol: false,
            data: [1.35, 4.74, 1.19, 0, 0, 0, 0]
          },
          
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize',function() {
        myChart.resize();
      })
})();
(function() {
    var myChart = echarts.init(document.querySelector('.pie .chart'));
    var yearData = [
        {
            year:"2022",
            data: [
                { value: 9, name: '<18' },
                { value: 45, name: '18-25' },
                { value: 26, name: '26-35' },
                { value: 10, name: '36-45' },
                { value: 9, name: '46-55' },
                { value: 1, name: '>55' },
              ],
        
        },
        {
            year:"2023",
            data: [
                { value: 29, name: '<25' },
                { value: 39, name: '25-35' },
                { value: 32, name: '>35' },
              ]
        },
        {
            year:"2024",
            data: [
                { value: 9, name: '<18' },
                { value: 30, name: '18-25' },
                { value: 33, name: '26-35' },
                { value: 12, name: '36-45' },
                { value: 11, name: '46-55' },
                { value: 5, name: '>55' },
              ]
        },
    ]
    var option = {
        color:["#065aab",
"#066eab",
"#0682ab",
"#0696ab",
"#06a0ab"],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom :'0%',
          intemWidth:1,
          intemWidth:1,
          textStyle:{
            color:"#fff",
            fontSize:8.5,
          }
        },
        series: [
          {
            name: '年龄分布(单位：%)',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            center:["50%",
"40%"],
            emphasis: {
              label: {
                show: false,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
                { value: 9, name: '<18' },
                { value: 30, name: '18-25' },
                { value: 33, name: '26-35' },
                { value: 12, name: '36-45' },
                { value: 11, name: '46-55' },
                { value: 5, name: '>55' },
              ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize',function() {
        myChart.resize();
      })
      $(".no-bd").on('click','a',function(){
        var obj=yearData[$(this).index()];
        option.series[0].data = obj.data;
        myChart.setOption(option);
      })

})();
(function() {
    var yearData = [
        {
            year:"2022",
            data: [
                { value: 11342, name: '出行' },
                { value: 2781, name: '住宿' },
                { value: 5996, name: '餐饮' },
                { value: 2407, name: '浏览' },
                { value: 14380, name: '购物' },
                { value: 1917, name: '娱乐' },
              ]
        },
        {
            year:"2023",
            data: [
                { value: 12055, name: '出行' },
                { value: 3602.8, name: '住宿' },
                { value: 6203.8, name: '餐饮' },
                { value: 2141.4, name: '浏览' },
                { value: 14077.3, name: '购物' },
                { value: 1881.9, name: '娱乐' },
              ]
        },
        {
            year:"2024",
            data: [
                { value: 23397, name: '出行' },
                { value: 6383.8, name: '住宿' },
                { value: 12199.8, name: '餐饮' },
                { value: 4548.4, name: '浏览' },
                { value: 28457.3, name: '购物' },
                { value: 3798.9, name: '娱乐' },
              ]
        },
    ]
    var myChart = echarts.init(document.querySelector('.pie2 .chart'));
    var option = {
        tooltip: {
            trigger: 'item'
          },
        color:['#004cff','#60cda0','#ed8884','#ff9f7f','#096ff','#9fe6b8','#32c5e9','1d9dff'],
        series: [
          {
            name: '旅游消费占比（单位：亿元）',
            type: 'pie',
            radius: [10, 70],
            center: ['50%', '55%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 23397, name: '出行' },
              { value: 6383.8, name: '住宿' },
              { value: 12199.8, name: '餐饮' },
              { value: 4548.4, name: '浏览' },
              { value: 28457.3, name: '购物' },
              { value: 3798.9, name: '娱乐' },
            ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize',function() {
        myChart.resize();
      })
      $(".no-bd").on('click','a',function(){
        var obj=yearData[$(this).index()];
        
        option.series[0].data = obj.data;
        myChart.setOption(option);
      })
      $(".index").on('click','a',function(){
        option.series[0].data =  [
            { value: 23397, name: '出行' },
            { value: 6383.8, name: '住宿' },
            { value: 12199.8, name: '餐饮' },
            { value: 4548.4, name: '浏览' },
            { value: 28457.3, name: '购物' },
            { value: 3798.9, name: '娱乐' },
          ]
        myChart.setOption(option);
      })
})();
(function() {
    var myChart = echarts.init(document.querySelector('.map .chart'));
    var allData = {"citys":[{"name":"延寿",
"value":[128.331644,45.451897,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"临江",
"value":[126.918087,41.811979,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"嘉兴",
"value":[120.755486,30.746129,4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"四平",
"value":[124.350398,43.16642,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"营口",
"value":[122.235418,40.667012,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"密云",
"value":[116.801346,40.35874,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"威海",
"value":[122.12042,37.513068,32],
"symbolSize":3,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"杭州",
"value":[120.15507,30.274085,10],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"集安",
"value":[126.194031,41.125307,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"贵阳",
"value":[106.630154,26.647661,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"抚顺",
"value":[123.957208,41.880872,3],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海门",
"value":[121.181615,31.871173,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"珠海",
"value":[113.576726,22.270715,9],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"河北",
"value":[114.475704,38.584854,-19],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"深圳",
"value":[114.057868,22.543099,14],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"黄浦",
"value":[121.484443,31.231763,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"蓬莱",
"value":[120.758848,37.810661,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"吉首",
"value":[109.705708,28.266849,-364],
"symbolSize":3,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"甘肃",
"value":[103.826308,36.059421,-2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"龙井",
"value":[129.427066,42.766311,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"茂名",
"value":[110.925456,21.662999,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"丹东",
"value":[124.354707,40.0005,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"晋中",
"value":[112.752695,37.687024,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"浙江",
"value":[120.152792,30.267447,-2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"海城",
"value":[122.685217,40.882377,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"溆浦",
"value":[110.594921,27.908281,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"北京",
"value":[116.407526,39.90403,-14],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"铁岭",
"value":[123.726166,42.223769,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"大同",
"value":[113.61244,40.040295,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"金坛",
"value":[119.597897,31.723247,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"齐齐哈尔",
"value":[109.705708,28.266849,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"咸阳",
"value":[108.708991,34.329605,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"四川",
"value":[104.075931,30.651652,-5],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"福田",
"value":[114.055036,22.52153,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"盘锦",
"value":[122.070714,41.119997,3],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"中山",
"value":[113.392782,22.517646,4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"福建",
"value":[119.295144,26.10078,-1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"泰顺",
"value":[119.717649,27.556884,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"宝山",
"value":[131.401589,46.577167,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"庆安",
"value":[127.507825,46.880102,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海淀",
"value":[116.298056,39.959912,32],
"symbolSize":3,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"大兴",
"value":[116.341395,39.726929,3],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"桦川",
"value":[130.719081,47.023001,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"惠州",
"value":[114.416196,23.111847,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"青岛",
"value":[120.38264,36.067082,52],
"symbolSize":3,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"朝阳",
"value":[116.443108,39.92147,17],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"沈阳",
"value":[123.431475,41.805698,41],
"symbolSize":3,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"菏泽",
"value":[115.480656,35.23375,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南通",
"value":[120.894291,31.980172,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南充",
"value":[106.110698,30.837793,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"双城",
"value":[126.312745,45.383263,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南京",
"value":[118.796877,32.060255,17],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"新疆",
"value":[87.627704,43.793026,-2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"成都",
"value":[104.066541,30.572269,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"陕西",
"value":[108.954239,34.265472,-2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"黄岛",
"value":[120.04619,35.872664,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"温州",
"value":[120.699367,27.994267,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"石家庄",
"value":[114.51486,38.042307,4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"邢台",
"value":[114.504844,37.070589,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"赣州",
"value":[114.93503,25.831829,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"义乌",
"value":[120.075058,29.306841,3],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南昌",
"value":[115.858198,28.682892,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"闵行",
"value":[121.381709,31.112813,18],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"长宁",
"value":[121.424624,31.220367,7],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"道里",
"value":[126.616957,45.755777,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"乳山",
"value":[121.539765,36.919816,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"双流",
"value":[103.923648,30.574473,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"广州",
"value":[113.264435,23.129163,13],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"西城",
"value":[116.365868,39.912289,4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"佳木斯",
"value":[130.318917,46.799923,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"皇姑",
"value":[123.44197,41.824796,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"榆树",
"value":[126.533146,44.840288,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"临汾",
"value":[111.518976,36.088005,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"上海",
"value":[121.473701,31.230416,44],
"symbolSize":3,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"重庆",
"value":[106.568088,29.643221,-23],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"尚志",
"value":[128.009895,45.209586,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"湖里",
"value":[118.146769,24.512905,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"台州",
"value":[121.420757,28.656386,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"潍坊",
"value":[119.161756,36.706774,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"苏州",
"value":[120.585316,31.298886,14],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"房山",
"value":[116.143267,39.749144,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"即墨",
"value":[120.447128,36.389639,15],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"舒兰",
"value":[126.965607,44.406106,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"延吉",
"value":[129.508946,42.891255,3],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"三河",
"value":[117.078295,39.982718,4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"大连",
"value":[121.614682,38.914003,40],
"symbolSize":3,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"辉南",
"value":[126.046912,42.684993,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"无锡",
"value":[120.31191,31.49117,14],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"常州",
"value":[119.973987,31.810689,4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"广西",
"value":[108.327546,22.815478,-1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"泉州",
"value":[118.675676,24.874132,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"昌平",
"value":[116.231204,40.22066,4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海阳",
"value":[121.158434,36.776378,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"郑州",
"value":[113.625368,34.7466,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"东城",
"value":[116.416357,39.928353,10],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"黄骅",
"value":[117.330048,38.371383,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"武侯",
"value":[104.04339,30.641982,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"鸡东",
"value":[131.12408,45.260412,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"龙口",
"value":[120.477813,37.646108,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"汤原",
"value":[129.905072,46.730706,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"湖北",
"value":[114.341862,30.546498,-4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"克拉玛依",
"value":[84.889207,45.579889,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"厦门",
"value":[118.089425,24.479834,3],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"哈尔滨",
"value":[126.534967,45.803775,8],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"秦皇岛",
"value":[119.600493,39.935385,7],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"江苏",
"value":[118.763232,32.061707,-1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"常熟",
"value":[120.752481,31.654376,4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"烟台",
"value":[121.447935,37.463822,24],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"和平",
"value":[117.21451,39.116949,4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"环翠",
"value":[122.123444,37.501991,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"宣武门外东大街",
"value":[116.378888,39.899332,3],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"张家港",
"value":[120.553284,31.870367,4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"临安",
"value":[119.724733,30.233873,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"延安",
"value":[109.489727,36.585455,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"天津",
"value":[117.200983,39.084158,28],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"城阳",
"value":[120.39631,36.307064,15],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"石景山",
"value":[116.222982,39.906611,3],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"长沙",
"value":[112.938814,28.228209,5],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"安徽",
"value":[117.284923,31.861184,-1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"昆山",
"value":[120.980737,31.385598,4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"徐汇",
"value":[121.436525,31.188523,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"东港",
"value":[124.152705,39.863008,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"廊坊",
"value":[116.683752,39.538047,4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"鞍山",
"value":[122.994329,41.108647,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海陵",
"value":[119.919425,32.491016,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"吉首",
"value":[109.705708,28.266849,-198],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"西藏",
"value":[91.117212,29.646923,-1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"河南",
"value":[113.274379,34.445122,0],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"湖南",
"value":[112.98381,28.112444,-1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"佛山",
"value":[113.121416,23.021548,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"珲春",
"value":[130.366036,42.862821,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"扬州",
"value":[119.412966,32.39421,5],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"日照",
"value":[119.526888,35.416377,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"唐山",
"value":[118.180194,39.630867,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"同江",
"value":[132.510919,47.642707,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"荣成",
"value":[122.486658,37.16516,4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"虎林",
"value":[132.93721,45.762686,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"武汉",
"value":[114.305393,30.593099,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"合肥",
"value":[117.227239,31.820587,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"荆州",
"value":[112.239741,30.335165,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"丰台",
"value":[116.287149,39.858427,3],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"山东",
"value":[117.020359,36.66853,-6],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"舟山",
"value":[122.207216,29.985295,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"连云港",
"value":[119.221611,34.596653,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"西安",
"value":[108.940175,34.341568,3],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"济南",
"value":[117.12,36.651216,4],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"绵阳",
"value":[104.679114,31.46745,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"长沙",
"value":[113.000194,28.242883,-58],
"symbolSize":3,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"山西",
"value":[112.562398,37.873532,-3],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"呼和浩特",
"value":[106.562914,29.569238,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"河西",
"value":[117.223372,39.109563,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"兴和",
"value":[113.834173,40.872301,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"重庆",
"value":[106.551557,29.56301,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"胶州",
"value":[120.033382,36.26468,5],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"宁波",
"value":[121.550357,29.874557,10],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"滨海",
"value":[119.820831,33.990334,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"太原",
"value":[112.548879,37.87059,2],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"鸡西",
"value":[130.969333,45.295075,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"兰山",
"value":[118.347707,35.051729,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"阳泉",
"value":[113.580519,37.856972,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"勃利",
"value":[130.592171,45.755063,1],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"长春",
"value":[125.323544,43.817072,8],
"symbolSize":2,
"itemStyle":{"normal":{"color":"#F58158"}}}],
"moveLines":[{"fromName":"吉首",
"toName":"珠海",
"coords":[[109.705708,28.266849],[113.576726,22.270715]]},{"fromName":"吉首",
"toName":"舒兰",
"coords":[[109.705708,28.266849],[126.965607,44.406106]]},{"fromName":"吉首",
"toName":"大连",
"coords":[[109.705708,28.266849],[121.614682,38.914003]]},{"fromName":"长沙",
"toName":"集安",
"coords":[[113.000194,28.242883],[126.194031,41.125307]]},{"fromName":"吉首",
"toName":"抚顺",
"coords":[[109.705708,28.266849],[123.957208,41.880872]]},{"fromName":"山东",
"toName":"南京",
"coords":[[117.020359,36.66853],[118.796877,32.060255]]},{"fromName":"北京",
"toName":"沈阳",
"coords":[[116.407526,39.90403],[123.431475,41.805698]]},{"fromName":"吉首",
"toName":"环翠",
"coords":[[109.705708,28.266849],[122.123444,37.501991]]},{"fromName":"天津",
"toName":"大连",
"coords":[[117.200983,39.084158],[121.614682,38.914003]]},{"fromName":"吉首",
"toName":"兴和",
"coords":[[109.705708,28.266849],[113.834173,40.872301]]},{"fromName":"河北",
"toName":"勃利",
"coords":[[114.475704,38.584854],[130.592171,45.755063]]},{"fromName":"吉首",
"toName":"大连",
"coords":[[109.705708,28.266849],[121.614682,38.914003]]},{"fromName":"吉首",
"toName":"沈阳",
"coords":[[109.705708,28.266849],[123.431475,41.805698]]},{"fromName":"吉首",
"toName":"闵行",
"coords":[[109.705708,28.266849],[121.381709,31.112813]]},{"fromName":"天津",
"toName":"朝阳",
"coords":[[117.200983,39.084158],[116.443108,39.92147]]},{"fromName":"吉首",
"toName":"黄岛",
"coords":[[109.705708,28.266849],[120.04619,35.872664]]},{"fromName":"内蒙古",
"toName":"上海",
"coords":[[106.568088,29.643221],[121.473701,31.230416]]},{"fromName":"内蒙古",
"toName":"南京",
"coords":[[106.568088,29.643221],[109.705708,28.266849]]},{"fromName":"长沙",
"toName":"杭州",
"coords":[[113.000194,28.242883],[109.705708,28.266849]]},{"fromName":"吉首",
"toName":"海城",
"coords":[[109.705708,28.266849],[122.685217,40.882377]]},{"fromName":"吉首",
"toName":"西城",
"coords":[[109.705708,28.266849],[109.705708,28.266849]]},{"fromName":"四川",
"toName":"上海",
"coords":[[104.075931,30.651652],[109.705708,28.266849]]},{"fromName":"吉首",
"toName":"西城",
"coords":[[109.705708,28.266849],[116.365868,39.912289]]},{"fromName":"吉首",
"toName":"丹东",
"coords":[[109.705708,28.266849],[124.354707,40.0005]]},{"fromName":"吉首",
"toName":"宁波",
"coords":[[109.705708,28.266849],[121.550357,29.874557]]},{"fromName":"长沙",
"toName":"海淀",
"coords":[[113.000194,28.242883],[109.705708,28.266849]]},{"fromName":"长沙",
"toName":"青岛",
"coords":[[113.000194,28.242883],[109.705708,28.266849]]},{"fromName":"吉首",
"toName":"苏州",
"coords":[[109.705708,28.266849],[120.585316,31.298886]]},{"fromName":"吉首",
"toName":"抚顺",
"coords":[[109.705708,28.266849],[123.957208,41.880872]]},{"fromName":"吉首",
"toName":"临安",
"coords":[[109.705708,28.266849],[119.724733,30.233873]]},{"fromName":"长沙",
"toName":"烟台",
"coords":[[113.000194,28.242883],[109.705708,28.266849]]},{"fromName":"吉首",
"toName":"海淀",
"coords":[[109.705708,28.266849],[116.298056,39.959912]]},{"fromName":"吉首",
"toName":"南昌",
"coords":[[109.705708,28.266849],[115.858198,28.682892]]},{"fromName":"内蒙古",
"toName":"沈阳",
"coords":[[106.568088,29.643221],[109.705708,28.266849]]},{"fromName":"山西",
"toName":"城阳",
"coords":[[112.562398,37.873532],[120.39631,36.307064]]},{"fromName":"吉首",
"toName":"广州",
"coords":[[109.705708,28.266849],[113.264435,23.129163]]},{"fromName":"上海",
"toName":"沈阳",
"coords":[[121.473701,31.230416],[109.705708,28.266849]]},{"fromName":"四川",
"toName":"阳泉",
"coords":[[104.075931,30.651652],[113.580519,37.856972]]},{"fromName":"河北",
"toName":"桦川",
"coords":[[114.475704,38.584854],[109.705708,28.266849]]},{"fromName":"内蒙古",
"toName":"海淀",
"coords":[[106.568088,29.643221],[116.298056,39.959912]]},{"fromName":"安徽",
"toName":"河北",
"coords":[[117.284923,31.861184],[114.475704,38.584854]]},{"fromName":"长沙",
"toName":"呼和浩特",
"coords":[[113.000194,28.242883],[106.562914,29.569238]]},{"fromName":"广西",
"toName":"茂名",
"coords":[[108.327546,22.815478],[110.925456,21.662999]]},{"fromName":"吉首",
"toName":"东城",
"coords":[[109.705708,28.266849],[116.416357,39.928353]]},{"fromName":"内蒙古",
"toName":"盘锦",
"coords":[[106.568088,29.643221],[122.070714,41.119997]]},{"fromName":"山东",
"toName":"哈尔滨",
"coords":[[117.020359,36.66853],[109.705708,28.266849]]},{"fromName":"吉首",
"toName":"沈阳",
"coords":[[109.705708,28.266849],[123.431475,41.805698]]},{"fromName":"吉首",
"toName":"丰台",
"coords":[[109.705708,28.266849],[116.287149,39.858427]]},{"fromName":"四川",
"toName":"盘锦",
"coords":[[104.075931,30.651652],[122.070714,41.119997]]},{"fromName":"吉首",
"toName":"皇姑",
"coords":[[109.705708,28.266849],[123.44197,41.824796]]},{"fromName":"河北",
"toName":"虎林",
"coords":[[114.475704,38.584854],[132.93721,45.762686]]},{"fromName":"长沙",
"toName":"宝山",
"coords":[[113.000194,28.242883],[131.401589,46.577167]]},{"fromName":"吉首",
"toName":"吉首",
"coords":[[109.705708,28.266849],[109.705708,28.266849]]},{"fromName":"吉首",
"toName":"青岛",
"coords":[[109.705708,28.266849],[120.38264,36.067082]]},{"fromName":"吉首",
"toName":"烟台",
"coords":[[109.705708,28.266849],[121.447935,37.463822]]},{"fromName":"山东",
"toName":"临江",
"coords":[[117.020359,36.66853],[126.918087,41.811979]]},{"fromName":"吉首",
"toName":"黄岛",
"coords":[[109.705708,28.266849],[120.04619,35.872664]]},{"fromName":"吉首",
"toName":"石家庄",
"coords":[[109.705708,28.266849],[114.51486,38.042307]]},{"fromName":"吉首",
"toName":"汤原",
"coords":[[109.705708,28.266849],[129.905072,46.730706]]},{"fromName":"吉首",
"toName":"临江",
"coords":[[109.705708,28.266849],[126.918087,41.811979]]},{"fromName":"吉首",
"toName":"济南",
"coords":[[109.705708,28.266849],[117.12,36.651216]]},{"fromName":"吉首",
"toName":"太原",
"coords":[[109.705708,28.266849],[112.548879,37.87059]]},{"fromName":"吉首",
"toName":"威海",
"coords":[[109.705708,28.266849],[122.12042,37.513068]]},{"fromName":"湖北",
"toName":"深圳",
"coords":[[114.341862,30.546498],[114.057868,22.543099]]},{"fromName":"内蒙古",
"toName":"荣成",
"coords":[[106.568088,29.643221],[122.486658,37.16516]]},{"fromName":"长沙",
"toName":"郑州",
"coords":[[113.000194,28.242883],[113.625368,34.7466]]},{"fromName":"吉首",
"toName":"朝阳",
"coords":[[109.705708,28.266849],[116.443108,39.92147]]},{"fromName":"吉首",
"toName":"昆山",
"coords":[[109.705708,28.266849],[120.980737,31.385598]]},{"fromName":"吉首",
"toName":"双城",
"coords":[[109.705708,28.266849],[126.312745,45.383263]]},{"fromName":"吉首",
"toName":"克拉玛依",
"coords":[[109.705708,28.266849],[84.889207,45.579889]]},{"fromName":"长沙",
"toName":"上海",
"coords":[[113.000194,28.242883],[121.473701,31.230416]]},{"fromName":"吉首",
"toName":"海阳",
"coords":[[109.705708,28.266849],[121.158434,36.776378]]},{"fromName":"吉首",
"toName":"宣武门外东大街",
"coords":[[109.705708,28.266849],[116.378888,39.899332]]},{"fromName":"山东",
"toName":"海淀",
"coords":[[117.020359,36.66853],[116.298056,39.959912]]},{"fromName":"内蒙古",
"toName":"威海",
"coords":[[106.568088,29.643221],[122.12042,37.513068]]},{"fromName":"吉首",
"toName":"晋中",
"coords":[[109.705708,28.266849],[112.752695,37.687024]]},{"fromName":"西藏",
"toName":"广州",
"coords":[[91.117212,29.646923],[113.264435,23.129163]]},{"fromName":"长沙",
"toName":"无锡",
"coords":[[113.000194,28.242883],[120.31191,31.49117]]},{"fromName":"吉首",
"toName":"城阳",
"coords":[[109.705708,28.266849],[120.39631,36.307064]]},{"fromName":"河北",
"toName":"丰台",
"coords":[[114.475704,38.584854],[116.287149,39.858427]]},{"fromName":"吉首",
"toName":"扬州",
"coords":[[109.705708,28.266849],[119.412966,32.39421]]},{"fromName":"长沙",
"toName":"天津",
"coords":[[113.000194,28.242883],[117.200983,39.084158]]},{"fromName":"吉首",
"toName":"扬州",
"coords":[[109.705708,28.266849],[119.412966,32.39421]]},{"fromName":"吉首",
"toName":"嘉兴",
"coords":[[109.705708,28.266849],[120.755486,30.746129]]},{"fromName":"河北",
"toName":"延寿",
"coords":[[114.475704,38.584854],[128.331644,45.451897]]},{"fromName":"吉首",
"toName":"义乌",
"coords":[[109.705708,28.266849],[120.075058,29.306841]]},{"fromName":"吉首",
"toName":"张家港",
"coords":[[109.705708,28.266849],[120.553284,31.870367]]},{"fromName":"长沙",
"toName":"贵阳",
"coords":[[113.000194,28.242883],[106.630154,26.647661]]},{"fromName":"吉首",
"toName":"长沙",
"coords":[[109.705708,28.266849],[113.000194,28.242883]]},{"fromName":"河南",
"toName":"营口",
"coords":[[113.274379,34.445122],[122.235418,40.667012]]},{"fromName":"吉首",
"toName":"合肥",
"coords":[[109.705708,28.266849],[117.227239,31.820587]]},{"fromName":"吉首",
"toName":"苏州",
"coords":[[109.705708,28.266849],[120.585316,31.298886]]},{"fromName":"吉首",
"toName":"榆树",
"coords":[[109.705708,28.266849],[126.533146,44.840288]]},{"fromName":"吉首",
"toName":"常熟",
"coords":[[109.705708,28.266849],[120.752481,31.654376]]},{"fromName":"吉首",
"toName":"乳山",
"coords":[[109.705708,28.266849],[121.539765,36.919816]]},{"fromName":"四川",
"toName":"青岛",
"coords":[[104.075931,30.651652],[120.38264,36.067082]]},{"fromName":"吉首",
"toName":"深圳",
"coords":[[109.705708,28.266849],[114.057868,22.543099]]},{"fromName":"天津",
"toName":"东城",
"coords":[[117.200983,39.084158],[116.416357,39.928353]]},{"fromName":"吉首",
"toName":"上海",
"coords":[[109.705708,28.266849],[121.473701,31.230416]]},{"fromName":"天津",
"toName":"宁波",
"coords":[[117.200983,39.084158],[121.550357,29.874557]]},{"fromName":"吉首",
"toName":"海门",
"coords":[[109.705708,28.266849],[121.181615,31.871173]]},{"fromName":"山西",
"toName":"沈阳",
"coords":[[112.562398,37.873532],[123.431475,41.805698]]},{"fromName":"吉首",
"toName":"成都",
"coords":[[109.705708,28.266849],[104.066541,30.572269]]},{"fromName":"吉首",
"toName":"南昌",
"coords":[[109.705708,28.266849],[115.858198,28.682892]]},{"fromName":"吉首",
"toName":"常州",
"coords":[[109.705708,28.266849],[109.705708,28.266849]]},{"fromName":"内蒙古",
"toName":"兰山",
"coords":[[106.568088,29.643221],[118.347707,35.051729]]},{"fromName":"吉首",
"toName":"河南",
"coords":[[109.705708,28.266849],[113.274379,34.445122]]},{"fromName":"吉首",
"toName":"福田",
"coords":[[109.705708,28.266849],[114.055036,22.52153]]},{"fromName":"吉首",
"toName":"常州",
"coords":[[109.705708,28.266849],[119.973987,31.810689]]},{"fromName":"吉首",
"toName":"双流",
"coords":[[109.705708,28.266849],[103.923648,30.574473]]},{"fromName":"吉首",
"toName":"潍坊",
"coords":[[109.705708,28.266849],[119.161756,36.706774]]},{"fromName":"吉首",
"toName":"延安",
"coords":[[109.705708,28.266849],[109.489727,36.585455]]},{"fromName":"长沙",
"toName":"长春",
"coords":[[113.000194,28.242883],[125.323544,43.817072]]},{"fromName":"吉首",
"toName":"南京",
"coords":[[109.705708,28.266849],[118.796877,32.060255]]},{"fromName":"长沙",
"toName":"和平",
"coords":[[113.000194,28.242883],[117.21451,39.116949]]},{"fromName":"北京",
"toName":"哈尔滨",
"coords":[[116.407526,39.90403],[126.534967,45.803775]]},{"fromName":"吉首",
"toName":"武汉",
"coords":[[109.705708,28.266849],[114.305393,30.593099]]},{"fromName":"吉首",
"toName":"海陵",
"coords":[[109.705708,28.266849],[119.919425,32.491016]]},{"fromName":"吉首",
"toName":"日照",
"coords":[[109.705708,28.266849],[119.526888,35.416377]]},{"fromName":"吉首",
"toName":"台州",
"coords":[[109.705708,28.266849],[121.420757,28.656386]]},{"fromName":"长沙",
"toName":"厦门",
"coords":[[113.000194,28.242883],[118.089425,24.479834]]},{"fromName":"吉首",
"toName":"贵阳",
"coords":[[109.705708,28.266849],[106.630154,26.647661]]},{"fromName":"吉首",
"toName":"鞍山",
"coords":[[109.705708,28.266849],[122.994329,41.108647]]},{"fromName":"长沙",
"toName":"荣成",
"coords":[[113.000194,28.242883],[122.486658,37.16516]]},{"fromName":"吉首",
"toName":"天津",
"coords":[[109.705708,28.266849],[117.200983,39.084158]]},{"fromName":"吉首",
"toName":"河西",
"coords":[[109.705708,28.266849],[117.223372,39.109563]]},{"fromName":"吉首",
"toName":"秦皇岛",
"coords":[[109.705708,28.266849],[119.600493,39.935385]]},{"fromName":"吉首",
"toName":"荆州",
"coords":[[109.705708,28.266849],[112.239741,30.335165]]},{"fromName":"吉首",
"toName":"东城",
"coords":[[109.705708,28.266849],[116.416357,39.928353]]},{"fromName":"吉首",
"toName":"即墨",
"coords":[[109.705708,28.266849],[120.447128,36.389639]]},{"fromName":"长沙",
"toName":"西城",
"coords":[[113.000194,28.242883],[116.365868,39.912289]]},{"fromName":"吉首",
"toName":"大兴",
"coords":[[109.705708,28.266849],[116.341395,39.726929]]},{"fromName":"河北",
"toName":"哈尔滨",
"coords":[[114.475704,38.584854],[126.534967,45.803775]]},{"fromName":"吉首",
"toName":"江苏",
"coords":[[109.705708,28.266849],[118.763232,32.061707]]},{"fromName":"吉首",
"toName":"和平",
"coords":[[109.705708,28.266849],[117.21451,39.116949]]},{"fromName":"江苏",
"toName":"鸡东",
"coords":[[118.763232,32.061707],[131.12408,45.260412]]},{"fromName":"长沙",
"toName":"辉南",
"coords":[[113.000194,28.242883],[126.046912,42.684993]]},{"fromName":"吉首",
"toName":"深圳",
"coords":[[109.705708,28.266849],[114.057868,22.543099]]},{"fromName":"福建",
"toName":"泰顺",
"coords":[[119.295144,26.10078],[119.717649,27.556884]]},{"fromName":"上海",
"toName":"深圳",
"coords":[[121.473701,31.230416],[114.057868,22.543099]]},{"fromName":"吉首",
"toName":"秦皇岛",
"coords":[[109.705708,28.266849],[119.600493,39.935385]]},{"fromName":"吉首",
"toName":"徐汇",
"coords":[[109.705708,28.266849],[121.436525,31.188523]]},{"fromName":"吉首",
"toName":"石景山",
"coords":[[109.705708,28.266849],[116.222982,39.906611]]},{"fromName":"长沙",
"toName":"城阳",
"coords":[[113.000194,28.242883],[120.39631,36.307064]]},{"fromName":"吉首",
"toName":"威海",
"coords":[[109.705708,28.266849],[122.12042,37.513068]]},{"fromName":"吉首",
"toName":"惠州",
"coords":[[109.705708,28.266849],[114.416196,23.111847]]},{"fromName":"吉首",
"toName":"龙口",
"coords":[[109.705708,28.266849],[120.477813,37.646108]]},{"fromName":"吉首",
"toName":"四平",
"coords":[[109.705708,28.266849],[124.350398,43.16642]]},{"fromName":"吉首",
"toName":"南充",
"coords":[[109.705708,28.266849],[106.110698,30.837793]]},{"fromName":"河北",
"toName":"东港",
"coords":[[114.475704,38.584854],[124.152705,39.863008]]},{"fromName":"长沙",
"toName":"西安",
"coords":[[113.000194,28.242883],[108.940175,34.341568]]},{"fromName":"内蒙古",
"toName":"滨海",
"coords":[[106.568088,29.643221],[119.820831,33.990334]]},{"fromName":"河南",
"toName":"青岛",
"coords":[[113.274379,34.445122],[120.38264,36.067082]]},{"fromName":"吉首",
"toName":"昆山",
"coords":[[109.705708,28.266849],[120.980737,31.385598]]},{"fromName":"长沙",
"toName":"长沙",
"coords":[[113.000194,28.242883],[112.938814,28.228209]]},{"fromName":"吉首",
"toName":"哈尔滨",
"coords":[[109.705708,28.266849],[126.534967,45.803775]]},{"fromName":"河北",
"toName":"尚志",
"coords":[[114.475704,38.584854],[128.009895,45.209586]]},{"fromName":"长沙",
"toName":"东城",
"coords":[[113.000194,28.242883],[116.416357,39.928353]]},{"fromName":"长沙",
"toName":"珠海",
"coords":[[113.000194,28.242883],[113.576726,22.270715]]},{"fromName":"吉首",
"toName":"铁岭",
"coords":[[109.705708,28.266849],[123.726166,42.223769]]},{"fromName":"吉首",
"toName":"蓬莱",
"coords":[[109.705708,28.266849],[120.758848,37.810661]]},{"fromName":"北京",
"toName":"天津",
"coords":[[116.407526,39.90403],[117.200983,39.084158]]},{"fromName":"内蒙古",
"toName":"天津",
"coords":[[106.568088,29.643221],[117.200983,39.084158]]},{"fromName":"吉首",
"toName":"宁波",
"coords":[[109.705708,28.266849],[121.550357,29.874557]]},{"fromName":"吉首",
"toName":"上海",
"coords":[[109.705708,28.266849],[121.473701,31.230416]]},{"fromName":"长沙",
"toName":"佛山",
"coords":[[113.000194,28.242883],[113.121416,23.021548]]},{"fromName":"吉首",
"toName":"长宁",
"coords":[[109.705708,28.266849],[121.424624,31.220367]]},{"fromName":"吉首",
"toName":"珲春",
"coords":[[109.705708,28.266849],[130.366036,42.862821]]},{"fromName":"山东",
"toName":"黄浦",
"coords":[[117.020359,36.66853],[121.484443,31.231763]]},{"fromName":"长沙",
"toName":"威海",
"coords":[[113.000194,28.242883],[122.12042,37.513068]]},{"fromName":"天津",
"toName":"长春",
"coords":[[117.200983,39.084158],[125.323544,43.817072]]},{"fromName":"新疆",
"toName":"上海",
"coords":[[87.627704,43.793026],[121.473701,31.230416]]},{"fromName":"河北",
"toName":"鸡西",
"coords":[[114.475704,38.584854],[130.969333,45.295075]]},{"fromName":"陕西",
"toName":"呼和浩特",
"coords":[[108.954239,34.265472],[106.562914,29.569238]]},{"fromName":"吉首",
"toName":"连云港",
"coords":[[109.705708,28.266849],[119.221611,34.596653]]},{"fromName":"吉首",
"toName":"杭州",
"coords":[[109.705708,28.266849],[120.15507,30.274085]]},{"fromName":"吉首",
"toName":"嘉兴",
"coords":[[109.705708,28.266849],[120.755486,30.746129]]},{"fromName":"陕西",
"toName":"盘锦",
"coords":[[108.954239,34.265472],[122.070714,41.119997]]},{"fromName":"河北",
"toName":"同江",
"coords":[[114.475704,38.584854],[132.510919,47.642707]]},{"fromName":"吉首",
"toName":"杭州",
"coords":[[109.705708,28.266849],[120.15507,30.274085]]},{"fromName":"吉首",
"toName":"舟山",
"coords":[[109.705708,28.266849],[122.207216,29.985295]]},{"fromName":"河南",
"toName":"大连",
"coords":[[113.274379,34.445122],[121.614682,38.914003]]},{"fromName":"长沙",
"toName":"绵阳",
"coords":[[113.000194,28.242883],[104.679114,31.46745]]},{"fromName":"吉首",
"toName":"溆浦",
"coords":[[109.705708,28.266849],[110.594921,27.908281]]},{"fromName":"吉首",
"toName":"朝阳",
"coords":[[109.705708,28.266849],[116.443108,39.92147]]},{"fromName":"吉首",
"toName":"无锡",
"coords":[[109.705708,28.266849],[120.31191,31.49117]]},{"fromName":"浙江",
"toName":"沈阳",
"coords":[[120.152792,30.267447],[123.431475,41.805698]]},{"fromName":"吉首",
"toName":"湖里",
"coords":[[109.705708,28.266849],[118.146769,24.512905]]},{"fromName":"吉首",
"toName":"无锡",
"coords":[[109.705708,28.266849],[120.31191,31.49117]]},{"fromName":"吉首",
"toName":"长宁",
"coords":[[109.705708,28.266849],[121.424624,31.220367]]},{"fromName":"长沙",
"toName":"胶州",
"coords":[[113.000194,28.242883],[120.033382,36.26468]]},{"fromName":"吉首",
"toName":"青岛",
"coords":[[109.705708,28.266849],[120.38264,36.067082]]},{"fromName":"河北",
"toName":"海淀",
"coords":[[114.475704,38.584854],[116.298056,39.959912]]},{"fromName":"吉首",
"toName":"厦门",
"coords":[[109.705708,28.266849],[118.089425,24.479834]]},{"fromName":"吉首",
"toName":"中山",
"coords":[[109.705708,28.266849],[113.392782,22.517646]]},{"fromName":"河北",
"toName":"太原",
"coords":[[114.475704,38.584854],[112.548879,37.87059]]},{"fromName":"新疆",
"toName":"吉首",
"coords":[[87.627704,43.793026],[109.705708,28.266849]]},{"fromName":"吉首",
"toName":"武侯",
"coords":[[109.705708,28.266849],[104.04339,30.641982]]},{"fromName":"北京",
"toName":"廊坊",
"coords":[[116.407526,39.90403],[116.683752,39.538047]]},{"fromName":"浙江",
"toName":"临汾",
"coords":[[120.152792,30.267447],[111.518976,36.088005]]},{"fromName":"湖北",
"toName":"天津",
"coords":[[114.341862,30.546498],[117.200983,39.084158]]},{"fromName":"吉首",
"toName":"泉州",
"coords":[[109.705708,28.266849],[118.675676,24.874132]]},{"fromName":"吉首",
"toName":"温州",
"coords":[[109.705708,28.266849],[120.699367,27.994267]]},{"fromName":"吉首",
"toName":"唐山",
"coords":[[109.705708,28.266849],[118.180194,39.630867]]},{"fromName":"北京",
"toName":"铁岭",
"coords":[[116.407526,39.90403],[123.726166,42.223769]]},{"fromName":"长沙",
"toName":"即墨",
"coords":[[113.000194,28.242883],[120.447128,36.389639]]},{"fromName":"北京",
"toName":"上海",
"coords":[[116.407526,39.90403],[121.473701,31.230416]]},{"fromName":"吉首",
"toName":"广州",
"coords":[[109.705708,28.266849],[113.264435,23.129163]]},{"fromName":"吉首",
"toName":"廊坊",
"coords":[[109.705708,28.266849],[116.683752,39.538047]]},{"fromName":"吉首",
"toName":"荣成",
"coords":[[109.705708,28.266849],[122.486658,37.16516]]},{"fromName":"吉首",
"toName":"海城",
"coords":[[109.705708,28.266849],[122.685217,40.882377]]},{"fromName":"湖南",
"toName":"沈阳",
"coords":[[112.98381,28.112444],[123.431475,41.805698]]},{"fromName":"北京",
"toName":"青岛",
"coords":[[116.407526,39.90403],[120.38264,36.067082]]},{"fromName":"河北",
"toName":"大连",
"coords":[[114.475704,38.584854],[121.614682,38.914003]]},{"fromName":"内蒙古",
"toName":"珠海",
"coords":[[106.568088,29.643221],[113.576726,22.270715]]},{"fromName":"吉首",
"toName":"房山",
"coords":[[109.705708,28.266849],[116.143267,39.749144]]},{"fromName":"吉首",
"toName":"金坛",
"coords":[[109.705708,28.266849],[119.597897,31.723247]]},{"fromName":"河北",
"toName":"齐齐哈尔",
"coords":[[114.475704,38.584854],[109.705708,28.266849]]},{"fromName":"吉首",
"toName":"大兴",
"coords":[[109.705708,28.266849],[116.341395,39.726929]]},{"fromName":"吉首",
"toName":"密云",
"coords":[[109.705708,28.266849],[116.801346,40.35874]]},{"fromName":"吉首",
"toName":"和平",
"coords":[[109.705708,28.266849],[117.21451,39.116949]]},{"fromName":"内蒙古",
"toName":"龙井",
"coords":[[106.568088,29.643221],[129.427066,42.766311]]},{"fromName":"吉首",
"toName":"道里",
"coords":[[109.705708,28.266849],[126.616957,45.755777]]},{"fromName":"山东",
"toName":"武汉",
"coords":[[117.020359,36.66853],[114.305393,30.593099]]},{"fromName":"甘肃",
"toName":"常熟",
"coords":[[103.826308,36.059421],[120.752481,31.654376]]},{"fromName":"吉首",
"toName":"烟台",
"coords":[[109.705708,28.266849],[121.447935,37.463822]]},{"fromName":"吉首",
"toName":"海淀",
"coords":[[109.705708,28.266849],[116.298056,39.959912]]},{"fromName":"吉首",
"toName":"长沙",
"coords":[[109.705708,28.266849],[112.938814,28.228209]]},{"fromName":"天津",
"toName":"石家庄",
"coords":[[117.200983,39.084158],[114.51486,38.042307]]},{"fromName":"吉首",
"toName":"佛山",
"coords":[[109.705708,28.266849],[113.121416,23.021548]]},{"fromName":"长沙",
"toName":"黄骅",
"coords":[[113.000194,28.242883],[117.330048,38.371383]]},{"fromName":"内蒙古",
"toName":"中山",
"coords":[[106.568088,29.643221],[113.392782,22.517646]]},{"fromName":"吉首",
"toName":"北京",
"coords":[[109.705708,28.266849],[116.407526,39.90403]]},{"fromName":"吉首",
"toName":"三河",
"coords":[[109.705708,28.266849],[117.078295,39.982718]]},{"fromName":"河北",
"toName":"庆安",
"coords":[[114.475704,38.584854],[127.507825,46.880102]]},{"fromName":"吉首",
"toName":"长沙",
"coords":[[109.705708,28.266849],[112.938814,28.228209]]},{"fromName":"吉首",
"toName":"西安",
"coords":[[109.705708,28.266849],[108.940175,34.341568]]},{"fromName":"内蒙古",
"toName":"朝阳",
"coords":[[106.568088,29.643221],[116.443108,39.92147]]},{"fromName":"长沙",
"toName":"丰台",
"coords":[[113.000194,28.242883],[116.287149,39.858427]]},{"fromName":"吉首",
"toName":"延吉",
"coords":[[109.705708,28.266849],[129.508946,42.891255]]},{"fromName":"吉首",
"toName":"长春",
"coords":[[109.705708,28.266849],[125.323544,43.817072]]},{"fromName":"吉首",
"toName":"天津",
"coords":[[109.705708,28.266849],[117.200983,39.084158]]},{"fromName":"吉首",
"toName":"昌平",
"coords":[[109.705708,28.266849],[116.231204,40.22066]]},{"fromName":"吉首",
"toName":"赣州",
"coords":[[109.705708,28.266849],[114.93503,25.831829]]},{"fromName":"吉首",
"toName":"厦门",
"coords":[[109.705708,28.266849],[118.089425,24.479834]]},{"fromName":"内蒙古",
"toName":"秦皇岛",
"coords":[[106.568088,29.643221],[119.600493,39.935385]]},{"fromName":"内蒙古",
"toName":"菏泽",
"coords":[[106.568088,29.643221],[115.480656,35.23375]]},{"fromName":"吉首",
"toName":"闵行",
"coords":[[109.705708,28.266849],[121.381709,31.112813]]},{"fromName":"长沙",
"toName":"石景山",
"coords":[[113.000194,28.242883],[116.222982,39.906611]]},{"fromName":"吉首",
"toName":"珠海",
"coords":[[109.705708,28.266849],[113.576726,22.270715]]},{"fromName":"内蒙古",
"toName":"青岛",
"coords":[[106.568088,29.643221],[120.38264,36.067082]]},{"fromName":"北京",
"toName":"海门",
"coords":[[116.407526,39.90403],[121.181615,31.871173]]},{"fromName":"内蒙古",
"toName":"长春",
"coords":[[106.568088,29.643221],[125.323544,43.817072]]},{"fromName":"吉首",
"toName":"城阳",
"coords":[[109.705708,28.266849],[120.39631,36.307064]]},{"fromName":"吉首",
"toName":"大同",
"coords":[[109.705708,28.266849],[113.61244,40.040295]]},{"fromName":"湖北",
"toName":"邢台",
"coords":[[114.341862,30.546498],[114.504844,37.070589]]},{"fromName":"吉首",
"toName":"胶州",
"coords":[[109.705708,28.266849],[120.033382,36.26468]]},{"fromName":"吉首",
"toName":"重庆",
"coords":[[109.705708,28.266849],[106.551557,29.56301]]},{"fromName":"河北",
"toName":"佳木斯",
"coords":[[114.475704,38.584854],[130.318917,46.799923]]},{"fromName":"甘肃",
"toName":"大连",
"coords":[[103.826308,36.059421],[121.614682,38.914003]]},{"fromName":"吉首",
"toName":"南京",
"coords":[[109.705708,28.266849],[118.796877,32.060255]]},{"fromName":"内蒙古",
"toName":"日照",
"coords":[[106.568088,29.643221],[119.526888,35.416377]]},{"fromName":"吉首",
"toName":"鸡东",
"coords":[[109.705708,28.266849],[131.12408,45.260412]]},{"fromName":"吉首",
"toName":"即墨",
"coords":[[109.705708,28.266849],[120.447128,36.389639]]},{"fromName":"江苏",
"toName":"朝阳",
"coords":[[118.763232,32.061707],[116.443108,39.92147]]},{"fromName":"吉首",
"toName":"南通",
"coords":[[109.705708,28.266849],[120.894291,31.980172]]},{"fromName":"吉首",
"toName":"张家港",
"coords":[[109.705708,28.266849],[120.553284,31.870367]]},{"fromName":"吉首",
"toName":"三河",
"coords":[[109.705708,28.266849],[117.078295,39.982718]]},{"fromName":"吉首",
"toName":"咸阳",
"coords":[[109.705708,28.266849],[108.708991,34.329605]]},{"fromName":"吉首",
"toName":"中山",
"coords":[[109.705708,28.266849],[113.392782,22.517646]]},{"fromName":"吉首",
"toName":"漠河",
"coords":[[109.705708,28.266849],[120.033382,36.26468]]}]};

option = {

    legend: {
        show: false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        zoom: 1.25,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: 'rgba(20, 41, 87,0.6)',
                borderColor: '#195BB9'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [
        {
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke',
        },
        label: {
            emphasis: {
                show: true,
                position: 'right',
                formatter: '{b}'
            },
            
        },
        symbolSize: 3,
        //symbol:false,
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: '#46bee9'
            }
        },
        data: allData.citys
    }, 
    {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            constantSpeed: 30,
            symbol: 'pin',
            symbolSize: 3,
            trailLength: 0,
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                width: 1,
                opacity: 0.2,
                curveness: 0.1
            }
        },
        data: allData.moveLines
    }]
};
myChart.setOption(option);
window.addEventListener('resize',function() {
    myChart.resize();
  })
})();