<template>
  <div class="">
    <span class="default__filter">
      {{ value | temperature }}
    </span>
    <span class="default_null__filter">
      {{ valueNull | temperature }}
    </span>
    <span class="from_celsius__filter">
      {{ value | temperature(false) }}
    </span>
    <span class="from_celsius_text__filter">
      {{ value | temperature(false, true) }}
    </span>
    <span class="from_fahrenheit_text__filter">
      {{ value | temperature(true, true) }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Temperature',
  data() {
    return {
      value: 15,
      valueNull: null,
    };
  },
};
</script>
