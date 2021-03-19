module.exports = {

    //This Function Calculate the Area of a circle (A = π r²)
 areaOfCircle : function(rad){

    const PIE = 3.142 //Pie is Constant Value
    const area = PIE * Math.pow(rad, 2)
    return(`The Area of this circle is ${area}`);

},


//A function will Check if a string start with UpperCase Letter to return Boolean Value
 isUpperCaseCheck : function (word){
    //Evaluating the first word 
    const result = word.charAt(0) === word.charAt(0).toUpperCase();
    return(result)
}


}


