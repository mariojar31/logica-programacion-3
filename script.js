const resultadosDiv = document.getElementById("resultados");

function calcularFactorial(number){
    let factorial = 1;

    for(let i=1;i<=number;i++){
        factorial*=i;
    }

    console.log("El factorial de",number,"es:", factorial)
    alert("El factorial de "+number+" es: "+ factorial)

    return factorial
}

let exit = false;
let resultados = [];

while(exit==false){

    let number = parseInt(prompt("Ingrese un numero entero para conocer su factorial: "));

while(!number){
    alert("¡Ingrese un número valido!");
    console.error("Ingrese un Número válido");
    number = parseInt(prompt("Ingrese un numero entero para conocer su factorial: "));
}

const resultado = calcularFactorial(number);
resultados.push({"number":number, "factorial":resultado})

let response = prompt("¿Desea hacer un nuevo calculo?\n\nResponda 'SI' para continuar o 'NO' para finalizar.").toLowerCase();

if(response=='no'){
    alert("¡Muchas Gracias!")
    exit=true
}
}

    resultadosDiv.style="padding: 10vw; text-align: center; border-width: 2px; border-radius: 15px; background-color: rgba(255,255,255,0.5); margin: 10vw"

    const header = document.createElement('h1');
    header.innerText="Historial de Resultados:";
    resultadosDiv.appendChild(header);
    const list = document.createElement('ul');
    list.style="text-align: left; font-size: 2rem"

    resultados.map(resultado=>{
        const li = document.createElement('li');
        li.innerText=`Factorial de ${resultado.number} es: ${resultado.factorial}`;
        list.appendChild(li);
    })

    resultadosDiv.appendChild(list);



