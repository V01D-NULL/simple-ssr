import { h } from "snabbdom";

function Component(data) {
  return h("div", [
    h("h1", "Hello, Snabbdom!"),
    h("p", `Data: ${data}`),
    h("button", { on: { click: () => alert("Clicked!") } }, "Click me"),
  ]);
}

export default Component;
