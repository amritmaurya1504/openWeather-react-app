import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useEffect } from 'react';
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useState } from 'react';
import { setWeatherInfo } from "../actions/index"
import { useDispatch } from 'react-redux';

const NEWS_KEY = "29f4cc4276a14cfebe4a2ee7c47211ea";
const DataContainer = () => {

    const [news, setNews] = useState([]);
    const [weather, setWeather] = useState({});
    const [inpSearch, setInpSearch] = useState()
    
    const dispath = useDispatch();

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "....." : string
    }
    useEffect(async () => {
        try {
            const res = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=29f4cc4276a14cfebe4a2ee7c47211ea");
            //// console.log(res.data.articles);
            setNews(res.data.articles);
        } catch (error) {
            console.log(error);
        }

    }, []);

    useEffect(async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=jehanabad&units=metric&appid=58aab3327201016821c56b94f96ac08d`
            let res = await fetch(url);
            let data = await res.json();

            // Disturacting array datas
            const { temp, humidity, pressure, feels_like } = data.main;
            const { name } = data;
            const { country } = data.sys;
            const { speed } = data.wind;
            const { main } = data.weather[0];
            console.log(main);
            // const{main : weatherMood} = data.weather[0];

            const myWeatherInfo = {
                temp, humidity, pressure, name, country, feels_like, speed, main
            }

            setWeather(myWeatherInfo);
            dispath(setWeatherInfo(myWeatherInfo))

        } catch (error) {
            console.log(error);
        }

    }, [])

    const getWeather = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${inpSearch}&units=metric&appid=58aab3327201016821c56b94f96ac08d`
            let res = await fetch(url);
            let data = await res.json();

            // Disturacting array datas
            const { temp, humidity, pressure, feels_like } = data.main;
            const { name } = data;
            const { country } = data.sys;
            const { speed } = data.wind;
            const { main } = data.weather[0];
            console.log(main);
            // const{main : weatherMood} = data.weather[0];

            const myWeatherInfo = {
                temp, humidity, pressure, name, country, feels_like, speed, main
            }

            setWeather(myWeatherInfo);
            setInpSearch("");
            dispath(setWeatherInfo(myWeatherInfo))
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <div className="container-lg my-3">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search location" aria-label="Recipient's username" aria-describedby="button-addon2" value={inpSearch} onChange={(e) => setInpSearch(e.target.value)} />
                    <button class="btn btn-success" type="button" id="button-addon2" onClick={getWeather}>Search</button>
                </div>
            </div>
            <div className="container-lg my-5">
                <div className="row mx-1">
                    <div className="col-md-12 col-lg-7 shadow myDiv myDiv">
                        <div className="p-4">
                            <div className="innerDiv">
                                <div className="left">
                                    <p class="h5">CURRENT WEATHER</p>
                                    <p className="h6 lead text-secondary">{new Date().toLocaleTimeString()}</p>
                                    <div className="tempInfo">
                                        <div className="weatherIcon">
                                            <i className={`wi wi-cloudy`}></i>
                                        </div>
                                        <div className="temData">
                                            <h1 className="display-3">{weather.temp}&deg;c</h1>
                                            <p className="h6 lead">
                                                RealFeel®
                                                {weather.feels_like}°
                                            </p>
                                        </div>
                                    </div>
                                    <p className="h6 text-start">{weather.main}</p>
                                </div>
                                <div className="right">
                                    <div className="lineOne border-bottom border-1 mb-2">
                                        <p className="h6">{weather.name}, {weather.country} </p>
                                    </div>
                                    <div className="lineOne border-bottom border-1 mb-2">
                                        <p className="h6 lead">Wind</p>
                                        <p className="h6">{weather.speed}km/h</p>
                                    </div>
                                    <div className="lineOne border-bottom border-1 mb-2">
                                        <p className="h6 lead">Pressure</p>
                                        <p className="h6">{weather.pressure}mb</p>
                                    </div>
                                    <div className="lineOne border-bottom border-1 mb-2">
                                        <p className="h6 lead">Humadity</p>
                                        <p className="h6">{weather.humidity}%</p>
                                    </div>
                                    <p className="h6 text-end mt-4">More Details <ArrowForwardIcon /> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 shadow myDivNews">
                        <div className="px-2 pt-3">
                            <p className="h6 fw-bold">TOP STORIES.</p>
                            <hr />

                            {
                                news.map((news) => {
                                    return (
                                        <div className="news">
                                            <p className="h5 bg-danger text-white p-2">{news.source.name}</p>
                                            <p className="h6">{news.title}</p>
                                            <img src={news.urlToImage} className="img-fluid mt-2 mb-2" alt="Sorry Image not available" /><br />
                                            <small>{truncate(news.description, 150)}</small>
                                            <p className="h6 mt-2">{news.publishedAt}</p>
                                            <p className="text-end"><a className="moreButton" target="_blank" href={news.url}>More <ArrowForwardIcon /> </a></p>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataContainer


