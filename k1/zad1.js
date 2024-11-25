var broj;
var numTries = 5;

function start(){
    document.getElementById("broj").value = "";
    broj = Math.floor(Math.random()*10)+1;
    numTries=5;

    const pogodoci = document.getElementById("pogodoci");
    pogodoci.style.display = "none";
    pogodoci.innerHTML = "";
}

function ProveriBroj(){
    var brojce = document.getElementById("broj").value;
    brojce = parseInt(brojce);
    if(brojce <0 || brojce >10){
        window.alert("Vnesovte nevaliden broj, obidete se povtorno");
        document.getElementById("broj").value="";
        return;
    }else{
        if(broj==brojce){
            var pogodok = 5-numTries;
            window.alert("Go pogodivte brojot so "+ pogodok+" pogodoci");
            start();
        }else{
            if(numTries>1){
            numTries--;
            document.getElementById("pogodoci").style.display="block";
            document.getElementById("pogodoci").innerHTML="Imate uste "+numTries+" pogodoci";
            document.getElementById("broj").value="";
            }else{
                window.alert("Ne euspeavte da go pogodite brojot");
                start();
            }
            
        }
    }
}

window.addEventListener("load",start,false);

