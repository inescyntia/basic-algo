function trafficLight(color) {
    let answer = "";
    
    switch(color) {
        case "red":
            answer = "stop";
            break;
        case "orange":
            answer = "carefull";
            break;
        case "green":
            answer = "go";
            break;
        case "blue":
        case "purple":
        case "axew":
            answer = "color invalid";
            break;
        default:
            answer = "please insert color";
            break;
    }
    return answer;
}

// TEST CASE
console.log(trafficLight("red")) // stop
console.log(trafficLight("orange")) // careful
console.log(trafficLight("green")) // go
console.log(trafficLight("blue")) // color invalid
console.log(trafficLight("purple")) // color invalid
console.log(trafficLight("axew")) // color invalid
console.log(trafficLight("")) // please insert color