noseX=0;
noseY=0;
function preload(){
    mustache=loadImage('https://i.postimg.cc/h43nvzwp/m.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-35;
        noseY=results[0].pose.nose.y;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}
function modelLoaded(){
console.log("model loaded");
}
function draw(){
image(video,0,0,300,300);
image(mustache,noseX,noseY,80,30);
}
function take_snapshot(){
    save('myFilterImage.png');
}