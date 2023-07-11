/*
코드: MI10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: MySQL INSERT문 사용법 및 예시
버전: V0.2
*/

const { mysqlQuery } = require("../../setting/mysqlConfig");

// Dynamo DB에서 SQL중 INSERT문 기능 구현
const mysqlInsert = (userData) => {
    const insertSQL = "INSERT INTO userlist VALUES(?,?,?,?);";
    const paramData = Object.entries(userData).reduce(
        (result, [key, value]) => {
            result.push(value);
            return result;
        },
        []
    );

    mysqlQuery(insertSQL, paramData);

    console.log("INSERT command complete");
};

module.exports = { mysqlInsert };