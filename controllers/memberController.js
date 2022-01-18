const memberModel = require("../models").Member;


// List all player/staff
exports.getIndex = (req, res) => {
    memberModel.findAll().then(function (members) {
        res.status(200).json(members);
    }).catch(function (err) {
        // console.log(err);
        res.status(500).json({ Error: 'Sorry there was an error' });
    });
}


// List a single player/staff
exports.getDetails = (req, res) => {
    const memberID = parseInt(req.params.id);
    memberModel.findAll({
        where: {
            id: memberID,
        }
    }).then(function (member) {
        res.status(200).json(member);
    }).catch(function (err) {
        // console.log(err);
        res.status(500).json({ Error: 'Sorry there was an error' });
    });
}


// Create a new player or staff and adds to the team roster
exports.createMember = (req, res) => {
    memberModel.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        c: req.body.email,
        staff: req.body.staff
    }).then(function (member) {
        res.status(200).json({
            message: "User has been created successfully"
        });
    }).catch(function (err) {
        // console.log(err);
        res.status(500).json({ Error: 'Sorry, there was an error creating the user' });
    });
}


// Update a player or staff first_name, last_name, phone, and/or email.
exports.updateMember = (req, res) => {
    const memberID = parseInt(req.params.id);
    memberModel.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email,
        staff: req.body.staff
    }, {
        where: {
            id: memberID,
        }
    }).then(function (member) {
        res.status(200).json({
            message: "User has been updated successfully"
        });
    }).catch(function (err) {
        // console.log(err);
        res.status(500).json({ Error: 'Sorry, there was an error creating the user' });
    });
}


// Delete/Remove a player/staff
exports.deleteMember = (req, res) => {
    const memberID = parseInt(req.params.id);
    memberModel.destroy({
        where: {
            id: memberID,
        }
    }).then(function (member) {
        res.status(200).json({
            message: "User has been successfully deleted"
        });
    }).catch(function (err) {
        // console.log(err);
        res.status(500).json({ Error: 'Sorry, there was an error deleting the user' });
    });
}

