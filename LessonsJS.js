//Lesson 0ne 01.06.2022
class CalcTable {
    constructor(parentSelector) {
        this.parentSelector = parentSelector;
        this.parentElement = document.querySelector(parentSelector);
    }
    createTable(row, column) {
        row = Number(row);
        column = Number(column);
        this.parentElement.innerHTML = "";
        this.table = document.createElement('table');
        this.parentElement.appendChild(this.table);
        this.table.classList.add('table');
        this.row = row;
        this.column = column;
        for (let i = 0; i < row; i++) {
            let tr = document.createElement('tr');
            tr.classList.add('table__row');
            this.table.appendChild(tr);
            for (let j = 0; j < column; j++) {
                let td = document.createElement('td');
                td.classList.add('table__column');
                tr.appendChild(td);
                td.innerHTML = "";
                td.contentEditable = "true"
            }
            //let lasttd = document.createElement('td')
            //lasttd.classList.add('last-td')
            //tr.appendChild(lasttd)
            //lasttd.innerHTML="+"
        }

        //let tr = document.createElement('tr');
        //tr.classList.add('table__row');
        //this.table.appendChild(tr);
        //for(let i = 0; i<column+1; i++){
        //let lasttd = document.createElement('td')
        //lasttd.classList.add('last-td')
        //tr.appendChild(lasttd)
        //lasttd.innerHTML="+"
        //}



        this.table.onclick = this.clickcel.bind(this);
        //this.table.onclick = this.newtd.bind(this);
    }




    //Двойной клик
    //let td = event.target.closest('td'); // (1)
    //if (!td) return; // (2)
    //if (!this.table.contains(td)) return;
    //let inputclick = document.createElement('textarea');
    //td.appendChild(inputclick);
    clickcel(event) {
        //console.log(this);
        //this.createTable(this.row+1, this.column+1)
        let td = event.target.closest('td'); // (1)
        if (!td) return; // (2)
        if (!this.table.contains(td)) return; // (3)
        if (this.currenCell) {
            this.currenCell.classList.remove("border-td");
        }
        this.currenCell = td;
        this.currenCell.classList.add("border-td");
        //if(){

        //}
    }
}
class TableBuild {
    constructor(parentSelector, table) {
        this.table = table;
        this.parentSelector = parentSelector;
        this.parentElement = document.querySelector(parentSelector);
    }
    tableBuild() {
        this.buildtable = document.createElement('div');
        this.buildtable.classList.add('build-table');
        this.addTable = document.createElement('div');
        this.addTable.innerHTML = "+";
        this.addTable.classList.add('add-table');
        this.deliteTable = document.createElement('div');
        this.deliteTable.innerHTML = "-";
        this.deliteTable.classList.add('delite-table');
        this.parentElement.appendChild(this.buildtable);
        this.buildtable.appendChild(this.addTable);
        this.buildtable.appendChild(this.deliteTable);
        this.buildtable.onclick = this.addTables.bind(this);
        //this.buildtable.onclick = this.deliteTables.bind(this);
    }

    addTables(event) {
        let addtable = event.target.closest('.add-table');
        let delitetable = event.target.closest('.delite-table'); // (1)
        if (!addtable && !delitetable) return; // (2)
        if (!this.buildtable.contains(addtable) && !this.buildtable.contains(delitetable)) return; // (3)
        //console.log(this.table.createTable)
        if(addtable){
            this.table.createTable(this.table.row + 1, this.table.column + 1);
        }
        if (delitetable) {
            this.table.createTable(this.table.row - 1, this.table.column - 1);
        }
        if (this.table.row < 0 && this.table.column < 0){
            this.table.row =0;
            this.table.column = 0;
        }
        //this.currenAdd = addtable;
        //this.currenDelite = delitetable;
    }

}



class TableCreater {
    constructor(parentSelector) {
        this.parentSelector = parentSelector;
        this.parentElement = document.querySelector(parentSelector);
    }

    createForm() {
        this.parentElement.innerHTML = "";
        this.inputRow = document.createElement('input');
        this.inputColumn = document.createElement('input');
        this.buttonForm = document.createElement('button');
        this.buttonForm.innerHTML = 'Button create'
        this.parentElement.appendChild(this.inputRow);
        this.parentElement.appendChild(this.inputColumn);
        this.parentElement.appendChild(this.buttonForm);
        this.buttonForm.onclick = this.clickButton.bind(this);
    }

    clickButton() {
        this.table = new CalcTable(this.parentSelector);
        this.table.createTable(this.inputRow.value, this.inputColumn.value);
        this.buildtable = new TableBuild('.builds-table' ,this.table);
        this.buildtable.tableBuild()

    }
}
let tableCreater = new TableCreater('.create-table');
tableCreater.createForm()



