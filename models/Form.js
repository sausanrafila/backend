import { DataTypes } from 'sequelize';
import db from '../config/Database.js';
import Users from './UserModel.js';

const Form = db.define('Form', {
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    willing_to_attend: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    NameKedubes: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    PICKedubes: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    NoKedubes: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    EmailKedubes: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    NamePerusahaan: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    ProdukPerusahaan: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    positionPerusahaan: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    noPerusahaan: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    emailPerusahaan: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    dateAttendance: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    
    
}, {
    freezeTableName: true
});
Users.hasMany(Form, { foreignKey: 'submitted_by_user_id' });
Form.belongsTo(Users, { foreignKey: 'submitted_by_user_id', as: 'Submitter' });

export default Form;
