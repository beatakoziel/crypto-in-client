<template>
  <div>
    <app-header></app-header>
    <app-carousel></app-carousel>
    <info-banner></info-banner>
    <calculator-form></calculator-form>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppCarousel from "@/components/AppCarousel";
import InfoBanner from "@/components/InfoBanner";
import CalculatorForm from "@/components/CalculatorForm";

export default {
  name: 'App',

  components: {
    CalculatorForm,
    InfoBanner,
    AppCarousel,
    AppHeader
  },

  data() {
    return {}
  },
};
</script>

