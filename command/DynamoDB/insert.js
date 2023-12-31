/*
코드: DI10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: DynamoDB SDK INSERT문 실행
버전: V0.4
*/

const dynamoInsert = async (dynamo, userData) => {
    if (
        userData.userid === "" ||
        userData.name === "" ||
        userData.age === "" ||
        userData.job === ""
    ) {
        console.log("Please fill in all the data to INSERT");
        return;
    }
    await dynamo.put(
        {
            TableName: process.env.AWS_DYNAMO_TABLE,
            ConditionExpression: "attribute_not_exists(userid)",
            Item: {
                userid: userData.userid,
                name: userData.name,
                age: userData.age,
                job: userData.job,
            },
        },
        (err) => {
            if (err) {
                console.log(err);
                console.log("INSERT command failed");
            }
        }
    );
    console.log("INSERT command complete");
};

module.exports = { dynamoInsert };
