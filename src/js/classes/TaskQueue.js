import { delay } from '../commonFunc.js';

export default class TaskQueue {
  delayMs = 1000;

  tasks = [];

  constructor(delayMs) {
    this.delayMs = delayMs;
    this.isRunning = false;
  }

  addTask(task) {
    if (typeof task !== 'function') return console.warn('Task must be a function');
    this.tasks.push(task);
  }

  run() {
    if (this.isRunning) return console.error('You can\'t run a task while another one is running');
    this.isRunning = true;

    const executeTasks = (tasks) => {
      if (tasks.length === 0) {
        this.isRunning = false;
        return Promise.resolve('Усі завдання завершено');
      }

      const [currentTask, ...remainingTasks] = tasks;

      return currentTask()
        .then((result) => {
          console.log(result);
          return delay(this.delayMs);
        })
        .then(() => executeTasks(remainingTasks));
    };

    return executeTasks(this.tasks);
  }
}
