/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteSong on one line and console.log the value
 * Then, using your Literals, console.log "my favorite song is..." with the song's value
 */

console.log('----------First Prompt----------')
let myFavoriteSong = "Fireflies"
console.log(`My favorite song is ${myFavoriteSong}`)

/*
 * Prompt 2:
 *
 * Create 3 variables using let and const, then console.log each of them, using a string literal (` ${} `} in the log
 */

console.log('----------Second Prompt----------')
const name = 'Sara'
let age = 27
let pet = 'cat'
console.log(`Hello, my name is ${name}, I am ${age}, and I have a ${pet}`)

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each, using console.log:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

console.log('----------Third Prompt----------')
let favoriteNumber = 13
console.log(favoriteNumber +5)
console.log(favoriteNumber - 6)
console.log(favoriteNumber * 3)
console.log(favoriteNumber / 7)
console.log(favoriteNumber % 2)

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 * Run a console.log that says 'hello my name is..." with your fullName. 
 */

console.log('----------Fourth Prompt----------')
let firstName = 'Sara'
let lastName = 'Searson'
let fullName = firstName + " " + lastName
console.log(`Hello, my name is ${fullName}`)

/* Arrays */

// Create an array of Movies, then log the 2nd movie in your array
// Use your array methods to add a movie in to the Front of the array, then the Back of the Array, then to the 2nd index point of the array

console.log('----------Fifth Prompt----------')
let movies = ['Encanto', 'Cinderella', 'Brave', 'Frozen']
console.log(movies[1])
movies.unshift('Cars')
movies.push('Little Mermaid')
movies.splice(1, 0, 'Tangled')
/* I found the splicing information on geeksforgeeks.org, and they're code example looked like this: 
    // splicing the array elements using splice() method
    list.splice(1, 0, "February");
    // expected output [January, February, March, April, June]

    // splicing the output elements after the first splicing
    list.splice(4, 1, "May");*/ 
console.log(movies)

/*
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

console.log('----------Sixth Prompt----------')
let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

console.log(array1[2])
console.log(array2[1] [1])
console.log(array3 [1] [1] [1] [0])

/*
 *
 * Use the length of the array below to retrieve the second to last item.
 */

console.log('----------Seventh Prompt----------')
let array4 = ['a', 'b', 'c', 'd', 'e'];

console.log(array4 [array4.length-2])

/*
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

console.log('----------Eighth Prompt----------')
// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".
thom[0] = 'tom'
console.log(thom)

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.
karolin[1] = (karolin[1] + 1)
console.log(karolin)

// Change Cathleen's hometown from New York to "Gotham City".
cathleen[2] = 'Gotham City'
console.log(cathleen)

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".
kristyn.splice(2, 1, 'Oakland')
console.log(kristyn)

/*console.log(thom, 
  karolin, 
  cathleen, 
  kristyn)

  ignore this, I was just testing shorter ways to console log multiple arrays*/