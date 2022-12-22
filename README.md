# Introduction
Welcome to the Nintex Form Designer Plugins repository. This repository contains a collection of plugins that can be used with Nintex Forms, a powerful tool for creating custom forms for your workflow solutions.

These plugins provide additional functionality that can help you create even more powerful and efficient forms. From enhanced data validation to custom UI elements, these plugins are designed to help you take your Nintex Forms to the next level.

We hope you will find these plugins useful and encourage you to contribute your own ideas and code to the repository. Feel free to explore and use the plugins as you see fit, and don't hesitate to reach out if you have any questions or suggestions.

# Getting Started
Before you begin, ensure you have the following installed:
* nodejs
* vscode (or editor of choice)

Clone the repository.

Install the dependencies with `npm install`.

Commands:

* `npm start` starts storybook, a helpful tool for developing and testing your web components.
* `npm analyze` generates the custom-elements.json file, a standard file which describes the web component and is used by storybook to generate the controls. This file can also be used for intellisence in other editors when developing your web components.
* `npm build` builds the web components ready to be hosted and consumed by Nintex Forms.
* `npm release` bundles storybook, if you would like to host it to share with others.
