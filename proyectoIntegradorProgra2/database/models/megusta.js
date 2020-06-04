module.exports = (sequelize, DataTypes) => {

  let cols ={
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_review:{
      type: DataTypes.INTEGER
    },
    id_user:{
      type: DataTypes.INTEGER
    },

  }
  let config  ={
    tableName: "megusta",
    timestamps: false,
  }

  const megusta = sequelize.define("megusta", cols, config);
  // reviews.associate = function(models){
  //   reviews.belongsTo(models.users, {
  //     as: "user",
  //    foreignKey: "id_user"
  //    })
  // }
  return megusta
  
}