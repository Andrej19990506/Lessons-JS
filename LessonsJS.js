//Lesson 0ne 01.06.2022
class  CalcTable {
    constructor(parentSelector){
        this.parentElement=document.querySelector(parentSelector);
    }

    createTable(row, column){
        this.parentElement.innerHTML="";
        this.table=document.createElement('table');
        this.parentElement.appendChild(this.table);
    }
}
let table= new CalcTable('div');
table.createTable();

let table2 = new CalcTable('#div2')

table2.createTable()



