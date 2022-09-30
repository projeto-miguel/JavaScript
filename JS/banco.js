const ps = require('prompt-sync')
const prompt = ps()
const mysql = require('mysql')
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "banco_do_barasil"
})

let opc = 0
//O programa inteiro roda sob a conexão com o banco de dados
con.connect(function(err){
    if (err){
        throw err
    }else{
        console.log("INICIANDO")
    }


    function BemVindo(){
        console.log("BEM-VINDO AO BANCO DO BARASIL\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
        console.log("Pressione:")
        console.log("0 - Para fazer login")
        console.log("1 - Para criar uma conta")
        let opc = prompt()
        return opc
    }
    function Login(){
        let user_i = ""
        let passw_i = ""
        let error = 0
        let login = false
        let bloqueado = false
        let sessao_usuario = ""
        while(login == false){ 
            console.log("REALIZE O LOGIN PARA PROSSEGUIR: ")
            user_i = prompt("Usuario: ")
            passw_i = prompt("Senha: ")
            if (user_i && passw_i){
                if(error >= 3){
                    console.clear()
                    console.log("ERROU 3 VEZES. CONTA BLOQUEADA.")
                    bloqueado = true
                    break
                } 
    
                con.query("SELECT * FROM clientes WHERE nome="+user_i+" AND senha="+passw_i+"",function(err,results,fields){
                    if(err) throw err
                    if (results.lenght > 0){
                        login = true
                        bloqueado = false
                        sessao_usuario = user_i
                    }else{
                        console.clear()
                        console.log("USUARIO OU SENHA INCORRETOS.")
                        error++
                    }
                })
            }else{
                console.log("DIGITE UM NOME E SENHA PARA PROSSEGUIR!")
            }
            
            
        } 
        if(bloqueado == false){    
            console.log("LOGIN BEM-SUCEDIDO")
            console.log("Bem-vindo",user_i+"!")
        } 
        return [bloqueado, sessao_usuario]
    }

    function Cadastro(){
        console.clear()
        console.log("Para criar sua conta precisamos de algumas informações. Digite:")
        let nome = prompt("Seu nome de usuário: ")
        let email = prompt("Seu email de cadastro: ")
        let senha = prompt("Sua senha: ")
        let cadastrar_cliente =`INSERT INTO clientes(nome,senha,email)
        VALUES ('`+nome+`','`+senha+`','`+email+`')` 
        return cadastrar_cliente
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
    
    let login_ou_cadastro = BemVindo()
    if(login_ou_cadastro == 0){  
        let info_login = Login()
        var nome_usuario = info_login[1]
        var bloqueado = info_login[0]
    }else{
        var info_cadastro = Cadastro()
    }



    con.query(info_cadastro,function(err,result){
        if (err) throw err
        console.log("CADASTRO REALIZADO.")
    })
    
    con.end()
})



/*
while(opc!=4 && blocked != true){
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
*/