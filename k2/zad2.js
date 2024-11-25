counter = 0;
function DodadiKvadrat(){
    var pom1 = document.createElement("div");
    var kvadrat = document.getElementById("kocka");
    pom1.className = kvadrat.className;
    pom1.id = "Kocka" + counter++;
    pom1.addEventListener('click',Klikni);
    pom1.addEventListener('mouseleave',Trgni);
    pom1.addEventListener('mouseover',Hover);
    document.getElementById("pom").appendChild(pom1);
}

function Klikni(event){
    this.style.borderRadius = "10%";
}

function Trgni(){
    this.style.backgroundColor = "white";
}

function Hover(){
    this.style.backgroundColor = "green";
}