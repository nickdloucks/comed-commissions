import 'dotenv/config';
import express from "express";

const adminRouter = express.Router();

const USERS = [ process.env.ADMIN_USER1 ];
const PASSWORDS = [ process.env.ADMIN_USER1_PASSWORD ];

let app = express();

adminRouter.get('/views/admin-dash.html', (req, res)=>{
    let credentials = req.params;
    if(USERS.includes(credentials.user) && (PASSWORDS[USERS.indexOf(credentials.user)] === credentials.password)){
        res.send('/views/admin-dash.html');
    }else{
        res.send('/views/admin-login.html');
    }
    // Be sure not to cause an infinite loop of redirection... 
    // need to find a way to block unauthorized access to the url besides just omitting a link in the homepage?
});
    // middleware with authentication
    // this is where admin will set commissions parameters
    // admin will need a username and password, maybe even 2FA if I can figure out how to implement it

export default adminRouter;