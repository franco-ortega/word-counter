export const sortWords = (words, list) => {
  return words.sort((a, b) => {
    return list[b] - list[a];
  });
};
