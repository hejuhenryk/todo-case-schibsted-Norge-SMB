import { v4 } from "uuid";
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

export const getId = () => v4();



