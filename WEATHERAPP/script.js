function populate(city){
    let cityTemp=city.main.temp;
    let cityFeelsLike=city.main.feels_like;
    let country=city.sys.country;
    let cityNamein=city.name;
    let main=city.weather[0].main;
    let html_data=`<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">COUNTRY:${country}</h5>
</div>
<li class="list-group-item">CITY:${cityNamein}</li>
<ul class="list-group list-group-flush">
<li class="list-group-item">TEMPERATURE:${cityTemp}</li>
<li class="list-group-item">FEELS LIKE:${cityFeelsLike}</li>
<li class="list-group-item">CLOUDY:${main}</li>
</ul>
</div>`
result.innerHTML=html_data;

}
function findWeather() {
    let cityName = city_name.value;
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=06c688ad061f7b259ec6a0e585682654&units=metric`;
    fetch(url).then(res => res.json()).then(data => populate(data))
}