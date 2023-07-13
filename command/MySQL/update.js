/*
코드: MU10
작성자: 김영훈
작성일: 2023.07.06
코드 설명: MySQL UPDATE문 실행
버전: V0.3
*/

/* ------------------------------USE MySQL------------------------------ */
const { mysqlQuery } = require("../../setting/mysqlConfig");

const mysqlUpdate = async (updateData) => {
    let updateSQL = "UPDATE userlist SET";
    let updateContant = [];

    if (
        updateData.userid === "" ||
        (updateData.name === "" &&
            updateData.age === "" &&
            updateData.job === "")
    ) {
        console.log("To update, you must enter userid and change data.");
        return;
    } else {
        let paramData = []; // update문에 기입될 param data 배열

        if (updateData.name !== "") {
            updateContant = [...updateContant, "name = ?"];
            paramData.push(updateData.name);
        }

        if (updateData.age !== "") {
            updateContant = [...updateContant, "age = ?"];
            paramData.push(updateData.age);
        }

        if (updateData.job !== "") {
            updateContant = [...updateContant, "job = ?"];
            paramData.push(updateData.job);
        }

        paramData.push(updateData.userid);
        updateContant = updateContant.join(", ");
        updateSQL += ` ${updateContant} WHERE userid = ?;`;

        mysqlQuery(updateSQL, paramData);
        console.log("UPDATE command complete \n");
    }
};

module.exports = { mysqlUpdate };
