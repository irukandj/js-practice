//function for strings

var array = [];
var obj = {};
var fromStorage = localStorage.getItem('array');
if (fromStorage !== null) {
    array = JSON.parse(fromStorage);
}
render();

function add() {
    obj.price = parseInt(document.querySelector('#product').value);
    array.push(obj);
    render();

    document.querySelector('#product').value = "";
    localStorage.setItem('array', JSON.stringify(array));
}



function del(index) {
    array.splice(index, 1);
    render();
    localStorage.setItem('array', JSON.stringify(array));
}

function render() {
    document.querySelector('#list').innerHTML = '';
    for(var i = 0; i < array.length; i++) {
        document.querySelector('#list').innerHTML += `<li class="list-group-item">${array[i].price}
        <i onclick="del(${i})" class="fa fa-times" id="close-item" aria-hidden="true"></i>
        </li>`;
    }
     
    var sum = 0;
    for(var t = 0;t < array.length; t++) {
        sum += array[t].price;
    }
    
    var result = document.querySelector('#result').value = sum;
}

function delAll(index) {
    array = [];
    render();
    localStorage.setItem('array', JSON.stringify(array));
}