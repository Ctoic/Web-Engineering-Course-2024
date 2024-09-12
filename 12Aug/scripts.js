function generateTable() {
    var amount, rate, years, interest, table, year = 1;

    amount = document.getElementById('deposit').valueAsNumber;
    rate = document.getElementById('rate').valueAsNumber;
    years = document.getElementById('years').valueAsNumber;

    table = "<table border='1'><tr> <th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>";

    while (year <= years) {
        table += "<tr>";
        table += "<td>" + year + "</td>";
        table += "<td>" + amount.toFixed(2) + "</td>";
        interest = amount * (rate / 100);
        table += "<td>" + interest.toFixed(2) + "</td>";
        amount = amount + interest;
        table += "<td>" + amount.toFixed(2) + "</td>";
        table += "</tr>";

        year++;
    }

    table += "</table>";

    document.getElementById('result').innerHTML = table;
}


function changeColor() {
    // Get the selected color value from the dropdown
    var selectedColor = document.getElementById('color-select').value;

    // Change the color of the "Hello World" h3 tag
    document.getElementById('hello-world').style.color = selectedColor;
}

