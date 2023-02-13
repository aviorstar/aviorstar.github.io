let tg = window.Telegram.WebApp; 

tg.expand(); //расширяем на весь экран


// MainButton - кнопка, создающаяся самим Telegram (внизу после добавления товара в корзину)
tg.MainButton.textColor = "#FFFFFF"; //изменяем цвет текста кнопки
tg.MainButton.color = "#2cab37"; // изменяем цвет кнопки

let item = "";


// находим все элементы 
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

//добавляем обработчик к каждому элементу, обработчик события (если кнопка есть, мы ее прячем)

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 4!");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 5!");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
		item = "6";
		tg.MainButton.show();
	}
});

//передача данных с сайты в телеграм

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item); //отправка данных
});

//Вывод данных из телеграм 

let usercard = document.getElementById("usercard");

let p = document.createElement("p"); //создание нового элемента

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name} ${tg.initDataUnsafe.user.id}`;

usercard.appendChild(p);
