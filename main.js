prediction_1=""
prediction_2=""

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png", 
    png_quality: 90
});

var camera= document.getElementById("camera");
Webcam.attach(camera);

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id= "captured_img" src="'+data_uri+'">'

    }
    );
}

console.log("ml5version:", ml5.version);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wDEFVhY6W/model.json", model_loaded);

function model_loaded(){

console.log("model is loaded!")
};

function speak(){
    var synth= window.speechSynthesis;
    data_1="The first prediction is:"+ prediction_1;
    data_2="The second prediction is:"+ prediction_2;
    var utter= new SpeechSynthesisUtterance( data_1 + data_2 );
    synth.speak(utter);
}


