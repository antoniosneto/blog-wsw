function createComponent(stringHtml, selector) {
    const div = document.querySelector(selector);
    div.innerHTML = stringHtml;
}

const footer = `
    <div class="footer__content row">
        <div class="content__left">
            <a href="http://blog.wsweetwork.com.br"><img src="http://blog.wsweetwork.com.br/assets/logo-work-sweet-home.png" alt="logo da work sweet work"></a>
            <p class="content__about-us"><strong>Sobre nós: </strong>Nós somos jovens. Fazemos parte da geração de novos trabalhadores e queremos motivar vocês a fazerem parte desta revolução. Qual a melhor forma de trabalhar? Como conciliar vida pessoal com profissional? Como ser mais produtivo? Como empreender neste mundo louco? Nós estamos aqui para te dar essas respostas e caminhar junto com você nesta descoberta de mundo. Não existem barreiras. Você está pronto?</p>
        </div>
        <div class="content__right">
            <div class="content__social-media">
                <p><strong>SIGA-NOS NAS REDES SOCIAIS</strong></p>
                <div class="social-media__img row">
                    <a href="https://www.instagram.com/work.sweet.work/" target="_blank"><img src="http://blog.wsweetwork.com.br/assets/instagram.svg" alt=""></a>
                    <a href="https://www.linkedin.com/company/worksweetwork/ target="_blank""><img src="http://blog.wsweetwork.com.br/assets/linkedin.svg" alt=""></a>
                </div>
            </div>
            <p class="about__development"><small>Desenvolvido por: <strong>HD4</strong></small></p>
        </div>
    </div>`;

const header = `<div class="content row">
        <div class="content__img align-center">
            <a href="http://blog.wsweetwork.com.br"><img src="http://blog.wsweetwork.com.br/assets/logo-work-sweet-home.png" alt="logo da work sweet work"></a>
            <h1>work sweet work</h1>
        </div>
        <div class="content__menu row align-center">
            <a href="http://www.wsweetwork.com.br">visite nosso site</a>
            <a href="https://www.instagram.com/work.sweet.work/" target="_blank"><img src="http://blog.wsweetwork.com.br/assets/instagram.svg" alt="nosso instagram"></a>
            <a href="https://www.linkedin.com/company/worksweetwork/" target="_blank"><img src="http://blog.wsweetwork.com.br/assets/linkedin.svg" alt="nosso linkedin"></a>
        </div>
    </div>`;

createComponent(header, "header");
createComponent(footer, "footer");
