﻿
//评估指标体系旭日图
function picto85(chart1, a){

//定义数据
 	var symbols = [
    'path://M426.666667 213.333333c-211.2 0-384 172.8-384 384s172.8 384 384 384c211.2 0 384-172.8 384-384S637.866667 213.333333 426.666667 213.333333zM309.333333 277.333333c-19.2 23.466667-36.266667 53.333333-51.2 87.466667-17.066667-8.533333-32-19.2-46.933333-32C241.066667 309.333333 273.066667 290.133333 309.333333 277.333333zM179.2 362.666667c17.066667 17.066667 38.4 29.866667 61.866667 42.666667-17.066667 51.2-25.6 108.8-27.733333 170.666667l-128 0C91.733333 492.8 125.866667 418.133333 179.2 362.666667zM87.466667 618.666667l128 0c2.133333 61.866667 12.8 119.466667 27.733333 170.666667-23.466667 12.8-44.8 25.6-61.866667 42.666667C125.866667 776.533333 91.733333 701.866667 87.466667 618.666667zM211.2 861.866667c12.8-10.666667 29.866667-21.333333 46.933333-32 14.933333 34.133333 32 64 51.2 87.466667C273.066667 904.533333 241.066667 885.333333 211.2 861.866667zM405.333333 934.4c-44.8-10.666667-83.2-57.6-110.933333-123.733333 34.133333-12.8 70.4-19.2 110.933333-21.333333L405.333333 934.4zM405.333333 746.666667c-44.8 2.133333-87.466667 10.666667-123.733333 25.6-12.8-44.8-21.333333-98.133333-23.466667-153.6l149.333333 0L407.466667 746.666667zM405.333333 576l-149.333333 0c2.133333-55.466667 10.666667-108.8 23.466667-153.6 38.4 14.933333 78.933333 23.466667 123.733333 25.6L403.2 576zM405.333333 405.333333c-40.533333-2.133333-76.8-10.666667-110.933333-21.333333 27.733333-66.133333 66.133333-110.933333 110.933333-123.733333L405.333333 405.333333zM642.133333 332.8c-12.8 10.666667-29.866667 21.333333-46.933333 32-14.933333-34.133333-32-64-51.2-87.466667C580.266667 290.133333 612.266667 309.333333 642.133333 332.8zM448 260.266667c44.8 10.666667 83.2 57.6 110.933333 123.733333-34.133333 12.8-70.4 19.2-110.933333 21.333333L448 260.266667zM448 448c44.8-2.133333 87.466667-10.666667 123.733333-25.6 12.8 44.8 21.333333 98.133333 23.466667 153.6l-149.333333 0L445.866667 448zM448 618.666667l149.333333 0c-2.133333 55.466667-10.666667 108.8-23.466667 153.6-38.4-14.933333-78.933333-23.466667-123.733333-25.6L450.133333 618.666667zM448 934.4 448 789.333333c40.533333 2.133333 76.8 10.666667 110.933333 21.333333C531.2 878.933333 492.8 923.733333 448 934.4zM544 917.333333c19.2-23.466667 36.266667-53.333333 51.2-87.466667 17.066667 8.533333 32 19.2 46.933333 32C612.266667 885.333333 580.266667 904.533333 544 917.333333zM674.133333 832c-17.066667-17.066667-38.4-29.866667-61.866667-42.666667 17.066667-51.2 25.6-108.8 27.733333-170.666667l128 0C761.6 701.866667 727.466667 776.533333 674.133333 832zM640 576c-2.133333-61.866667-12.8-119.466667-27.733333-170.666667 23.466667-12.8 44.8-25.6 61.866667-42.666667 53.333333 55.466667 89.6 130.133333 93.866667 213.333333L640 576zM597.333333 42.666667c-123.733333 0-232.533333 57.6-302.933333 149.333333 32-10.666667 66.133333-17.066667 100.266667-19.2-4.266667-2.133333-8.533333-6.4-12.8-8.533333 29.866667-23.466667 61.866667-42.666667 98.133333-55.466667-14.933333 17.066667-27.733333 40.533333-40.533333 64 14.933333 0 29.866667 2.133333 44.8 4.266667 25.6-46.933333 57.6-76.8 93.866667-85.333333l0 108.8c14.933333 6.4 29.866667 10.666667 42.666667 19.2l0-128c44.8 10.666667 83.2 57.6 110.933333 123.733333-25.6 10.666667-53.333333 17.066667-83.2 19.2 17.066667 10.666667 34.133333 21.333333 49.066667 34.133333 17.066667-4.266667 34.133333-8.533333 49.066667-14.933333 8.533333 25.6 12.8 53.333333 17.066667 81.066667C789.333333 366.933333 810.666667 405.333333 825.6 448l110.933333 0c-4.266667 81.066667-38.4 151.466667-89.6 206.933333-4.266667 25.6-8.533333 51.2-17.066667 74.666667 91.733333-70.4 149.333333-179.2 149.333333-302.933333C981.333333 215.466667 808.533333 42.666667 597.333333 42.666667zM714.666667 106.666667c36.266667 12.8 68.266667 32 98.133333 55.466667-12.8 10.666667-29.866667 21.333333-46.933333 32C753.066667 160 736 130.133333 714.666667 106.666667zM810.666667 405.333333c-2.133333-61.866667-12.8-119.466667-27.733333-170.666667 23.466667-12.8 44.8-25.6 61.866667-42.666667 53.333333 55.466667 89.6 130.133333 93.866667 213.333333L810.666667 405.333333z',
   'path://M503.253333 766.848c-9.130667 1.237333-20.778667 4.565333-34.496 10.389333a542.72 542.72 0 0 0-35.370666 16.213334l-14.549334 7.488a9.045333 9.045333 0 0 1-3.328 2.090666 155.370667 155.370667 0 0 0-8.746666 4.992l-12.458667 7.466667c-4.16 2.517333-8.32 5.013333-13.312 7.914667a129.216 129.216 0 0 0-12.48 8.32 55.210667 55.210667 0 0 0-8.746667 7.893333c-2.069333 2.496-3.733333 4.992-3.733333 6.656 0 3.754667 5.418667 9.173333 16.64 16.64 10.816 7.082667 22.037333 13.738667 33.28 19.968 11.221333 5.824 16.64 8.746667 16.64 7.893333 43.242667 22.058667 72.768 33.28 89.002667 33.28 7.466667 0 18.282667-2.901333 32.853333-8.32a773.461333 773.461333 0 0 0 38.677333-16.64l16.213334-7.893333c38.250667-18.304 60.309333-32.853333 66.56-42.837333 1.642667-3.754667 0-8.32-5.418667-13.717334-5.418667-5.418667-13.312-11.242667-24.533333-17.493333l-21.632-11.626667c-2.922667-1.664-7.488-3.754667-13.312-6.656-48.234667-24.106667-80.277333-34.517333-97.728-32.021333m-48.661334-24.106667c1.664-3.349333 0-7.509333-4.992-12.501333-4.992-4.992-12.074667-10.389333-21.632-16.213333-7.061333-4.565333-14.549333-8.746667-22.037333-12.48-4.992-2.901333-10.410667-4.992-15.808-7.466667a3.157333 3.157333 0 0 0-1.664-0.853333c-46.997333-23.701333-79.445333-34.090667-97.322667-31.594667-19.541333 3.328-47.402667 14.954667-83.584 34.922667a7.957333 7.957333 0 0 1-3.328 1.664c-1.664 0.426667-4.586667 2.090667-8.746666 4.586666-8.746667 4.992-17.877333 10.389333-26.197334 15.786667-4.266667 2.837333-8.533333 5.610667-12.885333 8.32a25.194667 25.194667 0 0 0-8.32 7.893333c-2.090667 2.517333-3.328 5.013333-3.328 6.677334 0 3.733333 5.397333 9.557333 16.64 17.045333 10.389333 7.061333 21.610667 13.717333 32.853333 19.541333 10.816 5.418667 16.64 7.893333 17.066667 7.893334 4.970667 2.517333 11.2 5.845333 18.688 9.578666s19.562667 8.746667 35.776 14.549334c16.213333 5.824 27.861333 8.746667 35.349333 8.746666 7.466667 0 18.304-2.922667 32.853334-8.32 12.885333-4.992 25.386667-10.410667 37.845333-16.213333 10.410667-4.992 16.213333-7.893333 16.64-8.32 38.272-18.730667 60.309333-33.28 66.133333-43.264m461.653334-123.093333c0.405333-4.992 0.810667-12.074667 0.405333-21.226667-0.426667-9.152-2.090667-22.037333-4.992-38.250667-2.922667-16.213333-7.488-27.861333-12.906667-34.517333-5.824-6.656-14.549333-13.738667-27.029333-22.464a440.341333 440.341333 0 0 0-32.426667-19.968l-14.570666-7.893333c-2.069333-1.258667-4.16-2.496-6.656-3.754667-2.496-1.237333-7.893333-4.16-15.381334-7.893333a184.277333 184.277333 0 0 0-20.8-9.984c-5.824-2.496-12.053333-4.565333-18.304-6.656-5.802667-1.664-9.962667-2.069333-12.053333-0.832-3.733333 2.090667-6.656 9.578667-7.893333 22.037333a266.026667 266.026667 0 0 0-2.496 36.608l0.832 17.066667c0 45.738667 4.16 75.264 12.053333 88.149333 3.754667 5.824 11.648 13.312 23.701333 22.464 11.242667 8.32 22.464 15.786667 34.517334 22.869333l16.213333 8.746667c3.754667 2.069333 8.746667 4.992 15.402667 8.725333 6.656 3.733333 16.213333 8.746667 29.525333 14.549334 13.312 5.824 22.464 8.746667 27.861333 8.746666 11.648 0 16.64-25.792 14.976-76.522666M126.890667 475.306667c5.397333 0 14.122667-2.496 26.197333-7.893334a481.408 481.408 0 0 0 32.853333-16.213333l13.717334-7.914667c41.6-23.296 66.133333-41.173333 73.6-54.08 3.754667-5.824 6.677333-16.213333 8.746666-30.762666a286.08 286.08 0 0 0 3.328-39.509334l0.853334-17.898666c1.237333-45.738667-2.090667-71.104-9.6-75.264-3.306667-1.664-10.794667 0-23.253334 4.992-11.669333 4.565333-23.317333 9.984-34.944 15.786666-11.242667 5.845333-16.213333 8.32-15.808 8.32-35.776 18.304-60.309333 34.944-72.789333 49.493334-12.48 14.144-18.709333 45.333333-18.709333 93.994666-0.853333 50.752 4.16 76.522667 15.786666 76.949334m686.656 212.096c-46.997333-23.68-79.445333-34.090667-97.322666-31.594667-8.746667 1.664-19.968 5.397333-34.112 10.816-14.122667 5.802667-25.770667 11.221333-35.754667 16.64l-13.717333 7.466667c-1.258667 0.853333-2.496 1.258667-3.754667 2.090666a150.976 150.976 0 0 1-8.746667 4.992l-12.885333 7.061334c-4.16 2.090667-8.32 4.992-13.290667 7.893333a281.386667 281.386667 0 0 0-12.48 8.746667 88.426667 88.426667 0 0 0-8.746666 7.466666c-2.496 2.517333-3.733333 4.586667-3.733334 6.250667 0.426667 7.893333 22.869333 23.296 66.538667 45.333333 4.992 2.090667 11.221333 4.992 19.136 8.746667 7.893333 3.733333 19.541333 8.725333 35.754667 14.549333 15.808 5.824 27.456 8.746667 34.944 8.746667 7.466667 0 18.304-2.517333 32.853333-7.914667a306.602667 306.602667 0 0 0 38.272-17.066666l16.213333-7.893334c38.677333-18.304 61.141333-32.853333 66.56-42.837333 2.069333-3.328 0.405333-7.893333-5.845333-13.312-5.824-5.824-13.717333-11.221333-22.869333-16.64-9.557333-5.397333-17.066667-9.557333-22.869334-12.885333-7.082667-3.328-11.648-5.397333-14.144-6.656m-543.573333-77.76c3.328-5.824 5.824-16.213333 7.893333-30.784 2.090667-14.549333 3.328-27.861333 4.16-39.509334v-17.877333c1.258667-45.76-2.069333-71.125333-9.557333-75.285333-3.328-1.664-10.816 0-22.869333 4.992a445.44 445.44 0 0 0-34.944 15.808c-11.221333 5.824-16.213333 8.32-15.786667 8.32-36.202667 18.709333-60.330667 35.754667-72.789333 50.325333-12.48 14.144-18.730667 45.333333-18.730667 93.994667-1.237333 50.730667 4.16 76.522667 15.402667 76.928 5.397333 0 14.144-2.496 26.197333-7.893334a481.408 481.408 0 0 0 32.853333-16.213333l13.717334-7.893333c41.6-23.722667 66.56-41.6 74.453333-54.912m271.573333-338.133334c3.754667 5.824 12.053333 13.312 24.106667 22.464 10.837333 7.893333 22.485333 15.381333 34.133333 22.464l16.213334 9.557334c3.733333 2.090667 8.746667 4.992 15.381333 8.746666 6.656 3.733333 16.213333 8.725333 29.525333 14.549334 13.312 5.824 22.464 8.746667 27.861334 7.893333 11.242667 0 16.213333-25.365333 14.570666-76.096 0-49.066667-5.824-80.277333-17.898666-93.994667-5.397333-6.656-14.122667-13.717333-26.197334-22.464a278.378667 278.378667 0 0 0-32.853333-19.968l-13.717333-7.893333a67.285333 67.285333 0 0 1-7.488-4.16c-2.496-1.664-7.893333-4.16-15.381334-7.893333a316.672 316.672 0 0 0-20.8-9.578667c-5.824-2.496-12.074667-4.565333-18.304-6.656-5.824-1.664-9.984-2.069333-12.053333-0.832-3.754667 1.664-6.656 8.746667-7.893333 21.632-1.685333 12.053333-2.090667 24.533333-1.685334 37.013333v17.066667c0.853333 45.738667 4.586667 74.837333 12.48 88.149333m148.053334 136.832c-5.397333-6.656-14.122667-13.717333-26.602667-22.464a619.52 619.52 0 0 0-32.426667-20.778666l-13.738666-7.488a67.285333 67.285333 0 0 1-7.488-4.16 178.218667 178.218667 0 0 0-15.381334-7.893334 316.672 316.672 0 0 0-20.8-9.578666 237.205333 237.205333 0 0 0-18.304-6.656c-5.824-1.664-9.984-2.069333-12.053333-0.832-3.754667 1.664-6.656 8.746667-7.893333 21.632-1.685333 12.053333-2.090667 24.533333-1.685334 37.013333v17.066667c0.426667 45.738667 4.586667 75.264 12.074667 88.149333 3.733333 5.824 12.053333 13.312 24.106667 22.464 10.816 7.893333 22.464 15.381333 34.112 22.464l16.213333 8.725333c3.754667 2.496 8.746667 5.824 15.402667 9.152 6.634667 3.328 16.213333 8.32 29.525333 14.549334 13.312 6.250667 22.442667 9.173333 27.861333 8.32 4.16 0 7.893333-3.733333 9.984-10.816 2.496-7.466667 3.733333-16.213333 4.565334-27.029334 0.426667-10.816 0.853333-19.136 0.853333-24.533333 0-5.824-0.426667-9.984-0.853333-13.312-0.832-51.157333-6.656-82.346667-17.472-93.994667m60.736-19.541333c3.733333 5.824 12.053333 13.312 24.106666 22.464 11.242667 7.893333 22.464 15.786667 34.112 23.274667l16.213334 8.746666c3.754667 2.069333 8.746667 4.992 15.402666 8.746667 6.634667 3.733333 16.213333 8.725333 29.525334 14.528 13.312 5.824 22.442667 8.746667 27.861333 8.746667 11.221333-0.426667 16.213333-26.197333 14.549333-76.949334 0-48.64-5.824-79.850667-17.877333-93.994666-5.418667-6.634667-14.144-13.717333-26.624-22.442667a440.341333 440.341333 0 0 0-32.426667-19.968l-13.738666-7.893333-7.466667-3.328a177.685333 177.685333 0 0 0-15.402667-8.32 184.277333 184.277333 0 0 0-20.8-9.984 237.205333 237.205333 0 0 0-18.282666-6.656c-5.824-1.664-9.984-2.090667-12.074667-0.853334-3.733333 2.090667-6.656 9.6-7.893333 22.058667-1.664 12.053333-2.090667 24.106667-1.664 36.608v17.045333c0.832 45.738667 4.992 75.285333 12.48 88.170667m-418.816 189.653333c5.418667 0.426667 14.144-2.090667 26.197333-7.488a485.632 485.632 0 0 0 32.853333-16.213333l13.738667-8.746667c41.6-22.869333 66.133333-40.341333 73.6-53.653333 3.754667-5.824 6.656-16.213333 8.746667-30.762667a286.08 286.08 0 0 0 3.328-39.509333l0.832-17.898667c1.237333-45.738667-2.090667-71.104-9.578667-75.264-3.328-2.090667-11.221333-0.853333-23.274667 4.16a256 256 0 0 0-34.112 16.213334l-16.213333 8.746666c-36.181333 18.709333-60.309333 35.754667-72.789333 50.304-12.48 13.312-18.709333 44.928-18.709334 93.994667v12.885333c0 5.824 0.426667 14.144 0.832 24.96 0.426667 10.816 2.069333 19.968 4.565334 27.029334 2.496 7.488 5.824 11.242667 9.984 11.242666m26.624 52.394667c0 3.328 5.824 8.746667 17.066666 16.213333a547.84 547.84 0 0 0 33.258667 20.394667l16.213333 7.893333c43.669333 22.037333 73.6 33.28 89.834667 33.28 7.061333 0 17.877333-2.922667 32.426667-8.32a443.157333 443.157333 0 0 0 38.272-16.64l16.213333-7.893333c38.677333-18.730667 61.141333-33.28 66.56-43.690667 1.237333-1.237333 1.237333-2.474667 0.426667-4.565333a24.832 24.832 0 0 0-3.754667-6.229333 50.304 50.304 0 0 0-6.656-6.656c-2.922667-2.090667-5.418667-4.16-8.32-6.250667-2.922667-2.069333-6.250667-4.16-9.984-6.656l-9.984-6.229333c-3.328-1.664-6.229333-3.328-9.557333-4.992-2.922667-1.258667-5.824-2.496-8.32-4.16l-5.824-2.496c-1.664-1.237333-2.496-2.069333-2.496-2.496-45.333333-23.701333-77.781333-34.090667-97.322667-31.616-8.746667 1.664-19.968 5.418667-34.112 10.816-14.122667 5.824-25.770667 11.242667-35.754667 16.64l-13.717333 7.488c-1.258667 0.832-2.496 1.258667-3.754667 2.090666a150.976 150.976 0 0 1-8.746666 4.970667c-4.565333 2.496-8.725333 4.992-12.885334 7.488-4.16 2.496-8.32 4.992-13.290666 7.893333a129.216 129.216 0 0 0-12.48 8.32 53.504 53.504 0 0 0-8.746667 7.914667c-3.328 3.754667-4.565333 5.824-4.565333 7.488m-37.845334-349.76c-1.258667 50.730667 4.16 76.096 15.381334 76.096 5.418667 0.426667 14.549333-2.496 27.861333-8.32a613.461333 613.461333 0 0 0 29.12-14.549333c4.992-2.901333 10.389333-5.824 15.786667-8.32l16.234666-9.557334a437.589333 437.589333 0 0 0 34.112-22.464c12.458667-8.746667 20.373333-16.213333 23.274667-22.464 7.893333-12.885333 12.48-42.410667 12.906667-88.170666v-17.045334c0.426667-12.053333-0.426667-24.533333-1.664-37.013333-1.258667-12.48-3.754667-19.968-7.488-21.632-2.090667-1.237333-6.250667-0.832-12.074667 0.853333a122.730667 122.730667 0 0 0-18.282667 6.634667c-6.250667 2.922667-12.906667 5.824-20.8 9.578667-7.488 3.733333-12.885333 6.656-15.786666 7.893333a62.613333 62.613333 0 0 0-7.082667 4.16l-13.738667 7.893333a316.8 316.8 0 0 0-32.853333 19.968c-12.053333 8.32-20.778667 15.786667-26.197333 22.464-12.48 13.312-18.709333 44.906667-18.709334 93.994667',
    'path://M-244.396,44.399c0,0,0.47-2.931-2.427-6.512c2.819-8.221,3.21-15.709,3.21-15.709s5.795,1.383,5.795,7.325C-237.818,39.679-244.396,44.399-244.396,44.399z M-260.371,40.827c0,0-3.881-12.946-3.881-18.319c0-2.416,0.262-4.566,0.669-6.517h17.684c0.411,1.952,0.675,4.104,0.675,6.519c0,5.291-3.87,18.317-3.87,18.317H-260.371z M-254.745,18.951c-1.99,0-3.603,1.676-3.603,3.744c0,2.068,1.612,3.744,3.603,3.744c1.988,0,3.602-1.676,3.602-3.744S-252.757,18.951-254.745,18.951z M-255.521,2.228v-5.098h1.402v4.969c1.603,1.213,5.941,5.069,7.901,12.5h-17.05C-261.373,7.373-257.245,3.558-255.521,2.228zM-265.07,44.399c0,0-6.577-4.721-6.577-14.896c0-5.942,5.794-7.325,5.794-7.325s0.393,7.488,3.211,15.708C-265.539,41.469-265.07,44.399-265.07,44.399z M-252.36,45.15l-1.176-1.22L-254.789,48l-1.487-4.069l-1.019,2.116l-1.488-3.826h8.067L-252.36,45.15z',
    ];

var bodyMax = 150;


option = {
    title: {
                    text: '网络、存储和计算资源总量',
                    subtext: '',
                    left: 'center'
                },
    tooltip: {
    },

    toolbox: {
        show: false,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }},
    yAxis: {
        data: ['网络', '计算', '存储'],
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: true}
    },
    xAxis: {
        max: bodyMax,
        offset: 20,
        splitLine: {show: false},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false}
    },
    grid: {
        top: 'center',
        height: 230
    },
    markLine: {
        z: -100
    },
    series: [{
        name: '网络，计算，存储',
        type: 'pictorialBar',
        symbolClip: true,
        symbolBoundingData: bodyMax,
        data: [{
            value: [],
            symbol: symbols[0],
            symbolRepeat: true,
            label:{
                show: true,
        position: 'right',
        offset: [0, -20],
        formatter: function (param) {
            return (param.value*30+'GB' );
        },
        textStyle: {
            fontSize: 18,
            fontFamily: 'Arial'
        }}

        }, {
            value:[],
            symbol: symbols[1],
            symbolRepeat: true,
            label:{
                show: true,
        position: 'right',
        offset: [0, -20],
        formatter: function (param) {
            return (param.value*50+'Pflops' );
        },
        textStyle: {
            fontSize: 18,
            fontFamily: 'Arial'
        }}

        }
        ,  {
            value: [],
            symbol: symbols[3],
            symbolRepeat: true,
            label:{
                show: true,
        position: 'right',
        offset: [0, -20],
        formatter: function (param) {
            return (param.value*50+'万TB' );
        },
        textStyle: {
            fontSize: 18,
            fontFamily: 'Arial'
        }}

        }],

    }]

};

 $.get('/static/DATA/data1.json').done(function (data) {
        if (typeof (data) == "string") {
            data = JSON.parse(data);
        }
        chart1.setOption({
              series: [{
        name: '网络，计算，存储',
        type: 'pictorialBar',
        symbolClip: true,
        symbolBoundingData: bodyMax,
        data: [{
            value: data.resource[84].wideband/30,
            symbol: symbols[0],
            symbolRepeat: true,
            label:{
                show: true,
        position: 'right',
        offset: [0, -20],
        formatter: function (param) {
            return (param.value*30+'GB' );
        },
        textStyle: {
            fontSize: 18,
            fontFamily: 'Arial'
        }}

        }, {
            value:data.resource[84].computation/60,
            symbol: symbols[1],
            symbolRepeat: true,
            label:{
                show: true,
        position: 'right',
        offset: [0, -20],
        formatter: function (param) {
            return (param.value*60+'Pflops' );
        },
        textStyle: {
            fontSize: 18,
            fontFamily: 'Arial'
        }}

        }
        ,  {
            value: data.resource[84].store/50,
            symbol: symbols[3],
            symbolRepeat: true,
            label:{
                show: true,
        position: 'right',
        offset: [0, -20],
        formatter: function (param) {
            return (param.value*50+'万TB' );
        },
        textStyle: {
            fontSize: 18,
            fontFamily: 'Arial'
        }}

        }],

    }]



    });

});



        //使用制定的配置项和数据显示图表
        chart1.setOption(option);
        //自适应
     }

