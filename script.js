let person = {
    name: "Ingrid",
    age: 36,
    evaluations: [7, 10, 9]
};

let plants = ['broccoli', 'rucola', 'tomaat'];
plants.push ('komkommer');
plants.push (5);
plants.push (greet = {
    greeting: "hi, ik ben een object" 
});

console.log (person);
console.log (person.name);
console.log (person.age);
console.log (person["name"]);
console.log (person["age"]);
console.log (person.evaluations);

console.log (plants);
console.log (plants.length);
console.log (plants[0]);
console.log (plants[plants.length - 1]);
console.log (greet);