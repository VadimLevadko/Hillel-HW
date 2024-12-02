'use strict';

import TaskQueue from './classes/TaskQueue.js';

(function () {
  const queue = new TaskQueue(1000);

  queue.addTask(() => Promise.resolve('Task 1 виконано'));
  queue.addTask(() => Promise.resolve('Task 2 виконано'));
  queue.addTask('just test for function');
  queue.addTask(() => Promise.resolve('Task 3 виконано'));

  queue.run().then((message) => {
    console.log(message);
  });

  setTimeout(() => {
    queue.run();
  }, 2000);

  setTimeout(() => {
    queue.run().then((message) => {
      console.log(message);
    });
  }, 5000);
}());
