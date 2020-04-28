let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c2 = canvas.getContext('2d');
//let.c = canvas.getContext('2d');


let plusOrMinusX = Math.random() < 0.5 ? -1 : 1; 
let plusOrMinusY = Math.random() < 0.5 ? -1 : 1; 

let xMove = 800; //Math.random() * innerWidth;
let yMove = 450; ////Math.random() * innerHeight;
let counterColor = 0;
let counterRadius = 0;
let counterSpeed = 0;
let color = "black";
let speed = 10 * plusOrMinusX;
let speedY = 10 * plusOrMinusY;
let radius = 400/10;
let makeLarger = radius / 2;
let colors = ["black", "red", "blue", "green"];
let speeds = [10, 1,100,300,4];
let radiusis = [radius,radius + makeLarger,radius + makeLarger * 2,radius * 2 + makeLarger,radius * 3,radius *4];
// Speed Control
setInterval(function(){
    counterSpeed += 1;
    counterSpeed = counterSpeed % speeds.length;

    speed = speeds[counterSpeed];
    
}, 30000);

// Color Control
setInterval(function(){
    counterColor += 1;
    counterColor = counterColor % colors.length;
    color = colors[counterColor];
    
},7200);


//Radius Control
setInterval(function(){
    counterRadius += 1;
    counterRadius = counterRadius % radiusis.length;

    radius = radiusis[counterRadius];
    radius = radius- 10;
}, 5000);


document.addEventListener('mousemove', xyMouseColor );
function xyMouseColor(obj) {
    let yAxis = obj.y; 
    if (yAxis< 42 || yAxis>840) {
        // counterColor += 1;
        // counterColor = counterColor % colors.length;
        // color = colors[counterColor];
        // color = "white";
    } 
    else {
        // counterColor += 1;
        // counterColor = counterColor % colors.length;
        // color = colors[counterColor];
        // color = "black";
        
        animate();
    } 
    console.log(yAxis);
}

animate();
function animate(){
    requestAnimationFrame(animate);
    //c2.clearRect(0, 0, innerWidth, innerHeight);
    let randomRadius =Math.floor(Math.random() * radius) ;
    //let randomRadius = 10;
    c2.beginPath();
    c2.arc(xMove, yMove, randomRadius , 0, Math.PI * 2, false);
    c2.strokeStyle = color;
    c2.stroke();
    c2.fill();
    if (xMove + (randomRadius - 10) > innerWidth || xMove - (randomRadius - 10) < 0){
        speed  = - speed;
    } 
    if (yMove + (randomRadius - 10) > innerHeight || yMove - (randomRadius - 10) < 0){
        speedY  = - speedY;
    } 
    
    xMove += speed;
  
    yMove += speedY;
   
    
}
animate1();









