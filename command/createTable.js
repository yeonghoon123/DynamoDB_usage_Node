/*
코드: DC10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: DynamoDB SDK CREATE를 사용하여 테이블 생성
버전: V0.2
*/

const dynamoCreateTable = async (AWS) => {
    const tableName = "userlist";
    const dynamoDB = new AWS.DynamoDB();

    await dynamoDB
        .createTable({
            TableName: tableName,
            KeySchema: [
                { AttributeName: "userid", KeyType: "HASH" }, //Partition key
            ],
            AttributeDefinitions: [
                { AttributeName: "userid", AttributeType: "S" },
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 10,
                WriteCapacityUnits: 10,
            },
        })
        .promise();

    console.log("CREATE command complete \n");
};

module.exports = { dynamoCreateTable };
