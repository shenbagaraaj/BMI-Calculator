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

    let showsuggestion_low = h2 * 18.4;
    let showsuggestion_high = h2 * 25;

    $("#suggested_weight").text("Your weight should be in the range of" + showsuggestion_low + "and" + showsuggestion_high);
}

function reload(){
    window.location.reload();
}
