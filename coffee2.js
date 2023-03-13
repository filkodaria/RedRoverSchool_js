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

let coffee1 = 'espresso';
let coffee2 = 'cappuccino';
let coffee3 = 'latte';

let cupSmall = 'S';
let cupMedium = 'M';
let cupLarge = 'L';

let price;

let ingr1 = 'ground coffee';
let ingr2 = 'drinking water';
let ingr3 = 'milk';

let device = 'coffee machine';


let step1 = ` Make sure the ${device} is switch on`;
let step2 = ` Pour ${ingr2} in the box of ${device} to the Max mark`;
let step3 = ` Put ${ingr1} into the cell of ${device}`;
let step4 = ` Put a cup`;
let step5 = ` Start the coffee preparation`;
let step6 = ` Add ${ingr3} to the cup`;
let step7 = ` Enjoy your drink!`;

let step = 1;
let recipeEspr =
	'\n' + 'The instruction:' + '\n' + step + step1 + '\n' + ++step + step2 + '\n' +
	++step + step3 + '\n' + ++step + step4 + '\n' + ++step + step5 + '\n' +
	++step + step7 + '\n';

step = 1;
let recipeCapp = 
	"\n" + "The instruction:" + "\n" + step + step1 + "\n" + ++step + step2 + "\n" +
	++step + step3 + "\n" + ++step + step4 + "\n" + ++step + step5 + "\n" +
	++step + step6 + "\n" + ++step + step7 + "\n";

step = 1;
let recipeLat =
  "\n" + "The instruction:" + "\n" + step1 + "\n" + step2 + "\n" + step3 + "\n" +
  step4 + "\n" + step5 + "\n" + step6 + "\n" + step7 + "\n";

// Select drink and cup size
let choiceCoffee = 'latte';
let choiceCup = 'L';

if (choiceCoffee == "espresso") {
	console.log(`You have ordered a cup of ${choiceCoffee} in size ${choiceCup}.`);
	if (choiceCup == "S") {
		console.log(recipeEspr);
		price = 10;
		console.log(`A cup of ${choiceCoffee} in size ${choiceCup} costs ${price} USD.`)
	} else if (choiceCup == "M") {
		console.log(`A cup of ${choiceCoffee} isn't available in size ${choiceCup}.`)
	} else if (choiceCup == "L") {
		console.log(`A cup of ${choiceCoffee} isn't available in size ${choiceCup}.`)
	} else {
		console.log('Make sure you have chosen a correct cup size!');
	}
}
else if (choiceCoffee == "cappuccino") {
	console.log(`You have ordered a cup of ${choiceCoffee} in size ${choiceCup}.`);
	if (choiceCup == "S") {
		console.log(recipeCapp);
		price = 14;
		console.log(`A cup of ${choiceCoffee} in size ${choiceCup} costs ${price} USD.`)
	} else if (choiceCup == "M") {
		console.log(recipeCapp);
		price = 24;
		console.log(`A cup of ${choiceCoffee} in size ${choiceCup} costs ${price} USD.`)
	} else if (choiceCup == "L") {
		console.log(recipeCapp);
		price = 34;
		console.log(`A cup of ${choiceCoffee} in size ${choiceCup} costs ${price} USD.`)
	} else {
		console.log('Make sure you have chosen a correct cup size!');
	}
}
else if (choiceCoffee == 'latte') {
	console.log(`You have ordered a cup of ${choiceCoffee} in size ${choiceCup}.`);
	if (choiceCup == "S") {
		console.log(`A cup of ${choiceCoffee} isn't available in size ${choiceCup}.`);
	} else if (choiceCup == "M") {
		console.log(recipeLat);
    price = 29;
    console.log(`A cup of ${choiceCoffee} in size ${choiceCup} costs ${price} USD.`);
	} else if (choiceCup == "L") {
		console.log(recipeLat);
    price = 39;
    console.log(`A cup of ${choiceCoffee} in size ${choiceCup} costs ${price} USD.`);
  } else {
    console.log("Make sure you have chosen a correct cup size!");
  }
}
else {
	console.log('Please, try again. Select drink from the list!');
}
