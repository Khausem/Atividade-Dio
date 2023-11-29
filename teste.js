
class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
   
    atacar() {
      let ataque;
      switch(this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'não atacou';
      }
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
   }
   const mago = new Hero('Gandalf', 1000, 'mago');
   mago.atacar(); // o mago atacou usando usou magia
   
   const guerreiro = new Hero('Aragorn', 87, 'guerreiro');
   guerreiro.atacar(); // o guerreiro atacou usando usou espada
   
   const monge = new Hero('Hanzo', 75, 'monge');
   monge.atacar(); // o monge atacou usando usou artes marciais
   
   const ninja = new Hero('Naruto', 17, 'ninja');
   ninja.atacar(); // o ninja atacou usando usou shuriken
   