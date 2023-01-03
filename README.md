# Introduction
Welcome to the Nintex Form Designer Plugins repository. This repository contains a collection of plugins that can be used with Nintex Forms, a powerful tool for creating custom forms for your workflow solutions.

These plugins provide additional functionality that can help you create even more powerful and efficient forms. From enhanced data validation to custom UI elements, these plugins are designed to help you take your Nintex Forms to the next level.

We hope you will find these plugins useful and encourage you to contribute your own ideas and code to the repository. Feel free to explore and use the plugins as you see fit, and don't hesitate to reach out if you have any questions or suggestions.

For tutorials and references, see the [Form plugins software development kit](https://help.nintex.com/en-US/formplugins/Home.htm).

## In this repository...

This repository contains an npm package and the source code of some example plugins, as well as pre-built examples you can register directly in your tenant.

|Folder|Description|
|------|-----------|
|.storybook| Optional files useful for developing your plugins with Storybook. |
|examples| Example pre-built plugins you can register directly in your tennat.|
|src| Source code for example plugins that you can build using the provided npm commands.|

# Getting Started
Before you begin, ensure you have the following installed:
* nodejs
* vscode (or editor of choice)

Clone the repository.

Install the dependencies with `npm install`.

Commands:

* `npm start` starts storybook, a helpful tool for developing and testing your web components.
* `npm run analyze` generates the custom-elements.json file, a standard file which describes the web component and is used by storybook to generate the controls. This file can also be used for intellisence in other editors when developing your web components.
* `npm run build` builds the web components ready to be hosted and consumed by Nintex Forms.
* `npm run release` bundles storybook, if you would like to host it to share with others.
