// 策略模式

// 有多少会员，写多少class
class OrdinaryUser {
  buy() {
    console.log('普通用户购买')
  }
}

class MemberUser {
  buy() {
    console.log('会员用户购买')
  }
}

class VipUser {
  buy() {
    console.log('vip 用户购买')
  }
}

let u1 = new OrdinaryUser()

u1.buy()

//  