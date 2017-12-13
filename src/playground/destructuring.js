
// Object destructuring
const person = {
    name: 'Jake',
    age: 21,
    location: {
        city: 'San Antonio',
        temp: 92
    }
};

const { name, age } = person;
console.log(`${name} is ${age}.`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

// create variable publisherName and set it to book.publisher.name
// if DNE, default to 'Self-Published'
const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);


// 
// Array destructuring
// 

const address = ['1299 s Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// matching up by index
const [, city, state = 'New Work'] = address;

console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];
const [itemName,,mediumCost] = item;
console.log(`A medium ${name} costs ${mediumCost}`);