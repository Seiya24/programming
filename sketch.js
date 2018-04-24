var diam1=0;
//The setup function only happens once
function setup() {
	createCanvas(1000, 1000); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background("#196F3D"); //an RGB color for the canvas' background
  stroke(247,249,249); // an RGB color for the circle's border
  fill(255,255,0,250); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(500,500,diam1,diam1);
  diam1=diam1+5;// center of canvas, 20px dia
  fill(255,255,200);
  ellipse(random(width),random(height),20,20);
  textSize(50);
  textFont("Times New Roman");
  fill(255,255,0);
  textStyle("Italic");
  textAlign("CENTER")
  text("Hola",30,900);

}