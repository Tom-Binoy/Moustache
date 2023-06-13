filterx = 0;
filtery=0;

function preload(){
    clownnose = loadImage("https://i.postimg.cc/pTqzJpJw/download-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    Video =createCapture(VIDEO)
    Video.hide()

    model = ml5.poseNet(Video,modelLoaded);
    model.on('pose',gotPoses);
}

function save(){
    save('clown nose filter.png')
}

function draw(){
    image(Video,0,0,400,400);
    image(clownnose,filterx,filtery,40,40)
}

function modelLoaded(){
    console.log('modelLoaded');
}

function gotPoses(results){
    if(results.length > 0 ){
        filterx= results[0].pose.nose.x-150
        filtery= results[0].pose.nose.y+20;
        console.log('X = '+filterx+' Y = '+filtery)
    }
}