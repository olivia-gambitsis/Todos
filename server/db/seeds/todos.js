exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("todos").insert([
        { id: 1, task: "clean kitchen", priority: "low", completed: false },
        { id: 2, task: "study", priority: "medium", completed: false },
        { id: 3, task: "exercise", priority: "high", completed: false },
      ]);
    });
};
