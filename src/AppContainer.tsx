import React from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { ListsView } from "./Lists";
import { ListView } from "./List";
import { usePersistentState } from "./usePersistentState";
import { getId } from "./helpers";
import { Toolbar } from "./Toolbar";
import styled from "styled-components";

// types
export type Todo = {
  title: string;
  id: string;
  isDone?: boolean;
};

export type List = {
  title: string;
  id: string;
  todosIds: string[];
};

type Store = {
  lists: List[];
  todos: Todo[];
};

// style

const SectionStyled = styled.section`
  width: 68%;
  margin: 0 auto;
  /* transition: all .5s ease-in-out; */
  @media (max-width: 450px) {
    width: 90%;
  }
`

// app

export const AppContainer: React.FC = () => {
  const [store, setStore] = usePersistentState("schibstad-1.0", mockedStore);

  const addList = (title: string) => {
    const list: List = { title, id: getId(), todosIds: [] };
    const nextStore: Store = { ...store, lists: [...store.lists, list] };
    setStore(nextStore);
  };

  const removeList = (listId: string) => {
    const todosIdsToRemove = store.lists.find(l => l.id === listId)?.todosIds;
    let todos = [...store.todos];
    if (todosIdsToRemove) {
      todos = todos.filter(t => !todosIdsToRemove.includes(t.id));
    }
    const lists = store.lists.filter(l => l.id !== listId);
    setStore({ todos, lists });
  };
  const editList = (list: List) => {
    const lists = store.lists.map(l => (l.id === list.id ? list : l));
    setStore({ ...store, lists });
  };

  const updateTodo = (todo: Todo) => {
    const todos = store.todos.map(t => (t.id === todo.id ? todo : t));
    const updatedStore: Store = { ...store, todos };
    setStore(updatedStore);
  };

  const addTodo = (listId: string) => (title: string) => {
    const todo: Todo = { title, id: getId(), isDone: false };
    const todos: Todo[] = [...store.todos, todo];
    const list = store.lists.find(l => l.id === listId);
    if (!list) return;
    const newList: List = { ...list, todosIds: [...list.todosIds, todo.id] };
    const updatedStore: Store = {
      todos,
      lists: store.lists.map(l => (l.id === listId ? newList : l))
    };
    setStore(updatedStore);
  };

  const removeTodo = (listId: string) => (todoId: string) => {
    const todos: Todo[] = [...store.todos];
    todos.filter(t => t.id !== todoId);
    const list = store.lists.find(l => l.id === listId);
    if (!list) return;
    const newList: List = {
      ...list,
      todosIds: list.todosIds.filter(i => i !== todoId)
    };
    const updatedStore: Store = {
      todos,
      lists: store.lists.map(l => (l.id === listId ? newList : l))
    };
    setStore(updatedStore);
  };

  return (
    <>
      <Toolbar lists={store.lists}/>
      <SectionStyled>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <ListsView
              lists={store.lists}
              addList={addList}
              removeList={removeList}
              editList={editList}
            />
          )}
        />
        {store.lists.map(l => (
          <Route
            key={l.id}
            path={`/${l.id}`}
            render={() => (
              <ListView
                list={l}
                todos={store.todos.filter(t => l.todosIds.includes(t.id))}
                addTodo={addTodo(l.id)}
                removeTodo={removeTodo(l.id)}
                updateTodo={updateTodo}
              />
            )}
          />
        ))}
        <Redirect to="/" />
      </Switch>
      </SectionStyled>
    </>
  );
};

export default withRouter(AppContainer);


const mockedStore: Store = {
  lists: [
    {
      id: "schibstad-1.0_base",
      title: "React Code Test",
      todosIds: ["iid-0", "iid-1", "iid-2", "iid-3", "iid-4", "iid-5"]
    },
    {
      id: "mySpecialWishes",
      title: "Min",
      todosIds: ["jid-0", "jid-1", "jid-2", "jid-3"]
    }
  ],
  todos: [
    { id: "jid-0", title: "style med styled/components" },
    { id: "jid-1", title: "redigere todos og lister", isDone: true },
    { id: "jid-2", title: "del todos og lister", isDone: true },
    { id: "jid-3", title: "blir fardig før tirsdag" },
    {
      id: "iid-1",
      title: "Huske hvilke Todos som ligger i hvilken liste",
      isDone: true
    },
    { id: "iid-2", title: "Huske statusen til hver enkelt Todo", isDone: true },
    {
      id: "iid-3",
      title: "Oppretting av Todos i hver enkelt liste",
      isDone: true
    },
    {
      id: "iid-4",
      title: "Markere Todos som utført/ikke utført",
      isDone: true
    },
    {
      id: "iid-5",
      title: "Data skal fortsatt være tilgjengelig ved page refresh",
      isDone: true
    }
  ]
};