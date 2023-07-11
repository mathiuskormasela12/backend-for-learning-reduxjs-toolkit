// ========== User Service
// import all modules
import data from '../data.js';

class UserService {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.body = {};
  }

  response(statusCode, data) {
    this.res.writeHead(statusCode, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',  });
    this.res.write(JSON.stringify(data));
    this.res.end();
  }

  getUsers() {
    this.response(200, {
      statusCode: 200,
      data
    })
  }

  addUser() {
    this.req.addListener('data', (data) => {
      this.body = JSON.parse(data.toString());
    })

    this.req.addListener('end', () => {
      if(!this.body.username || !this.body.password) {
        this.response(400, {
          statusCode: 400,
          message: 'Username or password is required'
        })
      } else {
        data.push(this.body);
        this.response(201, {
          statusCode: 201,
          message: 'User Added'
        })
      }
    })
  }
}

export default UserService