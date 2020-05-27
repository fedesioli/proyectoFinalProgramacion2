module.exports = (sequelize, DataTypes) => {

    let cols ={
      id_review:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
        id_serie:{
        type: DataTypes.INTEGER
      },
        id_user:{
        type: DataTypes.INTEGER
      },
      puntaje: {
        type: DataTypes.INTEGER
      },
      texto:{
        type: DataTypes.STRING
      },
      created_at:{
        type: DataTypes.DATE
      },
      updated_at:{
        type: DataTypes.DATE
      }
  
    }
    let config  ={
      tableName: "reviews",
      timestamps: false,
    }
  
    const reviews = sequelize.define("reviews", cols, config);
    reviews.associate = function(models){
      reviews.belongsTo(models.users, {
        as: "user",
       foreignKey: "id_user"
       })
    }
    return reviews
    
  }