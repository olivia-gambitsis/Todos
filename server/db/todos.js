const connection = require('./connection')

function getTasks (db = connection) {
  return db('todos').select()
}

function addTask (newTask, db = connection){
  return db('todos').insert(newTask)
}

function updateTask(id, updatedTask, db=connection){
  return db('todos').update(updatedTask).where('id', id)
}

function deleteTask(id, db=connection){
  return db('todos').where('id', id).delete()
}

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
}
