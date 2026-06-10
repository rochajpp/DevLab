# 🚀 Node & Sequelize

Nesse módulo iremos ver como é realizada uma conexão básica entre um banco de dados MySQL e um servidor Node.js utilizando o Sequelize.

O Sequelize é uma ORM (Object Relational Mapping), uma biblioteca que facilita nosso trabalho de conexão e persistência de dados no banco, permitindo manipular tabelas através de classes e métodos ao invés de escrever SQL manualmente em toda a aplicação.

O estudo foi realizado utilizando a documentação oficial do Sequelize e materiais complementares encontrados em pesquisas e vídeos.

📖 Documentação oficial:
https://sequelize.org/docs/v6/

---

# 📦 Para iniciar

Abra o projeto e execute o comando abaixo para instalar todas as dependências:

```bash
npm install
```

> ⚠️ Certifique-se de possuir o Node.js instalado na máquina.

Após instalar as dependências, crie o banco de dados utilizando o Sequelize:

```bash
sequelize db:create
```

Em seguida execute as migrations:

```bash
sequelize db:migrate
```

Mais à frente explicarei melhor o conceito de migrations.

Por fim, inicie o servidor:

```bash
node index.js
```

Pronto. Ao acessar a rota principal da aplicação você será redirecionado para o Swagger.

---

# 📚 Bibliotecas Utilizadas

* **consign** - Organização e carregamento automático de arquivos.
* **cors** - Tratamento de permissões CORS.
* **express** - Framework para criação do servidor Node.js.
* **mysql2** - Driver utilizado para conexão com MySQL.
* **sequelize** - ORM utilizada para comunicação com o banco de dados.
* **sequelize-cli** - Ferramenta de linha de comando do Sequelize.
* **swagger-jsdoc** - Geração da documentação Swagger.
* **swagger-ui-express** - Interface visual do Swagger.

---

# 📖 Swagger

Utilizei o Swagger para facilitar os testes da API e da conexão com o banco de dados.

Através dele é possível:

* Consultar endpoints.
* Inserir registros no banco.
* Buscar registros.
* Testar requisições sem precisar de ferramentas externas como Postman ou Insomnia.

Toda a configuração do Swagger pode ser ignorada caso o foco seja apenas estudar Sequelize.

---

# ⚙️ Configuração do Banco

Dentro de:

```text
config/db_config.js
```

temos um objeto contendo todas as informações necessárias para conexão com o banco de dados.

Nele configuramos:

* Banco de dados.
* Usuário.
* Senha.
* Host.
* Porta.
* Dialeto utilizado (MySQL).

Também existem algumas configurações importantes:

### timestamps

Quando definido como `true`, o Sequelize exigirá que todas as tabelas possuam os campos:

```text
created_at
updated_at
```

Esses campos armazenam respectivamente:

* Data de criação do registro.
* Data da última atualização do registro.

### underscored

Quando definido como `true`, o Sequelize utilizará o padrão snake_case para os campos gerados automaticamente.

Exemplo:

```text
createdAt
```

se torna:

```text
created_at
```

---

# 🔌 Inicialização do Sequelize

Dentro da pasta:

```text
database
```

foi criado o arquivo:

```text
connection.js
```

Esse arquivo é responsável por inicializar o Sequelize utilizando as configurações definidas em `db_config.js`.

Após criar a conexão, ela é exportada para ser utilizada pelo restante da aplicação.

Também é nesse arquivo que normalmente registramos os Models da aplicação.

---

# 🧩 Models

Após definir as configurações do banco, crie uma pasta:

```text
src/models
```

Dentro dela serão criadas as classes responsáveis por representar as tabelas do banco de dados.

Cada model deve seguir o mesmo padrão do arquivo `User.js`, alterando:

* Nome da classe.
* Nome da tabela.
* Atributos.

Os Models herdam da classe `Model` do Sequelize e utilizam o método `init()` para definir suas colunas.

Cada atributo definido dentro do método `init()` representa uma coluna da tabela correspondente.

---

# 📝 Sequelize CLI

Na raiz do projeto existe um arquivo chamado:

```text
.sequelizerc
```

Ele é responsável por informar ao Sequelize CLI onde estão os arquivos necessários para executar seus comandos.

Nesse projeto ele foi configurado para:

* Localizar o arquivo de configuração do banco.
* Localizar a pasta de migrations.

Isso permite que os comandos do Sequelize funcionem corretamente.

---

# 🗄️ Migrations

Migrations são arquivos responsáveis pelo versionamento da estrutura do banco de dados.

Sempre que houver alguma alteração estrutural no banco, uma nova migration deve ser criada.

Exemplos:

* Criar tabelas.
* Alterar colunas.
* Remover colunas.
* Criar índices.
* Criar relacionamentos.

Nesse projeto existe apenas uma migration chamada **AddUser**, responsável pela criação da tabela `User`.

Para criar uma nova migration utilize:

```bash
sequelize migration:create --name=nome_da_migration
```

O Sequelize criará automaticamente um arquivo dentro de:

```text
database/migrations
```

Cada migration possui dois métodos:

### up()

Responsável por executar a alteração no banco.

### down()

Responsável por desfazer a alteração caso seja necessário realizar rollback.

Após criar a migration basta implementar sua lógica e executar:

```bash
sequelize db:migrate
```

Para desfazer a última migration:

```bash
sequelize db:migrate:undo
```

---

# 🚀 Utilizando os Models

Depois que o banco estiver criado e as migrations executadas, basta importar o Model desejado:

```javascript
const User = require("./models/User");
```

A partir dele o Sequelize disponibilizará diversos métodos para manipulação dos dados da tabela, como:

* Criar registros.
* Buscar registros.
* Atualizar registros.
* Remover registros.

Tudo isso sem a necessidade de escrever SQL manualmente.

---

# 🎯 Objetivo

O objetivo deste projeto é demonstrar uma implementação simples do Sequelize em uma aplicação Node.js, mostrando desde a configuração da conexão até a criação de Models, Migrations e testes através do Swagger.


