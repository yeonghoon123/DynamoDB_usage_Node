/*
코드: MC10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: MariaDB CREATE를 사용하여 테이블 생성
버전: V0.4
*/

const { mariaQuery } = require("../../setting/mariaConfig"); // MariaDB query 실행 함수

const mariadbCreate = () => {
    const createSQL =
        "CREATE TABLE userlist(" +
        "userid VARCHAR(30) NOT NULL PRIMARY KEY," +
        "name VARCHAR(30) NOT NULL," +
        "age VARCHAR(3) NOT NULL," +
        "job VARCHAR(30) NOT NULL);";

    mariaQuery(createSQL);

    console.log("CREATE command complete \n");
};

module.exports = { mariadbCreate };
