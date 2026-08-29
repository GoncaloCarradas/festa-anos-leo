/* =====================================================
   APP.JS — SISTEMA DE CONVITE
===================================================== */


/* =====================================================
   PÁGINAS
===================================================== */

const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");
const page4 = document.getElementById("page-4");
const page5 = document.getElementById("page-5");

const declinePage =
    document.getElementById("decline-page");

const finalPage =
    document.getElementById("final-page");


/* =====================================================
   BOTÕES
===================================================== */

const acceptButton =
    document.getElementById("btn-accept");

const declineButton =
    document.getElementById("btn-decline");


const backTo1 =
    document.getElementById("back-to-1");

const continueTo3 =
    document.getElementById("continue-to-3");


const backTo2 =
    document.getElementById("back-to-2");

const continueTo4 =
    document.getElementById("continue-to-4");


const backTo3 =
    document.getElementById("back-to-3");

const continueTo5 =
    document.getElementById("continue-to-5");


const backTo4 =
    document.getElementById("back-to-4");

const finishForm =
    document.getElementById("finish-form");


/* =====================================================
   CAMPOS
===================================================== */

const guestName =
    document.getElementById("guest-name");


const companionContainer =
    document.getElementById(
        "companion-container"
    );


const companionName =
    document.getElementById(
        "companion-name"
    );


const noCompanion =
    document.getElementById(
        "no-companion"
    );


const yesCompanion =
    document.getElementById(
        "yes-companion"
    );


/* =====================================================
   MÚSICAS
===================================================== */

const song1 =
    document.getElementById("song-1");

const song2 =
    document.getElementById("song-2");

const song3 =
    document.getElementById("song-3");


const finalGuestName =
    document.getElementById(
        "final-guest-name"
    );


/* =====================================================
   PROGRESSO
===================================================== */

const step1 =
    document.getElementById("step-1");

const step2 =
    document.getElementById("step-2");

const step3 =
    document.getElementById("step-3");

const step4 =
    document.getElementById("step-4");

const step5 =
    document.getElementById("step-5");


/* =====================================================
   BEBIDAS
===================================================== */

const guestDrinksList =
    document.getElementById(
        "guest-drinks-list"
    );


const guestSelectedDrinks =
    document.getElementById(
        "guest-selected-drinks"
    );


const companionDrinksSection =
    document.getElementById(
        "companion-drinks-section"
    );


const companionDrinksList =
    document.getElementById(
        "companion-drinks-list"
    );


const companionSelectedDrinks =
    document.getElementById(
        "companion-selected-drinks"
    );


/* =====================================================
   DADOS DO CONVIDADO
===================================================== */

let guest = {

    name: "",

    hasCompanion: false,

    companionChoiceMade: false,

    companionName: "",

    drinks: [],

    companionDrinks: [],

    songs: []

};


/* =====================================================
   MUDAR DE PÁGINA
===================================================== */

function showPage(page) {

    page1.classList.remove("active-page");

    page2.classList.remove("active-page");

    page3.classList.remove("active-page");

    page4.classList.remove("active-page");

    page5.classList.remove("active-page");

    declinePage.classList.remove(
        "active-page"
    );

    finalPage.classList.remove(
        "active-page"
    );


    page.classList.add(
        "active-page"
    );

}


/* =====================================================
   ATUALIZAR PROGRESSO
===================================================== */

function updateProgress(currentStep) {

    step1.classList.remove("active");

    step2.classList.remove("active");

    step3.classList.remove("active");

    step4.classList.remove("active");

    step5.classList.remove("active");


    if (currentStep >= 1) {

        step1.classList.add("active");

    }


    if (currentStep >= 2) {

        step2.classList.add("active");

    }


    if (currentStep >= 3) {

        step3.classList.add("active");

    }


    if (currentStep >= 4) {

        step4.classList.add("active");

    }


    if (currentStep >= 5) {

        step5.classList.add("active");

    }

}


/* =====================================================
   PASSO 1 — ACEITAR
===================================================== */

acceptButton.addEventListener(
    "click",
    function () {

        showPage(page2);

        updateProgress(2);

    }
);


/* =====================================================
   PASSO 1 — RECUSAR
===================================================== */

declineButton.addEventListener(
    "click",
    function () {

        showPage(declinePage);

    }
);


/* =====================================================
   PASSO 2 — VOLTAR
===================================================== */

backTo1.addEventListener(
    "click",
    function () {

        showPage(page1);

        updateProgress(1);

    }
);


/* =====================================================
   PASSO 2 — CONTINUAR
===================================================== */

continueTo3.addEventListener(
    "click",
    function () {

        const name =
            guestName.value.trim();


        if (name === "") {

            alert(
                "Por favor, escreve o teu nome. 😊"
            );

            guestName.focus();

            return;

        }


        guest.name = name;


        showPage(page3);

        updateProgress(3);

    }
);


/* =====================================================
   PASSO 3 — VOU SOZINHO
===================================================== */

noCompanion.addEventListener(
    "click",
    function () {

        guest.hasCompanion = false;

        guest.companionChoiceMade = true;

        guest.companionName = "";

        guest.companionDrinks = [];


        companionContainer.classList.add(
            "hidden"
        );


        noCompanion.style.borderColor =
            "#7c3aed";

        yesCompanion.style.borderColor =
            "transparent";

    }
);


/* =====================================================
   PASSO 3 — LEVO ACOMPANHANTE
===================================================== */

yesCompanion.addEventListener(
    "click",
    function () {

        guest.hasCompanion = true;

        guest.companionChoiceMade = true;


        companionContainer.classList.remove(
            "hidden"
        );


        yesCompanion.style.borderColor =
            "#7c3aed";

        noCompanion.style.borderColor =
            "transparent";


        companionName.focus();

    }
);


/* =====================================================
   PASSO 3 — VOLTAR
===================================================== */

backTo2.addEventListener(
    "click",
    function () {

        showPage(page2);

        updateProgress(2);

    }
);


/* =====================================================
   PASSO 3 — CONTINUAR PARA BEBIDAS
===================================================== */

continueTo4.addEventListener(
    "click",
    function () {

        if (
            guest.companionChoiceMade === false
        ) {

            alert(
                "Escolhe primeiro se vais sozinho ou acompanhado. 😊"
            );

            return;

        }


        if (
            guest.hasCompanion === true
        ) {

            const name =
                companionName.value.trim();


            if (name === "") {

                alert(
                    "Escreve o nome do teu acompanhante. 😊"
                );

                companionName.focus();

                return;

            }


            guest.companionName = name;


            companionDrinksSection.classList.remove(
                "hidden"
            );

        }

        else {

            companionDrinksSection.classList.add(
                "hidden"
            );

        }


        showPage(page4);

        updateProgress(4);

    }
);


/* =====================================================
   PASSO 4 — VOLTAR
===================================================== */

backTo3.addEventListener(
    "click",
    function () {

        showPage(page3);

        updateProgress(3);

    }
);


/* =====================================================
   MOSTRAR BEBIDAS ESCOLHIDAS
===================================================== */

function renderSelectedDrinks(type) {

    let drinks;

    let container;


    if (type === "guest") {

        drinks = guest.drinks;

        container =
            guestSelectedDrinks;

    }

    else {

        drinks =
            guest.companionDrinks;

        container =
            companionSelectedDrinks;

    }


    container.innerHTML = "";


    /* ---------------------------------------------
       NENHUMA BEBIDA
    --------------------------------------------- */

    if (drinks.length === 0) {

        container.innerHTML = `
            <p class="empty-drinks">
                Ainda não escolheste nenhuma bebida.
            </p>
        `;

        return;

    }


    /* ---------------------------------------------
       TÍTULO
    --------------------------------------------- */

    const title =
        document.createElement("h3");


    title.textContent =
        "🥇 Arrasta para ordenar:";


    container.appendChild(
        title
    );


    /* ---------------------------------------------
       LISTA DE BEBIDAS
    --------------------------------------------- */

    drinks.forEach(
        function (drink, index) {

            const drinkElement =
                document.createElement("div");


            drinkElement.classList.add(
                "selected-drink"
            );


            /*
               Permitir arrastar
            */

            drinkElement.draggable = true;


            /*
               Guardar a posição
            */

            drinkElement.dataset.index =
                index;


            drinkElement.innerHTML = `

                <span class="drag-handle">
                    ☰
                </span>

                <span class="drink-number">
                    ${index + 1}
                </span>

                <span class="drink-name">
                    ${drink}
                </span>

                <button
                    class="remove-drink"
                    data-index="${index}"
                >
                    ✕
                </button>

            `;


            container.appendChild(
                drinkElement
            );


            /* -------------------------------------
               COMEÇAR A ARRASTAR
            ------------------------------------- */

            drinkElement.addEventListener(
                "dragstart",
                function (event) {

                    drinkElement.classList.add(
                        "dragging"
                    );


                    event.dataTransfer.effectAllowed =
                        "move";


                    event.dataTransfer.setData(
                        "text/plain",
                        index
                    );

                }
            );


            /* -------------------------------------
               TERMINAR ARRASTAMENTO
            ------------------------------------- */

            drinkElement.addEventListener(
                "dragend",
                function () {

                    drinkElement.classList.remove(
                        "dragging"
                    );

                }
            );


            /* -------------------------------------
               PASSAR POR CIMA DE OUTRA BEBIDA
            ------------------------------------- */

            drinkElement.addEventListener(
                "dragover",
                function (event) {

                    event.preventDefault();


                    const dragging =
                        container.querySelector(
                            ".dragging"
                        );


                    if (
                        !dragging ||
                        dragging === drinkElement
                    ) {

                        return;

                    }


                    const rect =
                        drinkElement.getBoundingClientRect();


                    const middle =
                        rect.top +
                        rect.height / 2;


                    if (
                        event.clientY < middle
                    ) {

                        container.insertBefore(
                            dragging,
                            drinkElement
                        );

                    }

                    else {

                        container.insertBefore(
                            dragging,
                            drinkElement.nextSibling
                        );

                    }

                }
            );


            /* -------------------------------------
               DROP
            ------------------------------------- */

            drinkElement.addEventListener(
                "drop",
                function (event) {

                    event.preventDefault();


                    saveDrinkOrder(
                        type,
                        container
                    );

                }
            );


            /* -------------------------------------
               REMOVER BEBIDA
            ------------------------------------- */

            const removeButton =
                drinkElement.querySelector(
                    ".remove-drink"
                );


            removeButton.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();


                    const removeIndex =
                        Number(
                            removeButton.dataset.index
                        );


                    if (
                        type === "guest"
                    ) {

                        guest.drinks.splice(
                            removeIndex,
                            1
                        );

                    }

                    else {

                        guest.companionDrinks.splice(
                            removeIndex,
                            1
                        );

                    }


                    updateDrinkButtons(
                        type
                    );


                    renderSelectedDrinks(
                        type
                    );

                }
            );

        }
    );

}


/* =====================================================
   GUARDAR NOVA ORDEM DAS BEBIDAS
===================================================== */

function saveDrinkOrder(
    type,
    container
) {

    /*
       Procurar todos os elementos
       atualmente na ordem visual.
    */

    const drinkElements =
        container.querySelectorAll(
            ".selected-drink"
        );


    const newOrder = [];


    drinkElements.forEach(
        function (element) {

            const name =
                element.querySelector(
                    ".drink-name"
                );


            if (name) {

                newOrder.push(
                    name.textContent.trim()
                );

            }

        }
    );


    /*
       Guardar a nova ordem.
    */

    if (type === "guest") {

        guest.drinks =
            newOrder;

    }

    else {

        guest.companionDrinks =
            newOrder;

    }


    /*
       Voltar a desenhar a lista
       com a numeração correta.
    */

    renderSelectedDrinks(
        type
    );

}


/* =====================================================
   ATUALIZAR BOTÕES DAS BEBIDAS
===================================================== */

function updateDrinkButtons(type) {

    let drinks;

    let buttons;


    if (type === "guest") {

        drinks =
            guest.drinks;

        buttons =
            guestDrinksList.querySelectorAll(
                ".drink-option"
            );

    }

    else {

        drinks =
            guest.companionDrinks;

        buttons =
            companionDrinksList.querySelectorAll(
                ".companion-drink-option"
            );

    }


    buttons.forEach(
        function (button) {

            const drink =
                button.dataset.drink;


            if (
                drinks.includes(drink)
            ) {

                button.classList.add(
                    "selected"
                );

            }

            else {

                button.classList.remove(
                    "selected"
                );

            }

        }
    );

}


/* =====================================================
   CONFIGURAR BOTÕES DE BEBIDAS
===================================================== */

function setupDrinkButtons() {


    /* ---------------------------------------------
       BEBIDAS DO CONVIDADO
    --------------------------------------------- */

    const guestButtons =
        guestDrinksList.querySelectorAll(
            ".drink-option"
        );


    guestButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const drink =
                        button.dataset.drink;


                    if (
                        guest.drinks.includes(
                            drink
                        )
                    ) {

                        return;

                    }


                    guest.drinks.push(
                        drink
                    );


                    updateDrinkButtons(
                        "guest"
                    );


                    renderSelectedDrinks(
                        "guest"
                    );

                }
            );

        }
    );


    /* ---------------------------------------------
       BEBIDAS DO ACOMPANHANTE
    --------------------------------------------- */

    const companionButtons =
        companionDrinksList.querySelectorAll(
            ".companion-drink-option"
        );


    companionButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const drink =
                        button.dataset.drink;


                    if (
                        guest.companionDrinks.includes(
                            drink
                        )
                    ) {

                        return;

                    }


                    guest.companionDrinks.push(
                        drink
                    );


                    updateDrinkButtons(
                        "companion"
                    );


                    renderSelectedDrinks(
                        "companion"
                    );

                }
            );

        }
    );

}


/* =====================================================
   INICIAR BEBIDAS
===================================================== */

setupDrinkButtons();


/* =====================================================
   PASSO 4 → PASSO 5
===================================================== */

continueTo5.addEventListener(
    "click",
    function () {

        if (
            guest.drinks.length === 0
        ) {

            alert(
                "Escolhe pelo menos uma bebida para continuar. 🍹"
            );

            return;

        }


        if (
            guest.hasCompanion === true &&
            guest.companionDrinks.length === 0
        ) {

            alert(
                "Escolhe pelo menos uma bebida para o teu acompanhante. 🍹"
            );

            return;

        }


        showPage(page5);

        updateProgress(5);

    }
);


/* =====================================================
   PASSO 5 — VOLTAR
===================================================== */

backTo4.addEventListener(
    "click",
    function () {

        showPage(page4);

        updateProgress(4);

    }
);


/* =====================================================
   PASSO 5 — TERMINAR
===================================================== */

finishForm.addEventListener(
    "click",
    function () {

        guest.songs = [];


        const songs = [

            song1.value.trim(),

            song2.value.trim(),

            song3.value.trim()

        ];


        songs.forEach(
            function (song) {

                if (
                    song !== ""
                ) {

                    guest.songs.push(
                        song
                    );

                }

            }
        );


        console.log(
            "================================="
        );

        console.log(
            "RESPOSTA FINAL DO CONVIDADO:"
        );

        console.log(
            guest
        );

        console.log(
            "================================="
        );
        saveToSupabase();
        console.log(
            "GRAVOU:"
        );
        finalGuestName.textContent =
            guest.name;


        showPage(finalPage);

        updateProgress(5);

    }
);