// Creacion de constantes del DOM
const btn = document.querySelector("#btn")
const form = document.querySelector("#form")
const show = document.querySelector(".main__container")
const delater = document.querySelector("#formDelate")
let db = []


// Sistema de recovery al cerrar ventana
if (localStorage.db != undefined) {
    db = toArray(localStorage.db)
}
if (localStorage.idCounter == undefined) {
    localStorage.setItem("idCounter", 0)
}

delater.addEventListener("click", () => {
    db = [];
    localStorage.clear();
    localStorage.setItem("idCounter", 0)
    show.innerHTML = ""
})

form.addEventListener("submit", (x) => {
    x.preventDefault()
    let user = {};
    localStorage.idCounter++;
    user.name = document.querySelector("#formName").value;
    user.mail = document.querySelector("#formMail").value;
    user.message = document.querySelector("#formText").value;
    user.id = localStorage.idCounter
    db.push(user)
    localStorage.db = toJson(db)
    show.innerHTML = ""
    showMe(db)
    document.querySelector("#formName").value = "";
    document.querySelector("#formMail").value = "";
    document.querySelector("#formText").value = "";
})

function toJson(update) {
    return JSON.stringify(update)
}

function toArray(update) {
    return JSON.parse(localStorage.db)
}

function showMe(arr) {
    for (const item of arr) {
        show.innerHTML += `            
                            <li class="item">
                                <div>
                                    <p>#${item.id}</p>
                                    <div class="item__content">
                                        <h2>${item.name}</h2>
                                        <h3>${item.mail}</h3>
                                    </div>
                                    <div onclick="killer(${item.id})"><i class="fa-solid fa-trash-can"></i></div>
                                </div>
                                <p>${item.message}</p>
                            </li>
                            `
    }
}

function killer(toKill) {
    for (const element of db) {
        if (element.id == toKill) {
            let dead = db.indexOf(element)
            db.splice(dead, 1);
            show.innerHTML = ""
            showMe(db)
            localStorage.db = toJson(db)
        }
    }
}

showMe(db)