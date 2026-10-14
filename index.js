import { UsuarioFactory } from './UsuarioFactory.js';
import { GerenciadorOS } from './GerenciadorOS.js';
import { OrdemServico } from './OrdemServico.js';

console.log("===================================================================================");
console.log("🛠️ SAÍDA DA APLICAÇÃO (Console)");
console.log("===================================================================================");

const gerenciador = GerenciadorOS.obterInstancia();

const clienteAna = UsuarioFactory.criarUsuario('CLIENTE', { id: 101, nome: 'Ana', email: 'ana@email.com', telefone: '81999999999' });
const tecnicoCarlos = UsuarioFactory.criarUsuario('TECNICO', { id: 202, nome: 'Carlos', email: 'carlos@email.com', especialidade: 'Hardware' });

const os1 = new OrdemServico(1, clienteAna, tecnicoCarlos, "Troca de Tela");
gerenciador.adicionarOS(os1);

console.log("[SISTEMA] Lista de OS ativas:");
console.log(JSON.stringify(gerenciador.listarOS(), null, 2));
