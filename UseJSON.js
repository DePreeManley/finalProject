//create an xhttprequest object 1
let xhr = new XMLHttpRequest
let xhr2 = new XMLHttpRequest
let info

//when state of request changes call the onload function 2
xhr.onload = function () {

    //if server response is 200("ok"), open the connection to get data
    if (xhr.status === 200) {

        const responseObject = JSON.parse(xhr.responseText)
        //create an empry string to hold thhe  card imnformation
        let newCard = ''
        for (let index = 0; index < responseObject.images.length; index++) {
            //loop through all objects inside the responseobject
            //obtain all information, add it to newcard 'card' and add it to the page
            newCard += '<div class=card>'
            newCard += '<h2>' + info.thingsToDo[0].title + '</h2>'
            newCard += '<img src="' + responseObject.images[index].Fun + '"/>'
            newCard += '<button class="BTTN">'
            newCard += '<img src="' + responseObject.icons[index].Plus + '"class="icon"/>'
            newCard += '</button>'
            newCard += '<div class="secondary_card">'
            newCard += '<p>' + info.thingsToDo[0].name + '</p>'
            newCard += '<p>' + info.thingsToDo[0].price + '</p>'
            newCard += '<p>' + info.thingsToDo[0].adress + '</p>'

            newCard += '<p>' + info.thingsToDo[2].name + '</p>'
            newCard += '<p>' + info.thingsToDo[2].price + '</p>'
            newCard += '<p>' + info.thingsToDo[2].adress
            newCard += '<button class="BTTN">'
            newCard += '<img src="' + responseObject.icons[index].TTS + '"class="TTS"/>'
            newCard += '<audio src="./res/ThingsToDo.mp3">'
            newCard += '</button>'
            newCard += '</p>'
            newCard += '</div>'
            newCard += '</div>'

            newCard += '<div class=card>'
            newCard += '<h2>' + info.Hotels[0].title + '</h2>'
            newCard += '<img src="' + responseObject.images[index].Lodging + '"/>'
            newCard += '<button class="BTTN">'
            newCard += '<img src="' + responseObject.icons[index].Plus + '"class="icon"/>'
            newCard += '</button>'
            newCard += '<div class="secondary_card">'
            newCard += '<p>' + info.Hotels[0].name + '</p>'
            newCard += '<p>' + info.Hotels[0].stars + '</p>'
            newCard += '<p>' + info.Hotels[0].adress + '</p>'

            newCard += '<p>' + info.Hotels[2].name + '</p>'
            newCard += '<p>' + info.Hotels[2].stars + '</p>'
            newCard += '<p>' + info.Hotels[2].adress
            newCard += '<button class="BTTN">'
            newCard += '<img src="' + responseObject.icons[index].TTS + '"class="TTS"/>'
            newCard += '<audio src="./res/Lodging.mp3">'
            newCard += '</button>'
            newCard += '</p>'
            newCard += '</div>'
            newCard += '</div>'

            newCard += '<div class=card>'
            newCard += '<h2>' + info.PlacesToEat[0].title + '</h2>'
            newCard += '<img src="' + responseObject.images[index].Food + '"/>'
            newCard += '<button class="BTTN">'
            newCard += '<img src="' + responseObject.icons[index].Plus + '" class="icon"/>'
            newCard += '</button>'
            newCard += '<div class="secondary_card">'
            newCard += '<p>' + info.PlacesToEat[0].name + '</p>'
            newCard += '<p>' + info.PlacesToEat[0].price + '</p>'
            newCard += '<p>' + info.PlacesToEat[0].adress + '</p>'
            newCard += '<p>' + info.PlacesToEat[0].stars + '</p>'

            newCard += '<p>' + info.PlacesToEat[2].name + '</p>'
            newCard += '<p>' + info.PlacesToEat[2].price + '</p>'
            newCard += '<p>' + info.PlacesToEat[2].adress + '</p>'
            newCard += '<p>' + info.PlacesToEat[2].stars
            newCard += '<button class="BTTN">'
            newCard += '<img src="' + responseObject.icons[index].TTS + '"class="TTS"/>'
            newCard += '<audio src="./res/PlacesToEat.mp3">'
            newCard += '</button>'
            newCard += '</p>'
            newCard += '</div>'
            newCard += '</div>'

            newCard += '<div class=card>'
            newCard += '<h2>' + info.Shopping[0].title + '</h2>'
            newCard += '<img src="' + responseObject.images[index].mall + '"/>'
            newCard += '<button class="BTTN">'
            newCard += '<img src="' + responseObject.icons[index].Plus + '" class="icon"/>'
            newCard += '</button>'
            newCard += '<div class="secondary_card">'
            newCard += '<p>' + info.Shopping[0].name + '</p>'
            newCard += '<p>' + info.Shopping[0].adress + '</p>'
            newCard += '<p>' + info.Shopping[0].rating + '</p>'
            newCard += '<p>' + info.Shopping[0].type + '</p>'

            newCard += '<p>' + info.Shopping[2].name + '</p>'
            newCard += '<p>' + info.Shopping[2].adress + '</p>'
            newCard += '<p>' + info.Shopping[2].rating + '</p>'
            newCard += '<p>' + info.Shopping[2].type
            newCard += '<button class="BTTN">'
            newCard += '<img src="' + responseObject.icons[index].TTS + '"class="TTS"/>'
            newCard += '<audio src="./res/Shopping.mp3">'
            newCard += '</button>'
            newCard += '</p>'
            newCard += '</div>'
            newCard += '</div>'

        }
        //add information to the webpage
        document.querySelector('#content').innerHTML = newCard
    }
}

xhr2.onload = function () {
    if (xhr2.status === 200) {
        info = JSON.parse(xhr2.responseText)
    }
}

//prepare our request
xhr2.open('GET', './res/cards.json', true)
xhr.open('GET', './res/pictures.json', true)

//send our request
xhr2.send(null)
xhr.send(null)
