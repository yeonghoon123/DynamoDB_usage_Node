/*
코드: AC10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: AWS 기본 설정
버전: V0.4
*/

module.exports = {
    aws_table_name: "userlist",
    aws_remote_config: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
    },
};
