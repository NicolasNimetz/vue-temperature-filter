
const VueTemperatureFilter = {
  install(Vue, options) {
    const filterOptions = Object.assign({}, {
      fromFahrenheit: true,
      showText: false,
    }, options);

    Vue.filter('temperature', (
      value,
      fromFahrenheit,
      showText,
    ) => {
      let temperature;
      let text;

      if (typeof fromFahrenheit !== 'undefined') {
        filterOptions.fromFahrenheit = fromFahrenheit;
      }
      if (typeof showText !== 'undefined') {
        filterOptions.showText = showText;
      }

      if (!value) return '';

      if (filterOptions.fromFahrenheit === true) {
        temperature = Math.round((value - 32) * (5 / 9));
        text = 'C';
      } else {
        temperature = Math.round((value * 1.8) + 32);
        text = 'F';
      }

      if (filterOptions.showText) {
        return `${temperature}˚ ${text}`;
      }
      return `${temperature}˚`;
    });
  },
};

export default VueTemperatureFilter;
