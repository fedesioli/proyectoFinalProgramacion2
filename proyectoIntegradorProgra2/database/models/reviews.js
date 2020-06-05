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
      },
      AlreadyLiked:{
        type: DataTypes.VIRTUAL
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
       reviews.belongsToMany(models.users, {
        as: "likes",
        through: "megusta",
       foreignKey: "id_review",
       otherKey: "id_user",
       })
    }
    return reviews
    
  }