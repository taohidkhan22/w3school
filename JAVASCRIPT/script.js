
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return person.firstName + " " + person.lastName;
    }
  };
document.getElementById('demo').innerHTML=person.fullName();
document.getElementById('demo1').innerHTML= person["firstName"]+ " "+ person["id"];
console.log(person.fullName());