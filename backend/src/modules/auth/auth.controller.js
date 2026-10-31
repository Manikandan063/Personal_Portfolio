const authService = require('./auth.service');

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await authService.loginAdmin(username, password);
    
    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Logout successful'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, logout };
