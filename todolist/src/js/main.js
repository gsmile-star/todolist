let list = [
  {
    id: 1,
    name: "Replicar el eje del profe",
    done: true,
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
