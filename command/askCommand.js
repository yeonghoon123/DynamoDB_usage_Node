/*
코드: AC10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: DynamoDB SDK query중 사용자에게 질문을 설정
버전: V0.1
*/

/* ------------------------------ use enquirer ------------------------------ */
const { AutoComplete, MultiSelect } = require("enquirer");

// Let the user choose one answer
const askCommand = new AutoComplete({
    name: "command",
    message: "커맨드를 선택하시오",
    limit: 10,
    initial: 2,
    choices: [
        "CREATE TABLE(TABLE이 없는 경우 생성)",
        "SELECT",
        "INSERT",
        "UPDATE",
        "DELETE",
    ],
});

/* ------------------------------ INSERT question ------------------------------ */
// Dynamo DB에 기입할 data question
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
        message: "job을 입력하세요. (string)",
    },
];

/* ------------------------------ SELECT question ------------------------------ */
const selectQuestion = [
    {
        type: "input",
        name: "userid",
        message: "검색할 userid를 입력하세요. (string)",
    },
    {
        type: "input",
        name: "name",
        message: "검색할 name을 입력하세요. (string)",
    },
    {
        type: "input",
        name: "age",
        message: "검색할 age를 입력하세요. (number)",
    },
    {
        type: "input",
        name: "job",
        message: "검색할 job을 입력하세요.(string)",
    },
];

// Let the user choose one answer
const ageQuestion = new AutoComplete({
    name: "age",
    message: "나이의 조건을 선택하시오.",
    limit: 10,
    initial: 2,
    choices: ["more", "below", "same", "over", "under"],
});

/* ------------------------------ UPDATE question ------------------------------ */
const updateQuestion = [
    {
        type: "input",
        name: "userid",
        message:
            "수정할 userid를 입력하세요. (string, userid는 바꿀수 없습니다.)",
    },
    {
        type: "input",
        name: "name",
        message: "수정할 name을 입력하세요. (string)",
    },
    {
        type: "input",
        name: "age",
        message: "수정할 age를 입력하세요. (number)",
    },
    {
        type: "input",
        name: "job",
        message: "수정할 job을 입력하세요.(string)",
    },
];

module.exports = {
    askCommand,
    insertQuestion,
    selectQuestion,
    ageQuestion,
    updateQuestion,
};
