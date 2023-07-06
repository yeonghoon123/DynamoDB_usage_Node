require("dotenv").config(); // use env

/* ------------------------------ command js file ------------------------------ */
const { dynamoInsert } = require("./command/insert/insert");

/* ------------------------------ AWS ------------------------------ */
const AWS = require("aws-sdk"); // use aws-sdk
const AWS_CONFIG = require("./config/config"); // aws config 설정
AWS.config.update(AWS_CONFIG.aws_remote_config); // aws의 config를 설정한 remote config로 변경
const dynamo = new AWS.DynamoDB.DocumentClient(); // dynamodb 연결

/* ------------------------------ use enquirer ------------------------------ */
const { AutoComplete, prompt } = require("enquirer");

// Expect a normal string input from the user
const insertQuestion = [
    {
        type: "input",
        name: "userid",
        message:
            "userid를 입력하세요. (string, 검색할 수 있도록 외울 수있는 번호)",
    },
    {
        type: "input",
        name: "name",
        message: "name을 입력하세요. (string)",
    },
    {
        type: "input",
        name: "age",
        message: "age를 입력하세요. (number)",
    },
    {
        type: "input",
        name: "job",
        message: "What is your job? (string)",
    },
];

// Let the user choose one answer
const askCommand = new AutoComplete({
    name: "command",
    message: "커맨드를 선택하시오",
    limit: 10,
    initial: 2,
    choices: ["SELECT", "INSERT", "UPDATE", "DELETE"],
});

const commandStart = async () => {
    const choiceCommand = await askCommand.run();
    switch (choiceCommand) {
        case "INSERT":
            const userData = await prompt(insertQuestion);
            dynamoInsert(dynamo, userData);
            break;
    }
};

setTimeout(() => {
    commandStart();
}, 1000);
