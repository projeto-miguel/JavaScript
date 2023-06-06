document.getElementById('btn-converter').onclick = Converter
document.getElementById('btn-resetar').onclick = Resetar

function Converter(){
    var celsius = document.getElementById('temp-celsius').value
    var fahrenheit = document.getElementById('temp-fahr').value

    if(isNaN(celsius) || isNaN(fahrenheit)){
        alert("Digite um valor válido!!!")
        document.getElementById('temp-celsius').value = ''
        document.getElementById('temp-fahr').value = ''
        return

    }else if(celsius === ''){
        celsius = (parseFloat(fahrenheit) - 32) / 1.8
    }
    else if(fahrenheit === ''){
        fahrenheit = (parseFloat(celsius) * 1.8) + 32
    }

    document.getElementById('temp-celsius').value = parseFloat(celsius).toFixed(1)
    document.getElementById('temp-fahr').value = parseFloat(fahrenheit).toFixed(1)
}

function Resetar(){
    document.getElementById('temp-celsius').value = ''
    document.getElementById('temp-fahr').value = ''
}