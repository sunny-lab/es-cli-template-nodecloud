import path from 'path';

module.exports = {
    web: {
        serviceId: null,
        serviceName: '{{ meta.serviceName }}',
        port: {{ meta.port }}
    },
    consul: {
        host: '{{ meta.consulHost }}',
        port: 8500,
        discoveryHost: null,
        timeout: '1s',
        interval: '10s'
    },
    config: {
        {% if meta.useConfigServer == true %}
        server: {
            enable: true,
            name: 'multi-cloud-config-service',
            url: '/multi-cloud-config-service/v1/config/:service/:env/inner',
            interval: 60000,
            watch: false,
            client: '{{ meta.serviceName }}'
        },
        {% endif %}
        local: {
            enable: true,
            path: __dirname,
            service: 'config',
            ext: 'js'
        }
    },
    logger: {
        path: path.resolve(__dirname, '../../log')
    },
    tmplRoot: './build',
    staticPath: path.join(__dirname, '../'),
};