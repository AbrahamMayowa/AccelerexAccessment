(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var typeorm_1 = __webpack_require__(2);
var express = __webpack_require__(3);
var bodyParser = __webpack_require__(4);
var routes_1 = __webpack_require__(5);
var entity_1 = __webpack_require__(8);
var errorControllers_1 = __webpack_require__(21);
var dotenv_1 = __webpack_require__(23);
var swaggerUi = __webpack_require__(24);
var swaggerDocument = __webpack_require__(25);
dotenv_1.config();
typeorm_1.createConnection({
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "mayowa",
    password: "password",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [entity_1.Character, entity_1.Location, entity_1.Comment, entity_1.Episode]
})
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    var PORT, app;
    return __generator(this, function (_a) {
        PORT = "3000";
        app = express();
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        app.use(routes_1.default);
        app.use(errorControllers_1.generalError);
        // start express server
        app.listen(PORT, function () { return console.log("Server ready on " + PORT); });
        return [2 /*return*/];
    });
}); })
    .catch(function (error) { return console.log(error); });


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(3);
var characterController_1 = __webpack_require__(6);
var episodeController_1 = __webpack_require__(15);
var commentController_1 = __webpack_require__(18);
var router = express_1.Router();
router.post('/createCharacter', characterController_1.createCharacter);
router.get('/characters', characterController_1.getCharacters);
router.post('/createEpisode', episodeController_1.createEpisode);
router.get('/episode', episodeController_1.episodes);
router.get('/episodeCharacter/:characterId', episodeController_1.episodeByCharacter);
router.post('/createComment', commentController_1.createComment);
router.get('/comments', commentController_1.comments);
exports.default = router;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(7), exports);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacters = exports.createCharacter = void 0;
var typeorm_1 = __webpack_require__(2);
var entity_1 = __webpack_require__(8);
var constants_1 = __webpack_require__(13);
var constants_2 = __webpack_require__(14);
/***
 * @description endpoint for creating character
 * @returns {Object} the result of the api request
 * @param req
 * @param res
 * @param next
 *
 */
var createCharacter = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstName, lastName, status, stateOfOrigin, gender, locationName, locationLatitude, locationLongitude, characterRespository, locationRespository, newLocation, newCharacter, savedPost, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, status = _a.status, stateOfOrigin = _a.stateOfOrigin, gender = _a.gender, locationName = _a.locationName, locationLatitude = _a.locationLatitude, locationLongitude = _a.locationLongitude;
                characterRespository = typeorm_1.getRepository(entity_1.Character);
                locationRespository = typeorm_1.getRepository(entity_1.Location);
                newLocation = locationRespository.create({
                    name: locationName,
                    latitude: locationLatitude,
                    longitude: locationLongitude
                });
                // save new location
                return [4 /*yield*/, locationRespository.save(newLocation)];
            case 1:
                // save new location
                _b.sent();
                newCharacter = characterRespository.create({
                    firstName: firstName,
                    lastName: lastName,
                    status: status,
                    stateOfOrigin: stateOfOrigin,
                    gender: gender,
                    location: newLocation
                });
                return [4 /*yield*/, characterRespository.save(newCharacter)];
            case 2:
                savedPost = _b.sent();
                res.status(201).send({ status: constants_1.SUCCESS_RESPONSE_STATUS, data: savedPost });
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                next(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createCharacter = createCharacter;
/**
 * @description query characters with sorting and filter feature
 * @param req
 * @param res
 * @param next
 */
var getCharacters = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, sortValue, filterValue, filterKey, characterRespository, supportedFilterKey, supportedSortValue, queredCharacters, err_2;
    var _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 15, , 16]);
                _a = req.query, sortValue = _a.sortValue, filterValue = _a.filterValue, filterKey = _a.filterKey;
                characterRespository = typeorm_1.getRepository(entity_1.Character);
                supportedFilterKey = ['gender', 'status', 'location'];
                supportedSortValue = ['name', 'gender'];
                queredCharacters = void 0;
                if (!(sortValue && !filterValue)) return [3 /*break*/, 5];
                /**
                 * check for supported sorting value
                 * character can only be sorted by gender and name
                 */
                if (!supportedSortValue.includes(sortValue)) {
                    return [2 /*return*/, res.status(400).send({
                            status: constants_1.FAILE_RESPONSE_STATUS,
                            message: sortValue + " " + constants_2.SORTING_ERROR
                        })];
                }
                if (!(sortValue === 'name')) return [3 /*break*/, 2];
                return [4 /*yield*/, characterRespository.find({
                        order: {
                            firstName: 'DESC',
                            lastName: 'DESC'
                        }
                    })];
            case 1:
                queredCharacters = _f.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, characterRespository.find({
                    order: (_b = {},
                        _b[sortValue] = 'DESC',
                        _b)
                })];
            case 3:
                queredCharacters = _f.sent();
                _f.label = 4;
            case 4: return [3 /*break*/, 14];
            case 5:
                if (!(filterValue && !sortValue)) return [3 /*break*/, 10];
                /**
                 * check for supported filter key
                 * character can only be filtered by gender, status or location
                 * if filterValue is not provided, characters will not be filtered
                 */
                if (!supportedFilterKey.includes(filterKey)) {
                    return [2 /*return*/, res.status(400).send({
                            status: constants_1.FAILE_RESPONSE_STATUS,
                            message: filterValue + " " + constants_2.FILTER_ERROR
                        })];
                }
                if (!(filterKey === 'location')) return [3 /*break*/, 7];
                return [4 /*yield*/, typeorm_1.getRepository(entity_1.Character)
                        .createQueryBuilder('character')
                        .innerJoin('character.location', 'location')
                        .where('location.name= :name', { name: filterValue })
                        .getMany()];
            case 6:
                queredCharacters = _f.sent();
                return [3 /*break*/, 9];
            case 7: return [4 /*yield*/, characterRespository.find({
                    where: (_c = {},
                        _c[filterKey] = filterValue,
                        _c)
                })];
            case 8:
                queredCharacters = _f.sent();
                _f.label = 9;
            case 9: return [3 /*break*/, 14];
            case 10:
                if (!(filterValue && sortValue)) return [3 /*break*/, 12];
                if (!supportedSortValue.includes(sortValue) ||
                    !supportedFilterKey.includes(filterKey)) {
                    return [2 /*return*/, res.status(400).send({
                            status: constants_1.FAILE_RESPONSE_STATUS,
                            message: constants_2.GENERAL_UNSUPPORTED_MESSAGE
                        })];
                }
                return [4 /*yield*/, characterRespository.find({
                        where: (_d = {},
                            _d[filterKey] = filterValue,
                            _d),
                        order: (_e = {},
                            _e[sortValue] = 'DESC',
                            _e)
                    })];
            case 11:
                queredCharacters = _f.sent();
                return [3 /*break*/, 14];
            case 12: return [4 /*yield*/, characterRespository.find()];
            case 13:
                // only query without sorting or filter
                queredCharacters = _f.sent();
                _f.label = 14;
            case 14:
                res
                    .status(200)
                    .send({ status: constants_1.SUCCESS_RESPONSE_STATUS, data: queredCharacters });
                return [3 /*break*/, 16];
            case 15:
                err_2 = _f.sent();
                res.status(400).send({ status: 'error', message: err_2.message });
                return [3 /*break*/, 16];
            case 16: return [2 /*return*/];
        }
    });
}); };
exports.getCharacters = getCharacters;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(12), exports);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = exports.Gender = exports.Status = void 0;
var typeorm_1 = __webpack_require__(2);
var Episode_1 = __webpack_require__(10);
var index_1 = __webpack_require__(8);
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["DEAD"] = "DEAD";
    Status["UNKNOWN"] = "UNKNOWN";
})(Status = exports.Status || (exports.Status = {}));
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
})(Gender = exports.Gender || (exports.Gender = {}));
var Character = /** @class */ (function () {
    function Character() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", Number)
    ], Character.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false
        }),
        __metadata("design:type", String)
    ], Character.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false
        }),
        __metadata("design:type", String)
    ], Character.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            enum: Status,
            nullable: false
        }),
        __metadata("design:type", String)
    ], Character.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Character.prototype, "stateOfOrigin", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            enum: Gender,
            nullable: false
        }),
        __metadata("design:type", String)
    ], Character.prototype, "gender", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return index_1.Location; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", index_1.Location)
    ], Character.prototype, "location", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Episode_1.Episode; }, function (episode) { return episode.characters; }),
        __metadata("design:type", Array)
    ], Character.prototype, "episodes", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({
            type: 'timestamp',
            nullable: false
        }),
        __metadata("design:type", Date)
    ], Character.prototype, "created", void 0);
    Character = __decorate([
        typeorm_1.Entity()
    ], Character);
    return Character;
}());
exports.Character = Character;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Episode = void 0;
var typeorm_1 = __webpack_require__(2);
var index_1 = __webpack_require__(8);
var Episode = /** @class */ (function () {
    function Episode() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", Number)
    ], Episode.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false
        }),
        __metadata("design:type", String)
    ], Episode.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ type: 'timestamp', nullable: false }),
        __metadata("design:type", Date)
    ], Episode.prototype, "releaseDate", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            unique: true
        }),
        __metadata("design:type", String)
    ], Episode.prototype, "episodeCode", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return index_1.Character; }, function (character) { return character.episodes; }, {
            cascade: true
        }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Episode.prototype, "characters", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return index_1.Comment; }, function (comment) { return comment.episode; }),
        __metadata("design:type", Array)
    ], Episode.prototype, "comments", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({
            type: 'timestamp',
            nullable: false
        }),
        __metadata("design:type", Date)
    ], Episode.prototype, "created", void 0);
    Episode = __decorate([
        typeorm_1.Entity()
    ], Episode);
    return Episode;
}());
exports.Episode = Episode;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
var typeorm_1 = __webpack_require__(2);
var Location = /** @class */ (function () {
    function Location() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", Number)
    ], Location.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false
        }),
        __metadata("design:type", String)
    ], Location.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            type: 'double'
        }),
        __metadata("design:type", String)
    ], Location.prototype, "latitude", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            type: 'double'
        }),
        __metadata("design:type", String)
    ], Location.prototype, "longitude", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({
            type: 'timestamp',
            nullable: false
        }),
        __metadata("design:type", Date)
    ], Location.prototype, "created", void 0);
    Location = __decorate([
        typeorm_1.Entity()
    ], Location);
    return Location;
}());
exports.Location = Location;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var typeorm_1 = __webpack_require__(2);
var Episode_1 = __webpack_require__(10);
var Comment = /** @class */ (function () {
    function Comment() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", Number)
    ], Comment.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'text',
            width: 250,
            nullable: false
        }),
        __metadata("design:type", String)
    ], Comment.prototype, "comment", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Episode_1.Episode; }, function (episode) { return episode.comments; }, {
            onDelete: 'CASCADE',
            cascade: true
        }),
        __metadata("design:type", Episode_1.Episode)
    ], Comment.prototype, "episode", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false
        }),
        __metadata("design:type", String)
    ], Comment.prototype, "ipAddressLocation", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({
            type: 'timestamp',
            nullable: false
        }),
        __metadata("design:type", Date)
    ], Comment.prototype, "created", void 0);
    Comment = __decorate([
        typeorm_1.Entity()
    ], Comment);
    return Comment;
}());
exports.Comment = Comment;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @constant
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAILE_RESPONSE_STATUS = exports.SUCCESS_RESPONSE_STATUS = void 0;
exports.SUCCESS_RESPONSE_STATUS = 'success';
exports.FAILE_RESPONSE_STATUS = 'error';


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***
 * @constant
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SORTING_ERROR = exports.FILTER_ERROR = exports.GENERAL_UNSUPPORTED_MESSAGE = void 0;
exports.GENERAL_UNSUPPORTED_MESSAGE = 'Unsuppored filtering or sorting value';
exports.FILTER_ERROR = 'is not supported for filtering characters';
exports.SORTING_ERROR = 'is not supported for sorting characters';


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(16), exports);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.episodeByCharacter = exports.episodes = exports.createEpisode = void 0;
var typeorm_1 = __webpack_require__(2);
var entity_1 = __webpack_require__(8);
var constants_1 = __webpack_require__(13);
var constants_2 = __webpack_require__(17);
/***
 * @description endpoint for creating episode
 * @returns {Object} the result of the api request
 * @param req
 * @param res
 * @param next
 *
 */
var createEpisode = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, releaseDate, episodeCode, characterArray, characterRespository, episodeRespository, characters, newEpisode, savedEpisode, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, name = _a.name, releaseDate = _a.releaseDate, episodeCode = _a.episodeCode, characterArray = _a.characterArray;
                characterRespository = typeorm_1.getRepository(entity_1.Character);
                episodeRespository = typeorm_1.getRepository(entity_1.Episode);
                return [4 /*yield*/, characterRespository.findByIds(characterArray)];
            case 1:
                characters = _b.sent();
                newEpisode = episodeRespository.create({
                    name: name,
                    releaseDate: new Date(releaseDate),
                    episodeCode: episodeCode,
                    characters: characters
                });
                return [4 /*yield*/, episodeRespository.save(newEpisode)];
            case 2:
                savedEpisode = _b.sent();
                res
                    .status(201)
                    .send({ status: constants_1.SUCCESS_RESPONSE_STATUS, data: savedEpisode });
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                res.status(400).send({ status: 'error', message: err_1.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createEpisode = createEpisode;
/**
 * @description query episode list order it by date
 * @param req
 * @param res
 */
var episodes = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var episodeRespository, episodes_1, episodeWithCommentCount, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                episodeRespository = typeorm_1.getRepository(entity_1.Episode);
                return [4 /*yield*/, episodeRespository.find({
                        relations: ['comments'],
                        order: {
                            releaseDate: 'DESC'
                        }
                    })];
            case 1:
                episodes_1 = _a.sent();
                episodeWithCommentCount = episodes_1.map(function (episode) {
                    return {
                        id: episode.id,
                        name: episode.name,
                        releaseDate: episode.releaseDate,
                        episodeCode: episode.episodeCode,
                        created: episode.created,
                        commentCount: episode.comments.length
                    };
                });
                res
                    .status(200)
                    .send({ status: constants_1.SUCCESS_RESPONSE_STATUS, data: episodeWithCommentCount });
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(400).send({ status: 'error', message: err_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.episodes = episodes;
/**
 * @description search episode by a character
 * @param req
 * @param res
 */
var episodeByCharacter = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var characterId, characterRespository, episodeCharacter, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                characterId = req.params.characterId;
                characterRespository = typeorm_1.getRepository(entity_1.Character);
                return [4 /*yield*/, characterRespository.findOne(characterId, {
                        relations: ['episodes']
                    })];
            case 1:
                episodeCharacter = _a.sent();
                if (!episodeCharacter) {
                    return [2 /*return*/, res.status(404).send({ status: 'error', message: constants_2.NON_EXIST })];
                }
                res.status(200).send({
                    status: constants_1.SUCCESS_RESPONSE_STATUS,
                    data: episodeCharacter.episodes
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(400).send({ status: 'error', message: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.episodeByCharacter = episodeByCharacter;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 *
 * @constant
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NON_EXIST = void 0;
exports.NON_EXIST = 'Character does not exist';


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(19), exports);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comments = exports.createComment = void 0;
var typeorm_1 = __webpack_require__(2);
var entity_1 = __webpack_require__(8);
var constants_1 = __webpack_require__(13);
var request_ip_1 = __webpack_require__(20);
/***
 * @description endpoint for creating comment
 * @returns {Object} the result of the api request
 * @param req
 * @param res
 * @param next
 *
 */
var createComment = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, comment, episodeId, episodeRespository, commentRespository, clientIp, episode, newComment, savedComment, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, comment = _a.comment, episodeId = _a.episodeId;
                episodeRespository = typeorm_1.getRepository(entity_1.Episode);
                commentRespository = typeorm_1.getRepository(entity_1.Comment);
                clientIp = request_ip_1.getClientIp(req);
                return [4 /*yield*/, episodeRespository.findOne({ id: episodeId })];
            case 1:
                episode = _b.sent();
                if (!episode) {
                    return [2 /*return*/, res
                            .status(404)
                            .send({ status: 'error', message: 'Episode does not exist' })];
                }
                newComment = commentRespository.create({
                    comment: comment,
                    episode: episode,
                    ipAddressLocation: clientIp
                });
                return [4 /*yield*/, commentRespository.save(newComment)];
            case 2:
                savedComment = _b.sent();
                res
                    .status(201)
                    .send({ status: constants_1.SUCCESS_RESPONSE_STATUS, data: savedComment });
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                next(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createComment = createComment;
var comments = function (_, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var commentRespository, comments_1, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                commentRespository = typeorm_1.getRepository(entity_1.Comment);
                return [4 /*yield*/, commentRespository.find({
                        order: {
                            created: 'DESC'
                        }
                    })];
            case 1:
                comments_1 = _a.sent();
                res.status(200).send({ status: constants_1.SUCCESS_RESPONSE_STATUS, data: comments_1 });
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                next(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.comments = comments;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("request-ip");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(22), exports);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generalError = void 0;
var generalError = function (error, _, res, next) {
    res.status(500).send({ status: 'error', message: error.message });
};
exports.generalError = generalError;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("swagger-ui-express");

/***/ }),
/* 25 */
/***/ (function(module) {

module.exports = JSON.parse("{\"openapi\":\"3.0.0\",\"info\":{\"version\":\"1.0.0\",\"title\":\"Accelerex Test Program\",\"description\":\"Accelerex Technical Test\",\"license\":{\"name\":\"MIT\",\"url\":\"https://opensource.org/licenses/MIT\"}},\"servers\":[{\"url\":\"https://accelerex-task.herokuapp.com/\",\"description\":\"Local Dev, or from Heroku\"}],\"tags\":[{\"name\":\"API\",\"description\":\"API for Series in the system\"}],\"consumes\":[\"application/json\"],\"produces\":[\"application/json\"],\"paths\":{\"/characters\":{\"get\":{\"tags\":[\"Character\"],\"summary\":\"Get all character\",\"parameters\":[{\"in\":\"query\",\"name\":\"sortValue\",\"required\":false,\"description\":\"Characters sorting value. name or gender value only\",\"type\":\"string\"},{\"in\":\"query\",\"name\":\"filterValue\",\"required\":false,\"description\":\"Characters filter value\",\"type\":\"string\"},{\"in\":\"query\",\"name\":\"filterKey\",\"required\":false,\"description\":\"Characters filter key. gender, status or location only\",\"type\":\"string\"}],\"produces\":[\"application/json\"],\"responses\":{\"200\":{\"description\":\"Character properties\",\"content\":{\"404\":{\"description\":\"Failed. Episode does not exist.\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/definitions/errorObject\"}}}},\"application/json\":{\"schema\":{\"type\":\"object\",\"properties\":{\"status\":{\"type\":\"string\",\"description\":\"Request status message\"},\"data\":{\"type\":\"array\",\"description\":\"Response data\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The auto-generated id of the character.\"},\"firstName\":{\"type\":\"string\",\"description\":\"The firstName of character.\"},\"lastName\":{\"type\":\"string\",\"description\":\"The character lastName\"},\"status\":{\"type\":\"string\",\"enum\":[\"DEAD\",\"ACTIVE\",\"UNKNOWN\"],\"description\":\"Character status\"},\"stateOfOrigin\":{\"type\":\"string\",\"description\":\"The character origin\"},\"gender\":{\"type\":\"string\",\"description\":\"The character gender\"},\"created\":{\"type\":\"string\",\"format\":\"date\",\"description\":\"The date of the character creation.\"}}}}}}}}}}}},\"/createComment\":{\"post\":{\"tags\":[\"Comment\"],\"summary\":\"Create a comment and link it to an episode\",\"requestBody\":{\"description\":\"Comment Object\",\"required\":true,\"content\":{\"application/json\":{\"schema\":{\"type\":\"object\",\"properties\":{\"comment\":{\"type\":\"string\",\"description\":\"Comment text\",\"maxLength\":250},\"episodeId\":{\"type\":\"string\",\"description\":\"Episode id\"}}}}}},\"produces\":[\"application/json\"],\"responses\":{\"201\":{\"description\":\"Comment successfully created\",\"content\":{\"application/json\":{\"schema\":{\"type\":\"object\",\"properties\":{\"status\":{\"type\":\"string\",\"description\":\"Request status message\"},\"data\":{\"type\":\"object\",\"description\":\"Response data\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The auto-generated id of the comment.\"},\"comment\":{\"type\":\"string\",\"description\":\"The comment text.\"},\"episode\":{\"type\":\"object\",\"description\":\"The linked episode object\"},\"ipAddressLocation\":{\"type\":\"string\",\"description\":\"The commentor ip address\"},\"created\":{\"type\":\"string\",\"format\":\"date\",\"description\":\"The date of the comment creation.\"}}}}}}}},\"404\":{\"description\":\"Failed. Episode does not exist.\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/definitions/errorObject\"}}}},\"500\":{\"description\":\"Failed. Bad request\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/definitions/errorObject\"}}}}}}},\"/episode\":{\"get\":{\"tags\":[\"Episode\"],\"summary\":\"Episode list with count of comment\",\"produces\":[\"application/json\"],\"responses\":{\"200\":{\"description\":\"Episode list successfully \",\"content\":{\"application/json\":{\"schema\":{\"type\":\"object\",\"properties\":{\"status\":{\"type\":\"string\",\"description\":\"Request status message\"},\"data\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The auto-generated id of the episode.\"},\"name\":{\"type\":\"string\",\"description\":\"The episode name.\"},\"episodeCode\":{\"type\":\"string\",\"description\":\"The unique episode code\"},\"releaseDate\":{\"type\":\"string\",\"format\":\"date\",\"description\":\"Episode release date\"},\"created\":{\"type\":\"string\",\"format\":\"date\",\"description\":\"The date of the comment creation.\"},\"commentCount\":{\"type\":\"integer\",\"description\":\"The linked comment count\"}}}}}}}}},\"400\":{\"description\":\"Failed. Bad request.\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/definitions/errorObject\"}}}},\"500\":{\"description\":\"Failed. Bad request\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/definitions/errorObject\"}}}}}}},\"/episodeCharacter/{characterId}\":{\"parameters\":[{\"name\":\"characterId\",\"in\":\"path\",\"required\":true,\"description\":\"ID of the character\",\"type\":\"string\"}],\"get\":{\"tags\":[\"Episode\"],\"summary\":\"All episode a character featured in\",\"produces\":[\"application/json\"],\"responses\":{\"200\":{\"description\":\"Character's episodes list successfully \",\"content\":{\"application/json\":{\"schema\":{\"type\":\"object\",\"properties\":{\"status\":{\"type\":\"string\",\"description\":\"Request status message\"},\"data\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The auto-generated id of the episode.\"},\"name\":{\"type\":\"string\",\"description\":\"The episode name.\"},\"episodeCode\":{\"type\":\"string\",\"description\":\"The unique episode code\"},\"releaseDate\":{\"type\":\"string\",\"format\":\"date\",\"description\":\"Episode release date\"},\"created\":{\"type\":\"string\",\"format\":\"date\",\"description\":\"The date of the comment creation.\"}}}}}}}}},\"400\":{\"description\":\"Failed. Bad request.\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/definitions/errorObject\"}}}},\"500\":{\"description\":\"Failed. Bad request\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/definitions/errorObject\"}}}}}}},\"/comments\":{\"get\":{\"tags\":[\"Comment\"],\"summary\":\"The comment list\",\"produces\":[\"application/json\"],\"responses\":{\"200\":{\"description\":\"Comment list successfully fetched\",\"content\":{\"application/json\":{\"schema\":{\"type\":\"object\",\"properties\":{\"status\":{\"type\":\"string\",\"description\":\"Request status message\"},\"data\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"description\":\"Response data\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The auto-generated id of the comment.\"},\"comment\":{\"type\":\"string\",\"description\":\"The comment text.\"},\"ipAddressLocation\":{\"type\":\"string\",\"description\":\"The commentor ip address\"},\"created\":{\"type\":\"string\",\"format\":\"date\",\"description\":\"The date of the comment creation.\"}}}}}}}}},\"500\":{\"description\":\"Failed. Bad request\",\"content\":{\"application/json\":{\"schema\":{\"$ref\":\"#/definitions/errorObject\"}}}}}}}},\"definitions\":{\"errorObject\":{\"type\":\"object\",\"properties\":{\"status\":{\"type\":\"string\",\"description\":\"Response status\"},\"message\":{\"type\":\"string\",\"descripton\":\"Error message\"}}}}}");

/***/ })
/******/ ])));