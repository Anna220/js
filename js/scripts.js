'use strict';

var codeHTML='<ul id="menu">\n';
var list =['Start','Firma','Produkty','Galeria', 'Kontakt'];
for (var i=0; i<list.length; i++){
    
   codeHTML += '<li value="' + i +'">' +'<a href="#" id="linkItem">'+ list[i] + '</a>' +'</li>'; 
   
}
codeHTML += '</ul>\n';
document.getElementById('box').innerHTML=codeHTML;
document.getElementById('menu').style.display = "flex";
document.getElementById('menu').style.justifyContent = "space-around";
document.getElementById('menu').style.backgroundColor = "#666";
document.getElementById('menu').style.height = "7vh";
document.getElementById('menu').style.width = "100%";
document.getElementById('linkItem').href = "style.css";



function sumaLiczb(){
    var sum = 0;

    for (i=0; i<arguments.length; i++){
        sum+=arguments[i];
    }
    console.log(sum);
}
sumaLiczb(40);

