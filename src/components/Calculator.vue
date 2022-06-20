<template>
  <div>
    <app-header></app-header>
    <app-carousel></app-carousel>
    <info-banner></info-banner>
    <algorithm-data-stepper></algorithm-data-stepper>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppCarousel from "@/components/AppCarousel";
import InfoBanner from "@/components/InfoBanner";
import AlgorithmDataStepper from "@/components/AlgorithmDataStepper";

export default {
  name: 'App',

  components: {
    AlgorithmDataStepper,
    InfoBanner,
    AppCarousel,
    AppHeader
  },

  data() {
    return {}
  },
};
</script>

