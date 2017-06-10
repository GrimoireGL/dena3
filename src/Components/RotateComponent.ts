import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";

export default class RotateComponent extends Component {

  public static componentName: string = "Rotate";

  public static attributes: { [key: string]: IAttributeDeclaration } = {
    // Specify the attributes user can intaract
    speed: {
      converter: "Number",
      default: "1"
    }
  };

  private _rot = 0;

  public $update() {
    this._rot += this.getAttribute("speed");
    this.node.setAttribute("rotation", [0, this._rot, 0]);
  }
}
