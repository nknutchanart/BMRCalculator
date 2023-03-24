function toBmr(height, weight, age, gender) 
{

    let M = 66; 
    let MF = 66; 
    let F = 665; 
    let bmr;
    if (gender === "male") {
        bmr = M + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else if (gender === "female") {
        bmr = F + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    } else if (gender === "none") {
        alert ("โปรดระบุเพศ")
    }else {
        return "0";
    }

    bmr = Math.floor(bmr)
    // console.log(bmr)
    // alert("BMR (Basal Metabolic Rate) พลังงานที่จำเป็นพื้นฐานในการมีชีวิต " + bmr + " กิโลแคลอรี่")

    if(!isNaN(bmr)){
	    document.getElementById("bmrResult").innerHTML = bmr +" กิโลแคลอรี่";
    }
    

    return bmr;
}


function toCalorie(bmr, activity)
{

    if (bmr === '' || activity === '' ) {
        return;
    }

    let calories;


    if (activity == 0){
        alert ("โปรดระบุความถี่ในการออกกำลังกาย")
    }else if(activity == 1.2){
        calories = bmr * 1.2
    }else if(activity == 1.375){
        calories = bmr * 1.375
    }else if(activity == 1.55){
        calories = bmr * 1.55
    }else if(activity == 1.725){
        calories = bmr * 1.725
    }else if(activity == 1.9){
        calories = bmr * 1.9
    }else {
        return "0";
    }


    calories = Math.floor(calories)

    // console.log(calories)
    // alert("TDEE (Total Daily Energy Expenditure) พลังงานที่คุณใช้ในแต่ละวัน " + calories + " กิโลแคลอรี่")
    
    console.log(typeof calories)



    if(!isNaN(calories)){
    document.getElementById("CalorieResult").innerHTML = calories + " กิโลแคลอรี่";
    }
    
    return calories;
    
}


// function toCaloriee(toBmr,toCalorie)
// {
//     document.getElementById("bmrResult").innerHTML = toBmr +" กิโลแคลอรี่";
//     document.getElementById("CalorieResult").innerHTML = toCalorie + " กิโลแคลอรี่";
// }
