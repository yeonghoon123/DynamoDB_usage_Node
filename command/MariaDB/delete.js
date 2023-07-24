/*
코드: MD10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: MariaDB DELETE문 실행
버전: V0.4
*/

const { mariaQuery } = require("../../setting/mariaConfig"); // MariaDB query 실행 함수

const mariadbDelete = (userid) => {
    const deleteSQL = "DELETE FROM userlist WHERE userid = ?;";

    mariaQuery(deleteSQL, userid);

    console.log("DELETE command complete \n");
};

module.exports = { mariadbDelete };
