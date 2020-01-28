import React, { useState } from "react";
import { Link } from "react-router-dom";
import { icon, titleValidation } from "./helpers";
import { List } from "./AppContainer";
import { TitleForm } from "./TitleForm";
import { ListViewStyled, ListTitleStyled } from "./Lists.styled";

type ListsViewProps = {
  lists: List[];
  addList: (title: string) => void;
  removeList: (listId: string) => void;
  editList: (list: List) => void;
};
export const ListsView: React.FC<ListsViewProps> = p => (
  <>
    <h2 style={{ textAlign: "center" }}>Add List</h2>
    <AddList addList={p.addList} />
    <h2 style={{ textAlign: "center" }}>
      {p.lists.length
        ? "Your current todo lists"
        : "You do not have any todo lists"}
    </h2>
    <Lists lists={p.lists} removeList={p.removeList} editList={p.editList} />
  </>
);

type AddListProps = Pick<ListsViewProps, "addList">;
const AddList: React.FC<AddListProps> = p => (
  <TitleForm
    onSubmit={p.addList}
    placeHolder="Name your todo list"
    titleValidation={titleValidation}
    submitText={icon.add}
    label="New list"
  />
);

type ListsProps = Omit<ListsViewProps, "addList">;
const Lists: React.FC<ListsProps> = p => (
  <>
    {p.lists.map(l => (
      <div key={l.id}>
        <ListView list={l} removeList={p.removeList} editList={p.editList} />
      </div>
    ))}
  </>
);

type ListViewProps = Omit<ListsViewProps, "addList" | "lists"> & { list: List };
const ListView: React.FC<ListViewProps> = ({ list, ...p }) => {
  const [isEditing, setIsEditing] = useState(false);
  const updateTitle = (title: string) => {
    setIsEditing(false);
    p.editList({ ...list, title });
  };

  let listView = (
    <ListTitleStyled isEditing={isEditing}>
      <Link to={`/${list.id}`}>
        <h2>{list.title}</h2>
      </Link>
      <div>
        <button onClick={() => setIsEditing(!isEditing)}>{icon.edit}</button>
        <button onClick={() => p.removeList(list.id)}>{icon.del}</button>
      </div>
    </ListTitleStyled>
  );
  if (isEditing) {
    listView = (
      <>
        <TitleForm
          initialValue={list.title}
          onSubmit={updateTitle}
          titleValidation={titleValidation}
          label="Edit list name"
          submitText={icon.save}
        />
        <button className="cancelBtn" onClick={() => setIsEditing(false)}>
          {icon.cancel}
        </button>
      </>
    );
  }

  return <ListViewStyled>{listView}</ListViewStyled>;
};
