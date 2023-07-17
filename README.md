# Dynamo DB usage in Node.js

1.  작성자: 김영훈
    <br>
2.  작성 목적: Node.js에서 Dynamo DB와 RDB의 차이점 비교
    <br>
3.  프로젝트 실행 방법

        1. git clone https://github.com/yeonghoon123/DynamoDB_usage_Node
        2. cd DynamoDB_usage_Node
        3. npm install
        4. npm start

    <br>

4.  사용자가 설정 해야 할 것

        1. AWS config파일 작성
        2. Dynamo DB에 테이블 지정, 만약 테이블이 존재 하지 않다면 임시 userlist 테이블을 생성할 수 있는 CREATE TABLE 커맨드를 선택
        3. Maria DB 설치 및 설정
        4. env파일 생성후 아래 변수명 삽입
           <br>
            - AWS_ACCESS_KEY_ID
            - AWS_SECRET_ACCESS_KEY
            - AWS_REGION
            - AWS_DYNAMO_TABLE
            - MARIA_HOST
            - MARIA_USER
            - MARIA_PW
            - MARIA_DATABASE

    <br>

5.  버젼: V0.4
