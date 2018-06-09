const fs = require('fs');

class App {
  constructor(){

  }

  async getResponse() {
    console.log('Here');
    const res = await fs.readdir('./');

    console.log(res);
  }
}
const app = new App();

app.getResponse();