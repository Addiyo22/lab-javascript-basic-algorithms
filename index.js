// Iteration 1: Names and Input

    let hacker1 = "Doha";
    let hacker2 = "Aditya";

    console.log(`The drivers name is ${hacker1}`);
    console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

    if(hacker1.length > hacker2.length){
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    }
    else if(hacker2.length === hacker1.length){
        console.log(`Wow, we both have equally long names, ${hacker2.length} characters!`);
    }
    else{
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters. `)
    }

// Iteration 3: Loops

    //3.1
    let space = "";
    for(let i = 0; i < hacker1.length; i++){
        space += hacker1[i].toUpperCase() + " ";
    }
    console.log(space);

    //3.2
    let rev = '';
    for(let i = hacker2.length - 1; i >= 0; i--){
        rev += hacker2[i];
    }
    console.log(rev);

    //3.3
    const lexico = [hacker1,hacker2];
    lexico.sort((a,b) => a.localeCompare(b));
    if(lexico[0] === lexico[1]){
        console.log('What?! You both have the same name?');
    }
    else if(lexico[0] === hacker1){
    console.log("The driver's name goes first");
    }
    else{
        console.log('Yo, the navigator goes first, definitely');
    }






