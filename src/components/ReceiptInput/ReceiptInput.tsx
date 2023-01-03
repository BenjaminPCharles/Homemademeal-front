import React, { useState } from "react";
import styled from "styled-components";
import { useForm, useFieldArray } from "react-hook-form";

import LinkShow from "../LinkShow/LinkShow";
import Button from "../Button/Button";

const options = [
  { value: "", label: "unité" },
  { value: "cas", label: "cuillere à soupe" },
  { value: "cac", label: "cuillere à café" },
  { value: "ml", label: "mililitre" },
  { value: "cl", label: "centilitre" },
  { value: "g", label: "gramme" },
  { value: "kg", label: "kilogramme" },
];

const Warpper = styled.form`
  overflow: scroll;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 63vh;
  p {
    font-size: 1.3em;
  }
  p:not(:last-child) {
    color: #078080;
  }
  input {
    border: solid 3px #232323;
    border-radius: 25px;
    padding: 0.8em 6.1em 0.5em 1em;
    margin: 0.5em 0;
  }
  textarea {
    border: solid 3px #232323;
    border-radius: 25px;
    padding: 1.8em 6.1em 2.5em 1em;
    margin: 0.5em 0;
  }
  section {
    margin: 1em 0 1em 0;
    input {
      border: solid 3px #232323;
      border-radius: 25px;
      padding: 0.8em 6.1em 0.5em 1em;
      margin: 0.5em 0;
    }
    input[type="number"] {
      border: solid 3px #232323;
      border-radius: 25px;
      padding: 0.8em 0.5em 0.5em 0.5em;
      margin: 0.5em 0;
      width: 25vw;
    }
    select {
      border: solid 3px #232323;
      border-radius: 25px;
      padding: 0.8em 4em 0.5em 1em;
      margin: 0.5em 0;
      width: 40vw;
    }
  }
  span {
    color: #f45d48;
  }
`;

function ReceiptInput({ clicked, setClicked }: any | boolean) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const {
    fields: ingredientsFields,
    append: ingredientsAppend,
    remove: ingredientsRemove,
  } = useFieldArray({
    control,
    name: "ingredients", // unique name for your Field Array
  });

  const {
    fields: stepsFields,
    append: stepsAppend,
    remove: stepsRemove,
  } = useFieldArray({ control, name: "steps" });

  const [numberOfTextAera, setNumberOfTextAera] = useState(0);
  const [numberOfInput, setNumberOfInput] = useState(0);

  const handleClickStep = () => {
    setNumberOfTextAera(numberOfTextAera + 1);
  };

  const handleClickInput = () => {
    setNumberOfInput(numberOfInput + 1);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Warpper onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Titre de la recette"
        {...register("title", { required: true })}
      />
      {Array.from(Array(numberOfInput), (e, i) => {
        return (
          <section key={i}>
            <input
              type="text"
              placeholder={`Nom du ${i + 1} ingredient`}
              {...register(`ingredients.${i}.ingredientTitle`)}
            />
            <input
              type="number"
              placeholder={`${i + 1} ingredient`}
              {...register(`ingredients.${i}.ingredientNumber`)}
            />
            <select id="" {...register(`ingredients.${i}.ingredientUnity`)}>
              {options.map((option, i) => (
                <option
                  key={i}
                  value={option.value}
                >{`${option.label}`}</option>
              ))}
            </select>
          </section>
        );
      })}
      <p onClick={handleClickInput}>Ajouter un ingredient</p>
      {Array.from(Array(numberOfTextAera), (e, i) => {
        return (
          <textarea
            key={i}
            placeholder={`Etape numero ${i + 1}`}
            {...register(`steps.${i}.step${i + 1}`)}
          ></textarea>
        );
      })}
      <p onClick={handleClickStep}>Ajouter une étape</p>
      {errors.title && <span>Vous devez entrer un titre a votre recette</span>}
      <Button text={"Ajouter la recette"} />
      <LinkShow text={"Retour"} clicked={clicked} setClicked={setClicked} />
    </Warpper>
  );
}

export default React.memo(ReceiptInput);
