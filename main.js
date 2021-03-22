function getparagraph1()

{
var inputs =[];
for(var i = 1 ; <=6 ; i++)
{
inputs.push(document.getElementById( "div_input_box_1"+i).value);
}
document.getElementById("showParagraph1").innerHTML = inputs.join(".")
}

function getparagraph2()
{
    var inputs =[];
    for(var i = 1 ; <=6 ; i++)
    {
    inputs.push(document.getElementById( "div_input_box_2"+i).value);
    }
    document.getElementById("showParagraph2").innerHTML = inputs.join(".")
    }




}