"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
/**
 * / route
 *
 * @class User
 */
class IndexController extends base_1.BaseRoute {
    /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
    static create(router) {
        //log
        console.log('[IndexController::create] Creating index route.');
        //add home page route
        router.get('/', (req, res, next) => {
            new IndexController().index(req, res, next);
        });
    }
    /**
   * Constructor
   *
   * @class IndexRoute
   * @constructor
   */
    constructor() {
        super();
    }
    /**
   * The home page route.
   *
   * @class IndexRoute
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
    index(req, res, next) {
        // set message
        let message = {
            message: 'Home | Arcady Data Hub'
        };
        // render response
        res.send(message);
    }
}
exports.IndexController = IndexController;
