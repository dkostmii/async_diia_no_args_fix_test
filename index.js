import Module from "./dist/optimized_jejalyk_node.js";
import fs from "fs";

global.mavka_compilation_options = {
  args: "",
  std_code: `
js """
var м_друк = мДія(function(values) {
  console.log(...values.map((v) => мГарно(v)));
});
"""

макет дія друк(...значення список<обʼєкт>) пусто
`,
  main_module_path: "",
  root_module_path: "",
  current_module_path: "",
  get_module_name: async (relative, module, options) => {
    return { error: "", result: "" };
  },
  // ...
};

Module().then(async (jejalyk) => {
  try {
    const content = fs.readFileSync("старт.м");
    const { result } = await jejalyk.compile(content);
    fs.writeFileSync("старт.node.js", result);
  } catch (e) {
    console.error("Помилка при читанні та компіляції тестового коду (старт.м)", e);
  }
});
