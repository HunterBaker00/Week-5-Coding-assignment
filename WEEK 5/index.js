class Coffee {
    constructor(name, creamer) {
        this.name = name; 
        this.creamer = creamer;
    }
// going to be naming the type of coffee and then adding what kind of creamer
    describe() {
        // console.log('${this.name} with ${this.creamer}')
        return `${this.name} with ${this.creamer}.`;
    }
}

class Drink {
    constructor(name) {
        this.name = name;
        this.coffees = [];
    }

    addCoffee(coffee) {
        if (coffee instanceof Coffee) {
            this.coffees.push(coffee);
        } else {
            throw new Error(`You can only add an instance of Coffee.
            argument is not a coffee: ${coffee}`);
        }
    }

    describe() {
        return `${this.name} has ${this.coffee.length} coffees.`
    }
}
class Menu {
    constructor() {
        this.drinks = [];
        this.selectedDrink = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection) {
                case `1` :
                    this.createDrink();
                    break;
                case `2` :
                    this.viewDrink();
                    break;
                case `3` :
                    this.deleteDrink();
                    break;
                case `4` :
                    this.displayDrinks();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert(`See you later!`);
       
    }

    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Create a New drink
            2) View a drink
            3) Delete a drink
            4) Display all drinks
        `);
    }

    showDrinkMenuOptions(DrinkInfo) {
        return prompt(`
            0) Back
            1) Add a New Coffee
            2) Delete a Coffee
            -----------------------
            ${DrinkInfo}
        `);
    }
    
    displayDrinks() {
        let drinkString = '';
        for (let i = 0; i < this.drinks.length; i++) {
            drinkString += i+ ') ' + this.drinks[i].name + '\n';
        }
        alert(drinkString);
    }

    createDrink() {
        let name = prompt('Enter name for a new drink: ');
        this.drinks.push(new Drink(name));
    }

    viewDrink() {
        let index = prompt("Enter the index of the drink that you want to view:");
        if (index > -1 && index < this.drinks.length) {
            this.selectedDrink = this.drinks[index];
            let description = 'Drink Name: ' + this.selectedDrink.name + '\n';
            description += ' ' + this.selectedDrink.describe() + '\n ';
            for (let i = 0; i < this.selectedDrink.coffees.length; i++) {
                // description += i + ') ' + this.selectedDrink.coffees[i].name 
                // + ' - ' + this.selectedDrink.Coffees[i].creamer + '\n';

                description += i + ') ' + this.selectedDrink.coffees[i].describe() + '\n'

            }

            let selection = this.showDrinkMenuOptions(description);
            switch (selection) {
                case '1' :
                this.createCoffee();
                break;
                case '2' :
                this.deleteCoffee();
            }
        }
    }

    deleteDrink() {
        let index = prompt('Enter the index of the drink you would like to delete: ');
        if (index > -1 && index < this.drinks.length) {
            this.drinks.splice(index, 1);
        }
    }

    createCoffee() {
        let name = prompt ('Enter name for a new coffee: ');
        let creamer = prompt ('Enter creamer for for new coffee: ');
        this.selectedDrink.coffees.push(new coffee(name, creamer));
        // this.selectedDrink.addCoffee(new Coffee(name,creamer));
    }

    deleteCoffee() {
        let index = prompt('Enter the index of the coffee that you would like to delete: ');
        if (index > -1 && index < this.selectedDrink.coffees.length) {
            this.selectedDrink.coffees.splice(index,1);
        }
    }
}

let menu = new Menu();
menu.start();


