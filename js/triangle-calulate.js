function calculateTriangleArea(){
    const triangleBase = document.getElementById('triangle-base')
    const triangleBaseValue = triangleBase.value;
    const base = parseFloat(triangleBaseValue);
    console.log(base)


    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeight.value;
    const height = parseFloat(triangleHeightValue);
    console.log(height)

    // triangle calculate
    const area = 0.5 * base * height;
    console.log('Area of this triangle is :',area)

    // display Area
    const displayArea = document.getElementById('area-dispaly');
    displayArea.innerText = area;
}

// rectangle calculation
function calculateRectangleArea (){

   const rectangleWidth = document.getElementById('rectangle-width');
   const rectangleWidthValue = rectangleWidth.value;
   const width =  parseFloat(rectangleWidthValue);
   console.log(width)


   const rectangleLength = document.getElementById('rectangle-length');
   const rectangleLengthValue = rectangleLength.value;
   const length = parseFloat(rectangleLengthValue);
   console.log(length)

//    rectangle calculator
    const area = width * length;
    console.log('Area of this rectangle is :',area)


    // display rectangle
    const rectangleDisplay = document.getElementById('rectangle-dis');
    rectangleDisplay.innerText = area;
    
}
