const express = require('express')

const db = require('../db/todos')

const router = express.Router()

// Get all tasks
router.get('/', (req, res) => {
  db.getTasks()
    .then(tasks =>{
      res.json(tasks)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

// Add task 
router.post('/', (req,res)=>{
  const newTask = req.body
  db.addTask(newTask)
  .then(id=>{
    newTask.id=id[0]
    res.json(newTask)
  })
  .catch((err)=>{
    console.log(err)
    res.status(500).json({message:'something went wrong'})
  })
})

// Delete Task 
router.delete('/:id', (req, res)=>{
  const id = req.params.id
  db.deleteTask(id)
  .then(task => {
    res.json({task})
  })
  .catch ((err)=>{
    console.log(err)
    res.status(500).json({message:'something whent wrong'})
  })
})


// Update Task 

module.exports = router
