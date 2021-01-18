import template from './kplngi-type-script-index.html.twig';
import SwNumberField from './SwNumberField';

Shopware.Component.register('kplngi-type-script-index', {
    template,

    computed: {
        fieldData(): SwNumberField {
            return {
                label: 'My Label',
                value: 3
            }
        }
    }
});
