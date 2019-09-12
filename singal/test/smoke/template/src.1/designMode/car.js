class Car {
  constructor(number, name) {
    this.number = number;
    this.name = name;
  }
}

class Kuaiche extends Car {
  constructor(number, name) {
    super(number, name);
    this.price = 1;
  }
}

class Zhuanche extends Car {
  constructor(number, name) {
    super(number, name);
    this.price = 2;
  }
}

class Trip {
  constructor(car) {
    this.car = car;
  }

  start() {
    console.log(`行程开始：名称：${this.car.name},车牌号：${this.car.number}`);
  }

  end() {
    console.log(`行程结束：总价：${this.car.price * 5}`);
  }
}

const car = new Kuaiche(100, '桑塔纳');
const trip = new Trip(car);
trip.start();
trip.end();
