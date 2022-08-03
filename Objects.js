let house={
    name: "Gift",
    color: "Red"
}
console.log(house)
let cat={
    name: "Charlie",
    walk(){
        console.log("I am walking")
    },
    food(){
        console.log("Milk")
    },
    identifyYourSelf(){
        console.log("I am " + this.name)
    },
    showYourself(){
        console.log(this)
    },
    /*setAge(_age){
        cat.age =_age
    }*/
    setAge(age){
        //cat.age = a
        this.age = age
    },
    getAge(){
        //if cat age is set or defined or has a value
        // if (this.age){
        //     return this.age
        // }
        //console.log("No age for this cat")
        //this.age=400
        // this.setAge(200)

        // return this.age
        let catHasAge =this.age
        if (catHasAge){
            return this.age
        }
        //his.age(400)
        this.setAge(400)

        return this.age

    }
}
cat.walk()
cat.food()
cat.identifyYourSelf()
cat.showYourself()
// cat.setAge(200)
console.log(cat)
let setAge=cat.getAge()
console.log(setAge)



console.log(cat.hasOwnProperty("age"))
console.log(cat.hasOwnProperty("hand"))
//keys
let keys = Object.keys(cat)
console.log(keys)
//values
let values = Object.values(cat)
console.log(values)
//entries
let entries = Object.entries(cat)
console.log(entries)