function getId(data) {
    return document.getElementById(data)
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