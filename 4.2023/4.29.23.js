// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

const last = words => words.split(' ').sort((a, b) => a.slice(-1) > b.slice(-1))