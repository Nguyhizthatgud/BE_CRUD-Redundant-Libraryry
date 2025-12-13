const { faker } = require('@faker-js/faker');
const fs = require('fs');

function generateFakeBook() {
    return {
        id: faker.string.uuid(),
        author: faker.person.fullName(),
        country: faker.location.country(),
        imageLink: faker.image.url(),
        language: faker.helpers.arrayElement(['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Portuguese', 'Russian']),
        pages: faker.number.int({ min: 50, max: 1000 }),
        title: faker.book.title(),
        year: faker.number.int({ min: 1900, max: 2024 })
    };
}

function generateFakeBooks(count = 50) {
    const books = [];
    for (let i = 0; i < count; i++) {
        books.push(generateFakeBook());
    }
    return books;
}

function createDatabase() {
    const books = generateFakeBooks(50); // generate 50 books
    const db = { books };

    fs.writeFileSync('db.json', JSON.stringify(db, null, 2));
    console.log('Database seeded with fake book data.');
}

createDatabase();