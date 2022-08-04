import { db } from '../utils/database';
import { Model, DataTypes, Sequelize } from 'sequelize';

export default class Role extends Model {}
Role.init(
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.fn('now'),
            allowNull: false
        }
    },
    {
        modelName: 'role',
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
        sequelize: db
    }
);
