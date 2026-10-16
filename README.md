# 🌐 Desenvolvimento Web

Nessa seção iremos desenvolver uma página simples de login, comentando e pontuando todo o processo.

![Modelo da página](./model.png)

## 🧱 1. Como funciona o HTML

Antes de tudo, abra seu VS Code e crie um arquivo chamado `index.html`.

Agora, no arquivo, escreva `html:5`. O VS Code irá mostrar uma opção de autocomplete. Pressione **Enter** nessa opção e ele irá gerar uma estrutura básica do HTML, algo como:

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>

</html>
```

Por enquanto, iremos trabalhar no espaço entre as tags `<body>` e `</body>`.

Para visualizar a interface, instale a extensão **Live Server** no VS Code. Após instalar, aparecerá um botão **Go Live** no canto inferior direito. Clique nele para abrir a página no navegador, geralmente em um endereço como `http://127.0.0.1:5500`.

**Observação:** lembre-se sempre de salvar o arquivo depois de uma alteração.

### 📝 1.1. Elementos básicos do HTML

O HTML é uma linguagem de marcação. Nele, vamos definir todos os elementos da nossa interface.

Cada texto, imagem, ícone e outros elementos serão definidos no HTML.

Por exemplo, escreva:

```html
<p>Teste</p>
```

Essa tag `<p>` é utilizada para adicionar um parágrafo, ou seja, um texto na nossa página. Tudo o que escrevermos entre as tags aparecerá na tela com a formatação padrão do navegador.

Agora, escreva logo abaixo:

```html
<h1>Título</h1>
```

A tag `<h1>` representa o título principal da página. Por padrão, ela apresenta um texto maior e em negrito, sendo ótima para títulos.

Mas, claro, toda essa estilização poderá ser configurada com CSS.

Temos também uma tag para criar botões.

Escreva:

```html
<button>Cadastrar</button>
```

Agora você verá um botão básico na sua interface.

### 📦 1.2. Organizando os componentes com `div`

Certo, agora que temos esses componentes no HTML, precisamos organizá-los de forma que consigamos estilizar cada parte da maneira que queremos. Para isso, usamos a tag `<div>`.

Essa tag, sozinha, não irá fazer nada de diferente visualmente. Ela serve para agrupar componentes, pois haverá partes da nossa interface que terão suas próprias regras de espaçamento e estilização.

Dentro dessa `div`, podemos separar outros componentes:

```html
<div>
    <h2>Bem-vindo</h2>
    <p>Preencha suas credenciais</p>
</div>
```

E, para identificarmos essa `div` no CSS, precisamos nomeá-la. Para isso, usamos o atributo `class`:

```html
<div class="boasVindas">
    <h2>Bem-vindo</h2>
    <p>Preencha suas credenciais</p>
</div>
```

Agora, no CSS, podemos selecionar a classe `.boasVindas` para estilizar esse componente.

O atributo `class` pode ser utilizado em diferentes tags. Se quiser nomear elementos como `<h2>` e `<p>`, você também pode. Muitas vezes, isso ajuda a deixar a estilização mais organizada e definida.

### 🏗️ 1.3. HTML no projeto

Abra o arquivo `index.html` dentro da pasta `src` e observe a estrutura.

Isolei o conteúdo principal criando um componente `<main>` dentro do `body`, para não precisarmos configurar todo o conteúdo diretamente no `body`.

Dentro de `main`, criei uma `div` chamada `container`, onde ficará todo o conteúdo. É sempre bom criar um container principal, pois assim temos um componente que facilita a centralização do conteúdo e outras estilizações.

Depois, criei uma `div` chamada `box`, que representa essa caixa central que vemos no meio da página.

Dentro dela, temos duas áreas: o lado esquerdo, com a imagem, e o lado direito, com o formulário.

No lado esquerdo, adicionei uma imagem com a tag `<img>`. No lado direito, criei uma `div` para o formulário, onde ficam os textos, os campos de entrada (*inputs*) e os botões.

A área dos inputs foi separada para que eu possa configurar o espaçamento e a estilização desses componentes de forma independente, caso queira utilizar regras diferentes.

E pronto! Nosso HTML já está feito.

Esta imagem representa como nossos componentes ficam organizados:

![Diagrama da estrutura HTML](./diagram.png)

Vale ressaltar que, na parte superior do HTML, temos algo como:

```html
<link rel="stylesheet" type="text/css" href="./style.css">
```

Essa é a nossa conexão com o CSS. Criei um arquivo CSS e, por meio dessa linha, digo ao HTML que quero vinculá-lo ao arquivo de estilização.

O atributo `rel="stylesheet"` indica que o arquivo vinculado é uma folha de estilos. O atributo `type="text/css"` informa o tipo de conteúdo, mas é opcional em HTML5, pois o navegador já reconhece CSS nesse contexto.

Por último, temos `href="./style.css"`, que indica o caminho do arquivo CSS.

## 🎨 2. Como funciona o CSS

O CSS é utilizado para definir a aparência dos elementos HTML. Após fazer a conexão no HTML, basta selecionar os componentes e aplicar os estilos desejados.

### 🔎 2.1. Selecionando elementos e classes

Se quisermos selecionar uma classe que nomeamos no HTML, usamos um ponto (`.`) seguido do nome da classe.

Por exemplo:

```html
<div class="conteudo">
</div>
```

No CSS, podemos escrever:

```css
.conteudo {

}
```

Tudo o que escrevermos dentro das chaves será aplicado aos elementos que possuem a classe `conteudo`.

Mas também podemos selecionar diretamente uma tag:

```css
div {

}
```

Nesse caso, a estilização será aplicada a todas as tags `<div>` da página.

Da mesma forma, podemos selecionar o `body`:

```css
body {

}
```

Tudo o que estiver dentro dessas chaves será a estilização aplicada ao componente `body`.

Quando queremos selecionar uma classe, usamos um ponto antes do nome:

```css
.botao {

}
```

Aqui, a estilização será aplicada aos elementos que possuem a classe `botao`.

Vale lembrar que todos os elementos que possuem a mesma classe podem receber as mesmas estilizações. Isso é importante quando temos vários componentes que devem seguir um padrão.

Por exemplo, se quisermos que todos os inputs tenham a mesma aparência, podemos atribuir a mesma classe a eles e estilizar essa classe no CSS. Assim, todos os elementos que possuem essa classe receberão as mesmas regras.

## 🛠️ 2.2. CSS no projeto

Agora vamos aplicar esses conceitos ao nosso projeto, seguindo a ordem em que os seletores aparecem no arquivo CSS.

### 🔹 1. Seletor universal (`*`)

```css
* {
    margin: 0;
    padding: 0;
}
```

Quando criamos uma página HTML, vários elementos possuem margens e espaçamentos internos definidos pelo navegador.

Por isso, é comum começar a estilização zerando esses valores, para termos mais controle sobre o layout.

O seletor `*` significa que essa estilização será aplicada a todos os elementos.

- **`margin: 0;`** — remove as margens externas dos elementos.
- **`padding: 0;`** — remove os espaçamentos internos dos elementos.

Assim, começamos a estilização do zero, definindo os espaçamentos conforme a necessidade do projeto.

### 🔹 2. Corpo da página (`body`)

```css
body {
    height: 100vh;

    background-color: #f0f2f5;

    font-family: sans-serif;
}
```

O `body` representa o corpo da página HTML. É nele que fica o conteúdo visível da nossa interface.

Por padrão, o conteúdo pode parecer concentrado no topo da página. O DevTools do navegador pode ajudar a visualizar as dimensões dos elementos e entender como eles ocupam espaço.

- **`height: 100vh;`** — define a altura do `body` como 100% da altura da área visível da tela, chamada *viewport*. A unidade `vh` representa uma porcentagem da altura do viewport.
- **`background-color: #f0f2f5;`** — define a cor de fundo da página.
- **`font-family: sans-serif;`** — define a família tipográfica utilizada nos textos.

### 🔹 3. Elemento principal (`main`)

```css
main {
    height: 100vh;
}
```

Isolei o conteúdo principal dentro de `main`. Agora, também defino uma altura para esse componente.

- **`height: 100vh;`** — faz com que o `main` tenha uma altura igual à altura do viewport.

### 🔹 4. Container principal (`.container`)

```css
.container {
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
}
```

Dentro de `main`, temos a classe `.container`, que reúne o conteúdo da página.

Aqui, quero que os componentes filhos fiquem centralizados.

Para isso, utilizo `display: flex`. Existem vários valores possíveis para a propriedade `display`, mas prefiro trabalhar com Flexbox. Dependendo do layout, outras opções também podem ser mais adequadas.

- **`height: 100vh;`** — faz o container ocupar toda a altura do viewport.
- **`display: flex;`** — ativa o Flexbox, permitindo organizar e alinhar os elementos filhos.
- **`align-items: center;`** — alinha os elementos no eixo transversal.
- **`justify-content: center;`** — alinha os elementos no eixo principal.

Essas duas últimas propriedades têm funcionalidades mais amplas, mas, inicialmente, podemos entendê-las como propriedades que ajudam a centralizar os elementos.

Como o Flexbox utiliza `row` como direção padrão, o eixo principal é horizontal e o transversal é vertical. Por isso, nesse caso, `justify-content: center` centraliza horizontalmente e `align-items: center` centraliza verticalmente.

### 🔹 5. Caixa principal (`.box`)

```css
.box {
    width: 50rem;
    height: 30rem;

    display: flex;

    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.497);

    border-radius: 1rem;

    background-color: white;
}
```

No `.box`, definimos a largura e a altura da caixa central da nossa interface.

- **`width: 50rem;`** — define a largura da caixa.
- **`height: 30rem;`** — define a altura da caixa.

Utilizamos `rem`, uma unidade de medida relativa ao tamanho da fonte do elemento raiz, geralmente o `html`. Na configuração padrão dos navegadores, `1rem` normalmente equivale a `16px`.

Aqui, podemos aumentar ou diminuir os valores até encontrarmos um tamanho adequado para a caixa.

Em seguida, temos:

- **`display: flex;`** — organiza os componentes filhos usando Flexbox. Como a direção padrão é `row`, eles ficam lado a lado.

Agora vamos estilizar o efeito de sombra que faz a caixa parecer elevada:

- **`box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.497);`** — adiciona uma sombra à caixa.

A propriedade `box-shadow` recebe valores que definem o deslocamento, o desfoque e a cor da sombra.

Neste exemplo:

1. O primeiro `1px` representa o deslocamento horizontal da sombra.
2. O segundo `1px` representa o deslocamento vertical.
3. O `10px` representa a intensidade do desfoque.
4. `rgba(0, 0, 0, 0.497)` define a cor preta com transparência.

Depois disso, vamos arredondar os cantos da caixa:

- **`border-radius: 1rem;`** — arredonda os cantos. Quanto maior o valor, mais arredondados eles ficam.

Por último:

- **`background-color: white;`** — define a cor de fundo da caixa como branca.

### 🔹 6. Imagem da caixa (`.box img`)

```css
.box img {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
}
```

Veja que, em `.box img`, estamos selecionando uma tag `<img>` que está dentro de um elemento com a classe `.box`.

O CSS permite selecionar elementos com base nessa relação, aplicando estilos apenas às imagens que estão dentro da caixa.

- **`border-top-left-radius: 1rem;`** — arredonda o canto superior esquerdo da imagem.
- **`border-bottom-left-radius: 1rem;`** — arredonda o canto inferior esquerdo da imagem.

As propriedades têm nomes parecidos com `border-radius`, pois também servem para arredondar os cantos. A diferença é que, nesse caso, escolhemos exatamente quais cantos serão arredondados.

`top left` significa superior esquerdo, enquanto `bottom left` significa inferior esquerdo.

### 🔹 7. Formulário (`.form`)

```css
.form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 3rem;
}
```

Na classe `.form`, começamos definindo `width: 100%`.

- **`width: 100%;`** — define a largura do formulário como 100% do espaço de referência disponível.

O espaço disponível depende do componente pai, que neste caso é a `.box`. Como dentro dela temos a imagem e o formulário, o espaço precisa ser dividido entre esses componentes.

Logo depois, utilizamos o Flexbox para organizar os elementos:

- **`display: flex;`** — ativa o Flexbox.
- **`flex-direction: column;`** — define a direção dos elementos filhos como coluna, deixando um componente abaixo do outro.
- **`align-items: center;`** — centraliza os elementos no eixo transversal. Como a direção é `column`, isso corresponde à centralização horizontal.
- **`justify-content: center;`** — centraliza os elementos no eixo principal, que nesse caso é vertical.

Por último, temos uma propriedade nova:

- **`padding: 3rem;`** — define o espaçamento interno do formulário em todos os lados.

O `padding` cria espaço