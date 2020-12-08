
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne= document.querySelector('#message-1')
const messageTwo= document.querySelector('#message-2')
const picOne= document.querySelector('#pic-1')


weatherForm.addEventListener('submit', (e) =>{             //e = event
    e.preventDefault()
    const location = search.value

    messageOne.textContent= 'Loading...'
    messageTwo.textContent= ''
    picOne.src=''

    fetch('/weather?address='+location).then((response) =>{
        response.json().then((data) =>{
            if(data.error){
                messageOne.textContent = data.error
            }else{
                picOne.src= data.pic
                messageOne.textContent= data.location
                messageTwo.textContent= data.forecast
            }
        })
    })
})
