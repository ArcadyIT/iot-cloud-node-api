import { NextFunction, Request, Response, Router } from 'express';
import { BaseRoute } from './base';

/**
 * / route
 *
 * @class User
 */
export class IndexController extends BaseRoute {
	/**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
	public static create(router: Router) {
		//log
		console.log('[IndexController::create] Creating index route.');

		//add home page route
		router.get('/', (req: Request, res: Response, next: NextFunction) => {
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
	public index(req: Request, res: Response, next: NextFunction) {
		// set message
		let message: Object = {
			message: 'Home | Arcady Data Hub'
		};

		// render response
		res.send(message);
	}
}
