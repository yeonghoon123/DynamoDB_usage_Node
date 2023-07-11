/*
코드: MC10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: MySQL 기본 설정 및 query 실행 함수
버전: V0.2
*/

const mysqlConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_DATABASE,
};

const mysqlQuery = async (sqlQuery, paramData) => {
    const mysql = require("mysql");
    const db_connection = mysql.createConnection(mysqlConfig);
    let response = "test";

    console.log(sqlQuery, paramData);

    db_connection.connect();

    response = await new Promise((resolve, reject) => {
        db_connection.query(sqlQuery, paramData, (err, results) => {
            if (err) {
                reject(err);
            }

            resolve(results);
        });
    });

    db_connection.end();

    return response;
};

module.exports = { mysqlQuery };
