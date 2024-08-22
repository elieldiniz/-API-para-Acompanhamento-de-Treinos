# Documentação da API para Acompanhamento de Treinos


# Documentação da API para Acompanhamento de Treinos



## Documentação da API - Aplicativo de Academia

### Introdução

Esta documentação descreve os endpoints da API RESTful do aplicativo de academia, responsável por gerenciar usuários, exercícios e treinos.

### Endpoints

#### Cadastro de Usuário
* **Método:** POST
* **URL:** /users
* **Parâmetros:**
  * nome: string (obrigatório)
  * email: string (obrigatório)
  * senha: string (obrigatório)
* **Descrição:** Cria um novo usuário no sistema.

#### Autenticação
* **Método:** POST
* **URL:** /auth/login
* **Parâmetros:**
  * email: string (obrigatório)
  * senha: string (obrigatório)
* **Descrição:** Autentica um usuário existente e retorna um token de acesso.

#### Cadastro de Exercícios
* **Método:** POST
* **URL:** /exercises
* **Parâmetros:**
  * nome: string (obrigatório)
  * grupo_muscular: string (obrigatório)
  * imagem: string (opcional)
* **Descrição:** Cadastra um novo exercício no sistema.

#### Registro de Treino
* **Método:** POST
* **URL:** /workouts
* **Parâmetros:**
  * exercício_id: integer (obrigatório)
  * peso: number (obrigatório)
  * data: date (obrigatório)
* **Descrição:** Registra um novo treino para um usuário específico.

#### Histórico de Treinos
* **Método:** GET
* **URL:** /workouts
* **Parâmetros:**
  * user_id: integer (opcional)
  * exercise_id: integer (opcional)
  * data_inicio: date (opcional)
  * data_fim: date (opcional)
* **Descrição:** Retorna o histórico de treinos de um usuário, com filtros opcionais.

#### Estatísticas de Evolução
* **Método:** GET
* **URL:** /workouts/stats
* **Parâmetros:**
  * user_id: integer (obrigatório)
  * exercise_id: integer (obrigatório)
* **Descrição:** Retorna as estatísticas de evolução de um exercício específico para um usuário, incluindo:
  * Peso máximo levantado por mês
  * Média de peso levantado por mês
  * Gráfico da evolução do peso ao longo do tempo

### Modelos de Dados
* **Usuário:** id, nome, email, senha, criado_em
* **Exercício:** id, nome, grupo_muscular, imagem
* **Treino:** id, usuário_id, exercício_id, peso, data

### Retorno dos Endpoints
Todos os endpoints retornarão uma resposta JSON com os seguintes campos:

* **status:** 200 para sucesso, 400 para erros de validação, 401 para não autorizado, 500 para erros internos do servidor.
* **data:** Os dados da requisição ou uma mensagem de erro.


## Casos de Uso - Aplicativo de Academia

### Cadastrar Usuário
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

###  Fazer Login
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

###  Buscar Exercícios
* **Actor:** Usuário logado
* **Pré-condição:** O usuário está autenticado no sistema.
* **Fluxo principal:**
  1. O usuário acessa a tela de busca de exercícios.
  2. Insere um termo de busca (nome ou grupo muscular).
  3. Clica no botão "Buscar".
  4. O sistema busca no banco de dados os exercícios correspondentes ao termo de busca.
  5. Os resultados da busca são apresentados ao usuário.
* **Pós-condição:** O usuário visualiza uma lista de exercícios correspondentes à sua busca.

###  Registrar Treino
* **Actor:** Usuário logado
* **Pré-condição:** O usuário está autenticado no sistema e selecionou um exercício.
* **Fluxo principal:**
  1. O usuário acessa a tela de registro de treino.
  2. Seleciona o exercício desejado.
  3. Informa o peso levantado e a data do treino.
  4. Clica no botão "Salvar".
  5. O sistema registra o treino no banco de dados associado ao usuário.
* **Pós-condição:** O treino é registrado com sucesso e o usuário pode visualizar o histórico atualizado.

### Visualizar Histórico de Treinos
* **Actor:** Usuário logado
* **Pré-condição:** O usuário está autenticado no sistema e possui treinos registrados.
* **Fluxo principal:**
  1. O usuário acessa a tela de histórico de treinos.
  2. O sistema exibe uma lista de todos os treinos realizados pelo usuário.
  3. O usuário pode filtrar os treinos por data, exercício ou outros critérios.
* **Pós-condição:** O usuário visualiza o histórico de seus treinos de forma organizada e filtrada.

###  Visualizar Estatísticas
* **Actor:** Usuário logado
* **Pré-condição:** O usuário está autenticado no sistema e possui treinos registrados para o exercício selecionado.
* **Fluxo principal:**
  1. O usuário acessa a tela de estatísticas.
  2. Seleciona o exercício desejado.
  3. O sistema calcula e apresenta as estatísticas de evolução do peso levantado ao longo do tempo (e.g., gráfico de linha, média, máximo).
* **Pós-condição:** O usuário visualiza um gráfico e métricas que demonstram a evolução de seu desempenho no exercício selecionado.


# Documentação da API para Acompanhamento de Treinos



## Documentação da API - Aplicativo de Academia

### Introdução

Esta documentação descreve os endpoints da API RESTful do aplicativo de academia, responsável por gerenciar usuários, exercícios e treinos.

### Endpoints

#### Cadastro de Usuário
* **Método:** POST
* **URL:** /users
* **Parâmetros:**
  * nome: string (obrigatório)
  * email: string (obrigatório)
  * senha: string (obrigatório)
* **Descrição:** Cria um novo usuário no sistema.

#### Autenticação
* **Método:** POST
* **URL:** /auth/login
* **Parâmetros:**
  * email: string (obrigatório)
  * senha: string (obrigatório)
* **Descrição:** Autentica um usuário existente e retorna um token de acesso.

#### Cadastro de Exercícios
* **Método:** POST
* **URL:** /exercises
* **Parâmetros:**
  * nome: string (obrigatório)
  * grupo_muscular: string (obrigatório)
  * imagem: string (opcional)
* **Descrição:** Cadastra um novo exercício no sistema.

#### Registro de Treino
* **Método:** POST
* **URL:** /workouts
* **Parâmetros:**
  * exercício_id: integer (obrigatório)
  * peso: number (obrigatório)
  * data: date (obrigatório)
* **Descrição:** Registra um novo treino para um usuário específico.

#### Histórico de Treinos
* **Método:** GET
* **URL:** /workouts
* **Parâmetros:**
  * user_id: integer (opcional)
  * exercise_id: integer (opcional)
  * data_inicio: date (opcional)
  * data_fim: date (opcional)
* **Descrição:** Retorna o histórico de treinos de um usuário, com filtros opcionais.

#### Estatísticas de Evolução
* **Método:** GET
* **URL:** /workouts/stats
* **Parâmetros:**
  * user_id: integer (obrigatório)
  * exercise_id: integer (obrigatório)
* **Descrição:** Retorna as estatísticas de evolução de um exercício específico para um usuário, incluindo:
  * Peso máximo levantado por mês
  * Média de peso levantado por mês
  * Gráfico da evolução do peso ao longo do tempo

### Modelos de Dados
* **Usuário:** id, nome, email, senha, criado_em
* **Exercício:** id, nome, grupo_muscular, imagem
* **Treino:** id, usuário_id, exercício_id, peso, data

### Retorno dos Endpoints
Todos os endpoints retornarão uma resposta JSON com os seguintes campos:

* **status:** 200 para sucesso, 400 para erros de validação, 401 para não autorizado, 500 para erros internos do servidor.
* **data:** Os dados da requisição ou uma mensagem de erro.


## Casos de Uso - Aplicativo de Academia

### Cadastrar Usuário
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

###  Fazer Login
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

###  Buscar Exercícios
* **Actor:** Usuário logado
* **Pré-condição:** O usuário está autenticado no sistema.
* **Fluxo principal:**
  1. O usuário acessa a tela de busca de exercícios.
  2. Insere um termo de busca (nome ou grupo muscular).
  3. Clica no botão "Buscar".
  4. O sistema busca no banco de dados os exercícios correspondentes ao termo de busca.
  5. Os resultados da busca são apresentados ao usuário.
* **Pós-condição:** O usuário visualiza uma lista de exercícios correspondentes à sua busca.

###  Registrar Treino
* **Actor:** Usuário logado
* **Pré-condição:** O usuário está autenticado no sistema e selecionou um exercício.
* **Fluxo principal:**
  1. O usuário acessa a tela de registro de treino.
  2. Seleciona o exercício desejado.
  3. Informa o peso levantado e a data do treino.
  4. Clica no botão "Salvar".
  5. O sistema registra o treino no banco de dados associado ao usuário.
* **Pós-condição:** O treino é registrado com sucesso e o usuário pode visualizar o histórico atualizado.

### Visualizar Histórico de Treinos
* **Actor:** Usuário logado
* **Pré-condição:** O usuário está autenticado no sistema e possui treinos registrados.
* **Fluxo principal:**
  1. O usuário acessa a tela de histórico de treinos.
  2. O sistema exibe uma lista de todos os treinos realizados pelo usuário.
  3. O usuário pode filtrar os treinos por data, exercício ou outros critérios.
* **Pós-condição:** O usuário visualiza o histórico de seus treinos de forma organizada e filtrada.

###  Visualizar Estatísticas
* **Actor:** Usuário logado
* **Pré-condição:** O usuário está autenticado no sistema e possui treinos registrados para o exercício selecionado.
* **Fluxo principal:**
  1. O usuário acessa a tela de estatísticas.
  2. Seleciona o exercício desejado.
  3. O sistema calcula e apresenta as estatísticas de evolução do peso levantado ao longo do tempo (e.g., gráfico de linha, média, máximo).
* **Pós-condição:** O usuário visualiza um gráfico e métricas que demonstram a evolução de seu desempenho no exercício selecionado.




