var object = {
    name: "bob",
    age: 25
};

class Person{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(new Person("Billy", 30));