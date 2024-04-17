function Resposta(){
    valor1=document.getElementById("sim/não1").value
    valor2=document.getElementById("sim/não2").value
    valor3=document.getElementById("sim/não3").value
    valor4=document.getElementById("sim/não4").value
    valor5=document.getElementById("sim/não5").value

    animal = valor1+valor2+valor3+valor4+valor5

    if(animal=="11111"){
        document.getElementById("resposta").innerHTML=`seu animal é o Gato`
    }
    else if(animal=="21112"){
        document.getElementById("resposta").innerHTML=`seu animal é a Coruja`
    }else if(animal=="11121"){
        document.getElementById("resposta").innerHTML=`seu animal é o Cachorro`
    }else if(animal=="22122"){
        document.getElementById("resposta").innerHTML=`seu animal é o Peixe`
    }else if(animal=="11222"){
        document.getElementById("resposta").innerHTML=`seu animal é o Elefante`
    }else if(animal=="21212"){
        document.getElementById("resposta").innerHTML=`seu animal é o Humano`
    }else if(animal=="21122"){
        document.getElementById("resposta").innerHTML=`seu animal é o Pato`
    }else if(animal=="11221"){
        document.getElementById("resposta").innerHTML=`seu animal é o Leão`
    }else if(animal=="22212"){
        document.getElementById("resposta").innerHTML=`seu animal é o Tubarão`
    }else if(animal=="21222"){
        document.getElementById("resposta").innerHTML=`seu animal é a Cobra`
    }else{
        document.getElementById("resposta").innerHTML=`seu animal é inválido`
    }
}