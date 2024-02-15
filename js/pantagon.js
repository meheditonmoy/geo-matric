function pantagonAreaCalvulate(){
    const parimeter = pantagonInputWithId('pantagon-pari');
    const base = pantagonInputWithId('pantagon-base')
    console.log(parimeter , base);
}

function pantagonInputWithId(inputField){
    const pantagonInputs = document.getElementById(inputField);
    const pantagonText = pantagonInputs.value ;
    const value = parseFloat(pantagonText);
    return value;
}