#! /usr/bin/enb node
import inquirer from "inquirer"
import chalk from "chalk";
import figlet from "figlet";
console.log (chalk.greenBright.bold(figlet.textSync("Adveture Game")));
 class Player{
    name: string;
    fuel : number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
 }
 class Opponent{
    name: string;
    fuel : number = 100;
    constructor(name:string){
        this.name=name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
 }
let player = await inquirer.prompt([{
    name : "name",
    type: "input",
    message: "Kindly Enter Your Name:"

}
])
let opponent=await inquirer.prompt([{
    name : "select",
    type: "list",
    message: "Select Your Opponent:",
    choices:["Skeleton","Mummy","Alien"]

}])
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do{
//Alien
    if(opponent.select == "Skeleton"){
        let ask=await inquirer.prompt([{
            name : "option",
            type: "list",
            message: "What whould you like to do:",
            choices:["Attack","Drink Energy Portion","Run"]
          
        }]);
        if (ask.option == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if (num >= 0 ){
                p1.fuelDecrease()
                console.log(`${p1.name} Your fuel is ${p1.fuel}`);
                console.log(`${o1.name}  Yournfuel is ${o1.fuel}`);
                if (p1.fuel <=0){
                    console.log("You Loose the Game...... Better Luck NeXt Time")
                }
            }
            if (num <=0 ){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <=0){
                    console.log("You Win");
                    process.exit()
                
            }
        }
    }
         if(ask.option == "Drink Energy Portion"){
            p1.fuelIncrease()
            console.log(`You drink energy portion your fuel is ${p1.fuel}`);
        }
         if (ask.option == "Run"){
            console.log("You Loose the Game...... Better Luck NeXt Time");
            process.exit()    
    }
    }
///Mummy
if(opponent.select == "Mummy"){
    let ask=await inquirer.prompt([{
        name : "option",
        type: "list",
        message: "What whould you like to do:",
        choices:["Attack","Drink Energy Portion","Run"]
      
    }]);
    if (ask.option == "Attack"){
        let num = Math.floor(Math.random() * 2)
        if (num >= 0 ){
            p1.fuelDecrease()
            console.log(`${p1.name} Your fuel is ${p1.fuel}`);
            console.log(`${o1.name}  Yournfuel is ${o1.fuel}`);
            if (p1.fuel <=0){
                console.log("You Loose the Game...... Better Luck NeXt Time")
            }
        }
        if (num <=0 ){
            o1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if (o1.fuel <=0){
                console.log("You Win");
                process.exit()
            
        }
    }
}
     if(ask.option == "Drink Energy Portion"){
        p1.fuelIncrease()
        console.log(`You drink energy portion your fuel is ${p1.fuel}`);
    }
     if (ask.option == "Run"){
        console.log("You Loose the Game...... Better Luck NeXt Time");
        process.exit()    
}
}
// Alien
if(opponent.select == "Alien"){
    let ask=await inquirer.prompt([{
        name : "option",
        type: "list",
        message: "What whould you like to do:",
        choices:["Attack","Drink Energy Portion","Run"]
      
    }]);
    if (ask.option == "Attack"){
        let num = Math.floor(Math.random() * 2)
        if (num >= 0 ){
            p1.fuelDecrease()
            console.log(`${p1.name} Your fuel is ${p1.fuel}`);
            console.log(`${o1.name}  Yournfuel is ${o1.fuel}`);
            if (p1.fuel <=0){
                console.log("You Loose the Game...... Better Luck NeXt Time")
            }
        }
        if (num <=0 ){
            o1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if (o1.fuel <=0){
                console.log("You Win");
                process.exit()
            
        }
    }
}
     if(ask.option == "Drink Energy Portion"){
        p1.fuelIncrease()
        console.log(`You drink energy portion your fuel is ${p1.fuel}`);
    }
     if (ask.option == "Run"){
        console.log("You Loose the Game...... Better Luck NeXt Time");
        process.exit()    
}
}
}
while(true)


