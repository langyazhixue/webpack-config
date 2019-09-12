// 命令模式

// 接收者
class Receiver {
  exec() {
    console.log('执行');
  }
}

// 命令者
class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  cmd() {
    console.log('执行命令');
    this.receiver.exec();
  }
}

class Invoker {
  constructor(command) {
    this.command = command;
  }

  invoke() {
    console.log('发布命令');
    this.command.cmd();
  }
}

// 士兵
const solider = new Receiver();

// 小号手
const trumpeter = new Command(solider);

// 将军
const general = new Invoker(trumpeter);

general.invoke();
