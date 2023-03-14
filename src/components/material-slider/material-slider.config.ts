import { PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
  fallbackDisableSubmit: false,
  version: '1.0.0',
  controlName: 'Slider',
  description: 'Material Slider',
  groupName: 'Material',
  standardProperties: {
    readOnly: true,  //Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm
    required: true,
    description: false,
  },
  properties: { //Custom configuration fields. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
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
    value: {  //A field to pass a value to the workflow as a variable. See https://help.nintex.com/en-US/formplugins/Reference/StoreValue.htm
      type: 'number',
      isValueField: true,
    },
  },
};
