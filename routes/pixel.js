const express = require("express");
const router = express.Router();
const fs = require("fs");
// const { v4: uuid } = require("uuid");

const pixelFilePath = "./data/pixel.json";

const writePixel = (newPixel) => {
    return fs.writeFileSync(pixelFilePath, JSON.stringify(newPixel));
  };

const getPixel = () => {
    return JSON.parse(fs.readFileSync(pixelFilePath));
};

router.route("/").get((_req, res) => {
    let pixels = getPixel();

    res.json(pixels);
})

router.route("/edit").put((req, res) => {
const { id, color, text, charityid } = req.body;

const newPixel = {
    id: id,
    color: color,
    text: text, 
    charityid: charityid,
};

const pixels = getPixel();

const indexOfSelectedPixel = pixels.findIndex(
    (pixel) => pixel.id === newPixel.id
);

pixels.splice(indexOfSelectedPixel, 1, newPixel);

fs.writeFileSync("./data/pixel.json", JSON.stringify(pixels));

res.status(201).json(pixels);
})

// Intended to take the id of each individual pixel adn find the one that matches the id of the one thats clicked 
router.route("/:id").get((req, res) => {


    const pixelId = req.params.pixelId;
    let pixel = getPixel();
    
    let reqCompany = pixel.find((pixel) => {
        console.log(req.params.id);
        return pixel.id === pixelId
    })
    res.json(reqCompany);
})

router.route("/:id/company").get((req, res) => {
//axios call to grab the list of all compaines that have an id that matches the charityID 
})
//Find method comparing the charity ID of the two jsons 
module.exports = router;