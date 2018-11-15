module.exports = {
  improve: 'apostrophe-global',
  construct: function(self, options) {
    options.addFields = (options.addFields || []).concat([
      {
        type: 'array',
        name: 'textColors',
        label: 'Text Colors',
        help: '',
        permission: 'admin',
        titleField: 'textColors',
        schema: [
          {
            type: 'color',
            name: 'colorpicker',
            label: 'Color Picker'
          },
          {
            type: 'string',
            name: 'colorname',
            label: 'Color Name'
          }
        ]
      },
      {
        type: 'array',
        name: 'bgColors',
        label: 'Background Colors',
        help: '',
        permission: 'admin',
        titleField: 'backgroundColors',
        schema: [
          {
            type: 'color',
            name: 'colorpicker',
            label: 'Color Picker'
          },
          {
            type: 'string',
            name: 'colorname',
            label: 'Color Name'
          }
        ]
      }
    ]);
    options.arrangeFields = (options.arrangeFields || []).concat([
      {
        name: 'colors',
        label: 'Default Colors',
        fields: [ 'textColors','bgColors' ]
      }
    ]);
  }
};
