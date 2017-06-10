import gr from "grimoirejs";
import Rotate from "./Components/RotateComponent";
import TextureComponent from "grimoirejs-fundamental/ref/Components/TextureComponent";
import WebcamTexture from "./Components/WebcamTextureComponent";

export default () => {
  gr.register(async () => {
    gr.registerComponent("Rotate", Rotate);
    gr.registerComponent("WebcamTexture", WebcamTexture);
    gr.registerNode("webcam-texture", ["WebcamTexture"], {}, "texture");
  });
};
