function generateTable(form)
{
    var amount;
    var rate;
    var years;
    var interest;
    var table;
    var year=1;

    amount = document.getElementById('deposit').valueAsNumber;
    rate = document.getElementById('rate').valueAsNumber;
    years = document.getElementById('years').valueAsNumber;


    table = 
    "<table>" + "<tr> <th>Year</th><th>Starting value</th></tr>" + "<th>Interest Earned</th><th>Ending Value</th>"
 
    while(year <= years)
    {
        table+="<tr>";
        table+="<td>" + year + "</td>";
        table+="<td>" + amount.tofixed(2) + "</td>";
        interest = amount * (rate/100);
        table+="td"+ interest.tofixed(2) + "</td>";
        amount = amount + interest;
        table+="<td>" + amount.tofixed(2) + "</td>";


        table+="</tr>";


        years++;
        // end of the  while loop
        document.getElementById('result').innerHTML = table;
    }
     
    table+="</table>";

}