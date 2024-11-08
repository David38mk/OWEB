let NizaZborovi = ["cat" ,"book", "tree" ,"swim", "apple", "drink", "fast", "gold", "sky", "hope"];
let IzbranZbor = "";
let obidi = 5;
let obid = 0;


function start(){
    obidi = 5;
    obid = 0;
    document.getElementById("attemps").innerText = obidi;
    //document.getElementById("new_game").style.display = "none";
    document.getElementById("guess").value = "";
    
    IzbranZbor = NizaZborovi[Math.floor(Math.random()*NizaZborovi.length)];
    const pomos = IzbranZbor.slice(0,1)+'_'.repeat(IzbranZbor.length-1);

    document.getElementById("word").innerText = `The word beggins with ${pomos}`;
    document.getElementById("hint").innerText = `You have ${obidi} tries`;
}


function ProveriZbor(){
    const guess = document.getElementById("guess").value.toLowerCase();
    if(guess.length != IzbranZbor.length){
        alert(`Enter a word with ${IzbranZbor.length} letters`);
        return;
    }

    obid++;

    if(guess === IzbranZbor){
        alert(`Great job, you guessed the word!!!`);
        document.getElementById("new_game").style.display = "block";
    }else{
        if(obid>=obidi){
            alert(`Sorry you failed!, but you can try again!`);
            document.getElementById("new_game").style.display = "block";
        }else{
            alert(`wrong word, guess again!`);
            document.getElementById("attemps").innerText = obidi - obid;
        }
    }
    document.getElementById("guess").value = "";
}
 

window.addEventListener("load", start,false);
