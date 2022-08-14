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
      <div v-if="getResult.response && getResult.response.solution.length > 0">
        <v-row style="display: flex; justify-content: center; align-items: center" >
              <v-data-table
                  :headers="solutionTableHeaders"
                  :items="getResult.response.solution"
                  :items-per-page="5"
                  class="mr-15"
                  style="max-width: 600px"
              ></v-data-table>
            <div class="mt-5 ml-15">
              <apexChart width="400" type="donut" :options="options" :series="getSeries"></apexChart>
            </div>
        </v-row>
        <v-row class="mt-15 mb-15" style="display: flex; justify-content: center; align-items: center">
          <v-data-table
              :headers="generationsResultsHeaders"
              :items="getResult.response.generations_results"
              :items-per-page="5"
              class="mb-10"
              style="min-width: 1100px"
          ></v-data-table>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";

export default {
  data() {
    return {
      options: {
        stroke: {
          colors: ['#1e1e1e']
        },
        colors: ['#29487b', '#6385b5', '#b1b0b1', '#b09878']
      },
      solutionTableHeaders: [
        {
          text: 'Asset',
          align: 'start',
          sortable: false,
          value: 'assetName',
        },
        {text: 'Percentage [%]', value: 'percentageSolution'},
        {text: 'Capital [$]', value: 'moneySolution'}
      ],
      generationsResultsHeaders: [
        {
          text: 'Generation',
          align: 'start',
          sortable: false,
          value: 'generation',
        },
        {text: 'Fitness value', value: 'fitness'},
        {text: 'Change', value: 'change'}
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