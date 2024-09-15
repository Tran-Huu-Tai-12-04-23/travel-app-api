const jwtService = require('../services/jwt.service');

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Token not provided' });
  }

  jwtService.verifyToken(token, (decoded, err) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
    req.decodeData = decoded;
    next();
  });
}

module.exports = verifyToken;
