/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello");
};

let generateExcuse = () => {
  let pronoun = ["Mi", "El", "Tu"];
  let subject = ["perro", "Vecino", "amigo", "gato"];
  let action = [
    "mordio mi",
    "rasguño mi",
    "rompio mi",
    "tiro mi",
    "orino mi",
    "robo mi",
    "daño mi",
    "tomo mi"
  ];
  let posetion = ["tarea", "carro", "zapato", "ropa", "cuaderno", "laptop"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let posetionIndex = Math.floor(Math.random() * posetion.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    posetion[posetionIndex]
  );
};
