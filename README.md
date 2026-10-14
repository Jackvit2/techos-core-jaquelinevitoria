# TechOS Core - Sprint Express

Documentação de requisitos e modelagem orientada a objetos para o sistema de gestão de Ordens de Serviço TechOS Core.

---

## 1. User Stories (INVEST)

### US01
- **História:** "Como técnico, quero abrir uma Ordem de Serviço para registrar um conserto."
- **Critérios de Aceitação:**
  - **C.A.01:** Deve validar o ID do cliente.
  - **C.A.02:** O status inicial deve ser sempre 'ABERTA'.

### US02
- **História:** "Como cliente, quero visualizar o status do meu equipamento."

---

## 2. Requisitos Não-Funcionais (RNF)

- **RNF01 (Segurança):** Sanitização de inputs contra vulnerabilidades XSS/OWASP no cadastro de usuários e ordens de serviço.
- **RNF02 (Desempenho):** Tempo de resposta na criação de chamados/ordens de serviço inferior a 2 segundos (< 2s).

---

## 3. Diagrama de Classes (POO)

```text
+--------------------------------------------------+
|                  <<Abstrata>>                    |
|                    Usuario                       |
+--------------------------------------------------+
| - id: int                                        |
| - nome: string                                   |
| - email: string                                  |
+--------------------------------------------------+
| + getId()                                        |
| + getNome()                                      |
| + getEmail()                                     |
+--------------------------------------------------+
                         ^
                         | (Herança)
         +---------------+---------------+
         |                               |
+--------------------+          +--------------------+
|      Cliente       |          |      Tecnico       |
+--------------------+          +--------------------+
| - telefone: string |          | - especialidade    |
+--------------------+          +--------------------+

+----------------------------------------------------+
|                    OrdemServico                    |
+----------------------------------------------------+
| - id: int                                          |
| - cliente: Cliente                                 |
| - tecnico: Tecnico                                 |
| - status: string                                   |
| - descricao: string                                |
+----------------------------------------------------+
