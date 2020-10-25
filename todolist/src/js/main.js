let list = [
  {
    id: 1,
    name: "Replicar el eje del profe",
    done: false,
  },
  {
    id: 2,
    name: "Replicar el eje del profe 2",
    done: true,
  },
  {
    id: 3,
    name: "Replicar el eje del profe 3",
    done: false,
  },
  {
    id: 4,
    name: "Replicar el eje del profe 4",
    done: false,
  },
  {
    id: 5,
    name: "XXXX",
    done: false,
  },
];


window.addEventListener('load', function(){
  var app = new Vue({
    el: '#todo-app',
    data: {
      title: 'What do I need to do today!',
      list: list,
      newTaskName: ''
    },
    computed: {
      todoList(){
        return this.list.filter((task) => !task.done);
      },
      doneList(){
        return this.list.filter((task) => task.done);
      }
    },
    methods: {
      createTask(){
        this.list.push({
          id: list.length + 1,
          name: this.newTaskName,
          done: false,
        });
        this.newTaskName = ''
      }
    },
  })
});
