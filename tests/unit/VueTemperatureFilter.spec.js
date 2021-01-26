import { createLocalVue, shallowMount } from '@vue/test-utils';

import Temperature from '@/components/Temperature.vue';
import VueTemperatureFilter from '@/VueTemperatureFilter';

describe('VueTemperatureFilter.js', () => {
  describe('Instance with options', () => {
    it('Should return default temperature on Celsius', () => {
      const localVue = createLocalVue();
      localVue.use(VueTemperatureFilter, { fromFahrenheit: true });
      const wrapper = shallowMount(Temperature, { localVue });
      const result = wrapper.find('.default__filter');

      expect(result.text()).toEqual('-9˚');
    });

    it('Should return temperature on Fahrenheit even if options are set', () => {
      const localVue = createLocalVue();
      localVue.use(VueTemperatureFilter, { fromFahrenheit: true });
      const wrapper = shallowMount(Temperature, { localVue });
      const result = wrapper.find('.from_celsius_text__filter');

      expect(result.text()).toEqual('59˚ F');
    });

    it('Should return temperature on Celsius with text', () => {
      const localVue = createLocalVue();
      localVue.use(VueTemperatureFilter, { fromFahrenheit: true, showText: true });
      const wrapper = shallowMount(Temperature, { localVue });
      const result = wrapper.find('.default__filter');

      expect(result.text()).toEqual('-9˚ C');
    });

    it('Should return temperature on Celsius when options is null', () => {
      const localVue = createLocalVue();
      localVue.use(VueTemperatureFilter, null);
      const wrapper = shallowMount(Temperature, { localVue });
      const result = wrapper.find('.default__filter');

      expect(result.text()).toEqual('-9˚');
    });

    it('Should return temperature on Celsius when options is empty', () => {
      const localVue = createLocalVue();
      localVue.use(VueTemperatureFilter, {});
      const wrapper = shallowMount(Temperature, { localVue });
      const result = wrapper.find('.default__filter');

      expect(result.text()).toEqual('-9˚');
    });

    it('Should return temperature on Fahrenheit', () => {
      const localVue = createLocalVue();
      localVue.use(VueTemperatureFilter, { fromFahrenheit: false });
      const wrapper = shallowMount(Temperature, { localVue });
      const result = wrapper.find('.default__filter');

      expect(result.text()).toEqual('59˚');
    });

    it('Should return temperature on Fahrenheit with text', () => {
      const localVue = createLocalVue();
      localVue.use(VueTemperatureFilter, {
        fromFahrenheit: false,
        showText: true,
      });
      const wrapper = shallowMount(Temperature, { localVue });
      const result = wrapper.find('.default__filter');

      expect(result.text()).toEqual('59˚ F');
    });
  });

  describe('Instance without options', () => {
    const localVue = createLocalVue();
    localVue.use(VueTemperatureFilter);
    const wrapper = shallowMount(Temperature, {
      localVue,
    });

    it('Should return default temperature', () => {
      const result = wrapper.find('.default__filter');
      expect(result.text()).toEqual('-9˚');
    });

    it('Should return \'\'', () => {
      const result = wrapper.find('.default_null__filter');
      expect(result.text()).toEqual('');
    });

    it('Should return Fahrenheit temperature', () => {
      const result = wrapper.find('.from_celsius__filter');
      expect(result.text()).toEqual('59˚');
    });

    it('Should return Fahrenheit temperature with F', () => {
      const result = wrapper.find('.from_celsius_text__filter');
      expect(result.text()).toEqual('59˚ F');
    });

    it('Should return Celsius temperature with C', () => {
      const result = wrapper.find('.from_fahrenheit_text__filter');
      expect(result.text()).toEqual('-9˚ C');
    });
  });
});
