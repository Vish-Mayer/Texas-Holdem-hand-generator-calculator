import app from "./src/app.js";
let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});
