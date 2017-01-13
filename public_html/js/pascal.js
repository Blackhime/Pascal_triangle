function printPascal(lineIndex, endValue)
{
    var currentLine = document.getElementById(lineIndex).value; //create a variable which will stock the indice of the line the programm will currently working with at any moment of the process. 
    var pascal = computePascalDreieck(currentLine);
    var lineToAdd = ""; //create a empty string to write the values of the current line the programm is calculating in.
    var arr = String(pascal[currentLine - 1][Math.floor(currentLine /2)]).length; //generate a empty 2D array.
    
    for (var i = currentLine - 1; i >= 0; i--)
    {
        var lineToAdd = "&nbsp;".repeat((currentLine - i) * arr)
        
        for (var j = 0; j <= i; j++)
        {
           lineToAdd += " " + "&nbsp;".repeat(arr - String(pascal[i][j]).length) + pascal[i][j] + "&nbsp;".repeat(arr - String(pascal[i][j]).length);   
            //print the values calculate within computePascaalDrieck() with a space in between them.
        }
        
        document.getElementById(endValue).innerHTML = "</br>" + lineToAdd + document.getElementById(endValue).innerHTML;
    }
}

function computePascalDreieck(currentLine){
    
    var i, j;
    var pascal = new Array();

    for (i = 0; i < currentLine; i++)
    {
        pascal[i] = new Array();
        pascal[i][0] = 1;
        pascal[i][i] = 1;       //thise lines create a new empty array which will stock the values of the current line and set the first and the last value to 1.
    }
    
    for(i = 0; i < currentLine; i++)
    {
        for(j = 1; j < i; j++)
        {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];   //calculate the value to write in the current index
        }
    }
    return pascal;
}

var button = document.getElementById("cal");
button.onclick = function()  //detect when the generate a triangle button is push.

{
    printPascal("line", "pascal3");
};