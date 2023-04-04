# Examples

These are example plugins you can register directly in your tenant. To register a plugin:

1. Navigate to the plugin page and click **Raw**.
2. Copy the URL.
3. Take note of the **export** class in the source code. This is the element name.
4. In your tenant, use the URL and the element name to register the plugin.

For more information on registering plugins,
see [Registering plugins](https://help.nintex.com/en-US/formplugins/Manage/Register.htm).

## Simple

This folder contains an example of an IFrame plugin created without a build system such as npm. Simple plugins like this
can be easily created using the Lit playground: https://lit.dev/playground/

For a tutorial on creating this plugin,
see [Create a basic plugin using Lit](https://help.nintex.com/en-US/formplugins/Examples/CreatePlugin_LitBasicHTML.htm).

### Usage

To register this plugin in your tenant:

1. Open your Nintex Automation Cloud instance.
2. Click `Form plugins` on the left navigation.
3. Click `Add plugin`.
4. Use the following details:
   - Element name: sample-iframe
   - Description: IFrame Simple
   - Source URL: https://nintexplatform.github.io/form-plugin-examples/examples/simple/iframe.js
5. Click `Create`.

## Build Output

This folder contains plugins that were built using the npm build commands in this repository.

Please note these plugins were copied into this folder as a convenience; the provided npm command builds to a **dist**
directory.

For a tutorial creating these plugins,
see [Create an iframe plugin](https://help.nintex.com/en-US/formplugins/Examples/CreatePlugin_iframe.htm).

### Usage

To register the Styled input plugin in your tenant:

1. Open your Nintex Automation Cloud instance.
2. Click `Form plugins` on the left navigation.
3. Click `Add plugin`.
4. Use the `element name`, `description`, and `source URL` as specified in the table.
5. Click `Create`.

| Element Name                | Description         | Source URL                                                                                        |
| --------------------------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| sample-iframe               | IFrame Simple       | https://nintexplatform.github.io/form-plugin-examples/examples/simple/iframe.js                   |
| form-plugin-iframe        | IFrame Built Output | https://nintexplatform.github.io/form-plugin-examples/examples/build-output/iframe.js             |
| form-plugin-textfield     | Material Text field | https://nintexplatform.github.io/form-plugin-examples/examples/build-output/material-textfield.js |
| form-plugin-grid-js       | Grid JS Example     | https://nintexplatform.github.io/form-plugin-examples/examples/build-output/grid-js.js            |
| nintex-styled-input         | Styled input        | https://nintexplatform.github.io/form-plugin-examples/examples/build-output/styled-input.js       |
| form-plugin-chart-js      | Chart Pie           | https://nintexplatform.github.io/form-plugin-examples/examples/build-output/chart-pie.js          |
| form-plugin-animated-logo | Animated Logo       | https://nintexplatform.github.io/form-plugin-examples/examples/build-output/animated-logo.js      |
| form-plugin-slider        | Material Slider     | https://nintexplatform.github.io/form-plugin-examples/examples/build-output/material-slider.js    |
