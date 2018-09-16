//function for strings

var array = [];

var fromStorage = localStorage.getItem('array');
if (fromStorage !== null) {
    array = JSON.parse(fromStorage);
}
render();

function add() {
    var obj = {};
    obj.price = parseInt(document.querySelector('#product').value);
    array.push(obj);
    render();


    localStorage.setItem('array', JSON.stringify(array));
    document.querySelector('#product').value = "";
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

function downloadAll() {
    var content = 'price\n';

    for(var i=0; i < array.length; i++){
        content += array[i].price + '\n';
    }

    download(content, 'arraydata.csv', 'text/csv')
}

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}