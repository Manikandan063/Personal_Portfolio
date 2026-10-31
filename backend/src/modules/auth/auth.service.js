const Admin = require('../../models/Admin');
const { comparePassword } = require('../../utils/password');
const { generateToken } = require('../../utils/jwt');

const loginAdmin = async (username, password) => {
  const admin = await Admin.findOne({ where: { username } });
  
  if (!admin) {
    const error = new Error('Invalid credentials');
    error.status = 401;
    throw error;
  }

  const isMatch = await comparePassword(password, admin.password);
  
  if (!isMatch) {
    const error = new Error('Invalid credentials');
    error.status = 401;
    throw error;
  }

  const token = generateToken({ id: admin.id, username: admin.username });
  
  return {
    admin: {
      id: admin.id,
      username: admin.username
    },
    token
  };
};

module.exports = { loginAdmin };
