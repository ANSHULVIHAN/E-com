const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  
};





/*const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("Unauthorized");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) {
      return res.status(403).json(err);
    }

    if (!req.user) {
      return res.status(403).json("User not authenticated");
    }

    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not authorized");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) {
      return res.status(403).json(err);
    }

    if (!req.user) {
      return res.status(403).json("User not authenticated");
    }

    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not authorized as an admin");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };





/*const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
   if (authHeader) {
    const Token=authHeader.split("")[1]
    jwt.verify(authHeader, process.env.JWT_SEC, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("Unauthorized");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) {
      return res.status(403).json(err);
    }

    if (!req.user) {
      return res.status(403).json("User not authenticated");
    }

    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not authorized");
    }
  });
};

const verifyTokenAndAdmin=(req,res,next)=>{
  verifyTokenAndAdmin(req,res,()=>{
    if(req.user.isAdmin){
      next();
    } else {
      res.status(403).json("you are not allowed")
    }
  })
}

module.exports = { verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin };
*/