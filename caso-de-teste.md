# Caso de Teste: Compra de produto

**ID:** CT-001  
**Objetivo:** Validar o fluxo de compra completo no SauceDemo  
**Pré-condições:** Acessar o site https://www.saucedemo.com/

---

## Passos:

1. Acessar o site
2. Preencher usuário: `standard_user`
3. Preencher senha: `secret_sauce`
4. Clicar em "Login"
5. Adicionar produto "Sauce Labs Backpack" ao carrinho
6. Acessar o carrinho
7. Validar nome e descrição do produto
8. Clicar em "Checkout"
9. Preencher dados:
   - Nome: Paulo
   - Sobrenome: Silva
   - CEP: 12345
10. Clicar em "Continue"
11. Validar informações do pedido e total
12. Finalizar a compra
13. Validar mensagem "Thank you for your order!"

---

## Resultado Esperado:
Compra finalizada com sucesso e redirecionamento à tela inicial.
