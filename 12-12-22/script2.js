//Challenge #2 
function maximum(a, b)
{
    let max = a > b ? a : b;
    console.log(max);
}

maximum(0, 3);
maximum(10, 4);
maximum(1, -3);

function maximumV2(a, b)
{
    if(a > b)
    {
        console.log(a);
    }
    else
    {
        console.log(b);
    }
}

maximumV2(0, 3);
maximumV2(10, 4);
maximumV2(1, -3);