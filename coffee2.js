/*
Креативное задание*. Напишите следующую программу:
- У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
- Дайте названия вашим видам кофе.
- Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
- Выведите на экран название, затем рецепт выбранного кофе 
(используйте переменные для изменения рецепта и названия) 
и его стоимость (в зависимости от размера стаканчика). 
- Компоненты кофе не влияют на стоимость.
- Используйте подходящую комбинацию условий if, (else if), else для решения задачи.
*/

let ingr1 = 'ground coffee beans';
let ingr2 = 'filtered water';
let ingr3 = 'milk';

let device = 'coffee machine';

let step1 = ` Make sure the ${device} is switch on`;
let step2 = ` Pour ${ingr2} in the water container of ${device} to the Max mark`;
let step3 = ` Fill ${ingr1} into the beans container of ${device}`;
let step4 = ` Put a cup of selected size`;
let step5 = ` Start the coffee preparation pressing the button "Brew"`;
let step6 = ` Waiting for adding of ${ingr3} into the cup`;
let step7 = ` Enjoy your drink!`;
let step8 = `Don't forget to clean your workspace!`;

let step = 1;
let recipeCoffee =
	'\n' + 'The instruction:' + '\n' + step + step1 + '\n' + ++step + step2 + '\n' +
	++step + step3 + '\n' + ++step + step4 + '\n' + ++step + step5 + '\n' +
	++step + step7 + '\n' + step8 + '\n';

step = 1;
let recipeCoffeeMilk = 
	"\n" + "The instruction:" + '\n' + step + step1 + '\n' + ++step + step2 + '\n' +
	++step + step3 + '\n' + ++step + step4 + '\n' + ++step + step5 + '\n' +
	++step + step6 + '\n' + ++step + step7 + '\n' + step8 + '\n';

let price;
let totalPrice;

// Select drink and cup size
let choiceCoffee = "latte"; // espresso cappuccino latte
let choiceCup = 'L'; // S M L
let amount = 3;

console.log(`Welcome to the Darfi's coffee shop! What can I prepare for you?`);
if (choiceCoffee == "espresso") {
	console.log(`You have ordered ${amount} cup(s) of ${choiceCoffee} in size ${choiceCup}.`);
	if (choiceCup == "S") {
		console.log(recipeCoffee);
		price = 10;
		totalPrice = price * amount;
		console.log(amount + ` cup(s) of ${choiceCoffee} in size ${choiceCup} costs ${totalPrice} USD.`)
	} else if (choiceCup == "M") {
		console.log(`A cup of ${choiceCoffee} isn't available in size ${choiceCup}.`)
	} else if (choiceCup == "L") {
		console.log(`A cup of ${choiceCoffee} isn't available in size ${choiceCup}.`)
	} else {
		console.log('Make sure you have chosen a correct cup size!');
	}
}
else if (choiceCoffee == "cappuccino") {
	console.log(`You have ordered ${amount} cup(s) of ${choiceCoffee} in size ${choiceCup}.`);
	if (choiceCup == "S") {
		console.log(recipeCoffeeMilk);
		price = 14;
		totalPrice = price * amount;
		console.log(amount + ` cup(s) of ${choiceCoffee} in size ${choiceCup} costs ${totalPrice} USD.`)
	} else if (choiceCup == "M") {
		console.log(recipeCoffeeMilk);
		price = 24;
		totalPrice = price * amount;
		console.log(amount + ` cup(s) of ${choiceCoffee} in size ${choiceCup} costs ${totalPrice} USD.`)
	} else if (choiceCup == "L") {
		console.log(recipeCoffeeMilk);
		price = 34;
		totalPrice = price * amount;
		console.log(amount + ` cup(s) of ${choiceCoffee} in size ${choiceCup} costs ${totalPrice} USD.`)
	} else {
		console.log('Make sure you have chosen a correct cup size!');
	}
}
else if (choiceCoffee == 'latte') {
	console.log(`You have ordered ${amount} cup(s) of ${choiceCoffee} in size ${choiceCup}.`);
	if (choiceCup == "S") {
		console.log(`A cup of ${choiceCoffee} isn't available in size ${choiceCup}.`);
	} else if (choiceCup == "M") {
		console.log(recipeCoffeeMilk);
		price = 29;
		totalPrice = price * amount;
    console.log(amount + ` cup(s) of ${choiceCoffee} in size ${choiceCup} costs ${totalPrice} USD.`);
	} else if (choiceCup == "L") {
		console.log(recipeCoffeeMilk);
		price = 39;
		totalPrice = price * amount;
    console.log(amount +` cup(s) of ${choiceCoffee} in size ${choiceCup} costs ${totalPrice} USD.`);
  } else {
    console.log("Make sure you have chosen a correct cup size!");
  }
}
else {
	console.log('Please, try again. Select drink from the list!');
}
