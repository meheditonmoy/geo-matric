function parallalogramArea (){
    const parallalogramBase = document.getElementById('parallalogram-base')
    const parallalogramBaseValue = parallalogramBase.value;
    const base = parseFloat(parallalogramBaseValue);
    console.log(base);


    const parallalogramHeighty = document.getElementById('parallalogram-height')
    const parallalogramHeightValue = parallalogramHeighty.value;
    const height = parseFloat(parallalogramHeightValue);
    console.log(height);

    // Parallalogram calculate
    const area = base * height ;
    console.log(area)

    const paraDisplay = document.getElementById('parallalogram-dis');
    paraDisplay.innerText = area;
    
}