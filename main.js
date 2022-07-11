/*
Grids
use grid-template-columns
and the number of entries determines the number of columns
the same can be said for grid-template-rows

so given the containers width (you can get that value)

make the given number of rows/ columns be the correct ratio size
via percentages
so if there were 5 rows/ columns. Each would be 20%


*/

// get container
//const gridContainer = document.querySelector('.grid-container');

// cell per width/ height
let cellCount = 16;

// add (16 * 16) divs as children of the outline
// give them an id of their co-ordinate 
// so at (0,0) you'd have <div id="0-0">

// create grid function
function createGrid(size) {
    const gridContainer = document.querySelector('.grid-container');
    // we count down because the divs are made in an order that 
    // is opposite of our normal grid and I don't want to do
    // the mental work afterwards if I can just do it now
    for (let y=size; y > 0; y--) {
        for (let x=size; x > 0; x--) {
            // create child div
            const div = document.createElement('div');
            // give it id='x-y' and class='cell'
            div.setAttribute('id', `${x}-${y}`);
            div.setAttribute('class', 'cell');
            // load it to gridContainer
            gridContainer.appendChild(div);


        }
    }
    // set grid-template-columns and rows
    // get ratio
    const ratio = Math.floor(100/size);
    console.log(ratio);
    // add ratio to gridContainer size number of times
    // twice, once for column, once for row
    let ratioString = '';
    for (let i=0; i < size; i++) {
        ratioString += `${ratio}% `
    }
    gridContainer.style.gridTemplateRows = ratioString;
    gridContainer.style.gridTemplateColumns = ratioString;
}


