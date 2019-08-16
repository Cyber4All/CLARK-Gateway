import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as http from 'http';
import { ExpressRouteDriver } from '../drivers';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import { sentryRequestHandler, sentryErrorHandler } from '../../shared/SentryConnector';

dotenv.config();

const KEEP_ALIVE_TIMEOUT = process.env.KEEP_ALIVE_TIMEOUT;

/**
 * Handles serving the API through the express framework.
 */
export class ExpressDriver {
  static app = express();
  static connectedClients = new Map<string, string>();

  static start() {
    if (process.env.NODE_ENV === 'production') {
      // Configure error handler - MUST BE THE FIRST ERROR HANDLER IN CALL ORDER
      this.app.use(sentryErrorHandler);

      // Configure Sentry Route Handler - MUST BE FIRST ROUTE HANDLER
      this.app.use(sentryRequestHandler);
    }

    // Configure app to log requests
    this.app.use(logger('combined'));

    // configure app to use bodyParser()
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(bodyParser.json({ limit: '50mb' }));

    this.app.use(cors({ origin: true, credentials: true }));

    // Set our api routes
    this.app.use('/', ExpressRouteDriver.buildRouter());

    /**
     * Get port from environment and store in Express.
     */
    const port = process.env.PORT || '3000';
    this.app.set('port', port);

    /**
     * Create HTTP server.
     */
    const server = http.createServer(this.app);
    server.keepAliveTimeout = KEEP_ALIVE_TIMEOUT
      ? parseInt(KEEP_ALIVE_TIMEOUT, 10)
      : server.keepAliveTimeout;

    /**
     * Listen on provided port, on all network interfaces.
     */
    server.listen(port, () =>
      console.log(`CLARK Gateway API running on localhost:${port}`),
    );

    return this.app;
  }
}
