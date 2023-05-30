export const randomImages = (images) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

export const randomTexts = (texts) => {
  const randomI = Math.floor(Math.random() * texts.length);
  return texts[randomI];
};
