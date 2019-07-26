import { employers } from './employers'
import createTable from './createTable'

export default function filterByName(e) {
    let searchingText = e.srcElement.value;
    let searchingEmployers = employers.filter(containsSearchingText);
    function containsSearchingText(employee) {
        if (employee.imie.toLowerCase().includes(searchingText) || employee.nazwisko.toLowerCase().includes(searchingText))
            return employee
    };
    createTable(searchingEmployers);
}