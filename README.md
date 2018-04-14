# eslint-plugin-nnimetz [![NPM version][npm-image]][npm-url] [![BuildStatus][travis-image]][travis-url] [![javascript style guide][airbnb-image]][airbnb-url] [![jest][jest-image]][jest-url]

[npm-image]: https://img.shields.io/npm/v/vue-temperature-filter.svg?style=flat
[npm-url]: https://www.npmjs.com/package/vue-temperature-filter
[travis-image]: https://travis-ci.org/NicolasNimetz/vue-temperature-filter.svg?branch=master
[travis-url]: https://travis-ci.org/NicolasNimetz/vue-temperature-filter
[airbnb-image]: https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square
[airbnb-url]: https://github.com/airbnb/javascript
[jest-image]: https://facebook.github.io/jest/img/jest-badge.svg
[jest-url]: https://github.com/facebook/jest

Plugin temperature for Vue.js 2.*

## Installation

Install `vue-temperature-filter`:

```
$ yarn add vue-temperature-filter --dev
```

Or

```
$ npm install vue-temperature-filter --save-dev
```

## Usage

Import plugin in `main.js`
```js
import Vue from 'vue';
import VueTemperatureFilter from 'vue-temperature-filter';

// Use Plugins
Vue.use(VueTemperatureFilter);

// Add Global Configuration
Vue.use(VueTemperatureFilter, {
  fromFahrenheit: true,
  showText: true
});
```

Use in view
```js
// Convert 15˚ Fahrenheit to Celsius
{{ 15 | temperature }}

// Convert 15˚ Celsius to Fahrenheit
{{ 15 | temperature(false) }}

// Convert 15˚ Fahrenheit to Celsius and add display C
{{ 15 | temperature(true, true) }}
```
