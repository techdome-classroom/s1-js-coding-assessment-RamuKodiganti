const decodeTheRing = function (s, p) {
  // Create a memoization object to store results for specific indices
  const memo = {};

  // Helper function for recursion with memoization
  const dfs = function (i, j) {
    const key = `${i},${j}`;
    // Check if result is already computed
    if (key in memo) return memo[key];

    // If both the message and pattern are fully traversed, return true (match)
    if (i >= s.length && j >= p.length) return true;

    // If only the pattern is fully traversed but not the message, return false
    if (j >= p.length) return false;

    // Handle '*' in the pattern
    if (p[j] === '*') {
      // '*' can match zero characters (move j forward) or one/more characters (move i forward)
      if (dfs(i, j + 1) || (i < s.length && dfs(i + 1, j))) {
        memo[key] = true;
        return true;
      }
    }

    // Handle '?' and exact character matches
    if (i < s.length && (p[j] === '?' || p[j] === s[i])) {
      if (dfs(i + 1, j + 1)) {
        memo[key] = true;
        return true;
      }
    }

    // No match found, store and return false
    memo[key] = false;
    return false;
  };

  return dfs(0, 0);
};

module.exports = decodeTheRing;
