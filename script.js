const items = [{
        title: "Гарри Поттер и философский камень",
        author: "Джоан Роулинг",
        age: "для подростков",
        price: 50,
        img: "./img/HP1.jpeg",
    },
    {
        title: "Гарри Поттер и тайная комната",
        author: "Джоан Роулинг",
        age: "для подростков",
        price: 50,
        img: "./img/HP2.webp",
    },
    {
        title: "Гарри Поттер и узник Азкабана",
        author: "Джоан Роулинг",
        age: "для подростков",
        price: 50,
        img: "./img/HP3.jpeg",
    },
    {
        title: "Гарри Поттер и Кубок огня",
        author: "Джоан Роулинг",
        age: "для подростков",
        price: 50,
        img: "./img/HP4.jpeg",
    },
    {
        title: "Гарри Поттер и Орден Феникса",
        author: "Джоан Роулинг",
        age: "для подростков",
        price: 50,
        img: "./img/HP5.jpeg",
    },
    {
        title: "Гарри Поттер и Принц-полукровка",
        author: "Джоан Роулинг",
        age: "для подростков",
        price: 50,
        img: "./img/HP6.jpeg",
    },
    {
        title: "Гарри Поттер и Дары Смерти",
        author: "Джоан Роулинг",
        age: "для подростков",
        price: 50,
        img: "./img/HP7.jpeg",
    },
    {
        title: "Груффало",
        author: "Джулия Дональдсон",
        age: "для детей",
        price: 18,
        img: "./img/Gruffalo.webp",
    },
    {
        title: "Дочурка Груффало",
        author: "Джулия Дональдсон",
        age: "для детей",
        price: 13,
        img: "./img/Gruffalo's daughter.webp",
    },
    {
        title: "Человеткин",
        author: "Джулия Дональдсон",
        age: "для детей",
        price: 14,
        img: "./img/Stickman.jpeg",
    },
    {
        title: "Тюлька",
        author: "Джулия Дональдсон",
        age: "для детей",
        price: 12,
        img: "./img/Tiddler.webp",
    },
    {
        title: "Новый наряд великана",
        author: "Джулия Дональдсон",
        age: "для детей",
        price: 27,
        img: "./img/New clothes.jpeg",
    },
    {
        title: "Мейзи Хитчинс. Загадка закрытого ящика",
        author: "Холли Вебб",
        age: "для школьников",
        price: 12,
        img: "./img/MH1.jpeg",
    },
    {
        title: "Мейзи Хитчинс. Пропавший изумруд",
        author: "Холли Вебб",
        age: "для школьников",
        price: 11,
        img: "./img/MH2.jpeg",
    },
    {
        title: "Мейзи Хитчинс. Призрак кошки",
        author: "Холли Вебб",
        age: "для школьников",
        price: 12,
        img: "./img/MH3.jpeg",
    },
    {
        title: "Мейзи Хитчинс. Тайна мальчика из джунглей",
        author: "Холли Вебб",
        age: "для школьников",
        price: 12,
        img: "./img/MH4.jpeg",
    },
    {
        title: "Мейзи Хитчинс. Щенок под прикрытием",
        author: "Холли Вебб",
        age: "для школьников",
        price: 12,
        img: "./img/MH5.jpeg",
    },
    {
        title: "Мейзи Хитчинс. Секрет пролитых чернил",
        author: "Холли Вебб",
        age: "для школьников",
        price: 12,
        img: "./img/MH6.jpeg",
    },
    {
        title: "Мейзи Хитчинс. Египетский ребус",
        author: "Холли Вебб",
        age: "для школьников",
        price: 14,
        img: "./img/MH7.jpg",
    },
    {
        title: "Мейзи Хитчинс. Почему русалка плачет",
        author: "Холли Вебб",
        age: "для школьников",
        price: 12,
        img: "./img/MH8.jpeg",
    },
];

let currentState = [...items];

const itemsContainer = document.querySelector("#shop-items");
const itemTemplate = document.querySelector("#item-template");
const nothingFound = document.querySelector("#nothing-found");

function renderItems(arr) {
    nothingFound.textContent = "";
    itemsContainer.innerHTML = "";
    arr.forEach((item) => {
        itemsContainer.append(prepareShopItem(item));
    });
    if (!arr.length) {
        nothingFound.textContent = "Ничего не найдено";
    }
}

function sortByAlphabet(a, b) {
    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
        return -1;
    }
    return 0;
}

renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));

function prepareShopItem(shopItem) {
    const { title, author, age, price, img } = shopItem;
    const item = itemTemplate.content.cloneNode(true);
    item.querySelector("h1").textContent = title;
    item.querySelector("p").textContent = author;
    item.querySelector(".age").textContent = age;
    item.querySelector("img").src = img;
    item.querySelector(".price").textContent = `${price}BYN`;

    return item;
}

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");

function applySearch() {
    const searchString = searchInput.value.trim().toLowerCase();
    const searchByTitle = items.filter((el) =>
        el.title.toLowerCase().includes(searchString)
    );
    const searchByAuthor = items.filter((el) =>
        el.author.toLowerCase().includes(searchString)
    );

    if (searchString.length == 0) {
        currentState = items;
    } else {
        currentState = searchByTitle.concat(searchByAuthor);
    }

    currentState.sort((a, b) => sortByAlphabet(a, b));
    renderItems(currentState);

    sortControl.selectedIndex = 0;
    selectControl.selectedIndex = 0;
}

searchButton.addEventListener("click", applySearch);
searchInput.addEventListener("search", applySearch);

const selectControl = document.querySelector("#select");
selectControl.addEventListener("change", (event) => {
    searchInput.value = "";
    const selectedOption = event.target.value;
    switch (selectedOption) {
        case "kid":
            {
                currentState = items.filter((item) => item.age === "для детей");
                break;
            }
        case "schoolchild":
            {
                currentState = items.filter((item) => item.age === "для школьников");
                break;
            }
        case "teenager":
            {
                currentState = items.filter((item) => item.age === "для подростков");
                break;
            }
        default:
            {
                currentState = items;
            }
    }

    currentState.sort((a, b) => sortByAlphabet(a, b));
    renderItems(currentState);

    sortControl.selectedIndex = 0;
});

const sortControl = document.querySelector("#sort");
sortControl.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
        case "expensive":
            {
                currentState.sort((a, b) => b.price - a.price);
                break;
            }
        case "cheap":
            {
                currentState.sort((a, b) => a.price - b.price);
                break;
            }
        case "alphabet":
            {
                currentState.sort((a, b) => sortByAlphabet(a, b));
                break;
            }
    }

    renderItems(currentState);
});