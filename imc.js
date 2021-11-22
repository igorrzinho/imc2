
function calcula_imc(){
    altura = document.imcform.altura.value
    peso = document.imcform.peso.value
    imc = (peso/(altura*altura))

    if (imc<18.5){
        alert("Você esta abaixo do peso,indíce: " + imc)
    }
    else if (imc>=18.5 && imc<=24.99){
        alert("Você esta no do peso ideal,indíce: " + imc)
    }
    else if (imc>=25 && imc<=29.99){
        alert("Você esta com sobrepes,indíce: " + imc)
    }
    else if (imc>=30 && imc<=39.99){
        alert("Você esta com obesidade,indíce: " + imc)
    }
    else if (imc>=40){
        alert("Você esta com Obesidade Mórbita,indíce: " + imc)
    }
    

}