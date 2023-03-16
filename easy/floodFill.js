/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let startingColor = image[sr][sc];
    // check pixel at [sr-1][sc], [sr+1][sc], [sr][sc+1], [sr][sc-1]
    // but make sure pixel is not out of bounds

    // use queue?
    // add starting pixel to queue
    // if the four directions are valid pixels, add them to the queue
    // continue until queue is empty
    const pixelQueue = [];
    const pixelMap = new Map();
    pixelQueue.push([sr, sc]);
    console.log(`the starting color is ${startingColor}`)
    while(pixelQueue.length > 0) {
        console.log(pixelQueue)
        const thisPixel = pixelQueue.shift();
        if (pixelMap.get(`${thisPixel}`) === true) continue;
        pixelMap.set(`${thisPixel}`, true);
        const thisRow = thisPixel[0];
        const thisCol = thisPixel[1];
        if (thisRow - 1 >= 0 && image[thisRow - 1][thisCol] === startingColor) pixelQueue.push([thisRow - 1, thisCol]);
        if (thisRow + 1 < image.length && image[thisRow + 1][thisCol] === startingColor) pixelQueue.push([thisRow + 1, thisCol]);
        if (thisCol - 1 >= 0 && image[thisRow][thisCol - 1] === startingColor) pixelQueue.push([thisRow, thisCol - 1]);
        if (thisCol + 1 < image[0].length && image[thisRow][thisCol + 1] === startingColor) pixelQueue.push([thisRow, thisCol + 1]);
        image[thisRow][thisCol] === startingColor ? image[thisRow][thisCol] = color : image[thisRow][thisCol];
    }
    return image;
};