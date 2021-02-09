const express = require('express');
const router = express.Router();

const branchController = require('../controllers/branch.controller');


//get all branches
router.get('/', branchController.getBranches);

//create new branch
router.post('/', branchController.createNewBranch);



module.exports = router;
