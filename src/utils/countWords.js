export const countWords = (words) => {
  return words.reduce((prev, curr) => {
    const word = curr.toLowerCase();
    if (!word) return prev;
    if (prev[word]) return { ...prev, [word]: prev[word] + 1 };
    return { ...prev, [word]: 1 };
  }, {});
};
