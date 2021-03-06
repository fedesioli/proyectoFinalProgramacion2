module.exports = (sequelize, DataTypes) => {

  let cols ={
    id_user:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username:{
      type: DataTypes.STRING
    },
    birth_date: {
      type: DataTypes.DATE
    },
    email:{
      type: DataTypes.STRING
    },
    password:{  
      type: DataTypes.INTEGER
    }

  }
  let config  ={
    tableName: "users",
    timestamps: false,
  }

  const users = sequelize.define("users", cols, config);
  users.associate = function(models){
    users.hasMany(models.reviews, {
        as: "reviews",
        foreignKey: "id_user"
    })}
  return users
}