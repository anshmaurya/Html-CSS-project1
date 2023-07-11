function manipulateString(string, call){
    const manipulatedString =string.toUpperCase();
    call(manipulatedString);
}
function logString(manipulatedString){
    console.log(`The manipulated string is: ${manipulatedString}`);
}
manipulateString("along with the manipulated string or the new string to the console" , logString);