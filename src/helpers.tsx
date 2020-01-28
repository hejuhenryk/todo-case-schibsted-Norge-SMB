import { v4 as uuid } from "uuid";
import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faSave,
  faWindowClose,
  faEdit,
  faTrashAlt, 
  faHome
} from "@fortawesome/free-solid-svg-icons";

export const icon = {
  add : <FontAwesomeIcon icon={faPlusCircle} />,
  save : <FontAwesomeIcon icon={faSave} />,
  cancel : <FontAwesomeIcon icon={faWindowClose} />,
  edit : <FontAwesomeIcon icon={faEdit} />,
  del : <FontAwesomeIcon icon={faTrashAlt} />,
  home : <FontAwesomeIcon icon={faHome} />
}

export const getId = () => uuid();

export const titleValidation = (title: string) => {
  if (!title.length) {
      return "Cannot be empty"
  }
  return null
}

