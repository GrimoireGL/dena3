import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import TextureComponent from "grimoirejs-fundamental/ref/Components/TextureComponent";

export default class WebcamTextureComponent extends Component {

  public static componentName: string = "WebcamTexture";

  public static attributes: { [key: string]: IAttributeDeclaration } = {
    // Specify the attributes user can intaract
  };

  public $mount() {
    let textureComponent = this.node.getComponent(TextureComponent);
    navigator.getUserMedia({ video: true, audio: false }, (localMediaStream) => {
      let video = document.createElement('video');
      video.addEventListener('canplay', () => {
        video.play();
        setInterval(() => {
          textureComponent.texture.update(video);
        }, 100);
      }, true);
      video.src = window.URL.createObjectURL(localMediaStream);
    }, () => { });
  }
}
