<<<<<<< HEAD
function oldBooks(input) {
    let book = input.shift();
    let n = Number(input.shift());
    let currBook = '';
    let counter = 0;

    while (currBook !== book) {
        currBook = input.shift();
        if (counter == n) {
            break;
        } if (currBook === book) {
            break;
        }
        counter++;
    }
    if (currBook === book) {
        console.log(`You checked ${counter} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    }
}

oldBooks(['The Spot', 4, 'Hunger Games', 'Harry Potter', 'Torronto', 'Spotify'])

//'The Spot', 4, 'Hunger Games', 'Harry Potter', 'Torronto', 'Spotify'

=======
function oldBooks(input) {
    let book = input.shift();
    let n = Number(input.shift());
    let currBook = '';
    let counter = 0;

    while (currBook !== book) {
        currBook = input.shift();
        if (counter == n) {
            break;
        } if (currBook === book) {
            break;
        }
        counter++;
    }
    if (currBook === book) {
        console.log(`You checked ${counter} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    }
}

oldBooks(['The Spot', 4, 'Hunger Games', 'Harry Potter', 'Torronto', 'Spotify'])

//'The Spot', 4, 'Hunger Games', 'Harry Potter', 'Torronto', 'Spotify'

>>>>>>> a643a331bf9e9014bbd3221e06892835890294e0
//'Troy', 8, 'Stronger', 'Life Style', 'Troy'