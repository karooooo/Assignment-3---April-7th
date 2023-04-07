// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';




export default function () {
     const surveyJson = {
        title: "WHMIS Safety Quiz",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [
          {
            "elements": [
              {
                "type": "html",
                "html": "You are about to start a quiz on WHMIS Safety training. <br>You will have 10 seconds for every question and 25 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
              },
              {
                "type": "text",
                "name": "username",
                "titleLocation": "hidden",
                "isRequired": true
              }
            ]
          },
          {
            "elements": [
              {
                "type": "radiogroup",
                "name": "Question #1",
                "title": "What does the Flame symbol Indicate",
                "choices": [
                  "Flammable",
                  "Explosive",
                  "Ignition sources",
                  "Combustible"
                ],
                "correctAnswer": "Flammable"
              }
            ]
          },
          {

          },
          {
            "elements": [
              {
                "type": "radiogroup",
                "name": "Question #2",
                "title": "If you pour a chemical from a large container into a smaller container:",
                "choices": [
                  "You do not need to apply a workplace label to it as long as the chemical is not corrosive.",
                  "You must apply a workplace label to the container unless you are going to use it immediately and the container will remain in your possession at all times during its use", 
                  "You must notify the supplier of the product"
              
                ],
                "correctAnswer": "You must apply a workplace label to the container unless you are going to use it immediately and the container will remain in your possession at all times during its use"
              }
            ]
          },
          {
            "elements": [
              {
                "type": "radiogroup",
                "name": "Question #3",
                "title": "Eating while handling hazardous chemicals would not typically cause any problems as ingestion is not a common Route of Entry",
                "choices": [
                  "True",
                  "False",

                ],
                "correctAnswer": "False"
              }
            ]
          },{
            "elements": [
              {
                "type": "radiogroup",
                "name": "Question #4",
                "title": "WHMIS is an acronym that stands for",
                "choices": [
                  "Workplace Hazardous Materials Intuitive System",
                  "Workplace Hazardous Materials Information System",
                  "World Hazardous Materials Information System",
                  "Workplace Hazardous Mineral Information System"
                ],
                "correctAnswer": "Workplace Hazardous Materials Information System"
              }
            ]
          },{
            "elements": [
              {
                "type": "radiogroup",
                "name": "Question #5",
                "title": "What does MSD stand for",
                "choices": [
                  "Material Safety Data Sheet",
                  "Muscle Dynamic Syndrome",
                  "Machine Decision Strategy"
                ],
                "correctAnswer": "Material Safety Data Sheet"
              }
            ]
          },{
            "elements": [
              {
                "type": "radiogroup",
                "name": "Question #6",
                "title": "In order to determine the odour of a chemical, always put your head/face directly over the container opening and inhale deeply to get the best sample",
                "choices": [
                  "True",
                  "False"
                ],
                "correctAnswer": "False"
              }
            ]},{
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "Question #7",
                  "title": "All injuries, no matter how minor, should be reported to your teacher, supervisor, or first aid attendant",
                  "choices": [
                    "True",
                    "False",
                    "Depends on how minor the injury",
                    "Depends on what part of your body was affected"
                  ],
                  "correctAnswer": "True"
                }
              ]},{
          },{
            "elements": [
              {
                "type": "radiogroup",
                "name": "Question #8",
                "title": "If you encounter a product that has a damaged, obscured or missing label, you must",
                "choices": [
                  "Only use the product for a short period of time",
                  "Refrain from using the product and notify your supervisor immediately",
                  "Continue as if nothing happened"
                ],
                "correctAnswer": "Refrain from using the product and notify your supervisor immediately"
              }
            ]
          },
          {
            "elements": [
              {
                "type": "radiogroup",
                "name": "Question #9",
                "title": "A Safety Data Sheet is",
                "choicesOrder": "random",
                "choices": [
                  "A product that can harm you",
                  "A document that advises workers exactly how to use a product",
                  "A technical document that details the properties, contents, precautions, and safe handling procedures of a hazardous product"
                ],
                "correctAnswer": "A technical document that details the properties, contents, precautions, and safe handling procedures of a hazardous product"
              }
            ]
          },
          {
            "elements": [
              {
                "type": "radiogroup",
                "name": "Question #10",
                "title": "if you don’t understand how to protect yourself while working with a hazardous product, you should",
                "choicesOrder": "random",
                "choices": [
                  "Talk to your supervisor immediately",
                  "Call your jurisdictions health and safety authority",
                  "Google it"
                ],
                "correctAnswer": "Talk to your supervisor immediately"
              }
            ]
          }
        ],
        
        "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
        "completedHtmlOnCondition": [
          {
            "expression": "{correctAnswers} == 0",
            "html": "<h4>Unfortunately, none of your answers is correct. Please try again.</h4>"
          },
          {
            "expression": "{correctAnswers} == {questionCount}",
            "html": "<h4>Congratulations! You answered all the questions correctly!</h4>"
          }
        ]
      };
      const survey = new Model(surveyJson);


      return <Survey model={survey} />;
    }