import 'dotenv/config';
import express from "express";

const USERS = [ process.env.ADMIN_USER1 ];
const PASSWORDS = [ process.env.ADMIN_USER1_PASSWORD ];

let app = express();

app.get('/views/admin-dash.html', (req, res)=>{
    res.send('/views/admin-login.html'); // this may cause an infinite loop of redirection... 
    // need to find a way to block unauthorized access to the url besides just omitting a link in the homepage?
});
    // middleware with authentication
    // this is where admin will set commissions parameters
    // admin will need a username and password, maybe even 2FA if I can figure out how to implement it