
const BranchModel = require('./.././../business/branch.model')





exports.getBranches = (req, res) => {
    // console.log("here all branches ");
    BranchModel.getAllBranches((err, branches) =>{
        // console.log('here')
        if(err)
        res.send(err);
        // log.console('Branches',branches)
        res.send(branches)
    })
    
}

exports.createNewBranch = (req, res) => {
    const branchReqData =  BranchModel(req.body);
    console.log('branchReqData', branchReqData);

    //check null 
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'please fill all fields'});
    }
        else{

                    BranchModel.createNewBranch(branchReqData, (err, branch) => {
                    if(err)
                    res.send(err);
                    res.json({status : true, message: 'Branch Created Successfully', data: branch.insertId})

            })
            
        }
}