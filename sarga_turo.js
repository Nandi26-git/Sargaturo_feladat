const foInput = document.querySelector("input");
const tejKiiro = document.querySelector("#tej");
const tojasKiiro = document.querySelector("#tojas");
const cukorKiiro = document.querySelector("#cukor");

foInput.addEventListener("change", () => {
    mennyisegSzamolo(foInput.value)
});

function mennyisegSzamolo(hanyFo) {
    const tejMennyiseg = 0.2 * hanyFo;
    const tojasMennyiseg = 2 * hanyFo
    const cukorMennyiseg = 1 * hanyFo
    tejKiiro.innerText = `${parseFloat(tejMennyiseg.toFixed(1))}`
    tojasKiiro.innerText = `${parseFloat(tojasMennyiseg.toFixed(1))}`
    cukorKiiro.innerText = `${parseFloat(cukorMennyiseg.toFixed(1))}`
}