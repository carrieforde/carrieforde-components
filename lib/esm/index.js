import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Greeting-module_greeting__x1fEi {\n  font-weight: 700;\n}\n";
var s = {"greeting":"Greeting-module_greeting__x1fEi"};
styleInject(css_248z);

var Greeting = function (_a) {
    var name = _a.name;
    return (React.createElement("p", { className: s.greeting },
        "Hello ",
        name));
};

export { Greeting };
//# sourceMappingURL=index.js.map
