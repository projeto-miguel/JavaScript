//if
function se(n){
    if(n<=10){
        console.log("criança")
    }else if(n > 11 && n < 18){
        console.log("Voce é adolescente")
    }else if(n === 65){
        console.log("Você se aposentou")
    }else if(n == 70 || n == 90){
        console.log("Você é idoso")
    }else{
        console.log("Não atende nenhuma das condições")
    }
}

//se(65)
//for
function para(n){
    for(let i=0;i<n;i++){
        if(i==10){
            console.log("Criança")
            break
        }else{
            console.log("Você não atende as condições")
        }
    }
}
//para(15)
//while
function enquanto(n){
    let i=0
    while(i<n){
        i++
        if(i==10){
            console.log("Criança")
            break
        }else{
            console.log("Você não atende as condições")
        }
    }
}

//enquanto(15)
//do while
function faca_enquanto(n){
    let i = 0
    do{
        i++
        if(i==5){
            console.log("Criança")
            break
        }else{
            console.log("Você não atende as condições")
        }
    }while(i<20)
}
//faca_enquanto(15)
//switch case
function caso(n){
    switch(n){
        case 1:
            console.log("Bloco 1 executado")
            break
        case 2:
            console.log("Bloco 2 executado")
            break
        case 3:
            console.log("Bloco 3 executado")
            break
        default:console.log("nao atende as condições")
    }
}
caso(9)