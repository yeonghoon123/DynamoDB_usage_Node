/*
코드: QC10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: 사용자에게 질문할 질문 목록
버전: V0.2
*/

/* ------------------------------ use enquirer ------------------------------ */
const { AutoComplete } = require("enquirer");

/* ------------------------------ What DB usage question------------------------------ */
const choiceDBquestion = new AutoComplete({
    name: "use_db",
    message: "사용할 database를 선택하시오",
    limit: 10,
    choices: ["MySQL", "Dynamo DB"],
});

/* ------------------------------ command question ------------------------------ */
const questionCommand = new AutoComplete({
    name: "command",
    message: "커맨드를 선택하시오",
    limit: 10,
    choices: [
        { name: "CREATE", message: "CREATE TABLE(TABLE이 없는 경우 생성)" },
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
            "userid를 입력하세요. (string, NOT NULL, 검색할 수 있도록 외울 수있는 번호)",
    },
    {
        type: "input",
        name: "name",
        message: "name을 입력하세요. (string, NOT NULL)",
    },
    {
        type: "input",
        name: "age",
        message: "age를 입력하세요. (number, NOT NULL)",
    },
    {
        type: "input",
        name: "job",
        message: "job을 입력하세요. (string, NOT NULL)",
    },
];

/* ------------------------------ SELECT question ------------------------------ */
// 검색할 데이터를 사용자에게 입력받기 위한 질문
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

// 사용자가 나이를 조건으로 검색하고 싶을 경우 나이에 조건을 선택 질문
const ageQuestion = new AutoComplete({
    name: "age",
    message: "나이의 조건을 선택하시오.",
    limit: 10,
    initial: 2,
    choices: [
        { name: ">=", message: "more" },
        { name: "<=", message: "below" },
        { name: "=", message: "same" },
        { name: ">", message: "over" },
        { name: "<", message: "under" },
    ],
});

/* ------------------------------ UPDATE question ------------------------------ */
// 수정할 데이터를 사용자에게 입력받기 위한 질문
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

/* ------------------------------ DELETE question ------------------------------ */
// 삭제할 데이터를 사용자에게 입력받기 위한 질문
const deleteQuestion = [
    {
        type: "input",
        name: "userid",
        message: "삭제할 userid를 입력하세요. (string)",
    },
    {
        type: "input",
        name: "userCheck",
        message: "삭제확인을 위해 delete를 입력해주세요.",
    },
];

module.exports = {
    questionCommand,
    insertQuestion,
    selectQuestion,
    ageQuestion,
    updateQuestion,
    deleteQuestion,
    choiceDBquestion,
};
