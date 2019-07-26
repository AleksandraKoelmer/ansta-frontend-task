import {employers} from './employers'
import createTable from './createTable'

function filterByDepartment(e) {
    var checkedBoxes = document.querySelectorAll('input:checked');
    let selectedList = [];
    checkedBoxes.forEach(function (box) {
        selectedList.push(box.id);
    });

    let searchingEmployers = employers.filter(function (employee) {
        if (selectedList.includes(employee.dzial))
            return employee;
    });
    createTable(searchingEmployers);
};

 export default function createMultipleSelect() {
    let selectElement = document.getElementById('departmentElement');
    let select = document.createElement('div');
    let options = [];
    employers.forEach(function (item) {
        Object.keys(item).forEach(function (key) {
            if (key === 'dzial') {
                options.push(item[key]);
            }
        });
    });
    let uniqOptions = [];
    uniqOptions = [...new Set(options)];

    uniqOptions.forEach(function (item) {
        let row = document.createElement('div');
        let option = document.createElement('input');
        let label = document.createElement('label');

        option.type = 'checkbox';
        option.setAttribute('checked', 'true');
        option.setAttribute('id', item);
        option.onchange = filterByDepartment;

        label.setAttribute('for', option);
        label.innerHTML = item;

        row.appendChild(option);
        row.appendChild(label);
        select.appendChild(row);
    })
    selectElement.appendChild(select);
};