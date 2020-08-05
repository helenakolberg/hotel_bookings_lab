use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        fullName: "Ruben Botha",
        email: "r.botha@gmail.com",
        checkedIn: false
    },
    {
        fullName: "Rebeka Geczi",
        email: "Rebeka@yahoo.com",
        checkedIn: true
    },
    {
        fullName: "Robert Peacock",
        email: "r.p@gmail.com",
        checkedIn: false
    }
]);