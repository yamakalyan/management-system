const express = require("express");
const admin = express.Router();
const database = require("../Config/database");
const table = require("../Helpers/Tables");
const jwtVerify = require("../Helpers/JwtVerify");
const googleSheetInsert = require("../Helpers/googleSheets/PostGoogleSheet")
const {getUnique, getList, getProfile} = require("../Controllers/GetMethods/GetMethod")

// PROFILE
admin.get("/profile/:id", jwtVerify, getUnique, async (req, res, next) => {
  try {
   res.status(200).json(req.getuniqueResults)
    
  } catch (error) {
    next(error);
  }
});

// LIST
admin.get("/list", jwtVerify, getList, async (req, res, next) => {
  try {
   res.json(req.getListResults)
    
  } catch (error) {
    next(error);
  }
});

// PROFILE
admin.get("/profile", jwtVerify, getProfile, (req, res, next) => {
  try {
    res.status(200).json(req.getProfileResults)
  } catch (error) {
    next(error);
  }
});

// CREATE
admin.post("/agent/create", jwtVerify, (req, res, next) => {
  try {
    const getLastData = `SELECT * FROM ${table.agent} ORDER BY id DESC LIMIT 1`;
    database.query(getLastData, (err, results) => {
      if (err) {
        res.status(400).json({
          success: false,
          message: "Having internal issues",
          err,
        });
      } else {
        const takingLastId = results[0] ?.agent_id;
        const numberId = parseInt(takingLastId.match(/\d+/)) + 1;
        const stringPart = takingLastId.replace(/\d+/, "");
        const genNewAgentId = stringPart + numberId;

        const values = [
          0,
          req.body.created_by,
          genNewAgentId,
          req.body.first_name,
          req.body.last_name,
          req.body.agent_name,
          req.body.email,
          req.body.ph_number,
          req.body.gender,
          req.body.address_shop_name,
          req.body.password,
          req.body.agent_img_doc,
          req.body.pan_card_doc,
          req.body.residence_proof,
          req.body.shop_name,
          req.body.shop_place,
          req.body.mandal,
          req.body.district,
          req.body.pincode,
          req.body.state,
          req.body.c_number,
          req.body.a_status,
          "Active",
        ];

        const createSql = `INSERT INTO ${table.agent} (cb, created_by, agent_id, first_name,
           last_name, agent_name, email, ph_number, gender, address_shop_name, password, 
           agent_img_doc, pan_card_doc, residence_proof, shop_name, shop_place, mandal,
            district, pincode, state, c_number, a_status, status) VALUES ?`;
        database.query(createSql, [
          [values]
        ], async (err, createResults) => {
          if (err) {
            res.status(400).json({
              success: false,
              message: "Having internal issues",
              err,
            });
          } else {
            const takingLastIdfromTable = results[0]?.id

            const addingIDinGoogleSheet = takingLastIdfromTable + + 1

            values.unshift(addingIDinGoogleSheet)
            values.push(new Date().toLocaleDateString())

            await googleSheetInsert("agent", [values])


            res.status(200).json({
              success: true,
              message: "Successfully created",
            });
          }
        });
      }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = admin;