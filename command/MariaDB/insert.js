/*
코드: MI10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: MariaDB INSERT문 사용법 및 예시
버전: V0.4
*/

const { mariaQuery } = require("../../setting/mariaQuery"); // MariaDB query 실행 함수

const mariadbInsert = (userData) => {
    const insertSQL = "INSERT INTO userlist VALUES(?,?,?,?);";
    const paramData = Object.entries(userData).reduce(
        (result, [key, value]) => {
            result.push(value);
            return result;
        },
        []
    );

    mariaQuery(insertSQL, paramData);

    console.log("INSERT command complete");
};

module.exports = { mariadbInsert };
