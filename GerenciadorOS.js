export class GerenciadorOS {
    constructor() {
        if (GerenciadorOS.instancia) {
            return GerenciadorOS.instancia;
        }
        this.ordensServico = [];
        GerenciadorOS.instancia = this;
        console.log("[SINGLETON] Instância única do GerenciadorOS inicializada.");
    }

    static obterInstancia() {
        if (!GerenciadorOS.instancia) {
            new GerenciadorOS();
        }
        return GerenciadorOS.instancia;
    }

    adicionarOS(os) {
        this.ordensServico.push(os);
        console.log(`[SISTEMA] Ordem de Serviço #${os.id} registrada com sucesso!`);
    }

    listarOS() {
        return this.ordensServico.map(os => ({
            id: os.id,
            cliente: os.cliente.nome,
            tecnico: os.tecnico.nome,
            status: os.status,
            descricao: os.descricao
        }));
    }
}
