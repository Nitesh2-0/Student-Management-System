const express = require('express'); 
const path = require('path'); 
const app = express(); 
const PORT = 8080; 
const User = require('./db');
const Admin = require('./models/admin')
const session = require('express-session');


app.listen(PORT,()=>{
  console.log(`Server is Running at Port No ::${PORT}`)
})

app.use(express.json()); 
app.use(express.static(path.join(__dirname,'public'))); 
app.use(express.urlencoded({extended:true})); 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

// Configure session middleware
app.use(session({
  secret: 'Hurra',
  resave: false,
  saveUninitialized: true
}));


app.get('/',(req,res,next) =>{ 
  res.render('studentFeed')
})

app.get('/login',(req,res) =>{
  res.render('login');
})

app.get('/register', (req,res) => {
  res.render('register')
})

/** Register Route Start Here  */
app.post('/register', async (req, res, next) => {
  try {
      let { name, email, phoneNumber, password, isAdmin,idNumber} = req.body;
      isAdmin = isAdmin === 'on';
      let isNumberValid = idNumber.startsWith("@TIT85");

      if (isAdmin && isNumberValid) {
          let admin = await Admin.create({
              name,
              email,
              mob: phoneNumber,
              password,
              adminId:idNumber
          });
          
          req.session.idNumber = idNumber;
          res.redirect('/adminFeed');
      } else {
        let user = await User.create({
          name,
          email,
          mob: phoneNumber,
          password,
          college:"Technocrats Institue of Technology Bhopal MP",
          passingYear:"2025",
          course:"BTech"
        });
        res.redirect("/");    
      }
      
  } catch (err) {
      console.log("An error occurred:", err);
      res.status(500).send("An error occurred. Please try again later.");
  }
});
/** Register Route End Here */

/** AdminFeed page Start */
app.get('/adminFeed', async (req, res) => {
  try {
    const adminId = req.session.idNumber;
    // console.log(adminId);

    if (!adminId) {
      return res.redirect('/register'); 
    }

    const admin = await Admin.find({ adminId: adminId });

    if (!admin) {
      return res.redirect('/register'); 
    }

    const users = await User.find({});

    res.render('adminFeed', { title: 'Feed Page', admin, users });
  } catch (err) {
    console.error(err); 
    res.status(err.statusCode || 500).send(err.message || 'Internal Server Error');
  }
});
/** AdminFeed page End */

/** Admin can add Student Here Start */
app.get('/newStudent',(req,res) =>{
  res.render('student');
})
/** Admin can add Student Here End */

/** Admin can create Student Here Start */
app.post('/newStudent/created', async (req, res) => {
  const { name, email, mobile, password, passingYear, college,course} = req.body;
  try {
      const newUser = await User.create({
          name: name,
          email: email,
          mob: mobile,
          password: password,
          college: college,
          passingYear: passingYear,
          course : course
      });
      res.redirect('/adminFeed');
  } catch (err) {
      console.error(err);
      res.status(500).send("Error creating new user");
  }
});
/** Admin can create Student Here End */

/** Admin can delete Student Here End */
app.get('/delete/:id', async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.redirect("/adminFeed");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting user");
  }
});
/** Admin can delete Student Here End */

/** Admin can edit Student profile Here start */
app.get('/edit/:id', async (req,res) =>{
  let userDetails = await User.findOne({_id:req.params.id});
  res.render('edit',{userDetails});
})
/** Admin can edit Student profile Here End */

/** Admin profile Start*/
app.post('/update/:id', async(req, res) =>{
  let {id} = req.params;
  let {name,email,mobile,password} = req.body; 
  let userUpdate = await User.findOneAndUpdate({name,email,mob:"+91 " + mobile,password}); 
  res.redirect('/adminFeed');
})
/** Admin profile End */

app.get('/student-details/:id', async (req, res) => {
  try {
      const userDets = await User.findById(req.params.id);
      if (!userDets) {
          res.send('this use does not exist')
      }
      res.render('userDets',{userDets,isAdmin:"YES"});
  } catch (error) {
      console.error('Error:', error.message);
  }
});

/** Addmin Details Here */
app.get('/adminFeed/admin',async (req,res) =>{

  let id = req.session.idNumber; 
  let isAdmin = "YES";

  let adminData = await Admin.find({adminId:id});
  console.log(id);

  res.render('adminDets',{title:"Admin",adminData})
})
/** Addmin Details End Here*/