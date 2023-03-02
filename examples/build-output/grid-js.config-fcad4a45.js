const config = {
  controlName: 'Grid JS',
  description: 'Example of Data Grid with hard-coded data',
  groupName: 'Visual',
  fallbackDisableSubmit: false,
  version: '1.0',
  properties: {
    sortable: {
      type: 'boolean',
      title: 'Allow Sorting'
    },
    pagination: {
      type: 'boolean',
      title: 'Allow Pagination'
    }
  }
};

export { config };
