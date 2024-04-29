    
//  6. Explain the difference between Object.freeze() vs const? 

// const
const first = "hello";
first = "second"

console.log(first);


// Object.freeze()

let obj = {
    name: "Javascript..."
};
Object.freeze(obj);
obj.name = "hello"
console.log(obj);
