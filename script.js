const container = document.querySelector('.container'); 
const bgButton  = document.querySelector('.background-login button');
const bgH1      = document.querySelector('.background-login h1');
const bgP       = document.querySelector('.background-login p');

bgButton.addEventListener('click', () => {
    const isActive = container.classList.toggle('active');

    if (isActive) {
        bgH1.textContent   = 'Possui uma conta?';
        bgP.textContent    = 'Entre com sua conta para acessar nossos recursos!';
        bgButton.textContent = 'Entrar';
    } else {
        bgH1.textContent   = 'Bem Vindo!';
        bgP.textContent    = 'Registre sua conta agora para aproveitar todos os recursos!';
        bgButton.textContent = 'Registrar';
    }
});

function selectTab(index) {
    const pill = document.querySelector('.tab-bkg');
    const btns = document.querySelectorAll('.tab-btn'); // ← querySelectorAll, não querySelector

    pill.style.transform = index === 0 ? 'translateX(0)' : 'translateX(100%)';

    btns.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });

    document.querySelector('.form-login').classList.toggle('visible', index === 0);
    document.querySelector('.form-register').classList.toggle('visible', index === 1);
}

function setupMobile() {
    if (window.innerWidth > 480) return;
    document.querySelector('.form-login').classList.add('visible');
}

setupMobile();