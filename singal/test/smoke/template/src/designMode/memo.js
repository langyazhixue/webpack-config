//  备忘录模式

// 备忘对象(备忘的内容作为一个对象)
class Memento {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

// 备忘录
class CareTaker {
  constructor() {
    this.list = [];
  }

  add(memento) {
    this.list.push(memento);
  }

  get(index) {
    console.log(this.list);
    return this.list[index];
  }
}

// 编辑器

class Editor {
  constructor() {
    this.content = null;
  }

  setContent(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  saveContentToMemento() {
    return new Memento(this.content);
  }

  getContentFromMemento(memento) {
    this.content = memento.getContent();
  }
}

// 测试代码

const editor = new Editor();

const careTaker = new CareTaker();

editor.setContent('111');

careTaker.add(editor.saveContentToMemento()); // 将当前内容备份

editor.setContent('222');

careTaker.add(editor.saveContentToMemento()); // 将当前内容备份


editor.setContent('444');

console.log(editor.getContent()); // 444
console.log(editor.getContentFromMemento(careTaker.get(1))); // 撤销

console.log(editor.getContent()); // 222

// 将当前内容备份
