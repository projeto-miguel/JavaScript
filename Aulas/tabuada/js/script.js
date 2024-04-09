var res = document.getElementById('div-res')
var podeCalcular = true
function CalcularTabuada(){
    var n1 = document.formt.n1.value 
    var n2 = document.formt.n2.value 
    if(n2<n1){
        var n = n1
        n1 = n2
        n2 = n
    }//inverte o valor das variáveis se a seguna for menor que a primeira
    if(podeCalcular == false || n1.value == "" && n2.value == ""){
        
    }else{
        for(i=n1;n1<=n2;n1++){
            for(j=1;j<=10;j++){
                var res = document.getElementById('div-res')
                res.style.opacity = 1.0
                res.innerHTML += "<p>" + n1 + " X " + j + "= " + n1*j + "</p>"
            }
            res.innerHTML += "<hr>"
        }
        podeCalcular = false
    }
}

function Apagar(){
    res.innerHTML = ""
    res.style.opacity = 0
    document.formt.n1.value = ""
    document.formt.n2.value = ""
    podeCalcular = true
}