function getData(inputID) {
  fetch("https://jsonplaceholder.typicode.com/posts/" + inputID)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      var res = document.createTextNode(myJson.id + ": " + myJson.title);
      return addResult(res);
    });
}

function add() {
  var inputID = document.getElementById("num").value;
  getData(inputID);
}

function addResult(res) {
  var lista = document.getElementsByTagName("ul");
  var newLi = document.createElement("li");
  lista[0].appendChild(newLi);
  newLi.appendChild(res);
}