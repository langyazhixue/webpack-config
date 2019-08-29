// car
class Car {
  constructor(number){
    this.num = number
  }
}

class Camera {
  shot(car) {
    return {
      num: car.num,
      inTime: Date.now()
    }
  }
}

class Screen { 
  show(car,inTime) {
    console.log('车牌号',car.num)
    console.log('停车时间',Date.now() - inTime)
  }
}

// 停车厂

class Park {
  constructor(floors){
    this.floors = floors || []
    this.carList = {}  // 存储摄像头拍摄返回的车辆信息
    this.camera = new Camera()
    this.screen = new Screen()
  }
  in (car) {
    // 通过摄像头获取信息
    const info = this.camera.shot(car)
    //停到某个停车位
    const i = parseInt(Math.random() * 100)
    const place = this.floors[0].places[i]
    place.in()
    info.place = place
    this.carList[car.num] = info  // 存储这辆车入库的信息
  }
  out (car) {
    const info = this.carList[car.num]
    // 将停车位清空
    const place = info.place
    place.out()
    // 显示时间
    this.screen.show(car,info.inTime)

    // 清空记录 释放内存
    delete this.carList[car.num]
  }
  emptyNum(){
    return this.floors.map(floor => {
      return `${floor.index} 层还有 ${floor.emptyPlaceNum()} 个空闲停车位 `
    }).join('\n')
  }
}

// 层

class Floor {
  constructor(index, places) {
    this.index = index //层数
    this.places = places || []
  }
  emptyPlaceNum(){
    let num = 0
    this.places.forEach( p => {
      if(p.empty) {
        num = num + 1
      }
    })
    return num
  }
}

// 车位

class Place {
  constructor(){
    this.empty = true
  }
  in(){
    this.empty = false
  }
  out(){
    this.empty = true
  }
}

let floors = []

for( let i = 0; i < 3;i ++) {
  const places = []
  for (let j = 0; j <  100; j ++ ) {
    places[j] = new Place()
  }
  floors[i] = new Floor( i + 1, places)
}
const park = new Park(floors)

// 初始化车辆 

const car1 = new Car(100)
const car2 = new Car(200) 
const car3 = new Car(300) 

console.log('第一辆车进入')
console.log(park.emptyNum())
park.in(car1)

console.log('第二辆车进入')
console.log(park.emptyNum())
park.in(car2)


console.log('第一辆车离开')
park.out(car1)

console.log('第一辆车离开')
park.out(car2)


console.log('第三辆车进入')
console.log(park.emptyNum())
park.in(car3)


console.log('第三辆车离开')
park.out(car3)


