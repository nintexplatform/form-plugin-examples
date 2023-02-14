import { i, _ as _decorate$1, s, e, y, a as e$1 } from './query-assigned-elements-5558b813.js';

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _decorate(decorators, factory, superClass, mixins) {
  var api = _getDecoratorsApi();
  if (mixins) {
    for (var i = 0; i < mixins.length; i++) {
      api = mixins[i](api);
    }
  }
  var r = factory(function initialize(O) {
    api.initializeInstanceElements(O, decorated.elements);
  }, superClass);
  var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
  api.initializeClassElements(r.F, decorated.elements);
  return api.runClassFinishers(r.F, decorated.finishers);
}
function _getDecoratorsApi() {
  _getDecoratorsApi = function _getDecoratorsApi() {
    return api;
  };
  var api = {
    elementsDefinitionOrder: [["method"], ["field"]],
    initializeInstanceElements: function initializeInstanceElements(O, elements) {
      ["method", "field"].forEach(function (kind) {
        elements.forEach(function (element) {
          if (element.kind === kind && element.placement === "own") {
            this.defineClassElement(O, element);
          }
        }, this);
      }, this);
    },
    initializeClassElements: function initializeClassElements(F, elements) {
      var proto = F.prototype;
      ["method", "field"].forEach(function (kind) {
        elements.forEach(function (element) {
          var placement = element.placement;
          if (element.kind === kind && (placement === "static" || placement === "prototype")) {
            var receiver = placement === "static" ? F : proto;
            this.defineClassElement(receiver, element);
          }
        }, this);
      }, this);
    },
    defineClassElement: function defineClassElement(receiver, element) {
      var descriptor = element.descriptor;
      if (element.kind === "field") {
        var initializer = element.initializer;
        descriptor = {
          enumerable: descriptor.enumerable,
          writable: descriptor.writable,
          configurable: descriptor.configurable,
          value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
      }
      Object.defineProperty(receiver, element.key, descriptor);
    },
    decorateClass: function decorateClass(elements, decorators) {
      var newElements = [];
      var finishers = [];
      var placements = {
        "static": [],
        prototype: [],
        own: []
      };
      elements.forEach(function (element) {
        this.addElementPlacement(element, placements);
      }, this);
      elements.forEach(function (element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = this.decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
      }, this);
      if (!decorators) {
        return {
          elements: newElements,
          finishers: finishers
        };
      }
      var result = this.decorateConstructor(newElements, decorators);
      finishers.push.apply(finishers, result.finishers);
      result.finishers = finishers;
      return result;
    },
    addElementPlacement: function addElementPlacement(element, placements, silent) {
      var keys = placements[element.placement];
      if (!silent && keys.indexOf(element.key) !== -1) {
        throw new TypeError("Duplicated element (" + element.key + ")");
      }
      keys.push(element.key);
    },
    decorateElement: function decorateElement(element, placements) {
      var extras = [];
      var finishers = [];
      for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
        var keys = placements[element.placement];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = this.fromElementDescriptor(element);
        var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        this.addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) {
          finishers.push(elementFinisherExtras.finisher);
        }
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
          for (var j = 0; j < newExtras.length; j++) {
            this.addElementPlacement(newExtras[j], placements);
          }
          extras.push.apply(extras, newExtras);
        }
      }
      return {
        element: element,
        finishers: finishers,
        extras: extras
      };
    },
    decorateConstructor: function decorateConstructor(elements, decorators) {
      var finishers = [];
      for (var i = decorators.length - 1; i >= 0; i--) {
        var obj = this.fromClassDescriptor(elements);
        var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) {
          finishers.push(elementsAndFinisher.finisher);
        }
        if (elementsAndFinisher.elements !== undefined) {
          elements = elementsAndFinisher.elements;
          for (var j = 0; j < elements.length - 1; j++) {
            for (var k = j + 1; k < elements.length; k++) {
              if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) {
                throw new TypeError("Duplicated element (" + elements[j].key + ")");
              }
            }
          }
        }
      }
      return {
        elements: elements,
        finishers: finishers
      };
    },
    fromElementDescriptor: function fromElementDescriptor(element) {
      var obj = {
        kind: element.kind,
        key: element.key,
        placement: element.placement,
        descriptor: element.descriptor
      };
      var desc = {
        value: "Descriptor",
        configurable: true
      };
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      if (element.kind === "field") obj.initializer = element.initializer;
      return obj;
    },
    toElementDescriptors: function toElementDescriptors(elementObjects) {
      if (elementObjects === undefined) return;
      return _toArray(elementObjects).map(function (elementObject) {
        var element = this.toElementDescriptor(elementObject);
        this.disallowProperty(elementObject, "finisher", "An element descriptor");
        this.disallowProperty(elementObject, "extras", "An element descriptor");
        return element;
      }, this);
    },
    toElementDescriptor: function toElementDescriptor(elementObject) {
      var kind = String(elementObject.kind);
      if (kind !== "method" && kind !== "field") {
        throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
      }
      var key = _toPropertyKey(elementObject.key);
      var placement = String(elementObject.placement);
      if (placement !== "static" && placement !== "prototype" && placement !== "own") {
        throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
      }
      var descriptor = elementObject.descriptor;
      this.disallowProperty(elementObject, "elements", "An element descriptor");
      var element = {
        kind: kind,
        key: key,
        placement: placement,
        descriptor: Object.assign({}, descriptor)
      };
      if (kind !== "field") {
        this.disallowProperty(elementObject, "initializer", "A method descriptor");
      } else {
        this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
        this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
        this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
        element.initializer = elementObject.initializer;
      }
      return element;
    },
    toElementFinisherExtras: function toElementFinisherExtras(elementObject) {
      var element = this.toElementDescriptor(elementObject);
      var finisher = _optionalCallableProperty(elementObject, "finisher");
      var extras = this.toElementDescriptors(elementObject.extras);
      return {
        element: element,
        finisher: finisher,
        extras: extras
      };
    },
    fromClassDescriptor: function fromClassDescriptor(elements) {
      var obj = {
        kind: "class",
        elements: elements.map(this.fromElementDescriptor, this)
      };
      var desc = {
        value: "Descriptor",
        configurable: true
      };
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      return obj;
    },
    toClassDescriptor: function toClassDescriptor(obj) {
      var kind = String(obj.kind);
      if (kind !== "class") {
        throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
      }
      this.disallowProperty(obj, "key", "A class descriptor");
      this.disallowProperty(obj, "placement", "A class descriptor");
      this.disallowProperty(obj, "descriptor", "A class descriptor");
      this.disallowProperty(obj, "initializer", "A class descriptor");
      this.disallowProperty(obj, "extras", "A class descriptor");
      var finisher = _optionalCallableProperty(obj, "finisher");
      var elements = this.toElementDescriptors(obj.elements);
      return {
        elements: elements,
        finisher: finisher
      };
    },
    runClassFinishers: function runClassFinishers(constructor, finishers) {
      for (var i = 0; i < finishers.length; i++) {
        var newConstructor = (0, finishers[i])(constructor);
        if (newConstructor !== undefined) {
          if (typeof newConstructor !== "function") {
            throw new TypeError("Finishers must return a constructor.");
          }
          constructor = newConstructor;
        }
      }
      return constructor;
    },
    disallowProperty: function disallowProperty(obj, name, objectType) {
      if (obj[name] !== undefined) {
        throw new TypeError(objectType + " can't have a ." + name + " property.");
      }
    }
  };
  return api;
}
function _createElementDescriptor(def) {
  var key = _toPropertyKey(def.key);
  var descriptor;
  if (def.kind === "method") {
    descriptor = {
      value: def.value,
      writable: true,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "get") {
    descriptor = {
      get: def.value,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "set") {
    descriptor = {
      set: def.value,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "field") {
    descriptor = {
      configurable: true,
      writable: true,
      enumerable: true
    };
  }
  var element = {
    kind: def.kind === "field" ? "field" : "method",
    key: key,
    placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype",
    descriptor: descriptor
  };
  if (def.decorators) element.decorators = def.decorators;
  if (def.kind === "field") element.initializer = def.value;
  return element;
}
function _coalesceGetterSetter(element, other) {
  if (element.descriptor.get !== undefined) {
    other.descriptor.get = element.descriptor.get;
  } else {
    other.descriptor.set = element.descriptor.set;
  }
}
function _coalesceClassElements(elements) {
  var newElements = [];
  var isSameElement = function isSameElement(other) {
    return other.kind === "method" && other.key === element.key && other.placement === element.placement;
  };
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var other;
    if (element.kind === "method" && (other = newElements.find(isSameElement))) {
      if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
        if (_hasDecorators(element) || _hasDecorators(other)) {
          throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
        }
        other.descriptor = element.descriptor;
      } else {
        if (_hasDecorators(element)) {
          if (_hasDecorators(other)) {
            throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ").");
          }
          other.decorators = element.decorators;
        }
        _coalesceGetterSetter(element, other);
      }
    } else {
      newElements.push(element);
    }
  }
  return newElements;
}
function _hasDecorators(element) {
  return element.decorators && element.decorators.length;
}
function _isDataDescriptor(desc) {
  return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}
function _optionalCallableProperty(obj, name) {
  var value = obj[name];
  if (value !== undefined && typeof value !== "function") {
    throw new TypeError("Expected '" + name + "' to be a function");
  }
  return value;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */
const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = typeof window !== 'undefined' &&
    window.customElements != null &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */
const removeNodes = (container, start, end = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for (let i = 0; i < length; i++) {
                        if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({ type: 'attribute', index, name, strings: statics });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split(markerRegex);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        let insert;
                        let s = strings[i];
                        if (s === '') {
                            insert = createMarker();
                        }
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                s = s.slice(0, match.index) + match[1] +
                                    match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            }
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({ type: 'node', index: ++index });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    }
                    else {
                        node.data = strings[lastIndex];
                    }
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({ type: 'node', index });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) {
                        node.data = '';
                    }
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({ type: 'node', index: -1 });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = 
// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari does not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = isCEPolyfill ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
            part = parts[partIndex];
            if (!isTemplatePartActive(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while (nodeIndex < part.index) {
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            }
            else {
                this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            }
            partIndex++;
        }
        if (isCEPolyfill) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = window.trustedTypes &&
    trustedTypes.createPolicy('lit-html', { createHTML: (s) => s });
const commentMarker = ` ${marker} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment position.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = lastAttributeNameRegex.exec(s);
            if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? commentMarker : nodeMarker);
            }
            else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                    attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] +
                    marker;
            }
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        let value = this.getHTML();
        if (policy !== undefined) {
            // this is secure because `this.strings` is a TemplateStringsArray.
            // TODO: validate this when
            // https://github.com/tc39/proposal-array-is-template-object is
            // implemented.
            value = policy.createHTML(value);
        }
        template.innerHTML = value;
        return template;
    }
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
const isIterable = (value) => {
    return Array.isArray(value) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        const parts = this.parts;
        // If we're assigning an attribute via syntax like:
        //    attr="${foo}"  or  attr=${foo}
        // but not
        //    attr="${foo} ${bar}" or attr="${foo} baz"
        // then we don't want to coerce the attribute value into one long
        // string. Instead we want to just return the value itself directly,
        // so that sanitizeDOMValue can get the actual value rather than
        // String(value)
        // The exception is if v is an array, in which case we do want to smash
        // it together into a string without calling String() on the array.
        //
        // This also allows trusted values (when using TrustedTypes) being
        // assigned to DOM sinks without being stringified in the process.
        if (l === 1 && strings[0] === '' && strings[1] === '') {
            const v = parts[0].value;
            if (typeof v === 'symbol') {
                return String(v);
            }
            if (typeof v === 'string' || !isIterable(v)) {
                return v;
            }
        }
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !isIterable(v)) {
                    text += typeof v === 'string' ? v : String(v);
                }
                else {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
/**
 * A Part that controls all or part of an attribute value.
 */
class AttributePart {
    constructor(committer) {
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!isDirective(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (isDirective(this.value)) {
            const directive = this.value;
            this.value = noChange;
            directive(this);
        }
        if (this.value === noChange) {
            return;
        }
        this.committer.commit();
    }
}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */
class NodePart {
    constructor(options) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(createMarker());
        this.endNode = container.appendChild(createMarker());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part.__insert(this.startNode = createMarker());
        part.__insert(this.endNode = createMarker());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref.__insert(this.startNode = createMarker());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        if (this.startNode.parentNode === null) {
            return;
        }
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === noChange) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this.__commitText(value);
            }
        }
        else if (value instanceof TemplateResult) {
            this.__commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this.__commitNode(value);
        }
        else if (isIterable(value)) {
            this.__commitIterable(value);
        }
        else if (value === nothing) {
            this.value = nothing;
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this.__commitText(value);
        }
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
        }
        else {
            this.__commitNode(document.createTextNode(valueAsString));
        }
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof TemplateInstance &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new TemplateInstance(template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        if (this.__pendingValue === noChange) {
            return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
            this.value = value;
        }
        this.__pendingValue = noChange;
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(() => {
    try {
        const options = {
            get capture() {
                eventOptionsSupported = true;
                return false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.addEventListener('test', options, options);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.removeEventListener('test', options, options);
    }
    catch (_e) {
        // event options not supported
    }
})();
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        if (this.__pendingValue === noChange) {
            return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = noChange;
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new PropertyCommitter(element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') {
            return [new EventPart(element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new BooleanAttributePart(element, name.slice(1), strings)];
        }
        const committer = new AttributeCommitter(element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new NodePart(options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(marker);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new Template(result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render$1 = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        removeNodes(container, container.firstChild);
        parts.set(container, part = new NodePart(Object.assign({ templateFactory }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') {
    (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new TemplateResult(strings, values, 'html', defaultTemplateProcessor);

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// IE11 doesn't support classList on SVG elements, so we emulate it with a Set
class ClassList {
    constructor(element) {
        this.classes = new Set();
        this.changed = false;
        this.element = element;
        const classList = (element.getAttribute('class') || '').split(/\s+/);
        for (const cls of classList) {
            this.classes.add(cls);
        }
    }
    add(cls) {
        this.classes.add(cls);
        this.changed = true;
    }
    remove(cls) {
        this.classes.delete(cls);
        this.changed = true;
    }
    commit() {
        if (this.changed) {
            let classString = '';
            this.classes.forEach((cls) => classString += cls + ' ');
            this.element.setAttribute('class', classString);
        }
    }
}
/**
 * Stores the ClassInfo object applied to a given AttributePart.
 * Used to unset existing values when a new ClassInfo object is applied.
 */
const previousClassesCache = new WeakMap();
/**
 * A directive that applies CSS classes. This must be used in the `class`
 * attribute and must be the only part used in the attribute. It takes each
 * property in the `classInfo` argument and adds the property name to the
 * element's `class` if the property value is truthy; if the property value is
 * falsey, the property name is removed from the element's `class`. For example
 * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
 * @param classInfo {ClassInfo}
 */
const classMap = directive((classInfo) => (part) => {
    if (!(part instanceof AttributePart) || (part instanceof PropertyPart) ||
        part.committer.name !== 'class' || part.committer.parts.length > 1) {
        throw new Error('The `classMap` directive must be used in the `class` attribute ' +
            'and must be the only part in the attribute.');
    }
    const { committer } = part;
    const { element } = committer;
    let previousClasses = previousClassesCache.get(part);
    if (previousClasses === undefined) {
        // Write static classes once
        // Use setAttribute() because className isn't a string on SVG elements
        element.setAttribute('class', committer.strings.join(' '));
        previousClassesCache.set(part, previousClasses = new Set());
    }
    const classList = (element.classList || new ClassList(element));
    // Remove old classes that no longer apply
    // We use forEach() instead of for-of so that re don't require down-level
    // iteration.
    previousClasses.forEach((name) => {
        if (!(name in classInfo)) {
            classList.remove(name);
            previousClasses.delete(name);
        }
    });
    // Add or remove classes based on their classMap value
    for (const name in classInfo) {
        const value = classInfo[name];
        if (value != previousClasses.has(name)) {
            // We explicitly want a loose truthy check of `value` because it seems
            // more convenient that '' and 0 are skipped.
            if (value) {
                classList.add(name);
                previousClasses.add(name);
            }
            else {
                classList.remove(name);
                previousClasses.delete(name);
            }
        }
    }
    if (typeof classList.commit === 'function') {
        classList.commit();
    }
});

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

var freeGlobal$1 = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal$1 || freeSelf || Function('return this')();

var root$1 = root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root$1.Date.now();
};

var now$1 = now;

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/** Built-in value references. */
var Symbol$1 = root$1.Symbol;

var Symbol$2 = Symbol$1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now$1());
  }

  function debounced() {
    var time = now$1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */
function removeNodesFromTemplate(template, nodesToRemove) {
    const { element: { content }, parts } = template;
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let part = parts[partIndex];
    let nodeIndex = -1;
    let removeCount = 0;
    const nodesToRemoveInTemplate = [];
    let currentRemovingNode = null;
    while (walker.nextNode()) {
        nodeIndex++;
        const node = walker.currentNode;
        // End removal if stepped past the removing node
        if (node.previousSibling === currentRemovingNode) {
            currentRemovingNode = null;
        }
        // A node to remove was found in the template
        if (nodesToRemove.has(node)) {
            nodesToRemoveInTemplate.push(node);
            // Track node we're removing
            if (currentRemovingNode === null) {
                currentRemovingNode = node;
            }
        }
        // When removing, increment count by which to adjust subsequent part indices
        if (currentRemovingNode !== null) {
            removeCount++;
        }
        while (part !== undefined && part.index === nodeIndex) {
            // If part is in a removed node deactivate it by setting index to -1 or
            // adjust the index as needed.
            part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
            // go to the next active part.
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            part = parts[partIndex];
        }
    }
    nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
}
const countNodes = (node) => {
    let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
    const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while (walker.nextNode()) {
        count++;
    }
    return count;
};
const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
    for (let i = startIndex + 1; i < parts.length; i++) {
        const part = parts[i];
        if (isTemplatePartActive(part)) {
            return i;
        }
    }
    return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */
function insertNodeIntoTemplate(template, node, refNode = null) {
    const { element: { content }, parts } = template;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    if (refNode === null || refNode === undefined) {
        content.appendChild(node);
        return;
    }
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let insertCount = 0;
    let walkerIndex = -1;
    while (walker.nextNode()) {
        walkerIndex++;
        const walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
            insertCount = countNodes(node);
            refNode.parentNode.insertBefore(node, refNode);
        }
        while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
            // If we've inserted the node, simply adjust all subsequent parts
            if (insertCount > 0) {
                while (partIndex !== -1) {
                    parts[partIndex].index += insertCount;
                    partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                }
                return;
            }
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }
    }
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
let compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === 'undefined') {
    compatibleShadyCSSVersion = false;
}
else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn(`Incompatible ShadyCSS version detected. ` +
        `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
        `@webcomponents/shadycss@1.3.1.`);
    compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */
const shadyTemplateFactory = (scopeName) => (result) => {
    const cacheKey = getTemplateCacheKey(result.type, scopeName);
    let templateCache = templateCaches.get(cacheKey);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(cacheKey, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    const key = result.strings.join(marker);
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        const element = result.getTemplateElement();
        if (compatibleShadyCSSVersion) {
            window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }
        template = new Template(result, element);
        templateCache.keyString.set(key, template);
    }
    templateCache.stringsArray.set(result.strings, template);
    return template;
};
const TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */
const removeStylesFromLitTemplates = (scopeName) => {
    TEMPLATE_TYPES.forEach((type) => {
        const templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
        if (templates !== undefined) {
            templates.keyString.forEach((template) => {
                const { element: { content } } = template;
                // IE 11 doesn't support the iterable param Set constructor
                const styles = new Set();
                Array.from(content.querySelectorAll('style')).forEach((s) => {
                    styles.add(s);
                });
                removeNodesFromTemplate(template, styles);
            });
        }
    });
};
const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */
const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
    shadyRenderSet.add(scopeName);
    // If `renderedDOM` is stamped from a Template, then we need to edit that
    // Template's underlying template element. Otherwise, we create one here
    // to give to ShadyCSS, which still requires one while scoping.
    const templateElement = !!template ? template.element : document.createElement('template');
    // Move styles out of rendered DOM and store.
    const styles = renderedDOM.querySelectorAll('style');
    const { length } = styles;
    // If there are no styles, skip unnecessary work
    if (length === 0) {
        // Ensure prepareTemplateStyles is called to support adding
        // styles via `prepareAdoptedCssText` since that requires that
        // `prepareTemplateStyles` is called.
        //
        // ShadyCSS will only update styles containing @apply in the template
        // given to `prepareTemplateStyles`. If no lit Template was given,
        // ShadyCSS will not be able to update uses of @apply in any relevant
        // template. However, this is not a problem because we only create the
        // template for the purpose of supporting `prepareAdoptedCssText`,
        // which doesn't support @apply at all.
        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        return;
    }
    const condensedStyle = document.createElement('style');
    // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.
    for (let i = 0; i < length; i++) {
        const style = styles[i];
        style.parentNode.removeChild(style);
        condensedStyle.textContent += style.textContent;
    }
    // Remove styles from nested templates in this scope.
    removeStylesFromLitTemplates(scopeName);
    // And then put the condensed style into the "root" template passed in as
    // `template`.
    const content = templateElement.content;
    if (!!template) {
        insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
    }
    else {
        content.insertBefore(condensedStyle, content.firstChild);
    }
    // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    const style = content.querySelector('style');
    if (window.ShadyCSS.nativeShadow && style !== null) {
        // When in native Shadow DOM, ensure the style created by ShadyCSS is
        // included in initially rendered output (`renderedDOM`).
        renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
    }
    else if (!!template) {
        // When no style is left in the template, parts will be broken as a
        // result. To fix this, we put back the style node ShadyCSS removed
        // and then tell lit to remove that node from the template.
        // There can be no style in the template in 2 cases (1) when Shady DOM
        // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
        // is in use ShadyCSS removes the style if it contains no content.
        // NOTE, ShadyCSS creates its own style so we can safely add/remove
        // `condensedStyle` here.
        content.insertBefore(condensedStyle, content.firstChild);
        const removes = new Set();
        removes.add(condensedStyle);
        removeNodesFromTemplate(template, removes);
    }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */
const render = (result, container, options) => {
    if (!options || typeof options !== 'object' || !options.scopeName) {
        throw new Error('The `scopeName` option is required.');
    }
    const scopeName = options.scopeName;
    const hasRendered = parts.has(container);
    const needsScoping = compatibleShadyCSSVersion &&
        container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
        !!container.host;
    // Handle first render to a scope specially...
    const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
    // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.
    const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    render$1(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
    // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.
    if (firstScopeRender) {
        const part = parts.get(renderContainer);
        parts.delete(renderContainer);
        // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
        // that should apply to `renderContainer` even if the rendered value is
        // not a TemplateInstance. However, it will only insert scoped styles
        // into the document if `prepareTemplateStyles` has already been called
        // for the given scope name.
        const template = part.value instanceof TemplateInstance ?
            part.value.template :
            undefined;
        prepareTemplateStyles(scopeName, renderContainer, template);
        removeNodes(container, container.firstChild);
        container.appendChild(renderContainer);
        parts.set(container, part);
    }
    // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSS.styleElement`
    // for dynamic changes.
    if (!hasRendered && needsScoping) {
        window.ShadyCSS.styleElement(container.host);
    }
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a;
/**
 * Use this module if you want to create your own base class extending
 * [[UpdatingElement]].
 * @packageDocumentation
 */
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
window.JSCompiler_renameProperty =
    (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value ? '' : null;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                return value == null ? value : JSON.stringify(value);
        }
        return value;
    },
    fromAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value !== null;
            case Number:
                return value === null ? null : Number(value);
            case Object:
            case Array:
                // Type assert to adhere to Bazel's "must type assert JSON parse" rule.
                return JSON.parse(value);
        }
        return value;
    }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
};
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 1 << 2;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */
const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */
class UpdatingElement extends HTMLElement {
    constructor() {
        super();
        this.initialize();
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this._classProperties.forEach((v, p) => {
            const attr = this._attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this._attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */
    /** @nocollapse */
    static _ensureClassProperties() {
        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
            this._classProperties = new Map();
            // NOTE: Workaround IE11 not supporting Map constructor argument.
            const superProperties = Object.getPrototypeOf(this)._classProperties;
            if (superProperties !== undefined) {
                superProperties.forEach((v, k) => this._classProperties.set(k, v));
            }
        }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();
        this._classProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
            return;
        }
        const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
        const descriptor = this.getPropertyDescriptor(name, key, options);
        if (descriptor !== undefined) {
            Object.defineProperty(this.prototype, name, descriptor);
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */
    static getPropertyDescriptor(name, key, options) {
        return {
            // tslint:disable-next-line:no-any no symbol in index
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this
                    .requestUpdateInternal(name, oldValue, options);
            },
            configurable: true,
            enumerable: true
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */
    static getPropertyOptions(name) {
        return this._classProperties && this._classProperties.get(name) ||
            defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */
    static finalize() {
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        if (!superCtor.hasOwnProperty(finalized)) {
            superCtor.finalize();
        }
        this[finalized] = true;
        this._ensureClassProperties();
        // initialize Map populated in observedAttributes
        this._attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...(typeof Object.getOwnPropertySymbols === 'function') ?
                    Object.getOwnPropertySymbols(props) :
                    []
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeSript lack of support for symbol in
                // index types
                // tslint:disable-next-line:no-any no symbol in index
                this.createProperty(p, props[p]);
            }
        }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static _attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false ?
            undefined :
            (typeof attribute === 'string' ?
                attribute :
                (typeof name === 'string' ? name.toLowerCase() : undefined));
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */
    static _valueHasChanged(value, old, hasChanged = notEqual) {
        return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */
    static _propertyValueFromAttribute(value, options) {
        const type = options.type;
        const converter = options.converter || defaultConverter;
        const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
        return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */
    static _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) {
            return;
        }
        const type = options.type;
        const converter = options.converter;
        const toAttribute = converter && converter.toAttribute ||
            defaultConverter.toAttribute;
        return toAttribute(value, type);
    }
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    initialize() {
        this._updateState = 0;
        this._updatePromise =
            new Promise((res) => this._enableUpdatingResolver = res);
        this._changedProperties = new Map();
        this._saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdateInternal();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    _saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor
            ._classProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                const value = this[p];
                delete this[p];
                if (!this._instanceProperties) {
                    this._instanceProperties = new Map();
                }
                this._instanceProperties.set(p, value);
            }
        });
    }
    /**
     * Applies previously saved instance properties.
     */
    _applyInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        // tslint:disable-next-line:no-any
        this._instanceProperties.forEach((v, p) => this[p] = v);
        this._instanceProperties = undefined;
    }
    connectedCallback() {
        // Ensure first connection completes an update. Updates cannot complete
        // before connection.
        this.enableUpdating();
    }
    enableUpdating() {
        if (this._enableUpdatingResolver !== undefined) {
            this._enableUpdatingResolver();
            this._enableUpdatingResolver = undefined;
        }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */
    disconnectedCallback() {
    }
    /**
     * Synchronizes property values when attributes change.
     */
    attributeChangedCallback(name, old, value) {
        if (old !== value) {
            this._attributeToProperty(name, value);
        }
    }
    _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        const ctor = this.constructor;
        const attr = ctor._attributeNameForProperty(name, options);
        if (attr !== undefined) {
            const attrValue = ctor._propertyValueToAttribute(value, options);
            // an undefined value does not change the attribute.
            if (attrValue === undefined) {
                return;
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
    }
    _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
            return;
        }
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        // tslint:disable-next-line:no-unnecessary-type-assertion
        const propName = ctor._attributeToPropertyMap.get(name);
        if (propName !== undefined) {
            const options = ctor.getPropertyOptions(propName);
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
            this[propName] =
                // tslint:disable-next-line:no-any
                ctor._propertyValueFromAttribute(value, options);
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
    }
    /**
     * This protected version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */
    requestUpdateInternal(name, oldValue, options) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            const ctor = this.constructor;
            options = options || ctor.getPropertyOptions(name);
            if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                if (!this._changedProperties.has(name)) {
                    this._changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true &&
                    !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                    if (this._reflectingProperties === undefined) {
                        this._reflectingProperties = new Map();
                    }
                    this._reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this._hasRequestedUpdate && shouldRequestUpdate) {
            this._updatePromise = this._enqueueUpdate();
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */
    requestUpdate(name, oldValue) {
        this.requestUpdateInternal(name, oldValue);
        return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async _enqueueUpdate() {
        this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this._updatePromise;
        }
        catch (e) {
            // Ignore any previous errors. We only care that the previous cycle is
            // done. Any error should have been handled in the previous update.
        }
        const result = this.performUpdate();
        // If `performUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this._hasRequestedUpdate;
    }
    get _hasRequestedUpdate() {
        return (this._updateState & STATE_UPDATE_REQUESTED);
    }
    get hasUpdated() {
        return (this._updateState & STATE_HAS_UPDATED);
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */
    performUpdate() {
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this._hasRequestedUpdate) {
            return;
        }
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) {
            this._applyInstanceProperties();
        }
        let shouldUpdate = false;
        const changedProperties = this._changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.update(changedProperties);
            }
            else {
                this._markUpdated();
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this._markUpdated();
            throw e;
        }
        if (shouldUpdate) {
            if (!(this._updateState & STATE_HAS_UPDATED)) {
                this._updateState = this._updateState | STATE_HAS_UPDATED;
                this.firstUpdated(changedProperties);
            }
            this.updated(changedProperties);
        }
    }
    _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */
    get updateComplete() {
        return this._getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     * @deprecated Override `getUpdateComplete()` instead for forward
     *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
     */
    _getUpdateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async getUpdateComplete() {
     *       await super.getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */
    getUpdateComplete() {
        return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    update(_changedProperties) {
        if (this._reflectingProperties !== undefined &&
            this._reflectingProperties.size > 0) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
            this._reflectingProperties = undefined;
        }
        this._markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    updated(_changedProperties) {
    }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */
    firstUpdated(_changedProperties) {
    }
}
_a = finalized;
/**
 * Marks class as having finished creating properties.
 */
UpdatingElement[_a] = true;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const legacyCustomElement = (tagName, clazz) => {
    window.customElements.define(tagName, clazz);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // tslint:disable-next-line:no-any
    return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher(clazz) {
            window.customElements.define(tagName, clazz);
        }
    };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```
 * @customElement('my-element')
 * class MyElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The name of the custom element to define.
 */
const customElement = (tagName) => (classOrDescriptor) => (typeof classOrDescriptor === 'function') ?
    legacyCustomElement(tagName, classOrDescriptor) :
    standardCustomElement(tagName, classOrDescriptor);
const standardProperty = (options, element) => {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' && element.descriptor &&
        !('value' in element.descriptor)) {
        return Object.assign(Object.assign({}, element), { finisher(clazz) {
                clazz.createProperty(element.key, options);
            } });
    }
    else {
        // createProperty() takes care of defining the property, but we still
        // must return some kind of descriptor, so return a descriptor for an
        // unused prototype field. The finisher calls createProperty().
        return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            initializer() {
                if (typeof element.initializer === 'function') {
                    this[element.key] = element.initializer.call(this);
                }
            },
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            }
        };
    }
};
const legacyProperty = (options, proto, name) => {
    proto.constructor
        .createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
 * supplied to configure property features.
 *
 * This decorator should only be used for public fields. Private or protected
 * fields should use the [[`internalProperty`]] decorator.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function property(options) {
    // tslint:disable-next-line:no-any decorator
    return (protoOrDescriptor, name) => (name !== undefined) ?
        legacyProperty(options, protoOrDescriptor, name) :
        standardProperty(options, protoOrDescriptor);
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 * once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function query(selector, cache) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        };
        if (cache) {
            const prop = name !== undefined ? name : protoOrDescriptor.key;
            const key = typeof prop === 'symbol' ? Symbol() : `__${prop}`;
            descriptor.get = function () {
                if (this[key] === undefined) {
                    (this[key] =
                        this.renderRoot.querySelector(selector));
                }
                return this[key];
            };
        }
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
const legacyQuery = (descriptor, proto, name) => {
    Object.defineProperty(proto, name, descriptor);
};
const standardQuery = (descriptor, element) => ({
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
});

/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = (window.ShadowRoot) &&
    (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) &&
    ('adoptedStyleSheets' in Document.prototype) &&
    ('replace' in CSSStyleSheet.prototype);
const constructionToken = Symbol();
class CSSResult {
    constructor(cssText, safeToken) {
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    get styleSheet() {
        if (this._styleSheet === undefined) {
            // Note, if `supportsAdoptingStyleSheets` is true then we assume
            // CSSStyleSheet is constructable.
            if (supportsAdoptingStyleSheets) {
                this._styleSheet = new CSSStyleSheet();
                this._styleSheet.replaceSync(this.cssText);
            }
            else {
                this._styleSheet = null;
            }
        }
        return this._styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
/**
 * Wrap a value for interpolation in a [[`css`]] tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => {
    return new CSSResult(String(value), constructionToken);
};
const textFromCSSResult = (value) => {
    if (value instanceof CSSResult) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
    }
};
/**
 * Template tag which which can be used with LitElement's [[LitElement.styles |
 * `styles`]] property to set element styles. For security reasons, only literal
 * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
 * may be used inside a template string part.
 */
const css = (strings, ...values) => {
    const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, constructionToken);
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions'] || (window['litElementVersions'] = []))
    .push('2.5.1');
/**
 * Sentinal value used to avoid calling lit-html's render function when
 * subclasses do not implement `render`
 */
const renderNotImplemented = {};
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the [[`properties`]] property or the [[`property`]] decorator.
 */
class LitElement extends UpdatingElement {
    /**
     * Return the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * @nocollapse
     */
    static getStyles() {
        return this.styles;
    }
    /** @nocollapse */
    static _getUniqueStyles() {
        // Only gather styles once per class
        if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
            return;
        }
        // Take care not to call `this.getStyles()` multiple times since this
        // generates new CSSResults each time.
        // TODO(sorvell): Since we do not cache CSSResults by input, any
        // shared styles will generate new stylesheet objects, which is wasteful.
        // This should be addressed when a browser ships constructable
        // stylesheets.
        const userStyles = this.getStyles();
        if (Array.isArray(userStyles)) {
            // De-duplicate styles preserving the _last_ instance in the set.
            // This is a performance optimization to avoid duplicated styles that can
            // occur especially when composing via subclassing.
            // The last item is kept to try to preserve the cascade order with the
            // assumption that it's most important that last added styles override
            // previous styles.
            const addStyles = (styles, set) => styles.reduceRight((set, s) => 
            // Note: On IE set.add() does not return the set
            Array.isArray(s) ? addStyles(s, set) : (set.add(s), set), set);
            // Array.from does not work on Set in IE, otherwise return
            // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
            const set = addStyles(userStyles, new Set());
            const styles = [];
            set.forEach((v) => styles.unshift(v));
            this._styles = styles;
        }
        else {
            this._styles = userStyles === undefined ? [] : [userStyles];
        }
        // Ensure that there are no invalid CSSStyleSheet instances here. They are
        // invalid in two conditions.
        // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
        //     this is impossible to check except via .replaceSync or use
        // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
        //     false)
        this._styles = this._styles.map((s) => {
            if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
                // Flatten the cssText from the passed constructible stylesheet (or
                // undetectable non-constructible stylesheet). The user might have
                // expected to update their stylesheets over time, but the alternative
                // is a crash.
                const cssText = Array.prototype.slice.call(s.cssRules)
                    .reduce((css, rule) => css + rule.cssText, '');
                return unsafeCSS(cssText);
            }
            return s;
        });
    }
    /**
     * Performs element initialization. By default this calls
     * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
     * captures any pre-set values for registered properties.
     */
    initialize() {
        super.initialize();
        this.constructor._getUniqueStyles();
        this.renderRoot = this.createRenderRoot();
        // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.
        if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
            this.adoptStyles();
        }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */
    createRenderRoot() {
        return this.attachShadow(this.constructor.shadowRootOptions);
    }
    /**
     * Applies styling to the element shadowRoot using the [[`styles`]]
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */
    adoptStyles() {
        const styles = this.constructor._styles;
        if (styles.length === 0) {
            return;
        }
        // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering
        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
            window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
        }
        else if (supportsAdoptingStyleSheets) {
            this.renderRoot.adoptedStyleSheets =
                styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
        }
        else {
            // This must be done after rendering so the actual style insertion is done
            // in `update`.
            this._needsShimAdoptedStyleSheets = true;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        // Note, first update/render handles styleElement so we only call this if
        // connected after first update.
        if (this.hasUpdated && window.ShadyCSS !== undefined) {
            window.ShadyCSS.styleElement(this);
        }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */
    update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const templateResult = this.render();
        super.update(changedProperties);
        // If render is not implemented by the component, don't call lit-html render
        if (templateResult !== renderNotImplemented) {
            this.constructor
                .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
        }
        // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.
        if (this._needsShimAdoptedStyleSheets) {
            this._needsShimAdoptedStyleSheets = false;
            this.constructor._styles.forEach((s) => {
                const style = document.createElement('style');
                style.textContent = s.cssText;
                this.renderRoot.appendChild(style);
            });
        }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `NodePart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     */
    render() {
        return renderNotImplemented;
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */
LitElement['finalized'] = true;
/**
 * Reference to the underlying library method used to render the element's
 * DOM. By default, points to the `render` method from lit-html's shady-render
 * module.
 *
 * **Most users will never need to touch this property.**
 *
 * This  property should not be confused with the `render` instance method,
 * which should be overridden to define a template for the element.
 *
 * Advanced users creating a new base class based on LitElement can override
 * this property to point to a custom render method with a signature that
 * matches [shady-render's `render`
 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
 *
 * @nocollapse
 */
LitElement.render = render;
/** @nocollapse */
LitElement.shadowRootOptions = { mode: 'open' };

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Settings.
 * @exports CarbonComponents.settings
 * @type Object
 * @property {boolean} [disableAutoInit]
 *   Disables automatic instantiation of components.
 *   By default (`CarbonComponents.disableAutoInit` is `false`),
 *   carbon-components attempts to instantiate components automatically
 *   by searching for elements with `data-component-name` (e.g. `data-loading`) attribute
 *   or upon DOM events (e.g. clicking) on such elements.
 *   See each components' static `.init()` methods for details.
 * @property {string} [prefix=bx]
 *   Brand prefix. Should be in sync with `$prefix` Sass variable in carbon-components/src/globals/scss/_vars.scss.
 * // @todo given that the default value is so long, is it appropriate to put in the JSDoc?
 * @property {string} [selectorTabbable]
 *   A selector selecting tabbable/focusable nodes.
 *   By default selectorTabbable references links, areas, inputs, buttons, selects, textareas,
 *   iframes, objects, embeds, or elements explicitly using tabindex or contenteditable attributes
 *   as long as the element is not `disabled` or the `tabindex="-1"`.
 * @property {string} [selectorFocusable]
 *   CSS selector that selects major nodes that are click focusable
 *   This property is identical to selectorTabbable with the exception of
 *   the `:not([tabindex='-1'])` pseudo class
 */
var settings = {
  prefix: 'bx',
  selectorTabbable: "\n    a[href], area[href], input:not([disabled]):not([tabindex='-1']),\n    button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),\n    textarea:not([disabled]):not([tabindex='-1']),\n    iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]\n  ",
  selectorFocusable: "\n    a[href], area[href], input:not([disabled]),\n    button:not([disabled]),select:not([disabled]),\n    textarea:not([disabled]),\n    iframe, object, embed, *[tabindex], *[contenteditable=true]\n  "
};
var settings_1 = settings;

/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
const {
  prefix: prefix$3
} = settings_1;
/**
 * A selector selecting tabbable nodes.
 * Borrowed from `carbon-angular`. tabbable === focusable.
 */

const selectorTabbable = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true],
  ${prefix$3}-accordion-item,
  ${prefix$3}-btn,
  ${prefix$3}-breadcrumb-link,
  ${prefix$3}-checkbox,
  ${prefix$3}-code-snippet,
  ${prefix$3}-combo-box,
  ${prefix$3}-content-switcher-item,
  ${prefix$3}-copy-button,
  ${prefix$3}-table-header-row,
  ${prefix$3}-table-row,
  ${prefix$3}-table-toolbar-search,
  ${prefix$3}-date-picker-input,
  ${prefix$3}-dropdown,
  ${prefix$3}-input,
  ${prefix$3}-link,
  ${prefix$3}-number-input,
  ${prefix$3}-modal,
  ${prefix$3}-modal-close-button,
  ${prefix$3}-multi-select,
  ${prefix$3}-inline-notification,
  ${prefix$3}-toast-notification,
  ${prefix$3}-overflow-menu,
  ${prefix$3}-overflow-menu-item,
  ${prefix$3}-page-sizes-select,
  ${prefix$3}-pages-select,
  ${prefix$3}-progress-step,
  ${prefix$3}-radio-button,
  ${prefix$3}-search,
  ${prefix$3}-slider,
  ${prefix$3}-slider-input,
  ${prefix$3}-structured-list,
  ${prefix$3}-tab,
  ${prefix$3}-filter-tag,
  ${prefix$3}-textarea,
  ${prefix$3}-clickable-tile,
  ${prefix$3}-expandable-tile,
  ${prefix$3}-radio-tile,
  ${prefix$3}-selectable-tile,
  ${prefix$3}-toggle,
  ${prefix$3}-tooltip,
  ${prefix$3}-tooltip-definition,
  ${prefix$3}-tooltip-icon,
  ${prefix$3}-header-menu,
  ${prefix$3}-header-menu-button,
  ${prefix$3}-header-menu-item,
  ${prefix$3}-header-name,
  ${prefix$3}-header-nav-item,
  ${prefix$3}-side-nav-link,
  ${prefix$3}-side-nav-menu,
  ${prefix$3}-side-nav-menu-item
`; // Because we're going to have a bunch of exports

/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @param Base The base class.
 * @returns A mix-in implementing `.focus()` method that focuses on the first focusable element in the shadow DOM.
 */

const FocusMixin = Base => class extends Base {
  /**
   * Focuses on the first focusable element in the shadow DOM.
   */
  focus() {
    // @ts-ignore: Until `delegatesFocus` is added to `ShadowRoot` definition
    if (this.shadowRoot.delegatesFocus) {
      super.focus();
    } else {
      const delegateTarget = this.shadowRoot.querySelector(selectorTabbable) || this.querySelector(selectorTabbable);

      if (delegateTarget) {
        delegateTarget.focus();
      } else {
        super.focus();
      }
    }
  }

};

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
function on(element) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  element.addEventListener.apply(element, args);
  return {
    release: function release() {
      element.removeEventListener.apply(element, args);
      return null;
    }
  };
}

/**
 * @param Base The base class.
 * @returns A mix-in to handle `formdata` event on the containing form.
 */
const FormMixin = Base => {
  /**
   * A mix-in class to handle `formdata` event on the containing form.
   */
  class FormMixinImpl extends Base {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "_hFormdata", null);
    }

    connectedCallback() {
      // @ts-ignore
      super.connectedCallback();
      const form = this.closest('form');

      if (form) {
        this._hFormdata = on(form, 'formdata', this._handleFormdata.bind(this));
      }
    }

    disconnectedCallback() {
      if (this._hFormdata) {
        this._hFormdata = this._hFormdata.release();
      } // @ts-ignore


      super.disconnectedCallback();
    }

  }

  return FormMixinImpl;
};

/**
 * The format for the event name used by `@HostListener` decorator.
 */
const EVENT_NAME_FORMAT = /^((document|window|parentRoot|shadowRoot):)?([\w-]+)$/;
/**
 * @param Base The base class.
 * @returns A mix-in that sets up and cleans up event listeners defined by `@HostListener` decorator.
 */

const HostListenerMixin = Base => {
  /**
   * A mix-in class that sets up and cleans up event listeners defined by `@HostListener` decorator.
   */
  class HostListenerMixinImpl extends Base {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "_handles", new Set());
    }

    // Not using TypeScript `private` due to: microsoft/TypeScript#17744
    connectedCallback() {
      // @ts-ignore: Until `connectedCallback` is added to `HTMLElement` definition
      super.connectedCallback();
      const hostListeners = this.constructor._hostListeners;
      Object.keys(hostListeners).forEach(listenerName => {
        Object.keys(hostListeners[listenerName]).forEach(type => {
          var _unprefixedType;

          // Parses `document:click`/`window:click` format
          const tokens = EVENT_NAME_FORMAT.exec(type);

          if (!tokens) {
            throw new Error(`Could not parse the event name: ${listenerName}`);
          }

          const [,, targetName, unprefixedType] = tokens;
          const target = {
            document: this.ownerDocument,
            window: this.ownerDocument.defaultView,
            parentRoot: this.getRootNode(),
            shadowRoot: this.shadowRoot
          }[targetName] || this;
          const {
            options
          } = hostListeners[listenerName][type];

          this._handles.add(on(target, (_unprefixedType = this.constructor[unprefixedType]) !== null && _unprefixedType !== void 0 ? _unprefixedType : unprefixedType, this[listenerName], options));
        });
      });
    }

    disconnectedCallback() {
      this._handles.forEach(handle => {
        handle.release();

        this._handles.delete(handle);
      }); // @ts-ignore: Until `disconnectedCallback` is added to `HTMLElement` definition


      super.disconnectedCallback();
    }
    /**
     * The map, keyed by method name, of event listeners that should be attached to host element or host document.
     * @private
     */
    // Not using TypeScript `private` due to: microsoft/TypeScript#17744


  }

  _defineProperty(HostListenerMixinImpl, "_hostListeners", {});

  return HostListenerMixinImpl;
};

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Puts an event listener to an internal table for `@HostListener()`.
 * @param type
 *   The event type. Can be prefixed with `document:` or `window:`.
 *   The event listener is attached to host element's owner document or its default view in such case.
 * @param options The event listener options.
 * @param Clazz The target class.
 * @param name The method name in the given target class that works as the event listener.
 */
const setHostListener = (type, options, Clazz, name) => {
  const hostListeners = Clazz._hostListeners;

  if (!hostListeners) {
    throw new Error('The method `@HostListener()` is defined on has to be of a class that has `HostListerMixin`.');
  }

  if (!hostListeners[name]) {
    hostListeners[name] = {};
  }

  hostListeners[name][type] = {
    options
  };
};
/**
 * @param type
 *   The event type. Can be prefixed with `document:` or `window:`.
 *   The event listener is attached to host element's owner document or its default view in such case.
 * @param options The event listener options.
 * @param descriptor The original class element descriptor of the event listener method.
 * @returns The updated class element descriptor with `@HostListener()` decorator.
 */


const HostListenerStandard = (type, options, descriptor) => {
  const {
    kind,
    key,
    placement
  } = descriptor;

  if (!(kind === 'method' && placement === 'prototype' || kind === 'field' && placement === 'own')) {
    throw new Error('`@HostListener()` must be defined on instance methods, but you may have defined it on static, field, etc.');
  }

  return _objectSpread2(_objectSpread2({}, descriptor), {}, {
    finisher(Clazz) {
      setHostListener(type, options, Clazz, key);
    }

  });
};
/**
 * A decorator to add event listener to the host element, or its `document`/`window`, of a custom element.
 * The `target` must extend `HostListenerMixin`.
 * @param type
 *   The event type. Can be prefixed with `document:` or `window:`.
 *   The event listener is attached to host element's owner document or its default view in such case.
 * @param options The event listener options.
 */


const HostListener = (type, options) => (targetOrDescriptor, name) => typeof name !== 'undefined' ? setHostListener(type, options, targetOrDescriptor.constructor, name) : HostListenerStandard(type, options, targetOrDescriptor);

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const previousValues = new WeakMap();
/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
const ifDefined = directive((value) => (part) => {
    const previousValue = previousValues.get(part);
    if (value === undefined && part instanceof AttributePart) {
        // If the value is undefined, remove the attribute, but only if the value
        // was previously defined.
        if (previousValue !== undefined || !previousValues.has(part)) {
            const name = part.committer.name;
            part.committer.element.removeAttribute(name);
        }
    }
    else if (value !== previousValue) {
        part.setValue(value);
    }
    previousValues.set(part, value);
});

/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * A variant of `if-non-null` which stops rendering if the given value is an emptry string in addition to `null`/`undefined`.
 * @param The value.
 */

var ifNonEmpty = (value => ifDefined(value === '' ? undefined : value !== null && value !== void 0 ? value : undefined));

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var styles$1 = css([
  "a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{padding:0;border:0;margin:0;font:inherit;font-size:100%;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}input[type=text]::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote::after,blockquote::before,q::after,q::before{content:\"\"}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}button{margin:0}html{font-size:100%}body{font-weight:400;font-family:'IBM Plex Sans','Helvetica Neue',Arial,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:'IBM Plex Mono',Menlo,'DejaVu Sans Mono','Bitstream Vera Sans Mono',Courier,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-productive-heading-06-font-size,2.625rem);font-weight:var(--cds-productive-heading-06-font-weight,300);line-height:var(--cds-productive-heading-06-line-height,1.199);letter-spacing:var(--cds-productive-heading-06-letter-spacing,0)}h2{font-size:var(--cds-productive-heading-05-font-size,2rem);font-weight:var(--cds-productive-heading-05-font-weight,400);line-height:var(--cds-productive-heading-05-line-height,1.25);letter-spacing:var(--cds-productive-heading-05-letter-spacing,0)}h3{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);line-height:var(--cds-productive-heading-04-line-height,1.28572);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0)}h4{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);line-height:var(--cds-productive-heading-03-line-height,1.4);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0)}h5{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);line-height:var(--cds-productive-heading-02-line-height,1.375);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0)}h6{font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);line-height:var(--cds-productive-heading-01-line-height,1.28572);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px)}p{font-size:var(--cds-body-long-02-font-size,1rem);font-weight:var(--cds-body-long-02-font-weight,400);line-height:var(--cds-body-long-02-line-height,1.5);letter-spacing:var(--cds-body-long-02-letter-spacing,0)}a{color:#0f62fe}em{font-style:italic}@-webkit-keyframes skeleton{0%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}20%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}28%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}51%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}58%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}82%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}83%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}96%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}100%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}}@keyframes skeleton{0%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}20%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}28%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}51%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}58%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}82%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}83%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}96%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}100%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}}.bx--fieldset{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;margin-bottom:2rem}.bx--fieldset *,.bx--fieldset ::after,.bx--fieldset ::before{box-sizing:inherit}.bx--fieldset--no-margin{margin-bottom:0}.bx--form-item{font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);line-height:var(--cds-body-short-01-line-height,1.28572);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);display:flex;flex:1 1 auto;flex-direction:column;align-items:flex-start}.bx--label{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333);letter-spacing:var(--cds-label-01-letter-spacing,.32px);display:inline-block;margin-bottom:.5rem;color:var(--cds-text-02,#525252);font-weight:400;line-height:1rem;vertical-align:baseline}.bx--label *,.bx--label ::after,.bx--label ::before{box-sizing:inherit}.bx--label .bx--tooltip__trigger{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333);letter-spacing:var(--cds-label-01-letter-spacing,.32px)}.bx--label.bx--skeleton{position:relative;padding:0;border:none;background:var(--cds-skeleton-01,#e5e5e5);box-shadow:none;pointer-events:none;width:4.6875rem;height:.875rem}.bx--label.bx--skeleton:active,.bx--label.bx--skeleton:focus,.bx--label.bx--skeleton:hover{border:none;cursor:default;outline:0}.bx--label.bx--skeleton::before{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-animation:3s ease-in-out skeleton infinite;animation:3s ease-in-out skeleton infinite;background:var(--cds-skeleton-02,#c6c6c6);content:\"\";will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.bx--label.bx--skeleton::before{-webkit-animation:none;animation:none}}input[type=number]{font-family:'IBM Plex Mono',Menlo,'DejaVu Sans Mono','Bitstream Vera Sans Mono',Courier,monospace}.bx--combo-box[data-invalid] .bx--text-input:not(:focus),.bx--list-box[data-invalid]:not(:focus),.bx--number[data-invalid] input[type=number]:not(:focus),.bx--select-input__wrapper[data-invalid] .bx--select-input:not(:focus),.bx--text-area__wrapper[data-invalid]>.bx--text-area--invalid:not(:focus),.bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-01,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.bx--combo-box[data-invalid] .bx--text-input:not(:focus),.bx--list-box[data-invalid]:not(:focus),.bx--number[data-invalid] input[type=number]:not(:focus),.bx--select-input__wrapper[data-invalid] .bx--select-input:not(:focus),.bx--text-area__wrapper[data-invalid]>.bx--text-area--invalid:not(:focus),.bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.bx--date-picker-input__wrapper--invalid~.bx--form-requirement,.bx--date-picker-input__wrapper--warn~.bx--form-requirement,.bx--date-picker-input__wrapper~.bx--form-requirement,.bx--list-box--warning~.bx--form-requirement,.bx--list-box[data-invalid]~.bx--form-requirement,.bx--number[data-invalid] .bx--number__input-wrapper~.bx--form-requirement,.bx--number__input-wrapper--warning~.bx--form-requirement,.bx--select--warning .bx--select-input__wrapper~.bx--form-requirement,.bx--select-input__wrapper[data-invalid]~.bx--form-requirement,.bx--text-area__wrapper[data-invalid]~.bx--form-requirement,.bx--text-input__field-wrapper--warning>.bx--text-input~.bx--form-requirement,.bx--text-input__field-wrapper--warning~.bx--form-requirement,.bx--text-input__field-wrapper[data-invalid]~.bx--form-requirement,.bx--time-picker--invalid~.bx--form-requirement,.bx--time-picker[data-invalid]~.bx--form-requirement,input[data-invalid]~.bx--form-requirement{display:block;overflow:visible;max-height:12.5rem;font-weight:400}.bx--date-picker-input__wrapper--invalid~.bx--form-requirement,.bx--date-picker-input__wrapper~.bx--form-requirement,.bx--list-box[data-invalid]~.bx--form-requirement,.bx--number[data-invalid] .bx--number__input-wrapper~.bx--form-requirement,.bx--select-input__wrapper[data-invalid]~.bx--form-requirement,.bx--text-area__wrapper[data-invalid]~.bx--form-requirement,.bx--text-input__field-wrapper[data-invalid]~.bx--form-requirement,.bx--time-picker--invalid~.bx--form-requirement,.bx--time-picker[data-invalid]~.bx--form-requirement,input[data-invalid]~.bx--form-requirement{color:var(--cds-text-error,#da1e28)}.bx--form--fluid .bx--text-input__field-wrapper--warning,.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]{display:block}.bx--form--fluid .bx--fieldset{margin:0}.bx--form--fluid input[data-invalid]{outline:0}.bx--form--fluid .bx--form-requirement{padding:.5rem 2.5rem .5rem 1rem;margin:0}input:not(output):not([data-invalid]):-moz-ui-invalid{box-shadow:none}.bx--form-requirement{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-caption-01-font-size,.75rem);font-weight:var(--cds-caption-01-font-weight,400);line-height:var(--cds-caption-01-line-height,1.33333);letter-spacing:var(--cds-caption-01-letter-spacing,.32px);display:none;overflow:hidden;max-height:0;margin:.25rem 0 0}.bx--form-requirement *,.bx--form-requirement ::after,.bx--form-requirement ::before{box-sizing:inherit}.bx--select--inline .bx--form__helper-text{margin-top:0}.bx--form__helper-text{font-size:var(--cds-helper-text-01-font-size,.75rem);line-height:var(--cds-helper-text-01-line-height,1.33333);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);z-index:0;width:100%;margin-top:.25rem;color:var(--cds-text-02,#525252);opacity:1}.bx--form__helper-text--disabled,.bx--label--disabled{color:var(--cds-disabled-02,#c6c6c6)}fieldset[disabled] .bx--form__helper-text,fieldset[disabled] .bx--label{color:var(--cds-disabled-02,#c6c6c6)}.bx--assistive-text,.bx--visually-hidden{position:absolute;overflow:hidden;width:1px;height:1px;padding:0;border:0;margin:-1px;clip:rect(0,0,0,0);visibility:inherit;white-space:nowrap}.bx--body{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);line-height:var(--cds-body-short-01-line-height,1.28572);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);background-color:var(--cds-ui-background,#fff);color:var(--cds-text-01,#161616);line-height:1}.bx--body *,.bx--body ::after,.bx--body ::before{box-sizing:inherit}.bx--text-truncate--end{display:inline-block;overflow:hidden;width:100%;text-overflow:ellipsis;white-space:nowrap}.bx--text-truncate--front{display:inline-block;overflow:hidden;width:100%;direction:rtl;text-overflow:ellipsis;white-space:nowrap}.bx--text-input{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);line-height:var(--cds-body-short-01-line-height,1.28572);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);outline:2px solid transparent;outline-offset:-2px;width:100%;height:2.5rem;padding:0 1rem;border:none;border-bottom:1px solid var(--cds-ui-04,#8d8d8d);background-color:var(--cds-field-01,#f4f4f4);color:var(--cds-text-01,#161616);transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.bx--text-input *,.bx--text-input ::after,.bx--text-input ::before{box-sizing:inherit}.bx--text-input:active,.bx--text-input:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--text-input:active,.bx--text-input:focus{outline-style:dotted}}.bx--text-input-wrapper svg[hidden]{display:none}.bx--text-input--lg,.bx--text-input--xl{height:3rem}.bx--text-input--sm{height:2rem}.bx--password-input{padding-right:2.5rem}.bx--text-input--sm.bx--password-input{padding-right:2rem}.bx--text-input--lg.bx--password-input{padding-right:3rem}.bx--text-input::-webkit-input-placeholder{color:var(--cds-text-05,#6f6f6f);opacity:1}.bx--text-input::-moz-placeholder{color:var(--cds-text-05,#6f6f6f);opacity:1}.bx--text-input:-ms-input-placeholder{color:var(--cds-text-05,#6f6f6f);opacity:1}.bx--text-input::-ms-input-placeholder{color:var(--cds-text-05,#6f6f6f);opacity:1}.bx--text-input::placeholder{color:var(--cds-text-05,#6f6f6f);opacity:1}.bx--text-input--light{background-color:var(--cds-field-02,#fff)}.bx--text-input__field-wrapper{position:relative;display:flex;width:100%}.bx--text-input__invalid-icon,.bx--text-input__readonly-icon{position:absolute;top:50%;right:1rem;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.bx--text-input__invalid-icon{fill:var(--cds-support-01,#da1e28)}.bx--text-input__invalid-icon--warning{fill:var(--cds-support-03,#f1c21b)}.bx--text-input__invalid-icon--warning path:first-of-type{fill:#000;opacity:1}.bx--text-input--password__visibility{position:relative;display:inline-flex;overflow:visible;align-items:center;cursor:pointer}.bx--text-input--password__visibility:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.bx--text-input--password__visibility:focus{outline-style:dotted}}.bx--text-input--password__visibility:focus{outline:1px solid transparent}.bx--text-input--password__visibility:focus svg{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.bx--text-input--password__visibility:focus svg{outline-style:dotted}}.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility::after,.bx--text-input--password__visibility::before{position:absolute;z-index:6000;display:flex;align-items:center;opacity:0;pointer-events:none}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility::after,.bx--text-input--password__visibility::before{display:inline-block}}.bx--text-input--password__visibility::after,.bx--text-input--password__visibility::before{transition:opacity 70ms cubic-bezier(.2,0,.38,.9)}.bx--text-input--password__visibility.bx--tooltip--a11y::after,.bx--text-input--password__visibility.bx--tooltip--a11y::before{transition:none}.bx--text-input--password__visibility::before{width:0;height:0;border-style:solid;content:\"\"}.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text{box-sizing:content-box;color:inherit;opacity:1;white-space:normal;word-break:break-word}.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility::after{box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));z-index:6000;width:-webkit-max-content;width:-moz-max-content;width:max-content;min-width:1.5rem;max-width:13rem;height:auto;padding:.1875rem 1rem;background-color:var(--cds-inverse-02,#393939);border-radius:.125rem;color:var(--cds-inverse-01,#fff);font-weight:400;text-align:left;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);line-height:var(--cds-body-short-01-line-height,1.28572);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px)}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility::after{width:auto}}@supports (-ms-accelerator:true){.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility::after{width:auto}}@supports (-ms-ime-align:auto){.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility::after{width:auto}}@media screen and (-ms-high-contrast:active),screen and (prefers-contrast){.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility::after{border:1px solid transparent}}.bx--text-input--password__visibility::after{content:attr(aria-label)}.bx--text-input--password__visibility.bx--tooltip--a11y::after{content:none}.bx--text-input--password__visibility.bx--tooltip--visible::after,.bx--text-input--password__visibility.bx--tooltip--visible::before,.bx--text-input--password__visibility:focus::after,.bx--text-input--password__visibility:focus::before,.bx--text-input--password__visibility:hover::after,.bx--text-input--password__visibility:hover::before{opacity:1}@-webkit-keyframes tooltip-fade{from{opacity:0}to{opacity:1}}@keyframes tooltip-fade{from{opacity:0}to{opacity:1}}.bx--text-input--password__visibility.bx--tooltip--visible .bx--assistive-text,.bx--text-input--password__visibility.bx--tooltip--visible+.bx--assistive-text,.bx--text-input--password__visibility:focus .bx--assistive-text,.bx--text-input--password__visibility:focus+.bx--assistive-text,.bx--text-input--password__visibility:hover .bx--assistive-text,.bx--text-input--password__visibility:hover+.bx--assistive-text{overflow:visible;margin:auto;clip:auto}.bx--text-input--password__visibility.bx--tooltip--visible .bx--assistive-text,.bx--text-input--password__visibility.bx--tooltip--visible+.bx--assistive-text,.bx--text-input--password__visibility.bx--tooltip--visible.bx--tooltip--a11y::before,.bx--text-input--password__visibility:focus .bx--assistive-text,.bx--text-input--password__visibility:focus+.bx--assistive-text,.bx--text-input--password__visibility:focus.bx--tooltip--a11y::before,.bx--text-input--password__visibility:hover .bx--assistive-text,.bx--text-input--password__visibility:hover+.bx--assistive-text,.bx--text-input--password__visibility:hover.bx--tooltip--a11y::before{-webkit-animation:tooltip-fade 70ms cubic-bezier(.2,0,.38,.9);animation:tooltip-fade 70ms cubic-bezier(.2,0,.38,.9)}.bx--text-input--password__visibility.bx--tooltip--hidden .bx--assistive-text,.bx--text-input--password__visibility.bx--tooltip--hidden+.bx--assistive-text{overflow:hidden;margin:-1px;clip:rect(0,0,0,0)}.bx--text-input--password__visibility.bx--tooltip--hidden.bx--tooltip--a11y::before{-webkit-animation:none;animation:none;opacity:0}.bx--text-input--password__visibility .bx--assistive-text::after{position:absolute;display:block;content:\"\";left:0;width:100%;height:.75rem;top:-.75rem}.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility::after,.bx--text-input--password__visibility::before{bottom:0;left:50%}.bx--text-input--password__visibility::before{bottom:-.5rem;border-width:0 .25rem .3125rem .25rem;border-color:transparent transparent var(--cds-inverse-02,#393939) transparent;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.bx--text-input--password__visibility .bx--assistive-text,.bx--text-input--password__visibility+.bx--assistive-text,.bx--text-input--password__visibility::after{bottom:-.8125rem;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger,.bx--text-input--password__visibility{outline:2px solid transparent;outline-offset:-2px;position:absolute;right:0;display:flex;width:2.5rem;height:100%;min-height:auto;align-items:center;justify-content:center;padding:0;border:0;background:0 0;cursor:pointer;transition:outline 70ms cubic-bezier(.2,0,.38,.9)}.bx--text-input--sm+.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger{width:2rem}.bx--text-input--lg+.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger{width:3rem}.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252);transition:fill 70ms cubic-bezier(.2,0,.38,.9)}@media screen and (-ms-high-contrast:active),screen and (prefers-contrast){.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg{fill:ButtonText}}.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:focus{outline-style:dotted}}.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:focus svg,.bx--btn.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:hover svg{fill:var(--cds-icon-primary,#161616)}.bx--text-input--invalid,.bx--text-input--warning,.bx--text-input-wrapper--readonly .bx--text-input{padding-right:2.5rem}.bx--text-input--invalid.bx--password-input{padding-right:4rem}.bx--text-input--invalid+.bx--text-input--password__visibility,.bx--text-input--invalid+.bx--text-input--password__visibility__toggle{right:1rem}.bx--password-input-wrapper .bx--text-input__invalid-icon{right:2.5rem}.bx--text-input:disabled+.bx--text-input--password__visibility svg,.bx--text-input:disabled+.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg{cursor:not-allowed;fill:var(--cds-disabled-02,#c6c6c6)}.bx--text-input:disabled+.bx--text-input--password__visibility svg:hover,.bx--text-input:disabled+.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg:hover{fill:var(--cds-disabled-02,#c6c6c6)}.bx--text-input:disabled{outline:2px solid transparent;outline-offset:-2px;border-bottom:1px solid transparent;background-color:var(--cds-field,#f4f4f4);color:var(--cds-text-disabled,#c6c6c6);cursor:not-allowed;-webkit-text-fill-color:var(--cds-disabled-02,#c6c6c6)}.bx--text-input--light:disabled{background-color:var(--cds-field-02,#fff)}.bx--text-input:disabled::-webkit-input-placeholder{color:var(--cds-disabled-02,#c6c6c6);opacity:1}.bx--text-input:disabled::-moz-placeholder{color:var(--cds-disabled-02,#c6c6c6);opacity:1}.bx--text-input:disabled:-ms-input-placeholder{color:var(--cds-disabled-02,#c6c6c6);opacity:1}.bx--text-input:disabled::-ms-input-placeholder{color:var(--cds-disabled-02,#c6c6c6);opacity:1}.bx--text-input:disabled::placeholder{color:var(--cds-disabled-02,#c6c6c6);opacity:1}.bx--text-input--invalid{outline:2px solid var(--cds-support-01,#da1e28);outline-offset:-2px;box-shadow:none}@media screen and (prefers-contrast){.bx--text-input--invalid{outline-style:dotted}}.bx--text-input--invalid .bx--text-input--password__visibility,.bx--text-input--invalid .bx--text-input--password__visibility__toggle{right:2.5rem}.bx--skeleton.bx--text-input{position:relative;padding:0;border:none;background:var(--cds-skeleton-01,#e5e5e5);box-shadow:none;pointer-events:none}.bx--skeleton.bx--text-input:active,.bx--skeleton.bx--text-input:focus,.bx--skeleton.bx--text-input:hover{border:none;cursor:default;outline:0}.bx--skeleton.bx--text-input::before{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-animation:3s ease-in-out skeleton infinite;animation:3s ease-in-out skeleton infinite;background:var(--cds-skeleton-02,#c6c6c6);content:\"\";will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.bx--skeleton.bx--text-input::before{-webkit-animation:none;animation:none}}.bx--form--fluid .bx--text-input-wrapper{position:relative;background:var(--cds-field-01,#f4f4f4);transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.bx--form--fluid .bx--label{position:absolute;z-index:1;top:.8125rem;left:1rem;margin:0}.bx--form--fluid .bx--form__helper-text{display:none}.bx--form--fluid .bx--text-input{min-height:4rem;padding:2rem 1rem .8125rem}.bx--form--fluid .bx--text-input__divider,.bx--text-input__divider{display:none}.bx--form--fluid .bx--text-input--invalid,.bx--form--fluid .bx--text-input--warn{border-bottom:none}.bx--form--fluid .bx--text-input--invalid+.bx--text-input__divider,.bx--form--fluid .bx--text-input--warn+.bx--text-input__divider{display:block;border-style:solid;border-color:var(--cds-ui-03,#e0e0e0);border-bottom:none;margin:0 1rem}.bx--form--fluid .bx--text-input__invalid-icon{top:5rem}.bx--form--fluid .bx--text-input-wrapper--light{background:var(--cds-field-02,#fff)}.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid{outline:2px solid transparent;outline-offset:-2px}.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]:not(:focus){outline:2px solid var(--cds-support-01,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]:not(:focus){outline-style:dotted}}.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--form--fluid .bx--text-input__field-wrapper[data-invalid]>.bx--text-input--invalid:focus{outline-style:dotted}}.bx--text-input-wrapper.bx--text-input-wrapper--inline{flex-flow:row wrap}.bx--text-input-wrapper .bx--label--inline{flex:1;margin:.8125rem 0 0 0;overflow-wrap:break-word;word-break:break-word}.bx--text-input-wrapper .bx--label--inline--sm{margin-top:.5625rem}.bx--text-input-wrapper .bx--label--inline--lg,.bx--text-input-wrapper .bx--label--inline--xl{margin-top:1.0625rem}.bx--text-input__label-helper-wrapper{max-width:8rem;flex:2;flex-direction:column;margin-right:1.5rem;overflow-wrap:break-word}.bx--text-input-wrapper .bx--form__helper-text--inline{margin-top:.125rem}.bx--text-input__field-outer-wrapper{display:flex;width:100%;flex:1 1 auto;flex-direction:column;align-items:flex-start}.bx--text-input__field-outer-wrapper--inline{flex:8;flex-direction:column}.bx--form--fluid .bx--text-input-wrapper--readonly,.bx--text-input-wrapper--readonly .bx--text-input{background:0 0}@media screen and (-ms-high-contrast:active),(forced-colors:active),(prefers-contrast){.bx--btn.bx--btn--icon-only.bx--text-input--password__visibility__toggle.bx--tooltip__trigger svg,.bx--btn.bx--btn--icon-only.bx--text-input--password__visibility__toggle.bx--tooltip__trigger:hover svg,.bx--text-input--password__visibility{fill:ButtonText}}.bx--slider-container{display:flex;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bx--slider{position:relative;width:100%;min-width:12.5rem;max-width:40rem;padding:var(--cds-spacing-05,1rem) 0;margin:0 1rem;cursor:pointer}.bx--slider__range-label{font-family:var(--cds-code-02-font-family, 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace);font-size:var(--cds-code-02-font-size,.875rem);font-weight:var(--cds-code-02-font-weight,400);line-height:var(--cds-code-02-line-height,1.42857);letter-spacing:var(--cds-code-02-letter-spacing,.32px);color:var(--cds-text-01,#161616);white-space:nowrap}.bx--slider__range-label:last-of-type{margin-right:1rem}.bx--slider__track{position:absolute;width:100%;height:.125rem;background:var(--cds-ui-03,#e0e0e0);-webkit-transform:translate(0,-50%);transform:translate(0,-50%)}.bx--slider__track:before{position:absolute;top:-.3125rem;left:50%;display:inline-block;width:.125rem;height:.25rem;background:var(--cds-ui-03,#e0e0e0);content:\"\";-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}.bx--slider__filled-track{position:absolute;width:100%;height:.125rem;background:var(--cds-ui-05,#161616);pointer-events:none;-webkit-transform:translate(0,-50%);transform:translate(0,-50%);-webkit-transform-origin:left;transform-origin:left;transition:background 110ms cubic-bezier(.2,0,.38,.9)}.bx--slider__thumb{position:absolute;z-index:3;width:.875rem;height:.875rem;background:var(--cds-ui-05,#161616);border-radius:50%;box-shadow:inset 0 0 0 1px transparent,inset 0 0 0 2px transparent;outline:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:background 110ms cubic-bezier(.2,0,.38,.9),box-shadow 110ms cubic-bezier(.2,0,.38,.9),-webkit-transform 110ms cubic-bezier(.2,0,.38,.9);transition:transform 110ms cubic-bezier(.2,0,.38,.9),background 110ms cubic-bezier(.2,0,.38,.9),box-shadow 110ms cubic-bezier(.2,0,.38,.9);transition:transform 110ms cubic-bezier(.2,0,.38,.9),background 110ms cubic-bezier(.2,0,.38,.9),box-shadow 110ms cubic-bezier(.2,0,.38,.9),-webkit-transform 110ms cubic-bezier(.2,0,.38,.9)}.bx--slider__thumb:hover{-webkit-transform:translate(-50%,-50%) scale(1.4286);transform:translate(-50%,-50%) scale(1.4286)}.bx--slider__thumb:focus{background-color:var(--cds-interactive-04,#0f62fe);box-shadow:inset 0 0 0 2px var(--cds-interactive-04,#0f62fe),inset 0 0 0 3px var(--cds-ui-01,#f4f4f4);-webkit-transform:translate(-50%,-50%) scale(1.4286);transform:translate(-50%,-50%) scale(1.4286)}.bx--slider__thumb:active{box-shadow:inset 0 0 0 2px var(--cds-interactive-04,#0f62fe);-webkit-transform:translate(-50%,-50%) scale(1.4286);transform:translate(-50%,-50%) scale(1.4286)}.bx--slider__input{display:none}.bx--slider-text-input,.bx-slider-text-input{width:4rem;height:2.5rem;-moz-appearance:textfield;text-align:center}.bx--slider-text-input::-webkit-inner-spin-button,.bx--slider-text-input::-webkit-outer-spin-button,.bx-slider-text-input::-webkit-inner-spin-button,.bx-slider-text-input::-webkit-outer-spin-button{display:none}.bx--slider-text-input.bx--text-input--invalid{padding-right:1rem}.bx--slider__thumb:focus~.bx--slider__filled-track{background-color:var(--cds-interactive-04,#0f62fe)}.bx--label--disabled~.bx--slider-container>.bx--slider__range-label{color:var(--cds-disabled-02,#c6c6c6)}.bx--slider--disabled.bx--slider{cursor:not-allowed}.bx--slider--disabled .bx--slider__thumb{background-color:var(--cds-ui-03,#e0e0e0)}.bx--slider--disabled .bx--slider__thumb:hover{cursor:not-allowed;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.bx--slider--disabled .bx--slider__thumb:focus{background-color:var(--cds-ui-03,#e0e0e0);box-shadow:none;outline:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.bx--slider--disabled .bx--slider__thumb:active{background:var(--cds-ui-03,#e0e0e0);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.bx--slider--disabled .bx--slider__filled-track,.bx--slider--disabled .bx--slider__thumb:focus~.bx--slider__filled-track,.bx--slider--disabled .bx--slider__track{background-color:var(--cds-ui-03,#e0e0e0)}.bx--slider--disabled~.bx--form-item .bx--slider-text-input,.bx--slider--disabled~.bx--slider-text-input{border:none;background-color:var(--cds-disabled-01,#f4f4f4);color:var(--cds-disabled-02,#c6c6c6);cursor:not-allowed;transition:none}.bx--slider--disabled~.bx--form-item .bx--slider-text-input:active,.bx--slider--disabled~.bx--form-item .bx--slider-text-input:focus,.bx--slider--disabled~.bx--form-item .bx--slider-text-input:hover,.bx--slider--disabled~.bx--slider-text-input:active,.bx--slider--disabled~.bx--slider-text-input:focus,.bx--slider--disabled~.bx--slider-text-input:hover{color:var(--cds-disabled-02,#c6c6c6);outline:0}.bx--slider-container.bx--skeleton .bx--slider__range-label{position:relative;padding:0;border:none;background:var(--cds-skeleton-01,#e5e5e5);box-shadow:none;pointer-events:none;width:1.25rem;height:.75rem}.bx--slider-container.bx--skeleton .bx--slider__range-label:active,.bx--slider-container.bx--skeleton .bx--slider__range-label:focus,.bx--slider-container.bx--skeleton .bx--slider__range-label:hover{border:none;cursor:default;outline:0}.bx--slider-container.bx--skeleton .bx--slider__range-label::before{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-animation:3s ease-in-out skeleton infinite;animation:3s ease-in-out skeleton infinite;background:var(--cds-skeleton-02,#c6c6c6);content:\"\";will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.bx--slider-container.bx--skeleton .bx--slider__range-label::before{-webkit-animation:none;animation:none}}.bx--slider-container.bx--skeleton .bx--slider__track{cursor:default;pointer-events:none}.bx--slider-container.bx--skeleton .bx--slider__thumb{left:50%;cursor:default;pointer-events:none}@media screen and (-ms-high-contrast:active),(forced-colors:active),(prefers-contrast){.bx--slider__thumb{outline:1px solid transparent}}@media screen and (-ms-high-contrast:active),(forced-colors:active),(prefers-contrast){.bx--slider__thumb:focus{color:Highlight;outline:1px solid Highlight}}@media screen and (-ms-high-contrast:active),(forced-colors:active),(prefers-contrast){.bx--slider__track{outline:1px solid transparent}}:host(bx-slider){outline:0}:host(bx-slider) .bx--slider{-webkit-transform:rotate(0);transform:rotate(0)}:host(bx-slider) .bx-ce--slider__filled-track-container{-webkit-transform:rotate(0);transform:rotate(0)}:host(bx-slider) .bx--slider__thumb{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}:host(bx-slider) .bx--slider__thumb:focus~.bx-ce--slider__filled-track-container .bx--slider__filled-track{background-color:var(--cds-interactive-04,#0f62fe)}:host(bx-slider-input){outline:0}",
]);

let _$2 = t => t,
    _t$2;
const {
  prefix: prefix$2
} = settings_1;

/**
 * The direction to move the thumb, associated with key symbols.
 */
const THUMB_DIRECTION = {
  Left: -1,
  ArrowLeft: -1,
  Up: -1,
  ArrowUp: -1,
  Right: 1,
  ArrowRight: 1,
  Down: 1,
  ArrowDown: 1
};
/**
 * Slider.
 * @element bx-slider
 * @slot label-text - The label text.
 * @slot max-text - The text for maximum value.
 * @slot min-text - The text for minimum value.
 * @fires bx-slider-changed - The custom event fired after the value is changed by user gesture.
 */

_decorate([customElement(`${prefix$2}-slider`)], function (_initialize, _HostListenerMixin) {
  class BXSlider extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSlider,
    d: [{
      kind: "field",
      key: "_max",

      value() {
        return '100';
      }

    }, {
      kind: "field",
      key: "_min",

      value() {
        return '0';
      }

    }, {
      kind: "field",
      key: "_step",

      value() {
        return '1';
      }

    }, {
      kind: "field",
      key: "_stepRatio",

      value() {
        return '4';
      }

    }, {
      kind: "field",
      key: "_throttledHandlePointermoveImpl",

      value() {
        return null;
      }

    }, {
      kind: "field",
      key: "_dragging",

      value() {
        return false;
      }

    }, {
      kind: "get",
      key: "_rate",
      value:
      /**
       * The internal value of `max` property.
       */

      /**
       * The internal value of `min` property.
       */

      /**
       * The internal value of `step` property.
       */

      /**
       * The internal value of `stepRatio` property.
       */

      /**
       * The handle for the throttled listener of `pointermove` event.
       */

      /**
       * `true` if dragging of thumb is in progress.
       */

      /**
       * The rate of the thumb position in the track.
       * When we try to set a new value, we adjust the value considering `step` property.
       */
      function _rate() {
        const {
          max,
          min,
          value
        } = this; // Copes with out-of-range value coming programmatically or from `<bx-slider-input>`

        return (Math.min(Number(max), Math.max(Number(min), value)) - Number(min)) / (Number(max) - Number(min));
      }
    }, {
      kind: "set",
      key: "_rate",
      value: function _rate(rate) {
        const {
          max,
          min,
          step
        } = this;
        this.value = Number(min) + Math.round((Number(max) - Number(min)) * Math.min(1, Math.max(0, rate)) / Number(step)) * Number(step);
      }
      /**
       * The DOM element of the thumb.
       */

    }, {
      kind: "field",
      decorators: [query('#thumb')],
      key: "_thumbNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('#track')],
      key: "_trackNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleClickLabel",
      value:
      /**
       * The DOM element of the track.
       */

      /**
       * Handles `click` event on the `<label>` to focus on the thumb.
       */
      function _handleClickLabel() {
        var _this$_thumbNode;

        (_this$_thumbNode = this._thumbNode) === null || _this$_thumbNode === void 0 ? void 0 : _this$_thumbNode.focus();
      }
    }, {
      kind: "method",
      key: "_handleFormdata",
      value: function _handleFormdata(event) {
        const {
          formData
        } = event; // TODO: Wait for `FormDataEvent` being available in `lib.dom.d.ts`

        const {
          disabled,
          name,
          value
        } = this;

        if (!disabled) {
          formData.append(name, String(value));
        }
      }
      /**
       * Handles `keydown` event on the thumb to increase/decrease the value.
       */

    }, {
      kind: "method",
      key: "_handleKeydown",
      value: function _handleKeydown({
        key,
        shiftKey
      }) {
        if (!this.disabled) {
          if (key in THUMB_DIRECTION) {
            const {
              max: rawMax,
              min: rawMin,
              step: rawStep,
              stepRatio: rawStepRatio,
              value
            } = this;
            const max = Number(rawMax);
            const min = Number(rawMin);
            const step = Number(rawStep);
            const stepRatio = Number(rawStepRatio);
            const diff = (!shiftKey ? step : (max - min) / stepRatio) * THUMB_DIRECTION[key];
            const stepCount = (value + diff) / step; // Snaps to next

            this.value = Math.min(max, Math.max(min, (diff >= 0 ? Math.floor(stepCount) : Math.ceil(stepCount)) * step));
            this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
              bubbles: true,
              composed: true,
              detail: {
                value: this.value,
                intermediate: false
              }
            }));
          }
        }
      }
      /**
       * Handles `pointerdown` event on the thumb to start dragging.
       */

    }, {
      kind: "method",
      key: "_startDrag",
      value: function _startDrag() {
        this._dragging = true;
        this._thumbNode.style.touchAction = 'none';
      }
      /**
       * Handles `pointerdown` event on the track to update the thumb position and the value as necessary.
       */

    }, {
      kind: "method",
      key: "_handleClick",
      value: function _handleClick(event) {
        if (!this.disabled) {
          const {
            _trackNode: trackNode
          } = this;
          const isRtl = trackNode.ownerDocument.defaultView.getComputedStyle(trackNode).getPropertyValue('direction') === 'rtl';
          const thumbPosition = event.clientX;
          const {
            left: trackLeft,
            width: trackWidth
          } = trackNode.getBoundingClientRect();
          this._rate = (isRtl ? trackLeft + trackWidth - thumbPosition : thumbPosition - trackLeft) / trackWidth;
          this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
            bubbles: true,
            composed: true,
            detail: {
              value: this.value
            }
          }));
        }
      }
      /**
       * Handles `pointermove` to update the thumb position and the value as necessary.
       * @param event The event.
       */

    }, {
      kind: "field",
      decorators: [HostListener('document:pointermove')],
      key: "_handlePointermove",

      value() {
        return event => {
          const {
            disabled,
            _dragging: dragging
          } = this;

          if (!disabled && dragging) {
            this._throttledHandlePointermoveImpl(event);
          }
        };
      }

    }, {
      kind: "method",
      key: "_handlePointermoveImpl",
      value:
      /**
       * Updates thumb position and value upon user's `pointermove` gesture.
       * @param event The event.
       */
      function _handlePointermoveImpl(event) {
        const {
          disabled,
          _dragging: dragging,
          _trackNode: trackNode
        } = this;

        if (!disabled && dragging) {
          const isRtl = trackNode.ownerDocument.defaultView.getComputedStyle(trackNode).getPropertyValue('direction') === 'rtl';
          const thumbPosition = event.clientX;

          const {
            left: trackLeft,
            width: trackWidth
          } = this._trackNode.getBoundingClientRect();

          this._rate = (isRtl ? trackLeft + trackWidth - thumbPosition : thumbPosition - trackLeft) / trackWidth;
          this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
            bubbles: true,
            composed: true,
            detail: {
              value: this.value,
              intermediate: true
            }
          }));
        }
      }
      /**
       * Handles `pointerup` and `pointerleave` event to finishing dragging.
       */

    }, {
      kind: "field",
      key: "_endDrag",

      value() {
        return () => {
          if (this._dragging) {
            this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
              bubbles: true,
              composed: true,
              detail: {
                value: this.value
              }
            }));
            this._dragging = false;
            this._thumbNode.style.touchAction = '';
          }
        };
      }

    }, {
      kind: "field",
      decorators: [HostListener('eventChangeInput')],
      key: "_handleChangeInput",

      value() {
        return ({
          detail
        }) => {
          const {
            intermediate,
            value
          } = detail;
          this.value = value;
          this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
            bubbles: true,
            composed: true,
            detail: {
              value,
              intermediate
            }
          }));
        };
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "disabled",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "formatMaxText",

      value() {
        return ({
          max
        }) => max;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "formatMinText",

      value() {
        return ({
          min
        }) => min;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'label-text'
      })],
      key: "labelText",

      value() {
        return '';
      }

    }, {
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "max",
      value:
      /**
       * Handles `${prefix}-slider-input-changed` event to update the value.
       */

      /**
       * `true` if the check box should be disabled.
       */

      /**
       * The formatter for the text for maximum value.
       * Should be changed upon the locale the UI is rendered with.
       */

      /**
       * The formatter for the text for minimum value.
       * Should be changed upon the locale the UI is rendered with.
       */

      /**
       * The label text.
       */

      /**
       * The maximum value.
       */
      function max() {
        return this._max.toString();
      }
    }, {
      kind: "set",
      key: "max",
      value: function max(value) {
        const {
          max: oldMax
        } = this;
        this._max = value;
        this.requestUpdate('max', oldMax);
      }
      /**
       * The minimum value.
       */

    }, {
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "min",
      value: function min() {
        return this._min.toString();
      }
    }, {
      kind: "set",
      key: "min",
      value: function min(value) {
        const {
          min: oldMin
        } = this;
        this._min = value;
        this.requestUpdate('min', oldMin);
      }
      /**
       * The form name.
       */

    }, {
      kind: "field",
      decorators: [property()],
      key: "name",
      value: void 0
    }, {
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "step",
      value:
      /**
       * The snapping step of the value.
       */
      function step() {
        return this._step.toString();
      }
    }, {
      kind: "set",
      key: "step",
      value: function step(value) {
        const {
          step: oldStep
        } = this;
        this._step = value;
        this.requestUpdate('step', oldStep);
      }
      /**
       * A value determining how much the value should increase/decrease by Shift+arrow keys,
       * which will be `(max - min) / stepRatio`.
       */

    }, {
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true,
        attribute: 'step-ratio'
      })],
      key: "stepRatio",
      value: function stepRatio() {
        return this._stepRatio.toString();
      }
    }, {
      kind: "set",
      key: "stepRatio",
      value: function stepRatio(value) {
        const {
          stepRatio: oldStepRatio
        } = this;
        this._stepRatio = value;
        this.requestUpdate('stepRatio', oldStepRatio);
      }
      /**
       * The value.
       */

    }, {
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "value",

      value() {
        return 50;
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value: function createRenderRoot() {
        var _$exec;

        return this.attachShadow({
          mode: 'open',
          delegatesFocus: Number(((_$exec = /Safari\/(\d+)/.exec(navigator.userAgent)) !== null && _$exec !== void 0 ? _$exec : ['', 0])[1]) <= 537
        });
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(BXSlider.prototype), "connectedCallback", this).call(this);

        if (!this._throttledHandlePointermoveImpl) {
          this._throttledHandlePointermoveImpl = throttle(this._handlePointermoveImpl, 10);
        }
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._throttledHandlePointermoveImpl) {
          this._throttledHandlePointermoveImpl.cancel();

          this._throttledHandlePointermoveImpl = null;
        }

        _get(_getPrototypeOf(BXSlider.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProperties) {
        const input = this.querySelector(this.constructor.selectorInput);

        if (changedProperties.has('disabled')) {
          if (input) {
            input.disabled = this.disabled;
          }

          if (this.disabled) {
            this._dragging = false;
          }
        }

        if (input) {
          ['max', 'min', 'step', 'value'].forEach(name => {
            if (changedProperties.has(name)) {
              input[name] = this[name];
            }
          });
        }

        return true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled,
          formatMaxText,
          formatMinText,
          labelText,
          max,
          min,
          name,
          value,
          _rate: rate,
          _handleClickLabel: handleClickLabel,
          _handleKeydown: handleKeydown,
          _handleClick: handleClick,
          _startDrag: startDrag,
          _endDrag: endDrag
        } = this;
        const labelClasses = classMap({
          [`${prefix$2}--label`]: true,
          [`${prefix$2}--label--disabled`]: disabled
        });
        const sliderClasses = classMap({
          [`${prefix$2}--slider`]: true,
          [`${prefix$2}--slider--disabled`]: disabled
        });
        return html(_t$2 || (_t$2 = _$2` <label class="${0}" @click="${0}"> <slot name="label-text">${0}</slot> </label> <div class="${0}--slider-container"> <span class="${0}--slider__range-label"> <slot name="min-text">${0}</slot> </span> <div @keydown="${0}" @click="${0}" @pointerup="${0}" @pointerleave="${0}" class="${0}" role="presentation"> <div id="thumb" class="${0}--slider__thumb" role="slider" tabindex="0" aria-valuemax="${0}" aria-valuemin="${0}" aria-valuenow="${0}" style="left:${0}%" @pointerdown="${0}"></div> <div id="track" class="${0}--slider__track"></div> <div class="${0}-ce--slider__filled-track-container"> <div class="${0}--slider__filled-track" style="transform:translate(0,-50%) scaleX(${0})"></div> </div> <input class="${0}--slider__input" type="hidden" name="${0}" .value="${0}" min="${0}" max="${0}"> </div> <span class="${0}--slider__range-label"> <slot name="max-text">${0}</slot> </span> <slot></slot> </div> `), labelClasses, handleClickLabel, labelText, prefix$2, prefix$2, formatMinText({
          min
        }), handleKeydown, handleClick, endDrag, endDrag, sliderClasses, prefix$2, max, min, value, rate * 100, startDrag, prefix$2, prefix$2, prefix$2, rate, prefix$2, ifNonEmpty(name), value, ifNonEmpty(min), ifNonEmpty(max), prefix$2, formatMaxText({
          max
        }));
      }
      /**
       * A selector that will return the `<input>` box got entering the value directly.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorInput",
      value: function selectorInput() {
        return `${prefix$2}-slider-input`;
      }
      /**
       * The name of the custom event fired after the value is changed by user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix$2}-slider-changed`;
      }
      /**
       * The name of the custom event fired after the value is changed in `<bx-slider-input>` by user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChangeInput",
      value: function eventChangeInput() {
        return `${prefix$2}-slider-input-changed`;
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return styles$1;
      }

    }]
  };
}, HostListenerMixin(FormMixin(FocusMixin(LitElement))));

/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * A variant of `lit-html/directives/if-defined` which stops rendering if the given value is `null` in addition to `undefined`.
 * @param The value.
 */

var ifNonNull = (value => ifDefined(value !== null && value !== void 0 ? value : undefined));

/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable import/prefer-default-export */

/**
 * Color scheme for form elements.
 */
let FORM_ELEMENT_COLOR_SCHEME;

(function (FORM_ELEMENT_COLOR_SCHEME) {
  FORM_ELEMENT_COLOR_SCHEME["REGULAR"] = "";
  FORM_ELEMENT_COLOR_SCHEME["LIGHT"] = "light";
})(FORM_ELEMENT_COLOR_SCHEME || (FORM_ELEMENT_COLOR_SCHEME = {}));

let _$1 = t => t,
    _t$1;
const {
  prefix: prefix$1
} = settings_1;
/**
 * The `<input>` box for slider.
 * @element bx-slider-input
 * @fires bx-slider-input-changed - The custom event fired after the value is changed by user gesture.
 */

_decorate([customElement(`${prefix$1}-slider-input`)], function (_initialize, _FocusMixin) {
  class BXSliderInput extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSliderInput,
    d: [{
      kind: "field",
      key: "_max",

      value() {
        return '100';
      }

    }, {
      kind: "field",
      key: "_min",

      value() {
        return '0';
      }

    }, {
      kind: "field",
      key: "_step",

      value() {
        return '1';
      }

    }, {
      kind: "method",
      key: "_handleChange",
      value:
      /**
       * The internal value of `max` property.
       */

      /**
       * The internal value of `min` property.
       */

      /**
       * The internal value of `step` property.
       */

      /**
       * Handles `change` event to fire a normalized custom event.
       */
      function _handleChange({
        target
      }) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            value: Number(target.value)
          }
        }));
      }
      /**
       * Handles `input` event to fire a normalized custom event.
       */

    }, {
      kind: "method",
      key: "_handleInput",
      value: function _handleInput({
        target
      }) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            value: Number(target.value),
            intermediate: true
          }
        }));
      }
      /**
       * The color scheme.
       */

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'color-scheme',
        reflect: true
      })],
      key: "colorScheme",

      value() {
        return FORM_ELEMENT_COLOR_SCHEME.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "disabled",

      value() {
        return false;
      }

    }, {
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "max",
      value:
      /**
       * `true` if the check box should be disabled.
       */

      /**
       * The maximum value.
       */
      function max() {
        return this._max.toString();
      }
    }, {
      kind: "set",
      key: "max",
      value: function max(value) {
        const {
          max: oldMax
        } = this;
        this._max = value;
        this.requestUpdate('max', oldMax);
      }
      /**
       * The minimum value.
       */

    }, {
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "min",
      value: function min() {
        return this._min.toString();
      }
    }, {
      kind: "set",
      key: "min",
      value: function min(value) {
        const {
          min: oldMin
        } = this;
        this._min = value;
        this.requestUpdate('min', oldMin);
      }
      /**
       * The snapping step of the value.
       */

    }, {
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "step",
      value: function step() {
        return this._step.toString();
      }
    }, {
      kind: "set",
      key: "step",
      value: function step(value) {
        const {
          step: oldStep
        } = this;
        this._step = value;
        this.requestUpdate('step', oldStep);
      }
      /**
       * The type of the `<input>`.
       */

    }, {
      kind: "field",
      decorators: [property()],
      key: "type",

      value() {
        return 'number';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "value",
      value: void 0
    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The value.
       */
      function createRenderRoot() {
        var _$exec;

        return this.attachShadow({
          mode: 'open',
          delegatesFocus: Number(((_$exec = /Safari\/(\d+)/.exec(navigator.userAgent)) !== null && _$exec !== void 0 ? _$exec : ['', 0])[1]) <= 537
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          colorScheme,
          disabled,
          max,
          min,
          step,
          type,
          value,
          _handleChange: handleChange,
          _handleInput: handleInput
        } = this; // NOTE: Our React variant has an option to add `invalid` option here,
        // but there doesn't seem a corresponding style to the thumb.
        // Because of that, in addition to the mininum/maximum constraint enforced,
        // the code here start without `invalid` styling option for now.

        const classes = classMap({
          [`${prefix$1}--text-input`]: true,
          [`${prefix$1}--slider-text-input`]: true,
          [`${prefix$1}--text-input--${colorScheme}`]: colorScheme
        });
        return html(_t$1 || (_t$1 = _$1` <input ?disabled="${0}" type="${0}" class="${0}" max="${0}" min="${0}" step="${0}" .value="${0}" @change="${0}" @input="${0}"> `), disabled, ifNonNull(type), classes, max, min, step, value, handleChange, handleInput);
      }
      /**
       * A selector that will return the parent slider.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorParent",
      value: function selectorParent() {
        return `${prefix$1}-slider`;
      }
      /**
       * The name of the custom event fired after the value is changed by user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix$1}-slider-input-changed`;
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return styles$1;
      }

    }]
  };
}, FocusMixin(LitElement));

let _ = t => t,
    _t;
const {
  prefix
} = settings_1;
/**
 * Skeleton of slider.
 */

_decorate([customElement(`${prefix}-slider-skeleton`)], function (_initialize, _LitElement) {
  class BXSliderSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSliderSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <span class="${0}--label ${0}--skeleton"></span> <div class="${0}--slider-container ${0}--skeleton"> <span class="${0}--slider__range-label"></span> <div class="${0}--slider"> <div class="${0}--slider__track"></div> <div class="${0}--slider__filled-track"></div> <div class="${0}--slider__thumb"></div> </div> <span class="${0}--slider__range-label"></span> </div> `), prefix, prefix, prefix, prefix, prefix, prefix, prefix, prefix, prefix, prefix);
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return styles$1;
      }

    }]
  };
}, LitElement);

const baseStyle = i`
  :host {
    height: 100%;
    width: 100%;
    display: block;
  }
`;
const styles = [baseStyle];

let SampleCarbonSlider = _decorate$1([e$1('nintex-sample-carbon-slider')], function (_initialize, _LitElement) {
  class SampleCarbonSlider extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: SampleCarbonSlider,
    d: [{
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }, {
      kind: "field",
      decorators: [e()],
      key: "min",
      value: void 0
    }, {
      kind: "field",
      decorators: [e()],
      key: "max",
      value: void 0
    }, {
      kind: "field",
      decorators: [e()],
      key: "step",
      value: void 0
    }, {
      kind: "field",
      decorators: [e()],
      key: "readOnly",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [e()],
      key: "value",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value:
      // Render the UI as a function of component state
      function render() {
        return y`<bx-slider 
    ?disabled="${this.readOnly}"
    max="${this.max}" 
    min="${this.min}" 
    step="${this.step}" 
    .value="${this.value}"
    @change="${e => this.onChange(e)}">
    </bx-slider>`;
      }
    }, {
      kind: "method",
      key: "onChange",
      value: function onChange(e) {
        const value = e.target?.value;
        const args = {
          bubbles: true,
          cancelable: false,
          composed: true,
          detail: value
        };
        const event = new CustomEvent('ntx-value-change', args);
        this.dispatchEvent(event);
      }
    }, {
      kind: "method",
      static: true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        // plugin contract information
        return {
          controlName: 'Carbon Slider Component',
          fallbackDisableSubmit: false,
          iconUrl: 'one-line-text',
          version: '1',
          properties: {
            min: {
              type: 'integer',
              title: 'Min',
              defaultValue: 0
            },
            max: {
              type: 'integer',
              title: 'Max',
              defaultValue: 100
            },
            step: {
              type: 'integer',
              title: 'Step',
              defaultValue: 1
            },
            value: {
              type: 'integer',
              title: 'Value',
              // this is to mark the field as value field. it should only be defined once in the list of properties
              isValueField: true
            }
          },
          standardProperties: {
            fieldLabel: true,
            description: true,
            defaultValue: true,
            readOnly: true
          }
        };
      }
    }]
  };
}, s);

export { SampleCarbonSlider };
