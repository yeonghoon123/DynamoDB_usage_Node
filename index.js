/*
코드: M10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: DynamoDB SDK 사용법 및 예시
버전: V0.1
*/

require("dotenv").config(); // use env

/* ------------------------------ command js file ------------------------------ */
const { dynamoInsert } = require("./command/insert");
const { dynamoSelect } = require("./command/select");
const { dynamoUpdate } = require("./command/update");

const askCommandList = require("./command/askCommand");

/* ------------------------------ AWS ------------------------------ */
const AWS = require("aws-sdk"); // use aws-sdk
const AWS_CONFIG = require("./config/config"); // aws config 설정
AWS.config.update(AWS_CONFIG.aws_remote_config); // aws의 config를 설정한 remote config로 변경
const dynamo = new AWS.DynamoDB.DocumentClient(); // dynamodb 연결

/* ------------------------------ use enquirer ------------------------------ */
const { prompt } = require("enquirer");

const commandStart = async () => {
    const choiceCommand = await askCommandList.askCommand.run();
    switch (choiceCommand) {
        case "INSERT":
            const userData = await prompt(askCommandList.insertQuestion);
            dynamoInsert(dynamo, userData);
            break;

        case "SELECT":
            let searchData = await prompt(askCommandList.selectQuestion);
            if (searchData.age !== "") {
                searchData.ageCondition =
                    await askCommandList.ageQuestion.run();
            }
            dynamoSelect(dynamo, searchData);
            break;

        case "UPDATE":
            const updateData = await prompt(askCommandList.updateQuestion);
            dynamoUpdate(dynamo, updateData);
            break;

        case "DELETE":
            const deleteData = await prompt(insertQuestion);
            dynamoInsert(dynamo, userData);
            break;
    }
};

// AWS에 보내온 로그이후 실행될수있도록 타이머 설정
setTimeout(() => {
    commandStart();
}, 1000);
