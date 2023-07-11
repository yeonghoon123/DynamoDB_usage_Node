/*
코드: DD10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: DynamoDB SDK DELETE문 실행
버전: V0.2
*/

const dynamoDelete = async (dynamo, userid) => {
    await dynamo
        .delete({
            TableName: process.env.AWS_DYNAMO_TABLE,
            Key: {
                userid,
            },
        })
        .promise();

    console.log("DELETE command complete \n");
};

module.exports = { dynamoDelete };
