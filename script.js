function  calculateBMI(){
    let weight = parseInt(document.getElementById("weight").value)
    let height = parseInt(document.getElementById("height").value) 



    height = height / 100;
    let h2 = height * height;

    let bmi= weight/h2;



    if(bmi < 18.5){
        $("#result").text("You are UnderWeight");
    }else if(bmi > 18.4 && bmi < 25){
        $("#result").text("You are Healthy Weight");
    }else if(bmi > 24.9 && bmi < 30){
        $("#result").text("You are OverWeight");
    }else{
        $("#result").text("You are Obesity");
    }
}

function reload(){
    window.location.reload();
}