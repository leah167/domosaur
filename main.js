// Variables
const spanMessWithMe = document.querySelector('span.mess-with-me');
const newColor = document.querySelector('p.mess-with-me');
const hide = document.getElementById('hide-me');
const triceratops = document.querySelector('#triceratops');
const feathers = document.querySelector('#feathers');
const toggleButton = document.querySelector('#toggle');
const dinosRow = document.querySelector('#row');
let toggle = false
const biggify = document.querySelector('#biggify');

// ## And Now, Some Warmup Challenges

spanMessWithMe.style.fontSize = '40px';   //1
    
newColor.style.backgroundColor = 'green'; //2
    
hide.style.display = "none";              //3
    
triceratops.style.width = '324px';        //4

// ## Event Listener Challenges

spanMessWithMe.addEventListener('click', function() {    //1
    spanMessWithMe.style.color = 'orange';
    
})

triceratops.addEventListener('click', function() {       //2
    triceratops.style.border = '1px solid red'
})

feathers.addEventListener('click', function() {          //3
    feathers.style.opacity = '0.5';
    
})

toggleButton.addEventListener('click', function() {      //4
    if (toggle === false) {
        dinosRow.style.backgroundColor = 'aquamarine'
        toggle = true
    } else {
        dinosRow.style.backgroundColor = 'white'         //stretch goal 1
        toggle = false
    }
    
})

biggify.addEventListener('mouseover', function() {        //5
    biggify.style.width = "200px";
})

biggify.addEventListener('mouseout', function() {
    biggify.style.width = "162px"                         //stretch goal 2 (found original size in elements and styles)
})








