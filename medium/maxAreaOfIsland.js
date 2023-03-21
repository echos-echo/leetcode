/**
 * given an m x n grid, groups of 1's represent land and 0's are water
 * find the largest area of an island, which are 1's connected horizontal/vertically
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let visitedCells = new Array(grid.length).fill([]).map(row => new Array(grid[0].length).fill(false));
    let maxArea = 0;
    const area = (r, c) => {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || visitedCells[r][c] || grid[r][c] === 0) {
            return 0;
        }
        visitedCells[r][c] = true;
        return (1 +         area(r, c + 1) + area(r, c - 1) + area(r + 1, c) + area(r - 1, c));
        //  current cell    east cell        west cell        south cell       north cell
    }

    for(let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            let areaOfIsland = area(r, c);
            maxArea = maxArea > areaOfIsland ? maxArea : areaOfIsland;
        }
    }
    return maxArea;
};