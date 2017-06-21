import * as express from 'express';
import * as path from 'path';
import * as azure from 'azure';
import errorHandler = require('errorhandler');
import methodOverride = require('method-override');

import { IndexController } from './controllers/index.controller';

declare var __dirname;

/**
 * The server.
 *
 * @class Server
 */
export class Server {
	public app: express.Application;

	/**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
	public static bootstrap(): Server {
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
	public api() {
		//empty for now
	}

	/**
   * Configure application
   *
   * @class Server
   * @method config
   */
	public config() {
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
		this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
			err.status = 404;
			next(err);
		});

		//error handling
		this.app.use(errorHandler());

        // let sb = azure.createServiceBusService();
        // sb.createQueueIfNotExists('test', (err) => {
        //     console.log(err);
        // });
	}

	/**
   * Create and return Router.
   *
   * @class Server
   * @method config
   * @return void
   */
	private routes() {
		let router: express.Router;
		router = express.Router();

		//IndexRoute
		IndexController.create(router);

		//use router middleware
		this.app.use(router);
	}
}