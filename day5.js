//1st question
var car={brand:'Toyota',model:'corolla',year:'2020'};
for(names in car)
{
    console.log(`${names}:${car[names].toUpperCase()}`);
}

//2nd question
var numbers=[1,2,3,4,5];
for(i in numbers)
{
    console.log(`${numbers[i]}-HI`);
}

//3rd question
var fruits=['Apple','Banana','Cherry','Date'];
for(i in fruits)
{
    console.log(`${i}-${fruits[i].toUpperCase()}`)
}

//4th question
var obj={
    name:'John',age:'30',address:{
        city:'Los Angeles',state:'CA'
    }}
    obj.address.city="San Francisco";
    console.log(obj);

//5th question
var car={
    brand:'Toyota',
    model:'Camry',
    year:2020
};
car.model='Corolla',
car.year=2022
console.log(car);

//6th question
var receipe={name:'pasta',servings:'2',ingredients:['noodles','sauce']};
receipe.ingredients[2]='Cheese';
console.log(receipe);