const URL = "http://localhost:3000/todos";

const addTodo = (newTodo) => {
  // post
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const removeTodo = (id) => {
  return fetch(URL + `/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

const editTodo = (id, title, isEdit, completed) => {
  return fetch(URL + `/${id}`,{
    method: "PATCH",
    body: JSON.stringify({title, isEdit, completed}),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const getTodos = () => {
  return fetch(URL).then((res) => res.json());
};

// we have bundler to help
export { addTodo, removeTodo, getTodos, editTodo };