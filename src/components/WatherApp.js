import React, { useState } from "react";

const WatherApp = () => {
  let [latitude, setLatitude] = useState();
  let [longitude, setLongitude] = useState();
  let [hemisphere, setHemisphere] = useState("");
  let [month, setMonth] = useState(new Date().getMonth());
  //  new Date().getMonth()

  function getpost() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

        if (position.coords.latitude > 0) {
          setHemisphere("Northern Hemiphere");
        } else if (position.coords.latitude < 0) {
          setHemisphere("Southern Hemisphere");
        } else {
          setHemisphere("Equater");
        }
      });
    } else {
      alert("your browser is not suppoting this  feature");
    }
  }

  return (
    <div className="mainContainer">
      <h1 className="heading">Wather App</h1>
      <div id="cont">
        <div id="left">
          <h2>latitude :{latitude}</h2>
          <h2>longitude :{longitude}</h2>
          <h2>Location :{hemisphere}</h2>
          <button onClick={getpost}>Get Location</button>
        </div>
        <div id="rigth">
          {hemisphere === "Northern Hemiphere" && month >= 2 && month <= 9 ? (
            <div className="seassion">
              <h1>It's Summer in the {hemisphere}</h1>
              <p>आया मौसम थंडे थंडे पावसाळे का</p>
              <img
                src="https://i.ytimg.com/vi/HzErgJjLN0A/maxresdefault.jpg"
                alt="summer"
              />
            </div>
          ) : hemisphere === "Northern Hemiphere" &&
            (month < 2 || month > 9) ? (
            <div className="seassion">
              <h1>It's Winter in the {hemisphere}</h1>
              <p>आया मौसम ठंडा ठंडा पावसाळे का</p>
              <img
                src="https://pbs.twimg.com/media/DpePTTuWsAAxmhT.jpg"
                alt="winter"
              />
            </div>
          ) : (
            <h1>Relax we are fetching ... </h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default WatherApp;
