export const cleanUpStory = (story) => {
  return story
    .replace(/\n/g, ' ')
    .replace(/([^A-Za-z0-9 ])/g, ' ')
    .split(' ');
};
