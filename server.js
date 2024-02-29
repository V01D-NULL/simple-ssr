import express from "express";
import toHTML from "snabbdom-to-html";
import Component from "./component";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = "Initial Data";
  const vnode = Component(data);
  const html = toHTML(vnode);

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>SSR in less than 100 LoC</title>
      <script>window.__INITIAL_DATA__ = ${JSON.stringify(data)};</script>
      </head>
      <body>
      <div id="app">
        ${html}
      </div>
      <script src="dist/client.js"></script>
    </body>
    </html>
  `);
});

app.use(express.static("."));

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
