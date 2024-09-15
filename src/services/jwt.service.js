const jwt = require('jsonwebtoken');
const secretKey = 'travel-app-support';
const JwtService = {
  generateTokens: (user) => {
    const payload = {
      userId: user.id,
      username: user.username,
      email: user.email,
    };

    const expiresIn = 30 * 24 * 60 * 60;
    const accessTokenOptions = {
      expiresIn: expiresIn,
    };

    const accessToken = jwt.sign(payload, secretKey, accessTokenOptions);

    const refreshTokenOptions = {
      expiresIn: 60 * 24 * 60 * 60,
    };

    const refreshToken = jwt.sign(payload, secretKey, refreshTokenOptions);

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  },
  verifyToken: (token, onResult) => {
    let decoded = null;
    try {
      decoded = jwt.verify(token, secretKey);
    } catch (error) {
      console.error('Error verifying token:========>', error.message);
      return onResult(null, error);
    }
    onResult(decoded, null);
  },
  decodeToken: (token) => {
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded;
    } catch (error) {
      console.error('Error verifying token:', error.message);
      return null;
    }
  },
};

module.exports = JwtService;
