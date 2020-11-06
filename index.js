function newTask(title, description) {
  const task = {
  title: title,
  description: description,
  complete: false,

  completeTask: function() {
  task.complete = true;
  },

// Print the state of a task to the console in a nice readable way
  logState: function() {
    console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
  }
};
  return task;
}
// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logState(); // Clean Cat Litter has been completed

