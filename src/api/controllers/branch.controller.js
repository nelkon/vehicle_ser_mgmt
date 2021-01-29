
const BranchModel = require('./.././../business/branch.model')





exports.getBranches = (req, res) => {
    // console.log("here all branches ");
    BranchModel.getAllBranches((err, branches) =>{
        console.log('here')
        if(err)
        res.send(err);
        // log.console('Branches',branches)
        res.send(branches)
    })
    
}