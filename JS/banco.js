const ps = require('prompt-sync')
const prompt = ps()

let u1 = {
    id: 1,
    name: "Jose",
    passw: "1111",
    cash: 2500
}
let opc = 0


function Login(){
    let user_i = ""
    let passw_i = ""
    let error = 0
    let login = false
    console.log("BEM-VINDO AO BANCO DO BARASIL\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
    while(login == false){  
        console.log("REALIZE O LOGIN PARA PROSSEGUIR: ")
        user_i = prompt("Usuario: ")
        passw_i = prompt("Senha: ")
        if(user_i!=u1.name || passw_i!=u1.passw){
            console.clear()
            console.log("USUARIO OU SENHA INCORRETOS")
            error++
        }else{
            console.clear()
            login = true
        }
    }    
    console.log("LOGIN BEM-SUCEDIDO")
    console.log("Bem-vindo",user_i+"!")
    return user_i
}
function Menu(){
    console.log("Escolha qual operação deseja fazer pelo número: ")
    console.log("1 - VERIFICAR SALDO")
    console.log("2 - SAQUE")
    console.log("3 - DEPOSITO")
    console.log("4 - SAIR")
}

function Saldo(){
    console.clear()
    console.log("Seu saldo na conta corrente é: ")
    console.log("R$",u1.cash)
}

function Saque(){
    console.clear()
    let value = Number(prompt("Digite o valor que deseja sacar de sua conta corrente: "))
    u1.cash = u1.cash - value
    console.log("Operação bem-sucedida.")
}
function Deposito(){
    console.clear()
    let value = Number(prompt("Digite o valor que deseja depositar em sua conta corrente: "))
    u1.cash = u1.cash + value
    console.log("Operação bem-sucedida.")
}


logged_user = Login()
while(opc!=4){
    Menu()
    opc = Number(prompt())
    if(opc==1){
        Saldo()
    }
    if(opc==2){
        Saque()
    }
    if(opc==3){
        Deposito()
    }
}

