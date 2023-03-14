import { PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
  fallbackDisableSubmit: false,
  version: '1.0.0',
  controlName: 'Pie Chart',
  description: 'Pie Chart',
  iconUrl: 'plugin',
  standardProperties: {
    description: false,
    fieldLabel: true,
  },
  properties: { //Custom configuration fields. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
    bindings: {
      type: 'string',
      enum: ['chart1', 'chart2', 'chart3'],
      title: 'Data Binding',
    },
    maxHeight: {
      type: 'number',
      title: 'Max Height',
    },
    titleField: {
      type: 'string',
      title: 'Title',
    },
  },
};
