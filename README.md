# Dynamo DB usage in Node.js

1.  작성자: 김영훈
    <br>
2.  작성 목적: Node.js에서 Dynamo DB와 RDB의 차이점 비교
    <br>

3.  사용자가 설정 해야 할 것

        1. setting디렉토리에 AWS config파일 작성
        2. Maria DB 설치 및 setting 디렉토리에 query파일 설정
        3. env파일 생성후 아래 변수명 삽입
            - AWS_ACCESS_KEY_ID | AWS ID
            - AWS_SECRET_ACCESS_KEY | AWS private key
            - AWS_REGION | AWS region
            - AWS_DYNAMO_TABLE  | userlist, user table
            - MARIA_HOST | Maria db hostname
            - MARIA_USER | Maria db user name
            - MARIA_PW | Maria db password
            - MARIA_DATABASE | Maria db use database

    <br>

4.  프로젝트 실행 방법

        1. git clone https://github.com/yeonghoon123/DynamoDB_usage_Node
        2. cd DynamoDB_usage_Node
        3. npm install
        4. npm start

    <br>

5.  버젼: V0.4
