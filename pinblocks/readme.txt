=== Pinblocks — Gutenberg blocks with Pinterest widgets ===
Contributors: milukove
Donate link: https://money.yandex.ru/to/410011017976988
Tags: gutenberg, widget, pinterest, block, image
Requires at least: 5.0.0
Tested up to: 5.1
Stable tag: 1.0.2
Requires PHP: 5.3
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Pinblocks — is a WordPress plugin created to add Pinterest Widgets to your posts and pages by Gutenberg editor blocks.

== Description ==

Pinblocks — is a WordPress plugin created to add Pinterest Widgets to your posts and pages by Gutenberg editor blocks.

**[Widgets DEMO](http://pinblocks.milukove.ru/widget-blocks-demo/)**

= Features =

* Gutenberg blocks — Easy-to-use blocks is a future of WordPress and entire page building
* Responsive — All widgets are fully responsive and mobile frendly
* Localization — Widgets supports more than 25 languages
* Easy setup — No complex options and plugin settings pages around your dashboard
* Pinterest Public API — No additional data, such as App ID, access tokens, etc, required.

= Block types =

* Follow Widget Block — helps you in calling your visitors to become your Pinterest followers.
* Pin Widget Block — insert any Pin to your posts and pages.
* Board Widget Block — insert Pinterest board to your posts and pages.
* Profile Widget Block — insert Pinterest profile to your posts and pages.

== Installation ==

1. Upload extracted pinblocks/ folder to your wp-content/plugins/ directory
1. Go to "Plugins" page of your WordPress admin dashboard
1. Find Pinblocks plugin and activate it
1. That's it, you can use blocks in Gutenberg editor now

Or

1. Go to "Add Plugin" page of your WordPress admin dashboard
1. Search for "Pinblocks"
1. Click "install" button and then "activate" button
1. That's it, you can use blocks in Gutenberg editor now

== Screenshots ==

1. Follow Widget Block — helps you in calling your visitors to become your Pinterest followers.
2. Pin Widget Block — insert any Pin to your posts and pages.
3. Board Widget Block — insert Pinterest board to your posts and pages.
4. Profile Widget Block — insert Pinterest profile to your posts and pages.

== Changelog ==

= 1.0.2 =

* Security fix

= 1.0.1 =

* Fixed missing translation strings

= 1.0 =

First Release

== Documentation ==

Plugin use Pinterest Widget Builder, enqueuing pinit.js file from //assets.pinterest.com to your WordPress pages and posts. When you add Pinterest Widget block in Gutenberg editor you actually create `<a>` tag with "data-" attributes, that will be used by pinit loader to create a widget on page load.

= Dependencies =

* [Freemius SDK](https://freemius.com/help/documentation/wordpress-sdk/) to stay in touch with users
* [Create Guten Block](https://github.com/ahmadawais/create-guten-block) to building Gutenberg plugin
* [Pinterest Widget Builder](https://developers.pinterest.com/tools/widget-builder/) to init widgets

= Building =

`npm start`

Use to compile and run the block in development mode. Watches for any changes and reports back any errors in your code.

`npm run build`

Use to build production code for your block inside dist folder. Runs once and reports back the gzip file sizes of the produced code.

= Block types =

**Pinterest Follow Widget**

Follow widget block helps you in calling your visitors to become you Pinterest followers.

Two options available:

* Pinterest user URL. URL of the user, that will be followed.
* Button text. Default: Follow on Pinterest.

**Pinterest Pin Widget**

Insert any Pin to your posts and pages.

Three options available:

* Pinterest pin URL. URL of the pin, that will be rendered.
* Pin size. Options: Small, Medium, Large. Default: Small.
* Hide description. Options: On, Off. Default: Off.

**Pinterest Board Widget**

Insert Pinterest board to your posts and pages.

Four options available:

* Pinterest board URL. URL of the board, that will be rendered.
* Image width. Default: 80.
* Board height. Default: 240.
* Board width. Default: 400.

**Pinterest Profile Widget**

Insert Pinterest profile to your posts and pages.

Four options available:

* Pinterest user URL. URL of the user, whos profile will be rendered.
* Image width. Default: 80.
* Board height. Default: 240.
* Board width. Default: 400.

= Localization =

**Plugin Localization**

Pinblocks plugin comes with english and russian translations.

POT file to translate plugin on other languages included in pinblocks `languages/` folder.

Custom translations should be placed in the same folder as POT file. File name should match `pinblocks-{locale}.po` and `pinblocks-{locale}.mo`.

**Widgets Localization**

As long as widgets initialized by Pinterest pinit script, all widgets comes with Pinterest localization. 

Public view of widgets will be localized by pinit script depending on users location and language settings.

**[Full plugin documentation](http://pinblocks.milukove.ru/documentation/index.html)**

[Background photo for banner created by freepik - www.freepik.com](https://www.freepik.com/free-photos-vectors/background)