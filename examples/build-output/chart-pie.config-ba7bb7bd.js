const config = {
  fallbackDisableSubmit: false,
  version: '1.0.0',
  controlName: 'Pie Chart',
  description: 'Pie Chart',
  iconUrl: 'plugin',
  standardProperties: {
    description: false,
    fieldLabel: true
  },
  properties: {
    bindings: {
      type: 'string',
      enum: ['chart1', 'chart2', 'chart3'],
      title: 'Data Binding'
    },
    maxHeight: {
      type: 'number',
      title: 'Max Height'
    },
    titleField: {
      type: 'string',
      title: 'Title'
    }
  }
};

export { config };
