const express = require('express');
const router = express.Router();
const messsageApi_controller = require('../controllers/MessageApi');
const { TokenCheckMiddleware } = require('../util/middleware.js');
router.get("/web-hook",messsageApi_controller.messageApiWebHook)
module.exports = router;