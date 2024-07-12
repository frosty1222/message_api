const userRouter = require('./user');
const messageApi = require('./messageApi');
function route(app) {
  app.use('/api/user',userRouter);
  app.use('/api/message',messageApi);
}
module.exports = route;