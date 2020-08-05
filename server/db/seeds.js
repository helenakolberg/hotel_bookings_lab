use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        firstName: "Ruben",
        surname: "Botha",
        email: "r.botha@gmail.com",
        checkedIn: false
    },
    {
        firstName: "Rebeka",
        surname: "Geczi",
        email: "Rebeka@yahoo.com",
        checkedIn: true
    },
    {
        firstName: "Robert",
        surname: "Peacock",
        email: "r.p@gmail.com",
        checkedIn: false
    }
]);