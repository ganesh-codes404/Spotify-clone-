import jwt from "jsonwebtoken";
import  express  from "express";

const app = express();
app.use(express.json());

    app.post('/login', (req, res, next) => {
        const name=req.body.name;
        jwt.sign(name,"freaky",(err,token)=>{
            if (err) {console.log(err)}
            res.send(token);
        });
    })
    const checkToken = (req, res, next) => {
        const header = req.headers['authorization'];
    
        if(typeof header !== 'undefined') {
            const bearer = header.split(' ');
            const token = bearer[1];
    
            req.token = token;
            next();
        } else {
            res.sendStatus(403)
        }
    }
    app.get('/posts', checkToken, (req, res) => {
        jwt.verify(req.token, 'freaky', (err, authorizedData) => {
            if(err){
                console.log('ERROR: Could not connect to the protected route');
                res.sendStatus(403);
            } else {
                res.json({
                    message: `welcome ${authorizedData}`,
                });
                console.log('SUCCESS: Connected to protected route');
            }
        })
    });




app.listen(4000)