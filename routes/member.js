const express = require("express");

const memberController = require("../controllers/memberController");

const router = express.Router();

router.get("/", memberController.getIndex); // get all the members
router.get("/:id", memberController.getDetails); //get a specific member
router.post("/create", memberController.createMember);  //create a member
router.put("/update/:id", memberController.updateMember); // update a member
router.delete("/destroy/:id", memberController.deleteMember); // delete a member


module.exports = router;