/*
코드: DS10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: DynamoDB SDK SELECT문 사용법 및 예시
버전: V0.1
*/

// Dynamo DB에서 SQL중 SELECT문의 WHERE, LIKE등 기능 구현
const dynamoSelect = async (dynamo, searchData) => {
    let getItems; // 사용자가 원하는 검색 데이터
    let filterValue = []; // 사용자가 입력한 조건에 따라 조건식이 담긴 배열
    let expressionAttrVal = {}; // dynamo db에서 에러가 나타나지 않도록한 표현식

    // 조건이 없을 경우 전체 검색, 있을경우 조건에 맞게 검색
    if (
        searchData.userid === "" &&
        searchData.name === "" &&
        searchData.age === "" &&
        searchData.job === ""
    ) {
        getItems = await dynamo
            .scan({
                TableName: process.env.AWS_DYNAMO_TABLE,
            })
            .promise();
    } else {
        if (searchData.userid !== "") {
            filterValue = [...filterValue, "userid = :useridVal"];
            expressionAttrVal = {
                ...expressionAttrVal,
                ":useridVal": searchData.userid,
            };
        }

        if (searchData.name !== "") {
            filterValue = [...filterValue, "contains(name, :nameVal)"];
            expressionAttrVal = {
                ...expressionAttrVal,
                ":nameVal": searchData.name,
            };
        }

        if (searchData.age !== "") {
            // 사용자가 입력한 나이 조건에 미만,이하,같음,이상,초과를 구분
            switch (searchData.ageCondition) {
                case "more":
                    filterValue = [...filterValue, "age >= :ageVal"];
                    break;

                case "below":
                    filterValue = [...filterValue, "age <= :ageVal"];
                    break;

                case "same":
                    filterValue = [...filterValue, "age = :ageVal"];
                    break;

                case "over":
                    filterValue = [...filterValue, "age > :ageVal"];
                    break;

                case "same":
                    filterValue = [...filterValue, "age  :ageVal"];
                    break;
            }
            expressionAttrVal = {
                ...expressionAttrVal,
                ":ageVal": searchData.age,
            };
        }

        if (searchData.job !== "") {
            filterValue = [...filterValue, "contains(job, :jobVal)"];

            expressionAttrVal = {
                ...expressionAttrVal,
                ":jobVal": searchData.job,
            };
        }

        filterValue = filterValue.join(" AND ");
        getItems = await dynamo
            .scan({
                TableName: process.env.AWS_DYNAMO_TABLE,
                FilterExpression: filterValue,
                ExpressionAttributeValues: expressionAttrVal,
            })
            .promise();
    }

    console.log("-----------------------------------------");
    console.log("SELECT command complete \n");
    console.log(getItems.Items);
    console.log("-----------------------------------------");
};

module.exports = { dynamoSelect };
