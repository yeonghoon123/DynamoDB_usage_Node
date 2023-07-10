/*
코드: M10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: DynamoDB SDK 사용법 및 예시
버전: V0.2
*/

require("dotenv").config(); // use env

/* ------------------------------ command js file ------------------------------ */
const { dynamoCreateTable } = require("./command/createTable");
const { dynamoInsert } = require("./command/insert");
const { dynamoSelect } = require("./command/select");
const { dynamoUpdate } = require("./command/update");
const { dynamoDelete } = require("./command/delete");

const askCommandList = require("./command/askCommand");

/* ------------------------------ AWS ------------------------------ */
const AWS = require("aws-sdk"); // use aws-sdk
const AWS_CONFIG = require("./config/config"); // aws config 설정
AWS.config.update(AWS_CONFIG.aws_remote_config); // aws의 config를 설정한 remote config로 변경
const dynamo = new AWS.DynamoDB.DocumentClient(); // dynamodb 연결

/* ------------------------------ Command Start ------------------------------ */
const { prompt } = require("enquirer");

const commandStart = async () => {
    const choiceCommand = await askCommandList.askCommand.run(); // 사용자가 실행하였을때 원하는 query문을 선택할 수 있도록 물어봄
    switch (choiceCommand) {
        case "CREATE":
            // table이 존재하지 않은 사용자에게 table을 생성해주는 함수 실행
            dynamoCreateTable(AWS);
            break;

        case "INSERT":
            // 사용자가 추가하고 싶은 데이터를 입력받아 INSERT 함수 실행
            const userData = await prompt(askCommandList.insertQuestion);
            dynamoInsert(dynamo, userData);
            break;

        case "SELECT":
            // 사용자가 검색하고 싶은 데이터를 입력받아 SELECT 함수 실행
            let searchData = await prompt(askCommandList.selectQuestion);

            // 사용자가 나이에 대해서 검색을 원할시 나이에 대한 조건을 입력 받은 후 함수 실행
            if (searchData.age !== "") {
                searchData.ageCondition =
                    await askCommandList.ageQuestion.run();
            }
            dynamoSelect(dynamo, searchData);
            break;

        case "UPDATE":
            // 사용자가 수정하고 싶은 데이터를 입력받아 UPDATE 함수 실행
            const updateData = await prompt(askCommandList.updateQuestion);
            dynamoUpdate(dynamo, updateData);
            break;

        case "DELETE":
            // 사용자가 삭제하고 싶은 데이터를 입력받아 DELETE 함수 실행
            const deleteData = await prompt(askCommandList.deleteQuestion);

            // 사용자가 정말 삭제를 원하였는지 확인하는 문구가 일치 하면 함수 실행
            if (deleteData.userCheck === "delete") {
                dynamoDelete(dynamo, deleteData.userid);
            }

            break;
    }
};

// AWS에 보내온 로그이후 실행될수있도록 타이머 설정
setTimeout(() => {
    commandStart();
}, 1000);
