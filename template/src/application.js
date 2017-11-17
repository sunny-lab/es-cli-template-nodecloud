import _ from 'lodash';
import http from 'http';
import path from 'path';
import Koa from 'koa';
import koaConsul from 'koa-consul';
import bodyParser from 'koa-bodyparser';

import {initApp, config, bootstrap, logger} from './nodecloud';

const bundles = [
    'example'
];

initialApp().catch(e => {
    logger.error('An internal error occurred.', e);
    process.exit(1);
});

async function initialApp() {
    const configuration = await config.getConfig();
    logger.info(`Loaded the configuration from ${configuration.type}`);

    const app = new Koa();
    const appRoot = __dirname;

    initApp(() => {
        // app middleware
        app.use(bodyParser());
        app.use(koaConsul({}));

        // app context
        app.context.appConfig = configuration.config;
        app.context.appRoot = appRoot;

        // get can init app modules
        bundles.forEach(bundleName => {
            let bundle = require('./' + path.join('bundle', bundleName, 'app'));
            bundle.start(app);
        });

        return app.callback();
    });
}

