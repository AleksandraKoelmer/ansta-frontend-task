import {employers} from './employers'
import createTable from './createTable'

export default function filterBySalary(values) {
    let searchingEmployers = employers.filter(salaryInScope);
    function salaryInScope(employee) {
        if (parseInt(employee.wynagrodzenieKwota) > parseInt(values[0]) && parseInt(employee.wynagrodzenieKwota) < parseInt(values[1]))
            return employee
    };
    createTable(searchingEmployers);
}