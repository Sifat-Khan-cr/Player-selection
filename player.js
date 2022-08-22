function getId(data) {
    return document.getElementById(data)
}
function getValue(data) {
    val = parseFloat(getId(data).value);
    if (isNaN(val)) {
        alert("please enter valid number")
        getId(data).value = 00;
        return 00;
    } else {
        return parseFloat(getId(data).value);

    }
}
function getText(data) {
    return parseFloat(getId(data).innerText);
}





function btnClick(data) {
    const playerName = data.parentNode.childNodes[1].innerText;
    if (getId("player-list").childNodes.length <= 5) {
        const element = document.createElement('li');
        element.innerText = playerName;
        getId("player-list").appendChild(element);
        data.disabled = "true";
        data.classList.add("bg-gray-400");
        data.classList.remove("hover:bg-blue-800");
    } else {
        return alert("You cannot buy more than 5");
    }


}
getId("btn-calculate").addEventListener('click', function () {
    const perPlayer = getValue("per-player");
    const player = getId("player-list").childNodes.length - 1;
    const playercost = player * perPlayer;
    getId("player-cost").innerText = playercost;
})
getId("btn-total").addEventListener('click', function () {
    const playerCost = getText("player-cost");
    const manager = getValue("manager");
    const couch = getValue("couch");
    getId("total").innerText = playerCost + manager + couch;
})