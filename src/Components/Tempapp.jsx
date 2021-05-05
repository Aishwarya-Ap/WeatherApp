import React, { useEffect, useState } from 'react';
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("MUMBAI");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=93537fa3d42004d746e4215c378f4d00`;
            const response = await fetch(url);
            const resJson = await response.json()  //to convert into json
            //const setCity: (value: any) => void
            setCity(resJson.main);
        };
        fetchApi();
    }, [search] )

    //const handleClick = () =>{
    //  fetch(`http://api.weatherapi.com/v1/current.json?key=b13aa0fdf28d40819e4141743210405&q=${search}&aqi=no`)
    // .then(response => response.json())
    // .then(data => setCity(data.current.condition.text))
    // <button onClick={handleClick}>Go</button>



    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        value={search}
                        onChange={ (event) => { setSearch(event.target.value) }} />
                </div>

                {!city ? (
                    <p className="errorMsg"> No Data Found</p>
                ) : (
                    <div className="info">
                        <h1 className="location">
                            <i className="fas fa-street-view"> </i>{search}
                        </h1>
                        <h1 className="temp">
                            {city.temp}°Cel
                        </h1>
                        <h3 className="tempmin_max">
                        Min {city.temp_min}°Cel | Max  {city.temp_max}°Cel</h3>
                    </div>
                )}

            </div>
        </>
    )
}

export default Tempapp;