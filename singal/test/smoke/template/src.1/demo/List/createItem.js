import Item from './item';

// 补充：优惠商品的处理逻辑
function createDiscount(itemData) {
  return new Proxy(itemData, {
    get(target, key, receiver) {
      if (key === 'name') {
        return `${target[key]}【折扣】`;
      }
      if (key === 'price') {
        return `${target[key] * 0.8}`;
      }
      return target;
    },
  });
}

// 工厂函数
export default function (list, itemData) {
  if (itemData.discount) {
    itemData = createDiscount(itemData);
  }
  return new Item(list, itemData);
}
