# Introduction
Welcome to the Nintex Form Designer Plugins repository! This repository contains a collection of plugins that can be used with Nintex Forms, a powerful tool for creating custom forms for your workflow solutions.

These plugins provide a range of additional functionality that can help you create even more powerful and efficient forms. From enhanced data validation to custom UI elements, these plugins are designed to help you take your Nintex Forms to the next level.

We hope you will find these plugins useful and encourage you to contribute your own ideas and code to the repository. So, feel free to explore and use the plugins as you see fit, and don't hesitate to reach out if you have any questions or suggestions.

# Getting Started
Before you begin please ensure you have the follow installed:
1. nodejs
2. vscode (of editor of choice)

Cloan the repository

Install the dependencies `npm install`

Commands:

`npm start` this will start storybook, this is very helpful to develop and test your web components

`npm analyze` this generates the custom-elements.json file, this is a standard file which describes the web component and is used by storybook to generate the controls, this can also be used for intellisence for other editors when using your web components

`npm build` this builds the web components ready to be hosted and consumed by nwc plugins

`npm release` this command bundles storybook if you would like to host it to share with others
