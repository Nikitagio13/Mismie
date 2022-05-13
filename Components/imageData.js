

// export const imgData = {
//     cards: {
//         '1': require('../assets/photos/test.jpg'),
//         '2': require('../assets/photos/test2.jpg'),
//         '3': require('../assets/photos/test3.jpg'),
//         '4': require('../assets/photos/test4.jpg'),
//         '5': require('../assets/photos/test5.jpg'),
//         '6': require('../assets/photos/test6.jpg'),
//         '7': require('../assets/photos/test7.jpg'),
//     }
// }


// export const changeCard = () => {
//     randomCard = Math.floor(Math.random() * imgData.cards.length);
    
//     selectedCard = imgData[randomCard]

//     document.getElementById('randomImages').src = `../assets/photos/${selectedCard}`
// }



const data = [
    {
       image: require('../assets/photos/test.jpg'),
       id: "1"
    },
    {image: require('../assets/photos/test2.jpg'),
    id: "2"},
    {image: require('../assets/photos/test3.jpg'),
    id: "3"},
    {image: require('../assets/photos/test4.jpg'),
    id: "4"},
    {image: require('../assets/photos/test5.jpg'),
    id: "5"},
    {image: require('../assets/photos/test6.jpg'),
    id: "6"},
    {image: require('../assets/photos/test7.jpg'),
    id: "7"},

];