export class Usuario {
    constructor(id, nome, email) {
        if (this.constructor === Usuario) {
            throw new Error("Não é possível instanciar a classe abstrata Usuario diretamente.");
        }
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
