import { createSummary, createDepartmentsSummary } from './createSumary'

function clearTable() {
    document.getElementById('table').innerHTML = "";
    document.getElementById('summary').innerHTML = "";
};

export default function createTable(data) {
    clearTable();
    const list = document.getElementById('table');
    const table = document.createElement('table');
    table.setAttribute('id', 'lista');
    table.appendChild(createHeader());
    table.appendChild(createBody(data));
    list.appendChild(table);

    const summaryElement = document.getElementById('summary');
    const summary = document.createElement('div');
    summary.appendChild(createSummary(data));
    summary.appendChild(createDepartmentsSummary(data));
    summaryElement.appendChild(summary);
};
function createHeader() {
    const thead = document.createElement('thead');
    thead.appendChild(createCell('Imię'));
    thead.appendChild(createCell('Nazwisko'));
    thead.appendChild(createCell('Dział'));
    thead.appendChild(createCell('wynagrodzenie'));
    return thead;
};

function createBody(data) {
    const tbody = document.createElement('tbody');
    data.map(function (employee) {
        const row = document.createElement('row');
        row.appendChild(createCell(employee.imie));
        row.appendChild(createCell(employee.nazwisko));
        row.appendChild(createCell(employee.dzial));
        row.appendChild(createCell(employee.wynagrodzenieKwota + ' ' + employee.wynagrodzenieWaluta));
        tbody.appendChild(row);
    });
    return tbody;
}

function createCell(cellData) {
    const cell = document.createElement('td');
    cell.innerHTML = cellData;
    return cell;
};


