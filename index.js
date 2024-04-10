const express = require('express'); 
const path = require('path'); 
const app = express(); 
const PORT = 8080; 
const User = require('./db');

app.listen(PORT,()=>{
  console.log(`Server is Running at Port No ::${PORT}`)
})

app.use(express.json()); 
app.use(express.static(path.join(__dirname,'public'))); 
app.use(express.urlencoded({extended:true})); 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.get('/', async (req,res) => {
  try{
    const users = await User.find({});
     res.render('index',{title:'Feed Page', text:"Hello i'm from backend.",users});
  }catch(err){
    console.error(err);
    console.log(err);
  }
})

app.get('/newUser',(req,res) =>{
  res.render('register');
})

app.post('/newUser/created', async (req,res)=>{
  const {name,email,mobile,password,gradYear,college} = req.body; 
  try{
    const newuser = User.create({name:name,email:email,mob:mobile,password:password,college:college,passingYear:gradYear});
    res.redirect('/');
  } catch(err){
    console.error(err);
    res.status(500).send("Error deleting user");
  }
})

app.get('/delete/:id', async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting user");
  }
});

app.get('/edit/:id', async (req,res) =>{
  let userDetails = await User.findOne({_id:req.params.id});
  res.render('edit',{userDetails});
})

app.post('/update/:id', async(req, res) =>{
  let {id} = req.params;
  let {name,email,mobile,password} = req.body; 
  let userUpdate = await User.findOneAndUpdate({name,email,mob:mobile,password}); 
  res.redirect('/');
})

app.get('/user-details/:id', async (req, res) => {
  try {
      const userDets = await User.findById(req.params.id);
      if (!userDets) {
          res.send('this use does not exist')
      }
      res.render('userDets',{userDets});
  } catch (error) {
      console.error('Error:', error.message);
  }
});
