import { cardList } from "./cardList.js";

window.onload = () => {

    const spells = ["FinalDestiny"];
    const traps = ["AmazonArchers"];

    const playerMonsterZones = document.getElementById("player-mzones");
    const playerSpellTrapZones = document.getElementById("player-stzones");
    const playerHandZones = document.getElementById("player-hand");
    let playerGraveyard = {monster: "", spell: "", trap: ""};

    ///

    let myDeck = [];
    cardList.forEach(i => myDeck.push(i));

    function shuffleDeck(deck) {
        for (let i = 0; i < 500; i++) {
            let a = Math.floor(Math.random() * deck.length);
            let b = Math.floor(Math.random() * deck.length);
            let temp = deck[a];
            deck[a] = deck[b];
            deck[b] = temp;
        }
    }
    shuffleDeck(myDeck)

    function draw1CardFromDeck(myDeck) {
        if (myDeck.length < 1) return;
        for (let i = 0; i < playerHandZones.childElementCount; i++) {
            let handZone = playerHandZones.children[i];
            if (!handZone.hasChildNodes()) {
                let index = Math.floor(Math.random() * cardList.length);
                let drawnCard = myDeck.pop();
                console.log(myDeck);
                console.log(drawnCard);
                let img = createCardImageFromObject(drawnCard);
                handZone.append(img);
                return;
            }
        }
    }

    // [1] //

    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("mouseover", () => {
            const infoImage = document.querySelector("#info-image");
            infoImage.innerHTML = ""
            let image = document.createElement("img");
            image.src = img.src;
            infoImage.append(image);
        });
    });

    let focusedCard = document.querySelector("#player-mzone1");
    focusedCard.classList.add("selected-card");

    window.addEventListener("keydown", (e) => {
        const downAreas = ["player-mzone", "player-stzone", "player-hand"];
        const upAreas = Array.from(downAreas).reverse();
        switch(e.key) {
            case "Down":
            case "ArrowDown":
                makeUpDownMovement(downAreas);
                break;
            case "Up":
            case "ArrowUp":
                makeUpDownMovement(upAreas);
                break;
            case "Left":
            case "ArrowLeft":
                makeLeftRightMovement("left");
                break;
            case "Right":
            case "ArrowRight":
                makeLeftRightMovement("right");
                break;
            case "D":
            case "d":
            case "Enter":
                draw1CardFromDeck(myDeck);
                break;
            case "G":
            case "g":
                showGraveyards();
                break;
            case "Z":
            case "z":
                if (focusedCard.hasChildNodes()) showActiveModal();
                break;
            case "R":
            case "r":
                sendToGraveyard(focusedCard.children[0])
                focusedCard.innerHTML = ""
        }
    })

    function makeUpDownMovement(areas) {
        focusedCard.classList.remove("selected-card");
        const area = focusedCard.id.substring(0, focusedCard.id.length - 1);
        const zNum = focusedCard.id.substring(focusedCard.id.length - 1);
        const index = areas.indexOf(area);
        const newArea = areas[index == areas.length - 1 ? 0 : index + 1];
        const newZone = `${newArea}${zNum}`;
        focusedCard = document.querySelector(`#${newZone}`);
        focusedCard.classList.add("selected-card");
        updateInfoImageOnArrowMovement(focusedCard);
        updateInfoTextOnArrowMovement(focusedCard);
        if (activeModalShowing) showActiveModal();
    }

    function makeLeftRightMovement(direction) {
        focusedCard.classList.remove("selected-card");
        const area = focusedCard.id.substring(0, focusedCard.id.length - 1);
        const zNum = Number(focusedCard.id.substring(focusedCard.id.length - 1));
        const newZone = `${area}${direction == "left" 
            ? (zNum == 1 ? 5 : zNum - 1)
            : (zNum == 5 ? 1 : zNum + 1)}`;
        focusedCard = document.querySelector(`#${newZone}`);
        focusedCard.classList.add("selected-card");
        updateInfoImageOnArrowMovement(focusedCard);
        updateInfoTextOnArrowMovement(focusedCard);
        if (activeModalShowing) showActiveModal();
    }

    function updateInfoImageOnArrowMovement(cardZone) {
        const infoImage = document.querySelector("#info-image");
        infoImage.innerHTML = ""
        if (cardZone.hasChildNodes()) {
            let image = document.createElement("img");
            image.src = cardZone.children[0].src;
            infoImage.append(image);
        }
    }

    function updateInfoTextOnArrowMovement(cardZone) {
        const infoText = document.querySelector("#info-text");
        infoText.innerHTML = ""
        if (cardZone.hasChildNodes()) {
            let card = cardZone.children[0];
            infoText.innerHTML = `
            <p id="info-text-cardname">${card.dataset.name}</p>
            <p><span class="info-text-cardframe-${card.dataset.frame.toLowerCase()}">${card.dataset.frame}</span> - Lvl ${card.dataset.level}</p>
            <p>${card.dataset.race} | ${card.dataset.attribute}</p>
            <p>ATK ${card.dataset.currentatk} / DEF ${card.dataset.currentdef}</p>
            <div id="info-lore">
                <div>${card.dataset.lore1}</div>
                <hr />
                <div>${card.dataset.lore2}</div>
            </div>
            `
        }
    }

    function createCardImageFromObject(cardObj) {
        let img = document.createElement("img");
        img.src = cardObj.imgSrc;
        img.dataset.id = cardObj.id;
        img.dataset.name = cardObj.name;
        img.dataset.frame = cardObj.frame;
        img.dataset.attribute = cardObj.attribute;
        img.dataset.race = cardObj.race;
        img.dataset.level = cardObj.level;
        img.dataset.originalatk = cardObj.originalATK;
        img.dataset.originaldef = cardObj.originalDEF;
        img.dataset.currentatk = cardObj.originalATK;
        img.dataset.currentdef = cardObj.originalDEF;
        img.dataset.lore1 = cardObj.lore[0];
        img.dataset.lore2 = cardObj.lore[1];
        img.addEventListener("click", () => {
            sendToGraveyard(img)
            console.log(playerGraveyard)
        });
        img.addEventListener("mouseover", () => {
            const infoImage = document.querySelector("#info-image");
            infoImage.innerHTML = ""
            let image = document.createElement("img");
            image.src = img.src;
            infoImage.append(image);

            const infoText = document.querySelector("#info-text");
            infoText.innerHTML = `
            <p id="info-text-cardname">${img.dataset.name}</p>
            <p><span class="info-text-cardframe-${img.dataset.frame.toLowerCase()}">${img.dataset.frame}</span> - Lvl ${img.dataset.level}</p>
            <p>${img.dataset.race} | ${img.dataset.attribute}</p>
            <p>ATK ${img.dataset.currentatk} / DEF ${img.dataset.currentdef}</p>
            <div id="info-lore">
                <div>${img.dataset.lore1}</div>
                <hr />
                <div>${img.dataset.lore2}</div>
            </div>
            `
        })
        return img;
    }

    function sendToGraveyard(cardImage) {
        cardImage.parentElement.innerHTML = "";
        if (cardImage.dataset.frame == "Spell") {
            playerGraveyard.spell = cardImage;
        }
        else if (cardImage.dataset.frame == "Trap") {
            playerGraveyard.trap = cardImage;
        }
        else {
            playerGraveyard.monster = cardImage;
            document.getElementById("player-graveyard-monster").innerHTML = "";
            document.getElementById("player-graveyard-monster").append(cardImage)
        }
    }

    let showGraveyard = false;
    function showGraveyards() {
        showGraveyard = !showGraveyard;
        if (showGraveyard)
            document.getElementById("graveyard-container").classList.remove("hide-this")
        else
            document.getElementById("graveyard-container").classList.add("hide-this")
    }
    //showGraveyards()

    let activeModalShowing = false;
    function showActiveModal() {
        activeModalShowing = !activeModalShowing;
        if (activeModalShowing)
            document.getElementById("card-options-modal").classList.remove("hide-this")
        else
            document.getElementById("card-options-modal").classList.add("hide-this")
    }
    
    // let b = document.createElement("button")
    // b.textContent = "click"
    // playerMonsterZones.append(b)
    // b.addEventListener("click", () => {
    //     for (let i = 0; i < playerHandZones.childElementCount; i++) {
    //         let handZone = playerHandZones.children[i];
    //         if (handZone.hasChildNodes()) {
    //             let card = handZone.children[0]
    //             if (card.dataset.name == "Mystical Elf") {
    //                 alert(card.dataset.name)
    //                 card.dataset.currentatk = Number(card.dataset.currentatk) + 500;
    //             }
    //         }
    //     }
    // })
}