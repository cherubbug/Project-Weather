(function () {

    function networkReq(city) {
        var btn = document.getElementById('btn');
        var key = '&appid=7039b29da8aca6ed2209e5afa97b7b74'
        var cityname = city

        fetch('https://api.openweathermap.org/data/2.5/find?q=' + city + key)
            .then(function (data) {
                console.log(data)
                data.json()
                    .then(function (data) {
                        var obj = data.list
                        // console.log(data.list)
                        display(obj)
                    })


            })
    }

    function display(obj) {

        var temp1 = obj[0].main.temp - 273.15;
        // console.log(temp1.toFixed(2))
        var temp = document.createTextNode("Temprature : "+temp1.toFixed(2)+" °C")
        // console.log(temp)
        var pressure = document.createTextNode("Pressure : "+obj[0].main.pressure)
        // console.log(pressure)
        var humidity = document.createTextNode("Humidity : "+obj[0].main.humidity)
        // console.log(humidity)
        var lat = document.createTextNode("Latitude : "+obj[0].coord.lat)
        // console.log(lat)
        var lang = document.createTextNode("Longitude : "+obj[0].coord.lon)
        // console.log(lang)
        var name = document.createTextNode("Place : "+obj[0].name)
        // console.log(name)
        var description = document.createTextNode("Description : "+obj[0].weather[0].description)
        // console.log(description)
        var iconcode = obj[0].weather[0].icon
        // console.log(iconcode)

        var img = document.createElement('img')
        img.src = "http://openweathermap.org/img/w/" + iconcode + ".png";

        var conatiner = document.getElementById('conatiner')
        console.log(conatiner)

        var innerdiv = document.createElement('div')
        innerdiv.setAttribute("id", "in")

        innerdiv.appendChild(img)
        innerdiv.appendChild(document.createElement('br'))
        innerdiv.appendChild(name)
        innerdiv.appendChild(document.createElement('br'))
        innerdiv.appendChild(temp)

        var hr = document.createElement('hr')
        conatiner.appendChild(innerdiv)
        conatiner.appendChild(hr)

        var innerdiv2 = document.createElement('div')
        innerdiv2.setAttribute("id", "in2")

        var ulist = document.createElement('ul')
        var list1 = document.createElement('li')
        list1.appendChild(lat)
        var list2 = document.createElement('li')
        list2.appendChild(lang)
        var list3 = document.createElement('li')
        list3.appendChild(pressure)
        var list4 = document.createElement('li')
        list4.appendChild(humidity)
        var list5 = document.createElement('li')
        list5.appendChild(description)
     
        ulist.appendChild(list1)
        ulist.appendChild(list2)
        ulist.appendChild(list3)
        ulist.appendChild(list4)
        ulist.appendChild(list5)
    

        
        innerdiv2.appendChild(ulist)
        innerdiv2.appendChild(document.createElement('hr'))
        conatiner.appendChild(document.createElement('hr'))
        conatiner.appendChild(innerdiv2)

            }

    // button click
    btn.onclick = function () {
        var city = document.getElementById('city').value
        console.log(city)
        networkReq(city)
    }
})();