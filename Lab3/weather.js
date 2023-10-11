const city=document.getElementById("searchCity");
const api="7e3f21edee540e6110af347b55eb1ab2";

city.addEventListener("keypress",myWeatherFunction);

function myWeatherFunction(e){
    if(e.keyCode==13){
        getWeatherData(city.value);
    }

    function getWeatherData(cityPressed){
      console.log(cityPressed);
      const weatherDetails=`https://api.openweathermap.org/data/2.5/weather?q=${cityPressed}&appid=${api}&units=metric`;
        fetch(weatherDetails)
        .then(response => {
          return response.json();
        })
        .then(response => {
            displayWeatherData(response);       
        })
    }  
}

function displayWeatherData(weatherData){
  let city_name=document.querySelector(".city");
  let today_date=document.querySelector(".today");
  let temp=document.querySelector(".temperature");
  let weather=document.querySelector(".weather");
  let maxmin_temp=document.querySelector(".max-min_temp");

  city_name.innerText=`${weatherData.name},${weatherData.sys.country}`;
  temp.innerHTML=`<h1>${Math.round(weatherData.main.temp)} &#8451;</h1>`;
  weather.innerText=`${weatherData.weather[0].main}`;
  maxmin_temp.innerHTML=`${Math.round(weatherData.main.temp_min)} &#8451;/ ${Math.round(weatherData.main.temp_max)} &#8451;`;
  today_date.innerText=getTodaysDate()
}

function getTodaysDate(){

  let date=new Date();
  let months=["January","Febrauary","March","April","May","June","July","August","September","October","November","December"];
  let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day=days[date.getDay()];
  let month=months[date.getMonth()];
  return `${day} ${date.getDate()} ${month} ${date.getFullYear()}`;
}



