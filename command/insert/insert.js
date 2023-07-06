const dynamoInsert = (dynamo, userData) => {
    dynamo.put(
        {
            TableName: process.env.AWS_DYNAMO_TABLE,
            ConditionExpression: "attribute_not_exists(userid)",
            Item: {
                userid: userData.userid,
                name: userData.name,
                age: userData.age,
                job: userData.job,
            },
        },
        (err) => {
            if (err) {
                console.log(err);
                console.log("INSERT command failed");
            }
        }
    );
    console.log("INSERT command complete");
};

module.exports = { dynamoInsert };
