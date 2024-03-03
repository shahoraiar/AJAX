let button = document.getElementById('one');
let div = document.getElementById('output');
// let div = document.getElementsByTagName('div')[0];

button.addEventListener('click', ()=>{
    // div.textContent = "Output : Clicked XHR successfully.";
    //create Ajax object 
    let xhr = new XMLHttpRequest();

    // configure our request
    xhr.open("GET", "https://icanhazdadjoke.com/");

    xhr.setRequestHeader('Accept', "application/json");

    xhr.onreadystatechange = function() {
        if(xhr.readyState ===4 && xhr.status ===200){
            const jsonData = JSON.parse(xhr.responseText);
            div.innerHTML = 'OUTPUT : ';
            div.innerHTML += jsonData.joke;
        }
    };

    xhr.send();
})