//create an xhttprequest object 1
let xhr = new XMLHttpRequest
let xhr2 = new XMLHttpRequest
let times

//when state of request changes call the onload function 2
xhr.onload = function () {

    //if server response is 200("ok"), open the connection to get data
    if (xhr.status === 200) {

        const  responseObject = JSON.parse(xhr.responseText)
        //create an empry string to hold thhe  card imnformation
        let newCard = ''

        for (let index = 0; index < responseObject.events.length; index++) {
            //loop through all objects inside the responseobject
            //obtain all information, add it to newcard 'card' and add it to the page
            newCard += '<div class="card">'
            newCard += '<img src="' + responseObject.things[index].map + '"'
            newCard += 'alt="' + responseObject.events[index].location + '"/>'
            newCard += '<p><b>' + responseObject.events[index].location + "<br>"
            newCard += responseObject.events[index].date + "</b></p>"

            //add workshop ttilrd and times for each location
            let loc = Object.keys(times)[index]
            newCard +="<p><b>itinerary"

            for( let i2=0; i2<times[loc].length; i2++){
                newCard += "<li>"+times[loc[i2].time]+ "&nbsp; &nbsp;"
                   newCard += "<li>"+times[loc][i2].title+ "</b></p>"
                   newCard += "</li>"
            }
            newCard += '</div>'
        }
//add information to the webpage
        document.querySelector('#content').innerHTML = newCard
    }

}


xhr2.onload = function(){
if(xhr2.status === 200){
times = (JSON.parse(xhr2.responseText))
}
else{
    console.log("the timetable could not be loaded")
}
}
//prepare our request
xhr2.open('GET','./../data/example.json',true)
xhr.open('GET', './../data/data.json', true)

//send our request
xhr2.send(null)
xhr.send(null)
