var surfData;
var dataPoint;
var index=0;
function setup() {
  loadJSON('sample.json', gotData);
  var canvas = createCanvas(700, 700);
  canvas.parent("memes");
  frameRate(15);
}
function gotData(data){
  surfData=data;
}
function draw(){
  background(0);
  translate(width/2,height/2);
  if(surfData){
    dataPoint = surfData[index];
  }
  fill(255);
  if(surfData){
  ellipse(dataPoint.x*20,dataPoint.y*20,dataPoint.z*10,dataPoint.z*10);
  index++;
    if(index==surfData.length){
      index=0;
    }
  }
}
