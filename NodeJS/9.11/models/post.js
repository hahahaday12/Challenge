// day05 의 id(자동생성), content, create,
// table name posts 스키마 만들어오기 

// // 관계 설정 belongTo, belongToMany, hasOne, hasMany

import Sequelize from "sequelize";

export default class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                content: {
                    type: Sequelize.TEXT,
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                modelName: "Post",
                tableName: "posts",
                charset: "utf8mb4", // 이모티콘, 이모지
                collage: "utf8mb4_general_ci", // 이모티콘, 이모지
            }
        );
    }
    static associate(db) {
        db.Post.belongsTo(db.User, { foreignKey: "userIdx" })
    }
}