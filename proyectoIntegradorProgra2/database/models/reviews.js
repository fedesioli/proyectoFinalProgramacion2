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
      }
  
    }
    let config  ={
      tableName: "reviews",
      timestamps: false,
    }
  
    const reviews = sequelize.define("reviews", cols, config);
    
    reviews.associate = function(models){
        reviews.belongsTo(models.users, {
            as: "usuario",
            Foreignkey: "id_user"
        })
    }
  }