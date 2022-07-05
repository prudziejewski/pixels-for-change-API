const express = require("express");
const router = express.Router();
const fs = require("fs");
// const { v4: uuid } = require("uuid");

const companyFilePath = "./data/company.json";
const pixelFilePath = "./data/pixel.json";

const getCompanies = () => {
    return JSON.parse(fs.readFileSync(companyFilePath));
};

const getPixel = () => {
    return JSON.parse(fs.readFileSync(pixelFilePath));
};

router.route("/:id").get((req, res) => {


    const pixelId = req.params.id;
    let companies = getCompanies();
    
    let reqCompany = companies.find((company) => {
        console.log(req.params.id);
        console.log(company.charityid)
        return company.charityid === pixelId
    })

    res.json(reqCompany);
    

    // let companies = getCompanies();
    
// When clicked on will show 
    

    // res.json(reqCompany);

})

router.route("/edit").put((req, res) => {
    const { name, url, description, charityid, message } = req.body;
    
    const newCompany = {
        name: name,
        url: url,
        description: description, 
        charityid: charityid,
        message: message,
    };
    
    const companies = getCompanies();
    
    // const indexOfSelectedCompanies = companies.findIndex(
    //     (company) => company.charityid === newCompany.charityid
    // );
    
    // companies.splice(indexOfSelectedCompanies, 1, newCompany);
    companies.push(newCompany);
    fs.writeFileSync("./data/company.json", JSON.stringify(companies));
    
    res.status(201).json(companies);
    })

module.exports = router;