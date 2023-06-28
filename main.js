nose_x = 0;
nose_y = 0;

function preload()
{
clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup()
{
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
  image(video,0,0,500,500);
  image(clown_nose,nose_x,nose_y,25,25);
}
function take_snapshot()
{
    save("Clown-nose-filter.png");
} 
function modelLoaded()
{
    console.log("Model is Loaded");
}
function gotPoses(results)
{if(results.length > 0)
    {
        console.log(results);
        console.log("nose_x = "+ results[0].pose.nose.x);
        console.log("nose_y = "+ results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x +10;
        nose_y = results[0].pose.nose.y -10;
    }
}
