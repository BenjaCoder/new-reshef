// [1] //

// for (let i = 0; i < playerMonsterZones.childElementCount; i++) {
    //     let mzone = playerMonsterZones.children[i];
    //     if(!mzone.hasChildNodes()) {
    //         let shouldrotate = Boolean(Math.round(Math.random()));
    //         let img = document.createElement("img");
    //         let randomMonster = cardList[Math.floor(Math.random() * cardList.length)];
    //         img.src = randomMonster.imgSrc;
    //         img.data = randomMonster;
    //         img.title = `ATK ${randomMonster.currentATK}\nDEF ${randomMonster.currentDEF}`;
    //         if (shouldrotate)
    //             img.classList.add("rotate");
    //         mzone.append(img);
    //     }
    // }

    // for (let i = 0; i < playerSpellTrapZones.childElementCount; i++) {
    //     let stzone = playerSpellTrapZones.children[i];
    //     let shouldCreateCard = true//Math.round(Math.random());
    //     if (shouldCreateCard) {
    //         if(!stzone.hasChildNodes()) {
    //             let img = document.createElement("img");
    //             let spellOrTrap = Math.round(Math.random());
    //             let randomIndex = Math.floor(Math.random() * (spellOrTrap ? spells.length : traps.length));
    //             let source = spellOrTrap
    //                 ? `images/spells/${spells[randomIndex]}.png`
    //                 : `images/traps/${traps[randomIndex]}.png`;
    //             img.src = source;
    //             img.classList.add("spellTrap");
    //             stzone.append(img);
    //         }
    //     }
        
    // }

    // for (let i = 0; i < playerHandZones.childElementCount; i++) {
    //     let handZone = playerHandZones.children[i];
    //     if(!handZone.hasChildNodes()) {
    //         let img = document.createElement("img");
    //         let randomIndex = 0;
    //         let source = "";
    //         let cardType = Math.round(Math.random() * 2);
    //         switch (cardType) {
    //             case 0:
    //                 randomIndex = Math.floor(Math.random() * spells.length);
    //                 source = `images/spells/${spells[randomIndex]}.png`;
    //                 break;
    //             case 1:
    //                 let randMonster = cardList[Math.floor(Math.random() * cardList.length)];
    //                 source = randMonster.imgSrc;
    //                 img.title = `ATK ${randMonster.currentATK}\nDEF ${randMonster.currentDEF}`;
    //                 break;
    //             case 2:
    //                 randomIndex = Math.floor(Math.random() * traps.length);
    //                 source = `images/traps/${traps[randomIndex]}.png`;
    //                 break;
    //             default:
    //                 break;
    //         }
    //         img.src = source;
    //         handZone.append(img);
    //     }
    // }