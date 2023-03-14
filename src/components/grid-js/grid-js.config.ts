import { PluginContract } from '@nintex/form-plugin-contract';
export const config: PluginContract = {
  controlName: 'Grid JS',
  description: 'Example of Data Grid with hard-coded data',
  groupName: 'Visual',
  fallbackDisableSubmit: false,
  version: '1.0',
  properties: { //Custom configuration fields. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
    sortable: {
      type: 'boolean',
      title: 'Allow Sorting',
    },
    pagination: {
      type: 'boolean',
      title: 'Allow Pagination',
    },
  },
};
