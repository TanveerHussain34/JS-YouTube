// Immidiately Invoked Function Expression IIFE
// Sometimes functions can be affected by the pollution of global scope and we use IIFE to remain safe from that pollution

(function myFunc(){ // named IIFE
    console.log("DB CONNECTED")
})(); // Semicolon is must when to separate two IIFEs otherwise it will cause error

( () => { // unnamed IIFE
    console.log("DATABASE CONNECTED")
})();

( (devName) => { // parametric IIFE 
    console.log(`DATABASE CONNECTED by ${devName}`)
})("Tanveer Hussain")