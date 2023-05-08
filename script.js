window.onload = () => {

    const imgs = ["BabyDragon", "BlacklandFireDragon", "ExodiatheForbiddenOne", "FeralImp", "HitotsuMeGiant"]

    let playerMonsterZones = document.getElementById("player-mzones");
    console.log(playerMonsterZones.children[0].children)
    for (let i = 0; i < playerMonsterZones.childElementCount; i++) {
        let mzone = playerMonsterZones.children[i];
        if(!mzone.hasChildNodes()) {
            let shouldrotate = Boolean(Math.round(Math.random()));
            let img = document.createElement("img");
            let randomIndex = Math.floor(Math.random() * imgs.length);
            let source = `images/${imgs[randomIndex]}.png`;
            img.src = source;
            img.title = `ATK ${source.length}00\nDEF ${source.length}00`;
            if (shouldrotate)
                img.classList.add("rotate");
            mzone.append(img);
        }
    }
}