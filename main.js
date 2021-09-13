let grid = document.getElementById('grid')
let test = document.getElementById('test')
let blocks = []
let color = document.getElementById('color-selector')
let colorLabel = document.getElementById('color-selector-label')
let colorMode = document.getElementById('color-mode')
let clear = document.getElementById('clear-btn')
let eraser = document.getElementById('eraser-btn')
let gridRange = document.getElementById('grid-size')
let randomColors = document.getElementById('random-colors')
let rangeLabel = document.getElementById('grid-size-label')
rangeLabel.innerHTML = gridRange.value
addBlocks()
//create the grid design
function addBlocks(){
    for(let i=0; i<(gridRange.value**2); i++){
        blocks[i] = document.createElement('div')
        blocks[i].setAttribute('class', 'block')
        grid.appendChild(blocks[i])
        blocks[i].addEventListener('mouseover', function addColor(){
            blocks[i].style.background = color.value
        })
    }
    grid.style.gridTemplateColumns = 'repeat('+ gridRange.value +', 1fr)'
    grid.style.gridTemplateRows = 'repeat('+ gridRange.value +', 1fr)'   
}
//Remove all blocks from the grid to start new
function removeBlocks(){
    for(i=0; i<(blocks.length); i++){
        blocks[i].remove()
    }
}
//Change grid size
gridRange.addEventListener('change', () => {
    removeBlocks()
    addBlocks()
    rangeLabel.innerHTML = gridRange.value
})
//Clear all the grid
clear.addEventListener('mousedown', () => {
    for (let i=0; i<(gridRange.value**2); i++ ){
        blocks[i].style.background = "white"
    }
})
//Enable the eraser
eraser.addEventListener('mousedown', () => {
    blocks.forEach(function(b){
        b.addEventListener('mouseover', function(){
            b.style.background = '#ffffff'
        })
    })
})
//Enable color Mode 
colorMode.addEventListener('mousedown', () => {
    blocks.forEach(function(b){
        b.addEventListener('mouseover', function(){
            b.style.background = color.value
        })
    })
})
//Random color generator 
function hexCode(){
    let number = Math.floor(Math.random()*16)
    switch(number){
        case 10:
            number = 'a'
            break
        case 11:
            number = 'b'
            break
        case 12:
            number = 'c'
            break
        case 13:
            number = 'd'
            break 
        case 14:
            number = 'e'
            break
        case 15:
            number = 'f'
    }return number
}
//Put the values on the hex style
function generateColor(){
    let c1,c2,c3,c4,c5,c6 
        c1 = hexCode()
        c2 = hexCode()
        c3 = hexCode()
        c4 = hexCode()
        c5 = hexCode()
        c6 = hexCode()
    return `#${c1}${c2}${c3}${c4}${c5}${c6}`
}
//Enable random color Mode 
randomColors.addEventListener('mouseup', () => {
    blocks.forEach(function(b){
        b.addEventListener('mouseover', function(){
            b.style.background = generateColor()
        })
    })
})
