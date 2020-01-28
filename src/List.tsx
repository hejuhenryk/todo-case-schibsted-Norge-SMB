import React, { useState } from "react";
import { List, Todo } from "./AppContainer";
import { icon, titleValidation } from "./helpers";
import { TitleForm } from "./TitleForm";
import { TodoTitle, TodoViewStyled } from "./List.styled";

type ListViewProps = {
  list: List;
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
};

export const ListView: React.FC<ListViewProps> = p => (
  <>
    <AddTodo list={p.list} addTodo={p.addTodo} />
    <Todos
      todos={p.todos}
      updateTodo={p.updateTodo}
      removeTodo={p.removeTodo}
    />
  </>
);

type AddTodoProps = Pick<ListViewProps, "addTodo" | "list">;
const AddTodo: React.FC<AddTodoProps> = p => (
  <TitleForm
    onSubmit={p.addTodo}
    titleValidation={titleValidation}
    submitText={icon.add}
    label="Add todo"
  />
);

type TodosProps = Pick<ListViewProps, "todos" | "updateTodo" | "removeTodo">;
const Todos: React.FC<TodosProps> = p => (
  <>
    {p.todos.map(t => (
      <Todo
        key={t.id}
        todo={t}
        removeTodo={p.removeTodo}
        updateTodo={p.updateTodo}
      />
    ))}
  </>
);

type TodoProps = { todo: Todo } & Pick<
  ListViewProps,
  "updateTodo" | "removeTodo"
>;
const Todo: React.FC<TodoProps> = ({ todo, updateTodo, removeTodo }) => {
  const [isEdited, setIsEdited] = useState(false);
  const toggleDone = () => {
    updateTodo({ ...todo, isDone: !todo.isDone });
  };
  const updateTitle = (title: string) => {
    setIsEdited(false);
    updateTodo({ ...todo, title });
  };
  let todoView = (
    <>
      <TodoTitle isDone={todo.isDone}>
        <h2 onClick={toggleDone}>{todo.title}</h2>
        <div>
          <button onClick={() => setIsEdited(true)}>{icon.edit}</button>
          <button onClick={() => removeTodo(todo.id)}>{icon.del}</button>
        </div>
      </TodoTitle>
    </>
  );
  if (isEdited) {
    todoView = (
      <>
        <TitleForm
          initialValue={todo.title}
          onSubmit={updateTitle}
          titleValidation={titleValidation}
          label="Edit todo"
          submitText={icon.save}
        />
        <button className="cancelBtn" onClick={() => setIsEdited(false)}>
          {icon.cancel}
        </button>
      </>
    );
  }

  return <TodoViewStyled>{todoView}</TodoViewStyled>;
};
