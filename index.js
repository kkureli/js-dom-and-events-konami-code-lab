let i = 0
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
    // up, up, down, down, left, right, left, right, b, a
function arrayCheck(a, b) {
    for (let index = 0; index < a.length; index++) {
        if (a[index] !== b[index]) {
            i = 1
        }


    }
    if (i === 0) {
        return true
    } else {
        return false
    }
}


function init() {
    // Write your JavaScript code inside the init() function
    let array = []
    document.addEventListener('keydown', function() {
        if (array.length < 10) {
            if (event.isComposing || event.keyCode === 38) {
                array.push(38)
                console.log(array);
            } else if (event.isComposing || event.keyCode === 40) {
                array.push(40)
                console.log(array);
            } else if (event.isComposing || event.keyCode === 37) {
                array.push(37)
                console.log(array);
            } else if (event.isComposing || event.keyCode === 39) {
                array.push(39)
                console.log(array);
            } else if (event.isComposing || event.keyCode === 66) {
                array.push(66)
                console.log(array);
            } else if (event.isComposing || event.keyCode === 65) {
                array.push(65)
                console.log(array);
            }
        }
        if (array.length === 10) {
            if (arrayCheck(array, code) === true) {
                alert('bravoooo')
            } else {
                alert("you pressed 10 buttons but there is wrong one. buttons you pressed are: " + array)
            }

        }
    })
}


init()