export class OrdemServico {
    constructor(id, cliente, tecnico, descricao) {
        this.id = id;
        this.cliente = cliente;
        this.tecnico = tecnico;
        this.descricao = descricao;
        this.status = "ABERTA";
    }
}
