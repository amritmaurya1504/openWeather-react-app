import React from 'react'
import { useSelector } from 'react-redux'
const Nav = () => {
    const data = useSelector(state => state.weatherReducer.weatherData);
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-3" style={{
                backgroundColor : "#1f1f1f"
            }}>
                <div class="container-fluid">
                    <a class="navbar-brand nav" href="#">WeatherFinder&deg;c <small className="small">{data.name}, {data.country} {data.temp}&deg;c</small> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Day Forecast</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search location" aria-label="Search" />
                            <button class="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="container-xl p-2" style={{
                marginTop : "5rem"
            }}>
                <div class="btn-group">
                    <a href="#" class="btn btn-primary active" data-bs-toggle="tooltip" title="Get Today's Data" data-bs-placement="top" aria-current="page">Today</a>
                    <a href="#" class="btn btn-primary" data-bs-toggle="tooltip" title="Get Daily Data" data-bs-placement="bottom">Daily</a>
                </div>
            </div>
        </div>
    )
}

export default Nav
