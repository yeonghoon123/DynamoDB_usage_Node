/*
코드: MD10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: MySQL DELETE문 실행
버전: V0.3
*/

/* ------------------------------USE MySQL------------------------------ */
const { mysqlQuery } = require("../../setting/mysqlConfig");

const mysqlDelete = (userid) => {
    const deleteSQL = "DELETE FROM userlist WHERE userid = ?;";

    mysqlQuery(deleteSQL, userid);
    console.log("DELETE command complete \n");
};

module.exports = { mysqlDelete };
