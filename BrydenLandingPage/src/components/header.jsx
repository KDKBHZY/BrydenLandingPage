import React  ,{ useRef }from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "../index.css";
import { themeJson } from "../theme.js";
import { json } from "../data/json.js";
import { ReactElementFactory } from "survey-react-ui";
import emailjs from '@emailjs/browser';

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
  survey.applyTheme(themeJson);

  survey.onComplete.add((sender, options) => {
      console.log(sender.data);
      
       emailjs
      .send('service_a4daqto', 'template_cfiywuw', sender.data, {
        publicKey: 'fmYRtusEdfoNcufUL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  });
  return (<Survey model={survey} />);
};