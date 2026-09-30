# 🎟️ Compra de Ingressos

Projeto desenvolvido no curso da Alura para praticar conceitos fundamentais de **JavaScript**, simulando um sistema de compra de ingressos para diferentes setores de um evento.

O usuário pode selecionar o tipo de ingresso, informar a quantidade desejada e realizar a compra. O sistema verifica a disponibilidade, valida os dados informados e atualiza automaticamente a quantidade de ingressos restantes.

---

## 📌 Sobre o projeto

O projeto consiste em uma página de compra de ingressos com três opções de setor:

- 🎫 Pista
- 🎫 Superior
- 🎫 Inferior

Ao realizar uma compra, o sistema verifica se a quantidade solicitada está disponível para o setor escolhido.

Caso a quantidade seja válida e esteja disponível, o sistema realiza a compra e atualiza o estoque de ingressos na tela.

Caso contrário, uma mensagem de alerta informa o usuário sobre o problema.

---

## 🚀 Funcionalidades

### 🎫 Seleção do tipo de ingresso

O usuário pode escolher entre três diferentes setores.
A aplicação identifica automaticamente o setor selecionado e chama a função correspondente.

### 🔢 Validação da quantidade

Antes de realizar a compra, o sistema verifica se a quantidade informada é válida.

A aplicação impede:

- Campos vazios
- Valores que não sejam números
- Quantidades iguais a zero
- Quantidades negativas

### 📦 Verificação de disponibilidade

O sistema verifica a quantidade de ingressos disponíveis antes de finalizar a compra.

### ➖ Atualização automática do estoque

Quando a compra é realizada com sucesso, a quantidade disponível é diminuída de acordo com a quantidade comprada. Depois, o valor atualizado é exibido novamente na página.


### ✅ Confirmação da compra

Quando a compra é realizada com sucesso, o usuário recebe uma confirmação, que ocorre somente quando existe quantidade suficiente de ingressos disponíveis.

---

## 🧠 Conceitos de JavaScript praticados

Este projeto foi desenvolvido utilizando diversos conceitos fundamentais de JavaScript.

## ⚙️ Funcionalidades JavaScript

- Variáveis (`let`)
- Funções
- Parâmetros
- `if / else if / else`
- `return`
- `parseInt()`
- `isNaN()`
- `document.getElementById()`
- `.value`
- `.textContent`
- `alert()`
- Operadores de comparação
- Operadores lógicos
- Operadores matemáticos
- Manipulação do DOM
- Validação de dados
- Atualização dinâmica da página

---

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura da página
- **CSS3** — estilização e aparência da aplicação
- **JavaScript** — lógica da aplicação, validações e manipulação do DOM
