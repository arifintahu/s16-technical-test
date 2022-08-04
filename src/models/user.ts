import { db } from '../utils/database';
import { Model, DataTypes, Sequelize } from 'sequelize';

export default class User extends Model {}
User.init(
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        role_id: {
            type: DataTypes.INTEGER
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.fn('now'),
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.fn('now'),
            allowNull: false
        }
    },
    {
        modelName: 'user',
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
        sequelize: db
    }
);
