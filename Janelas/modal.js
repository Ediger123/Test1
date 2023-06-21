function abrirModal() {
    const modal = document.getElementById('janela-modal');
    modal.classList.add('abrir');
  
    const containerFlex = document.querySelector('.container-flex');
    containerFlex.classList.add('blur');
  
    modal.addEventListener('click', (e) => {
      if (e.target.id === 'fechar' || e.target.id === 'janela-modal') {
        modal.classList.remove('abrir');
        containerFlex.classList.remove('blur');
      }
    });
  }
  