const express = require('express')
const router = express.Router()

const Schema = require("../db/schema.js");
const CompanyModel = Schema.CompanyModel;

router.get('/', (request, response) => {
    console.log('In the company controller')
    CompanyModel.find({})
        .then((companies) => {
            response.render('companies/index', {
                companies: companies
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

module.exports = router