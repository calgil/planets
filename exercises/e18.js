import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const discoveryYearCounts = data.asteroids.reduce((counts, asteroid) => {
    if (!counts[asteroid.discoveryYear]) {
      counts[asteroid.discoveryYear] = 0;
    }
    counts[asteroid.discoveryYear]++;
    return counts;
  }, {});
  const sortedYears = Object.entries(discoveryYearCounts).sort((a, b) => b[1] - a[1])
  return +sortedYears[0][0]
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
