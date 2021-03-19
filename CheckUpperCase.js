//A function will Check if a string start with UpperCase Letter to return Boolean Value
const isUpperCaseCheck = (word)=>{
    //Evaluating the first word 
    const result = word.charAt(0) === word.charAt(0).toUpperCase();
    console.log(result)
}
//Executing the function here
isUpperCaseCheck("gh");  