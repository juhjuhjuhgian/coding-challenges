// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

// Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.

//WRONG - way off here, didn't understand the problem at all
// function findScreenHeight(width, ratio) {
//     switch(width){
//         case 1024:
//         return '1024x768';
//         break;
//         case 16:
//         return '1280x720';
//         break;
//         case 32:
//         return '3840x1080';
//         break;
//     }
// }

function findScreenHeight(width, ratio) {
    const [x, y] = ratio.split(':');
    return `${width}x${width / x * y}`
}