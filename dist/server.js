"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const azure = require("azure");
const errorHandler = require("errorhandler");
const index_controller_1 = require("./controllers/index.controller");
/**
 * The server.
 *
 * @class Server
 */
class Server {
    /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
    static bootstrap() {
        return new Server();
    }
    /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
    constructor() {
        //create expressjs application
        this.app = express();
        //configure application
        this.config();
        //add routes
        this.routes();
        //add api
        this.api();
    }
    /**
   * Create REST API routes
   *
   * @class Server
   * @method api
   */
    api() {
        //empty for now
    }
    /**
   * Configure application
   *
   * @class Server
   * @method config
   */
    config() {
        //add static paths
        this.app.use(express.static(path.join(__dirname, 'public')));
        //configure pug
        // this.app.set('views', path.join(__dirname, 'views'));
        // this.app.set('view engine', 'pug');
        //mount logger
        // this.app.use(logger("dev"));
        //mount json form parser
        // this.app.use(bodyParser.json());
        //mount query string parser
        // this.app.use(bodyParser.urlencoded({
        //   extended: true
        // }));
        //mount cookie parker
        // this.app.use(cookieParser("SECRET_GOES_HERE"));
        //mount override?
        // this.app.use(methodOverride());
        // catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        //error handling
        this.app.use(errorHandler());
        let sb = azure.createServiceBusService();
        sb.createQueueIfNotExists('test', (err) => {
            console.log(err);
        });
    }
    /**
   * Create and return Router.
   *
   * @class Server
   * @method config
   * @return void
   */
    routes() {
        let router;
        router = express.Router();
        //IndexRoute
        index_controller_1.IndexController.create(router);
        //use router middleware
        this.app.use(router);
    }
}
exports.Server = Server;
