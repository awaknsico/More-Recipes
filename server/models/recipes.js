export default (sequelize, DataTypes) => {
    const Recipes = sequelize.define('Recipes', {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      ingredients: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      directions: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      }
    });
  
    Recipes.associate = (models) => {
      // define associations here
    };
    return Recipes;
  };