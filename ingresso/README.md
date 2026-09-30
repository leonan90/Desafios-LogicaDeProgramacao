# 🎟️ Sistema de Compra de Ingressos

Projeto desenvolvido para praticar conceitos fundamentais de **JavaScript**, simulando um sistema de compra de ingressos para diferentes setores de um evento.

O sistema permite selecionar o tipo de ingresso, informar a quantidade desejada e realizar a compra verificando automaticamente a disponibilidade de ingressos.

---

## 📌 Sobre o projeto

O usuário pode escolher entre três tipos de ingresso:

Ao realizar uma compra, o sistema verifica se a quantidade solicitada está disponível e, caso a compra seja possível, atualiza automaticamente a quantidade restante de ingressos.

---

## ⚙️ Funcionalidades

### 🎫 Seleção do tipo de ingresso

O usuário pode selecionar o setor desejado:

- Pista
- Superior
- Inferior

O sistema identifica automaticamente o setor escolhido e direciona a compra para a função correspondente.

---

### 🔢 Validação da quantidade

Antes de realizar a compra, o sistema verifica se a quantidade informada é válida.

São rejeitados:

- Campos vazios
- Valores que não são números
- Valores iguais ou menores que zero
