const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
      instanceMethods: {
          authenticate: async function(email, password){
            const user = await User.find({
              email,
            });
            if (user) {
              const result = await bcrypt.compare(password, user.password);
              return result === true ? user : null;
            }
          
            return null;
          },
          getFullname: function() {
              return [this.email, this.password].join(' ');
          }
      }
  })

  User.addHook('beforeCreate', (user, options) => {
    try {
      const hash = await bcrypt.hash(this.password, 10);
      user.password = hash;
      next();
    } catch (err) {
      next(err);
    }
  });
  
  
  return User;
};