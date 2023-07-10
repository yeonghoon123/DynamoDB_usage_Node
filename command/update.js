/*
코드: DU10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: DynamoDB SDK UPDATE문 실행
버전: V0.2
*/

const dynamoUpdate = async (dynamo, updateData) => {
    console.log(updateData);
    if (
        updateData.userid === "" ||
        (updateData.name === "" &&
            updateData.age === "" &&
            updateData.job === "")
    ) {
        console.log("UPDATE cancel");
    } else {
        let updateExVal = []; // 수정할 내용을 dynamo db 문법으로 변경한 식
        let expressionAttrVal = {}; // dynamo db에서 에러가 나타나지 않도록한 value값 표현식
        let expressionAttrName = {}; // dynamo db에서 에러가 나타나지 않도록한 key값 표현식

        if (updateData.name !== "") {
            updateExVal = [...updateExVal, "#name = :nameVal"];

            expressionAttrName = {
                ...expressionAttrName,
                "#name": "name",
            };

            expressionAttrVal = {
                ...expressionAttrVal,
                ":nameVal": updateData.name,
            };
        }

        if (updateData.age !== "") {
            updateExVal = [...updateExVal, "#age = :ageVal"];

            expressionAttrName = {
                ...expressionAttrName,
                "#age": "age",
            };

            expressionAttrVal = {
                ...expressionAttrVal,
                ":ageVal": updateData.age,
            };
        }

        if (updateData.job !== "") {
            updateExVal = [...updateExVal, "#job = :jobVal"];

            expressionAttrName = {
                ...expressionAttrName,
                "#job": "job",
            };

            expressionAttrVal = {
                ...expressionAttrVal,
                ":jobVal": updateData.job,
            };
        }

        updateExVal = updateExVal.join(", ");
        dynamo.update({
            TableName: process.env.AWS_DYNAMO_TABLE,
            Key: {
                userid: updateData.userid,
            },
            ExpressionAttributeNames: expressionAttrName,
            UpdateExpression: `SET ${updateExVal}`,
            ExpressionAttributeValues: expressionAttrVal,
        });

        console.log("UPDATE command complete \n");
    }
};

module.exports = { dynamoUpdate };
