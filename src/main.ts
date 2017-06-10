import gr from "grimoirejs";
import Rotate from "./Components/RotateComponent";

export default () => {
  gr.register(async () => {
    gr.registerComponent("Rotate", Rotate);
  });
};
