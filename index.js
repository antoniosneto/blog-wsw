function createComponent(stringHtml, selector) {
    const div = document.querySelector(selector);
    div.innerHTML = stringHtml;
}

const footer = `
    <div class="footer__content row">
        <p class="content__about-us"><strong>Sobre nós: </strong>Lugar separado para falar qualquer coisa que pode entrar aqui e tudo mais de bom e bla, e talves a nossa empresa. Lugar separado para falar qualquer coisa que pode entrar aqui e tudo mais de bom e bla, e talves a nossa empresa. Lugar separado para falar qualquer coisa que pode entrar aqui e tudo mais de bom e bla, e talves a nossa empresa.</p>
        <div class="content__right">
            <div class="content__social-media">
                <p><strong>SIGA-NOS NAS REDES SOCIAIS</strong></p>
                <div class="social-media__img row">
                    <img src="./assets/instagram.svg" alt="">
                    <img src="./assets/linkedin.svg" alt="">
                </div>
            </div>
            <p class="about__development"><small>Desenvolvido por: <strong>HD4</strong></small></p>
        </div>
    </div>`;

const header = `<div class="content row">
        <div class="content__img align-center">
            <img src="./assets/logo-work-sweet-home.png" alt="logo da work sweet work">
            <h1>work sweet work</h1>
        </div>
        <div class="content__menu row align-center">
            <a href="">visite nosso site</a>
            <div class="row align-center category">
                <p>categorias</p>
                <i></i>
            </div>
            <img src="./assets/instagram.svg" alt="nosso instagram">
            <img src="./assets/linkedin.svg" alt="nosso linkedin">
        </div>
    </div>`;

createComponent(header, "header");
createComponent(footer, "footer");
