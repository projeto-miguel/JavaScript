function CalcularImc(){
    var altura = document.ImcForm.altura.value
    var peso = document.ImcForm.peso.value
    var imc = peso/(altura*altura)
    if(imc<18.5){
        var resultado = "Você está magro com o IMC: " + imc
    }
    else if(imc>=18.5 && imc<24.9){
        var resultado = "Você está saudável com o IMC: " + imc
    }
    else if(imc>=24.9 && imc<29.9){
        var resultado = "Você está acima do peso com o IMC: " + imc
    }
    else if(imc>=29.9 && imc<39.9){
        var resultado = "Você está obeso com o IMC: " + imc
    }
    else if(imc>=39.9){
        var resultado = "Você está com obesidade mórbida com o IMC: " + imc
    }
    document.getElementById('res').innerHTML = resultado
}