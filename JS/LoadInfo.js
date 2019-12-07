document.addEventListener("DOMContentLoaded", () => {
    var ClientAPI = new XMLHttpRequest();
    ClientAPI.addEventListener("loadend", () => {
        document.getElementById("LabelKhoroshaeva").innerText = ClientAPI.responseText.split('\n')[0];
        document.getElementById("TextKhoroshaeva").innerText = ClientAPI.responseText.split('\n')[1];
        document.getElementById("Site").innerText = ClientAPI.responseText.split('\n')[2];
        document.getElementById("Insta").innerText = ClientAPI.responseText.split('\n')[3];
        document.getElementById("vk").innerText = ClientAPI.responseText.split('\n')[4];
        document.getElementById("viber").innerText = ClientAPI.responseText.split('\n')[5];
    });
    ClientAPI.open('GET', '/api/api.txt');
    ClientAPI.send(null);
});