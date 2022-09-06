// config 랑 models, seeders 안에 파일은 반드시 폴더 명이랑 이름을 맞춰 주어야함. 
//sequelize 의 migrations 는 수정, 백업, 업데이트 를 얘기하고 일종의 패키지변경을 뜻함. 
// 프로젝트에서 migrations 을 쓴다고 하면 다른 라이브러리나, 다른 스펙으로 바꾸는것을 뜻함. 


import dotenv from "dotenv";
//const dotenv = require("dotenv");

dotenv.config(); // dotenv 사용 선언문 

export default {
    development: {
        username: "root",
        password: process.env.DB_PASSWORD, // ENV 에 있는 비밀번호. process.env. 기본으로 써줘야 하는것. 
        database: "testdb", 
        hots: "127.0.0.1",
        port: "3306",
        dialect: "mysql", 
    },
    test: {  // test 용 DB
        username: "root",
        password: process.env.DB_PASSWORD, // ENV 에 있는 비밀번호. process.env. 기본으로 써줘야 하는것. 
        database: "testdb", 
        hots: "127.0.0.1",
        port: "3306",
        dialect: "mysql", 
    }, 
    production: {  // 배포용 DB
        username: "root",
        password: process.env.DB_PASSWORD, // ENV 에 있는 비밀번호. process.env. 기본으로 써줘야 하는것. 
        database: "testdb", 
        hots: "127.0.0.1",
        port: "3306",
        dialect: "mysql", 
    }
};


// 이렇게 그냥 설정을 해야함.. 원래 이렇게 적용해야함.. 