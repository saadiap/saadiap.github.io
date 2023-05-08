 function function1() {
    document.querySelector('body').style.backgroundImage='linear-gradient(to right, red, yellow, green)';
}
var x = document.querySelector('body').style;
function function2() {
    x.backgroundImage='linear-gradient(to right, blue, white, blue, white, blue)';
}
function function3() {
    x.backgroundImage='linear-gradient(to right, red, white, blue)';
}
document.getElementByld('button5').addEventListener('click', function3);
var y = document.getElementByld('header');
function getBigger() {
    y.style.fontSize='100px';
    y.style.color='purple';
}
function getSmaller() {
    y.style.fontSize='50px'
    y.style.color='orange';
}
function changeText() {
    y.innerHTML='My Awesome Website';
    y.style.color='green';
}
y.addEventListener('mouseover',getBigger);
y.addEventListener('mouseout', getSmaller);
y.addEventListener('click',changeText); 
