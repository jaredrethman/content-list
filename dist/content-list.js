/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/wp-content/themes/content-list/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(236);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);









(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Hot Module Replacement.
 *
 * @link https://github.com/kadamwhite/wp-block-hmr-demo/blob/master/src/index.js
 */
var _wp = wp,
    _wp$blocks = _wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    unregisterBlockType = _wp$blocks.unregisterBlockType,
    _wp$data = _wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch;
/**
 * No-op function for use as a default argument value.
 *
 * @returns null
 */

var noop = function noop() {
  return null;
};
/**
 * Require a set of modules and configure them for hot module replacement.
 *
 * The first argument should be a function returning a `require.context()`
 * call. All modules loaded from this context are cached, and on each rebuild
 * the incoming updated modules are checked against the cache. Updated modules
 * which already exist in the cache are unregistered with the provided function,
 * then any incoming (new or updated) modules will be registered.
 *
 * @param {Function} getContext Execute and return a `require.context()` call.
 * @param {Function} register   Function to register accepted modules.
 * @param {Function} unregister Function to unregister replaced modules.
 * @param {Function} [before]   Function to run before updating moules.
 * @param {Function} [after]    Function to run after updating moules.
 */


var autoload = function autoload(_ref) {
  var getContext = _ref.getContext,
      register = _ref.register,
      unregister = _ref.unregister,
      _ref$before = _ref.before,
      before = _ref$before === void 0 ? noop : _ref$before,
      _ref$after = _ref.after,
      after = _ref$after === void 0 ? noop : _ref$after;
  var cache = {};

  var loadModules = function loadModules() {
    before();
    var context = getContext();
    var changedNames = [];
    context.keys().forEach(function (key) {
      var module = context(key);

      if (module === cache[key]) {
        // Module unchanged: no further action needed.
        return;
      }

      if (cache[key]) {
        // Module changed, and prior copy detected: unregister old module.
        unregister(cache[key]);
      } // Register new module and update cache.


      register(module);
      changedNames.push(module.name);
      cache[key] = module;
    });
    after(changedNames); // Return the context for HMR initialization.

    return context;
  };

  var context = loadModules();

  if (false) {}
}; // Maintain the selected block ID across HMR updates.


var selectedBlockId = null;

var storeSelectedBlock = function storeSelectedBlock() {
  selectedBlockId = select('core/block-editor').getSelectedBlockClientId();
  dispatch('core/block-editor').clearSelectedBlock();
};

var refreshAllBlocks = function refreshAllBlocks() {
  var changedNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // Refresh all blocks by iteratively selecting each one.
  select('core/block-editor').getBlocks().forEach(function (_ref2) {
    var name = _ref2.name,
        clientId = _ref2.clientId;

    if (changedNames.includes(name)) {
      dispatch('core/block-editor').selectBlock(clientId);
    }
  }); // Reselect whatever was selected in the beginning.

  if (selectedBlockId) {
    dispatch('core/block-editor').selectBlock(selectedBlockId);
  } else {
    dispatch('core/block-editor').clearSelectedBlock();
  }

  selectedBlockId = null;
}; // Load all block index files.


autoload({
  getContext: function getContext() {
    return __webpack_require__(88);
  },
  register: function register(_ref3) {
    var name = _ref3.name,
        options = _ref3.options;
    return registerBlockType(name, options);
  },
  unregister: function unregister(_ref4) {
    var name = _ref4.name;
    return unregisterBlockType(name);
  },
  before: storeSelectedBlock,
  after: refreshAllBlocks
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(registerBlockType, "registerBlockType", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/index.js");
  reactHotLoader.register(unregisterBlockType, "unregisterBlockType", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/index.js");
  reactHotLoader.register(select, "select", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/index.js");
  reactHotLoader.register(dispatch, "dispatch", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/index.js");
  reactHotLoader.register(noop, "noop", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/index.js");
  reactHotLoader.register(autoload, "autoload", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/index.js");
  reactHotLoader.register(selectedBlockId, "selectedBlockId", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/index.js");
  reactHotLoader.register(storeSelectedBlock, "storeSelectedBlock", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/index.js");
  reactHotLoader.register(refreshAllBlocks, "refreshAllBlocks", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var forEach = __webpack_require__(48);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var getOwnPropertyDescriptor = __webpack_require__(7).f;
var createNonEnumerableProperty = __webpack_require__(21);
var redefine = __webpack_require__(24);
var setGlobal = __webpack_require__(25);
var copyConstructorProperties = __webpack_require__(35);
var isForced = __webpack_require__(47);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var propertyIsEnumerableModule = __webpack_require__(10);
var createPropertyDescriptor = __webpack_require__(11);
var toIndexedObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(16);
var has = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(19);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(9);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(13);
var requireObjectCoercible = __webpack_require__(15);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(9);
var classof = __webpack_require__(14);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var fails = __webpack_require__(9);
var createElement = __webpack_require__(20);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var isObject = __webpack_require__(17);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var definePropertyModule = __webpack_require__(22);
var createPropertyDescriptor = __webpack_require__(11);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(19);
var anObject = __webpack_require__(23);
var toPrimitive = __webpack_require__(16);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var createNonEnumerableProperty = __webpack_require__(21);
var has = __webpack_require__(18);
var setGlobal = __webpack_require__(25);
var inspectSource = __webpack_require__(26);
var InternalStateModule = __webpack_require__(28);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var createNonEnumerableProperty = __webpack_require__(21);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(27);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var setGlobal = __webpack_require__(25);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(29);
var global = __webpack_require__(5);
var isObject = __webpack_require__(17);
var createNonEnumerableProperty = __webpack_require__(21);
var objectHas = __webpack_require__(18);
var sharedKey = __webpack_require__(30);
var hiddenKeys = __webpack_require__(34);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var inspectSource = __webpack_require__(26);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(31);
var uid = __webpack_require__(33);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(32);
var store = __webpack_require__(27);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(18);
var ownKeys = __webpack_require__(36);
var getOwnPropertyDescriptorModule = __webpack_require__(7);
var definePropertyModule = __webpack_require__(22);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(37);
var getOwnPropertyNamesModule = __webpack_require__(39);
var getOwnPropertySymbolsModule = __webpack_require__(46);
var anObject = __webpack_require__(23);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(38);
var global = __webpack_require__(5);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);

module.exports = global;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(40);
var enumBugKeys = __webpack_require__(45);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(18);
var toIndexedObject = __webpack_require__(12);
var indexOf = __webpack_require__(41).indexOf;
var hiddenKeys = __webpack_require__(34);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(12);
var toLength = __webpack_require__(42);
var toAbsoluteIndex = __webpack_require__(44);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(43);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(43);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 46 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(9);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(49).forEach;
var arrayMethodIsStrict = __webpack_require__(58);
var arrayMethodUsesToLength = __webpack_require__(59);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(50);
var IndexedObject = __webpack_require__(13);
var toObject = __webpack_require__(52);
var toLength = __webpack_require__(42);
var arraySpeciesCreate = __webpack_require__(53);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(51);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(15);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var isArray = __webpack_require__(54);
var wellKnownSymbol = __webpack_require__(55);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(14);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var shared = __webpack_require__(31);
var has = __webpack_require__(18);
var uid = __webpack_require__(33);
var NATIVE_SYMBOL = __webpack_require__(56);
var USE_SYMBOL_AS_UID = __webpack_require__(57);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(9);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(56);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var fails = __webpack_require__(9);
var has = __webpack_require__(18);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $includes = __webpack_require__(41).includes;
var addToUnscopables = __webpack_require__(61);
var arrayMethodUsesToLength = __webpack_require__(59);

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(55);
var create = __webpack_require__(62);
var definePropertyModule = __webpack_require__(22);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var defineProperties = __webpack_require__(63);
var enumBugKeys = __webpack_require__(45);
var hiddenKeys = __webpack_require__(34);
var html = __webpack_require__(65);
var documentCreateElement = __webpack_require__(20);
var sharedKey = __webpack_require__(30);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var definePropertyModule = __webpack_require__(22);
var anObject = __webpack_require__(23);
var objectKeys = __webpack_require__(64);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(40);
var enumBugKeys = __webpack_require__(45);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(37);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(12);
var addToUnscopables = __webpack_require__(61);
var Iterators = __webpack_require__(67);
var InternalStateModule = __webpack_require__(28);
var defineIterator = __webpack_require__(68);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var createIteratorConstructor = __webpack_require__(69);
var getPrototypeOf = __webpack_require__(71);
var setPrototypeOf = __webpack_require__(74);
var setToStringTag = __webpack_require__(73);
var createNonEnumerableProperty = __webpack_require__(21);
var redefine = __webpack_require__(24);
var wellKnownSymbol = __webpack_require__(55);
var IS_PURE = __webpack_require__(32);
var Iterators = __webpack_require__(67);
var IteratorsCore = __webpack_require__(70);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(70).IteratorPrototype;
var create = __webpack_require__(62);
var createPropertyDescriptor = __webpack_require__(11);
var setToStringTag = __webpack_require__(73);
var Iterators = __webpack_require__(67);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(71);
var createNonEnumerableProperty = __webpack_require__(21);
var has = __webpack_require__(18);
var wellKnownSymbol = __webpack_require__(55);
var IS_PURE = __webpack_require__(32);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(18);
var toObject = __webpack_require__(52);
var sharedKey = __webpack_require__(30);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(72);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(9);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(22).f;
var has = __webpack_require__(18);
var wellKnownSymbol = __webpack_require__(55);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var aPossiblePrototype = __webpack_require__(75);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var defineProperty = __webpack_require__(22).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(78);
var redefine = __webpack_require__(24);
var toString = __webpack_require__(79);

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(55);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(78);
var classof = __webpack_require__(80);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(78);
var classofRaw = __webpack_require__(14);
var wellKnownSymbol = __webpack_require__(55);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var notARegExp = __webpack_require__(82);
var requireObjectCoercible = __webpack_require__(15);
var correctIsRegExpLogic = __webpack_require__(84);

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(83);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var classof = __webpack_require__(14);
var wellKnownSymbol = __webpack_require__(55);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(55);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var DOMIterables = __webpack_require__(86);
var forEach = __webpack_require__(48);
var createNonEnumerableProperty = __webpack_require__(21);

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),
/* 86 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var DOMIterables = __webpack_require__(86);
var ArrayIteratorMethods = __webpack_require__(66);
var createNonEnumerableProperty = __webpack_require__(21);
var wellKnownSymbol = __webpack_require__(55);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": 89
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 88;

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(100);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(102);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(106);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(114);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(142);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(233);















var _typesTaxes$0$name, _typesTaxes$;



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List - Inspector Controls.
 *
 * @package TenUp\Plugin\ContentList
 *
 * @since 0.0.1
 */

/**
 * Dependencies
 */
// External
 // Internal


 // WordPress

var _wp = wp,
    __ = _wp.i18n.__; // TenUp

var _tenUp = tenUp,
    typesTaxes = _tenUp.typesTaxes,
    _tenUp$config = _tenUp.config,
    attributes = _tenUp$config.attributes,
    postsPerPage = _tenUp$config.postsPerPage; // Initialise stores.

_store__WEBPACK_IMPORTED_MODULE_17__["store"].search();
_store__WEBPACK_IMPORTED_MODULE_17__["store"].core();
_store__WEBPACK_IMPORTED_MODULE_17__["store"].content();
/**
 * Block name.
 *
 * @type {string}
 */

var name = 'tenup/content-list';
/**
 * Block registration options.
 *
 * @type {{}}
 */

var options = {
  title: __('Content List', 'tenup'),
  description: __('Adds a list of Content Types.', 'tenup'),
  icon: 'screenoptions',
  category: 'layout',
  keywords: ['content', 'list'],
  attributes: _objectSpread(_objectSpread({}, {
    itemsToShow: {
      type: 'number',
      "default": 2
    },
    columns: {
      type: 'number',
      "default": 2
    },
    display: {
      type: 'array',
      "default": []
    },
    style: {
      type: 'string',
      "default": ''
    },
    orientation: {
      type: 'string',
      "default": 'portrait'
    },
    ids: {
      type: 'array',
      "default": new Array(postsPerPage).fill(0)
    },
    queryArgs: {
      type: 'object',
      "default": {
        contentType: (_typesTaxes$0$name = (_typesTaxes$ = typesTaxes[0]) === null || _typesTaxes$ === void 0 ? void 0 : _typesTaxes$.name) !== null && _typesTaxes$0$name !== void 0 ? _typesTaxes$0$name : null,
        per_page: postsPerPage,
        // eslint-disable-line
        taxonomies: [],
        offset: 0
      }
    },
    title: {
      type: 'object',
      "default": {
        text: '',
        ctaText: '',
        url: ''
      }
    },
    footer: {
      type: 'object',
      "default": {
        text: '',
        url: ''
      }
    }
  }), attributes),
  edit: function edit(block) {
    var setAttributes = block.setAttributes,
        clientId = block.clientId;
    /**
     * The below is necessary to enforce display attributes to
     * work on a per/block bases.
     *
     * @todo Find proper solution. This is a temp solution to ensure display attributes always write to the editor.
     */

    if (0 === block.attributes.display.length) {
      var _attributes$display;

      var display = (_attributes$display = attributes === null || attributes === void 0 ? void 0 : attributes.display) !== null && _attributes$display !== void 0 ? _attributes$display : [{
        name: 'attachment',
        value: true
      }, {
        name: 'taxonomy',
        value: true,
        settings: [{
          name: 'primary_taxonomies',
          value: true
        }, {
          name: 'taxonomies',
          value: 'all'
        }, {
          name: 'count',
          value: -1
        }]
      }, {
        name: 'title',
        value: true
      }];
      setAttributes({
        display: display
      });
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])(_edit__WEBPACK_IMPORTED_MODULE_16__["default"], {
      clientId: clientId,
      setAttributes: setAttributes,
      attributes: block.attributes
    });
  },
  save: function save() {
    return null;
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__, "__", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/index.js");
  reactHotLoader.register(typesTaxes, "typesTaxes", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/index.js");
  reactHotLoader.register(attributes, "attributes", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/index.js");
  reactHotLoader.register(postsPerPage, "postsPerPage", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/index.js");
  reactHotLoader.register(name, "name", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/index.js");
  reactHotLoader.register(options, "options", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var global = __webpack_require__(5);
var getBuiltIn = __webpack_require__(37);
var IS_PURE = __webpack_require__(32);
var DESCRIPTORS = __webpack_require__(8);
var NATIVE_SYMBOL = __webpack_require__(56);
var USE_SYMBOL_AS_UID = __webpack_require__(57);
var fails = __webpack_require__(9);
var has = __webpack_require__(18);
var isArray = __webpack_require__(54);
var isObject = __webpack_require__(17);
var anObject = __webpack_require__(23);
var toObject = __webpack_require__(52);
var toIndexedObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(16);
var createPropertyDescriptor = __webpack_require__(11);
var nativeObjectCreate = __webpack_require__(62);
var objectKeys = __webpack_require__(64);
var getOwnPropertyNamesModule = __webpack_require__(39);
var getOwnPropertyNamesExternal = __webpack_require__(91);
var getOwnPropertySymbolsModule = __webpack_require__(46);
var getOwnPropertyDescriptorModule = __webpack_require__(7);
var definePropertyModule = __webpack_require__(22);
var propertyIsEnumerableModule = __webpack_require__(10);
var createNonEnumerableProperty = __webpack_require__(21);
var redefine = __webpack_require__(24);
var shared = __webpack_require__(31);
var sharedKey = __webpack_require__(30);
var hiddenKeys = __webpack_require__(34);
var uid = __webpack_require__(33);
var wellKnownSymbol = __webpack_require__(55);
var wrappedWellKnownSymbolModule = __webpack_require__(92);
var defineWellKnownSymbol = __webpack_require__(93);
var setToStringTag = __webpack_require__(73);
var InternalStateModule = __webpack_require__(28);
var $forEach = __webpack_require__(49).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(12);
var nativeGetOwnPropertyNames = __webpack_require__(39).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(55);

exports.f = wellKnownSymbol;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(38);
var has = __webpack_require__(18);
var wrappedWellKnownSymbolModule = __webpack_require__(92);
var defineProperty = __webpack_require__(22).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var fill = __webpack_require__(95);
var addToUnscopables = __webpack_require__(61);

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(52);
var toAbsoluteIndex = __webpack_require__(44);
var toLength = __webpack_require__(42);

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $filter = __webpack_require__(49).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(97);
var arrayMethodUsesToLength = __webpack_require__(59);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(9);
var wellKnownSymbol = __webpack_require__(55);
var V8_VERSION = __webpack_require__(98);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var userAgent = __webpack_require__(99);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(37);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(8);
var defineProperties = __webpack_require__(63);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(8);
var objectDefinePropertyModile = __webpack_require__(22);

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var fails = __webpack_require__(9);
var toIndexedObject = __webpack_require__(12);
var nativeGetOwnPropertyDescriptor = __webpack_require__(7).f;
var DESCRIPTORS = __webpack_require__(8);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(8);
var ownKeys = __webpack_require__(36);
var toIndexedObject = __webpack_require__(12);
var getOwnPropertyDescriptorModule = __webpack_require__(7);
var createProperty = __webpack_require__(104);

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(16);
var definePropertyModule = __webpack_require__(22);
var createPropertyDescriptor = __webpack_require__(11);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var toObject = __webpack_require__(52);
var nativeKeys = __webpack_require__(64);
var fails = __webpack_require__(9);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var exec = __webpack_require__(107);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(108);
var stickyHelpers = __webpack_require__(109);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(23);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(9);

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(111);
var anObject = __webpack_require__(23);
var requireObjectCoercible = __webpack_require__(15);
var sameValue = __webpack_require__(112);
var regExpExec = __webpack_require__(113);

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(106);
var redefine = __webpack_require__(24);
var fails = __webpack_require__(9);
var wellKnownSymbol = __webpack_require__(55);
var regexpExec = __webpack_require__(107);
var createNonEnumerableProperty = __webpack_require__(21);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(14);
var regexpExec = __webpack_require__(107);

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 114 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
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

module.exports = _defineProperty;

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_interpolate_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(116);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterpolateElement", function() { return _create_interpolate_element__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(129);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["Children"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["memo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["StrictMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["lazy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["Suspense"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatChildren", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["concatChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchChildrenNodeName", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["switchChildrenNodeName"]; });

/* harmony import */ var _react_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return _react_platform__WEBPACK_IMPORTED_MODULE_2__["createPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return _react_platform__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _react_platform__WEBPACK_IMPORTED_MODULE_2__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return _react_platform__WEBPACK_IMPORTED_MODULE_2__["unmountComponentAtNode"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(136);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmptyElement", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["isEmptyElement"]; });

/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(137);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return _platform__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(138);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderToString", function() { return _serialize__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _raw_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(141);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RawHTML", function() { return _raw_html__WEBPACK_IMPORTED_MODULE_6__["default"]; });








//# sourceMappingURL=index.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(124);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




/**
 * External dependencies
 */

/** @typedef {import('./react').WPElement} WPElement */

var indoc, offset, output, stack;
/**
 * Matches tags in the localized string
 *
 * This is used for extracting the tag pattern groups for parsing the localized
 * string and along with the map converting it to a react element.
 *
 * There are four references extracted using this tokenizer:
 *
 * match: Full match of the tag (i.e. <strong>, </strong>, <br/>)
 * isClosing: The closing slash, it it exists.
 * name: The name portion of the tag (strong, br) (if )
 * isSelfClosed: The slash on a self closing tag, if it exists.
 *
 * @type {RegExp}
 */

var tokenizer = /<(\/)?(\w+)\s*(\/)?>/g;
/**
 * The stack frame tracking parse progress.
 *
 * @typedef Frame
 *
 * @property {WPElement} element            A parent element which may still have
 * @property {number}    tokenStart         Offset at which parent element first
 *                                          appears.
 * @property {number}    tokenLength        Length of string marking start of parent
 *                                          element.
 * @property {number}    [prevOffset]       Running offset at which parsing should
 *                                          continue.
 * @property {number}    [leadingTextStart] Offset at which last closing element
 *                                          finished, used for finding text between
 *                                          elements.
 * @property {WPElement[]} children         Children.
 */

/**
 * Tracks recursive-descent parse state.
 *
 * This is a Stack frame holding parent elements until all children have been
 * parsed.
 *
 * @private
 * @param {WPElement} element            A parent element which may still have
 *                                       nested children not yet parsed.
 * @param {number}    tokenStart         Offset at which parent element first
 *                                       appears.
 * @param {number}    tokenLength        Length of string marking start of parent
 *                                       element.
 * @param {number}    [prevOffset]       Running offset at which parsing should
 *                                       continue.
 * @param {number}    [leadingTextStart] Offset at which last closing element
 *                                       finished, used for finding text between
 *                                       elements.
 *
 * @return {Frame} The stack frame tracking parse progress.
 */

function createFrame(element, tokenStart, tokenLength, prevOffset, leadingTextStart) {
  return {
    element: element,
    tokenStart: tokenStart,
    tokenLength: tokenLength,
    prevOffset: prevOffset,
    leadingTextStart: leadingTextStart,
    children: []
  };
}
/**
 * This function creates an interpolated element from a passed in string with
 * specific tags matching how the string should be converted to an element via
 * the conversion map value.
 *
 * @example
 * For example, for the given string:
 *
 * "This is a <span>string</span> with <a>a link</a> and a self-closing
 * <CustomComponentB/> tag"
 *
 * You would have something like this as the conversionMap value:
 *
 * ```js
 * {
 *     span: <span />,
 *     a: <a href={ 'https://github.com' } />,
 *     CustomComponentB: <CustomComponent />,
 * }
 * ```
 *
 * @param {string}  interpolatedString  The interpolation string to be parsed.
 * @param {Object}  conversionMap       The map used to convert the string to
 *                                      a react element.
 * @throws {TypeError}
 * @return {WPElement}  A wp element.
 */


var createInterpolateElement = function createInterpolateElement(interpolatedString, conversionMap) {
  indoc = interpolatedString;
  offset = 0;
  output = [];
  stack = [];
  tokenizer.lastIndex = 0;

  if (!isValidConversionMap(conversionMap)) {
    throw new TypeError('The conversionMap provided is not valid. It must be an object with values that are WPElements');
  }

  do {// twiddle our thumbs
  } while (proceed(conversionMap));

  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"].apply(void 0, [react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(output)));
};
/**
 * Validate conversion map.
 *
 * A map is considered valid if it's an object and every value in the object
 * is a WPElement
 *
 * @private
 *
 * @param {Object} conversionMap  The map being validated.
 *
 * @return {boolean}  True means the map is valid.
 */


var isValidConversionMap = function isValidConversionMap(conversionMap) {
  var isObject = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(conversionMap) === 'object';
  var values = isObject && Object.values(conversionMap);
  return isObject && values.length && values.every(function (element) {
    return Object(react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"])(element);
  });
};
/**
 * This is the iterator over the matches in the string.
 *
 * @private
 *
 * @param {Object} conversionMap The conversion map for the string.
 *
 * @return {boolean} true for continuing to iterate, false for finished.
 */


function proceed(conversionMap) {
  var next = nextToken();

  var _next = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(next, 4),
      tokenType = _next[0],
      name = _next[1],
      startOffset = _next[2],
      tokenLength = _next[3];

  var stackDepth = stack.length;
  var leadingTextStart = startOffset > offset ? offset : null;

  if (!conversionMap[name]) {
    addText();
    return false;
  }

  switch (tokenType) {
    case 'no-more-tokens':
      if (stackDepth !== 0) {
        var _stack$pop = stack.pop(),
            stackLeadingText = _stack$pop.leadingTextStart,
            tokenStart = _stack$pop.tokenStart;

        output.push(indoc.substr(stackLeadingText, tokenStart));
      }

      addText();
      return false;

    case 'self-closed':
      if (0 === stackDepth) {
        if (null !== leadingTextStart) {
          output.push(indoc.substr(leadingTextStart, startOffset - leadingTextStart));
        }

        output.push(conversionMap[name]);
        offset = startOffset + tokenLength;
        return true;
      } // otherwise we found an inner element


      addChild(createFrame(conversionMap[name], startOffset, tokenLength));
      offset = startOffset + tokenLength;
      return true;

    case 'opener':
      stack.push(createFrame(conversionMap[name], startOffset, tokenLength, startOffset + tokenLength, leadingTextStart));
      offset = startOffset + tokenLength;
      return true;

    case 'closer':
      // if we're not nesting then this is easy - close the block
      if (1 === stackDepth) {
        closeOuterElement(startOffset);
        offset = startOffset + tokenLength;
        return true;
      } // otherwise we're nested and we have to close out the current
      // block and add it as a innerBlock to the parent


      var stackTop = stack.pop();
      var text = indoc.substr(stackTop.prevOffset, startOffset - stackTop.prevOffset);
      stackTop.children.push(text);
      stackTop.prevOffset = startOffset + tokenLength;
      var frame = createFrame(stackTop.element, stackTop.tokenStart, stackTop.tokenLength, startOffset + tokenLength);
      frame.children = stackTop.children;
      addChild(frame);
      offset = startOffset + tokenLength;
      return true;

    default:
      addText();
      return false;
  }
}
/**
 * Grabs the next token match in the string and returns it's details.
 *
 * @private
 *
 * @return {Array}  An array of details for the token matched.
 */


function nextToken() {
  var matches = tokenizer.exec(indoc); // we have no more tokens

  if (null === matches) {
    return ['no-more-tokens'];
  }

  var startedAt = matches.index;

  var _matches = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(matches, 4),
      match = _matches[0],
      isClosing = _matches[1],
      name = _matches[2],
      isSelfClosed = _matches[3];

  var length = match.length;

  if (isSelfClosed) {
    return ['self-closed', name, startedAt, length];
  }

  if (isClosing) {
    return ['closer', name, startedAt, length];
  }

  return ['opener', name, startedAt, length];
}
/**
 * Pushes text extracted from the indoc string to the output stack given the
 * current rawLength value and offset (if rawLength is provided ) or the
 * indoc.length and offset.
 *
 * @private
 */


function addText() {
  var length = indoc.length - offset;

  if (0 === length) {
    return;
  }

  output.push(indoc.substr(offset, length));
}
/**
 * Pushes a child element to the associated parent element's children for the
 * parent currently active in the stack.
 *
 * @private
 *
 * @param {Frame}    frame       The Frame containing the child element and it's
 *                               token information.
 */


function addChild(frame) {
  var element = frame.element,
      tokenStart = frame.tokenStart,
      tokenLength = frame.tokenLength,
      prevOffset = frame.prevOffset,
      children = frame.children;
  var parent = stack[stack.length - 1];
  var text = indoc.substr(parent.prevOffset, tokenStart - parent.prevOffset);

  if (text) {
    parent.children.push(text);
  }

  parent.children.push(react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"].apply(void 0, [element, null].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(children))));
  parent.prevOffset = prevOffset ? prevOffset : tokenStart + tokenLength;
}
/**
 * This is called for closing tags. It creates the element currently active in
 * the stack.
 *
 * @private
 *
 * @param {number} endOffset Offset at which the closing tag for the element
 *                           begins in the string. If this is greater than the
 *                           prevOffset attached to the element, then this
 *                           helps capture any remaining nested text nodes in
 *                           the element.
 */


function closeOuterElement(endOffset) {
  var _stack$pop2 = stack.pop(),
      element = _stack$pop2.element,
      leadingTextStart = _stack$pop2.leadingTextStart,
      prevOffset = _stack$pop2.prevOffset,
      tokenStart = _stack$pop2.tokenStart,
      children = _stack$pop2.children;

  var text = endOffset ? indoc.substr(prevOffset, endOffset - prevOffset) : indoc.substr(prevOffset);

  if (text) {
    children.push(text);
  }

  if (null !== leadingTextStart) {
    output.push(indoc.substr(leadingTextStart, tokenStart - leadingTextStart));
  }

  output.push(react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"].apply(void 0, [element, null].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(children))));
}

/* harmony default export */ __webpack_exports__["default"] = (createInterpolateElement);
//# sourceMappingURL=create-interpolate-element.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(119);
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(120);
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(122);




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(126);
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(120);
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(127);




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatChildren", function() { return concatChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchChildrenNodeName", function() { return switchChildrenNodeName; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return react__WEBPACK_IMPORTED_MODULE_2__["Children"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return react__WEBPACK_IMPORTED_MODULE_2__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return react__WEBPACK_IMPORTED_MODULE_2__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return react__WEBPACK_IMPORTED_MODULE_2__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return react__WEBPACK_IMPORTED_MODULE_2__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return react__WEBPACK_IMPORTED_MODULE_2__["memo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return react__WEBPACK_IMPORTED_MODULE_2__["StrictMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return react__WEBPACK_IMPORTED_MODULE_2__["lazy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return react__WEBPACK_IMPORTED_MODULE_2__["Suspense"]; });

/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(133);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * Object containing a React element.
 *
 * @typedef {import('react').ReactElement} WPElement
 */

/**
 * Object containing a React component.
 *
 * @typedef {import('react').ComponentType} WPComponent
 */

/**
 * Object containing a React synthetic event.
 *
 * @typedef {import('react').SyntheticEvent} WPSyntheticEvent
 */

/**
 * Object that provides utilities for dealing with React children.
 */


/**
 * Creates a copy of an element with extended props.
 *
 * @param {WPElement} element Element
 * @param {?Object}   props   Props to apply to cloned element
 *
 * @return {WPElement} Cloned element.
 */


/**
 * A base class to create WordPress Components (Refs, state and lifecycle hooks)
 */


/**
 * Creates a context object containing two components: a provider and consumer.
 *
 * @param {Object} defaultValue A default data stored in the context.
 *
 * @return {Object} Context object.
 */


/**
 * Returns a new element of given type. Type can be either a string tag name or
 * another function which itself returns an element.
 *
 * @param {?(string|Function)} type     Tag name or element creator
 * @param {Object}             props    Element properties, either attribute
 *                                      set to apply to DOM node or values to
 *                                      pass through to element creator
 * @param {...WPElement}       children Descendant elements
 *
 * @return {WPElement} Element.
 */


/**
 * Returns an object tracking a reference to a rendered element via its
 * `current` property as either a DOMElement or Element, dependent upon the
 * type of element rendered with the ref attribute.
 *
 * @return {Object} Ref object.
 */


/**
 * Component enhancer used to enable passing a ref to its wrapped component.
 * Pass a function argument which receives `props` and `ref` as its arguments,
 * returning an element using the forwarded ref. The return value is a new
 * component which forwards its ref.
 *
 * @param {Function} forwarder Function passed `props` and `ref`, expected to
 *                             return an element.
 *
 * @return {WPComponent} Enhanced component.
 */


/**
 * A component which renders its children without any wrapping element.
 */


/**
 * Checks if an object is a valid WPElement.
 *
 * @param {Object} objectToCheck The object to be checked.
 *
 * @return {boolean} true if objectToTest is a valid WPElement and false otherwise.
 */


/**
 * @see https://reactjs.org/docs/react-api.html#reactmemo
 */


/**
 * Component that activates additional checks and warnings for its descendants.
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usecallback
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usecontext
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usedebugvalue
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#useeffect
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#useimperativehandle
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usememo
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usereducer
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usestate
 */


/**
 * @see https://reactjs.org/docs/react-api.html#reactlazy
 */


/**
 * @see https://reactjs.org/docs/react-api.html#reactsuspense
 */


/**
 * Concatenate two or more React children objects.
 *
 * @param {...?Object} childrenArguments Array of children arguments (array of arrays/strings/objects) to concatenate.
 *
 * @return {Array} The concatenated value.
 */

function concatChildren() {
  for (var _len = arguments.length, childrenArguments = new Array(_len), _key = 0; _key < _len; _key++) {
    childrenArguments[_key] = arguments[_key];
  }

  return childrenArguments.reduce(function (accumulator, children, i) {
    react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, function (child, j) {
      if (child && 'string' !== typeof child) {
        child = Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(child, {
          key: [i, j].join()
        });
      }

      accumulator.push(child);
    });
    return accumulator;
  }, []);
}
/**
 * Switches the nodeName of all the elements in the children object.
 *
 * @param {?Object} children Children object.
 * @param {string}  nodeName Node name.
 *
 * @return {?Object} The updated children object.
 */

function switchChildrenNodeName(children, nodeName) {
  return children && react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (elt, index) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isString"])(elt)) {
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(nodeName, {
        key: index
      }, elt);
    }

    var _elt$props = elt.props,
        childrenProp = _elt$props.children,
        props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_elt$props, ["children"]);

    return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(nodeName, _objectSpread({
      key: index
    }, props), childrenProp);
  });
}
//# sourceMappingURL=react.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
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

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = lodash;

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["createPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["findDOMNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unmountComponentAtNode"]; });

/**
 * External dependencies
 */

/**
 * Creates a portal into which a component can be rendered.
 *
 * @see https://github.com/facebook/react/issues/10309#issuecomment-318433235
 *
 * @param {import('./react').WPElement}   child     Any renderable child, such as an element,
 *                                string, or fragment.
 * @param {HTMLElement} container DOM node into which element should be rendered.
 */


/**
 * Finds the dom node of a React component.
 *
 * @param {import('./react').WPComponent} component Component's instance.
 */


/**
 * Renders a given element into the target DOM node.
 *
 * @param {import('./react').WPElement}   element Element to render.
 * @param {HTMLElement} target  DOM node into which element should be rendered.
 */


/**
 * Removes any mounted element from the target DOM node.
 *
 * @param {Element} target DOM node in which element is to be removed
 */


//# sourceMappingURL=react-platform.js.map

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyElement", function() { return isEmptyElement; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Checks if the provided WP element is empty.
 *
 * @param {*} element WP element to check.
 * @return {boolean} True when an element is considered empty.
 */

var isEmptyElement = function isEmptyElement(element) {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(element)) {
    return false;
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isString"])(element) || Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(element)) {
    return !element.length;
  }

  return !element;
};
//# sourceMappingURL=utils.js.map

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Parts of this source were derived and modified from react-native-web,
 * released under the MIT license.
 *
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 */
var Platform = {
  OS: 'web',
  select: function select(spec) {
    return 'web' in spec ? spec.web : spec.default;
  }
};
/**
 * Component used to detect the current Platform being used.
 * Use Platform.OS === 'web' to detect if running on web enviroment.
 *
 * This is the same concept as the React Native implementation.
 *
 * @see https://facebook.github.io/react-native/docs/platform-specific-code#platform-module
 *
 * Here is an example of how to use the select method:
 * @example
 * ```js
 * import { Platform } from '@wordpress/element';
 *
 * const placeholderLabel = Platform.select( {
 *   native: __( 'Add media' ),
 *   web: __( 'Drag images, upload new ones or select files from your library.' ),
 * } );
 * ```
 */

/* harmony default export */ __webpack_exports__["default"] = (Platform);
//# sourceMappingURL=platform.js.map

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPrefix", function() { return hasPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return renderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNativeComponent", function() { return renderNativeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAttributes", function() { return renderAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderStyle", function() { return renderStyle; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(123);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(133);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(139);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(129);
/* harmony import */ var _raw_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(141);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Parts of this source were derived and modified from fast-react-render,
 * released under the MIT license.
 *
 * https://github.com/alt-j/fast-react-render
 *
 * Copyright (c) 2016 Andrey Morozov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/** @typedef {import('./react').WPElement} WPElement */

var _createContext = Object(_react__WEBPACK_IMPORTED_MODULE_5__["createContext"])(undefined),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

var ForwardRef = Object(_react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function () {
  return null;
});
/**
 * Valid attribute types.
 *
 * @type {Set<string>}
 */

var ATTRIBUTES_TYPES = new Set(['string', 'boolean', 'number']);
/**
 * Element tags which can be self-closing.
 *
 * @type {Set<string>}
 */

var SELF_CLOSING_TAGS = new Set(['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
/**
 * Boolean attributes are attributes whose presence as being assigned is
 * meaningful, even if only empty.
 *
 * See: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes
 * Extracted from: https://html.spec.whatwg.org/multipage/indices.html#attributes-3
 *
 * Object.keys( [ ...document.querySelectorAll( '#attributes-1 > tbody > tr' ) ]
 *     .filter( ( tr ) => tr.lastChild.textContent.indexOf( 'Boolean attribute' ) !== -1 )
 *     .reduce( ( result, tr ) => Object.assign( result, {
 *         [ tr.firstChild.textContent.trim() ]: true
 *     } ), {} ) ).sort();
 *
 * @type {Set<string>}
 */

var BOOLEAN_ATTRIBUTES = new Set(['allowfullscreen', 'allowpaymentrequest', 'allowusermedia', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'download', 'formnovalidate', 'hidden', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected', 'typemustmatch']);
/**
 * Enumerated attributes are attributes which must be of a specific value form.
 * Like boolean attributes, these are meaningful if specified, even if not of a
 * valid enumerated value.
 *
 * See: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute
 * Extracted from: https://html.spec.whatwg.org/multipage/indices.html#attributes-3
 *
 * Object.keys( [ ...document.querySelectorAll( '#attributes-1 > tbody > tr' ) ]
 *     .filter( ( tr ) => /^("(.+?)";?\s*)+/.test( tr.lastChild.textContent.trim() ) )
 *     .reduce( ( result, tr ) => Object.assign( result, {
 *         [ tr.firstChild.textContent.trim() ]: true
 *     } ), {} ) ).sort();
 *
 * Some notable omissions:
 *
 *  - `alt`: https://blog.whatwg.org/omit-alt
 *
 * @type {Set<string>}
 */

var ENUMERATED_ATTRIBUTES = new Set(['autocapitalize', 'autocomplete', 'charset', 'contenteditable', 'crossorigin', 'decoding', 'dir', 'draggable', 'enctype', 'formenctype', 'formmethod', 'http-equiv', 'inputmode', 'kind', 'method', 'preload', 'scope', 'shape', 'spellcheck', 'translate', 'type', 'wrap']);
/**
 * Set of CSS style properties which support assignment of unitless numbers.
 * Used in rendering of style properties, where `px` unit is assumed unless
 * property is included in this set or value is zero.
 *
 * Generated via:
 *
 * Object.entries( document.createElement( 'div' ).style )
 *     .filter( ( [ key ] ) => (
 *         ! /^(webkit|ms|moz)/.test( key ) &&
 *         ( e.style[ key ] = 10 ) &&
 *         e.style[ key ] === '10'
 *     ) )
 *     .map( ( [ key ] ) => key )
 *     .sort();
 *
 * @type {Set<string>}
 */

var CSS_PROPERTIES_SUPPORTS_UNITLESS = new Set(['animation', 'animationIterationCount', 'baselineShift', 'borderImageOutset', 'borderImageSlice', 'borderImageWidth', 'columnCount', 'cx', 'cy', 'fillOpacity', 'flexGrow', 'flexShrink', 'floodOpacity', 'fontWeight', 'gridColumnEnd', 'gridColumnStart', 'gridRowEnd', 'gridRowStart', 'lineHeight', 'opacity', 'order', 'orphans', 'r', 'rx', 'ry', 'shapeImageThreshold', 'stopOpacity', 'strokeDasharray', 'strokeDashoffset', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth', 'tabSize', 'widows', 'x', 'y', 'zIndex', 'zoom']);
/**
 * Returns true if the specified string is prefixed by one of an array of
 * possible prefixes.
 *
 * @param {string}   string   String to check.
 * @param {string[]} prefixes Possible prefixes.
 *
 * @return {boolean} Whether string has prefix.
 */

function hasPrefix(string, prefixes) {
  return prefixes.some(function (prefix) {
    return string.indexOf(prefix) === 0;
  });
}
/**
 * Returns true if the given prop name should be ignored in attributes
 * serialization, or false otherwise.
 *
 * @param {string} attribute Attribute to check.
 *
 * @return {boolean} Whether attribute should be ignored.
 */

function isInternalAttribute(attribute) {
  return 'key' === attribute || 'children' === attribute;
}
/**
 * Returns the normal form of the element's attribute value for HTML.
 *
 * @param {string} attribute Attribute name.
 * @param {*}      value     Non-normalized attribute value.
 *
 * @return {*} Normalized attribute value.
 */


function getNormalAttributeValue(attribute, value) {
  switch (attribute) {
    case 'style':
      return renderStyle(value);
  }

  return value;
}
/**
 * Returns the normal form of the element's attribute name for HTML.
 *
 * @param {string} attribute Non-normalized attribute name.
 *
 * @return {string} Normalized attribute name.
 */


function getNormalAttributeName(attribute) {
  switch (attribute) {
    case 'htmlFor':
      return 'for';

    case 'className':
      return 'class';
  }

  return attribute.toLowerCase();
}
/**
 * Returns the normal form of the style property name for HTML.
 *
 * - Converts property names to kebab-case, e.g. 'backgroundColor' → 'background-color'
 * - Leaves custom attributes alone, e.g. '--myBackgroundColor' → '--myBackgroundColor'
 * - Converts vendor-prefixed property names to -kebab-case, e.g. 'MozTransform' → '-moz-transform'
 *
 * @param {string} property Property name.
 *
 * @return {string} Normalized property name.
 */


function getNormalStylePropertyName(property) {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["startsWith"])(property, '--')) {
    return property;
  }

  if (hasPrefix(property, ['ms', 'O', 'Moz', 'Webkit'])) {
    return '-' + Object(lodash__WEBPACK_IMPORTED_MODULE_3__["kebabCase"])(property);
  }

  return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["kebabCase"])(property);
}
/**
 * Returns the normal form of the style property value for HTML. Appends a
 * default pixel unit if numeric, not a unitless property, and not zero.
 *
 * @param {string} property Property name.
 * @param {*}      value    Non-normalized property value.
 *
 * @return {*} Normalized property value.
 */


function getNormalStylePropertyValue(property, value) {
  if (typeof value === 'number' && 0 !== value && !CSS_PROPERTIES_SUPPORTS_UNITLESS.has(property)) {
    return value + 'px';
  }

  return value;
}
/**
 * Serializes a React element to string.
 *
 * @param {import('react').ReactNode} element         Element to serialize.
 * @param {Object}                    [context]       Context object.
 * @param {Object}                    [legacyContext] Legacy context object.
 *
 * @return {string} Serialized element.
 */


function renderElement(element, context) {
  var legacyContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (null === element || undefined === element || false === element) {
    return '';
  }

  if (Array.isArray(element)) {
    return renderChildren(element, context, legacyContext);
  }

  switch (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(element)) {
    case 'string':
      return Object(_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_4__["escapeHTML"])(element);

    case 'number':
      return element.toString();
  }

  var type =
  /** @type {{type?: any, props?: any}} */
  element.type,
      props = element.props;

  switch (type) {
    case _react__WEBPACK_IMPORTED_MODULE_5__["StrictMode"]:
    case _react__WEBPACK_IMPORTED_MODULE_5__["Fragment"]:
      return renderChildren(props.children, context, legacyContext);

    case _raw_html__WEBPACK_IMPORTED_MODULE_6__["default"]:
      var children = props.children,
          wrapperProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children"]);

      return renderNativeComponent(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(wrapperProps) ? null : 'div', _objectSpread({}, wrapperProps, {
        dangerouslySetInnerHTML: {
          __html: children
        }
      }), context, legacyContext);
  }

  switch (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(type)) {
    case 'string':
      return renderNativeComponent(type, props, context, legacyContext);

    case 'function':
      if (type.prototype && typeof type.prototype.render === 'function') {
        return renderComponent(type, props, context, legacyContext);
      }

      return renderElement(type(props, legacyContext), context, legacyContext);
  }

  switch (type && type.$$typeof) {
    case Provider.$$typeof:
      return renderChildren(props.children, props.value, legacyContext);

    case Consumer.$$typeof:
      return renderElement(props.children(context || type._currentValue), context, legacyContext);

    case ForwardRef.$$typeof:
      return renderElement(type.render(props), context, legacyContext);
  }

  return '';
}
/**
 * Serializes a native component type to string.
 *
 * @param {?string} type            Native component type to serialize, or null if
 *                                  rendering as fragment of children content.
 * @param {Object}  props           Props object.
 * @param {Object}  [context]       Context object.
 * @param {Object}  [legacyContext] Legacy context object.
 *
 * @return {string} Serialized element.
 */

function renderNativeComponent(type, props, context) {
  var legacyContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var content = '';

  if (type === 'textarea' && props.hasOwnProperty('value')) {
    // Textarea children can be assigned as value prop. If it is, render in
    // place of children. Ensure to omit so it is not assigned as attribute
    // as well.
    content = renderChildren(props.value, context, legacyContext);
    props = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["omit"])(props, 'value');
  } else if (props.dangerouslySetInnerHTML && typeof props.dangerouslySetInnerHTML.__html === 'string') {
    // Dangerous content is left unescaped.
    content = props.dangerouslySetInnerHTML.__html;
  } else if (typeof props.children !== 'undefined') {
    content = renderChildren(props.children, context, legacyContext);
  }

  if (!type) {
    return content;
  }

  var attributes = renderAttributes(props);

  if (SELF_CLOSING_TAGS.has(type)) {
    return '<' + type + attributes + '/>';
  }

  return '<' + type + attributes + '>' + content + '</' + type + '>';
}
/** @typedef {import('./react').WPComponent} WPComponent */

/**
 * Serializes a non-native component type to string.
 *
 * @param {WPComponent} Component       Component type to serialize.
 * @param {Object}      props           Props object.
 * @param {Object}      [context]       Context object.
 * @param {Object}      [legacyContext] Legacy context object.
 *
 * @return {string} Serialized element
 */

function renderComponent(Component, props, context) {
  var legacyContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var instance = new
  /** @type {import('react').ComponentClass} */
  Component(props, legacyContext);

  if (typeof // Ignore reason: Current prettier reformats parens and mangles type assertion
  // prettier-ignore

  /** @type {{getChildContext?: () => unknown}} */
  instance.getChildContext === 'function') {
    Object.assign(legacyContext,
    /** @type {{getChildContext?: () => unknown}} */
    instance.getChildContext());
  }

  var html = renderElement(instance.render(), context, legacyContext);
  return html;
}
/**
 * Serializes an array of children to string.
 *
 * @param {import('react').ReactNodeArray} children        Children to serialize.
 * @param {Object}                         [context]       Context object.
 * @param {Object}                         [legacyContext] Legacy context object.
 *
 * @return {string} Serialized children.
 */

function renderChildren(children, context) {
  var legacyContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var result = '';
  children = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["castArray"])(children);

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    result += renderElement(child, context, legacyContext);
  }

  return result;
}
/**
 * Renders a props object as a string of HTML attributes.
 *
 * @param {Object} props Props object.
 *
 * @return {string} Attributes string.
 */


function renderAttributes(props) {
  var result = '';

  for (var key in props) {
    var attribute = getNormalAttributeName(key);

    if (!Object(_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_4__["isValidAttributeName"])(attribute)) {
      continue;
    }

    var value = getNormalAttributeValue(key, props[key]); // If value is not of serializeable type, skip.

    if (!ATTRIBUTES_TYPES.has(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(value))) {
      continue;
    } // Don't render internal attribute names.


    if (isInternalAttribute(key)) {
      continue;
    }

    var isBooleanAttribute = BOOLEAN_ATTRIBUTES.has(attribute); // Boolean attribute should be omitted outright if its value is false.

    if (isBooleanAttribute && value === false) {
      continue;
    }

    var isMeaningfulAttribute = isBooleanAttribute || hasPrefix(key, ['data-', 'aria-']) || ENUMERATED_ATTRIBUTES.has(attribute); // Only write boolean value as attribute if meaningful.

    if (typeof value === 'boolean' && !isMeaningfulAttribute) {
      continue;
    }

    result += ' ' + attribute; // Boolean attributes should write attribute name, but without value.
    // Mere presence of attribute name is effective truthiness.

    if (isBooleanAttribute) {
      continue;
    }

    if (typeof value === 'string') {
      value = Object(_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_4__["escapeAttribute"])(value);
    }

    result += '="' + value + '"';
  }

  return result;
}
/**
 * Renders a style object as a string attribute value.
 *
 * @param {Object} style Style object.
 *
 * @return {string} Style attribute value.
 */

function renderStyle(style) {
  // Only generate from object, e.g. tolerate string value.
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(style)) {
    return style;
  }

  var result;

  for (var property in style) {
    var value = style[property];

    if (null === value || undefined === value) {
      continue;
    }

    if (result) {
      result += ';';
    } else {
      result = '';
    }

    var normalName = getNormalStylePropertyName(property);
    var normalValue = getNormalStylePropertyValue(property, value);
    result += normalName + ':' + normalValue;
  }

  return result;
}
/* harmony default export */ __webpack_exports__["default"] = (renderElement);
//# sourceMappingURL=serialize.js.map

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeAmpersand", function() { return escapeAmpersand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeQuotationMark", function() { return escapeQuotationMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeLessThan", function() { return escapeLessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeAttribute", function() { return escapeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHTML", function() { return escapeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeEditableHTML", function() { return escapeEditableHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidAttributeName", function() { return isValidAttributeName; });
/* harmony import */ var _escape_greater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/**
 * Internal dependencies
 */

/**
 * Regular expression matching invalid attribute names.
 *
 * "Attribute names must consist of one or more characters other than controls,
 * U+0020 SPACE, U+0022 ("), U+0027 ('), U+003E (>), U+002F (/), U+003D (=),
 * and noncharacters."
 *
 * @see https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
 *
 * @type {RegExp}
 */

var REGEXP_INVALID_ATTRIBUTE_NAME = /[\u007F-\u009F "'>/="\uFDD0-\uFDEF]/;
/**
 * Returns a string with ampersands escaped. Note that this is an imperfect
 * implementation, where only ampersands which do not appear as a pattern of
 * named, decimal, or hexadecimal character references are escaped. Invalid
 * named references (i.e. ambiguous ampersand) are are still permitted.
 *
 * @see https://w3c.github.io/html/syntax.html#character-references
 * @see https://w3c.github.io/html/syntax.html#ambiguous-ampersand
 * @see https://w3c.github.io/html/syntax.html#named-character-references
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */

function escapeAmpersand(value) {
  return value.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi, '&amp;');
}
/**
 * Returns a string with quotation marks replaced.
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */

function escapeQuotationMark(value) {
  return value.replace(/"/g, '&quot;');
}
/**
 * Returns a string with less-than sign replaced.
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */

function escapeLessThan(value) {
  return value.replace(/</g, '&lt;');
}
/**
 * Returns an escaped attribute value.
 *
 * @see https://w3c.github.io/html/syntax.html#elements-attributes
 *
 * "[...] the text cannot contain an ambiguous ampersand [...] must not contain
 * any literal U+0022 QUOTATION MARK characters (")"
 *
 * Note we also escape the greater than symbol, as this is used by wptexturize to
 * split HTML strings. This is a WordPress specific fix
 *
 * Note that if a resolution for Trac#45387 comes to fruition, it is no longer
 * necessary for `__unstableEscapeGreaterThan` to be used.
 *
 * See: https://core.trac.wordpress.org/ticket/45387
 *
 * @param {string} value Attribute value.
 *
 * @return {string} Escaped attribute value.
 */

function escapeAttribute(value) {
  return Object(_escape_greater__WEBPACK_IMPORTED_MODULE_0__["default"])(escapeQuotationMark(escapeAmpersand(value)));
}
/**
 * Returns an escaped HTML element value.
 *
 * @see https://w3c.github.io/html/syntax.html#writing-html-documents-elements
 *
 * "the text must not contain the character U+003C LESS-THAN SIGN (<) or an
 * ambiguous ampersand."
 *
 * @param {string} value Element value.
 *
 * @return {string} Escaped HTML element value.
 */

function escapeHTML(value) {
  return escapeLessThan(escapeAmpersand(value));
}
/**
 * Returns an escaped Editable HTML element value. This is different from
 * `escapeHTML`, because for editable HTML, ALL ampersands must be escaped in
 * order to render the content correctly on the page.
 *
 * @param {string} value Element value.
 *
 * @return {string} Escaped HTML element value.
 */

function escapeEditableHTML(value) {
  return escapeLessThan(value.replace(/&/g, '&amp;'));
}
/**
 * Returns true if the given attribute name is valid, or false otherwise.
 *
 * @param {string} name Attribute name to test.
 *
 * @return {boolean} Whether attribute is valid.
 */

function isValidAttributeName(name) {
  return !REGEXP_INVALID_ATTRIBUTE_NAME.test(name);
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __unstableEscapeGreaterThan; });
/**
 * Returns a string with greater-than sign replaced.
 *
 * Note that if a resolution for Trac#45387 comes to fruition, it is no longer
 * necessary for `__unstableEscapeGreaterThan` to exist.
 *
 * See: https://core.trac.wordpress.org/ticket/45387
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */
function __unstableEscapeGreaterThan(value) {
  return value.replace(/>/g, '&gt;');
}
//# sourceMappingURL=escape-greater.js.map

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RawHTML; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(129);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */
 // Disable reason: JSDoc linter doesn't seem to parse the union (`&`) correctly.

/* eslint-disable jsdoc/valid-types */

/** @typedef {{children: string} & import('react').ComponentPropsWithoutRef<'div'>} RawHTMLProps */

/* eslint-enable jsdoc/valid-types */

/**
 * Component used as equivalent of Fragment with unescaped HTML, in cases where
 * it is desirable to render dangerous HTML without needing a wrapper element.
 * To preserve additional props, a `div` wrapper _will_ be created if any props
 * aside from `children` are passed.
 *
 * @param {RawHTMLProps} props Children should be a string of HTML. Other props
 *                             will be passed through to div wrapper.
 *
 * @return {JSX.Element} Dangerously-rendering component.
 */

function RawHTML(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  // The DIV wrapper will be stripped by serializer, unless there are
  // non-children props present.
  return Object(_react__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', _objectSpread({
    dangerouslySetInnerHTML: {
      __html: children
    }
  }, props));
}
//# sourceMappingURL=raw-html.js.map

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(143);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(144);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(145);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(147);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(100);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(102);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(148);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(114);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(155);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(159);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(166);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(array_move__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(167);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(169);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(170);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(171);
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(172);
/* harmony import */ var _inspector_controls__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(183);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(178);
/* harmony import */ var _common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(206);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(184);
/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(226);




















(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List - Inspector Controls.
 *
 * @package TenUp\Plugin\ContentList
 *
 * @since 0.0.1
 */
// External Dependencies




 // Internal Dependencies








 // We don't have control over ReactDOM in Gutenberg?

Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_22__["setConfig"])({
  showReactDomPatchNotification: false
});
/**
 * WordPress dependencies
 */

var _wp = wp,
    useState = _wp.element.useState,
    _wp$components = _wp.components,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    dispatch = _wp.data.dispatch,
    __ = _wp.i18n.__;
var defaultItem = {
  id: 0,
  title: '',
  featured_media: ''
};
/**
 * ContList - React Component
 *
 * @param {{}} props
 * @returns {*}
 * @class
 *
 * @since 0.0.1
 */

function ContentList(props) {
  var clientId = props.clientId,
      attributes = props.attributes,
      _props$attributes = props.attributes,
      _props$attributes$ids = _props$attributes.ids,
      ids = _props$attributes$ids === void 0 ? [] : _props$attributes$ids,
      title = _props$attributes.title,
      footer = _props$attributes.footer,
      columns = _props$attributes.columns,
      display = _props$attributes.display,
      queryArgs = _props$attributes.queryArgs,
      itemsToShow = _props$attributes.itemsToShow,
      orientation = _props$attributes.orientation,
      style = _props$attributes.style,
      setAttributes = props.setAttributes;
  /**
   * Current item in edit/search
   */

  var _useState = useState(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_17___default()(_useState, 2),
      itemInEdit = _useState2[0],
      stateItemInEdit = _useState2[1];
  /**
   * Block context/state for item in search.
   */


  var _useState3 = useState(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_17___default()(_useState3, 2),
      itemInSearch = _useState4[0],
      _setItemInSearch = _useState4[1];

  var setItemInSearch = function setItemInSearch() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _setItemInSearch(i);
  };
  /**
   * This function is used throughout ContentList* components
   * to push updates back to setAttributes.
   *
   * @param {Array | {} | string} val Holds value to update attributes with.
   * @param {string} key Which key in our attributes model to update.
   * @param {string} type Typeof data we're passing to this function.
   *
   * @since 0.0.1
   */


  var attrsChange = function attrsChange(val, key) {
    var _attributes$key;

    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var currentVal = (_attributes$key = attributes[key]) !== null && _attributes$key !== void 0 ? _attributes$key : [];

    switch (type) {
      case null:
      case 'string':
        setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()({}, key, val));
        break;

      case 'object':
        setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()({}, key, _objectSpread(_objectSpread({}, currentVal), val)));
        break;

      case 'array':
        setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default()({}, key, [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_15___default()(currentVal), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_15___default()(val))));
        break;
    }
  };
  /**
   * On Sort End, fired from our ContentSortable component.
   * Will update the positions of our content.
   *
   * @param {Array} ids
   *
   * @param {number} oldIndex
   * @param {number} newIndex
   *
   * @since 0.0.1
   */


  var onSortEnd = function onSortEnd(ids, _ref) {
    var oldIndex = _ref.oldIndex,
        newIndex = _ref.newIndex;
    attrsChange(array_move__WEBPACK_IMPORTED_MODULE_21___default()(ids, oldIndex, newIndex), 'ids', null);
  };
  /**
   * Function for moving the Search to a specific ids item, indicating that it is
   * currently being edited.
   *
   * @param {number} i The ids index to move our search to. 0 removes entirely.
   *
   * @since 0.0.1
   */


  var moveSearchToItem = function moveSearchToItem() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    stateItemInEdit(i);
  };
  /**
   * Fetch content http method.
   *
   * @param {string} path The API endpoint to retrieve ids from.
   * @param {{}} params Query params to bind to our request.
   *
   * @since 0.0.1
   */


  var fetchContent = function fetchContent(_ref2) {
    var path = _ref2.path,
        params = _ref2.params;
    Object(_common_http__WEBPACK_IMPORTED_MODULE_29__["http"])(path, params).then(function (res) {
      var content = res;

      if (res.length < 1) {
        content = [];
      }

      attrsChange(Object(_common_utils__WEBPACK_IMPORTED_MODULE_28__["getSlots"])(itemsToShow, content).reduce(function (acc, v) {
        acc.push(v.id);
        return acc;
      }, []), 'ids');
      dispatch('tenup/content').setContent(content);
    });
  };
  /**
   * Add separator to UI if landscape.
   *
   * @returns {[]}
   *
   * @since 0.0.1
   */


  var orientateDisplay = function orientateDisplay() {
    var orientatedDisplay = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_15___default()(display);

    var separatorIndex = orientatedDisplay.findIndex(function (d) {
      return d.name === 'separator';
    });

    if (orientation === 'landscape') {
      if (separatorIndex === -1) {
        orientatedDisplay.splice(1, 0, {
          name: 'separator',
          value: true
        });
        attrsChange(orientatedDisplay, 'display');
      }
    } else if (separatorIndex !== -1) {
      orientatedDisplay.splice(separatorIndex, 1);
    }

    return orientatedDisplay;
  }; // Ensure we're comparing against at least 1 column


  var rowCount = Math.ceil(itemsToShow / columns);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_18__["createElement"])(_context__WEBPACK_IMPORTED_MODULE_30__["ContentListProvider"], {
    value: {
      queryArgs: queryArgs,
      display: display,
      itemInSearch: itemInSearch,
      setItemInSearch: setItemInSearch
    }
  }, itemInSearch !== 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_18__["createElement"])(Modal, {
    title: __('Search for content', 'tenup'),
    onRequestClose: function onRequestClose() {
      return _setItemInSearch(0);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_18__["createElement"])(_components_search__WEBPACK_IMPORTED_MODULE_26__["default"], {
    index: itemInSearch,
    content: ids,
    clientId: clientId,
    onUpdate: function onUpdate(val, key, type) {
      attrsChange(val, key, type);
      setItemInSearch();
    },
    closeSearch: setItemInSearch
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_18__["createElement"])("div", {
    className: "wp-block-content-list".concat(style === '' ? '' : " ".concat(style))
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_18__["createElement"])(_components_header__WEBPACK_IMPORTED_MODULE_24__["default"], {
    title: title,
    attrsChange: attrsChange
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_18__["createElement"])(_inspector_controls__WEBPACK_IMPORTED_MODULE_27__["default"], _objectSpread({
    props: props
  }, {
    style: style,
    columns: columns,
    itemsToShow: itemsToShow,
    orientation: orientation,
    attrsChange: attrsChange,
    fetchContent: fetchContent,
    display: orientateDisplay()
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_18__["createElement"])("div", {
    style: {
      position: 'relative'
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_18__["createElement"])(_components_content__WEBPACK_IMPORTED_MODULE_31__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_14___default()({
    clearItem: function clearItem(i) {
      var newContent = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_15___default()(ids);

      newContent.splice(i, 1, defaultItem);
      attrsChange(newContent, 'ids');
    },
    distance: 1
  }, {
    ids: ids,
    columns: columns,
    onSortEnd: onSortEnd,
    itemInEdit: itemInEdit,
    orientation: orientation,
    attrsChange: attrsChange,
    itemsToShow: itemsToShow,
    moveSearchToItem: moveSearchToItem,
    display: orientateDisplay()
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_18__["createElement"])("div", {
    className: "cl-block__grid-col-".concat(columns, " cl-block__grid cl-block__search ").concat(itemInEdit > 0 ? ' cl-block__search-visible' : ''),
    style: {
      gridAutoRows: "".concat(100 / rowCount, "%")
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_18__["createElement"])("div", {
    className: "cl-search-form__form"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_18__["createElement"])(Button, {
    icon: 'no-alt',
    label: __('Close', 'tenup'),
    onClick: function onClick() {
      return moveSearchToItem();
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_18__["createElement"])(_components_search__WEBPACK_IMPORTED_MODULE_26__["default"], {
    index: itemInEdit,
    content: ids,
    clientId: clientId,
    onUpdate: function onUpdate(val, key, type) {
      attrsChange(val, key, type);
      moveSearchToItem();
    },
    closeSearch: moveSearchToItem
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_18__["createElement"])(_components_footer__WEBPACK_IMPORTED_MODULE_25__["default"], {
    footer: footer,
    attrsChange: attrsChange
  })));
}

__signature__(ContentList, "useState{[itemInEdit, stateItemInEdit](0)}\nuseState{[itemInSearch, _setItemInSearch](0)}");

if (false) {}

var _default =  false ? undefined : ContentList;

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useState, "useState", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/edit.js");
  reactHotLoader.register(Modal, "Modal", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/edit.js");
  reactHotLoader.register(Button, "Button", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/edit.js");
  reactHotLoader.register(dispatch, "dispatch", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/edit.js");
  reactHotLoader.register(__, "__", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/edit.js");
  reactHotLoader.register(defaultItem, "defaultItem", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/edit.js");
  reactHotLoader.register(ContentList, "ContentList", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/edit.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/edit.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var fails = __webpack_require__(9);
var isArray = __webpack_require__(54);
var isObject = __webpack_require__(17);
var toObject = __webpack_require__(52);
var toLength = __webpack_require__(42);
var createProperty = __webpack_require__(104);
var arraySpeciesCreate = __webpack_require__(53);
var arrayMethodHasSpeciesSupport = __webpack_require__(97);
var wellKnownSymbol = __webpack_require__(55);
var V8_VERSION = __webpack_require__(98);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $findIndex = __webpack_require__(49).findIndex;
var addToUnscopables = __webpack_require__(61);
var arrayMethodUsesToLength = __webpack_require__(59);

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $reduce = __webpack_require__(146).left;
var arrayMethodIsStrict = __webpack_require__(58);
var arrayMethodUsesToLength = __webpack_require__(59);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(51);
var toObject = __webpack_require__(52);
var IndexedObject = __webpack_require__(13);
var toLength = __webpack_require__(42);

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var toAbsoluteIndex = __webpack_require__(44);
var toInteger = __webpack_require__(43);
var toLength = __webpack_require__(42);
var toObject = __webpack_require__(52);
var arraySpeciesCreate = __webpack_require__(53);
var createProperty = __webpack_require__(104);
var arrayMethodHasSpeciesSupport = __webpack_require__(97);
var arrayMethodUsesToLength = __webpack_require__(59);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),
/* 148 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(150);

var iterableToArray = __webpack_require__(152);

var unsupportedIterableToArray = __webpack_require__(153);

var nonIterableSpread = __webpack_require__(154);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(151);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 151 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 152 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(151);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 154 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(156);

var iterableToArrayLimit = __webpack_require__(157);

var unsupportedIterableToArray = __webpack_require__(153);

var nonIterableRest = __webpack_require__(158);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 156 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 157 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 158 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(160);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(162)(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(161);
}


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(160);
var assign = __webpack_require__(163);

var ReactPropTypesSecret = __webpack_require__(164);
var checkPropTypes = __webpack_require__(165);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(164);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const arrayMoveMutate = (array, from, to) => {
	const startIndex = to < 0 ? array.length + to : to;
	const item = array.splice(from, 1)[0];
	array.splice(startIndex, 0, item);
};

const arrayMove = (array, from, to) => {
	array = array.slice();
	arrayMoveMutate(array, from, to);
	return array;
};

module.exports = arrayMove;
// TODO: Remove this for the next major release
module.exports.default = arrayMove;

module.exports.mutate = arrayMoveMutate;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else if (false) {} else if (typeof window === 'undefined') {
  // this is just server environment
  module.exports = __webpack_require__(168);
} else if (true) {
  module.exports = __webpack_require__(168);
  module.exports.AppContainer.warnAboutHMRDisabled = true;
  module.exports.hot.shouldWrapWithAppContainer = true;
} else { var jsFeaturesPresent, evalError, evalAllowed; }


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(128));function AppContainer(e){return AppContainer.warnAboutHMRDisabled&&(AppContainer.warnAboutHMRDisabled=!0,console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."),console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")),React.Children.only(e.children)}AppContainer.warnAboutHMRDisabled=!1;var hot=function e(){return e.shouldWrapWithAppContainer?function(e){return function(n){return React.createElement(AppContainer,null,React.createElement(e,n))}}:function(e){return e}};hot.shouldWrapWithAppContainer=!1;var areComponentsEqual=function(e,n){return e===n},setConfig=function(){},cold=function(e){return e},configureComponent=function(){};exports.AppContainer=AppContainer,exports.hot=hot,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig,exports.cold=cold,exports.configureComponent=configureComponent;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  var hot = __webpack_require__(167).hot;
  if (false) { var parent, cache; }
  // setup hot for caller
  exports.hot = hot(parent);
} else {}


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List - Title Component.
 */


/**
 * WP dependencies
 */

var _wp = wp,
    TextControl = _wp.components.TextControl,
    _wp$i18n = _wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf,
    RichText = _wp.blockEditor.RichText,
    useState = _wp.element.useState;
/**
 * ContList - React Component
 */

function Header(_ref) {
  var title = _ref.title,
      attrsChange = _ref.attrsChange;

  var _useState = useState('' !== title.text),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      urlDisplay = _useState2[0],
      setUrlDisplay = _useState2[1];

  var styles = {
    display: urlDisplay ? 'block' : 'none'
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "cl-block__title cl-block__grid"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
    tagName: "strong",
    multiline: false,
    placeholder: __('Add title?', 'tenup'),
    value: title.text,
    className: "tabitem-label",
    allowedFormats: [],
    keepPlaceholderOnFocus: true,
    onChange: function onChange(text) {
      return attrsChange({
        text: text
      }, 'title', 'object');
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
    tagName: "span",
    multiline: false,
    placeholder: __('Add call to action?', 'tenup'),
    value: title.ctaText,
    className: "tabitem-label",
    allowedFormats: [],
    keepPlaceholderOnFocus: true,
    onChange: function onChange(ctaText) {
      setUrlDisplay(0 < ctaText.length);
      attrsChange({
        ctaText: ctaText
      }, 'title', 'object');
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "cl-block__title",
    style: styles
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    value: title.url,
    placeholder: sprintf(__('Add URL for "%s" text', 'tenup'), title.ctaText),
    type: "url",
    onChange: function onChange(url) {
      return attrsChange({
        url: url
      }, 'title', 'object');
    }
  })));
}

__signature__(Header, "useState{[ urlDisplay, setUrlDisplay ]('' !== title.text)}");

Header.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    ctaText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
  }),
  attrsChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
var _default = Header;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextControl, "TextControl", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/header.js");
  reactHotLoader.register(__, "__", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/header.js");
  reactHotLoader.register(sprintf, "sprintf", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/header.js");
  reactHotLoader.register(RichText, "RichText", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/header.js");
  reactHotLoader.register(useState, "useState", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/header.js");
  reactHotLoader.register(Header, "Header", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/header.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/header.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List - Title Component.
 */


/**
 * WP dependencies
 */

var _wp = wp,
    TextControl = _wp.components.TextControl,
    _wp$i18n = _wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf,
    RichText = _wp.blockEditor.RichText,
    useState = _wp.element.useState;
/**
 * ContList - React Component
 */

function Footer(_ref) {
  var footer = _ref.footer,
      attrsChange = _ref.attrsChange;

  var _useState = useState('' !== footer.text),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      urlDisplay = _useState2[0],
      setUrlDisplay = _useState2[1];

  var styles = {
    display: urlDisplay ? 'block' : 'none'
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "cl-block__title cl-block__grid"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
    tagName: "span",
    multiline: false,
    placeholder: __('Add call to action?', 'tenup'),
    value: footer.text,
    className: "tabitem-label",
    allowedFormats: [],
    keepPlaceholderOnFocus: true,
    onChange: function onChange(text) {
      setUrlDisplay(0 < text.length);
      attrsChange({
        text: text
      }, 'footer', 'object');
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "cl-block__title",
    style: styles
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    value: footer.url,
    placeholder: sprintf(__('Add URL for "%s" text', 'tenup'), footer.text),
    type: "url",
    onChange: function onChange(url) {
      return attrsChange({
        url: url
      }, 'footer', 'object');
    }
  })));
}

__signature__(Footer, "useState{[ urlDisplay, setUrlDisplay ]('' !== footer.text)}");

Footer.propTypes = {
  footer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    ctaText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
  }),
  attrsChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
var _default = Footer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextControl, "TextControl", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/footer.js");
  reactHotLoader.register(__, "__", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/footer.js");
  reactHotLoader.register(sprintf, "sprintf", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/footer.js");
  reactHotLoader.register(RichText, "RichText", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/footer.js");
  reactHotLoader.register(useState, "useState", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/footer.js");
  reactHotLoader.register(Footer, "Footer", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/footer.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/footer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(173);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(155);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(159);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var accessible_autocomplete_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(175);
/* harmony import */ var accessible_autocomplete_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(accessible_autocomplete_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(177);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(178);
/* harmony import */ var _common_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(181);





(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List Block Search Component.
 *
 * @package TenUp
 */

/** 3rd Party Dependencies */



/** Internal Dependencies */




/** WordPress Dependencies */

var _wp = wp,
    _wp$data = _wp.data,
    dispatch = _wp$data.dispatch,
    select = _wp$data.select,
    useState = _wp.element.useState,
    SelectControl = _wp.components.SelectControl,
    _wp$i18n = _wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf,
    addQueryArgs = _wp.url.addQueryArgs,
    apiFetch = _wp.apiFetch;
/** Window Dependencies */

var _lodash = lodash,
    debounce = _lodash.debounce;
var _tenUp = tenUp,
    typesTaxes = _tenUp.typesTaxes;
/**
 * ContentListSearch Component
 */

function Search(props) {
  var _useState = useState({
    text: '',
    type: 'info'
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = useState(typesTaxes[0].rest_base),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      contentType = _useState4[0],
      setContentType = _useState4[1];
  /**
   * Debounce wrapped API search function.
   *
   * @param keyword
   * @param populateResults
   */


  var search = function search(keyword, populateResults) {
    var args = {
      'content-list': 1,
      search: keyword,
      per_page: 10
    };
    dispatch('tenup/search').toggleIsSearching(true);
    setStatus({
      text: "".concat(sprintf(__('Searching for "%s" in %s', 'tenup'), keyword, Object(_common_utils__WEBPACK_IMPORTED_MODULE_8__["getTypeBy"])('rest_base', contentType).label), "."),
      type: 'info'
    });
    apiFetch({
      path: addQueryArgs("wp/v2/".concat(contentType), args)
    }).then(function (contents) {
      if (contents.length === 0) {
        setStatus({
          text: sprintf(__('0 results found for, "%s".', 'tenup'), keyword),
          type: 'error'
        });
        dispatch('tenup/search').toggleIsSearching(false);
        return;
      }

      setStatus({
        text: sprintf(__('%s results found for, "%s".', 'tenup'), contents.length, keyword),
        type: 'success'
      });
      /**
       * Add Search to state.results
       */

      dispatch('tenup/search').addRecords(Object(_common_search__WEBPACK_IMPORTED_MODULE_9__["parseSearch"])(contents, [contentType]));
      dispatch('tenup/content').setContent(contents);
      /**
       * Populate Drop-down
       */

      populateResults(Object(_common_utils__WEBPACK_IMPORTED_MODULE_8__["prepareContent"])(contents));
      /**
       * Toggle searching state
       */

      dispatch('tenup/search').toggleIsSearching(false);
    })["catch"](function (err) {
      console.error(err);
      /**
       * Toggle searching state
       */

      dispatch('tenup/search').toggleIsSearching(false);
    });
  };
  /**
   * Search Options
   */


  var contentTypeOptions = typesTaxes.reduce(function (acc, v) {
    acc.push({
      label: v.label,
      value: v.rest_base
    });
    return acc;
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, '' !== status.text && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    notice: status.text,
    type: status.type
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(SelectControl, {
    label: __('Content type:', 'tenup'),
    value: contentType,
    onChange: function onChange(type) {
      setContentType(type);
    },
    options: contentTypeOptions
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: 'components-base-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("label", {
    className: 'components-base-control__label',
    htmlFor: "cl-block__autocomplete-".concat(props.clientId)
  }, __('Search term:')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(accessible_autocomplete_react__WEBPACK_IMPORTED_MODULE_6___default.a, {
    minLength: 3,
    id: "cl-block__autocomplete-".concat(props.clientId),
    defaultValue: __('Search for content?', 'tenup'),
    source: debounce(function (keyword, populateResults) {
      if (select('tenup/search').isSearching()) {
        return;
      }

      var stateResults = Object.values(Object(_common_search__WEBPACK_IMPORTED_MODULE_9__["searchStateResults"])(keyword, [contentType]));
      setStatus({
        text: ''
      });

      if (stateResults.length > 1) {
        populateResults(Object.values(stateResults));
        return;
      }

      search(keyword, populateResults);
    }, 800),
    showNoOptionsFound: false,
    autoSelect: true,
    overlay: 'overlay',
    templates: {
      inputValue: function inputValue() {
        return '';
      },
      suggestion: _common_search__WEBPACK_IMPORTED_MODULE_9__["renderSuggestion"]
    },
    onConfirm: function onConfirm(v) {
      Object(_common_search__WEBPACK_IMPORTED_MODULE_9__["suggestionSelect"])(v, props);
      setStatus({
        text: ''
      });
    }
  })));
}

__signature__(Search, "useState{[ status, setStatus ]({\n        text: '',\n        type: 'info',\n    })}\nuseState{[ contentType, setContentType ](typesTaxes[ 0 ].rest_base)}");

Search.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  content: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number),
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  clientId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  closeSearch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
var _default = Search;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(apiFetch, "apiFetch", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/search.js");
  reactHotLoader.register(dispatch, "dispatch", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/search.js");
  reactHotLoader.register(select, "select", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/search.js");
  reactHotLoader.register(useState, "useState", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/search.js");
  reactHotLoader.register(SelectControl, "SelectControl", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/search.js");
  reactHotLoader.register(__, "__", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/search.js");
  reactHotLoader.register(sprintf, "sprintf", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/search.js");
  reactHotLoader.register(addQueryArgs, "addQueryArgs", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/search.js");
  reactHotLoader.register(debounce, "debounce", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/search.js");
  reactHotLoader.register(typesTaxes, "typesTaxes", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/search.js");
  reactHotLoader.register(Search, "Search", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/search.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/search.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var $values = __webpack_require__(174).values;

// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var objectKeys = __webpack_require__(64);
var toIndexedObject = __webpack_require__(12);
var propertyIsEnumerable = __webpack_require__(10).f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(176)


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(e,t){ true?module.exports=t(__webpack_require__(128)):undefined})(this,function(n){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=31)}([function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var v=n(0),m=n(5),y=n(6),g=n(14),b=n(16),O="prototype",w=function(e,t,n){var r,o,i,u,a=e&w.F,s=e&w.G,l=e&w.S,c=e&w.P,p=e&w.B,f=s?v:l?v[t]||(v[t]={}):(v[t]||{})[O],d=s?m:m[t]||(m[t]={}),h=d[O]||(d[O]={});for(r in s&&(n=t),n)i=((o=!a&&f&&f[r]!==undefined)?f:n)[r],u=p&&o?b(i,v):c&&"function"==typeof i?b(Function.call,i):i,f&&g(f,r,i,e&w.U),d[r]!=i&&y(d,r,u),c&&h[r]!=i&&(h[r]=i)};v.core=m,w.F=1,w.G=2,w.S=4,w.P=8,w.B=16,w.W=32,w.U=64,w.R=128,e.exports=w},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(7),o=n(35);e.exports=n(3)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var o=n(8),i=n(33),u=n(34),a=Object.defineProperty;t.f=n(3)?Object.defineProperty:function(e,t,n){if(o(e),t=u(t,!0),o(n),i)try{return a(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(2);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(e===undefined?"":e,")_",(++n+r).toString(36))}},function(e,t,n){var r=n(20);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t){e.exports=function(e){if(e==undefined)throw TypeError("Can't call method on  "+e);return e}},function(e,t){e.exports=n},function(e,t,n){var r=n(2),o=n(0).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,n){var i=n(0),u=n(6),a=n(15),s=n(9)("src"),r="toString",o=Function[r],l=(""+o).split(r);n(5).inspectSource=function(e){return o.call(e)},(e.exports=function(e,t,n,r){var o="function"==typeof n;o&&(a(n,"name")||u(n,"name",t)),e[t]!==n&&(o&&(a(n,s)||u(n,s,e[t]?""+e[t]:l.join(String(t)))),e===i?e[t]=n:r?e[t]?e[t]=n:u(e,t,n):(delete e[t],u(e,t,n)))})(Function.prototype,r,function(){return"function"==typeof this&&this[s]||o.call(this)})},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var i=n(17);e.exports=function(r,o,e){if(i(r),o===undefined)return r;switch(e){case 1:return function(e){return r.call(o,e)};case 2:return function(e,t){return r.call(o,e,t)};case 3:return function(e,t,n){return r.call(o,e,t,n)}}return function(){return r.apply(o,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(37),o=n(26);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t,n){var r=n(10),o=n(11);e.exports=function(e){return r(o(e))}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var s=n(19),l=n(22),c=n(38);e.exports=function(a){return function(e,t,n){var r,o=s(e),i=l(o.length),u=c(n,i);if(a&&t!=t){for(;u<i;)if((r=o[u++])!=r)return!0}else for(;u<i;u++)if((a||u in o)&&o[u]===t)return a||u||0;return!a&&-1}}},function(e,t,n){var r=n(23),o=Math.min;e.exports=function(e){return 0<e?o(r(e),9007199254740991):0}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?r:n)(e)}},function(e,t,n){var r=n(25)("keys"),o=n(9);e.exports=function(e){return r[e]||(r[e]=o(e))}},function(e,t,n){var r=n(5),o=n(0),i="__core-js_shared__",u=o[i]||(o[i]={});(e.exports=function(e,t){return u[e]||(u[e]=t!==undefined?t:{})})("versions",[]).push({version:r.version,mode:n(39)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(11);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(1);r(r.S,"Object",{create:n(42)})},function(e,t,n){var r=n(25)("wks"),o=n(9),i=n(0).Symbol,u="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=u&&i[e]||(u?i:o)("Symbol."+e))}).store=r},function(e,t,n){"use strict";var r=n(4);e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0,n(32),n(28),n(45),n(46),n(51),n(52),n(55);var $=n(12),J=o(n(57)),r=o(n(58));function o(e){return e&&e.__esModule?e:{"default":e}}function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u={13:"enter",27:"escape",32:"space",38:"up",40:"down"};function Y(){return"undefined"!=typeof navigator&&!(!navigator.userAgent.match(/(iPod|iPhone|iPad)/g)||!navigator.userAgent.match(/AppleWebKit/g))}var a=function(n){function e(e){var t;return(t=n.call(this,e)||this).elementReferences={},t.state={focused:null,hovered:null,menuOpen:!1,options:e.defaultValue?[e.defaultValue]:[],query:e.defaultValue,validChoiceMade:!1,selected:null,ariaHint:!0},t.handleComponentBlur=t.handleComponentBlur.bind(i(i(t))),t.handleKeyDown=t.handleKeyDown.bind(i(i(t))),t.handleUpArrow=t.handleUpArrow.bind(i(i(t))),t.handleDownArrow=t.handleDownArrow.bind(i(i(t))),t.handleEnter=t.handleEnter.bind(i(i(t))),t.handlePrintableKey=t.handlePrintableKey.bind(i(i(t))),t.handleListMouseLeave=t.handleListMouseLeave.bind(i(i(t))),t.handleOptionBlur=t.handleOptionBlur.bind(i(i(t))),t.handleOptionClick=t.handleOptionClick.bind(i(i(t))),t.handleOptionFocus=t.handleOptionFocus.bind(i(i(t))),t.handleOptionMouseDown=t.handleOptionMouseDown.bind(i(i(t))),t.handleOptionMouseEnter=t.handleOptionMouseEnter.bind(i(i(t))),t.handleInputBlur=t.handleInputBlur.bind(i(i(t))),t.handleInputChange=t.handleInputChange.bind(i(i(t))),t.handleInputFocus=t.handleInputFocus.bind(i(i(t))),t.pollInputElement=t.pollInputElement.bind(i(i(t))),t.getDirectInputChanges=t.getDirectInputChanges.bind(i(i(t))),t}(function r(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t})(e,n);var t=e.prototype;return t.isQueryAnOption=function(e,t){var n=this;return-1!==t.map(function(e){return n.templateInputValue(e).toLowerCase()}).indexOf(e.toLowerCase())},t.componentDidMount=function(){this.pollInputElement()},t.componentWillUnmount=function(){clearTimeout(this.$pollInput)},t.pollInputElement=function(){var e=this;this.getDirectInputChanges(),this.$pollInput=setTimeout(function(){e.pollInputElement()},100)},t.getDirectInputChanges=function(){var e=this.elementReferences[-1];e&&e.value!==this.state.query&&this.handleInputChange({target:{value:e.value}})},t.componentDidUpdate=function(e,t){var n=this.state.focused,r=null===n,o=t.focused!==n;o&&!r&&this.elementReferences[n].focus();var i=-1===n,u=o&&null===t.focused;if(i&&u){var a=this.elementReferences[n];a.setSelectionRange(0,a.value.length)}},t.hasAutoselect=function(){return!Y()&&this.props.autoselect},t.templateInputValue=function(e){var t=this.props.templates&&this.props.templates.inputValue;return t?t(e):e},t.templateSuggestion=function(e){var t=this.props.templates&&this.props.templates.suggestion;return t?t(e):e},t.handleComponentBlur=function(e){var t,n=this.state,r=n.options,o=n.query,i=n.selected;this.props.confirmOnBlur?(t=e.query||o,this.props.onConfirm(r[i])):t=o,this.setState({focused:null,menuOpen:e.menuOpen||!1,query:t,selected:null,validChoiceMade:this.isQueryAnOption(t,r)})},t.handleListMouseLeave=function(e){this.setState({hovered:null})},t.handleOptionBlur=function(e,t){var n=this.state,r=n.focused,o=n.menuOpen,i=n.options,u=n.selected,a=null===e.relatedTarget,s=e.relatedTarget===this.elementReferences[-1],l=r!==t&&-1!==r;if(!l&&a||!(l||s)){var c=o&&Y();this.handleComponentBlur({menuOpen:c,query:this.templateInputValue(i[u])})}},t.handleInputBlur=function(e){var t=this.state,n=t.focused,r=t.menuOpen,o=t.options,i=t.query,u=t.selected;if(!(-1!==n)){var a=r&&Y(),s=Y()?i:this.templateInputValue(o[u]);this.handleComponentBlur({menuOpen:a,query:s})}},t.handleInputChange=function(e){var n=this,t=this.props,r=t.minLength,o=t.source,i=t.showAllValues,u=this.hasAutoselect(),a=e.target.value,s=0===a.length,l=this.state.query.length!==a.length,c=a.length>=r;this.setState({query:a,ariaHint:s}),i||!s&&l&&c?o(a,function(e){var t=0<e.length;n.setState({menuOpen:t,options:e,selected:u&&t?0:-1,validChoiceMade:!1})}):!s&&c||this.setState({menuOpen:!1,options:[]})},t.handleInputClick=function(e){this.handleInputChange(e)},t.handleInputFocus=function(e){var t=this.state,n=t.query,r=t.validChoiceMade,o=t.options,i=this.props.minLength,u=!r&&n.length>=i&&0<o.length;u?this.setState(function(e){var t=e.menuOpen;return{focused:-1,menuOpen:u||t,selected:-1}}):this.setState({focused:-1})},t.handleOptionFocus=function(e){this.setState({focused:e,hovered:null,selected:e})},t.handleOptionMouseEnter=function(e,t){Y()||this.setState({hovered:t})},t.handleOptionClick=function(e,t){var n=this.state.options[t],r=this.templateInputValue(n);this.props.onConfirm(n),this.setState({focused:-1,hovered:null,menuOpen:!1,query:r,selected:-1,validChoiceMade:!0}),this.forceUpdate()},t.handleOptionMouseDown=function(e){e.preventDefault()},t.handleUpArrow=function(e){e.preventDefault();var t=this.state,n=t.menuOpen,r=t.selected;-1!==r&&n&&this.handleOptionFocus(r-1)},t.handleDownArrow=function(e){var t=this;if(e.preventDefault(),this.props.showAllValues&&!1===this.state.menuOpen)e.preventDefault(),this.props.source("",function(e){t.setState({menuOpen:!0,options:e,selected:0,focused:0,hovered:null})});else if(!0===this.state.menuOpen){var n=this.state,r=n.menuOpen,o=n.options,i=n.selected;i!==o.length-1&&r&&this.handleOptionFocus(i+1)}},t.handleSpace=function(e){var t=this;this.props.showAllValues&&!1===this.state.menuOpen&&""===this.state.query&&(e.preventDefault(),this.props.source("",function(e){t.setState({menuOpen:!0,options:e})})),-1!==this.state.focused&&(e.preventDefault(),this.handleOptionClick(e,this.state.focused))},t.handleEnter=function(e){this.state.menuOpen&&(e.preventDefault(),0<=this.state.selected&&this.handleOptionClick(e,this.state.selected))},t.handlePrintableKey=function(e){var t=this.elementReferences[-1];e.target===t||t.focus()},t.handleKeyDown=function(e){switch(u[e.keyCode]){case"up":this.handleUpArrow(e);break;case"down":this.handleDownArrow(e);break;case"space":this.handleSpace(e);break;case"enter":this.handleEnter(e);break;case"escape":this.handleComponentBlur({query:this.state.query});break;default:(function t(e){return 47<e&&e<58||32===e||8===e||64<e&&e<91||95<e&&e<112||185<e&&e<193||218<e&&e<223})(e.keyCode)&&this.handlePrintableKey(e)}},t.render=function(){var e,i=this,t=this.props,n=t.cssNamespace,r=t.displayMenu,u=t.id,o=t.minLength,a=t.name,s=t.placeholder,l=t.required,c=t.showAllValues,p=t.tNoResults,f=t.tStatusQueryTooShort,d=t.tStatusNoResults,h=t.tStatusSelectedOption,v=t.tStatusResults,m=t.tAssistiveHint,y=t.dropdownArrow,g=this.state,b=g.focused,O=g.hovered,w=g.menuOpen,x=g.options,_=g.query,S=g.selected,C=g.ariaHint,M=g.validChoiceMade,E=this.hasAutoselect(),I=-1===b,j=0===x.length,A=0!==_.length,P=_.length>=o,F=this.props.showNoOptionsFound&&I&&j&&A&&P,D=n+"__wrapper",R=n+"__input",k=null!==b?" "+R+"--focused":"",q=this.props.showAllValues?" "+R+"--show-all-values":" "+R+"--default",L=n+"__dropdown-arrow-down",N=-1!==b&&null!==b,B=n+"__menu",T=B+"--"+r,V=B+"--"+(w||F?"visible":"hidden"),U=n+"__option",K=n+"__hint",H=this.templateInputValue(x[S]),Q=H&&0===H.toLowerCase().indexOf(_.toLowerCase())&&E?_+H.substr(_.length):"",W=u+"__assistiveHint",z=C?{"aria-describedby":W}:null;return c&&"string"==typeof(e=y({className:L}))&&(e=(0,$.createElement)("div",{className:n+"__dropdown-arrow-down-wrapper",dangerouslySetInnerHTML:{__html:e}})),(0,$.createElement)("div",{className:D,onKeyDown:this.handleKeyDown},(0,$.createElement)(J["default"],{id:u,length:x.length,queryLength:_.length,minQueryLength:o,selectedOption:this.templateInputValue(x[S]),selectedOptionIndex:S,validChoiceMade:M,isInFocus:null!==this.state.focused,tQueryTooShort:f,tNoResults:d,tSelectedOption:h,tResults:v}),Q&&(0,$.createElement)("span",null,(0,$.createElement)("input",{className:K,readonly:!0,tabIndex:"-1",value:Q})),(0,$.createElement)("input",X({"aria-expanded":w?"true":"false","aria-activedescendant":!!N&&u+"__option--"+b,"aria-owns":u+"__listbox","aria-autocomplete":this.hasAutoselect()?"both":"list"},z,{autoComplete:"off",className:""+R+k+q,id:u,onClick:function(e){return i.handleInputClick(e)},onBlur:this.handleInputBlur},function G(e){return{onChange:e}}(this.handleInputChange),{onFocus:this.handleInputFocus,name:a,placeholder:s,ref:function(e){i.elementReferences[-1]=e},type:"text",role:"combobox",required:l,value:_})),e,(0,$.createElement)("ul",{className:B+" "+T+" "+V,onMouseLeave:function(e){return i.handleListMouseLeave(e)},id:u+"__listbox",role:"listbox"},x.map(function(e,t){var n=(-1===b?S===t:b===t)&&null===O?" "+U+"--focused":"",r=t%2?" "+U+"--odd":"",o=Y()?"<span id="+u+"__option-suffix--"+t+' style="border:0;clip:rect(0 0 0 0);height:1px;marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;whiteSpace:nowrap;width:1px"> '+(t+1)+" of "+x.length+"</span>":"";return(0,$.createElement)("li",{"aria-selected":b===t?"true":"false",className:""+U+n+r,dangerouslySetInnerHTML:{__html:i.templateSuggestion(e)+o},id:u+"__option--"+t,key:t,onBlur:function(e){return i.handleOptionBlur(e,t)},onClick:function(e){return i.handleOptionClick(e,t)},onMouseDown:i.handleOptionMouseDown,onMouseEnter:function(e){return i.handleOptionMouseEnter(e,t)},ref:function(e){i.elementReferences[t]=e},role:"option",tabIndex:"-1","aria-posinset":t+1,"aria-setsize":x.length})}),F&&(0,$.createElement)("li",{className:U+" "+U+"--no-results"},p())),(0,$.createElement)("span",{id:W,style:{display:"none"}},m()))},e}($.Component);(t["default"]=a).defaultProps={autoselect:!1,cssNamespace:"autocomplete",defaultValue:"",displayMenu:"inline",minLength:0,name:"input-autocomplete",placeholder:"",onConfirm:function(){},confirmOnBlur:!0,showNoOptionsFound:!0,showAllValues:!1,required:!1,tNoResults:function(){return"No results found"},tAssistiveHint:function(){return"When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures."},dropdownArrow:r["default"]}},function(e,t,n){var r=n(1);r(r.S+r.F,"Object",{assign:n(36)})},function(e,t,n){e.exports=!n(3)&&!n(4)(function(){return 7!=Object.defineProperty(n(13)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var o=n(2);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){"use strict";var f=n(18),d=n(40),h=n(41),v=n(27),m=n(10),o=Object.assign;e.exports=!o||n(4)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=o({},e)[n]||Object.keys(o({},t)).join("")!=r})?function(e,t){for(var n=v(e),r=arguments.length,o=1,i=d.f,u=h.f;o<r;)for(var a,s=m(arguments[o++]),l=i?f(s).concat(i(s)):f(s),c=l.length,p=0;p<c;)u.call(s,a=l[p++])&&(n[a]=s[a]);return n}:o},function(e,t,n){var u=n(15),a=n(19),s=n(21)(!1),l=n(24)("IE_PROTO");e.exports=function(e,t){var n,r=a(e),o=0,i=[];for(n in r)n!=l&&u(r,n)&&i.push(n);for(;t.length>o;)u(r,n=t[o++])&&(~s(i,n)||i.push(n));return i}},function(e,t,n){var r=n(23),o=Math.max,i=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):i(e,t)}},function(e,t){e.exports=!1},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,r){var o=r(8),i=r(43),u=r(26),a=r(24)("IE_PROTO"),s=function(){},l="prototype",c=function(){var e,t=r(13)("iframe"),n=u.length;for(t.style.display="none",r(44).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;n--;)delete c[l][u[n]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(s[l]=o(e),n=new s,s[l]=null,n[a]=e):n=c(),t===undefined?n:i(n,t)}},function(e,t,n){var u=n(7),a=n(8),s=n(18);e.exports=n(3)?Object.defineProperties:function(e,t){a(e);for(var n,r=s(t),o=r.length,i=0;i<o;)u.f(e,n=r[i++],t[n]);return e}},function(e,t,n){var r=n(0).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(7).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(3)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},function(e,t,n){"use strict";var r=n(1),o=n(47)(1);r(r.P+r.F*!n(30)([].map,!0),"Array",{map:function(e){return o(this,e,arguments[1])}})},function(e,t,n){var b=n(16),O=n(10),w=n(27),x=n(22),r=n(48);e.exports=function(p,e){var f=1==p,d=2==p,h=3==p,v=4==p,m=6==p,y=5==p||m,g=e||r;return function(e,t,n){for(var r,o,i=w(e),u=O(i),a=b(t,n,3),s=x(u.length),l=0,c=f?g(e,s):d?g(e,0):undefined;l<s;l++)if((y||l in u)&&(o=a(r=u[l],l,i),p))if(f)c[l]=o;else if(o)switch(p){case 3:return!0;case 5:return r;case 6:return l;case 2:c.push(r)}else if(v)return!1;return m?-1:h||v?v:c}}},function(e,t,n){var r=n(49);e.exports=function(e,t){return new(r(e))(t)}},function(e,t,n){var r=n(2),o=n(50),i=n(29)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=undefined),r(t)&&null===(t=t[i])&&(t=undefined)),t===undefined?Array:t}},function(e,t,n){var r=n(20);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){"use strict";var r=n(1),o=n(21)(!1),i=[].indexOf,u=!!i&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(u||!n(30)(i)),"Array",{indexOf:function(e){return u?i.apply(this,arguments)||0:o(this,e,arguments[1])}})},function(e,t,n){var r=n(1);r(r.P,"Function",{bind:n(53)})},function(e,t,n){"use strict";var i=n(17),u=n(2),a=n(54),s=[].slice,l={};e.exports=Function.bind||function(t){var n=i(this),r=s.call(arguments,1),o=function(){var e=r.concat(s.call(arguments));return this instanceof o?function(e,t,n){if(!(t in l)){for(var r=[],o=0;o<t;o++)r[o]="a["+o+"]";l[t]=Function("F,a","return new F("+r.join(",")+")")}return l[t](e,n)}(n,e.length,e):a(n,e,t)};return u(n.prototype)&&(o.prototype=n.prototype),o}},function(e,t){e.exports=function(e,t,n){var r=n===undefined;switch(t.length){case 0:return r?e():e.call(n);case 1:return r?e(t[0]):e.call(n,t[0]);case 2:return r?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return r?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return r?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)}},function(e,t,n){n(56)("match",1,function(r,o,e){return[function(e){"use strict";var t=r(this),n=e==undefined?undefined:e[o];return n!==undefined?n.call(e,t):new RegExp(e)[o](String(t))},e]})},function(e,t,n){"use strict";var a=n(6),s=n(14),l=n(4),c=n(11),p=n(29);e.exports=function(t,e,n){var r=p(t),o=n(c,r,""[t]),i=o[0],u=o[1];l(function(){var e={};return e[r]=function(){return 7},7!=""[t](e)})&&(s(String.prototype,t,i),a(RegExp.prototype,r,2==e?function(e,t){return u.call(e,this,t)}:function(e){return u.call(e,this)}))}},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0,n(28);var b=n(12);var r=function r(o,i,u){var a;return function(){var e=this,t=arguments,n=function n(){a=null,u||o.apply(e,t)},r=u&&!a;clearTimeout(a),a=setTimeout(n,i),r&&o.apply(e,t)}},o=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))||this).state={bump:!1,debounced:!1},e}(function n(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t})(e,o);var t=e.prototype;return t.componentWillMount=function(){var e=this;this.debounceStatusUpdate=r(function(){if(!e.state.debounced){var t=!e.props.isInFocus||e.props.validChoiceMade;e.setState(function(e){return{bump:!e.bump,debounced:!0,silenced:t}})}},1400)},t.componentWillReceiveProps=function(e){e.queryLength;this.setState({debounced:!1})},t.render=function(){var e=this.props,t=e.id,n=e.length,r=e.queryLength,o=e.minQueryLength,i=e.selectedOption,u=e.selectedOptionIndex,a=e.tQueryTooShort,s=e.tNoResults,l=e.tSelectedOption,c=e.tResults,p=this.state,f=p.bump,d=p.debounced,h=p.silenced,v=r<o,m=0===n,y=i?l(i,n,u):"",g=null;return g=v?a(o):m?s():c(n,y),this.debounceStatusUpdate(),(0,b.createElement)("div",{style:{border:"0",clip:"rect(0 0 0 0)",height:"1px",marginBottom:"-1px",marginRight:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px"}},(0,b.createElement)("div",{id:t+"__status--A",role:"status","aria-atomic":"true","aria-live":"polite"},!h&&d&&f?g:""),(0,b.createElement)("div",{id:t+"__status--B",role:"status","aria-atomic":"true","aria-live":"polite"},h||!d||f?"":g))},e}(b.Component);(t["default"]=o).defaultProps={tQueryTooShort:function(e){return"Type in "+e+" or more characters for results"},tNoResults:function(){return"No search results"},tSelectedOption:function(e,t,n){return e+" "+(n+1)+" of "+t+" is highlighted"},tResults:function(e,t){return e+" "+(1===e?"result":"results")+" "+(1===e?"is":"are")+" available. "+t}}},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var r=n(12),o=function i(e){var t=e.className;return(0,r.createElement)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:t,focusable:"false"},(0,r.createElement)("g",{stroke:"none",fill:"none","fill-rule":"evenodd"},(0,r.createElement)("polygon",{fill:"#000000",points:"0 0 22 0 11 17"})))};t["default"]=o}])});
//# sourceMappingURL=accessible-autocomplete.react.min.js.map

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(159);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List Block Notice.
 *
 * @package TenUp
 */


/**
 * Notice Component.
 *
 * @param props
 * @returns {*}
 * @constructor
 */

var Notice = function Notice(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cl-block__admin-notice notice-".concat(props.type)
  }, props.notice);
};
/**
 * Default Props.
 *
 * @type {{type: string, notice: string}}
 */


Notice.defaultProps = {
  notice: '',
  type: 'info'
};
/**
 * PropTypes
 * @type {{type: *, notice: *}}
 */

if (false) {}

var _default = Notice;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Notice, "Notice", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/notice.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/notice.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareContent", function() { return prepareContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridIndexer", function() { return gridIndexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockConfig", function() { return blockConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxesForType", function() { return taxesForType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindTax", function() { return bindTax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeBy", function() { return getTypeBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxonomyParams", function() { return taxonomyParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlots", function() { return getSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheIndexer", function() { return cacheIndexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commaConjunction", function() { return commaConjunction; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(143);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(179);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(144);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(180);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(145);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(100);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(102);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(114);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_17__);



















(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_17___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var _tenUp = tenUp,
    typesTaxes = _tenUp.typesTaxes,
    postsPerPage = _tenUp.config.postsPerPage;
/**
 * Parses the REST response from wp-api
 *
 * @todo This function is no longer needed. Double check
 *
 * @param {Array} content
 * @param {{}} args
 * @returns {Array}
 */

var prepareContent = function prepareContent(content) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var nArgs = _objectSpread(_objectSpread({}, {
    ppp: 0,
    slot: {}
  }), args);

  var reducedContent = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_16___default()(content);
  /**
   * If our expected count is less then provided
   * add default slots for the difference.
   */


  if (reducedContent.length > 0 && reducedContent.length < nArgs.ppp) {
    var slots = [];

    for (var i = 0, m = nArgs.ppp - reducedContent.length; i < m; i++) {
      slots.push(nArgs.slot);
    }

    reducedContent.push.apply(reducedContent, slots);
  }

  if (Object.hasOwnProperty.call(reducedContent, '_links')) {
    delete reducedContent._links;
  }

  return reducedContent;
};
/**
 * Utility function for outputting an array of [col, row]
 * depending on the columns count and index.
 *
 * @param {number} colsCount
 * @param {number} index
 * @param {number} max
 * @returns {*}
 */

var gridIndexer = function gridIndexer(colsCount, index) {
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

  /** col / row */
  var _return = [];
  var rowCount = 1;
  var colCount = 1;

  for (var i = 1; i <= max; i++) {
    _return.push([colCount, rowCount]);

    if (i % colsCount === 0) {
      rowCount++;
      colCount = 1;
      continue;
    }

    colCount++;
  }

  return _return[index - 1];
};
/**
 * Block Config, generate the Content List block config
 * using overrides passed by 'block_json_tenUp/content-list' filter.
 *
 * @param name
 * @param args
 * @returns {{}}
 */

var blockConfig = function blockConfig(name) {
  var _window$tenUp$model$o, _window$tenUp$model;

  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _objectSpread(_objectSpread({}, args), (_window$tenUp$model$o = (_window$tenUp$model = window.tenUp.model) === null || _window$tenUp$model === void 0 ? void 0 : _window$tenUp$model.overrides) !== null && _window$tenUp$model$o !== void 0 ? _window$tenUp$model$o : {});
};
/**
 *
 * @param type
 * @returns {[]}
 */

var taxesForType = function taxesForType(type) {
  var _typesTaxes$find;

  var _ref = (_typesTaxes$find = typesTaxes.find(function (t) {
    return t.name === type;
  })) !== null && _typesTaxes$find !== void 0 ? _typesTaxes$find : {
    taxonomies: []
  },
      taxonomies = _ref.taxonomies;

  return taxonomies;
};
/**
 * Bind associated taxonomies to a given post type.
 *
 * @param {string} type
 * @param {Array} queryArgsTaxonomies
 *
 * @returns {*|Array}
 *
 * @since 0.0.1
 */

var bindTax = function bindTax(type) {
  var queryArgsTaxonomies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _queryArgsTaxonomies = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_16___default()(queryArgsTaxonomies);

  return taxesForType(type).reduce(function (acc, tax) {
    var savedTax = _queryArgsTaxonomies.findIndex(function (t) {
      return t.name === tax.name && t.terms;
    });

    if (savedTax === -1) {
      acc.push(_objectSpread(_objectSpread({}, tax), {}, {
        terms: []
      }));
      return acc;
    }

    acc.push(_objectSpread(_objectSpread({}, tax), {}, {
      terms: _queryArgsTaxonomies[savedTax].terms
    }));
    return acc;
  }, []);
};
/**
 * Get Type object.
 *
 * @param type
 * @param field
 * @returns {*|{}}
 */

var getTypeBy = function getTypeBy() {
  var _typesTaxes$find2;

  var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'name';
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'post';
  return (_typesTaxes$find2 = typesTaxes.find(function (t) {
    return type === t[field];
  })) !== null && _typesTaxes$find2 !== void 0 ? _typesTaxes$find2 : {};
};
/**
 * Taxonomy params.
 *
 * @param taxonomies
 * @param typeObj
 * @param typeObj
 * @returns {{}|*}
 */

var taxonomyParams = function taxonomyParams(taxonomies, typeObj) {
  if (typeObj.taxonomies.length === 0) {
    return {};
  }

  return taxonomies.reduce(function (acc, tax) {
    var _typeObj$taxonomies$f;

    var exists = (_typeObj$taxonomies$f = typeObj.taxonomies.find(function (t) {
      return t.name === tax.name;
    })) !== null && _typeObj$taxonomies$f !== void 0 ? _typeObj$taxonomies$f : null;

    if (exists === null) {
      return acc;
    }

    var rest_base = exists.rest_base;
    acc[rest_base] = tax.terms.join(',');
    return acc;
  }, {});
};
/**
 * Add blank slots where content is unavailable.
 *
 * @param itemsToShow
 * @param ids
 * @returns {*[]|*}
 */

var getSlots = function getSlots(itemsToShow, ids) {
  if (ids.length >= postsPerPage) {
    return ids;
  }

  return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_16___default()(ids), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_16___default()(new Array(postsPerPage - ids.length).fill({
    id: 0
  })));
};
/**
 *
 * @param p
 * @returns {*}
 */

var cacheIndexer = function cacheIndexer(p) {
  return p.reduce(function (acc, item) {
    if (Object.hasOwnProperty.call(item, '_links')) {
      delete item._links;
    }

    acc[item.id] = item;
    return acc;
  }, {});
};
var commaConjunction = function commaConjunction() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (arr.length === 0) {
    return '';
  }

  if (arr.length === 1) {
    return arr[0];
  }

  var newArr = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_16___default()(arr);

  var last = newArr.pop();
  return "".concat(newArr.join(', ')).concat(newArr > 1 ? ',' : '', " and ").concat(last);
};
var _default = {
  blockConfig: blockConfig,
  gridIndexer: gridIndexer,
  taxesForType: taxesForType
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(typesTaxes, "typesTaxes", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/utils.js");
  reactHotLoader.register(postsPerPage, "postsPerPage", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/utils.js");
  reactHotLoader.register(prepareContent, "prepareContent", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/utils.js");
  reactHotLoader.register(gridIndexer, "gridIndexer", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/utils.js");
  reactHotLoader.register(blockConfig, "blockConfig", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/utils.js");
  reactHotLoader.register(taxesForType, "taxesForType", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/utils.js");
  reactHotLoader.register(bindTax, "bindTax", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/utils.js");
  reactHotLoader.register(getTypeBy, "getTypeBy", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/utils.js");
  reactHotLoader.register(taxonomyParams, "taxonomyParams", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/utils.js");
  reactHotLoader.register(getSlots, "getSlots", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/utils.js");
  reactHotLoader.register(cacheIndexer, "cacheIndexer", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/utils.js");
  reactHotLoader.register(commaConjunction, "commaConjunction", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/utils.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/utils.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $find = __webpack_require__(49).find;
var addToUnscopables = __webpack_require__(61);
var arrayMethodUsesToLength = __webpack_require__(59);

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var IndexedObject = __webpack_require__(13);
var toIndexedObject = __webpack_require__(12);
var arrayMethodIsStrict = __webpack_require__(58);

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSuggestion", function() { return renderSuggestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestionSelect", function() { return suggestionSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSearch", function() { return parseSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchStateResults", function() { return searchStateResults; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(182);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(180);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(145);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(147);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__);










(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var _wp = wp,
    select = _wp.data.select,
    decodeEntities = _wp.htmlEntities.decodeEntities,
    __ = _wp.i18n.__;
/**
 * Autocomplete function for rendering
 * suggestions.
 *
 * @param {{}} post
 * @returns {string}
 */

var renderSuggestion = function renderSuggestion(post) {
  var _post$title;

  return "<div>".concat(decodeEntities((_post$title = post === null || post === void 0 ? void 0 : post.title) !== null && _post$title !== void 0 ? _post$title : __('Enter at least 3 characters.', 'tenup')), "</div>");
};
/**
 * Function fired on suggestion selection.
 *
 * @param value
 * @param props
 */

var suggestionSelect = function suggestionSelect(value, props) {
  if (props.index < 1 || typeof value === 'undefined') {
    return;
  }

  var newContent = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8___default()(props.content);

  newContent.splice(props.index - 1, 1, value.id);
  props.onUpdate(newContent, 'ids', null);
};
/**
 * Parse Search
 *
 * @param {{}} content
 * @param {Array} keys
 * @returns {Array}
 */

var parseSearch = function parseSearch(content) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var i = 0;
  var m = content.length;
  var currentRecords = Object.keys(select('tenup/search').getRecords());
  var parsed = {};
  var prefix = keys.join('-');

  for (; i < m; i++) {
    if (~currentRecords.indexOf("".concat(prefix, "-").concat(content[i].id))) {
      continue;
    }

    parsed["".concat(prefix, "-").concat(content[i].id)] = content[i];
  }

  return parsed;
};
/**
 *
 * @param keyword
 * @param keys
 * @returns {{}}
 */

var searchStateResults = function searchStateResults(keyword) {
  var _select$getRecords;

  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var currentRecords = (_select$getRecords = select('tenup/search').getRecords()) !== null && _select$getRecords !== void 0 ? _select$getRecords : {};

  if (Object.keys(currentRecords).length < 1) {
    return {};
  }

  var prefix = keys.join('-');
  return Object.keys(currentRecords).reduce(function (acc, record) {
    var _currentRecords$recor, _currentRecords$recor2;

    var title = (_currentRecords$recor = (_currentRecords$recor2 = currentRecords[record]) === null || _currentRecords$recor2 === void 0 ? void 0 : _currentRecords$recor2.title) !== null && _currentRecords$recor !== void 0 ? _currentRecords$recor : '';

    if ('' === title) {
      return acc;
    }

    if (title.toLowerCase().includes(keyword.toLowerCase()) && record.includes(prefix)) {
      acc[record] = currentRecords[record];
    }

    return acc;
  }, {});
};
var _default = {
  renderSuggestion: renderSuggestion,
  suggestionSelect: suggestionSelect,
  parseSearch: parseSearch,
  searchStateResults: searchStateResults
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(select, "select", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/search.js");
  reactHotLoader.register(decodeEntities, "decodeEntities", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/search.js");
  reactHotLoader.register(__, "__", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/search.js");
  reactHotLoader.register(renderSuggestion, "renderSuggestion", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/search.js");
  reactHotLoader.register(suggestionSelect, "suggestionSelect", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/search.js");
  reactHotLoader.register(parseSearch, "parseSearch", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/search.js");
  reactHotLoader.register(searchStateResults, "searchStateResults", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/search.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/search.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $indexOf = __webpack_require__(41).indexOf;
var arrayMethodIsStrict = __webpack_require__(58);
var arrayMethodUsesToLength = __webpack_require__(59);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(144);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(100);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(102);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(148);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(114);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(159);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(166);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(array_move__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(184);
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(185);
/* harmony import */ var _components_type_taxes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(186);
/* harmony import */ var _components_component_toggles__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(192);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(178);
/* harmony import */ var _inspector_controls_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(205);
/* harmony import */ var _components_help__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(191);
















(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List - Inspector Controls.
 *
 * @package TenUp\Plugin\ContentList
 */

/**
 * Dependencies
 */
// External


 // Internal







 // WordPress

var _wp = wp,
    _wp$components = _wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    __ = _wp.i18n.__,
    WpInspectorControls = _wp.blockEditor.InspectorControls,
    withSelect = _wp.data.withSelect,
    useContext = _wp.element.useContext;
/**
 * Inspector Controls Function.
 *
 * @returns {*}
 * @constructor
 * @param props
 */

function InspectorControls(props) {
  var display = props.display,
      fetching = props.fetching,
      searching = props.searching,
      orientation = props.orientation,
      attrsChange = props.attrsChange,
      fetchContent = props.fetchContent;

  var _useContext = useContext(_context__WEBPACK_IMPORTED_MODULE_18__["default"]),
      queryArgs = _useContext.queryArgs;
  /**
   *
   * @type {{pointerEvents: (string), opacity: number}}
   */


  var inspectorControlsCss = {
    pointerEvents: fetching || searching ? 'none' : 'auto',
    opacity: fetching || searching ? 0.5 : 1
  };
  /**
   * SetAttribute changes to queryArgs
   */

  var bindTypeTaxes = function bindTypeTaxes(val, key) {
    attrsChange(_objectSpread(_objectSpread({}, queryArgs), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default()({}, key, val)), 'queryArgs', 'object');
  };

  var typeObj = Object(_common_utils__WEBPACK_IMPORTED_MODULE_22__["getTypeBy"])('name', queryArgs.contentType);
  /*
  const taxonomyDisplay = display.find( d => {
      return d.name === 'taxonomy';
  } ) ?? {};
  */

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])(WpInspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])("div", {
    style: inspectorControlsCss
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])(PanelBody, {
    title: __('Fetch Posts', 'tenup')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])("p", {
    className: 'cl-block__text-sml'
  }, __('The below controls determine which content to fetch. Click "Fetch" to bulk curate content.', 'tenup')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])(_components_type_taxes__WEBPACK_IMPORTED_MODULE_20__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_11___default()({
    label: __('Content Types', 'tenup')
  }, {
    contentType: queryArgs.contentType,
    taxonomies: Object(_common_utils__WEBPACK_IMPORTED_MODULE_22__["bindTax"])(queryArgs.contentType, queryArgs.taxonomies)
  }, {
    onSelect: function onSelect(option) {
      if (option.terms) {
        var taxonomies = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12___default()(queryArgs.taxonomies);

        var taxIndex = taxonomies.findIndex(function (tax) {
          return tax.name === option.name;
        });

        if (-1 === taxIndex) {
          taxonomies.push(option);
          bindTypeTaxes(taxonomies, 'taxonomies');
          return;
        }

        taxonomies[taxIndex].terms = option.terms;
        bindTypeTaxes(taxonomies, 'taxonomies');
      } else if (option.contentType) {
        bindTypeTaxes(option.contentType, 'contentType');
      }
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])("div", {
    className: 'cl-block__inspector-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])(_components_help__WEBPACK_IMPORTED_MODULE_24__["default"], {
    align: 'right',
    text: __('Use the below slider to control the offset of queried content.', 'tenup')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])(RangeControl, {
    className: 'cl-block__controls-offset',
    label: __('Offset', 'tenup'),
    value: queryArgs.offset,
    onChange: function onChange(val) {
      attrsChange({
        offset: val
      }, 'queryArgs', 'object');
    },
    min: 0,
    max: 20
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])("button", {
    className: "button cl-block__button",
    onClick: function onClick() {
      fetchContent({
        path: "wp/v2/".concat(typeObj.rest_base),
        params: _objectSpread(_objectSpread({}, {
          offset: queryArgs.offset,
          per_page: queryArgs.per_page
        }), Object(_common_utils__WEBPACK_IMPORTED_MODULE_22__["taxonomyParams"])(queryArgs.taxonomies, typeObj))
      });
    }
  }, __('Fetch ', 'tenup')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])(_components_loader__WEBPACK_IMPORTED_MODULE_19__["default"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])(PanelBody, {
    title: __('Layout', 'tenup'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])("p", {
    className: 'cl-block__text-sml'
  }, __('Use the below fields to control the layout of your block.', 'tenup')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])(_inspector_controls_layout__WEBPACK_IMPORTED_MODULE_23__["default"], props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])(PanelBody, {
    title: __('Display', 'tenup'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])("p", {
    className: 'cl-block__text-sml'
  }, 'portrait' === orientation ? __('Use the below controls to show/hide & rearrange individual components in your block.', 'tenup') : __('Use the below controls to show/hide & rearrange individual components in your block. The grey bar represents the dividing line. Content above will appear on the left and content below, on the right', 'tenup')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_14__["createElement"])(_components_component_toggles__WEBPACK_IMPORTED_MODULE_21__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_11___default()({
    display: display,
    orientation: orientation,
    attrsChange: attrsChange,
    distance: 1
  }, {
    onSortEnd: function onSortEnd(_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;
      attrsChange(array_move__WEBPACK_IMPORTED_MODULE_17___default()(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_12___default()(display), oldIndex, newIndex), 'display', null);
    }
  })))));
}

__signature__(InspectorControls, "useContext{{ queryArgs }}");

if (false) {}

var _default = withSelect(function (select) {
  return {
    fetching: select('tenup/core').isFetching(),
    searching: select('tenup/search').isSearching()
  };
})(InspectorControls);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PanelBody, "PanelBody", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls.js");
  reactHotLoader.register(RangeControl, "RangeControl", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls.js");
  reactHotLoader.register(__, "__", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls.js");
  reactHotLoader.register(WpInspectorControls, "WpInspectorControls", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls.js");
  reactHotLoader.register(withSelect, "withSelect", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls.js");
  reactHotLoader.register(useContext, "useContext", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls.js");
  reactHotLoader.register(InspectorControls, "InspectorControls", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentListProvider", function() { return ContentListProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentListConsumer", function() { return ContentListConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var ContentListContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  display: [],
  queryArgs: [],
  itemInSearch: 0,
  setItemInSearch: function setItemInSearch() {}
});
var ContentListProvider = ContentListContext.Provider;
var ContentListConsumer = ContentListContext.Consumer;
var _default = ContentListContext;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContentListContext, "ContentListContext", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/context/index.js");
  reactHotLoader.register(ContentListProvider, "ContentListProvider", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/context/index.js");
  reactHotLoader.register(ContentListConsumer, "ContentListConsumer", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/context/index.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/context/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(159);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List Block Loader Component.
 *
 * @package TenUp
 */


var _wp = wp,
    Spinner = _wp.components.Spinner,
    withSelect = _wp.data.withSelect;
/**
 * Content List Loader Component.
 *
 * @param props
 * @returns {*}
 * @constructor
 */

function Loader(props) {
  var loader = props.fetching || props.searching ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Spinner, null) : '';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, loader);
}

Loader.propTypes = {
  fetching: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  searching: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

var _default = withSelect(function (select) {
  return {
    fetching: select('tenup/core').isFetching(),
    searching: select('tenup/search').isSearching()
  };
})(Loader);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Spinner, "Spinner", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/loader.js");
  reactHotLoader.register(withSelect, "withSelect", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/loader.js");
  reactHotLoader.register(Loader, "Loader", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/loader.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/loader.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(187);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(145);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(173);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(159);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _taxonomy_terms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(188);
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(191);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(178);







(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Type and Taxonomy Select Component.
 *
 * @package TenUp
 */





var _wp = wp,
    SelectControl = _wp.components.SelectControl,
    _wp$i18n = _wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var _tenUp = tenUp,
    typeTaxes = _tenUp.typesTaxes;
/**
 * Term Select Component.
 */

function TypeTaxes(_ref) {
  var label = _ref.label,
      onSelect = _ref.onSelect,
      taxonomies = _ref.taxonomies,
      contentType = _ref.contentType;
  var types = Object.values(typeTaxes);
  var termSelects = 0 === taxonomies.length ? '' : taxonomies.map(function (v) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
      key: "".concat(v.name, "-taxonomy"),
      className: "cl-block__taxonomy-terms"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_taxonomy_terms__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: "".concat(v.name, "-taxonomy"),
      terms: v.terms,
      label: v.label,
      endpoint: function endpoint() {
        var _contentType = typeTaxes.find(function (type) {
          return type.name === contentType;
        });

        if (0 === _contentType.taxonomies.length) {
          return '';
        }

        return _contentType.taxonomies.find(function (tax) {
          return tax.name === v.name;
        }).rest_base;
      },
      taxonomy: v.name,
      max: 3,
      emitAttributes: function emitAttributes(termIds) {
        onSelect({
          name: v.name,
          terms: termIds
        });
      }
    }));
  });
  var contentTypeOptions = types.reduce(function (acc, type) {
    acc.push({
      label: type.label,
      value: type.name
    });
    return acc;
  }, []);
  var contentTypeHelp = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_help__WEBPACK_IMPORTED_MODULE_9__["default"], {
    align: "right",
    text: sprintf(__('Fetch content from %s, content types, by selecting an option from the dropdown.'), Object(_common_utils__WEBPACK_IMPORTED_MODULE_10__["commaConjunction"])(contentTypeOptions.reduce(function (acc, type) {
      acc.push(type.label);
      return acc;
    }, [])))
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
    className: 'cl-block__inspector-control'
  }, contentTypeHelp, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
    className: 'widefat',
    label: label,
    value: contentType,
    onChange: function onChange(contentType) {
      onSelect({
        contentType: contentType
      });
    },
    options: contentTypeOptions
  }), termSelects);
}
/**
 * Term Select Prop Types
 *
 * @type {{taxonomies: [{}], label: {String}, contentType: {String}, onSelect: {function}}}
 */


TypeTaxes.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  taxonomies: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    label: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    rest_base: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    terms: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number)
  })),
  contentType: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
/**
 * Export withSelect wrapped component to sync,
 * a list of terms for a given Taxonomy from state to props.
 * similar to mapStateToProps.
 */

var _default = TypeTaxes;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SelectControl, "SelectControl", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/type-taxes.js");
  reactHotLoader.register(__, "__", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/type-taxes.js");
  reactHotLoader.register(sprintf, "sprintf", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/type-taxes.js");
  reactHotLoader.register(typeTaxes, "typeTaxes", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/type-taxes.js");
  reactHotLoader.register(TypeTaxes, "TypeTaxes", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/type-taxes.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/type-taxes.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $map = __webpack_require__(49).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(97);
var arrayMethodUsesToLength = __webpack_require__(59);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSuggestion", function() { return renderSuggestion; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(187);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(145);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(147);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(155);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(159);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var accessible_autocomplete_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(175);
/* harmony import */ var accessible_autocomplete_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(accessible_autocomplete_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _taxonomy_terms_token__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(189);
/* harmony import */ var _store_proxy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(190);
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(191);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(178);









(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content Select Component.
 * Loosely based off FlatTermSelector.
 */







var _wp = wp,
    withSelect = _wp.data.withSelect,
    Spinner = _wp.components.Spinner,
    decodeEntities = _wp.htmlEntities.decodeEntities,
    _wp$i18n = _wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf,
    useState = _wp.element.useState,
    addQueryArgs = _wp.url.addQueryArgs,
    apiFetch = _wp.apiFetch;
var _lodash = lodash,
    debounce = _lodash.debounce;
/**
 * Render Suggestion.
 *
 * @param post
 * @returns {string}
 */

var renderSuggestion = function renderSuggestion(post) {
  var _post$label;

  var titleOutput = (_post$label = post === null || post === void 0 ? void 0 : post.label) !== null && _post$label !== void 0 ? _post$label : null;

  if (null === titleOutput) {
    return;
  }

  return "<div>".concat(decodeEntities(titleOutput), "</div>");
};
/**
 * TaxonomyTerms Component.
 */

function TaxonomyTerms(_ref) {
  var max = _ref.max,
      label = _ref.label,
      terms = _ref.terms,
      endpoint = _ref.endpoint,
      instanceId = _ref.instanceId,
      emitAttributes = _ref.emitAttributes;

  var _useState = useState(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_useState, 2),
      loading = _useState2[0],
      isLoading = _useState2[1];
  /**
   * Search triggered when auto-complete searches.
   *
   * @param {String} keyword
   * @param {function} populateResults
   */


  var search = function search(keyword, populateResults) {
    isLoading(true);
    apiFetch({
      path: addQueryArgs("wp/v2/".concat(endpoint()), {
        search: keyword,
        'content-list': 1
      })
    }).then(function (contents) {
      populateResults(contents);
      isLoading(false);
    })["catch"](function (err) {
      console.error(err); // eslint-disable-line

      isLoading(false);
    });
  };
  /**
   * Translator method override for Autocomplete.
   *
   * @returns {*}
   */


  var _tNoResults = function tNoResults() {
    return loading ? __('Fetching...', 'tenup') : __('No Results found.', 'tenup');
  };
  /**
   * Term Ids
   */


  var termIds = function termIds() {
    return terms.reduce(function (acc, term) {
      acc.push(term.id);
      return acc;
    }, []);
  };
  /**
   * Method for removing items.
   * @param i
   */


  var remove = function remove(i) {
    var tIds = termIds();
    tIds.splice(i, 1);
    emitAttributes(tIds);
  };

  var taxonomyHelp = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_help__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: 'right',
    text: sprintf(__('Search through %s by clicking, then typing, in the box below.'), label)
  });
  /**
   * @type {string}
   */

  var autoComplete = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
    className: 'cl-block__taxonomy-terms__autocomplete'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("label", {
    htmlFor: "cl-block__taxonomy-terms__autocomplete-".concat(instanceId),
    className: 'components-base-control__label'
  }, terms.length, " / ", max, " ", label, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
    className: loading ? '' : 'hidden'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Spinner, null))), taxonomyHelp, max > terms.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(accessible_autocomplete_react__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "cl-block__taxonomy-terms__autocomplete-".concat(instanceId),
    minLength: 3,
    placeholder: sprintf(__('Find %s...', 'tenup'), label),
    source: debounce(function (keyword, populateResults) {
      if (max === terms.length) {
        return;
      }

      search(keyword, populateResults);
    }, 800),
    showNoOptionsFound: true,
    autoSelect: true,
    templates: {
      inputValue: function inputValue() {
        return '';
      },
      suggestion: renderSuggestion
    },
    onConfirm: function onConfirm(v) {
      if ('undefined' === typeof v) {
        return;
      }

      emitAttributes([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(termIds()), [v.id]));
    },
    tNoResults: function tNoResults() {
      return _tNoResults();
    }
  }));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
    tabIndex: 0,
    className: 'cl-block__taxonomy-terms components-base-control widefat'
  }, autoComplete, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
    className: "cl-block__tokens"
  }, 0 !== terms.length && terms.map(function (_ref2, index) {
    var id = _ref2.id,
        label = _ref2.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_taxonomy_terms_token__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: "token-".concat(id, "-").concat(index),
      index: index,
      val: id,
      title: label,
      onClickRemove: function onClickRemove(_ref3) {
        var index = _ref3.index;
        remove(index);
      }
    });
  })));
}

__signature__(TaxonomyTerms, "useState{[ loading, isLoading ](false)}");

TaxonomyTerms.propTypes = {
  max: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  label: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  endpoint: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  taxonomy: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  emitAttributes: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  terms: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
    title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    taxonomies: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number)
  }))
};
TaxonomyTerms.defaultProps = {
  label: __('Add Content', 'tenup'),
  max: 3,
  endpoint: function endpoint() {
    return 'posts';
  },
  terms: []
};
/**
 * Map props to state and taxonomy term requests.
 */

var _default = withSelect(function (select, _ref4) {
  var _ref4$terms = _ref4.terms,
      terms = _ref4$terms === void 0 ? [] : _ref4$terms,
      taxonomy = _ref4.taxonomy;
  var instanceId = taxonomy;

  if (0 === terms.length) {
    return {
      instanceId: instanceId,
      terms: []
    };
  }

  var _terms = select('core').getEntityRecords('taxonomy', taxonomy, {
    include: terms,
    "content-list": 1
  });

  if (null === _terms) {
    return {
      instanceId: instanceId,
      terms: new Array(terms.length).fill({
        id: 0,
        label: __('Fetching term...', 'tenup')
      })
    };
  }

  _terms = _store_proxy__WEBPACK_IMPORTED_MODULE_12__["default"].terms({
    terms: _terms
  });
  return {
    instanceId: instanceId,
    terms: _terms
  };
})(TaxonomyTerms);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(apiFetch, "apiFetch", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms.js");
  reactHotLoader.register(withSelect, "withSelect", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms.js");
  reactHotLoader.register(Spinner, "Spinner", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms.js");
  reactHotLoader.register(decodeEntities, "decodeEntities", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms.js");
  reactHotLoader.register(__, "__", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms.js");
  reactHotLoader.register(sprintf, "sprintf", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms.js");
  reactHotLoader.register(useState, "useState", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms.js");
  reactHotLoader.register(addQueryArgs, "addQueryArgs", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms.js");
  reactHotLoader.register(debounce, "debounce", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms.js");
  reactHotLoader.register(renderSuggestion, "renderSuggestion", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms.js");
  reactHotLoader.register(TaxonomyTerms, "TaxonomyTerms", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(115);



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * External dependencies
 */
var _wp = wp,
    withInstanceId = _wp.compose.withInstanceId,
    Button = _wp.components.Button,
    _wp$i18n = _wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var _lodash = lodash,
    noop = _lodash.noop;
/**
 * Content Select Component.
 *
 * @param status
 * @param title
 * @param index
 * @param isBorderless
 * @param disabled
 * @param onClickRemove
 * @param onMouseEnter
 * @param onMouseLeave
 * @param instanceId
 * @returns {*}
 * @constructor
 */

function TaxonomyTermsToken(_ref) {
  var title = _ref.title,
      index = _ref.index,
      _ref$isBorderless = _ref.isBorderless,
      isBorderless = _ref$isBorderless === void 0 ? false : _ref$isBorderless,
      disabled = _ref.disabled,
      _ref$onClickRemove = _ref.onClickRemove,
      onClickRemove = _ref$onClickRemove === void 0 ? noop : _ref$onClickRemove,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      instanceId = _ref.instanceId;
  var tokenClasses = 'components-form-token-field__token cl-block__token';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: tokenClasses
  }, {
    title: title,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "components-form-token-field__token-text",
    id: "components-form-token-field__token-text-".concat(instanceId)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    "aria-hidden": "true"
  }, title)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    className: "components-form-token-field__remove-token",
    icon: "dismiss",
    onClick: function onClick() {
      return onClickRemove({
        index: index
      });
    },
    label: sprintf(__('Remove %s', 'tenup'), title),
    "aria-describedby": "components-form-token-field__token-text-".concat(instanceId)
  }));
}

var _default = withInstanceId(TaxonomyTermsToken);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(withInstanceId, "withInstanceId", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms-token.js");
  reactHotLoader.register(Button, "Button", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms-token.js");
  reactHotLoader.register(__, "__", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms-token.js");
  reactHotLoader.register(sprintf, "sprintf", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms-token.js");
  reactHotLoader.register(noop, "noop", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms-token.js");
  reactHotLoader.register(TaxonomyTermsToken, "TaxonomyTermsToken", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms-token.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/taxonomy-terms-token.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "content", function() { return content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "terms", function() { return terms; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(100);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(102);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(173);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(114);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__);














(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var content = function content(_ref) {
  var select = _ref.select,
      ids = _ref.ids,
      args = _ref.args;
  var cache = select('tenup/content').getContent();
  var cacheKeys = Object.keys(cache);
  var dynamicItem = {
    id: 0
  };
  var content = [];

  if (0 === ids.length) {
    return new Array(args.itemsToShow).fill(dynamicItem);
  } // If cache is empty, fetch using ids


  if (0 === cacheKeys.length) {
    var _select$fetchContent;

    // Nothing saved, fetch content
    ids = ids.filter(function (id) {
      return 0 < id;
    });

    if (0 === ids.length) {
      return new Array(args.itemsToShow).fill(dynamicItem);
    }

    content = (_select$fetchContent = select('tenup/content').fetchContent(_objectSpread({
      ids: ids
    }, args))) !== null && _select$fetchContent !== void 0 ? _select$fetchContent : {};
    content = Object.values(content);
  } else {
    for (var i = 0; i < args.itemsToShow; i++) {
      if (Object.hasOwnProperty.call(cache, ids[i])) {
        content.push(cache[ids[i]]);
        continue;
      }

      content.push(dynamicItem);
    }
  }

  return content;
};
var terms = function terms(args) {
  var terms = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default()(args.terms);

  for (var i = 0, m = terms.length; i < m; i++) {
    if (Object.hasOwnProperty.call(terms[i], '_links')) {
      delete terms[i]._links;
    }
  }

  return terms;
};
var _default = {
  content: content,
  terms: terms
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(content, "content", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/store/proxy.js");
  reactHotLoader.register(terms, "terms", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/store/proxy.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/store/proxy.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List - Help.
 *
 * @package TenUp\Plugin\ContentList
 *
 * @since 0.0.1
 */

/**
 * Dependencies
 */
// External

 // WordPress

var _wp = wp,
    _wp$components = _wp.components,
    Icon = _wp$components.Icon,
    Tooltip = _wp$components.Tooltip;
/**
 * Help component. Provides a (?) icon with help text on hover.
 *
 * @param {Object} props - Props assigned to React component.
 * @param {string=} [props.text = ''] - Text housing the notice
 * @param {string=} [props.align = ''] - Should this component align, uses position: absolute. Default is empty
 *
 * @returns {*}
 * @constructor
 */

function Help(_ref) {
  var text = _ref.text,
      align = _ref.align;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, '' !== text && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: 'cl-block__help'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Tooltip, {
    text: text
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    style: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      position: '' === align ? 'relative' : 'absolute'
    }, align, '0')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Icon, {
    icon: "editor-help"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "screen-reader-text"
  }, text)));
}

Help["default"] = {
  text: '',
  align: ''
};

if (false) {}

var _default = Help;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Icon, "Icon", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/help.js");
  reactHotLoader.register(Tooltip, "Tooltip", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/help.js");
  reactHotLoader.register(Help, "Help", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/help.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/help.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(144);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(187);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(194);








(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List - Component Display Toggles.
 * Sortable list of toggles to show/hide different sub components within the block.
 *
 * @package TenUp\Plugin\ContentList
 *
 * @uses https://github.com/clauderic/react-sortable-hoc
 *
 * @since 0.0.1
 */

/**
 * Dependencies
 */
// External

 // WordPress

var _wp = wp,
    _wp$components = _wp.components,
    Icon = _wp$components.Icon,
    ToggleControl = _wp$components.ToggleControl,
    __ = _wp.i18n.__;
/**
 * Sortable Handle.
 *
 * @type {React.ComponentClass<any>}
 *
 * @since 0.0.1
 */

var SortableMove = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_8__["SortableHandle"])(function () {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
    className: "cl-block__controls-display-item-handle"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Icon, {
    icon: 'sort',
    className: 'cl-block__sort-handle',
    label: __('Move this item', 'tenup')
  }));
});
/**
 * Sortable Item/Element.
 *
 * @type {React.ComponentClass<{readonly name?: *, readonly attrsChange?: *, readonly items?: *, readonly key?: *, readonly labelName?: *} & SortableElementProps>}
 *
 * @since 0.0.1
 */

var SortableToggle = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_8__["SortableElement"])(function (_ref) {
  var key = _ref.key,
      name = _ref.name,
      items = _ref.items,
      labelName = _ref.labelName,
      attrsChange = _ref.attrsChange;
  var item = items.find(function (element) {
    return name === element.name;
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
    tabIndex: 0,
    "aria-label": "Move",
    className: "cl-block__controls-display-item cl-block__controls-display-item-".concat(name)
  }, 'separator' !== name ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
    className: "cl-block__controls-display-item-toggle"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ToggleControl, {
    key: key,
    label: 'Attachment' === labelName ? 'Thumbnail' : labelName,
    checked: item.value,
    onChange: function onChange(val) {
      var _items = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(items);

      var index = _items.findIndex(function (element) {
        return name === element.name;
      });

      _items[index].value = val;
      attrsChange(_items, 'display', null);
    }
  })) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
    className: "cl-block__controls-display-separator"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Icon, {
    icon: 'menu',
    className: 'cl-block__sort-handle',
    label: __('Move this item', 'tenup')
  })), 'separator' !== name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(SortableMove, null));
});
/**
 * Sortable Container.
 *
 * @type {React.ComponentClass<{readonly display?: *, readonly attrsChange?: *, readonly orientation?: *} & SortableContainerProps>}
 *
 * @since 0.0.1
 */

var ComponentToggles = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_8__["SortableContainer"])(function (_ref2) {
  var display = _ref2.display,
      attrsChange = _ref2.attrsChange,
      orientation = _ref2.orientation;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
    className: "cl-block__controls-display"
  }, display.map(function (toggle, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(SortableToggle, {
      index: index,
      orientation: orientation,
      attrsChange: attrsChange,
      items: display,
      name: toggle.name,
      key: "key-".concat(toggle.name),
      labelName: toggle.name.charAt(0).toUpperCase() + toggle.name.slice(1)
    });
  }));
});
var _default = ComponentToggles;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Icon, "Icon", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/component-toggles.js");
  reactHotLoader.register(ToggleControl, "ToggleControl", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/component-toggles.js");
  reactHotLoader.register(__, "__", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/component-toggles.js");
  reactHotLoader.register(SortableMove, "SortableMove", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/component-toggles.js");
  reactHotLoader.register(SortableToggle, "SortableToggle", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/component-toggles.js");
  reactHotLoader.register(ComponentToggles, "ComponentToggles", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/component-toggles.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/component-toggles.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var isObject = __webpack_require__(17);
var isArray = __webpack_require__(54);
var toAbsoluteIndex = __webpack_require__(44);
var toLength = __webpack_require__(42);
var toIndexedObject = __webpack_require__(12);
var createProperty = __webpack_require__(104);
var wellKnownSymbol = __webpack_require__(55);
var arrayMethodHasSpeciesSupport = __webpack_require__(97);
var arrayMethodUsesToLength = __webpack_require__(59);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableContainer", function() { return sortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortableContainer", function() { return sortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableElement", function() { return sortableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortableElement", function() { return sortableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableHandle", function() { return sortableHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortableHandle", function() { return sortableHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMove", function() { return arrayMove; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(117);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(196);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(197);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(198);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(199);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(201);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(202);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(200);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(130);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(159);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(135);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(204);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(124);
















var Manager = function () {
  function Manager() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Manager);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(this, "refs", {});
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Manager, [{
    key: "add",
    value: function add(collection, ref) {
      if (!this.refs[collection]) {
        this.refs[collection] = [];
      }

      this.refs[collection].push(ref);
    }
  }, {
    key: "remove",
    value: function remove(collection, ref) {
      var index = this.getIndex(collection, ref);

      if (index !== -1) {
        this.refs[collection].splice(index, 1);
      }
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "getActive",
    value: function getActive() {
      var _this = this;

      return this.refs[this.active.collection].find(function (_ref) {
        var node = _ref.node;
        return node.sortableInfo.index == _this.active.index;
      });
    }
  }, {
    key: "getIndex",
    value: function getIndex(collection, ref) {
      return this.refs[collection].indexOf(ref);
    }
  }, {
    key: "getOrderedRefs",
    value: function getOrderedRefs() {
      var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.active.collection;
      return this.refs[collection].sort(sortByIndex);
    }
  }]);

  return Manager;
}();

function sortByIndex(_ref2, _ref3) {
  var index1 = _ref2.node.sortableInfo.index;
  var index2 = _ref3.node.sortableInfo.index;
  return index1 - index2;
}

function arrayMove(array, from, to) {
  if (true) {
    if (typeof console !== 'undefined') {
      console.warn("Deprecation warning: arrayMove will no longer be exported by 'react-sortable-hoc' in the next major release. Please install the `array-move` package locally instead. https://www.npmjs.com/package/array-move");
    }
  }

  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}
function omit(obj, keysToOmit) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}
var events = {
  end: ['touchend', 'touchcancel', 'mouseup'],
  move: ['touchmove', 'mousemove'],
  start: ['touchstart', 'mousedown']
};
var vendorPrefix = function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return '';
  }

  var styles = window.getComputedStyle(document.documentElement, '') || ['-moz-hidden-iframe'];
  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];

  switch (pre) {
    case 'ms':
      return 'ms';

    default:
      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
  }
}();
function setInlineStyles(node, styles) {
  Object.keys(styles).forEach(function (key) {
    node.style[key] = styles[key];
  });
}
function setTranslate3d(node, translate) {
  node.style["".concat(vendorPrefix, "Transform")] = translate == null ? '' : "translate3d(".concat(translate.x, "px,").concat(translate.y, "px,0)");
}
function setTransitionDuration(node, duration) {
  node.style["".concat(vendorPrefix, "TransitionDuration")] = duration == null ? '' : "".concat(duration, "ms");
}
function closest(el, fn) {
  while (el) {
    if (fn(el)) {
      return el;
    }

    el = el.parentNode;
  }

  return null;
}
function limit(min, max, value) {
  return Math.max(min, Math.min(value, max));
}

function getPixelValue(stringValue) {
  if (stringValue.substr(-2) === 'px') {
    return parseFloat(stringValue);
  }

  return 0;
}

function getElementMargin(element) {
  var style = window.getComputedStyle(element);
  return {
    bottom: getPixelValue(style.marginBottom),
    left: getPixelValue(style.marginLeft),
    right: getPixelValue(style.marginRight),
    top: getPixelValue(style.marginTop)
  };
}
function provideDisplayName(prefix, Component$$1) {
  var componentName = Component$$1.displayName || Component$$1.name;
  return componentName ? "".concat(prefix, "(").concat(componentName, ")") : prefix;
}
function getScrollAdjustedBoundingClientRect(node, scrollDelta) {
  var boundingClientRect = node.getBoundingClientRect();
  return {
    top: boundingClientRect.top + scrollDelta.top,
    left: boundingClientRect.left + scrollDelta.left
  };
}
function getPosition(event) {
  if (event.touches && event.touches.length) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY
    };
  } else if (event.changedTouches && event.changedTouches.length) {
    return {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };
  } else {
    return {
      x: event.pageX,
      y: event.pageY
    };
  }
}
function isTouchEvent(event) {
  return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
}
function getEdgeOffset(node, parent) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    left: 0,
    top: 0
  };

  if (!node) {
    return undefined;
  }

  var nodeOffset = {
    left: offset.left + node.offsetLeft,
    top: offset.top + node.offsetTop
  };

  if (node.parentNode === parent) {
    return nodeOffset;
  }

  return getEdgeOffset(node.parentNode, parent, nodeOffset);
}
function getTargetIndex(newIndex, prevIndex, oldIndex) {
  if (newIndex < oldIndex && newIndex > prevIndex) {
    return newIndex - 1;
  } else if (newIndex > oldIndex && newIndex < prevIndex) {
    return newIndex + 1;
  } else {
    return newIndex;
  }
}
function getLockPixelOffset(_ref) {
  var lockOffset = _ref.lockOffset,
      width = _ref.width,
      height = _ref.height;
  var offsetX = lockOffset;
  var offsetY = lockOffset;
  var unit = 'px';

  if (typeof lockOffset === 'string') {
    var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);
    invariant__WEBPACK_IMPORTED_MODULE_13___default()(match !== null, 'lockOffset value should be a number or a string of a ' + 'number followed by "px" or "%". Given %s', lockOffset);
    offsetX = parseFloat(lockOffset);
    offsetY = parseFloat(lockOffset);
    unit = match[1];
  }

  invariant__WEBPACK_IMPORTED_MODULE_13___default()(isFinite(offsetX) && isFinite(offsetY), 'lockOffset value should be a finite. Given %s', lockOffset);

  if (unit === '%') {
    offsetX = offsetX * width / 100;
    offsetY = offsetY * height / 100;
  }

  return {
    x: offsetX,
    y: offsetY
  };
}
function getLockPixelOffsets(_ref2) {
  var height = _ref2.height,
      width = _ref2.width,
      lockOffset = _ref2.lockOffset;
  var offsets = Array.isArray(lockOffset) ? lockOffset : [lockOffset, lockOffset];
  invariant__WEBPACK_IMPORTED_MODULE_13___default()(offsets.length === 2, 'lockOffset prop of SortableContainer should be a single ' + 'value or an array of exactly two values. Given %s', lockOffset);

  var _offsets = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(offsets, 2),
      minLockOffset = _offsets[0],
      maxLockOffset = _offsets[1];

  return [getLockPixelOffset({
    height: height,
    lockOffset: minLockOffset,
    width: width
  }), getLockPixelOffset({
    height: height,
    lockOffset: maxLockOffset,
    width: width
  })];
}

function isScrollable(el) {
  var computedStyle = window.getComputedStyle(el);
  var overflowRegex = /(auto|scroll)/;
  var properties = ['overflow', 'overflowX', 'overflowY'];
  return properties.find(function (property) {
    return overflowRegex.test(computedStyle[property]);
  });
}

function getScrollingParent(el) {
  if (!(el instanceof HTMLElement)) {
    return null;
  } else if (isScrollable(el)) {
    return el;
  } else {
    return getScrollingParent(el.parentNode);
  }
}
function getContainerGridGap(element) {
  var style = window.getComputedStyle(element);

  if (style.display === 'grid') {
    return {
      x: getPixelValue(style.gridColumnGap),
      y: getPixelValue(style.gridRowGap)
    };
  }

  return {
    x: 0,
    y: 0
  };
}
var KEYCODE = {
  TAB: 9,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var NodeType = {
  Anchor: 'A',
  Button: 'BUTTON',
  Canvas: 'CANVAS',
  Input: 'INPUT',
  Option: 'OPTION',
  Textarea: 'TEXTAREA',
  Select: 'SELECT'
};
function cloneNode(node) {
  var selector = 'input, textarea, select, canvas, [contenteditable]';
  var fields = node.querySelectorAll(selector);
  var clonedNode = node.cloneNode(true);

  var clonedFields = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_14__["default"])(clonedNode.querySelectorAll(selector));

  clonedFields.forEach(function (field, i) {
    if (field.type !== 'file') {
      field.value = fields[i].value;
    }

    if (field.type === 'radio' && field.name) {
      field.name = "__sortableClone__".concat(field.name);
    }

    if (field.tagName === NodeType.Canvas && fields[i].width > 0 && fields[i].height > 0) {
      var destCtx = field.getContext('2d');
      destCtx.drawImage(fields[i], 0, 0);
    }
  });
  return clonedNode;
}

function sortableHandle(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableHandle, _React$Component);

    function WithSortableHandle() {
      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableHandle);

      return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableHandle).apply(this, arguments));
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableHandle, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var node = Object(react_dom__WEBPACK_IMPORTED_MODULE_12__["findDOMNode"])(this);
        node.sortableHandle = true;
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_13___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return Object(react__WEBPACK_IMPORTED_MODULE_10__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, this.props));
      }
    }]);

    return WithSortableHandle;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableHandle', WrappedComponent)), _temp;
}
function isSortableHandle(node) {
  return node.sortableHandle != null;
}

var AutoScroller = function () {
  function AutoScroller(container, onScrollCallback) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AutoScroller);

    this.container = container;
    this.onScrollCallback = onScrollCallback;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AutoScroller, [{
    key: "clear",
    value: function clear() {
      if (this.interval == null) {
        return;
      }

      clearInterval(this.interval);
      this.interval = null;
    }
  }, {
    key: "update",
    value: function update(_ref) {
      var _this = this;

      var translate = _ref.translate,
          minTranslate = _ref.minTranslate,
          maxTranslate = _ref.maxTranslate,
          width = _ref.width,
          height = _ref.height;
      var direction = {
        x: 0,
        y: 0
      };
      var speed = {
        x: 1,
        y: 1
      };
      var acceleration = {
        x: 10,
        y: 10
      };
      var _this$container = this.container,
          scrollTop = _this$container.scrollTop,
          scrollLeft = _this$container.scrollLeft,
          scrollHeight = _this$container.scrollHeight,
          scrollWidth = _this$container.scrollWidth,
          clientHeight = _this$container.clientHeight,
          clientWidth = _this$container.clientWidth;
      var isTop = scrollTop === 0;
      var isBottom = scrollHeight - scrollTop - clientHeight === 0;
      var isLeft = scrollLeft === 0;
      var isRight = scrollWidth - scrollLeft - clientWidth === 0;

      if (translate.y >= maxTranslate.y - height / 2 && !isBottom) {
        direction.y = 1;
        speed.y = acceleration.y * Math.abs((maxTranslate.y - height / 2 - translate.y) / height);
      } else if (translate.x >= maxTranslate.x - width / 2 && !isRight) {
        direction.x = 1;
        speed.x = acceleration.x * Math.abs((maxTranslate.x - width / 2 - translate.x) / width);
      } else if (translate.y <= minTranslate.y + height / 2 && !isTop) {
        direction.y = -1;
        speed.y = acceleration.y * Math.abs((translate.y - height / 2 - minTranslate.y) / height);
      } else if (translate.x <= minTranslate.x + width / 2 && !isLeft) {
        direction.x = -1;
        speed.x = acceleration.x * Math.abs((translate.x - width / 2 - minTranslate.x) / width);
      }

      if (this.interval) {
        this.clear();
        this.isAutoScrolling = false;
      }

      if (direction.x !== 0 || direction.y !== 0) {
        this.interval = setInterval(function () {
          _this.isAutoScrolling = true;
          var offset = {
            left: speed.x * direction.x,
            top: speed.y * direction.y
          };
          _this.container.scrollTop += offset.top;
          _this.container.scrollLeft += offset.left;

          _this.onScrollCallback(offset);
        }, 5);
      }
    }
  }]);

  return AutoScroller;
}();

function defaultGetHelperDimensions(_ref) {
  var node = _ref.node;
  return {
    height: node.offsetHeight,
    width: node.offsetWidth
  };
}

function defaultShouldCancelStart(event) {
  var interactiveElements = [NodeType.Input, NodeType.Textarea, NodeType.Select, NodeType.Option, NodeType.Button];

  if (interactiveElements.indexOf(event.target.tagName) !== -1) {
    return true;
  }

  if (closest(event.target, function (el) {
    return el.contentEditable === 'true';
  })) {
    return true;
  }

  return false;
}

var propTypes = {
  axis: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOf(['x', 'y', 'xy']),
  contentWindow: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any,
  disableAutoscroll: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  distance: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  getHelperDimensions: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  helperClass: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  helperContainer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func, typeof HTMLElement === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any : prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.instanceOf(HTMLElement)]),
  hideSortableGhost: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  keyboardSortingTransitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  lockAxis: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  lockOffset: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string]))]),
  lockToContainerEdges: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  onSortEnd: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onSortMove: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onSortOver: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onSortStart: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  pressDelay: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  pressThreshold: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  keyCodes: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    lift: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    drop: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    cancel: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    up: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    down: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number)
  }),
  shouldCancelStart: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  updateBeforeSortStart: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  useDragHandle: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  useWindowAsScrollContainer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool
};
var defaultKeyCodes = {
  lift: [KEYCODE.SPACE],
  drop: [KEYCODE.SPACE],
  cancel: [KEYCODE.ESC],
  up: [KEYCODE.UP, KEYCODE.LEFT],
  down: [KEYCODE.DOWN, KEYCODE.RIGHT]
};
var defaultProps = {
  axis: 'y',
  disableAutoscroll: false,
  distance: 0,
  getHelperDimensions: defaultGetHelperDimensions,
  hideSortableGhost: true,
  lockOffset: '50%',
  lockToContainerEdges: false,
  pressDelay: 0,
  pressThreshold: 5,
  keyCodes: defaultKeyCodes,
  shouldCancelStart: defaultShouldCancelStart,
  transitionDuration: 300,
  useWindowAsScrollContainer: false
};
var omittedProps = Object.keys(propTypes);
function validateProps(props) {
  invariant__WEBPACK_IMPORTED_MODULE_13___default()(!(props.distance && props.pressDelay), 'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.');
}

function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }

  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }

  return finalizer(false, value);
}
function sortableContainer(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableContainer, _React$Component);

    function WithSortableContainer(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableContainer);

      _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableContainer).call(this, props));

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "state", {});

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleStart", function (event) {
        var _this$props = _this.props,
            distance = _this$props.distance,
            shouldCancelStart = _this$props.shouldCancelStart;

        if (event.button === 2 || shouldCancelStart(event)) {
          return;
        }

        _this.touched = true;
        _this.position = getPosition(event);
        var node = closest(event.target, function (el) {
          return el.sortableInfo != null;
        });

        if (node && node.sortableInfo && _this.nodeIsChild(node) && !_this.state.sorting) {
          var useDragHandle = _this.props.useDragHandle;
          var _node$sortableInfo = node.sortableInfo,
              index = _node$sortableInfo.index,
              collection = _node$sortableInfo.collection,
              disabled = _node$sortableInfo.disabled;

          if (disabled) {
            return;
          }

          if (useDragHandle && !closest(event.target, isSortableHandle)) {
            return;
          }

          _this.manager.active = {
            collection: collection,
            index: index
          };

          if (!isTouchEvent(event) && event.target.tagName === NodeType.Anchor) {
            event.preventDefault();
          }

          if (!distance) {
            if (_this.props.pressDelay === 0) {
              _this.handlePress(event);
            } else {
              _this.pressTimer = setTimeout(function () {
                return _this.handlePress(event);
              }, _this.props.pressDelay);
            }
          }
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "nodeIsChild", function (node) {
        return node.sortableInfo.manager === _this.manager;
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleMove", function (event) {
        var _this$props2 = _this.props,
            distance = _this$props2.distance,
            pressThreshold = _this$props2.pressThreshold;

        if (!_this.state.sorting && _this.touched && !_this._awaitingUpdateBeforeSortStart) {
          var position = getPosition(event);
          var delta = {
            x: _this.position.x - position.x,
            y: _this.position.y - position.y
          };
          var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y);
          _this.delta = delta;

          if (!distance && (!pressThreshold || combinedDelta >= pressThreshold)) {
            clearTimeout(_this.cancelTimer);
            _this.cancelTimer = setTimeout(_this.cancel, 0);
          } else if (distance && combinedDelta >= distance && _this.manager.isActive()) {
            _this.handlePress(event);
          }
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleEnd", function () {
        _this.touched = false;

        _this.cancel();
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "cancel", function () {
        var distance = _this.props.distance;
        var sorting = _this.state.sorting;

        if (!sorting) {
          if (!distance) {
            clearTimeout(_this.pressTimer);
          }

          _this.manager.active = null;
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handlePress", function (event) {
        try {
          var active = _this.manager.getActive();

          var _temp6 = function () {
            if (active) {
              var _temp7 = function _temp7() {
                var index = _node.sortableInfo.index;
                var margin = getElementMargin(_node);
                var gridGap = getContainerGridGap(_this.container);

                var containerBoundingRect = _this.scrollContainer.getBoundingClientRect();

                var dimensions = _getHelperDimensions({
                  index: index,
                  node: _node,
                  collection: _collection
                });

                _this.node = _node;
                _this.margin = margin;
                _this.gridGap = gridGap;
                _this.width = dimensions.width;
                _this.height = dimensions.height;
                _this.marginOffset = {
                  x: _this.margin.left + _this.margin.right + _this.gridGap.x,
                  y: Math.max(_this.margin.top, _this.margin.bottom, _this.gridGap.y)
                };
                _this.boundingClientRect = _node.getBoundingClientRect();
                _this.containerBoundingRect = containerBoundingRect;
                _this.index = index;
                _this.newIndex = index;
                _this.axis = {
                  x: _axis.indexOf('x') >= 0,
                  y: _axis.indexOf('y') >= 0
                };
                _this.offsetEdge = getEdgeOffset(_node, _this.container);

                if (_isKeySorting) {
                  _this.initialOffset = getPosition(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, event, {
                    pageX: _this.boundingClientRect.left,
                    pageY: _this.boundingClientRect.top
                  }));
                } else {
                  _this.initialOffset = getPosition(event);
                }

                _this.initialScroll = {
                  left: _this.scrollContainer.scrollLeft,
                  top: _this.scrollContainer.scrollTop
                };
                _this.initialWindowScroll = {
                  left: window.pageXOffset,
                  top: window.pageYOffset
                };
                _this.helper = _this.helperContainer.appendChild(cloneNode(_node));
                setInlineStyles(_this.helper, {
                  boxSizing: 'border-box',
                  height: "".concat(_this.height, "px"),
                  left: "".concat(_this.boundingClientRect.left - margin.left, "px"),
                  pointerEvents: 'none',
                  position: 'fixed',
                  top: "".concat(_this.boundingClientRect.top - margin.top, "px"),
                  width: "".concat(_this.width, "px")
                });

                if (_isKeySorting) {
                  _this.helper.focus();
                }

                if (_hideSortableGhost) {
                  _this.sortableGhost = _node;
                  setInlineStyles(_node, {
                    opacity: 0,
                    visibility: 'hidden'
                  });
                }

                _this.minTranslate = {};
                _this.maxTranslate = {};

                if (_isKeySorting) {
                  var _ref = _useWindowAsScrollContainer ? {
                    top: 0,
                    left: 0,
                    width: _this.contentWindow.innerWidth,
                    height: _this.contentWindow.innerHeight
                  } : _this.containerBoundingRect,
                      containerTop = _ref.top,
                      containerLeft = _ref.left,
                      containerWidth = _ref.width,
                      containerHeight = _ref.height;

                  var containerBottom = containerTop + containerHeight;
                  var containerRight = containerLeft + containerWidth;

                  if (_this.axis.x) {
                    _this.minTranslate.x = containerLeft - _this.boundingClientRect.left;
                    _this.maxTranslate.x = containerRight - (_this.boundingClientRect.left + _this.width);
                  }

                  if (_this.axis.y) {
                    _this.minTranslate.y = containerTop - _this.boundingClientRect.top;
                    _this.maxTranslate.y = containerBottom - (_this.boundingClientRect.top + _this.height);
                  }
                } else {
                  if (_this.axis.x) {
                    _this.minTranslate.x = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - _this.boundingClientRect.left - _this.width / 2;
                    _this.maxTranslate.x = (_useWindowAsScrollContainer ? _this.contentWindow.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - _this.boundingClientRect.left - _this.width / 2;
                  }

                  if (_this.axis.y) {
                    _this.minTranslate.y = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - _this.boundingClientRect.top - _this.height / 2;
                    _this.maxTranslate.y = (_useWindowAsScrollContainer ? _this.contentWindow.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - _this.boundingClientRect.top - _this.height / 2;
                  }
                }

                if (_helperClass) {
                  _helperClass.split(' ').forEach(function (className) {
                    return _this.helper.classList.add(className);
                  });
                }

                _this.listenerNode = event.touches ? _node : _this.contentWindow;

                if (_isKeySorting) {
                  _this.listenerNode.addEventListener('wheel', _this.handleKeyEnd, true);

                  _this.listenerNode.addEventListener('mousedown', _this.handleKeyEnd, true);

                  _this.listenerNode.addEventListener('keydown', _this.handleKeyDown);
                } else {
                  events.move.forEach(function (eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortMove, false);
                  });
                  events.end.forEach(function (eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortEnd, false);
                  });
                }

                _this.setState({
                  sorting: true,
                  sortingIndex: index
                });

                if (_onSortStart) {
                  _onSortStart({
                    node: _node,
                    index: index,
                    collection: _collection,
                    isKeySorting: _isKeySorting,
                    nodes: _this.manager.getOrderedRefs(),
                    helper: _this.helper
                  }, event);
                }

                if (_isKeySorting) {
                  _this.keyMove(0);
                }
              };

              var _this$props3 = _this.props,
                  _axis = _this$props3.axis,
                  _getHelperDimensions = _this$props3.getHelperDimensions,
                  _helperClass = _this$props3.helperClass,
                  _hideSortableGhost = _this$props3.hideSortableGhost,
                  updateBeforeSortStart = _this$props3.updateBeforeSortStart,
                  _onSortStart = _this$props3.onSortStart,
                  _useWindowAsScrollContainer = _this$props3.useWindowAsScrollContainer;
              var _node = active.node,
                  _collection = active.collection;
              var _isKeySorting = _this.manager.isKeySorting;

              var _temp8 = function () {
                if (typeof updateBeforeSortStart === 'function') {
                  _this._awaitingUpdateBeforeSortStart = true;

                  var _temp9 = _finallyRethrows(function () {
                    var index = _node.sortableInfo.index;
                    return Promise.resolve(updateBeforeSortStart({
                      collection: _collection,
                      index: index,
                      node: _node,
                      isKeySorting: _isKeySorting
                    }, event)).then(function () {});
                  }, function (_wasThrown, _result) {
                    _this._awaitingUpdateBeforeSortStart = false;
                    if (_wasThrown) throw _result;
                    return _result;
                  });

                  if (_temp9 && _temp9.then) return _temp9.then(function () {});
                }
              }();

              return _temp8 && _temp8.then ? _temp8.then(_temp7) : _temp7(_temp8);
            }
          }();

          return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSortMove", function (event) {
        var onSortMove = _this.props.onSortMove;

        if (typeof event.preventDefault === 'function') {
          event.preventDefault();
        }

        _this.updateHelperPosition(event);

        _this.animateNodes();

        _this.autoscroll();

        if (onSortMove) {
          onSortMove(event);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSortEnd", function (event) {
        var _this$props4 = _this.props,
            hideSortableGhost = _this$props4.hideSortableGhost,
            onSortEnd = _this$props4.onSortEnd;
        var _this$manager = _this.manager,
            collection = _this$manager.active.collection,
            isKeySorting = _this$manager.isKeySorting;

        var nodes = _this.manager.getOrderedRefs();

        if (_this.listenerNode) {
          if (isKeySorting) {
            _this.listenerNode.removeEventListener('wheel', _this.handleKeyEnd, true);

            _this.listenerNode.removeEventListener('mousedown', _this.handleKeyEnd, true);

            _this.listenerNode.removeEventListener('keydown', _this.handleKeyDown);
          } else {
            events.move.forEach(function (eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortMove);
            });
            events.end.forEach(function (eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortEnd);
            });
          }
        }

        _this.helper.parentNode.removeChild(_this.helper);

        if (hideSortableGhost && _this.sortableGhost) {
          setInlineStyles(_this.sortableGhost, {
            opacity: '',
            visibility: ''
          });
        }

        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node2 = nodes[i];
          var el = _node2.node;
          _node2.edgeOffset = null;
          _node2.boundingClientRect = null;
          setTranslate3d(el, null);
          setTransitionDuration(el, null);
          _node2.translate = null;
        }

        _this.autoScroller.clear();

        _this.manager.active = null;
        _this.manager.isKeySorting = false;

        _this.setState({
          sorting: false,
          sortingIndex: null
        });

        if (typeof onSortEnd === 'function') {
          onSortEnd({
            collection: collection,
            newIndex: _this.newIndex,
            oldIndex: _this.index,
            isKeySorting: isKeySorting,
            nodes: nodes
          }, event);
        }

        _this.touched = false;
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "autoscroll", function () {
        var disableAutoscroll = _this.props.disableAutoscroll;
        var isKeySorting = _this.manager.isKeySorting;

        if (disableAutoscroll) {
          _this.autoScroller.clear();

          return;
        }

        if (isKeySorting) {
          var translate = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this.translate);

          var scrollX = 0;
          var scrollY = 0;

          if (_this.axis.x) {
            translate.x = Math.min(_this.maxTranslate.x, Math.max(_this.minTranslate.x, _this.translate.x));
            scrollX = _this.translate.x - translate.x;
          }

          if (_this.axis.y) {
            translate.y = Math.min(_this.maxTranslate.y, Math.max(_this.minTranslate.y, _this.translate.y));
            scrollY = _this.translate.y - translate.y;
          }

          _this.translate = translate;
          setTranslate3d(_this.helper, _this.translate);
          _this.scrollContainer.scrollLeft += scrollX;
          _this.scrollContainer.scrollTop += scrollY;
          return;
        }

        _this.autoScroller.update({
          height: _this.height,
          maxTranslate: _this.maxTranslate,
          minTranslate: _this.minTranslate,
          translate: _this.translate,
          width: _this.width
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "onAutoScroll", function (offset) {
        _this.translate.x += offset.left;
        _this.translate.y += offset.top;

        _this.animateNodes();
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleKeyDown", function (event) {
        var keyCode = event.keyCode;
        var _this$props5 = _this.props,
            shouldCancelStart = _this$props5.shouldCancelStart,
            _this$props5$keyCodes = _this$props5.keyCodes,
            customKeyCodes = _this$props5$keyCodes === void 0 ? {} : _this$props5$keyCodes;

        var keyCodes = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, defaultKeyCodes, customKeyCodes);

        if (_this.manager.active && !_this.manager.isKeySorting || !_this.manager.active && (!keyCodes.lift.includes(keyCode) || shouldCancelStart(event) || !_this.isValidSortingTarget(event))) {
          return;
        }

        event.stopPropagation();
        event.preventDefault();

        if (keyCodes.lift.includes(keyCode) && !_this.manager.active) {
          _this.keyLift(event);
        } else if (keyCodes.drop.includes(keyCode) && _this.manager.active) {
          _this.keyDrop(event);
        } else if (keyCodes.cancel.includes(keyCode)) {
          _this.newIndex = _this.manager.active.index;

          _this.keyDrop(event);
        } else if (keyCodes.up.includes(keyCode)) {
          _this.keyMove(-1);
        } else if (keyCodes.down.includes(keyCode)) {
          _this.keyMove(1);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyLift", function (event) {
        var target = event.target;
        var node = closest(target, function (el) {
          return el.sortableInfo != null;
        });
        var _node$sortableInfo2 = node.sortableInfo,
            index = _node$sortableInfo2.index,
            collection = _node$sortableInfo2.collection;
        _this.initialFocusedNode = target;
        _this.manager.isKeySorting = true;
        _this.manager.active = {
          index: index,
          collection: collection
        };

        _this.handlePress(event);
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyMove", function (shift) {
        var nodes = _this.manager.getOrderedRefs();

        var lastIndex = nodes[nodes.length - 1].node.sortableInfo.index;
        var newIndex = _this.newIndex + shift;
        var prevIndex = _this.newIndex;

        if (newIndex < 0 || newIndex > lastIndex) {
          return;
        }

        _this.prevIndex = prevIndex;
        _this.newIndex = newIndex;
        var targetIndex = getTargetIndex(_this.newIndex, _this.prevIndex, _this.index);
        var target = nodes.find(function (_ref2) {
          var node = _ref2.node;
          return node.sortableInfo.index === targetIndex;
        });
        var targetNode = target.node;
        var scrollDelta = _this.containerScrollDelta;
        var targetBoundingClientRect = target.boundingClientRect || getScrollAdjustedBoundingClientRect(targetNode, scrollDelta);
        var targetTranslate = target.translate || {
          x: 0,
          y: 0
        };
        var targetPosition = {
          top: targetBoundingClientRect.top + targetTranslate.y - scrollDelta.top,
          left: targetBoundingClientRect.left + targetTranslate.x - scrollDelta.left
        };
        var shouldAdjustForSize = prevIndex < newIndex;
        var sizeAdjustment = {
          x: shouldAdjustForSize && _this.axis.x ? targetNode.offsetWidth - _this.width : 0,
          y: shouldAdjustForSize && _this.axis.y ? targetNode.offsetHeight - _this.height : 0
        };

        _this.handleSortMove({
          pageX: targetPosition.left + sizeAdjustment.x,
          pageY: targetPosition.top + sizeAdjustment.y,
          ignoreTransition: shift === 0
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyDrop", function (event) {
        _this.handleSortEnd(event);

        if (_this.initialFocusedNode) {
          _this.initialFocusedNode.focus();
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleKeyEnd", function (event) {
        if (_this.manager.active) {
          _this.keyDrop(event);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "isValidSortingTarget", function (event) {
        var useDragHandle = _this.props.useDragHandle;
        var target = event.target;
        var node = closest(target, function (el) {
          return el.sortableInfo != null;
        });
        return node && node.sortableInfo && !node.sortableInfo.disabled && (useDragHandle ? isSortableHandle(target) : target.sortableInfo);
      });

      validateProps(props);
      _this.manager = new Manager();
      _this.events = {
        end: _this.handleEnd,
        move: _this.handleMove,
        start: _this.handleStart
      };
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableContainer, [{
      key: "getChildContext",
      value: function getChildContext() {
        return {
          manager: this.manager
        };
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
        var container = this.getContainer();
        Promise.resolve(container).then(function (containerNode) {
          _this2.container = containerNode;
          _this2.document = _this2.container.ownerDocument || document;
          var contentWindow = _this2.props.contentWindow || _this2.document.defaultView || window;
          _this2.contentWindow = typeof contentWindow === 'function' ? contentWindow() : contentWindow;
          _this2.scrollContainer = useWindowAsScrollContainer ? _this2.document.scrollingElement || _this2.document.documentElement : getScrollingParent(_this2.container) || _this2.container;
          _this2.autoScroller = new AutoScroller(_this2.scrollContainer, _this2.onAutoScroll);
          Object.keys(_this2.events).forEach(function (key) {
            return events[key].forEach(function (eventName) {
              return _this2.container.addEventListener(eventName, _this2.events[key], false);
            });
          });

          _this2.container.addEventListener('keydown', _this2.handleKeyDown);
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this3 = this;

        if (this.helper && this.helper.parentNode) {
          this.helper.parentNode.removeChild(this.helper);
        }

        if (!this.container) {
          return;
        }

        Object.keys(this.events).forEach(function (key) {
          return events[key].forEach(function (eventName) {
            return _this3.container.removeEventListener(eventName, _this3.events[key]);
          });
        });
        this.container.removeEventListener('keydown', this.handleKeyDown);
      }
    }, {
      key: "updateHelperPosition",
      value: function updateHelperPosition(event) {
        var _this$props6 = this.props,
            lockAxis = _this$props6.lockAxis,
            lockOffset = _this$props6.lockOffset,
            lockToContainerEdges = _this$props6.lockToContainerEdges,
            transitionDuration = _this$props6.transitionDuration,
            _this$props6$keyboard = _this$props6.keyboardSortingTransitionDuration,
            keyboardSortingTransitionDuration = _this$props6$keyboard === void 0 ? transitionDuration : _this$props6$keyboard;
        var isKeySorting = this.manager.isKeySorting;
        var ignoreTransition = event.ignoreTransition;
        var offset = getPosition(event);
        var translate = {
          x: offset.x - this.initialOffset.x,
          y: offset.y - this.initialOffset.y
        };
        translate.y -= window.pageYOffset - this.initialWindowScroll.top;
        translate.x -= window.pageXOffset - this.initialWindowScroll.left;
        this.translate = translate;

        if (lockToContainerEdges) {
          var _getLockPixelOffsets = getLockPixelOffsets({
            height: this.height,
            lockOffset: lockOffset,
            width: this.width
          }),
              _getLockPixelOffsets2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getLockPixelOffsets, 2),
              minLockOffset = _getLockPixelOffsets2[0],
              maxLockOffset = _getLockPixelOffsets2[1];

          var minOffset = {
            x: this.width / 2 - minLockOffset.x,
            y: this.height / 2 - minLockOffset.y
          };
          var maxOffset = {
            x: this.width / 2 - maxLockOffset.x,
            y: this.height / 2 - maxLockOffset.y
          };
          translate.x = limit(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
          translate.y = limit(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
        }

        if (lockAxis === 'x') {
          translate.y = 0;
        } else if (lockAxis === 'y') {
          translate.x = 0;
        }

        if (isKeySorting && keyboardSortingTransitionDuration && !ignoreTransition) {
          setTransitionDuration(this.helper, keyboardSortingTransitionDuration);
        }

        setTranslate3d(this.helper, translate);
      }
    }, {
      key: "animateNodes",
      value: function animateNodes() {
        var _this$props7 = this.props,
            transitionDuration = _this$props7.transitionDuration,
            hideSortableGhost = _this$props7.hideSortableGhost,
            onSortOver = _this$props7.onSortOver;
        var containerScrollDelta = this.containerScrollDelta,
            windowScrollDelta = this.windowScrollDelta;
        var nodes = this.manager.getOrderedRefs();
        var sortingOffset = {
          left: this.offsetEdge.left + this.translate.x + containerScrollDelta.left,
          top: this.offsetEdge.top + this.translate.y + containerScrollDelta.top
        };
        var isKeySorting = this.manager.isKeySorting;
        var prevIndex = this.newIndex;
        this.newIndex = null;

        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node3 = nodes[i].node;
          var index = _node3.sortableInfo.index;
          var width = _node3.offsetWidth;
          var height = _node3.offsetHeight;
          var offset = {
            height: this.height > height ? height / 2 : this.height / 2,
            width: this.width > width ? width / 2 : this.width / 2
          };
          var mustShiftBackward = isKeySorting && index > this.index && index <= prevIndex;
          var mustShiftForward = isKeySorting && index < this.index && index >= prevIndex;
          var translate = {
            x: 0,
            y: 0
          };
          var edgeOffset = nodes[i].edgeOffset;

          if (!edgeOffset) {
            edgeOffset = getEdgeOffset(_node3, this.container);
            nodes[i].edgeOffset = edgeOffset;

            if (isKeySorting) {
              nodes[i].boundingClientRect = getScrollAdjustedBoundingClientRect(_node3, containerScrollDelta);
            }
          }

          var nextNode = i < nodes.length - 1 && nodes[i + 1];
          var prevNode = i > 0 && nodes[i - 1];

          if (nextNode && !nextNode.edgeOffset) {
            nextNode.edgeOffset = getEdgeOffset(nextNode.node, this.container);

            if (isKeySorting) {
              nextNode.boundingClientRect = getScrollAdjustedBoundingClientRect(nextNode.node, containerScrollDelta);
            }
          }

          if (index === this.index) {
            if (hideSortableGhost) {
              this.sortableGhost = _node3;
              setInlineStyles(_node3, {
                opacity: 0,
                visibility: 'hidden'
              });
            }

            continue;
          }

          if (transitionDuration) {
            setTransitionDuration(_node3, transitionDuration);
          }

          if (this.axis.x) {
            if (this.axis.y) {
              if (mustShiftForward || index < this.index && (sortingOffset.left + windowScrollDelta.left - offset.width <= edgeOffset.left && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height || sortingOffset.top + windowScrollDelta.top + offset.height <= edgeOffset.top)) {
                translate.x = this.width + this.marginOffset.x;

                if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset.width) {
                  if (nextNode) {
                    translate.x = nextNode.edgeOffset.left - edgeOffset.left;
                    translate.y = nextNode.edgeOffset.top - edgeOffset.top;
                  }
                }

                if (this.newIndex === null) {
                  this.newIndex = index;
                }
              } else if (mustShiftBackward || index > this.index && (sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top || sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top + height)) {
                translate.x = -(this.width + this.marginOffset.x);

                if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset.width) {
                  if (prevNode) {
                    translate.x = prevNode.edgeOffset.left - edgeOffset.left;
                    translate.y = prevNode.edgeOffset.top - edgeOffset.top;
                  }
                }

                this.newIndex = index;
              }
            } else {
              if (mustShiftBackward || index > this.index && sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left) {
                translate.x = -(this.width + this.marginOffset.x);
                this.newIndex = index;
              } else if (mustShiftForward || index < this.index && sortingOffset.left + windowScrollDelta.left <= edgeOffset.left + offset.width) {
                translate.x = this.width + this.marginOffset.x;

                if (this.newIndex == null) {
                  this.newIndex = index;
                }
              }
            }
          } else if (this.axis.y) {
            if (mustShiftBackward || index > this.index && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top) {
              translate.y = -(this.height + this.marginOffset.y);
              this.newIndex = index;
            } else if (mustShiftForward || index < this.index && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height) {
              translate.y = this.height + this.marginOffset.y;

              if (this.newIndex == null) {
                this.newIndex = index;
              }
            }
          }

          setTranslate3d(_node3, translate);
          nodes[i].translate = translate;
        }

        if (this.newIndex == null) {
          this.newIndex = this.index;
        }

        if (isKeySorting) {
          this.newIndex = prevIndex;
        }

        var oldIndex = isKeySorting ? this.prevIndex : prevIndex;

        if (onSortOver && this.newIndex !== oldIndex) {
          onSortOver({
            collection: this.manager.active.collection,
            index: this.index,
            newIndex: this.newIndex,
            oldIndex: oldIndex,
            isKeySorting: isKeySorting,
            nodes: nodes,
            helper: this.helper
          });
        }
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_13___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        var getContainer = this.props.getContainer;

        if (typeof getContainer !== 'function') {
          return Object(react_dom__WEBPACK_IMPORTED_MODULE_12__["findDOMNode"])(this);
        }

        return getContainer(config.withRef ? this.getWrappedInstance() : undefined);
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return Object(react__WEBPACK_IMPORTED_MODULE_10__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, omit(this.props, omittedProps)));
      }
    }, {
      key: "helperContainer",
      get: function get() {
        var helperContainer = this.props.helperContainer;

        if (typeof helperContainer === 'function') {
          return helperContainer();
        }

        return this.props.helperContainer || this.document.body;
      }
    }, {
      key: "containerScrollDelta",
      get: function get() {
        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;

        if (useWindowAsScrollContainer) {
          return {
            left: 0,
            top: 0
          };
        }

        return {
          left: this.scrollContainer.scrollLeft - this.initialScroll.left,
          top: this.scrollContainer.scrollTop - this.initialScroll.top
        };
      }
    }, {
      key: "windowScrollDelta",
      get: function get() {
        return {
          left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
          top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
        };
      }
    }]);

    return WithSortableContainer;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableList', WrappedComponent)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "defaultProps", defaultProps), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "propTypes", propTypes), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "childContextTypes", {
    manager: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
  }), _temp;
}

var propTypes$1 = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,
  collection: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string]),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool
};
var omittedProps$1 = Object.keys(propTypes$1);
function sortableElement(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableElement, _React$Component);

    function WithSortableElement() {
      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableElement);

      return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableElement).apply(this, arguments));
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableElement, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.register();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.node) {
          if (prevProps.index !== this.props.index) {
            this.node.sortableInfo.index = this.props.index;
          }

          if (prevProps.disabled !== this.props.disabled) {
            this.node.sortableInfo.disabled = this.props.disabled;
          }
        }

        if (prevProps.collection !== this.props.collection) {
          this.unregister(prevProps.collection);
          this.register();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unregister();
      }
    }, {
      key: "register",
      value: function register() {
        var _this$props = this.props,
            collection = _this$props.collection,
            disabled = _this$props.disabled,
            index = _this$props.index;
        var node = Object(react_dom__WEBPACK_IMPORTED_MODULE_12__["findDOMNode"])(this);
        node.sortableInfo = {
          collection: collection,
          disabled: disabled,
          index: index,
          manager: this.context.manager
        };
        this.node = node;
        this.ref = {
          node: node
        };
        this.context.manager.add(collection, this.ref);
      }
    }, {
      key: "unregister",
      value: function unregister() {
        var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.collection;
        this.context.manager.remove(collection, this.ref);
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_13___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return Object(react__WEBPACK_IMPORTED_MODULE_10__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, omit(this.props, omittedProps$1)));
      }
    }]);

    return WithSortableElement;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableElement', WrappedComponent)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "contextTypes", {
    manager: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "propTypes", propTypes$1), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "defaultProps", {
    collection: 0
  }), _temp;
}




/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(200);


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(203);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_help__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(191);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List - Inspector Controls - Layout.
 *
 * @package TenUp\Plugin\ContentList
 */

/**
 * Dependencies
 */
// External
 // Internal

 // WordPress

var _wp = wp,
    _wp$components = _wp.components,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    withFilters = _wp$components.withFilters,
    __ = _wp.i18n.__; // 10up

var _tenUp = tenUp,
    styleOptions = _tenUp.contentList.styleOptions,
    postsPerPage = _tenUp.config.postsPerPage;
/**
 * Inspector Controls - Layout.
 *
 * @param {string} style Style dropdown control.
 * @param {number} columns Content grid columns.
 * @param {function} attrsChange Function to emit changes to Content List.
 * @param {number} itemsToShow Items to show in content grid.
 * @param {string} orientation Content items layout.
 *
 * @returns {*}
 * @constructor
 */

function InspectorControlsLayout(_ref) {
  var style = _ref.style,
      columns = _ref.columns,
      attrsChange = _ref.attrsChange,
      itemsToShow = _ref.itemsToShow,
      orientation = _ref.orientation;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'cl-block__inspector-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_help__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: 'right',
    text: __('Use the below slider to control the amount of columns the content should display in.', 'tenup')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
    className: 'cl-block__controls-columns',
    label: __('Columns', 'tenup'),
    value: columns,
    onChange: function onChange(val) {
      attrsChange(val, 'columns');
    },
    min: 1,
    max: 3,
    required: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'cl-block__inspector-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_help__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: 'right',
    text: __('Use the below slider to control the amount of items that should display.', 'tenup')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
    className: 'cl-block__controls-count',
    label: __('Count', 'tenup'),
    value: itemsToShow,
    onChange: function onChange(val) {
      attrsChange(val, 'itemsToShow');
    },
    min: 1,
    max: postsPerPage,
    required: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'cl-block__inspector-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_help__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: 'right',
    text: __('Use the below dropdown to assign a style to your Content List.', 'tenup')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    className: 'cl-block__controls-style',
    label: __('Style?'),
    value: style,
    onChange: function onChange(val) {
      attrsChange(val, 'style');
    },
    options: styleOptions
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'cl-block__inspector-control'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_help__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: 'right',
    text: __('Use the below dropdown to delegate the individual content list items orientation.', 'tenup')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    className: 'cl-block__controls-orientation',
    label: __('Orientation?'),
    value: orientation,
    onChange: function onChange(val) {
      attrsChange(val, 'orientation');
    },
    options: [{
      label: __('Portrait', 'tenup'),
      value: 'portrait'
    }, {
      label: __('Landscape', 'tenup'),
      value: 'landscape'
    }]
  })));
}

var _default = withFilters('contentList.extraLayoutControls')(InspectorControlsLayout);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RangeControl, "RangeControl", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls-layout.js");
  reactHotLoader.register(SelectControl, "SelectControl", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls-layout.js");
  reactHotLoader.register(withFilters, "withFilters", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls-layout.js");
  reactHotLoader.register(__, "__", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls-layout.js");
  reactHotLoader.register(styleOptions, "styleOptions", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls-layout.js");
  reactHotLoader.register(postsPerPage, "postsPerPage", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls-layout.js");
  reactHotLoader.register(InspectorControlsLayout, "InspectorControlsLayout", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls-layout.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/block/inspector-controls-layout.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(100);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(102);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(207);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(225);
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(114);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__);














(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List - Http helpers
 *
 * @package TenUp\Plugin\ContentList
 */
var _wp = wp,
    apiFetch = _wp.apiFetch,
    dispatch = _wp.data.dispatch,
    addQueryArgs = _wp.url.addQueryArgs;
/**
 * Http helper.
 *
 * @param {string} path Path endpoint
 * @param {{}} params Key value query params to append to path.
 *
 * @returns {Promise<unknown>}
 */

var http = function http(path, params) {
  dispatch('tenup/core').toggleIsFetching(true);
  return new Promise(function (resolve, reject) {
    apiFetch({
      path: addQueryArgs(path, _objectSpread(_objectSpread({}, params), {}, {
        'content-list': 1
      }))
    }).then(function (res) {
      resolve(res);
    })["catch"](function (err) {
      reject(err);
    })["finally"](function () {
      dispatch('tenup/core').toggleIsFetching(false);
    });
  });
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(apiFetch, "apiFetch", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/http.js");
  reactHotLoader.register(dispatch, "dispatch", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/http.js");
  reactHotLoader.register(addQueryArgs, "addQueryArgs", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/http.js");
  reactHotLoader.register(http, "http", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/common/http.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var IS_PURE = __webpack_require__(32);
var global = __webpack_require__(5);
var getBuiltIn = __webpack_require__(37);
var NativePromise = __webpack_require__(208);
var redefine = __webpack_require__(24);
var redefineAll = __webpack_require__(209);
var setToStringTag = __webpack_require__(73);
var setSpecies = __webpack_require__(210);
var isObject = __webpack_require__(17);
var aFunction = __webpack_require__(51);
var anInstance = __webpack_require__(211);
var classof = __webpack_require__(14);
var inspectSource = __webpack_require__(26);
var iterate = __webpack_require__(212);
var checkCorrectnessOfIteration = __webpack_require__(216);
var speciesConstructor = __webpack_require__(217);
var task = __webpack_require__(218).set;
var microtask = __webpack_require__(220);
var promiseResolve = __webpack_require__(221);
var hostReportErrors = __webpack_require__(223);
var newPromiseCapabilityModule = __webpack_require__(222);
var perform = __webpack_require__(224);
var InternalStateModule = __webpack_require__(28);
var isForced = __webpack_require__(47);
var wellKnownSymbol = __webpack_require__(55);
var V8_VERSION = __webpack_require__(98);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);

module.exports = global.Promise;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(24);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(37);
var definePropertyModule = __webpack_require__(22);
var wellKnownSymbol = __webpack_require__(55);
var DESCRIPTORS = __webpack_require__(8);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var isArrayIteratorMethod = __webpack_require__(213);
var toLength = __webpack_require__(42);
var bind = __webpack_require__(50);
var getIteratorMethod = __webpack_require__(214);
var callWithSafeIterationClosing = __webpack_require__(215);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(55);
var Iterators = __webpack_require__(67);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(80);
var Iterators = __webpack_require__(67);
var wellKnownSymbol = __webpack_require__(55);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(55);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var aFunction = __webpack_require__(51);
var wellKnownSymbol = __webpack_require__(55);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var fails = __webpack_require__(9);
var classof = __webpack_require__(14);
var bind = __webpack_require__(50);
var html = __webpack_require__(65);
var createElement = __webpack_require__(20);
var IS_IOS = __webpack_require__(219);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    !fails(post) &&
    location.protocol !== 'file:'
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(99);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var getOwnPropertyDescriptor = __webpack_require__(7).f;
var classof = __webpack_require__(14);
var macrotask = __webpack_require__(218).set;
var IS_IOS = __webpack_require__(219);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var isObject = __webpack_require__(17);
var newPromiseCapability = __webpack_require__(222);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(51);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var IS_PURE = __webpack_require__(32);
var NativePromise = __webpack_require__(208);
var fails = __webpack_require__(9);
var getBuiltIn = __webpack_require__(37);
var speciesConstructor = __webpack_require__(217);
var promiseResolve = __webpack_require__(221);
var redefine = __webpack_require__(24);

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(148);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(149);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(227);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(184);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(166);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(array_move__WEBPACK_IMPORTED_MODULE_7__);





(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List - Inspector Controls.
 *
 * @package TenUp\Plugin\ContentList
 *
 * @uses https://github.com/clauderic/react-sortable-hoc
 *
 * @since 0.0.1
 */

/**
 * Dependencies
 */
// External

 // Internal


 // WordPress

var _wp = wp,
    _wp$element = _wp.element,
    useRef = _wp$element.useRef,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect,
    useContext = _wp$element.useContext;
/**
 * A React Sortable HOC component.
 *
 * @param {Array} ids
 * @param {Number} columns
 * @param {Array} display
 * @param {function} onSortEnd
 * @param {Number} itemInEdit
 * @param {Number} itemsToShow
 * @param {function} attrsChange
 * @param {string} orientation
 * @param {function} moveSearchToItem
 *
 * @returns {*}
 *
 * @constructor
 *
 * @since 0.0.1
 */

var Content = function Content(_ref) {
  var ids = _ref.ids,
      columns = _ref.columns,
      display = _ref.display,
      _onSortEnd = _ref.onSortEnd,
      itemInEdit = _ref.itemInEdit,
      _ref$itemsToShow = _ref.itemsToShow,
      itemsToShow = _ref$itemsToShow === void 0 ? 2 : _ref$itemsToShow,
      attrsChange = _ref.attrsChange,
      orientation = _ref.orientation,
      moveSearchToItem = _ref.moveSearchToItem;

  var _useContext = useContext(_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
      queryArgs = _useContext.queryArgs; // We need to bind react sortable hoc drag instances to something closer to our blocks markup
  // @link https://github.com/clauderic/react-sortable-hoc#sortablecontainer-hoc


  var sortHelperElement = useRef(null);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "cl-block__sort-helper",
    ref: sortHelperElement
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_sortable__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
    axis: 'xy',
    moveSearchToItem: moveSearchToItem,
    onSortEnd: function onSortEnd(e) {
      _onSortEnd(ids, e);
    },
    helperContainer: sortHelperElement.current,
    useDragHandle: true,
    clearItem: function clearItem(i) {
      var newContent = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(ids);

      newContent.splice(i, 1, 0);
      attrsChange(newContent, 'ids');
    },
    distance: 1
  }, {
    display: display,
    columns: columns,
    queryArgs: queryArgs,
    itemInEdit: itemInEdit,
    orientation: orientation,
    itemsToShow: itemsToShow,
    ids: ids
  })));
};

__signature__(Content, "useContext{{ queryArgs }}\nuseRef{sortHelperElement}");

var _default = Content;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useRef, "useRef", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content.js");
  reactHotLoader.register(useState, "useState", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content.js");
  reactHotLoader.register(useEffect, "useEffect", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content.js");
  reactHotLoader.register(useContext, "useContext", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content.js");
  reactHotLoader.register(Content, "Content", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(193);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(148);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(194);
/* harmony import */ var _sortable_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(228);
/* harmony import */ var _store_proxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(190);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(178);





(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List Block Sortable Components.
 *
 * @package TenUp
 */





var _wp = wp,
    withSelect = _wp.data.withSelect;
/**
 *
 * @type {React.ComponentClass<{readonly moveSearchToItem?: *, readonly items?: *, readonly itemInEdit?: *, readonly display?: *, readonly columns?: *, readonly clearItem?: *, readonly orientation?: *} & SortableContainerProps>}
 */

var Sortable = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_5__["SortableContainer"])(function (_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? [] : _ref$display,
      columns = _ref.columns,
      clearItem = _ref.clearItem,
      itemInEdit = _ref.itemInEdit,
      orientation = _ref.orientation,
      moveSearchToItem = _ref.moveSearchToItem;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "cl-block__grid-col-".concat(columns, " cl-block__grid cl-block__sort-container")
  }, items.map(function (value, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_sortable_item__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
      key: "item-".concat(index),
      content: value
    }, {
      index: index,
      display: display,
      clearItem: clearItem,
      itemInEdit: itemInEdit,
      orientation: orientation,
      moveSearchToItem: moveSearchToItem
    }, {
      sortIndex: index,
      isDisabled: items.length === 1
    }));
  }));
});
/**
 * WithSelect to bind content to ids.
 * @see proxy
 */

var _default = withSelect(function (select, _ref2) {
  var ids = _ref2.ids,
      itemsToShow = _ref2.itemsToShow,
      queryArgs = _ref2.queryArgs;
  var content = _store_proxy__WEBPACK_IMPORTED_MODULE_7__["default"].content({
    ids: ids,
    select: select,
    args: {
      queryArgs: queryArgs,
      itemsToShow: itemsToShow
    }
  });
  return {
    ids: ids,
    items: content.slice(0, itemsToShow)
  };
})(Sortable);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(withSelect, "withSelect", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/sortable.js");
  reactHotLoader.register(Sortable, "Sortable", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/sortable.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/sortable.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _content_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(229);
/* harmony import */ var _sortable_move__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(232);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(184);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List Block Search Component.
 *
 * @package TenUp
 */

/** 3rd Party Dependencies */


/** Internal Dependencies */




/** WordPress Dependencies */

var _wp = wp,
    Icon = _wp.components.Icon,
    __ = _wp.i18n.__;

var _default = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__["SortableElement"])(function (_ref) {
  var display = _ref.display,
      content = _ref.content,
      sortIndex = _ref.sortIndex,
      clearItem = _ref.clearItem,
      itemInEdit = _ref.itemInEdit,
      isDisabled = _ref.isDisabled,
      orientation = _ref.orientation;
  var mover = isDisabled || itemInEdit > 0 ? '' : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_sortable_move__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  var clear = 0 !== content.id ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    onClick: function onClick() {
      return clearItem(sortIndex);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Icon, {
    icon: 'trash'
  })) : '';
  var overlayColumns = '' === mover ? '' === clear ? 1 : 2 : '' === clear ? 2 : 3;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cl-block__grid-item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cl-block__grid-col-".concat(overlayColumns, " cl-block__grid cl-block__grid-item-header")
  }, clear, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_context__WEBPACK_IMPORTED_MODULE_5__["ContentListConsumer"], null, function (_ref2) {
    var setItemInSearch = _ref2.setItemInSearch;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      onClick: function onClick() {
        setItemInSearch(sortIndex + 1);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Icon, {
      icon: 'search',
      label: __('Find Content', 'tenup')
    }));
  }), mover), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_content_slot__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: display,
    content: content,
    sortIndex: sortIndex,
    orientation: orientation
  }));
});

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Icon, "Icon", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/sortable-item.js");
  reactHotLoader.register(__, "__", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/sortable-item.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/sortable-item.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(187);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(173);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(159);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(230);
/* harmony import */ var _content_slot_term__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(231);







(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content List Item - Component.
 *
 * @package TenUp
 */




/**
 * Dependencies
 */
// WordPress

var _wp = wp,
    decodeEntities = _wp.htmlEntities.decodeEntities,
    Fragment = _wp.element.Fragment,
    withSelect = _wp.data.withSelect; // 10up

var _tenUp = tenUp,
    taxonomies = _tenUp.taxonomies;
/**
 * ContentListItem Component.
 *
 * @param props
 * @returns {*}
 * @constructor
 */

function ContentSlot(_ref) {
  var display = _ref.display,
      content = _ref.content,
      loading = _ref.loading,
      orientation = _ref.orientation;

  var itemElement = function itemElement(item, content) {
    if (!item.value) {
      return '';
    }

    var element = '';

    switch (item.name) {
      case 'attachment':
        element = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: "cl-block__content-attachment"
        });

        if (false !== !!content.featured_media) {
          element = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            className: "cl-block__content-attachment cl-block__content-attachment-".concat(content.featured_media[1] < content.featured_media[2] ? 'portrait' : 'landscape')
          }, !loading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
            srcAttr: content.featured_media[0]
          }));
        }

        break;

      case 'title':
        element = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: "cl-block__title-placeholder"
        }, !loading && content.id > 0 ? decodeEntities(content.title) : '');
        break;

      case 'excerpt':
        element = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: "cl-block__excerpt-placeholder"
        }, !loading && content.id > 0 ? decodeEntities(content.excerpt) : ''), (loading || 0 === content.id || '' === content.excerpt) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: "cl-block__excerpt-placeholder"
        }), (loading || 0 === content.id || '' === content.excerpt) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: "cl-block__excerpt-placeholder"
        }));
        break;

      case 'taxonomy':
        element = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: "cl-block__taxonomy-placeholder"
        }, Object.values(taxonomies).map(function (taxonomy) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, {
            key: "taxonomies-".concat(taxonomy)
          }, !loading && content[taxonomy] && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_content_slot_term__WEBPACK_IMPORTED_MODULE_9__["default"], {
            termIds: content[taxonomy],
            taxonomy: taxonomy
          }));
        }));
        break;

      default:
        element = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          className: "cl-block__".concat(item.name, "-placeholder")
        }, !loading && content[item.name] ? decodeEntities(content[item.name]) : '');
        break;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
      key: "".concat(item.name, "-component"),
      className: "cl-block__content-slot".concat(loading ? ' cl-block__loading' : '')
    }, element);
  };

  if ('landscape' === orientation) {
    var separatorIndex = display.findIndex(function (d) {
      return 'separator' === d.name;
    });

    if (-1 !== separatorIndex) {
      var left = display.slice(0, separatorIndex);
      var right = display.slice(separatorIndex + 1); // We skip "separator"

      left = left.map(function (item) {
        return itemElement(item, content);
      });
      right = right.map(function (item) {
        return itemElement(item, content);
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "cl-block__orientation-landscape".concat(loading ? ' cl-block__loading' : '')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "cl-block__left-align"
      }, left), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "cl-block__right-align"
      }, right));
    }
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
    className: "cl-block__orientation-portrait".concat(loading ? ' cl-block__loading' : '')
  }, display.map(function (item) {
    return itemElement(item, content);
  }));
}

ContentSlot.propTypes = {
  display: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  content: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape(),
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  fetching: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  searching: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};

var _default = withSelect(function (select) {
  return {
    loading: select('tenup/core').isFetching() || select('tenup/search').isSearching()
  };
})(ContentSlot);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(decodeEntities, "decodeEntities", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content-slot.js");
  reactHotLoader.register(Fragment, "Fragment", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content-slot.js");
  reactHotLoader.register(withSelect, "withSelect", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content-slot.js");
  reactHotLoader.register(taxonomies, "taxonomies", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content-slot.js");
  reactHotLoader.register(ContentSlot, "ContentSlot", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content-slot.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content-slot.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(159);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(185);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var Image = function Image(_ref) {
  var srcAttr = _ref.srcAttr,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title;

  if (!srcAttr) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_loader__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    alt: title,
    src: srcAttr
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_loader__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
var _default = Image;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Image, "Image", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/image.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/image.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(180);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(187);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(145);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(173);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(159);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);








(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * Content Select Component.
 * Loosely based off FlatTermSelector.
 */


var _wp = wp,
    withSelect = _wp.data.withSelect;
var _tenUp = tenUp,
    taxonomies = _tenUp.taxonomies;
/**
 * DisplayTerm Component.
 */

function ContentSlotTerm(_ref) {
  var terms = _ref.terms;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, terms.map(function (e) {
    return e.label;
  }).join(', '));
}

ContentSlotTerm.propTypes = {
  terms: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
  }))
};
ContentSlotTerm.defaultProps = {
  terms: []
};

var _default = withSelect(function (select, _ref2) {
  var _select$getEntityReco;

  var termIds = _ref2.termIds,
      taxonomy = _ref2.taxonomy;
  var terms = [];

  if (0 === termIds.length) {
    return {
      terms: terms
    };
  }

  var index = Object.values(taxonomies).findIndex(function (tax) {
    return tax === taxonomy;
  });

  if (-1 === index || select('tenup/core').isFetching()) {
    return {
      terms: terms
    };
  }

  terms = (_select$getEntityReco = select('core').getEntityRecords('taxonomy', Object.keys(taxonomies)[index], {
    include: termIds,
    'content-list': 1
  })) !== null && _select$getEntityReco !== void 0 ? _select$getEntityReco : [];

  if (0 === terms.length) {
    return {
      terms: terms
    };
  }

  terms = terms.reduce(function (acc, t) {
    if (Object.hasOwnProperty.call(t, '_links')) {
      delete t._links;
    }

    acc.push(t);
    return acc;
  }, []);
  return {
    terms: terms
  };
})(ContentSlotTerm);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(withSelect, "withSelect", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content-slot-term.js");
  reactHotLoader.register(taxonomies, "taxonomies", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content-slot-term.js");
  reactHotLoader.register(ContentSlotTerm, "ContentSlotTerm", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content-slot-term.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/content-slot-term.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var _wp = wp,
    Icon = _wp.components.Icon,
    __ = _wp.i18n.__;
/**
 * Sortable Handle
 *
 * @type {React.ComponentClass<any>}
 */

var _default = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_2__["SortableHandle"])(function () {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    tabIndex: 0
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Icon, {
    icon: 'move',
    className: 'cl-block__sort-handle',
    label: __('Move this item', 'tenup')
  }));
});

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Icon, "Icon", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/sortable-move.js");
  reactHotLoader.register(__, "__", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/sortable-move.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/components/sortable-move.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(180);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(100);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(102);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(105);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(234);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(235);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(114);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(178);














(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


/**
 * TenUp Redux Store(s)
 */

var _wp = wp,
    _wp$data = _wp.data,
    dispatch = _wp$data.dispatch,
    registerStore = _wp$data.registerStore,
    addQueryArgs = _wp.url.addQueryArgs,
    apiFetch = _wp.apiFetch;
/**
 * Global Actions
 * @type {{fetchTopics(): *, setTopics(*): *, toggleIsFetching(*): *}}
 */

var actions = {
  core: {
    toggleIsFetching: function toggleIsFetching(fetching) {
      return {
        type: 'TOGGLE_IS_FETCHING',
        fetching: fetching
      };
    }
  },
  content: {
    receiveContent: function receiveContent(_ref) {
      var ids = _ref.ids,
          path = _ref.path,
          args = _ref.args;
      return {
        type: 'RECEIVE_CONTENT',
        ids: ids,
        path: path,
        args: args
      };
    },
    setContent: function setContent(content) {
      return {
        type: 'SET_CONTENT',
        content: Object(_common_utils__WEBPACK_IMPORTED_MODULE_13__["cacheIndexer"])(content)
      };
    }
  }
};
var store = {
  /**
   * Stores reference to search results, to avoid unnecessary
   * queries to the DB.
   *
   * @returns {({searching, results}&{searching: *})|*|{searching: *, type: string}|{type: string, results: *}|({searching, results}&{results: ((state.results&*)|({}&*))})|{searching: boolean, results: {}}}
   */
  search: function search() {
    registerStore('tenup/search', {
      reducer: function reducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          results: {},
          searching: false
        };
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case 'SET_SEARCH_RESULTS':
            return _objectSpread(_objectSpread({}, state), {}, {
              results: _objectSpread(_objectSpread({}, state.results), action.results)
            });

          case 'TOGGLE_IS_SEARCHING':
            return _objectSpread(_objectSpread({}, state), {}, {
              searching: action.searching
            });
        }

        return state;
      },
      actions: {
        addRecords: function addRecords(results) {
          return {
            type: 'SET_SEARCH_RESULTS',
            results: results
          };
        },
        toggleIsSearching: function toggleIsSearching(searching) {
          return {
            type: 'TOGGLE_IS_SEARCHING',
            searching: searching
          };
        }
      },
      selectors: {
        getRecords: function getRecords(state) {
          return state.results;
        },
        isSearching: function isSearching(state) {
          return state.searching;
        }
      }
    });
  },

  /**
   * Handles global fetching state and setting topics to an easily available object.
   *
   * @returns {{topics: Array, fetching: boolean}|({topics, fetching}&{fetching: (*|boolean|(function(*, *, *, *, *, *): (undefined)))})|boolean|*|(function(*, *, *, *, *, *): (undefined))|*|*|{topics: *, type: string}|({topics, fetching}&{topics: (*|Array|Window.wp.editor.fullscreen.pubsub.topics|{}|(function(*, *, *, *, *, *): (undefined))|topics)})|Array|*|Window.wp.editor.fullscreen.pubsub.topics|{}|(function(*, *, *, *, *, *): (undefined))|topics}
   */
  core: function core() {
    registerStore('tenup/core', {
      reducer: function reducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          fetching: false
        };
        var action = arguments.length > 1 ? arguments[1] : undefined;
        return _objectSpread(_objectSpread({}, state), {}, {
          fetching: action.fetching
        });
      },
      actions: _objectSpread({}, actions.core),
      selectors: {
        isFetching: function isFetching(state) {
          return state.fetching;
        }
      }
    });
  },

  /**
   * Content Store.
   *
   * @returns {boolean|*|{fetching: boolean, content: {}}|{fetching: *, content}|{fetching, content: *}}
   */
  content: function content() {
    registerStore('tenup/content', {
      reducer: function reducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          content: {}
        };
        var action = arguments.length > 1 ? arguments[1] : undefined;
        return _objectSpread(_objectSpread({}, state), {}, {
          content: _objectSpread(_objectSpread({}, state.content), action.content)
        });
      },
      actions: _objectSpread({}, actions.content),
      selectors: {
        getContent: function getContent(state) {
          return state.content;
        },
        fetchContent: function fetchContent(state) {
          return state.content;
        }
      },
      controls: {
        RECEIVE_CONTENT: function RECEIVE_CONTENT(_ref2) {
          var ids = _ref2.ids,
              path = _ref2.path,
              args = _ref2.args;

          if (0 !== ids.length) {
            args['ids'] = ids.join(',');
          }

          return apiFetch({
            path: addQueryArgs(path, _objectSpread(_objectSpread({}, args), {}, {
              'content-list': 1
            }))
          });
        }
      },
      resolvers: {
        fetchContent: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function fetchContent(_ref3) {
          var _ref3$ids, ids, _ref3$path, path, _ref3$args, args, content;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function fetchContent$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _ref3$ids = _ref3.ids, ids = _ref3$ids === void 0 ? [] : _ref3$ids, _ref3$path = _ref3.path, path = _ref3$path === void 0 ? '/tenup/v1/content' : _ref3$path, _ref3$args = _ref3.args, args = _ref3$args === void 0 ? {} : _ref3$args;
                  dispatch('tenup/core').toggleIsFetching(true);
                  _context.next = 4;
                  return actions.content.receiveContent({
                    ids: ids,
                    path: path,
                    args: args
                  });

                case 4:
                  content = _context.sent;
                  dispatch('tenup/core').toggleIsFetching(false);
                  return _context.abrupt("return", actions.content.setContent(content));

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, fetchContent);
        })
      }
    });
  }
};
var _default = store;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(apiFetch, "apiFetch", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/store/index.js");
  reactHotLoader.register(dispatch, "dispatch", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/store/index.js");
  reactHotLoader.register(registerStore, "registerStore", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/store/index.js");
  reactHotLoader.register(addQueryArgs, "addQueryArgs", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/store/index.js");
  reactHotLoader.register(actions, "actions", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/store/index.js");
  reactHotLoader.register(store, "store", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/store/index.js");
  reactHotLoader.register(_default, "default", "/Users/jaredrethman/wp-local-docker-sites/wp-test/wordpress/wp-content/plugins/content-list/src/js/store/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(235);


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=content-list.js.map