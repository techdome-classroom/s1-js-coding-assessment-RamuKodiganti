const getTotalIsles = function (grid) {
  // Handle empty grid
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // Helper function for Depth First Search
  const dfs = (r, c) => {
    // Base case: if out of bounds or at a water cell, return
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
      return;
    }

    // Mark the cell as visited by changing it to 'W'
    grid[r][c] = 'W';

    // Visit all four possible directions (up, down, left, right)
    dfs(r + 1, c); // Down
    dfs(r - 1, c); // Up
    dfs(r, c + 1); // Right
    dfs(r, c - 1); // Left
  };

  // Traverse the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 'L') {
        // Found an unvisited landmass; start a DFS to mark the entire island
        islandCount++;
        dfs(r, c);
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;
