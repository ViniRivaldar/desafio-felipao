class Heroi:
    ATAQUES = {
        'mago': 'usou magia',
        'guerreiro': 'usou espada',
        'monge': 'usou artes marciais',
        'ninja': 'usou shuriken'
    }

    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        ataque = self.ATAQUES.get(self.tipo, 'usou um ataque indefinido')
        print(f"O {self.tipo} atacou usando {ataque}")

# Exemplo de uso:
heroi = Heroi("Herói 1", 30, "mago")
heroi.atacar()
