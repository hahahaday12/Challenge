// day 05의 id(자동생성), content, createdat, updatedat, userIdx(선택)
// table name posts 스키마 만들어오기

// 관계 설정 belongTo, belongToMany, hasOne, hasMany
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
    //관계를 받는것 , 자동으로 생김 userIdx 에도 적어줄것이기 때문에. 
    static associate(db) {
        db.Post.belongsTo(db.User, { foreignKey: "userIdx" })
    }
}
