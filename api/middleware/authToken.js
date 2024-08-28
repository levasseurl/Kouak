const jwt = require('jsonwebtoken');

authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // const secretKey = "cfbe5dfb83fedec80b23928f460ce14542197712f723cc74781ca12be0ff754efc0f20fcb66bbad9ca399d05e84bd1a354b6d5c3f89e0f65085a1f06164ad2a04b737547ef9b815b777a6bc5a176598cffd7956f9e64f3da62dc657c989f4c9896e24f1c599b89e43931c08215f28ce110f90bfc2c5c224dc715f84b8f3178ace2a85b7ee6de98ebb3000305c5cb6eb6b4c2b151882824893fd9b2339d880cd8bed37d416add8908cca914891d10066b432e56d9ff0fbb3651b6122001245a72cb765637f411bf6dbc8d07da0eb539bb6870bb3a9d91b2056fc564dc611b6c4c787cf0c044675d586e69aef9177925940fdc918e9ccfbde7e1f67e0e165c7a42"

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
}

module.exports = { authenticateToken };