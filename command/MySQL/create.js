/*
코드: MC10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: MySQL CREATE를 사용하여 테이블 생성
버전: V0.3
*/

/* ------------------------------USE MySQL------------------------------ */
const { mysqlQuery } = require("../../setting/mysqlConfig");

const mysqlCreate = () => {
    const createSQL =
        "CREATE TABLE userlist(" +
        "userid VARCHAR(30) NOT NULL PRIMARY KEY," +
        "name VARCHAR(30) NOT NULL," +
        "age VARCHAR(3) NOT NULL," +
        "job VARCHAR(30) NOT NULL);";

    mysqlQuery(createSQL);

    console.log("CREATE command complete \n");
};

module.exports = { mysqlCreate };
