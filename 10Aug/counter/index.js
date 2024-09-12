let counter = 0;
function count()
{
    counter++;
    document.querySelector('h1').innerHTML = counter;
    if(counter % 10==0)
    {
        // if you want to concate string and variable then use back ticks 
        alert(`now counter is ${counter}`);

    }
}

// Event listner : jab tak page laod na ho ap na execute nai karna 

// Event Listener additon
document.addEventListener('DOMContentLoaded',function()
{
    //<!-- document.querySelector(`button`).onclick=count; -->
    document.querySelector(`button`).addEventListener('click',count);

});

// Multiple functions 
