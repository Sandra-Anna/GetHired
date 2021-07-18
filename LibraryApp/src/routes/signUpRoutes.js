const express = require('express');
const signUpRouter = express.Router();
function router(nav){
    signUpRouter.get('/',function(req,res){
        res.render("signUp",{
            nav,
            title: 'Library',
        });
    });
    return signUpRouter;
};



module.exports = router;