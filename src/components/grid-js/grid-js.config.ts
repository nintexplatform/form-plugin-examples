import { NintexPlugin } from '../../lib/nintex-plugin';

export const config: NintexPlugin = {
  controlName: 'Grid JS',
  fallbackDisableSubmit: false,
  description: 'Example of Data Grid with hard-coded data',
  groupName: 'Visual',
  version: '1.3',
  properties: {
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
