const Joi=require('joi');
const express = require('express');
const app=express();

app.use(express.json())

const courses= [
     {id:1,name:'math'},
     {id:2,name:'cybersec'},
     {id:3,name:'software eng'},
]

app.get('/',(req,res)=>{

    res.send('hello world');


});


app.get('/api/courses',(req,res)=>{

res.send(courses)


});

app.get('/api/courses/:id',(req,res)=>{
 const course= courses.find(c=> c.id === parseInt(req.params.id))

 if(!course)  res.status(404).send('the cource not found');

    res.send(course)

});

app.post('/api/courses', (req, res) => {
  
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  const course={
    id: courses.length +1,
    name: req.body.name
  };

  courses.push(course);
  res.send(course);
});


app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course) {
    res.status(404).send('The course was not found');
    return;
  }

  const { error } = ValidateCourse(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  course.name = req.body.name;
  res.send(course);
});

app.delete('/api/courses/:id',(req,res)=>{
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course) {
    res.status(404).send('The course was not found');
    return;
  }

const index= courses.indexOf(course);
courses.splice(index,1);
res.send(course);

});

function ValidateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  return schema.validate(course);
}





const port=process.env.PORT || 3000
app.listen(port,()=> console.log(`server running on ${port}`));



