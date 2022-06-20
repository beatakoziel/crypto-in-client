<template>
  <div>
    <app-header/>
    <vue-trading-view
    class="mt-10"
    ></vue-trading-view>

  </div>
</template>

<script>
import VueTradingView from 'vue-trading-view';
import AppHeader from "@/components/AppHeader";
export default {
  name: 'App',

  components: {
    AppHeader,
    VueTradingView
    },

  data() {
    return {}
  },
};
</script>

