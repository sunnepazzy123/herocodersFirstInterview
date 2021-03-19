//This Function Calculate the Area of a circle (A = π r²)
const areaOfCircle = (rad)=>{

    const PIE = 3.142 //Pie is Constant Value
    const area = PIE * Math.pow(rad, 2)
    console.log(`The Area of this circle is ${area}`);

}

//Executing the function here
areaOfCircle(5371);
