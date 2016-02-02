"use strict";

//работа со строками
/* alert('Hello World');
var name = "Dimon";
alert(name);
var admin;
admin = name;
alert(admin); */


//result = prompt(title, default);
/* var name = prompt("Как ваше имя?","");
alert("Здравствуйте, " + name + "! Добро пожаловать на наш сайт)"); */


//result = confirm(question);
/* var isAdmin = confirm("Вы - администратор?");
alert( isAdmin ); */


//сумма от 1 до н
var num = +prompt("Введите число","");

function sumIf(n)
{
	var sum = 0;
	while(n)
	{
		sum += n--;
	}
	return sum;	
}

alert(sumIf(num));

function sumFormul(n)
{
	return n*(1+n)/2;
}
alert(sumFormul(num));



function sumRec(n)
{
	if (n) return (n += sumRec(n-1));
	else return n;
}

alert(sumRec(num));
