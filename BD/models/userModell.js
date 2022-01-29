module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("usuario", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
      tableName: "usuario",
      timestamps:false,
  }
  
  );
  return User
};
