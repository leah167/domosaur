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

spanMessWithMe.style.fontSize = '40px';
    
newColor.style.backgroundColor = 'green';
    
hide.style.display = "none";
    
triceratops.style.width = '324px';

// ## Event Listener Challenges

spanMessWithMe.addEventListener('click', function() {
    spanMessWithMe.style.color = 'orange';
    
})

triceratops.addEventListener('click', function() {
    triceratops.style.border = '1px solid red'
})

feathers.addEventListener('click', function() {
    feathers.style.opacity = '0.5';
    
})

toggleButton.addEventListener('click', function() {
    if (toggle === false) {
        dinosRow.style.backgroundColor = 'aquamarine'
        toggle = true
    } else {
        dinosRow.style.backgroundColor = 'white' //stretch goal
        toggle = false
    }
    
})

biggify.addEventListener('mouseover', function() {
    biggify.style.width = "200px";
})

biggify.addEventListener('mouseout', function() {
    biggify.style.width = "162px" //stretch goal (found original size in elements)
})








