function sumTable() {
    const table = document.querySelector('table');
    const tdElements = Array.from(table.querySelectorAll('td'));
    const tdTotal = document.getElementById('sum');
    let sum = 0;

    for (i = 0; i < tdElements.length; i++) {
        if (i % 2 !== 0) {
            num = tdElements[i].textContent;
            console.log(num);
            sum += Number(num);
        }
    }

    tdTotal.textContent = sum
}