# Curso Engenharia de Sistemas

Site estático do curso de Formação em Engenharia de Sistemas, agora estruturado em múltiplas páginas.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para a branch `main`.
3. No GitHub, acesse `Settings -> Pages`.
4. Em `Source`, escolha `Deploy from a branch`.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve.

O site ficará disponível em:

```text
https://<seu-usuario>.github.io/<nome-do-repositorio>/
```

## Estrutura do projeto

```text
engenharia-sistemas/
├── index.html
├── sobre.html
├── ementa.html
├── docente.html
├── certificacao.html
├── faq.html
├── inscricao.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```

## Como editar o conteúdo no GitHub

Cada item do menu lateral corresponde a um arquivo HTML próprio:

- `index.html`: página inicial
- `sobre.html`: descrição do curso
- `ementa.html`: conteúdo programático
- `docente.html`: informações do docente
- `certificacao.html`: informações sobre certificação
- `faq.html`: perguntas frequentes
- `inscricao.html`: investimento e dados de inscrição

Isso facilita a edição direta no GitHub, porque cada página tem seu conteúdo isolado em um arquivo.

## O que editar em cada tipo de mudança

- Conteúdo de uma página: edite o arquivo HTML correspondente
- Visual do site: edite `assets/css/style.css`
- Comportamento do menu mobile e FAQ: edite `assets/js/main.js`

## Observação

Como o projeto é estático e não usa build, a navegação funciona apenas com arquivos HTML simples. Isso deixa o repositório mais fácil de manter e publicar no GitHub Pages.
