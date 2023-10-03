function setup() {
    createCanvas(700, 700);
    background("black");
  }
  
  function draw() {
    stroke("red");
    fill("black")
    
    if(mouseIsPressed)
    rect(mouseX, mouseY, 30, 30);
  }