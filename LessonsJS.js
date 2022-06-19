//Lesson 0ne 01.06.2022
class CalcTable {
    constructor(parentSelector) {
        this.parentSelector = parentSelector;
        this.parentElement = document.querySelector(parentSelector);
        this.currenCell = null;
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
        }
        
        this.table.oncontextmenu = this.onContextMenu.bind(this);
        
        this.table.onclick = this.closeContextMenu.bind(this);
        //this.table.onclick = this.newtd.bind(this);
    }
    
    onContextMenu(event){
        event.preventDefault();
        this.buildtable = new TableBuild('.contextMenu-table', this.table);
        this.buildtable.tableBuild()

        let tr = event.target.closest('td'); // (1)
        if (!tr) return; // (2)
        if (!this.table.contains(tr)) return; // (3)
        if (this.currenCell) {
            let currentMenu = document.querySelector('.contextMenu-table');
            currentMenu.style.left = event.clientX + "px"
            currentMenu.style.top = event.clientY + "px"
            currentMenu.style.display = 'block';
        }
        this.currenCell = tr;
        }
    /* closeContextMenu(event) {
        let tr = event.target.closest('td'); // (1)
        if (!tr) return; // (2)
        if (!this.table.contains(tr)) return; // (3)
        if (this.currenCell) {
            let currentMenu = document.querySelector('.contextMenu-table');
            currentMenu.style.display = 'none';
            this.currenCell.classList.remove("border-td");
        }
        this.currenCell = tr;
        this.currenCell.classList.add("border-td");
    }*/

    addRowDawn() {
        if (this.currenCell) {
            let tr = document.createElement('tr');
            tr.classList.add('table__row');
            for (let j = 0; j < this.column; j++) {
                let td = document.createElement('td');
                td.classList.add('table__column');
                tr.appendChild(td);
                td.innerHTML = "";
                td.contentEditable = "true"
            }
            let currentRow = this.currenCell.closest('tr');
            //.insertBefore(tr, currentRow.nextSibling);
            currentRow.insertAdjacentElement('afterend', tr);
        }
    }

}
class TableBuild {
    constructor(parentSelector, table) {
        this.table = table;
        this.parentSelector = parentSelector;
        this.parentElement = document.querySelector(parentSelector);
    }
    tableBuild() {
        this.parentElement.innerHTML = "";
        //this.contextMenuTable = document.createElement('div');
        //this.contextMenuTable.classList.add('contextMenu-table');
        this.pasteInTable = document.createElement('div');
        this.pasteInTable.classList.add('paste-in-table');
        this.pasteTableUnorderedList = document.createElement('ul');
        this.pasteTableUnorderedList.classList.add('pasteTable_unordered-list');
        this.pasteTableListItem = document.createElement('li');
        this.pasteTableListItem.innerHTML = "Paste";
        this.pasteTableListItem.classList.add('pasteTable_list-item');
        this.addRowUp = document.createElement('button');
        this.addRowUp.innerHTML = "Add Row Up";
        this.addRowUp.classList.add("add-Row-Up", "pastebutton");
        this.addRowDawn = document.createElement('button');
        this.addRowDawn.innerHTML = "Add Row Dawn";
        this.addRowDawn.classList.add("add-Row-Dawn", "pastebutton");
        this.addColumnLeft = document.createElement('button');
        this.addColumnLeft.innerHTML = "Add Column Left";
        this.addColumnLeft.classList.add('add-column-Left',"pastebutton");
        this.addColumnRight = document.createElement('button');
        this.addColumnRight.innerHTML = "Add Column Right";
        this.addColumnRight.classList.add('add-column-right',"pastebutton");
        this.pasteInTable.appendChild(this.addRowUp);
        this.pasteInTable.appendChild(this.addRowDawn);
        this.pasteInTable.appendChild(this.addColumnLeft);
        this.pasteInTable.appendChild(this.addColumnRight)
        this.parentElement.appendChild(this.pasteTableUnorderedList);
        this.pasteTableUnorderedList.appendChild(this.pasteTableListItem);
        this.parentElement.appendChild(this.pasteInTable);

        this.addRowUp.onclick = this.addTables.bind(this);
        this.pasteTableUnorderedList.onclick = this.pastInTAble.bind(this);
    }

    pastInTAble(event, counter){
        this.counter = counter;
        counter = 0;
        counter++;
        let pastintable = event.target.closest('.pasteTable_list-item'); // (1)
        if (!pastintable) return; // (2)
        if (!this.pasteTableUnorderedList.contains(pastintable)) return; // (3)
        if (this.currenCell) {
            let pastButton = document.querySelector('.paste-in-table');
            if (counter % 2 === 0) {
                pastButton.style.display = 'none';
            }
            else{
                pastButton.style.display = 'block';
            }
            console.log(counter);
            console.log("hi");
            this.currenCell.classList.remove('.pasteTable_list-item');
            this.currenCell.classList.toggle('pasteTable_list-item_active');
        }
        this.currenCell = pastintable;
        
        
    }
    addTables(event) {
        let addtable = event.target.closest('.add-Row-Up');
        if (!addtable ) return; // (2)
        if (!this.pasteInTable.contains(addtable)) return; // (3)
        //console.log(this.table.createTable)
        if (addtable) {
            this.table.addRowDawn();
        }
        if (delitetable) {
            this.table.createTable(this.table.row - 1, this.table.column - 1);
        }
        if (this.table.row < 0 && this.table.column < 0) {
            this.table.row = 0;
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

    }
}
let tableCreater = new TableCreater('.create-table');
tableCreater.createForm()



