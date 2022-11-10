using System.Threading;
using Internal;
using System;

class RPG{
    
    static Random random = new Random();
    public class Personagem{
        public string nome;
        public int idade;
        public string habilidade;
        public bool vivo;
    }
    public class Cavaleiro : Personagem{
        public int HP;
        public string[] inventario;
        public int defesa;
        public int velocidade;
        public Cavaleiro(string n, int idade,string h){
            HP = 2000;
            velocidade = 10;
            inventario = new string[10]{"Espada","Lança de Justa","","","","","","","",""};
            defesa = 100;
            this.nome = n;
            this.idade = idade;
            this.habilidade = h;
            vivo = true;
        }
        public void info(){
            Console.WriteLine("Nome......: {0}",nome);
            Console.WriteLine("Idade.....: {0}",idade );
            Console.WriteLine("Habilidade: {0}",habilidade);
            Console.WriteLine("Vida......: {0}",HP);
            Console.Write    ("Inventário: "); foreach(string n in inventario){Console.Write(n+" | ");}
            Console.WriteLine("\nDefesa....: {0}",defesa);
        }
    }
    public class Arqueiro : Personagem{
        public int HP;
        public string[] inventario;
        public int flechas;
        public int defesa;
        public int velocidade;
        public Arqueiro(string n, int idade,string h){
            HP = 800;
            velocidade = 20;
            inventario = new string[10]{"Arco","Adaga","","","","","","","",""};
            flechas = 50;
            defesa = 40;
            this.nome = n;
            this.idade = idade;
            this.habilidade = h;
            vivo = true;
        }
        public void info(){
            Console.WriteLine("Nome......: {0}",nome);
            Console.WriteLine("Idade.....: {0}",idade );
            Console.WriteLine("Habilidade: {0}",habilidade);
            Console.WriteLine("Vida......: {0}",HP);
            Console.Write    ("Inventário: "); foreach(string n in inventario){Console.Write(n+" | ");}
            Console.WriteLine("\nDefesa....: {0}",defesa);
        }

    }
    public class CacadorRecompensa : Personagem{
        public int HP;
        public string[] inventario;
        public int defesa;
        public int velocidade;
        public CacadorRecompensa(string n, int idade,string h){
            HP = 1000;
            velocidade = 8;
            inventario = new string[10]{"Arpão","Lança","","","","","","","",""};
            defesa = 200;
            this.nome = n;
            this.idade = idade;
            this.habilidade = h;
            vivo = true;
        }
        public void info(){
            Console.WriteLine("Nome......: {0}",nome);
            Console.WriteLine("Idade.....: {0}",idade );
            Console.WriteLine("Habilidade: {0}",habilidade);
            Console.WriteLine("Vida......: {0}",HP);
            Console.Write    ("Inventário: "); foreach(string n in inventario){Console.Write(n+" | ");}
            Console.WriteLine("\nDefesa....: {0}",defesa);
        }
    }
    public class Principe : Personagem{
        public int HP;
        public string[] inventario;
        public int defesa;
        public int velocidade;
        public Principe(string n, int idade,string h){
            HP = 700;
            velocidade = 12;
            inventario = new string[10]{"Florete","Cura","","","","","","","",""};
            defesa = 30;
            this.nome = n;
            this.idade = idade;
            this.habilidade = h;
            vivo = true;
        }
        public void info(){
            Console.WriteLine("Nome......: {0}",nome);
            Console.WriteLine("Idade.....: {0}",idade );
            Console.WriteLine("Habilidade: {0}",habilidade);
            Console.WriteLine("Vida......: {0}",HP);
            Console.Write    ("Inventário: "); foreach(string n in inventario){Console.Write(n+" | ");}
            Console.WriteLine("\nDefesa....: {0}",defesa);
        }
    }
    public class Gladiador : Personagem{
        public int HP;
        public string[] inventario;
        public int defesa;
        public int velocidade;
        public Gladiador(string n, int idade,string h){
            HP = 2500;
            velocidade = 5;
            inventario = new string[10]{"Alabarda","Facão","","","","","","","",""};
            defesa = 100;
            this.nome = n;
            this.idade = idade;
            this.habilidade = h;
            vivo = true;
        }
        public void info(){
            Console.WriteLine("Nome......: {0}",nome);
            Console.WriteLine("Idade.....: {0}",idade );
            Console.WriteLine("Habilidade: {0}",habilidade);
            Console.WriteLine("Vida......: {0}",HP);
            Console.Write    ("Inventário: "); foreach(string n in inventario){Console.Write(n+" | ");}
            Console.WriteLine("\nDefesa....: {0}",defesa);
        }
    }
    static void Main(){
        int escolha = 0;
        string nome,habilidade;
        int idade;
        inicio:
        Console.Clear();
        Console.WriteLine("Escolha a classe de seu personagem: ");
        Console.WriteLine("1..............Cavaleiro ");
        Console.WriteLine("2..............Arqueiro ");
        Console.WriteLine("3..............Caçador de Recompesa ");
        Console.WriteLine("4..............Príncipe ");
        Console.WriteLine("5..............Gladiador ");
        escolha = int.Parse(Console.ReadLine());
        if(escolha==1){
            Console.Clear();
            Console.WriteLine("Classe escolhida: Cavaleiro.");
            Console.WriteLine("\nDigite o nome de seu personagem: ");
            nome = Console.ReadLine();
            Console.WriteLine("\nDigite a idade de seu personagem: ");
            idade = int.Parse(Console.ReadLine());
            Console.WriteLine("\nDigite a habilidade de seu personagem: ");
            habilidade = Console.ReadLine();
            Cavaleiro novo_jogador = new Cavaleiro(nome,idade,habilidade);
            Console.Clear();
            Console.WriteLine("Personagem criado!");
            Thread.Sleep(2000);
            Console.Clear();
            novo_jogador.info();

        }else if(escolha==2){
            Console.Clear();
            Console.WriteLine("Classe escolhida: Arqueiro.");
            Console.WriteLine("\nDigite o nome de seu personagem: ");
            nome = Console.ReadLine();
            Console.WriteLine("\nDigite a idade de seu personagem: ");
            idade = int.Parse(Console.ReadLine());
            Console.WriteLine("\nDigite a habilidade de seu personagem: ");
            habilidade = Console.ReadLine();
            Arqueiro novo_jogador = new Arqueiro(nome,idade,habilidade);
            Console.Clear();
            Console.WriteLine("Personagem criado!");
            Thread.Sleep(2000);
            Console.Clear();
            novo_jogador.info();

        }else if(escolha==3){
            Console.Clear();
            Console.WriteLine("Classe escolhida: Caçador de Recompensas.");
            Console.WriteLine("\nDigite o nome de seu personagem: ");
            nome = Console.ReadLine();
            Console.WriteLine("\nDigite a idade de seu personagem: ");
            idade = int.Parse(Console.ReadLine());
            Console.WriteLine("\nDigite a habilidade de seu personagem: ");
            habilidade = Console.ReadLine();
            CacadorRecompensa novo_jogador = new CacadorRecompensa(nome,idade,habilidade);
            Console.Clear();
            Console.WriteLine("Personagem criado!");
            Thread.Sleep(2000);
            Console.Clear();
            novo_jogador.info();
        }else if(escolha==4){
            Console.Clear();
            Console.WriteLine("Classe escolhida: Caçador de Recompensas.");
            Console.WriteLine("\nDigite o nome de seu personagem: ");
            nome = Console.ReadLine();
            Console.WriteLine("\nDigite a idade de seu personagem: ");
            idade = int.Parse(Console.ReadLine());
            Console.WriteLine("\nDigite a habilidade de seu personagem: ");
            habilidade = Console.ReadLine();
            Principe novo_jogador = new Principe(nome,idade,habilidade);
            Console.Clear();
            Console.WriteLine("Personagem criado!");
            Thread.Sleep(2000);
            Console.Clear();
            novo_jogador.info();
        
        }else if(escolha==5){
            Console.Clear();
            Console.WriteLine("Classe escolhida: Arqueiro.");
            Console.WriteLine("\nDigite o nome de seu personagem: ");
            nome = Console.ReadLine();
            Console.WriteLine("\nDigite a idade de seu personagem: ");
            idade = int.Parse(Console.ReadLine());
            Console.WriteLine("\nDigite a habilidade de seu personagem: ");
            habilidade = Console.ReadLine();
            Gladiador novo_jogador = new Gladiador(nome,idade,habilidade);
            Console.Clear();
            Console.WriteLine("Personagem criado!");
            Thread.Sleep(2000);
            Console.Clear();
            novo_jogador.info();
        }else{
            
            Console.Clear();
            Console.WriteLine("Escolha inválida.");
            Thread.Sleep(2000);
            Console.Clear();
            goto inicio;
        }
    }
}