document.querySelector('.background-login button')
  .addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('active');
  });

  function selectTab(index) {
    const bkg = document.querySelector('.tab-bkg');
    const btn = document.querySelector('tab--btn');

    bkg.style.transform = index === 0 ? 'translateX(0)': 'translateX(100%)';
     btns.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });

    // Mostra/esconde os forms
    document.querySelector('.form-login').style.opacity   = index === 0 ? '1' : '0';
    document.querySelector('.form-register').style.opacity = index === 1 ? '1' : '0';
}

function setupMobile() {
    if (window.innerWidth > 480) return;

    // Mostra login por padrão
    document.querySelector('.form-login').classList.add('visible');
}

function selectTab(index) {
    const pill = document.querySelector('.tab-bkg');
    pill.style.transform = index === 0 ? 'translateX(0)' : 'translateX(100%)';

    document.querySelector('.form-login').classList.toggle('visible', index === 0);
    document.querySelector('.form-register').classList.toggle('visible', index === 1);
}

setupMobile();