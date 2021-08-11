import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import TopStories from './TopStories'
const DailyWeath = () => {

    const [inpSearch, SetInpSearch] = useState();
    const [weathData, setWeathData] = useState([]);

    // useEffect(() => {
    //     getData();
    // }, [])

    const getData = async () => {
        // let url = `https://api.openweathermap.org/data/2.5/forecast?q=jehanabad&unit=metric&appid=58aab3327201016821c56b94f96ac08d`;
        // let res = await fetch(url);
        // let data = await res.json();
        // console.log(data);
        // setWeathData(data);
    }

    // let sec = weathData.list[0].dt;
    // console.log(sec);
    // let date = new Date(sec * 1000);
    // let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    // let data = `Day - ${weekDay[date.getDay()]} Date - ${date.getDate()}.${date.getMonth()}.${date.getFullYear()} `


    return (
        <>
            <div className="container-lg my-3">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" value={inpSearch} onChange={(e) => SetInpSearch(e.target.value)} placeholder="Search location" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-success" type="button" id="button-addon2" onClick={getData} >Search</button>
                </div>
            </div>
            <div className="container-lg my-5">
                <div className="row mx-1">
                    <div className="MaindailyDiv col shadow">
                        <p className="bg-light p-2 h5 text-center mt-3">Jehanabad, IN 5-Day Forecast</p>
                        <div className="dailyDiv p-4">

                            <div className="divOne border-end">
                                <div className="heading">
                                    <p className="myText bg-info text-white ps-4 pe-4 py-2 h6 text-center">Wednesday</p>
                                    <img src="http://openweathermap.org/img/wn/10d.png" alt="" />
                                </div>
                                <div className="info">
                                    <div className="line">
                                        <small>Temp</small>
                                        <p className="h6">34&deg;c</p>
                                    </div>
                                    <div className="line">
                                        <small>Pressure</small>
                                        <p className="h6">122Mb</p>
                                    </div>
                                    <div className="line">
                                        <small>Humidity</small>
                                        <p className="h6">56%</p>
                                    </div>
                                    <div className="line">
                                        <small>Wind</small>
                                        <p className="h6">34</p>
                                    </div>
                                    <div className="line">
                                        <small>Mood</small>
                                        <p className="h6">Rain</p>
                                    </div>
                                </div>

                            </div>
                            <div className="divTwo border-end">
                                <div className="heading">
                                    <p className="myText bg-info text-white ps-4 pe-4 py-2 h6 text-center">Wednesday</p>
                                    <img src="http://openweathermap.org/img/wn/10d.png" alt="" />
                                </div>
                                <div className="info">
                                    <div className="line">
                                        <small>Temp</small>
                                        <p className="h6">34&deg;c</p>
                                    </div>
                                    <div className="line">
                                        <small>Pressure</small>
                                        <p className="h6">122Mb</p>
                                    </div>
                                    <div className="line">
                                        <small>Humidity</small>
                                        <p className="h6">56%</p>
                                    </div>
                                    <div className="line">
                                        <small>Wind</small>
                                        <p className="h6">34</p>
                                    </div>
                                    <div className="line">
                                        <small>Mood</small>
                                        <p className="h6">Rain</p>
                                    </div>
                                </div>
                            </div>
                            <div className="divThree border-end">
                                <div className="heading">
                                    <p className="myText bg-info text-white ps-4 pe-4 py-2 h6 text-center">Wednesday</p>
                                    <img src="http://openweathermap.org/img/wn/10d.png" alt="" />
                                </div>
                                <div className="info">
                                    <div className="line">
                                        <small>Temp</small>
                                        <p className="h6">34&deg;c</p>
                                    </div>
                                    <div className="line">
                                        <small>Pressure</small>
                                        <p className="h6">122Mb</p>
                                    </div>
                                    <div className="line">
                                        <small>Humidity</small>
                                        <p className="h6">56%</p>
                                    </div>
                                    <div className="line">
                                        <small>Wind</small>
                                        <p className="h6">34</p>
                                    </div>
                                    <div className="line">
                                        <small>Mood</small>
                                        <p className="h6">Rain</p>
                                    </div>
                                </div>
                            </div>
                            <div className="divFour border-end">
                                <div className="heading">
                                    <p className="myText bg-info text-white ps-4 pe-4 py-2 h6 text-center">Wednesday</p>
                                    <img src="http://openweathermap.org/img/wn/10d.png" alt="" />
                                </div>
                                <div className="info">
                                    <div className="line">
                                        <small>Temp</small>
                                        <p className="h6">34&deg;c</p>
                                    </div>
                                    <div className="line">
                                        <small>Pressure</small>
                                        <p className="h6">122Mb</p>
                                    </div>
                                    <div className="line">
                                        <small>Humidity</small>
                                        <p className="h6">56%</p>
                                    </div>
                                    <div className="line">
                                        <small>Wind</small>
                                        <p className="h6">34</p>
                                    </div>
                                    <div className="line">
                                        <small>Mood</small>
                                        <p className="h6">Rain</p>
                                    </div>
                                </div>
                            </div>
                            <div className="divFive border-end">
                                <div className="heading">
                                    <p className="myText bg-info text-white ps-4 pe-4 py-2 h6 text-center">Wednesday</p>
                                    <img src="http://openweathermap.org/img/wn/10d.png" alt="" />
                                </div>
                                <div className="info">
                                    <div className="line">
                                        <small>Temp</small>
                                        <p className="h6">34&deg;c</p>
                                    </div>
                                    <div className="line">
                                        <small>Pressure</small>
                                        <p className="h6">122Mb</p>
                                    </div>
                                    <div className="line">
                                        <small>Humidity</small>
                                        <p className="h6">56%</p>
                                    </div>
                                    <div className="line">
                                        <small>Wind</small>
                                        <p className="h6">34</p>
                                    </div>
                                    <div className="line">
                                        <small>Mood</small>
                                        <p className="h6">Rain</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default DailyWeath
