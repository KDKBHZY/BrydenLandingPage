export const json = {
    "goNextPageAutomatic": true,
    "showProgressBar": "auto",
    "progressBarType": "pages",
    "completedHtml": "<div style=\"max-width:688px;text-align:center;margin: 16px auto;\">\n\n<div style=\"padding:0 24px;\">\n<h4>Thank you for choosing us.</h4>\n<br>\n<p>Dear {firstname-for-complete-page}, Our sales team will contact you soon.</p>\n</div>\n\n</div>\n",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "imagepicker",
                    "name": "vehicleType",
                    "title": "Select the vehicle type you want to know",
                    "description": "Please select all that apply.",
                    "imageHeight": 200,
                    "imageWidth": 360,
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Car",
                            "imageLink": "https://ddztmb1ahc6o7.cloudfront.net/brydenfinancing/wp-content/uploads/2022/08/15130207/Car%402x.png",
                            "text": "Car"
                        },
                        {
                            "value": "TRUCK",
                            "imageLink": "https://ddztmb1ahc6o7.cloudfront.net/brydenfinancing/wp-content/uploads/2022/08/15130210/Truck%402x.png",
                            "text": "TRUCK"
                        },
                        {
                            "value": "SUV",
                            "imageLink": "https://ddztmb1ahc6o7.cloudfront.net/brydenfinancing/wp-content/uploads/2022/08/15130209/Suv%402x.png",
                            "text": "SUV"
                        },
                        {
                            "value": "VAN",
                            "imageLink": "https://ddztmb1ahc6o7.cloudfront.net/brydenfinancing/wp-content/uploads/2022/08/15130212/Van%402x.png",
                            "text": "VAN"
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
                        "title": "Select a Make",
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
                },
                {
                    "type": "radiogroup",
                    "name": "detail",
                    "title": "Need us to help you find a specific car.",
                    "isRequired": true,
                    "choices": [ "Yes", "No" ],
                    "colCount": 0
                  },
                  {
                    "type": "tagbox",
                    "name": "Exteriorcolor",
                    "title": "Choose the exterior color you want",
                    "visibleIf": "{detail} = 'Yes'",
                    "isRequired": false,
                    "description": "Please select all that apply.",
                    "choices": [ "White", "Black", "Red","Beige", "Blue", "Grey","Silver",
                    "Bronze","Brown","Burgundy","Charcoal","Cream","Dark Blue",
                    "Dark Green","Dark Grey","Gold","Green","Light Green","Light Blue",
                "Maroon","Orange","Purple","Red",
            "Tan","Yellow" ]
                  },
                  {
                    "type": "tagbox",
                    "name": "Interiorcolor",
                    "title": "Choose the interior color you want",
                    "visibleIf": "{detail} = 'Yes'",
                    "isRequired": false,
                    "description": "Please select all that apply.",
                    "choices": [ "White", "Black", "Red","Beige", "Blue", "Grey","Silver",
                    "Bronze","Brown","Burgundy","Charcoal","Cream","Dark Blue",
                    "Dark Green","Dark Grey","Gold","Green","Light Green","Light Blue",
                "Maroon","Orange","Purple","Red",
            "Tan","Yellow" ]
                  },
                  {
                    "type": "tagbox",
                    "name": "options",
                    "title": "Choose the specific options you want",
                    "visibleIf": "{detail} = 'Yes'",
                    "isRequired": false,
                    "description": "Please select all that apply.",
                    "choices": [ "Heated seats","Carpay", "Air Suspension", "Branded speakers", "Panaromic Sunroof"]
                  },
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
                    "name": "email",
                    "width": "64%",
                    "minWidth": "192px",
                    "descriptionLocation": "underInput",
                    "placeholder": "Email"
                },
                {
                    "type": "text",
                    "name": "phone",
                    "width": "64%",
                    "minWidth": "192px",
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