import axios from "axios";

class Service {
  async signup(user) {
    return await axios({
      url: "http://192.168.122.1:3000/signup/",
      method: "POST",
      data: { user }
    });
  }

  async signin(user) {
    return await axios({
      url: "http://192.168.122.1:3000/signin/",
      method: "POST",
      data: { user }
    });
  }
}

export default new Service();
