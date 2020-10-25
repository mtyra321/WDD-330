// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', born: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', born: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', born: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', born: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', born: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', born: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', born: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', born: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', born: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', born: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', born: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', born: 1829, passed: 1909 }
];

const people = [
    'Beck, Glenn',
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const result = inventors.filter(inventor => inventor.born < 1600 && inventor.born >= 1500);
console.log(result);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const result2 = inventors.map(inventor => inventor.first + " " + inventor.last);
console.log(result2);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const result3 = inventors.sort(function(a, b) {


    if (a.born > b.born) {
        return 1;
    } else {
        return -1;
    }

});
console.log(result3);


// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const result4 = inventors.reduce((total, inventor) => { return total + inventor.passed - inventor.born }, 0);
console.log(result4);


// 5. Sort the inventors by years lived

const result5 = inventors.sort(function(a, b) {

    const last = a.passed - a.born;
    const next = b.passed - b.born;
    if (last < next) {
        return 1;
    } else {
        return -1;
    }

});
console.log(result5);



// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// goto the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));

// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck'
];