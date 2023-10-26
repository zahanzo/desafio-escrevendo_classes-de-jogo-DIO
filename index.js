// DECLARAÇÃO DE VARIAVEIS
const ATTACKS = [ "Magia", "Espada", "Artes-marciais", "Shuriken" ];
const CLASSES = [ "Mago", "Guerreiro", "Monge", "Ninja"]; 

// FUNÇÃO PRINCIPAL
function main() {
    const player = new player_behaviour("Robert", 22, CLASSES[1]); // CLASSE GUERREIRO
    player.attack();
}

// CLASSE PLAYER
class player_behaviour {
    constructor( name , age, player_class ){
        this.name = name;
        this.age = age;
        this.player_class = player_class;
    }

    // FUNÇÃO DE ATAQUE
    attack() {
        for ( let i = 0; i < CLASSES.length; i++ ){
            if ( this.player_class == CLASSES[i]){
                console.log(`O ${this.player_class} de nome ${this.name} atacou usando ${ATTACKS[i]}`)
            }
        }
    }

    // FUNÇÃO PARA PEGAR O NOME
    get_name(){
        return this.name;
    }

    // FUNÇÃO PARA PEGAR IDADE
    get_age(){
        return this.age;
    }
}

// CHAMA A FUNÇÃO MAIN
if (require.main === module) {
    main();
}
