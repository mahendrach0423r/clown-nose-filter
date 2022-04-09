 nose_x=" ";
 nose_y=" ";

 function preload()
 {
     clownNose=loadImage("https://i.postimg.cc/BQZLqFdM/Clown-nose-large-removebg-preview.png")
 }


function setup()
{
    canvas= createCanvas(500,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
     posenet = ml5.poseNet(video,modelLoaded)
     posenet.on('pose',gotPoses)
     
}
  function modelLoaded(){
   console.log("posenet intialized")
  }

  function gotPoses(results)

  {
     if (results.length > 0)
     {
         console.log(results)
         nose_x =results[0].pose.nose.x;
         nose_y =results[0].pose.nose.y;
         console.log("nose_x" +results[0].pose.nose.x);
         console.log("nose_y" +results[0].pose.nose.y);


     }
  }

function draw()
{
    image(video,0,0,500,500)
    image(clownNose,nose_x,nose_y,45,45)
}

function take_snapshot(){
 save('jokerface.png')
}











