import NCBoot from 'nodecloud-boot';

const ncBoot = NCBoot.getInstance(__dirname);

module.exports = {
    initApp: ncBoot.initApp,
    consul: ncBoot.consul,
    client: ncBoot.client,
    loadbalance: ncBoot.loadbalance,
    logger: ncBoot.logger,
    config: ncBoot.config,
    bootstrap: ncBoot.bootstrap
};