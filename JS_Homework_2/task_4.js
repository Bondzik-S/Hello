function drawRectangle(width, height) {
    for (var i = 0; i < height; i++) {
        var row = '';
        for (var j = 0; j < width; j++) {
            if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
                row += '($)';
            } else {
                row += '  ';
            }
        }
        console.log(row);
    }
}

function drawRightTriangle(height) {
    for (var i = 0; i < height; i++) {
        var row = '';
        for (var j = 0; j <= i; j++) {
            row += '($)';
        }
        console.log(row);
    }
}

function drawEquilateralTriangle(height) {
    for (var i = 0; i < height; i++) {
        var row = '';
        for (var j = height - 1; j > i; j--) {
            row += '  ';
        }
        for (var k = 0; k <= i; k++) {
            row += '($) ';
        }
        console.log(row);
    }
}

function drawDiamond(height) {
    for (var i = 0; i < height; i++) {
        var row = '';
        for (var j = height - 1; j > i; j--) {
            row += '  ';
        }
        for (var k = 0; k <= i; k++) {
            row += '($) ';
        }
        console.log(row);
    }

    for (var i = height - 2; i >= 0; i--) {
        var row = '';
        for (var j = height - 1; j > i; j--) {
            row += '  ';
        }
        for (var k = 0; k <= i; k++) {
            row += '($) ';
        }
        console.log(row);
    }
}

console.log('Прямоугольник:');
drawRectangle(8, 5);

console.log('\nПрямоугольный треугольник:');
drawRightTriangle(6);

console.log('\nРавносторонний треугольник:');
drawEquilateralTriangle(6);

console.log('\nРомб:');
drawDiamond(5);
