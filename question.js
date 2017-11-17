module.exports = [
    {
        type: 'input',
        name: 'serviceName',
        message: 'What\'s your service name?',
    },
    {
        type: 'input',
        name: 'servicePort',
        default: 3000,
        message: 'Your service port?',
    },
    {
        type: 'input',
        name: 'consulHost',
        message: 'Consul cluster host',
    },
    {
        type: 'confirm',
        name: 'useConfigServer',
        default: false,
        message: 'Use ConfigServer'
    }
];
