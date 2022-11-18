using System;
using System.Collections.Generic;

class teste{
    class Carro{
        public int id;
        public string cor;
        public float preco;
        public string modelo;
        public int potencia;
        public Carro(string c, float p, int pt, string m){
            this.cor = c;
            this.preco = p;
            this.potencia = pt;
            this.modelo = m;
        }
        public void Info(){
            Console.WriteLine("Imprimindo informações do carro: {0}",modelo);
            Console.WriteLine("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
            Console.WriteLine("\n\nCor.....: {0}",cor);
            Console.WriteLine("\nPreco...: {0}",preco);
            Console.WriteLine("\nModelo..: {0}",modelo);
            Console.WriteLine("\nPotencia: {0}",potencia);
        }
    }
    static void Main(){
        List<string> carros = new List<string>();
        int opc = 0;
        int id = 0;
        string cor = "";
        float preco = 0f;
        string modelo = "";
        int potencia = 0;
        int iniciar = 0;
        while(opc!=4){
            opc = Menu();
            if(opc==1){

            }else if(opc==2){

            }else{

            }
        }
        
    }
    static int Menu(){
        int opc = 0;
        Console.Clear();
        Console.WriteLine("Menu...\n");
        Console.WriteLine("1 - Adicionar carro");
        Console.WriteLine("2 - Ver carros");
        Console.WriteLine("3 - Excluir carro\n");
        Console.WriteLine("4 - Sair");
        opc = int.Parse(Console.ReadLine());
        return opc;
    }
    static dynamic Adicionar(){
        string modelo;
        string cor;
        float preco;
        int potencia;
        Console.Clear();
        Console.WriteLine("Digite o modelo do carro:");
        modelo = Console.ReadLine();
        Console.ReadLine("Digite a potencia do carro:");
        potencia = int.Parse(Console.ReadLine());
        Console.WriteLine("Digite a cor do carro:");
        cor = Console.ReadLine(); 
        Console.WriteLine("Digite o preco do carro: ");
        preco = int.Parse(Console.ReadLine());
    }
}