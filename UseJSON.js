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

        for (let index = 0; index < responseObject.images.length; index++) {
            //loop through all objects inside the responseobject
            //obtain all information, add it to newcard 'card' and add it to the page
           newCard += '<div class=card>'
            newCard += '<img src="' + responseObject.images[index].Fun + '"/>' 
            newCard += '<button class="BTTN">'
            newCard += '<img src="'+ responseObject.icons[index].Plus+'"class="icon"/>'
            newCard += '</button>'
            newCard += '<div class="secondary_card">'
            newCard += '<p>' + responseObject.thingsToDo
            newCard += '</div>'
             newCard += '</div>'

             newCard += '<div class=card>'
            newCard += '<img src="' + responseObject.images[index].Lodging + '"/>' 
            newCard += '<button class="BTTN">'
            newCard += '<img src="'+ responseObject.icons[index].Plus+'"class="icon"/>'
            newCard += '</button>'
            newCard += '<div class="secondary_card">'
                newCard += '<p>' + responseObject.thingsToDo
            newCard += '</div>'
             newCard += '</div>'

             newCard += '<div class=card>'
            newCard += '<img src="' + responseObject.images[index].Food + '"/>' 
                       newCard += '<button class="BTTN">'
            newCard += '<img src="'+ responseObject.icons[index].Plus+'" class="icon"/>'
            newCard += '</button>'
            newCard += '<div class="secondary_card">'
               newCard += '<p>' + responseObject.thingsToDo
            newCard += '</div>'
             newCard += '</div>'

             newCard += '<div class=card>'
            newCard += '<img src="' + responseObject.images[index].mall + '"/>' 
                        newCard += '<button class="BTTN">'
            newCard += '<img src="'+ responseObject.icons[index].Plus+'" class="icon"/>'
            newCard += '</button>'
            newCard += '<div class="secondary_card">'
            newCard += '<p>' + responseObject.thingsToDo
            newCard += '</div>'
             newCard += '</div>'
             
        }
//add information to the webpage
        document.querySelector('#content').innerHTML = newCard
    }

}
//prepare our request
xhr2.open('GET','./res/cards.json',true)
xhr.open('GET', './res/pictures.json', true)

//send our request
xhr2.send(null)
xhr.send(null)
