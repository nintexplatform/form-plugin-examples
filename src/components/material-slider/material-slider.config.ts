import { PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
  fallbackDisableSubmit: false,
  version: '1.0.0',
  controlName: 'Slider',
  description: 'Material Slider',
  groupName: 'Material',
  standardProperties: {
    readOnly: true,
    required: true,
    description: false,
  },
  properties: {
    titleField: {
      type: 'string',
      title: 'Title',
    },
    disabled: {
      type: 'boolean',
      title: 'Disabled',
    },
    min: {
      type: 'number',
      title: 'Min',
    },
    max: {
      type: 'number',
      title: 'Max',
    },
    value: {
      type: 'number',
      isValueField: true,
    },
  },
};
