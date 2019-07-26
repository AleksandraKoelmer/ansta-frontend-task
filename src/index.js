import createTable from './createTable'
import filterByName from './filterByName'
import { employers } from './employers'
import createMultipleSelect from './filterByDepartment'
import createNewEmployee from './createNewEmployee'
import filterBySalary from './filterBySalary'
import noUiSlider from './static/noUiSlider.min'

createTable(employers);
document.getElementById('personElement').addEventListener('input', e => filterByName(e))
document.getElementById('addNewEmployee').onclick = createNewEmployee;
createMultipleSelect()

let slider = document.getElementById('slider');
noUiSlider.create(slider, {
    start: [1500, 4000],
    connect: true,
    range: {
        'min': 1500,
        'max': 4000
    }
});
let nonLinearStepSliderValueElement = document.getElementById('slider-non-linear-step-value');

slider.noUiSlider.on('update', function (values) {
    nonLinearStepSliderValueElement.innerHTML = ('Zakres wynagrodzeń: ' + values[0] + ' - ' + values[1]);
    filterBySalary(values);
});