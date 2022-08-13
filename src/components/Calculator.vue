<template>
  <div>
    <app-header></app-header>
    <app-carousel></app-carousel>
    <info-banner></info-banner>
    <calculator-form></calculator-form>
    <result-card></result-card>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppCarousel from "@/components/AppCarousel";
import InfoBanner from "@/components/InfoBanner";
import CalculatorForm from "@/components/CalculatorForm";
import ResultCard from "@/components/ResultCard";

export default {
  name: 'App',

  components: {
    ResultCard,
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

