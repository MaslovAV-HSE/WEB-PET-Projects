
//выбираю с помощью селектора с каким тегом буду работать
const main_elem = document.querySelector('.color4');
//----------------------------------------------MAP-----------------------------------------------------------------
//Создаю map
const myMap = new Map([[1,'Меркурий'], [2,'Венера'], [3,'Земля'], [4,'Марс']]);

//Добавляю еще один объект
myMap.set(5,'Юпитер');
//Вывожу объект в консоль
console.log(myMap.get(4));
//Удаляю первый объект
myMap.delete(1);

//-----------------------------------------------------DOM---------------------------------------------------------------
//создаю внтри тега еще один див
var elem = document.createElement('div');
//Добавляю после всех остальных тегов
main_elem.append(elem);
//Создаю заголовк и добавляю его в див 
var h1_elem = document.createElement('h2');
h1_elem.textContent = 'Этот текс и список ниже создан с помощью скрипта js';
elem.appendChild(h1_elem);
//создаю список, чтобы заполнить его элементами мап
var ul_elem = document.createElement('ul');
elem.appendChild(ul_elem);

//------------------------------------------------------LOOP----------------------------------------------------------------
var li_elem;
//с помощью цикла заполняю информацию о 
myMap.forEach(function(value1,malue2,myMap){ 
    li_elem = document.createElement('li');                           
    li_elem.textContent = value1;
    ul_elem.appendChild(li_elem);

})

//------------------------------------------------------EVENTS---------------------------------------------------------------
//Создадим еще один демонстрационный див
var div_elem = document.createElement('div');
div_elem.style.backgroundColor = 'blue';
var text = document.createElement('p');
text.textContent = 'Коробка, которая меняет цвет';
elem.append(div_elem);
div_elem.appendChild(text);

//Обработаем события наведения мыши на объект

function setColor(e){
     
    if(e.type==="mouseover")
        e.target.style.backgroundColor = "red";
    else if(e.type==="mouseout")
        e.target.style.backgroundColor = "blue";
}

div_elem.addEventListener("mouseover", setColor);
div_elem.addEventListener("mouseout", setColor);
//-----------------------------------------------------Arrow functions-----------------------------------------------------------

let hello = (name) => alert('hello' + name);

var searchForm = document.forms["name"];
var keyBox = searchForm.elements["key"];
var sendButton = document.searchForm.elements["send"];
sendButton.addEventListener("click", hello(keyBox.value));
