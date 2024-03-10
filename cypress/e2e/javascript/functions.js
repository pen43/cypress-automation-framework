function simpleFunc() 
{
    console.log("Simple Function");
}

simpleFunc();

function add(a,b)
{
    return(a+b);
}

console.log(add(5,10));

function person()
{
    this.name = "Penn";
    this.type = "Unknown";
}

var_obj = new person();
console.log("Name: " + var_obj.name + ". Type: " + var_obj.type + ". ");

function customPerson(name, type, mood) 
{
    this.name = name;
    this.type = type;
    this.mood = mood;
}

new_person = new customPerson("Cookie", "Food?", "Bitter");
console.log("Name: " + new_person.name + ". Type: " + new_person.type + ". Mood: " + new_person.mood + ".");