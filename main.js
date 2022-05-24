//https://teachablemachine.withgoogle.com/models/UPQDXOkQG/model.json
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/UPQDXOkQG/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);   
}
function gotResults(error, results){
    var dog = 0;
        var cat = 0;
        var lion = 0;
        var cow = 0;
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I Can Hear - " + results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_count_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        
        img = document.getElementById("noise_detected_image");

        if (results[0].label == "Barking"){
            img.src = "dog.jpg";
            dog = dog + 1;
            document.getElementById("result_count_label").innerHTML = "Detected Dog - " + dog + "    Detected Cat - " + cat + "    Detected Lion - " + lion + "    Detected Cow - " + cow;
        }
        else if(results[0].label == "Meowing"){
            img.src = "cat.jpg";
            cat = cat + 1;
            document.getElementById("result_count_label").innerHTML = "Detected Dog - " + dog + "    Detected Cat - " + cat + "    Detected Lion - " + lion + "    Detected Cow - " + cow;
        }
        else if(results[0].label == "Roaring"){
            img.src = "lion.jpg";
            lion = lion + 1;
            document.getElementById("result_count_label").innerHTML = "Detected Dog - " + dog + "    Detected Cat - " + cat + "    Detected Lion - " + lion + "    Detected Cow - " + cow;
        }
        else if(results[0].label == "Mooing"){
            img.src = "cow.png";
            cow = cow + 1;
            document.getElementById("result_count_label").innerHTML = "Detected Dog - " + dog + "    Detected Cat - " + cat + "    Detected Lion - " + lion + "    Detected Cow - " + cow;
        }
        else{
            img.src = "listen.gif";
        }
    }
}