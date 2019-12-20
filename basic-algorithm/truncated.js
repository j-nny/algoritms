function truncateString(str, num) {
  let truncated = '';
  for (let i = 0; i < (num < str.length? num : str.length); i++) {
    truncated += str[i];
  }
  truncated < str ? truncated += '...' : truncated;
  return truncated;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 7));