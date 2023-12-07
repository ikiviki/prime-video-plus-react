import { Helmet } from "react-helmet-async";
import { useEffect, useReducer, useRef } from "react";
import todoReducer from "../../reducers/todoReducer";

const TodosPage = () => {
  // Uncontrolled Component.
  // useRef if good for couple of components only.
  const todoInputRef = useRef();

  const [todoState, todoDispatch] = useReducer(todoReducer);
  // console.log(todoState); // Undefined initially.
  // console.log(todoDispatch); // A fn.

  useEffect(() => {
    // Loading the todos after initial rendering.
    todoDispatch({
      type: "LIST_TODOS",
    });
  }, []);

  const handleAddTodo = () => {
    const todoItem = {
      id: new Date().toISOString(),
      title: todoInputRef.current.value,
      isCompleted: false,
    };
    // console.log(todoItem); // Should be added into array of todos.

    // Dispatching an action to add Todo.
    todoDispatch({
      type: "ADD_TODO",
      payload: todoItem,
    });
  };

  return (
    <div>
      <Helmet>
        <title>Todos</title>
      </Helmet>

      <h1>Todos App | useRef and useReducer Hooks</h1>
      <input type="text" placeholder="Enter Todo" ref={todoInputRef} />
      <button onClick={handleAddTodo}>Add TODO</button>
      <hr />

      <div>
        <h2>Listing Todos</h2>
        {todoState?.length === 0 && (
          <div className="alert alert-warning">
            No Todos Found. You can add one.
          </div>
        )}

        <ul>
          {todoState?.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodosPage;
