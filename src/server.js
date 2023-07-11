// ========= Server
// import all modules
import http from 'http';
import UserService from './services/UserService.js';

const server = http.createServer((req, res) => {
  const userService = new UserService(req, res);

  switch(req.url) {
    case '/api/users' :
      if(req.method === 'GET') {
        userService.getUsers();
      } else if(req.method === 'POST') {
        userService.addUser();
      }
    break;
    
    default :
      userService.response(404, {
        statusCode: 404,
        data: []
      })

  }
});

server.listen(3000, () => {
  console.log('The server is being run at http://localhost:3000');
})