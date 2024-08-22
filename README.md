## Casos de Uso - Aplicativo de Academia

### Caso de Uso: Cadastrar Usuário
* **Actor:** Novo usuário
* **Pré-condição:** O usuário não possui uma conta no sistema.
* **Fluxo principal:**
  1. O usuário acessa a tela de cadastro.
  2. Preenche o formulário com nome, email e senha.
  3. Clica no botão "Cadastrar".
  4. O sistema valida as informações (e.g., formato do email, força da senha).
  5. Se os dados forem válidos, o sistema cria um novo usuário e envia uma mensagem de confirmação.
  6. O usuário é redirecionado para a tela de login.
* **Pós-condição:** O usuário possui uma conta no sistema e recebe uma mensagem de confirmação.

### Caso de Uso: Fazer Login
* **Actor:** Usuário cadastrado
* **Pré-condição:** O usuário possui uma conta no sistema.
* **Fluxo principal:**
  1. O usuário acessa a tela de login.
  2. Preenche os campos de email e senha.
  3. Clica no botão "Entrar".
  4. O sistema verifica as credenciais.
  5. Se as credenciais forem válidas, o sistema gera um token de acesso e armazena-o no cliente (e.g., cookie, localStorage).
  6. O usuário é redirecionado para a tela inicial.
* **Pós-condição:** O usuário está autenticado no sistema e possui um token de acesso válido.

### Caso de Uso: Buscar Exercícios
* **Actor:** Usuário logado
* **Pré-condição:** O usuário está autenticado no sistema.
* **Fluxo principal:**
  1. O usuário acessa a tela de busca de exercícios.
  2. Insere um termo de busca (nome ou grupo muscular).
  3. Clica no botão "Buscar".
  4. O sistema busca no banco de dados os exercícios correspondentes ao termo de busca.
  5. Os resultados da busca são apresentados ao usuário.
* **Pós-condição:** O usuário visualiza uma lista de exercícios correspondentes à sua busca.

### Caso de Uso: Registrar Treino
* **Actor:** Usuário logado
* **Pré-condição:** O usuário está autenticado no sistema e selecionou um exercício.
* **Fluxo principal:**
  1. O usuário acessa a tela de registro de treino.
  2. Seleciona o exercício desejado.
  3. Informa o peso levantado e a data do treino.
  4. Clica no botão "Salvar".
  5. O sistema registra o treino no banco de dados associado ao usuário.
* **Pós-condição:** O treino é registrado com sucesso e o usuário pode visualizar o histórico atualizado.

### Caso de Uso: Visualizar Histórico de Treinos
* **Actor:** Usuário logado
* **Pré-condição:** O usuário está autenticado no sistema e possui treinos registrados.
* **Fluxo principal:**
  1. O usuário acessa a tela de histórico de treinos.
  2. O sistema exibe uma lista de todos os treinos realizados pelo usuário.
  3. O usuário pode filtrar os treinos por data, exercício ou outros critérios.
* **Pós-condição:** O usuário visualiza o histórico de seus treinos de forma organizada e filtrada.

### Caso de Uso: Visualizar Estatísticas
* **Actor:** Usuário logado
* **Pré-condição:** O usuário está autenticado no sistema e possui treinos registrados para o exercício selecionado.
* **Fluxo principal:**
  1. O usuário acessa a tela de estatísticas.
  2. Seleciona o exercício desejado.
  3. O sistema calcula e apresenta as estatísticas de evolução do peso levantado ao longo do tempo (e.g., gráfico de linha, média, máximo).
* **Pós-condição:** O usuário visualiza um gráfico e métricas que demonstram a evolução de seu desempenho no exercício selecionado.

**Observações:**
* **Flexibilidade:** Adapte os casos de uso para refletir as especificidades do seu aplicativo.
* **Detalhes:** Inclua detalhes como validações, mensagens de erro e fluxos alternativos.
* **Diagramas:** Considere utilizar diagramas de casos de uso para uma representação visual dos fluxos.
* **Atualizações:** Mantenha os casos de uso atualizados conforme o desenvolvimento do aplicativo.

**Benefícios da Documentação de Casos de Uso:**
* **Clareza:** Define as funcionalidades do sistema de forma clara e concisa.
* **Comunicação:** Facilita a comunicação entre os membros da equipe.
* **Requisitos:** Serve como base para a definição dos requisitos do sistema.
* **Teste:** Auxilia na criação de casos de teste.

Ao documentar os casos de uso no Redmine, você garante que todos os membros da equipe tenham uma compreensão compartilhada das funcionalidades do aplicativo, facilitando o desenvolvimento e a manutenção.
