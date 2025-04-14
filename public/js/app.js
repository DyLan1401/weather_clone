let search = document.querySelector('.search')
let city = document.querySelector('.city')
let country = document.querySelector('.country')
let value = document.querySelector('.value')
let shortDecs = document.querySelector('.short-decs')
let vibility = document.querySelector('.visibility span')
let wind = document.querySelector('.wind span')
let sun = document.querySelector('.sun span')
let content = document.querySelector('.content')
let time =document.querySelector(".time");


async function changWeatherUI(){
  let capitalSearch =  search.value.trim()
let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=160e76ca42c5c5e5ba5f0d3bf65257a0`

let data = await fetch(urlAPI).then(res=>res.json())
if(data.cod == 200){
    content.classList.remove('.hide')
    city.innerText = data.name
country.innerText = data.sys.country
vibility.innerText = data.visibility + 'm'
wind.innerText = data.wind.speed +'m/s'
sun.innerText = data.main.humidity +'%'
let temp = Math.round((data.main.temp -273.15))
value.innerText = temp
shortDecs.innerText = data.weather[0]? data.weather[0].main :''
time.innerText = new Date().toLocaleString('vi')

 let body = document.querySelector("body")
 temp < 19 ?body.setInterval(('class','cold')) :  body.setInterval(('class','hot'))



}
else{

    content.classList.add('.hide')

}
}


search.addEventListener('keypress',function(e){
    if(e.code === 'Enter'){
        changWeatherUI()
    }

})
