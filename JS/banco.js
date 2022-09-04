const ps = require('prompt-sync')
const prompt = ps()

let i = 0
let u1 = {
    id: 1,
    nome: "José",
    senha: "1111",
    saldo: 2500
}
let u2 = {
    id: 10,
    nome: "Maria",
    senha: "4321",
    saldo: 1300
}
let u3 = {
    id: 11,
    nome: "Roberto",
    senha: "1234",
    saldo: 5000
}
let usuarios = [u1,u2,u3]



function login(){
    let nome = ""
    let senha = ""
    let nao_encontrado = 0
    let login = false
    while(login == false){  
        console.log("BEM-VINDO AO BANCO DO BARASIL\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
        console.log("REALIZE O LOGIN PARA PROSSEGUIR: ")
        nome = prompt("Nome: ")
        senha = prompt("Senha: ")
        for(i=0;i<usuarios.length;i++){
            if(nome!=usuarios[i].nome){
                nao_encontrado++
            }
            if(nao_encontrado>=usuarios.length){
                console.log("USUARIO NAO ENCONTRADO")
            }else if((nome==usuarios[i].nome) && (senha==usuarios[i].senha)){
                login=true
            }
        }   
    }
    console.log("LOGIN BEM-SUCEDIDO")
}
function Menu(){
    console.log("Bem-vindo", + "!Escolha qual operação deseja fazer: ")
    console.log("")
    console.log()
    console.log()
    console.log()
    console.log()

}
login()
/*
while(true){
    login()
}*/