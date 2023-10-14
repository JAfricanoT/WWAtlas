const countriesCoord = {
    "Venezuela": {
        "x": "-100px",
        "y": "-15px"
    },
    "Argentina": {
        "x": "-110px",
        "y": "-140px"
    },
    "España": {
        "x": "-270px",
        "y": "70px"
    },
    "Italia": {
        "x": "-310px",
        "y": "75px"
    },
    "NuevaZelanda": {
        "x": "220px",
        "y": "-145px"
    },
    "Australia": {
        "x": "330px",
        "y": "-105px"
    },
    "Egipto": {
        "x": "-355px",
        "y": "40px"
    },
    "Sudafrica": {
        "x": "-335px",
        "y": "-110px"
    },
    "Japon": {
        "x": "320px",
        "y": "60px"
    },
    "China": {
        "x": "390px",
        "y": "45px"
    },
    
}

const list = document.querySelector("#countries")
const countryDetails = document.querySelectorAll(".countryDetails")
const world = document.querySelector("#world")
const tag = document.querySelector("#country")


list.addEventListener("input", (event) => {
    const selected = event.target.value;
    console.log(countryDetails)
    countryDetails.forEach(element => {
        element.style.display = "none"
    });
    const detail = document.querySelector(`.${selected}`)
    detail.style.display = "flex"
    world.style.backgroundPositionX = countriesCoord[selected]["x"]
    world.style.backgroundPositionY = countriesCoord[selected]["y"]
    tag.innerText = selected
    conteo()
});

function conteo() {
    setTimeout(() => {
        list.value = 'Venezuela'
        countryDetails.forEach(element => {
            element.style.display = "none"
        });
        const detail = document.querySelector(`.Venezuela`)
        detail.style.display = "flex"
        world.style.backgroundPositionX = countriesCoord["Venezuela"]["x"]
        world.style.backgroundPositionY = countriesCoord["Venezuela"]["y"]
        tag.innerText = "Venezuela"
    }, "10000");
}