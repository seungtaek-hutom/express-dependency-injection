class HelloService {
  constructor(helloModel) {
    this.helloModel = helloModel
  }

  sayHello() {
    console.log(`hello ${this.helloModel.getName()}`);
  }
}

module.exports = HelloService;