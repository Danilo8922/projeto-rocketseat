### oque é HTML
-H = Hyper T = text M = markup L = Lenguage
-HTML = Hypertext markup lenguage => linguagem de marcação de hiper texto
-Hipertexto são linhas que contem textos, links, imagems, vídeo, etc...
O html é usado para estruturar textos

## Markup
marcação de textos, são os elementos html ou TAGS, existem inumeras tags cada uma para um proposito diferente como criar imagems, criar videos, um texto grande ou pequeno, criar links, paragrafos, quebra de linhas e etc...

## sintaxe de uma tag

toda ou quase toda, tag tem uma abertura e um fechamento, com exeções de 
algumas. Exemplo de uma tag, <P>conteudo</P>. todas abrem com um *menor que* e todas fecham com um *Maior que*. 

# comentario 
<!--comentario-->

## Atributos
os atributos servem para adicionar uma informação e/ou configurar uma tag.
exemplo: 
1 = <a href="Aqui vai um link">ver site</a>
2 = <img src="localizão de uma imagem" />


### oque CSS

C = Cascading S = style s sheets 
folha de Estilo em cascata

CSS é o estilo para o html, a aprensentação visual para o cliente, sem o css o html se torna feio, com o css, se souber usar, vai ficar um html agradavel ao olhos

## como o CSS funciona

o CSS funciona atraves de declarações, pedaços de codigo que ira usar as propriedades e valores a serem aplicadas a um elemento HTML

# como escrevemos ?
Body {
    backgraund: black;
  /* esse é um comentario */ 
}

# Cascata

cascata significa que: quando ha 2 ou mais declarações a ultima é a mais relevante

# Especificidade

Cada setor tem um peso e a soma dos pesos, será levada em conta para que determinada declaração seja, mais especifica, a cascata perde a prioridade e é priorizada a especificidade da declaração.

#id {
    peso = 100
}

.class {
    peso = 10 
}

element {
    peso = 1 
}

### box-model
-tudo são caixas, todos os elementos em html serão considerados uma caixa, assim como umacaixa de papelão

-Caixas pssuem determinadas prpriedades, conteudos, largura, altura, borda, preenchimento, (espaço interno), espaçamento (espaço externo)

Margin = espaçamento externo
border = borda do elemento 
padding = prenchimento interno
heigth = altura do elemento
width = largura do elemento
top = topo ou em cima
button = baixo
left = esquerda do elemento
right = esquerda do elemento


### tags HTML

-Tag <Head>: serve para ajustar configuraçoes no documento que não são visiveis

-Tag <meta charset="UTF-8">: define os conjuntos de caracteres da pagina

-Tag <meta name="viewport" content="width=device-width, initial-scale=1.0">: ele define que a parte visivel seja adapitavel ao tamanho da tela do usuario

-Tag <body>: onde tudo que for colocado é visivel ao usuario

-Tag <h1>: titulo grande ou titulo de nivel 1

-Tag <link rel="stylesheet">: serve para colocar arquivos q trabalham junto com o documento HTML como o CSS e javaScript 




### backUp

<a href=""><img src="../projeto/img/Vector.png" alt="github"></a>
<a href=""><img src="../projeto/img/Instagram.png" alt="Instagram"></a>
<a href=""><img src="../projeto/img/YouTube.png" alt=""></a>
<a href=""><img src="../projeto/img/LinkedIn.png" alt="LinkedIn"></a>

### Logica de programação JavaScript

o que é prgramação ? programar é ensinar o computador a fazer determinada tarefa

## metodologia ensinar o computador

algoritimos: sequências de passo a passo, e conjuntos de regras

lógica de programação: é a maneira de pensar

sintaxe: é a maneira correta de escrever

## o que é JavaScript

-java script é uma linguagem de programação interpretada e executada pelos navegadores

-E uma inteligencia da Tríade HTML é a estrutura e CSS é a beleza visual, e JS é a inteligencia

-não é JAVA, apesar do nome ser semelhante, mas são linguagens diferente

## por que JS

Para criar aplicativos, para web, Desktop, (electron) e mobile (react Native)

Empresas famosas Intagram, Google, Netflix, Tik-Tok...

Moderna e viva comunidade e linguagem que cresce cada vez mais

## instruções e sintaxe

toda linguagem é escrita com esses 2 pricipios

instruções(declarações) ordens ao computador

sintaxe Maneira correta de escrever

exemplo: alert("fala, Dev")

alert((10*100) + "abraços")

existem palavras resevardas da linguagem elas são responsaveis em dar significado a diversas instruções

## Executando JavaScript

podemos executar diretamente do navegador

Ferramenta: DevTools apertando o atalho F12

plataformas online: fronteditor.dev e codepen.io

projeto local arquivos no computador

## Variaveis

uma caixa onde guardamos um tipo de dado para usar mais tarde

# tipo de dados

1.Textos
2.Números
3.booleanos(verdadeiro ou falso)
4.dados mais estruturados

como declarar uma variavel

var nome_da_Variavel = "dado"

let boasVindas = "Fala, dev"

REGRAS: A VARIAVEL NÃO PODE COMEÇAR COM NUMEROS NEM CARACTERES ESPECIAS COM *; !; @; ETC... E NEM CONTER ESPAÇOS 

-let: variavel que pode ser mudada o valor no meio do projeto
-const: é uma variavel que não pode ser reatribuida, ela é constantem
-number: variavel numerica, 1  ou 1.2
-string: texto
-boolean: verdadeiro ou falso

## função

função é um:
1.agrupamento de codigos
2.Reuso de codigo
3.mini programa dentro do programa maior
4.toda linguagem oferece muitas opções

exemplo:

// usando uma função
alert("fala, Dev")

//criando uma função

function alert(text){
    return text
}

## objeto

ele domina o javaScript

# tudo é objeto

os objetos possuem: 
-Atributos: são as propriedades de um objetos

-metodos: são as funcionalidades de um objeto 

exemplo:
//criando um objeto
const person = {
    age: 18,
    drive: function() {}
}
usando o objeto
person.drive()

## git-Hub

o que é git: git é um controle de versão, um historico do seu projeto, uma linha do tempo, onde vc salva as suas alterações e pode voltar nelas depois se algo der errado no projeto.

# conceitos basicos 

-Repositorio: local onde ficará o historico do seu projeto
-branch: a linha do tempo
-commit: são os pontos na historia
-stage: preparação do que será enviado para o ponto da historia

# comandos do git

inicia o git (repositorio) no seu projeto: git init

adiciona todos os arquivos modificados, ao stage: git add .

cria e descreve um ponto na historia git commit -m "message here"

envia as alterações para o repositorio: git push


