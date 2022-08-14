<template>
  <div>
    <v-card vertical
            class="px-15 mx-15 mb-15" max-width="95vw">
      <v-row>
        <v-col>
          <div style="min-height: 4px;">
            <v-progress-linear class="mb-5"
                               :indeterminate="isLoading"
                               :query="true"
            ></v-progress-linear>
          </div>
        </v-col>
      </v-row>
      <v-row v-if="getResult.response && getResult.response.length > 0">
        <v-col>
          <v-data-table
              :headers="headers"
              :items="getResult.response"
              :items-per-page="5"
              class="elevation-1"
          ></v-data-table>
          <div style="display: flex; justify-content: center; align-items: center" class="mt-5">
            <apexChart width="380" type="donut" :options="options" :series="getSeries"></apexChart>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";

export default {
  data() {
    return {
      series: this.getSeries,
      options: {
        stroke: {
          colors: ['#1e1e1e']
        },
        colors: ['#29487b', '#6385b5', '#b1b0b1', '#b09878']
      },
      headers: [
        {
          text: 'Asset',
          align: 'start',
          sortable: false,
          value: 'assetName',
        },
        {text: 'Percentage [%]', value: 'percentageSolution'},
        {text: 'Capital [USD]', value: 'moneySolution'}
      ],
    }
  },
  methods: {},
  computed: {
    ...mapGetters(['isLoading', 'getResult', 'getSeries', 'getLabels']),
    ...mapState({
      assets: (state) => state.infoStore.assets,
      donutChartSeries: (state) => state.calculationsStore.series,
      donutChartLabels: (state) => state.calculationsStore.labels
    }),

  },
  mounted() {
  }

}
</script>