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
            src: "./assets/artigos/empreendedores-e-coworking.png",
            alt: "Empreendedores trabalhando em um coworking"
        },
        article: {
            title: "Atenção empreendedores!",
            subtitle: "5 razões pelas quais sua empresa deve usar coworkings!",
            description:
                "Há uma crescente tendência de grandes corporações aderirem aos benefícios dos espaços de coworking. Alguns gigantes tecnológicos estão testando o uso de espaços de coworking para os funcionários, para que possam estar próximos e interagir facilmente...",
            author: "Agathe 15/12"
        }
    },
    {
        img: {
            src: "./assets/artigos/investimento-sustentavel.png",
            alt: "Imagem de pessoas felizes trabalhando em equipe"
        },
        article: {
            title: "Um investimento sustentável",
            subtitle: "Economia, Sustentabilidade e Trabalho",
            description:
                "Os espaços coworking são um novo tipo de empreendimento que está em alta. É um modelo jovem, com menos de 10 anos no mercado, possibilita inúmeras formas de geração de renda e destaque, além de trazer remuneração e movimento para os imóveis parados em...",
            author: "Agathe 15/12"
        }
    },
    {
        img: {
            src: "",
            alt: "Imagem a ser exibida"
        },
        article: {
            title: "Viajar e Trabalhar ao Mesmo Tempo?",
            subtitle: "Com coworking é fácil!",
            description:
                "É o sonho de muitos trabalhar de onde quiserem. Enquanto beber um coquetel de coco embaixo de uma palmeira e digitar no seu laptop pode ser logicamente improvável (teclado cheio de areia?), existem maneiras de escapar da vida cotidiana e continuar trabalhando em...",
            author: "Agathe 15/12"
        }
    }
];

getArticles(cards);
