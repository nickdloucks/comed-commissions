import { express } from "express";

let app = express();

app.get('/views/admin-dash.html', (req, res)=>{
    res.send('/views/admin-login.html');
});
    // middleware with authentication
    // this is where admin will set commissions parameters
    // admin will need a username and password, maybe even 2FA if I can figure out how to implement it