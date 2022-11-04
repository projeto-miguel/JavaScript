import os, random

tabuleiro = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
#nome = input("Bem-vindo, digite seu nome para começar...\n")

def Tabuleiro():
    for x in range(len(tabuleiro)):
        for y in range(len(tabuleiro[x])):
            if y == 0:
                print("  ",end=" ")
            print(tabuleiro[x][y],end=" ")
            if y < 2:
                print(" | ",end=" ")
        if x < 2: 
            print("\n---------------------")



def Jogo():
    cpu = []
    pl = []
    ganhou = False
    vez = random.randint(0,1)
    while ganhou != True:
        if vez == 0:
            cpu.append(random.randint(0,2))
            cpu.append(random.randint(0,2)) 
            
    

Tabuleiro()