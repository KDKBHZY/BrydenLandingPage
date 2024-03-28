import React  ,{ useRef }from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "../index.css";
import { json } from "../data/json.js";
import { ReactElementFactory } from "survey-react-ui";
import emailjs from '@emailjs/browser';
import {themeJson} from "../theme.js";

class ItemTemplateComponent extends React.Component  {
    getImageUrl(brand) {
        return ("https://www.carlogos.org/car-logos/" + brand.toLowerCase().split(' ').join('-') + "-logo.png");
    }
    render() {
        const item = this.props.item;
        const logoUrl = this.getImageUrl(item.title);

        return (
            <div className="my-list-item"
                    style={{ display: "flex" }}>
                <img className="list-item_image" src={logoUrl} alt="Logo" />
                <span className="list-item_text">{item.title}</span>
            </div>
        );
    }
}
ReactElementFactory.Instance.registerElement(
  "new-item",
  (props) => {
    return React.createElement(ItemTemplateComponent, props);
  }
);


export const Header = (props) => {
  const survey = new Model(json);
  survey.applyTheme({
    "backgroundImage": "",
    "backgroundImageFit": "cover",
    "backgroundImageAttachment": "scroll",
    "backgroundOpacity": 1,
    "themeName": "threedimensional",
    "colorPalette": "light",
    "isPanelless": false,
    "cssVariables": {
        "--sjs-general-backcolor": "rgba(248, 248, 248, 1)",
        "--sjs-general-backcolor-dark": "rgba(242, 242, 242, 1)",
        "--sjs-general-backcolor-dim": "#fafafa",
        "--sjs-general-backcolor-dim-light": "rgba(255, 255, 255, 1)",
        "--sjs-general-backcolor-dim-dark": "rgba(242, 242, 242, 1)",
        "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
        "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
        "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
        "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
        "--sjs-primary-backcolor": "rgba(242, 36, 13, 1)",
        "--sjs-primary-backcolor-light": "rgba(242, 36, 13, 1)",
        "--sjs-primary-backcolor-dark": "rgba(-23, -23, -23, 1)",
        "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
        "--sjs-base-unit": "8px",
        "--sjs-corner-radius": "4px",
        "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
        "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
        "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
        "--sjs-secondary-forecolor": "rgba(230, 6,6, 1)",
        "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
        "--sjs-shadow-small": "1px 1px 0px 2px rgba(0, 0, 0, 1)",
        "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 1)",
        "--sjs-shadow-medium": "0px 0px 0px 2px rgba(228, 228, 228, 1),0px 8px 0px 2px rgba(228, 228, 228, 1)",
        "--sjs-shadow-large": "0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
        "--sjs-shadow-inner": "0px 0px 0px 2px rgba(228, 228, 228, 1),0px -2px 0px 2px rgba(228, 228, 228, 1)",
        "--sjs-shadow-inner-reset": "0px 0px 0px 0px rgba(228, 228, 228, 1),0px 0px 0px 0px rgba(228, 228, 228, 1)",
        "--sjs-border-light": "rgba(0, 0, 0, 0.08)",
        "--sjs-border-default": "rgba(0, 0, 0, 0.08)",
        "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
        "--sjs-special-red": "rgba(229, 10, 62, 1)",
        "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
        "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-special-green": "rgba(25, 179, 148, 1)",
        "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
        "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-special-blue": "rgba(67, 127, 217, 1)",
        "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
        "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
        "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
        "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
        "--sjs-article-font-xx-large-textDecoration": "none",
        "--sjs-article-font-xx-large-fontWeight": "700",
        "--sjs-article-font-xx-large-fontStyle": "normal",
        "--sjs-article-font-xx-large-fontStretch": "normal",
        "--sjs-article-font-xx-large-letterSpacing": "0",
        "--sjs-article-font-xx-large-lineHeight": "64px",
        "--sjs-article-font-xx-large-paragraphIndent": "0px",
        "--sjs-article-font-xx-large-textCase": "none",
        "--sjs-article-font-x-large-textDecoration": "none",
        "--sjs-article-font-x-large-fontWeight": "700",
        "--sjs-article-font-x-large-fontStyle": "normal",
        "--sjs-article-font-x-large-fontStretch": "normal",
        "--sjs-article-font-x-large-letterSpacing": "0",
        "--sjs-article-font-x-large-lineHeight": "56px",
        "--sjs-article-font-x-large-paragraphIndent": "0px",
        "--sjs-article-font-x-large-textCase": "none",
        "--sjs-article-font-large-textDecoration": "none",
        "--sjs-article-font-large-fontWeight": "700",
        "--sjs-article-font-large-fontStyle": "normal",
        "--sjs-article-font-large-fontStretch": "normal",
        "--sjs-article-font-large-letterSpacing": "0",
        "--sjs-article-font-large-lineHeight": "40px",
        "--sjs-article-font-large-paragraphIndent": "0px",
        "--sjs-article-font-large-textCase": "none",
        "--sjs-article-font-medium-textDecoration": "none",
        "--sjs-article-font-medium-fontWeight": "700",
        "--sjs-article-font-medium-fontStyle": "normal",
        "--sjs-article-font-medium-fontStretch": "normal",
        "--sjs-article-font-medium-letterSpacing": "0",
        "--sjs-article-font-medium-lineHeight": "32px",
        "--sjs-article-font-medium-paragraphIndent": "0px",
        "--sjs-article-font-medium-textCase": "none",
        "--sjs-article-font-default-textDecoration": "none",
        "--sjs-article-font-default-fontWeight": "400",
        "--sjs-article-font-default-fontStyle": "normal",
        "--sjs-article-font-default-fontStretch": "normal",
        "--sjs-article-font-default-letterSpacing": "0",
        "--sjs-article-font-default-lineHeight": "28px",
        "--sjs-article-font-default-paragraphIndent": "0px",
        "--sjs-article-font-default-textCase": "none",
        "--sjs-question-background": "rgba(255, 255, 255, 1)",
        "--sjs-questionpanel-hovercolor": "rgba(242, 36, 13, 1)",
        "--sjs-questionpanel-cornerRadius": "35px",
        "--sjs-font-questiontitle-family": "Arial, sans-serif",
        "--sjs-font-questiontitle-color": "rgba(0, 0, 0, 1)",
        "--sjs-font-questiontitle-size": "20px",
        "--sjs-font-questiondescription-family": "Arial, sans-serif",
        "--sjs-font-questiondescription-color": "rgba(0, 0, 0, 1)",
        "--sjs-editor-background": "rgba(255, 255, 255, 1)",
        "--sjs-editorpanel-hovercolor": "rgba(242, 36, 13, 1)",
        "--sjs-font-editorfont-family": "Arial, sans-serif",
        "--sjs-font-editorfont-color": "rgba(0, 0, 0, 1)",
        "--sjs-font-editorfont-placeholdercolor": "rgba(0, 0, 0, 1)",
        "--sjs-font-editorfont-size": "20px"
    }
}
    
);

  survey.onComplete.add((sender, options) => {      
       emailjs
      .send('service_a4daqto', 'template_cfiywuw', sender.data, {
        publicKey: 'fmYRtusEdfoNcufUL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log(sender.data);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  });
  return (<Survey model={survey} />);
};