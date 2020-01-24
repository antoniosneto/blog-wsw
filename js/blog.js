function getArticles(cards) {
    let string = "";
    for (i in cards) {
        const thisString = cardTemplate(cards[i]);
        string += thisString;
    }
    createComponent(string, ".body__content");
}

function cardTemplate(card) {
    return `
        <a href="${card.href}">
            <div class="content__box">
                <div class="box__img align-center">
                    <img src="${card.img.src}" alt="${card.img.alt}">
                </div>
                <div class="box__description">
                    <h2 class="title">${card.article.title}</h2>
                    <p class="subtitle">${card.article.subtitle}</p>
                    <p class="description">${card.article.description}</p>
                </div>
            </div>
        </a>`;
}

const cards = [
    {
        img: {
            src: "https://cdn.discordapp.com/attachments/545125933267550219/669590275571580946/digital-nomade.png",
            alt: "Imagem de um nômade digital trabalhando"
        },
        article: {
            title: "Trabalhando em um Coworking",
            subtitle: "10 motivos para trabalhar em um coworking",
            description:
                "A indústria de coworking está crescendo e cada vez mais pessoas procuram um lugar onde possam trabalhar sem estar em casa, em uma cafeteria ou gastando com aluguel de um escritório. Espaços de coworking têm inúmeros benefícios para os membros, como falta...",
            author: "Agathe 15/12"
        },
        href: "./artigos/trabalhando-em-um-coworking.html"
    },
    {
        img: {
            src: "https://cdn.discordapp.com/attachments/545125933267550219/669590278444810261/empreendedores-e-coworking.png",
            alt: "Empreendedores trabalhando em um coworking"
        },
        article: {
            title: "Atenção empreendedores!",
            subtitle: "5 razões pelas quais sua empresa deve usar coworkings!",
            description:
                "Há uma crescente tendência de grandes corporações aderirem aos benefícios dos espaços de coworking. Alguns gigantes tecnológicos estão testando o uso de espaços de coworking para os funcionários, para que possam estar próximos e interagir facilmente...",
            author: "Agathe 15/12"
        },
        href: "./artigos/5-razoes-para-usar-um-coworking.html"
    },
    {
        img: {
            src: "https://cdn.discordapp.com/attachments/545125933267550219/669590279249985536/investimento-sustentavel.png",
            alt: "Imagem de pessoas felizes trabalhando em equipe"
        },
        article: {
            title: "Um investimento sustentável",
            subtitle: "Economia, Sustentabilidade e Trabalho",
            description:
                "Os espaços coworking são um novo tipo de empreendimento que está em alta. É um modelo jovem, com menos de 10 anos no mercado, possibilita inúmeras formas de geração de renda e destaque, além de trazer remuneração e movimento para os imóveis parados em...",
            author: "Agathe 15/12"
        },
        href: "./artigos/coworking-um-investimento-sustentavel.html"
    },
    {
        img: {
            src: "https://cdn.discordapp.com/attachments/545125933267550219/669590791127302154/viajar-e-trabalhar.png",
            alt: "Imagem a ser exibida"
        },
        article: {
            title: "Viajar e Trabalhar ao Mesmo Tempo?",
            subtitle: "Uma moça feliz indo viajar com seu computador",
            description:
                "É o sonho de muitos trabalhar de onde quiserem. Enquanto beber um coquetel de coco embaixo de uma palmeira e digitar no seu laptop pode ser logicamente improvável (teclado cheio de areia?), existem maneiras de escapar da vida cotidiana e continuar trabalhando em...",
            author: "Agathe 15/12"
        },
        href: "./artigos/viajar-e-trabalhar-ao-mesmo-tempo.html"
    },
    {
        img: {
            src: "https://cdn.discordapp.com/attachments/545125933267550219/669590277652217896/home-office.png",
            alt: "Uma mesa com café e computadores"
        },
        article: {
            title: "Home Office ou Coworking?",
            subtitle: "Dúvida cruel!",
            description:
                "Hoje não restam dúvidas que as novas gerações dão muito mais valor à liberdade de tempo do que a qualquer outra coisa. Isso, inclusive, é uma característica muito comum dos novos profissionais. Por esse motivo, fazer aquela velha comparação...",
            author: "Agathe 15/12"
        },
        href: "./artigos/home-office-ou-coworking.html"
    }
];

getArticles(cards);
