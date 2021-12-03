const db = require('./db');

exports.getAll = async (req, res) => {
    //get all listings from database
    console.log("here?");
    const listings = await db.getAllListings();
    console.log(listings);
    res.status(404).send("TESTING");
}