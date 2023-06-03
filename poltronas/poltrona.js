const poltronas = document.querySelectorAll('.poltrona');
const calcularBtn = document.querySelector('#calcular');
const total = document.querySelector('#total');
const poltronaLivre = document.querySelector('.poltrona')

let poltronasSelecionadas = []; // array para armazenar as poltronas selecionadas

// Adiciona evento de clique em cada poltrona
poltronas.forEach(poltrona => {
  poltrona.addEventListener('click', () => {
      // Atualiza a classe CSS da poltrona clicada
      poltrona.classList.add('selecionada');

    // Cria os botões 'meia' e 'inteira'
    const btnMeia = document.createElement('button');
    btnMeia.textContent = 'Meia';

    const btnInteira = document.createElement('button');
    btnInteira.textContent = 'Inteira';

    // Exibe uma mensagem pedindo para o usuário selecionar o preço
    const mensagem = document.createElement('p');
    mensagem.textContent = `Selecione o preço para a poltrona ${poltrona.getAttribute('box')}:`;

    // Adiciona os botões e a mensagem no HTML
    const container = document.createElement('div');
    container.appendChild(mensagem);
    container.appendChild(btnMeia);
    container.appendChild(btnInteira);
    document.body.appendChild(container);



    // Adiciona eventos de clique nos botões 'meia' e 'inteira'
    btnMeia.addEventListener('click', () => {
      // Adiciona a poltrona selecionada no array com o preço 'meia'
      poltronasSelecionadas.push({ element: poltrona, isMeia: true });

      // Atualiza a classe CSS da poltrona clicada
      poltrona.classList.add('vendida');

      // Remove os botões e a mensagem do HTML
      document.body.removeChild(container);

    });


    btnInteira.addEventListener('click', () => {
      // Adiciona a poltrona selecionada no array com o preço 'inteira'
      poltronasSelecionadas.push({ element: poltrona, isMeia: false });

      // Atualiza a classe CSS da poltrona clicada
      poltrona.classList.add('vendida');

      // Remove os botões e a mensagem do HTML
      document.body.removeChild(container);


      
    });
  });
});



// Adiciona evento de clique no botão de calcular
calcularBtn.addEventListener('click', () => {
  // Calcula o preço
  calcularPreco();
});
const imprimirBtn = document.querySelector('#imprimir');

imprimirBtn.addEventListener('click', () => {
  let texto = '';
  poltronasSelecionadas.forEach(poltrona => {
    let tipo = poltrona.isMeia ? 'meia' : 'inteira';
    texto += `Poltrona ${poltrona.element.getAttribute('box')}: ${tipo}\n`;
  });
  
  alert(texto);
});



function calcularPreco() {
  let precoTotal = 0;

  // Calcula o preço total de todas as poltronas selecionadas
  poltronasSelecionadas.forEach(poltrona => {
    let preco = parseFloat(poltrona.element.getAttribute('data-price'));
    preco = preco * (poltrona.isMeia ? 0.5 : 1);
    precoTotal += preco;
  });

  // Atualiza o preço total
  total.textContent = `R$ ${precoTotal.toFixed(2)}`;
}

