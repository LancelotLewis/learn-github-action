/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 239:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const core = __nccwpck_require__(75);
const shell = __nccwpck_require__(238);

module.exports = async () => {
  try {
    shell.exec('pwd');
    shell.cd('dist');
    shell.exec('pwd');
    shell.exec('ls');
    const file = path.join(process.cwd(), 'index.js');
    console.log('file-path', file);
    // core
    //   .getInput('command')
    //   .split('\n')
    //   .forEach((command) => {
    //     shell.exec(command);
    //     shell.exec('pwd');
    //     shell.exec('ls');
    //     shell.exec('process.cwd()');
    //   });
  } catch (error) {
    core.setFailed(error.message);
  }
};


/***/ }),

/***/ 75:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 238:
/***/ ((module) => {

module.exports = eval("require")("shelljs");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// const practiceExec = require('./practice/exec');
// const practiceJumpPath = require('./practice/jump-path');
const practiceCommand = __nccwpck_require__(239);

practiceCommand();

})();

module.exports = __webpack_exports__;
/******/ })()
;