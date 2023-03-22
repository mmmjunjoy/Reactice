

const api_key = "241cc5cf6c965194cc774ce1566dcca4";



function on(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat );
    console.log(lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        console.log(data.name,data.weather[0].main)
    } );


}


function error(){
    alert('cant find you');

}


navigator.geolocation.getCurrentPosition(on,error);