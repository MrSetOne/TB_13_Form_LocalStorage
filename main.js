// Creacion de constantes del DOM
const btn = document.querySelector("#btn")
const form = document.querySelector("#form")
const show = document.querySelector(".main__container")
let db = []


// Sistema de recovery al cerrar ventana
if (localStorage.db != undefined) {
    db = toArray(localStorage.db)
}

form.addEventListener("submit", (x) => {
    x.preventDefault()
    console.log("ha funcionado")
    let user = {};
    user.name = document.querySelector("#formName").value;
    user.mail = document.querySelector("#formMail").value;
    user.message = document.querySelector("#formText").value;
    user.id = (db.length + 1)
    console.log(user)
    db.push(user)
    console.log(db)
    localStorage.db = toJson(db)
    showMe(db)

})

function toJson(update) {
    return JSON.stringify(update)
}

function toArray(update) {
    return JSON.parse(localStorage.db)
}

function showMe(arr) {
    for (const item of arr) {
        let nuevo = document.createElement("li")
            // show.nuevo.innerHTML = `            
            //                     <div class="item">
            //                         <p>#${item.id}</p>
            //                         <div class="item__content">
            //                             <h2>${item.mail}</h2>
            //                             <h3>${item.mail}</h3>
            //                             <p>${item.message}</p>
            //                         </div>
            //                     </div>
            //                      `








        show.innerHTML = `            
                            <div class="item">
                                <p>#${item.id}</p>
                                <div class="item__content">
                                    <h2>${item.mail}</h2>
                                    <h3>${item.mail}</h3>
                                    <p>${item.message}</p>
                                </div>
                            </div>
                            `
    }
}