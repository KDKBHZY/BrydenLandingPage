export const json = {
    "title": "Bryden 60 Second Application",
    "description": "Get 'Ryden With Bryden' Today!",
    "logoPosition": "right",
    "completedHtml": "<h3>Bryden Quick App Complete!!</h3>\n<center><p>You're application has been received and is being processed. A Bryden Financing representative will be reaching out to you shortly. If you haven't heard back from us please call the office at (902) 865-4495.</p></center>",
    "loadingHtml": "<h3>60 Second Application Loading</h3>",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "image",
        "name": "question7",
        "hideNumber": true,
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0451e178-294e-49c6-b99a-07a1e4679f98",
        "imageHeight": "auto",
        "imageWidth": ""
       },
       {
        "type": "imagepicker",
        "name": "question1",
        "title": "Start by selecting a vehicle type...",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         {
          "value": "Car",
          "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d290d1b7-7bdb-406b-a29e-7a78bae67e51"
         },
         {
          "value": "Truck",
          "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ca011318-895c-4f18-b61a-008626285d7b"
         },
         {
          "value": "SUV",
          "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=dee05621-3d3c-45df-8704-d07b20443f07"
         },
         {
          "value": "Van",
          "text": "VAN",
          "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d45c4c2b-72ad-4a9b-aca6-4eacf547c5c6"
         }
        ],
        "showLabel": true
       }
      ],
      "title": "Bryden's 60 Second Quick App."
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "dropdown",
        "name": "question2",
        "title": "How much can you spend per month.",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         {
          "value": "$250",
          "text": "Under $250/mo"
         },
         {
          "value": "$251-375",
          "text": "$251-$375/mo"
         },
         {
          "value": "$376-500",
          "text": "$376-$500/mo"
         },
         "$501-$1500",
         "$1501+"
        ]
       },
       {
        "type": "boolean",
        "name": "question3",
        "title": "Are you a Canadian Citizen",
        "hideNumber": true
       },
       {
        "type": "text",
        "name": "question4",
        "title": "Date of Birth",
        "hideNumber": true,
        "inputType": "date"
       }
      ],
      "title": "Select your budget",
      "description": "Pick a monthly budget for the vehicle your choosing."
     },
     {
      "name": "page3",
      "elements": [
       {
        "colCount":1,
        "type": "radiogroup",
        "name": "question5",
        "title": "Current employment Status:",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Employed"
         },
         {
          "value": "Item 2",
          "text": "Student"
         },
         {
          "value": "Item 3",
          "text": "Homemaker"
         },
         {
          "value": "Item 4",
          "text": "Self-Employed"
         },
         {
          "value": "Item 5",
          "text": "Retired"
         }
        ]
       },
       {
        "type": "multipletext",
        "name": "question6",
        "title": "Where do you work...",
        "hideNumber": true,
        "items": [
         {
          "name": "text1",
          "title": "Company"
         },
         {
          "name": "text2",
          "title": "Job Title"
         }
        ]
       },
       {
        "colCount":1,
        "type": "radiogroup",
        "name": "question10",
        "title": "Years at Job",
        "hideNumber": true,
        "choices": [
         {
          "value": "<3month",
          "text": "Less Than 3 Months"
         },
         {
          "value": "3-11 months",
          "text": "Between 3-11 Months"
         },
         "1-2 Years",
         "3-5 Years",
         "6-10 Years"
        
        ]
       },
       {
        "type": "text",
        "name": "question8",
        "title": "Monthly Income",
        "description": "Input  an amount in dollars.",
        "hideNumber": true,
        "maskType": "currency",
        "maskSettings": {
         "prefix": "$"
        }
       }
      ],
      "title": "Employment Status",
      "description": "Tell us about your current employment status..."
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "multipletext",
        "name": "question9",
        "title": "Contact Information",
        "hideNumber": true,
        "isRequired": true,
        "items": [
         {
          "name": "First Name",
          "placeholder": "John",
          "title": "First Name"
         },
         {
          "name": "Last Name",
          "placeholder": "Doe",
          "title": "Last Name"
         },
         {
          "name": "Phone",
          "placeholder": "(XXX) XXX-XXXX",
          "inputType": "tel",
          "title": "Phone Number"
         },
         {
          "name": "Email",
          "placeholder": "email@domain.com",
          "inputType": "email",
          "title": "Email",
          "requiredErrorText": "You forgot a required field..."
         }
        ]
       }
      ],
      "title": "Your Almost Done!",
      "description": "Tell us about yourself!"
     }
    ],
    "showTitle": false,
    "showProgressBar": "aboveheader",
    "allowCompleteSurveyAutomatic": false,
    "completeText": "Submit"
   }