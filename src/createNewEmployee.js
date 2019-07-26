import { employers } from './employers'
import createTable from './createTable'

export default function createNewEmployee() {

    const newEmployeeElement = document.getElementById('newEmployeeForm');
    const newEmployeeForm = document.createElement('form')
    newEmployeeForm.classList.add('newEmployeeForm')
    newEmployeeForm.onsubmit=addNewEmployee
    newEmployeeElement.appendChild(newEmployeeForm);

    let imie = document.createElement('input');
    imie.setAttribute('placeholder', 'imię')
    imie.setAttribute('id', 'imie')
    imie.required = true
    newEmployeeForm.appendChild(imie)

    let nazwisko = document.createElement('input');
    nazwisko.setAttribute('placeholder', 'nazwisko')
    nazwisko.setAttribute('id', 'nazwisko')
    nazwisko.required = true
    newEmployeeForm.appendChild(nazwisko)

    let dzial = document.createElement('select');
    dzial.setAttribute('id', 'dzial')
    newEmployeeForm.appendChild(dzial)

    let dzialIt = document.createElement('option')
    dzialIt.innerHTML = "IT"
    dzial.appendChild(dzialIt)

    let dzialAdministracja = document.createElement('option')
    dzialAdministracja.innerHTML = "Administracja"
    dzial.appendChild(dzialAdministracja)

    let dzialHandlowy = document.createElement('option')
    dzialHandlowy.innerHTML = "Handlowiec"
    dzial.appendChild(dzialHandlowy)

    let wynagrodzenieKwota = document.createElement('input');
    wynagrodzenieKwota.setAttribute('placeholder', 'Kwota')
    wynagrodzenieKwota.setAttribute('type', 'number');
    wynagrodzenieKwota.setAttribute('min', '0')
    wynagrodzenieKwota.setAttribute('id', 'wynagrodzenieKwota');
    wynagrodzenieKwota.required = true
    newEmployeeForm.appendChild(wynagrodzenieKwota)

    let wynagrodzenieWaluta = document.createElement('select');
    wynagrodzenieWaluta.setAttribute('id', 'wynagrodzenieWaluta')
    newEmployeeForm.appendChild(wynagrodzenieWaluta)

    let pln = document.createElement('option')
    pln.innerHTML = "PLN"
    wynagrodzenieWaluta.appendChild(pln)

    let eur = document.createElement('option')
    eur.innerHTML = "EUR"
    wynagrodzenieWaluta.appendChild(eur)

    let cancel = document.createElement('button');
    cancel.innerHTML = 'Anuluj'
    cancel.classList.add('cancelButton')
    cancel.onclick = hideForm
    newEmployeeForm.appendChild(cancel)

    let submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.innerHTML = 'Dodaj'
    newEmployeeForm.appendChild(submit)
}

function addNewEmployee() {   
    employers.push(
        {
            "imie": document.getElementById('imie').value,
            "nazwisko": document.getElementById('nazwisko').value,
            "dzial": document.getElementById('dzial').value,
            "wynagrodzenieKwota": document.getElementById('wynagrodzenieKwota').value,
            "wynagrodzenieWaluta": document.getElementById('wynagrodzenieWaluta').value
        })

    hideForm()
    createTable(employers)
}

function hideForm() {
     document.getElementsByClassName('newEmployeeForm')[0].remove(); 
}
