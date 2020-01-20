function createComponent(stringHtml, selector) {
    const div = document.querySelector(selector);
    div.innerHTML = stringHtml;
}

function getArticles(cards) {
    let string = "";
    for (i in cards) {
        const thisString = cardTemplate(cards[i]);
        string += thisString;
    }
    createComponent(string, ".body");
}

function cardTemplate(card) {
    return `<div class="body__content">
        <div class="content__box">
            <div class="box__img">
                <img src="${card.img.src}" alt="${card.img.alt}">
            </div>
            <div class="box__description">
                <h2 class="title">${card.article.title}</h2>
                <p class="subtitle">${card.article.subtitle}</p>
                <p class="description">${card.article.description}</p>
            </div>
        </div>
    </div>`;
}

const footer = `
    <div class="footer__content">
        <p class="content__about-us"><strong>Sobre nós: </strong>Lugar separado para falar qualquer coisa que pode entrar aqui e tudo mais de bom e bla, e talves a nossa empresa. Lugar separado para falar qualquer coisa que pode entrar aqui e tudo mais de bom e bla, e talves a nossa empresa. Lugar separado para falar qualquer coisa que pode entrar aqui e tudo mais de bom e bla, e talves a nossa empresa.</p>
        <div class="content__social-media">
            <p><strong>SIGA-NOS NAS REDES SOCIAIS</strong></p>
            <div class="row">
                <img src="./assets/instagram.svg" alt="">
                <img src="./assets/linkedin.svg" alt="">
            </div>
        </div>
        <p class="about__development"><small>Desenvolvido por: <strong>HD4</strong></small></p>
    </div>`;

const header = `<header class="align-center">
    <div class="content row">
        <div class="content__img row">
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
    </div>
</header>`;

const cards = [
    {
        img: {
            src: "",
            alt: "Imagem a ser exibida"
        },
        article: {
            title: "Blog de viagens, vamos!",
            subtitle: "Blog de viagens, vamos fazer.",
            description:
                "Blog de viagens, vamos fazer alguma coisa bem legal !, Blog de lugar viagens, vamos fazer alguma coisa bem legal ! ,Blog de viagens, vamos fazer alguma coisa bem legal, Blog de viagens, vamos fazer alguma coisa bem lega... ",
            author: "Agathe 15/12"
        }
    },
    {
        img: {
            src: "",
            alt: "Imagem a ser exibida"
        },
        article: {
            title: "Blog de viagens, vamos!",
            subtitle: "Blog de viagens, vamos fazer.",
            description:
                "Blog de viagens, vamos fazer alguma coisa bem legal !, Blog de lugar viagens, vamos fazer alguma coisa bem legal ! ,Blog de viagens, vamos fazer alguma coisa bem legal, Blog de viagens, vamos fazer alguma coisa bem lega... ",
            author: "Agathe 15/12"
        }
    },
    {
        img: {
            src: "",
            alt: "Imagem a ser exibida"
        },
        article: {
            title: "Blog de viagens, vamos!",
            subtitle: "Blog de viagens, vamos fazer.",
            description:
                "Blog de viagens, vamos fazer alguma coisa bem legal !, Blog de lugar viagens, vamos fazer alguma coisa bem legal ! ,Blog de viagens, vamos fazer alguma coisa bem legal, Blog de viagens, vamos fazer alguma coisa bem lega... ",
            author: "Agathe 15/12"
        }
    },
    {
        img: {
            src: "",
            alt: "Imagem a ser exibida"
        },
        article: {
            title: "Blog de viagens, vamos!",
            subtitle: "Blog de viagens, vamos fazer.",
            description:
                "Blog de viagens, vamos fazer alguma coisa bem legal !, Blog de lugar viagens, vamos fazer alguma coisa bem legal ! ,Blog de viagens, vamos fazer alguma coisa bem legal, Blog de viagens, vamos fazer alguma coisa bem lega... ",
            author: "Agathe 15/12"
        }
    }
];

createComponent(header, "header");
createComponent(footer, "footer");
getArticles(cards);
