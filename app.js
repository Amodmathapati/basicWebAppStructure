require('dotenv').config();

const express = require('express');  //require means importing...

const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db')
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const app = express();
const port = 5000 || process.env.PORT;

app.use(session({
    secret: 'keyboard cat',
    resave:false,
    saveUninitialized:true,
    store: MongoStore.create({
        mongoUrl:process.env.mongodb_URI
    })
}));

app.use(passport.initialize());
// app.use(passport.session());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

connectDB();


//static fies
app.use(express.static('public'));

//template engine 

app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

//routes
app.use('/',require('./server/routes/auth'));
app.use('/',require('./server/routes/index'));
app.use('/',require('./server/routes/dashboard'));


app.get('*',function(req,res){
    res.status(404).render('error_message');
})

app.listen(port,() => {
    console.log('App listening on port 5000');

})