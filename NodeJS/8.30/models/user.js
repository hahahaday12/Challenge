import Sequelize from 'sequelize';

export default class User extends Sequelize.Model {
    static init(sequelize){
        return super .init(
            {
            email: {
                type: Sequelize.STRING(100),
                allowNull: false, 
                comment: "이메일",
            },
            password: {
                type: Sequelize.STRING(200),
                allowNull: false,
                comment: "비밀번호",
            },
        },
        {
            sequelize,
            timestamps: true,
            modelName: "User",
            tableName: "users",
            charset: "utf8",
            collage: "utf8_general_ci",
            }
        );
    }
    static associate(db){
// 관계 설정 1:1 , 다대다 , 다대일 이렇게. 
    }
}