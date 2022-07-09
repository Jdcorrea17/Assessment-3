let restaurants = ["Bravis", "Pablo's", "Turtle's", "Wampach's"]


let randomRes = document.querySelector('#restaurants')

randomRes.addEventListener('click', function() {
   const random = Math.floor(Math.random() * restaurants.length)
    alert(restaurants[random])
})
