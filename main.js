noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup()
{

    video = createCapture(VIDEO);
    video.size(500, 510);
    video.position(50, 150);

    canvas = createCanvas(550, 510);
    canvas.position(550, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function modelLoaded()
{
    console.log("Model Loaded");
}

function draw()
{
    background("#00ff00");
    fill("#ffff00");
    stroke("black");
    square(noseX, noseY, difference);
    document.getElementById("square_sides").innerHTML = "width and height of the square is-"+difference+"px";
}

function gotPoses(results)
{
    if(results.length > 0)
    {
       console.log(results);
       
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;
       console.log("noseX ="+ noseX+ "noseY = "+ noseY);

       rightwristX = results[0].pose.rightWrist.x;
       leftwristX = results[0].pose.leftWrist.x;
       console.log("rightwristX ="+ rightwristX+ "leftwristX ="+ leftwristX);

       difference = floor(leftwristX - rightwristX);

    }

}


