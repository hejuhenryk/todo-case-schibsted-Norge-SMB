import React, { useState } from "react";
import { getId } from './helpers'
import { FormStyled } from './TitleForm.styled'

type TitleFormProps = {
    onSubmit: (title: string) => void;
    submitText: string | JSX.Element;
    initialValue?: string;
    placeHolder?: string;
    label?: string;
    titleValidation: (title: string) => string | null
  };
  
  export const TitleForm: React.FC<TitleFormProps> = p => {
    const [title, setTitle] = useState(p.initialValue || "");
    const [error, setError] = useState<string | null>("");
    const [isTouched, setIsTouched] = useState(false);
    const formId = getId();
    const trySubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
          setIsTouched(true)
          const nextError = p.titleValidation(title)
          setError(nextError)
          if (nextError) return
          p.onSubmit(title)
      setTitle("");
      setIsTouched(false);
    };
  
    const onChange = (e: any) => {
      setTitle(e.target.value);
      if (isTouched) setError(p.titleValidation(title));
    };
  
    return (
      <FormStyled onSubmit={trySubmit}>
        <label htmlFor={formId}>{p.label}</label>
        <input
          value={title}
          placeholder={p.placeHolder}
          onChange={onChange}
          id={formId}
        />
        {error && <p>{error}</p>}
        <button>{p.submitText}</button>
      </FormStyled>
    );
  };
  
  