var amp;
function setup() {
    createCanvas(windowWidth, 400);
    mySound = loadSound('../tyler.mp3', loaded);
    sliderVolume = createSlider(0, 1, 0, .01);
    sliderSpeed = createSlider(0, 2, 1, .01);
    sliderPan = createSlider(-1, 1, 0, .01);
    buttonPlay = createButton("PLAY");
    buttonPlay.mousePressed(togglePlaying);
    buttonStop = createButton("STOP");
    buttonStop.mousePressed(toggleStop);
    
    amp = new p5.Amplitude();
    
}

function togglePlaying(){
    if(!mySound.isPlaying()){
        mySound.play();
        button.html("PAUSE");
    } 
    if(mySound.isPlaying()){
        mySound.pause();
        button.html("PLAY");
    }
}

function toggleStop(){
    if(mySound.isPlaying()){
        mySound.stop();
    }
    mySound.stop();
}

function loaded(){
}

function draw() {
	background(0);
    mySound.setVolume(sliderVolume.value());
    mySound.rate(sliderSpeed.value());
    mySound.pan(sliderPan.value());
    
    var vol = amp.getLevel();
    var circleRemap = map(vol, 0, 0.3, 50, 300);
    
    if (vol > .1){
        background(255, 10, 200);
    } else{
        background(0);
    }
    
	strokeWeight(30);
	stroke(255);
	ellipseMode(CENTER);
	fill(0);
	ellipse(windowWidth*.25, windowHeight*.25, circleRemap, circleRemap);
	ellipse(windowWidth*.75, windowHeight*.25, circleRemap);

	strokeWeight(10);
	rectMode(CENTER);
	stroke(200);
	fill(240, 50, 50);
	rect(windowWidth/2, windowHeight/2, 300, 70);

	strokeWeight(30);
	stroke(5, 0, 240);
	line(windowWidth*.25, windowHeight*.28, windowWidth*.25, windowHeight*.75);
	line(windowWidth*.75, windowHeight*.28, windowWidth*.75, windowHeight*.75);

	strokeWeight(30);
	stroke(100);
	line(windowWidth*.15, windowHeight*.2, windowWidth*.3, windowHeight*.1);
	line(windowWidth*.85, windowHeight*.2, windowWidth*.7, windowHeight*.1);
}