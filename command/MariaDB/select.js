/*
코드: MS10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: MariaDB SELECT문 실행
버전: V0.4
*/

const { mariaQuery } = require("../../setting/mariaConfig"); // MariaDB query 실행 함수

const mariadbSelect = async (searchData) => {
    let selectSQL = "SELECT * FROM userlist";
    let paramData = [];
    let conditionContent = [];

    // 조건이 없을 경우 전체 검색, 있을경우 조건에 맞게 검색
    if (
        searchData.userid !== "" ||
        searchData.name !== "" ||
        searchData.age !== "" ||
        searchData.job !== ""
    ) {
        selectSQL += " WHERE ";
        if (searchData.userid !== "") {
            conditionContent = [...conditionContent, "userid = ?"];
            paramData.push(searchData.userid);
        }

        if (searchData.name !== "") {
            conditionContent = [...conditionContent, "name LIKE ?"];
            paramData.push(`%${searchData.name}%`);
        }

        if (searchData.age !== "") {
            conditionContent = [
                ...conditionContent,
                `age ${searchData.ageCondition} ?`,
            ];
            paramData.push(searchData.age);
        }

        if (searchData.job !== "") {
            conditionContent = [...conditionContent, "job = ?"];
            paramData.push(searchData.job);
        }

        conditionContent = conditionContent.join(" AND ");
        selectSQL += conditionContent;
    }

    const db_response = await mariaQuery(selectSQL, paramData);

    console.log("-----------------------------------------");
    console.log("SELECT command complete \n");
    !db_response.length ? console.log("Empty Data") : console.log(db_response);
    console.log("-----------------------------------------");
};

module.exports = { mariadbSelect };
