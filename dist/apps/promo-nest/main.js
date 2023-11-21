/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("nunjucks");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
exports.environment = {
    production: false,
};


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const app_controller_1 = __webpack_require__(8);
const app_service_1 = __webpack_require__(9);
const axios_1 = __webpack_require__(10);
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule.register({
                timeout: 5000,
                maxRedirects: 5,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const environment_1 = __webpack_require__(6);
const app_service_1 = __webpack_require__(9);
let AppController = exports.AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
        this.WEBPACK_DEV_URL = 'http://localhost:3001';
        this.STATIC_PREFIX = environment_1.environment.production ? '/' : this.WEBPACK_DEV_URL + '/assets/';
    }
    async getData() {
        const topics = await this.appService.getTopics();
        return {
            title: 'TITLE',
            message: 'MESSAGE',
            items: [1, 2, 3, 4, 5],
            topics,
            STATIC_PREFIX: this.STATIC_PREFIX,
        };
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const axios_1 = __webpack_require__(10);
const rxjs_1 = __webpack_require__(11);
let AppService = exports.AppService = class AppService {
    constructor(httpService) {
        this.httpService = httpService;
        this.baseUrl = 'https://api.baranka.dev';
    }
    async getTopics() {
        return (0, rxjs_1.firstValueFrom)(this.httpService
            .get(`${this.baseUrl}/api/v1/pdd/topics`)
            .pipe((0, rxjs_1.map)((response) => response.data.data?.topics ?? [])));
    }
};
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], AppService);


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const core_1 = __webpack_require__(3);
const path_1 = __webpack_require__(4);
const nunjucks = tslib_1.__importStar(__webpack_require__(5));
const environment_1 = __webpack_require__(6);
const app_module_1 = __webpack_require__(7);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const minifierOptions = {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
    };
    const viewEngine = nunjucks.configure([
        (0, path_1.join)(__dirname, 'views'),
    ], {
        autoescape: true,
        throwOnUndefined: false,
        trimBlocks: false,
        lstripBlocks: false,
        watch: true,
        noCache: environment_1.environment.production ? true : false,
        express: app
    });
    app.engine('njk', viewEngine.render);
    app.setViewEngine('njk');
    // app.s
    // app.setViewEngine({
    //   engine: {
    //     nunjucks: require('nunjucks'),
    //   },
    //   templates: views,
    //   options: {
    //     useHtmlMinifier: minifier,
    //     htmlMinifierOptions: minifierOptions,
    //   },
    // });
    app.setBaseViewsDir((0, path_1.join)(__dirname, 'views'));
    app.useStaticAssets((0, path_1.join)(__dirname, 'assets'));
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map