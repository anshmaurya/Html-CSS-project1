const person ={
    FirstName: "Ansh",
    LastName: "Maurya",
    Age: 19
};
function AgeInDays(person , call){
    const fullName = `${person.FirstName} ${person.LastName}`;
    const AgeInDays = person.Age * 365;
    call(fullName, AgeInDays);
};
function log (fullName,AgeInDays){
    console.log(`The person's full name is ${fullName} and their age in days is ${AgeInDays}`);
};
AgeInDays(person,log)