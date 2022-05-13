export const randomImages = (images) => {
    const randomIndex = Math.floor(Math.random() * images.length)
    return images[randomIndex];
}