# Git e GitHub: Guia para Iniciantes 🚀

## O que é Git?

O Git é um sistema de controle de versão criado por Linus Torvalds em 2005.

Seu objetivo é registrar todas as alterações realizadas em um projeto, permitindo acompanhar o histórico de modificações, restaurar versões anteriores e colaborar com outras pessoas sem perder trabalho.

Imagine que você está desenvolvendo um sistema e faz uma alteração que quebra tudo. Com o Git, você pode voltar para uma versão anterior do projeto com facilidade.

### Principais vantagens do Git

* Histórico completo das alterações.
* Possibilidade de restaurar versões anteriores.
* Trabalho em equipe sem sobrescrever código de outras pessoas.
* Criação de branches para desenvolvimento isolado.
* Integração com plataformas como GitHub, GitLab e Bitbucket.

---

## O que é GitHub?

O GitHub é uma plataforma que hospeda repositórios Git na nuvem.

Enquanto o Git controla as versões do projeto localmente, o GitHub permite armazenar esse projeto online, compartilhar código e colaborar com outros desenvolvedores.

### O Git é diferente do GitHub

| Git                              | GitHub                             |
| -------------------------------- | ---------------------------------- |
| Software instalado no computador | Plataforma online                  |
| Controla versões                 | Hospeda repositórios Git           |
| Funciona sem internet            | Requer internet para sincronização |
| Criado por Linus Torvalds        | Empresa pertencente à Microsoft    |

---

# Instalando o Git

## Windows

Baixe o instalador:

https://git-scm.com/downloads

Após instalar, abra o terminal e execute:

```bash
git --version
```

Se aparecer a versão instalada, o Git está pronto para uso.

---

# Configuração Inicial

Antes de começar a utilizar o Git, configure seu nome e e-mail.

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@email.com"
```

Verifique as configurações:

```bash
git config --list
```

---

# Criando um Repositório

Entre na pasta do projeto:

```bash
cd meu-projeto
```

Inicialize o Git:

```bash
git init
```

Agora a pasta está sendo monitorada pelo Git.

---

# Entendendo o Fluxo Básico

O fluxo mais comum é:

```text
Arquivos
   ↓
git add
   ↓
git commit
   ↓
git push
   ↓
GitHub
```

---

# Verificando Alterações

Veja o status do projeto:

```bash
git status
```

Exemplo:

```text
modified: index.html
```

Significa que o arquivo foi alterado.

---

# Adicionando Arquivos

Adicionar um arquivo específico:

```bash
git add index.html
```

Adicionar todos os arquivos:

```bash
git add .
```

---

# Criando Commits

Após adicionar os arquivos:

```bash
git commit -m "Adiciona página inicial"
```

Um commit é uma fotografia do estado atual do projeto.

---

# Visualizando Histórico

```bash
git log
```

Versão resumida:

```bash
git log --oneline
```

Exemplo:

```text
f4e8a12 Adiciona autenticação
91c6b0d Corrige layout
23ab921 Projeto inicial
```

---

# Conectando ao GitHub

Crie um repositório no GitHub.

Adicione a origem remota:

```bash
git remote add origin URL_DO_REPOSITORIO
```

Verifique:

```bash
git remote -v
```

---

# Enviando Código para o GitHub

Primeiro envio:

```bash
git push -u origin main
```

Próximos envios:

```bash
git push
```

---

# Atualizando o Projeto Local

Baixar alterações:

```bash
git pull
```

O comando faz:

```text
git fetch + git merge
```

---

# O que são Branches?

Branches permitem criar linhas de desenvolvimento independentes.

Exemplo:

```text
main
 ├── login
 ├── dashboard
 └── api
```

Cada branch pode evoluir sem afetar a principal.

---

# Criando uma Branch

```bash
git branch minha-branch
```

---

# Trocando de Branch

```bash
git checkout minha-branch
```

Ou:

```bash
git switch minha-branch
```

---

# Criando e Entrando na Branch

```bash
git checkout -b minha-branch
```

Ou:

```bash
git switch -c minha-branch
```

---

# Listando Branches

```bash
git branch
```

Resultado:

```text
* main
  login
  dashboard
```

O asterisco indica a branch atual.

---

# Mesclando Branches

Entrar na branch principal:

```bash
git checkout main
```

Mesclar:

```bash
git merge login
```

---

# Removendo Branches

```bash
git branch -d login
```

Forçar remoção:

```bash
git branch -D login
```

---

# Clonando um Repositório

```bash
git clone URL_DO_REPOSITORIO
```

Exemplo:

```bash
git clone https://github.com/usuario/projeto.git
```

---

# Arquivo .gitignore

Usado para ignorar arquivos que não devem ser versionados.

Exemplo:

```gitignore
node_modules/
.env
dist/
bin/
obj/
```

---

# Convenções de Commits

Exemplos de boas mensagens:

```text
feat: adiciona autenticação JWT
fix: corrige erro de login
docs: atualiza README
refactor: melhora organização da API
style: ajusta espaçamento do layout
```

Evite mensagens como:

```text
teste
ajustes
mudanças
commit
```

---

# Comandos Mais Utilizados

```bash
git init
git status
git add .
git commit -m "mensagem"
git push
git pull
git clone URL
git branch
git checkout nome
git checkout -b nome
git merge nome
git log --oneline
```

---

# Fluxo Completo de Trabalho

Criar projeto:

```bash
git init
```

Adicionar arquivos:

```bash
git add .
```

Criar commit:

```bash
git commit -m "Projeto inicial"
```

Conectar ao GitHub:

```bash
git remote add origin URL_DO_REPOSITORIO
```

Enviar:

```bash
git push -u origin main
```

Continuar trabalhando:

```bash
git add .
git commit -m "Nova funcionalidade"
git push
```

---

# Conclusão

Git é uma das ferramentas mais importantes para qualquer desenvolvedor. Dominar os conceitos de commits, branches, merge e sincronização com o GitHub é fundamental para trabalhar em projetos pessoais, acadêmicos ou profissionais.

Aprenda primeiro:

1. `git init`
2. `git add`
3. `git commit`
4. `git push`
5. `git pull`
6. `git branch`
7. `git checkout`

Com esses comandos você já consegue trabalhar na maioria dos projetos do dia a dia.
