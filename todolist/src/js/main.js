let list = [
  {
    id: 1,
    name: "Replicar el eje del profe",
    done: false,
  },
  {
    id: 2,
    name: "Replicar el eje del profe 2",
    done: false,
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
];

let done = [
  {
    id: 5,
    name: "XXXX",
    done: true,
  },
];

const listContainer = document.querySelector("#list-todo");
const listDoneContainer = document.querySelector("#list-done");

paintAll();

function createTask(task) {
  const input = document.querySelector("#inputTask");
  list.push({
    id: list.length + 1,
    name: input.value,
    done: false,
  });
  input.value = "";
  paintList(list);
}

const checkTask = (checkbox, id) => {
  const isChecked = checkbox.checked;
  const originList = isChecked ? list : done;
  const destinyList = isChecked ? done : list;

  const taskIndex = originList.findIndex((element) => {
    return element.id === id;
  });
  const task = originList.splice(taskIndex, 1)[0];
  destinyList.push(task);
  task.done = checkbox.checked;
  paintAll();
};

function paintAll() {
  paintTodo();
  paintDone();
}

function paintTodo() {
  paintList(list, listContainer);
}

function paintDone() {
  paintList(done, listDoneContainer);
}

function paintList(lst, domContainer) {
  let res = "";
  lst.forEach((element) => {
    res += renderListItem(element);
  });
  domContainer.innerHTML = res;
}

function renderListItem(item) {
  const isDone = item.done ? "is-done" : "";
  const checked = item.done ? "checked" : "";
  return `<li class="list-group-item list-item ${isDone}">
              <input type="checkbox" ${checked} aria-label="Checkbox for following text input" onclick="checkTask(this, ${item.id})"> ${item.name}
          </li>`;
}
  


const listContainer = document.querySelector("#list-content");

paintList(list);

function createTask(task) {
  const input = document.querySelector("#inputTask");
  list.push({
    id: list.length + 1,
    name: input.value,
    done: false,
  });
  input.value = "";
  paintList(list);
}

const checkTask = (checkbox, id) => {
  const task = list.find((element) => {
    return element.id === id;
  });
  task.done = checkbox.checked;
  paintList(list);
};

function paintList(lst) {
  let res = "";
  lst.forEach((element) => {
    res += renderListItem(element);
  });
  listContainer.innerHTML = res;
}

function renderListItem(item) {
  const isDone = item.done ? "is-done" : "";
  const checked = item.done ? "checked" : "";
  return `<li class="list-group-item list-item ${isDone}">
              <input type="checkbox" ${checked} aria-label="Checkbox for following text input" onclick="checkTask(this, ${item.id})"> ${item.name}
          </li>`;
}
