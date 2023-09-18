import Select from "./select-plugin/select.mjs";
const select = new Select("#select", {
  placeholder: "Выберите элемент...",
  data: [
    {id:1, value: 'js'},
    {id:2, value: 'html'},
    {id:3, value: 'css'},
    {id:4, value: 'python'},
    {id:5, value: 'php'},
  ]
});
