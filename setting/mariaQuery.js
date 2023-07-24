/*
코드: MQ10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: MariaDB 기본 설정 및 query 실행 함수
버전: V0.4
*/

const mariaConfig = {
    host: process.env.MARIA_HOST,
    user: process.env.MARIA_USER,
    password: process.env.MARIA_PW,
    database: process.env.MARIA_DATABASE,
};

/** Maria DB Query 실행 */
const mariaQuery = async (sqlQuery, paramData) => {
    const mariadb = require("mariadb");
    const db_connection = await mariadb.createConnection(mariaConfig);

    console.log(sqlQuery, paramData);
    const response = await db_connection.query(sqlQuery, paramData);
    db_connection.end();
    return response;
};

module.exports = { mariaQuery };
