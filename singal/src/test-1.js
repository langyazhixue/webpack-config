(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory()
    : typeof define === 'function' && define.amd ? define(factory)
      : (global = global || self, global.zfu = factory());
}(this, () => {
  function strTemplate() {
    console.log('strTemplate');
  }

  function test() {
    console.log('test');
    return 'test';
  }

  /* eslint-disable */

  function htmlTemplate(id, val, split) {
    strTemplate();
    test();
  }

  var main = {
    htmTemplate: htmlTemplate,
    strTemplate: strTemplate,
    test: test
  };

  return main;

}));