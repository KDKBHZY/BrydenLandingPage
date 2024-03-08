export const json = {

    "completedHtml": "<div style=\"max-width:688px;text-align:center;margin: 16px auto;\">\n\n<div style=\"padding:0 24px;\">\n<h4>Thank you for choosing us.</h4>\n<br>\n<p>Dear {firstname-for-complete-page}, we're thrilled to have you on board and excited to be a part of your upcoming journey. Your reservation is confirmed, and we can't wait to make your travel experience exceptional.</p>\n</div>\n\n</div>\n",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "imagepicker",
                    "name": "animals",
                    "title": "Which animals would you like to see in real life?",
                    "description": "Please select all that apply.",
                    "imageHeight": 250,
                    "imageWidth": 350,
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "lion",
                            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
                            "text": "Lion"
                        },
                        {
                            "value": "giraffe",
                            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
                            "text": "Giraffe"
                        },
                        {
                            "value": "red-panda",
                            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
                            "text": "Red panda"
                        },
                        {
                            "value": "camel",
                            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
                            "text": "Camel"
                        }
                    ],
                    "showLabel": true,
                    "multiSelect": true
                }
            ]
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "panel",
                    "name": "makeAndModel",
                    "title": "Choose make and model you are interested",
                    "elements": [{
                        "type": "dropdown",
                        "name": "carmake",
                        "title": "Which is the brand of your car?",
                        "itemComponent": "new-item",
                        "isRequired": true,
                        "choices": [
                            "Abarth",
                            "Alfa Romeo",
                            "Aston Martin",
                            "Audi",
                            "Bentley",
                            "BMW",
                            "Bugatti",
                            "Cadillac",
                            "Chevrolet",
                            "Chrysler",
                            "Citroën",
                            "Dacia",
                            "Daewoo",
                            "Daihatsu",
                            "Dodge",
                            "Donkervoort",
                            "DS",
                            "Ferrari",
                            "Fiat",
                            "Fisker",
                            "Ford",
                            "Honda",
                            "Hummer",
                            "Hyundai",
                            "Infiniti",
                            "Iveco",
                            "Jaguar",
                            "Jeep",
                            "Kia",
                            "KTM",
                            "Lada",
                            "Lamborghini",
                            "Lancia",
                            "Land Rover",
                            "Landwind",
                            "Lexus",
                            "Lotus",
                            "Maserati",
                            "Maybach",
                            "Mazda",
                            "McLaren",
                            "Mercedes-Benz",
                            "MG",
                            "Mini",
                            "Mitsubishi",
                            "Morgan",
                            "Nissan",
                            "Opel",
                            "Peugeot",
                            "Porsche",
                            "Renault",
                            "Rolls-Royce",
                            "Rover",
                            "Saab",
                            "Seat",
                            "Skoda",
                            "Smart",
                            "SsangYong",
                            "Subaru",
                            "Suzuki",
                            "Tesla",
                            "Toyota",
                            "Volkswagen",
                            "Volvo"
                        ],
                        "searchEnabled": false
                    }, {
                        "type": "dropdown",
                        "name": "carmodel",
                        "title": "Select a Model",
                        "isRequired": true,
                        "choicesByUrl": {
                            "url": "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/{carmake}?format=json",
                            "valueName": "Model_Name",
                            "path": "Results"
                        }
                    }]
                }
            ]
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "text",
                    "name": "last-name",
                    "width": "64%",
                    "minWidth": "192px",
                    "descriptionLocation": "underInput",
                    "placeholder": "Last name"
                },
                {
                    "type": "text",
                    "name": "first-name",
                    "width": "36%",
                    "minWidth": "256px",
                    "placeholder": "First name"
                },

                {
                    "type": "text",
                    "name": "phone",
                    "width": "64%",
                    "minWidth": "192px",
                    "description": "Example: +1 (555) 777-55-22",
                    "descriptionLocation": "underInput",
                    "placeholder": "Phone"
                }
            ]
        }
    ],
    "calculatedValues": [{
        "name": "firstname-for-complete-page",
        "expression": "iif({first-name} notempty, {first-name}, guests)"
    }],
    "showPrevButton": true,
    "showQuestionNumbers": "off",
    "questionErrorLocation": "bottom",
    "pagePrevText": "Prev",
    "pageNextText": "Next ➝",
    "completeText": "Submit",
    "widthMode": "static",
    "width": "904",
    "fitToContainer": true
};