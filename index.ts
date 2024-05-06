#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true

while(condition){
    let add_vegetables = await inquirer.prompt([
        {
            message: "add some vegetables", type: "input", name: "todo"
        },
        {
            message: "do you want to add more vegetables", type: "confirm", name: "confirm", default: "false"
        },
    ]);
    todos.push(add_vegetables.todo)
    condition=add_vegetables.confirm
    console.log(todos)
}

