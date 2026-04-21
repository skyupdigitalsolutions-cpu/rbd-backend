const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const { getcontact, getContacts, createContact } = require("../controllers/contact.controller");

router.get("/:id",getcontact);

router.get("/",getContacts);

router.post("/",createContact);

module.exports = router;