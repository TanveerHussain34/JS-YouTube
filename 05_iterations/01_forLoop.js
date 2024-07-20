// FOR LOOP AND NESTED FOR LOOP

// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
}

// Nested for loop

for (let i = 0; i < 10; i++) {
    const first = i;
    console.log("Outer loop value: " + first)
    for (let j = 0; j < 3; j++) {
        const second = j;
        console.log("Inner loop value: " + second)       
    }
}

// Array printing using for loop

let arr = ["Ali","Raza","Asim","Asad"]
console.log(arr.length)
for (let i = 0; i < arr.length; i++){
    const element = arr[i];
    console.log(element)
}

// Break and Continue in for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(i==5){
        console.log("Detected 5")
        continue;
    }
    if(i==8){
        console.log("Detected 8")
        break;
    }
    console.log(element)
}