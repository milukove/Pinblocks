![Pinblocks](http://pinblocks.milukove.ru/wp-content/uploads/2019/02/pinblocks-horizont-small.png)

[![](https://img.shields.io/wordpress/plugin/v/pinblocks.svg?label=Plugin%20version&style=flat)](https://wordpress.org/plugins/pinblocks/)
[![](https://img.shields.io/wordpress/plugin/dt/pinblocks.svg?label=Downloads&style=flat)](https://wordpress.org/plugins/pinblocks/)
[![](https://img.shields.io/wordpress/plugin/installs/pinblocks.svg?label=Active%20Installs&style=flat)](https://wordpress.org/plugins/pinblocks/)
[![](https://img.shields.io/wordpress/plugin/tested/pinblocks.svg?label=WordPress&style=flat)](https://wordpress.org/plugins/pinblocks/)
[![](https://img.shields.io/badge/License-GPL2%20or%20later-blue.svg)](https://www.gnu.org/licenses/gpl-2.0.html)


# Pinblocks — Gutenberg blocks with Pinterest widgets

**Version 1.0.0**

## Description

Pinblocks — is a WordPress plugin created to add Pinterest Widgets to your posts and pages by Gutenberg editor blocks.

### [Widgets DEMO](http://pinblocks.milukove.ru/widget-blocks-demo/)

[Plugin Wordpress.org page](https://wordpress.org/plugins/pinblocks/)  
[Plugin Home page](http://pinblocks.milukove.ru/)

### Features

* Gutenberg blocks — Easy-to-use blocks is a future of WordPress and entire page building
* Responsive — All widgets are fully responsive and mobile frendly
* Localization — Widgets supports more than 25 languages
* Easy setup — No complex options and plugin settings pages around your dashboard
* Pinterest Public API — No additional data, such as App ID, access tokens, etc, required.

### Available blocks

* Follow Widget Block — helps you in calling your visitors to become your Pinterest followers.
* Pin Widget Block — insert any Pin to your posts and pages.
* Board Widget Block — insert Pinterest board to your posts and pages.
* Profile Widget Block — insert Pinterest profile to your posts and pages.

## Navigate this page

* [Description](#description)
    * [Features](#features)
    * [Available blocks](#available-blocks)
* [Installation](#installation)
    * [Requirements](#requirements)
    * [How to install](#how-to-install)
* [Documentation](#documentation)
    * [Dependencies](#dependencies)
    * [Building](#building)
    * [Block types](#block-types)
        * [Pinterest Follow Widget](#pinterest-follow-widget)
        * [Pinterest Pin Widget](#pinterest-pin-widget)
        * [Pinterest Board Widget](#pinterest-board-widget)
        * [Pinterest Profile Widget](#pinterest-profile-widget)
    * [Localization](#localization)
        * [Plugin Localization](#plugin-localization)
        * [Widgets Localization](#widgets-localization)
* [Support](#support)
* [License](#license)
* [Author](#author)

## Installation

### Requirements

* PHP 5.3 or greater
* Wordpress 5.0 or greater

### How to install

1. Upload pinblocks/ folder to your wp-content/plugins/ directory
1. Go to "Plugins" page of your WordPress admin dashboard
1. Find Pinblocks plugin and activate it
1. That's it, you can use blocks in Gutenberg editor now

Or

1. Go to "Add Plugin" page of your WordPress admin dashboard
1. Search for "Pinblocks"
1. Click "install" button and then "activate" button
1. That's it, you can use blocks in Gutenberg editor now

> No additional configuration required after installation and activation proccess.

## Documentation

Plugin use Pinterest Widget Builder, enqueuing pinit.js file from //assets.pinterest.com to your WordPress pages and posts. When you add Pinterest Widget block in Gutenberg editor you actually create `<a>` tag with "data-" attributes, that will be used by pinit loader to create a widget on page load.

### Dependencies

* [Freemius SDK](https://freemius.com/help/documentation/wordpress-sdk/) to stay in touch with users
* [Create Guten Block](https://github.com/ahmadawais/create-guten-block) to building Gutenberg plugin
* [Pinterest Widget Builder](https://developers.pinterest.com/tools/widget-builder/) to init widgets

### Building

#### `npm start`

Use to compile and run the block in development mode. Watches for any changes and reports back any errors in your code.

#### `npm run build`

Use to build production code for your block inside dist folder. Runs once and reports back the gzip file sizes of the produced code.

### Block types

#### Pinterest Follow Widget

Follow widget block helps you in calling your visitors to become you Pinterest followers.

Two options available:

* Pinterest user URL. URL of the user, that will be followed.
* Button text. Default: Follow on Pinterest.

![](http://pinblocks.milukove.ru/wp-content/uploads/2019/01/screenshot-follow-admin-2.png)

#### Pinterest Pin Widget

Insert any Pin to your posts and pages.

Three options available:

* Pinterest pin URL. URL of the pin, that will be rendered.
* Pin size. Options: Small, Medium, Large. Default: Small.
* Hide description. Options: On, Off. Default: Off.

![](http://pinblocks.milukove.ru/wp-content/uploads/2019/01/screenshot-pin-admin.png)

#### Pinterest Board Widget

Insert Pinterest board to your posts and pages.

Four options available:

* Pinterest board URL. URL of the board, that will be rendered.
* Image width. Default: 80.
* Board height. Default: 240.
* Board width. Default: 400.

![](http://pinblocks.milukove.ru/wp-content/uploads/2019/01/screenshot-board-admin.png)

#### Pinterest Profile Widget

Insert Pinterest profile to your posts and pages.

Four options available:

* Pinterest user URL. URL of the user, whos profile will be rendered.
* Image width. Default: 80.
* Board height. Default: 240.
* Board width. Default: 400.

![](http://pinblocks.milukove.ru/wp-content/uploads/2019/01/screenshot-profile-admin.png)

### Localization

#### Plugin Localization

Pinblocks plugin comes with english and russian translations.

POT file to translate plugin on other languages included in pinblocks `languages/` folder.

Custom translations should be placed in the same folder as POT file. File name should match `pinblocks-{locale}.po` and `pinblocks-{locale}.mo`.

#### Widgets Localization

As long as widgets initialized by Pinterest pinit script, all widgets comes with Pinterest localization. 

Public view of widgets will be localized by pinit script depending on users location and language settings.

### [Full plugin documentation](http://pinblocks.milukove.ru/docs/documentation/)

## Support

You can get help with using Pinblocks plugin at [Wordpress.org support forum](https://wordpress.org/support/plugin/pinblocks) or at [GitHub Issues](https://github.com/milukove/Pinblocks/issues).

## License

* License: GPLv2 or later
* License URI: https://www.gnu.org/licenses/gpl-2.0.html

## Author

[Egor Milyukov](http://milukove.ru/) — @milukove  
milukove@gmail.com  
