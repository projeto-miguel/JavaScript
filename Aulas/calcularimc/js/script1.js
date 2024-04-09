function CalcularImc(){
    var altura = document.ImcForm.altura.value
    var peso = document.ImcForm.peso.value
    var imc = peso/(altura*altura)
    if(imc<18.5){
        alert("Você está magro com o IMC: " + imc)
    }
    else if(imc>=18.5 && imc<24.9){
        alert("Você está normal com o IMC: " + imc)
    }
    else if(imc>=24.9 && imc<29.9){
        alert("Você está acima do peso com o IMC: " + imc)
    }
    else if(imc>=29.9 && imc<39.9){
        alert("Você está obeso com o IMC: " + imc)
    }
    else if(imc>=39.9){
        alert("Você está com obesidade mórbida com o IMC: " + imc)
    }
}
