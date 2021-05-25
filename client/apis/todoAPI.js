import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllTasksAPI () {
  return request
  .get(rootUrl + '/todo/')
    .then(res => res.body)
}

export function addTaskAPI(){
  return request
  .post(rootUrl + '/todo/')
  .send(newTask)
  .then (res => res.body)
}

export function deleteTaskAPI(id){
  return request
  .delete('/api/v1/todo/' + id)
  .then (res => res.body)
}
