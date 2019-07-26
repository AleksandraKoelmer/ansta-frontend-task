export function createSummary(data) {
    const wynagrodzeniaRazem = document.createElement('div');
    wynagrodzeniaRazem.classList.add('wynagrodzenia')
    let sumaWynagordzeń = 0;
    data.forEach(function (item) {
        sumaWynagordzeń += parseInt(item.wynagrodzenieKwota);
    });
    wynagrodzeniaRazem.innerHTML = 'Suma wynagrodzeń wszystkich pracowników: ' + sumaWynagordzeń;
    return wynagrodzeniaRazem
};

export function createDepartmentsSummary(data) {
    const wynagordzeniaDzialami = document.createElement('div');
    wynagordzeniaDzialami.classList.add('wynagrodzenia')
    let sumIT = 0;
    let sumHandlowiec = 0;
    let sumAdministracja = 0;

    data.forEach(function (item) {
        if (item.dzial === 'IT') {
            sumIT += parseInt(item.wynagrodzenieKwota)
        }
        else if (item.dzial === 'Administracja') {
            sumAdministracja += parseInt(item.wynagrodzenieKwota)
        }
        else {
            sumHandlowiec += parseInt(item.wynagrodzenieKwota)
        };
    });

    if (sumIT !== 0) {
        wynagordzeniaDzialami.innerHTML += 'Wynagrodzenia pracowników działu IT: ' + sumIT + '<br>'
    };
    if (sumAdministracja !== 0) {
        wynagordzeniaDzialami.innerHTML += 'Wynagrodzenia pracowników działu Administracja: ' + sumAdministracja + '<br>'
    };
    if (sumHandlowiec !== 0) {
        wynagordzeniaDzialami.innerHTML += 'Wynagrodzenia pracowników działu handlowego: ' + sumHandlowiec + '<br>'
    };

    return wynagordzeniaDzialami
};