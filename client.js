import Component from "./component";
import { patch } from "./framework";

const initialData = window.__INITIAL_DATA__;
const newVNode = Component(initialData);
const oldVNode = document.querySelector("#app");

patch(oldVNode, newVNode);
console.log(
  "Hello world from the client side js bundle. It just hydrated the root to add event listeners and make the app interactive!"
);
