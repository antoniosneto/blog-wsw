function getArticles(cards) {
    let string = "";
    for (i in cards) {
        const thisString = cardTemplate(cards[i]);
        string += thisString;
    }
    createComponent(string, ".body__content");
}

function cardTemplate(card) {
    return `<div class="content__box">
            <div class="box__img align-center">
                <img src="${card.img.src}" alt="${card.img.alt}">
            </div>
            <div class="box__description">
                <h2 class="title">${card.article.title}</h2>
                <p class="subtitle">${card.article.subtitle}</p>
                <p class="description">${card.article.description}</p>
            </div>
        </div>`;
}

const cards = [
    {
        img: {
            src: "./assets/artigos/digital-nomade.png",
            alt: "Imagem de um nômade digital trabalhando"
        },
        article: {
            title: "Trabalhando em um Coworking",
            subtitle: "10 motivos para trabalhar em um coworking",
            description:
                "A indústria de coworking está crescendo e cada vez mais pessoas procuram um lugar onde possam trabalhar sem estar em casa, em uma cafeteria ou gastando com aluguel de um escritório. Espaços de coworking têm inúmeros benefícios para os membros, como falta...",
            author: "Agathe 15/12"
        }
    },
    {
        img: {
            src: "./assets/artigos/digital-nomade.png",
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
            src: "./assets/artigos/digital-nomade.png",
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
            src: "./assets/artigos/digital-nomade.png",
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

getArticles(cards);
