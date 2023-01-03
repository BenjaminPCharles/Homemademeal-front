import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import Button from "../Button/Button";
import LinkShow from "../LinkShow/LinkShow";

const options = [
  { value: "", label: "Choisiser une unité de mesure" },
  { value: "cas", label: "cuillere à soupe" },
  { value: "cac", label: "cuillere à café" },
  { value: "ml", label: "mililitre" },
  { value: "cl", label: "centilitre" },
  { value: "g", label: "gramme" },
  { value: "kg", label: "kilogramme" },
];

const Warpper = styled.form`
  width: 80vw;
  height: 50vh;
  background-color: #fff;
  border: solid 3px #232323;

  background: #f8f5f2;
  position: absolute;
  top: calc(50% - 180px);
  text-align: center;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  input {
    border: solid 3px #232323;
    border-radius: 25px;
    padding: 0.8em 6.1em 0.5em 1em;
    margin: 0.5em 0;
  }

  select {
    border: solid 3px #232323;
    border-radius: 25px;
    padding: 0.8em 4em 0.5em 1em;
    margin: 0.5em 0;
  }
`;

function AddIngredient({ clicked, setClicked }: any | boolean | string) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Warpper onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id=""
        placeholder="Nom de l'ingrédient"
        {...register("title", { required: true })}
      />
      <input
        type="number"
        id=""
        placeholder="Nombre/Poids de l'ingrédient"
        {...register("mesure", { required: true })}
      />
      <select id="" {...register("unity", { required: true })}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>{`${option.label}`}</option>
        ))}
      </select>
      <Button text={"Ajouter l'ingrédient"} />
      <LinkShow text={"Retour"} clicked={clicked} setClicked={setClicked} />
    </Warpper>
  );
}

export default React.memo(AddIngredient);
