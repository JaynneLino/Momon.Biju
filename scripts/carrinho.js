document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.adicionar-carrinho');
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalSpan = document.getElementById('total');

    let total = 0;
    const itensCarrinho = [];
    const quantidadeItens = {}; // Objeto para rastrear a quantidade de cada item

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const nome = botao.dataset.nome;
            const preco = parseFloat(botao.dataset.preco);

            if (isNaN(preco)) {
                alert('Preço inválido. Não foi possível adicionar ao carrinho.');
                return;
            }

            // Atualiza a quantidade do item
            
            if (quantidadeItens[nome]) {
                quantidadeItens[nome]++;
            } else {
                quantidadeItens[nome] = 1;
                const li = document.createElement('li');
                li.dataset.nome = nome;
                li.textContent = `${nome} - R$ ${preco.toFixed(2)} (x${quantidadeItens[nome]})`;
                listaCarrinho.appendChild(li);
                itensCarrinho.push(li);
            }

            // Atualiza o texto do item no carrinho
            const itemNoCarrinho = [...listaCarrinho.children].find(li => li.dataset.nome === nome);
            if (itemNoCarrinho) {
                itemNoCarrinho.textContent = `${nome} - R$ ${preco.toFixed(2)} (x${quantidadeItens[nome]})`;
            }

            const mensagemVazio = document.getElementById('mensagem-vazio');
            if (mensagemVazio) {
              mensagemVazio.style.display = 'none';
            }


            // Atualiza o total
            total += preco;
            totalSpan.textContent = total.toFixed(2);

            // Exibe a mensagem de "+1" ou "+ quantidade"
            // Badge flutuante animado "+1"
          const badge = document.createElement('span');
          badge.textContent = '+1';
          badge.style.position = 'absolute';
          badge.style.backgroundColor = '#00b27a';
          badge.style.color = '#fff';
          badge.style.padding = '4px 8px';
          badge.style.borderRadius = '50px';
          badge.style.fontSize = '0.9rem';
          badge.style.fontWeight = 'bold';
          badge.style.zIndex = '1000';
          badge.style.opacity = '1';
          badge.style.transition = 'all 0.6s ease-out';
          badge.style.pointerEvents = 'none';

          const rect = botao.getBoundingClientRect();
          badge.style.left = `${rect.left + window.scrollX + rect.width / 2 - 15}px`;
          badge.style.top = `${rect.top + window.scrollY - 10}px`;

          document.body.appendChild(badge);

          // Animação
          setTimeout(() => {
            badge.style.transform = 'translateY(-30px)';
            badge.style.opacity = '0';
          }, 50);

          setTimeout(() => {
            badge.remove();
          }, 700);
          
                  });

    });
    // Finalizar pedido via WhatsApp (com número fixo da loja)    
    const finalizarPedidoBtn = document.getElementById('finalizar-pedido');
      if (finalizarPedidoBtn) {
        finalizarPedidoBtn.addEventListener('click', (e) => {
          e.preventDefault();

    const itensVisiveis = [...listaCarrinho.querySelectorAll('li')].filter(li => li.id !== 'mensagem-vazio');

      if (itensVisiveis.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
      } else {
        const mensagemVazio = document.getElementById('mensagem-vazio');
        if (mensagemVazio) {
          mensagemVazio.style.display = 'none';
        }
      }

              const telefoneLoja = '5574988067246'; // Substitua pelo número real da loja
              const itens = Object.entries(quantidadeItens)
                  .map(([nome, quantidade]) => `• ${nome} (x${quantidade})`)
                  .join('%0A');
              const mensagem = `🛍️ Olá! Gostaria de fazer o seguinte pedido:%0A${itens}%0A%0ATotal: R$ ${total.toFixed(2)}`;
              const url = `https://wa.me/${telefoneLoja}?text=${mensagem}`;

              window.open(url, '_blank');
          });
      }
  });


  // abrir carrinho

  const toggleCarrinhoBtn = document.getElementById('toggle-carrinho');
  const carrinho = document.getElementById('carrinho');

  toggleCarrinhoBtn.addEventListener('click', () => {
    carrinho.classList.toggle('aberto');
  });

  // fechar carrinho
  const fecharBtn = document.getElementById('fechar-carrinho');

  fecharBtn.addEventListener('click', () => {
    carrinho.classList.remove('aberto');
    overlay.classList.remove('visivel');
  });