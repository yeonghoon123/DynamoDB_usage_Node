/*
코드: DS10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: DynamoDB SDK SELECT문 실행
버전: V0.3
*/

// Dynamo DB에서 SQL중 SELECT문의 WHERE, LIKE등 기능 구현
const dynamoSelect = async (dynamo, searchData) => {
    let db_response; // 사용자가 원하는 검색 데이터
    let filterValue = []; // 사용자가 입력한 조건에 따라 조건식이 담긴 배열
    let expressionAttrVal = {}; // dynamo db에서 에러가 나타나지 않도록한 value값 표현식
    let expressionAttrName = {}; // dynamo db에서 에러가 나타나지 않도록한 key값 표현식

    // 조건이 없을 경우 전체 검색, 있을경우 조건에 맞게 검색
    if (
        searchData.userid === "" &&
        searchData.name === "" &&
        searchData.age === "" &&
        searchData.job === ""
    ) {
        db_response = await dynamo
            .scan({
                TableName: process.env.AWS_DYNAMO_TABLE,
            })
            .promise();
    } else {
        if (searchData.userid !== "") {
            filterValue = [...filterValue, "#userid = :useridVal"];

            expressionAttrName = {
                ...expressionAttrName,
                "#userid": "userid",
            };

            expressionAttrVal = {
                ...expressionAttrVal,
                ":useridVal": searchData.userid,
            };
        }

        if (searchData.name !== "") {
            filterValue = [...filterValue, "contains(#name, :nameVal)"];

            expressionAttrName = {
                ...expressionAttrName,
                "#name": "name",
            };

            expressionAttrVal = {
                ...expressionAttrVal,
                ":nameVal": searchData.name,
            };
        }

        if (searchData.age !== "") {
            filterValue = [
                ...filterValue,
                `#age ${searchData.ageCondition} :ageVal`,
            ];

            expressionAttrName = {
                ...expressionAttrName,
                "#age": "age",
            };

            expressionAttrVal = {
                ...expressionAttrVal,
                ":ageVal": searchData.age,
            };
        }

        if (searchData.job !== "") {
            filterValue = [...filterValue, "contains(#job, :jobVal)"];

            expressionAttrName = {
                ...expressionAttrName,
                "#job": "job",
            };

            expressionAttrVal = {
                ...expressionAttrVal,
                ":jobVal": searchData.job,
            };
        }

        filterValue = filterValue.join(" AND ");
        db_response = await dynamo
            .scan({
                TableName: process.env.AWS_DYNAMO_TABLE,
                FilterExpression: filterValue,
                ExpressionAttributeNames: expressionAttrName,
                ExpressionAttributeValues: expressionAttrVal,
            })
            .promise();
    }

    console.log("-----------------------------------------");
    console.log("SELECT command complete \n");
    db_response.Items.length === 0
        ? console.log("Empty Data")
        : console.log(db_response);
    console.log("-----------------------------------------");
};

module.exports = { dynamoSelect };
