function setup(){
    canvas = createCanvas(400, 275);
    canvas.position(425, 225);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 275)
}