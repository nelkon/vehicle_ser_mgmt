const express = require('express');
var dbConn = require('../data_access/db.config');

var Branch = (branch) => {

    
    this.service_branch_id       = branch.service_branch_id;
    this.branch_name             = branch.branch_name;     
    this.branch_location         = branch.branch_location;
    this.txn_created_by          = branch.txn_created_by;   
    this.txn_created_dt          = branch.txn_created_dt;
    this.txn_created_from        = branch.txn_created_from;
    this.txn_last_updated_by     = branch.txn_last_updated_by;
    this.txn_last_updated_dt     = branch.txn_last_updated_dt;
    this.txn_last_updated_from   = branch.txn_last_updated_from;
    this.txn_status_id           = branch.txn_status_id;
}

//get all branches

Branch.getAllBranches = (result) =>{
    dbConn.query('SELECT * FROM service_branch', (err,res) =>{
        if(err){
            console.log('Error while fetch',err);
            result(null, err);
        }else{
            console.log('Branches fetched Successfully');
            result(null, res);
        }
    })
}

Branch.createNewBranch = (branchReqData, result) => {
    dbConn.query('INSERT INTO service_branch SET ?' , branchReqData,(err, res) => {
        if(err){
            console.log('Error while inserting', err);
            result(null, err);
        } else {
            console.log('branch inserted successfully');
            result(null, res);
        }
    });
}

module.exports = Branch;