import './components/kplngi-type-script-index/index.ts'

Shopware.Module.register('kplngi-type-script', {
    type: 'plugin',
    name: 'KplngiTypeScript',
    color: '#ff3d58',
    icon: 'default-shopping-paper-bag-product',
    title: 'Type Script',
    description: 'Type Script',

    routes: {
        index: {
            component: 'kplngi-type-script-index',
            path: 'index'
        }
    },

    navigation: [{
        label: 'Type Script',
        color: '#ff3d58',
        path: 'kplngi.type.script.index',
        icon: 'default-shopping-paper-bag-product',
        position: 100,
        parent: 'sw-catalogue'
    }]
});
