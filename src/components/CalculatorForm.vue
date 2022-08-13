<template>
  <v-card vertical
          class="px-15 mx-15 mb-15" max-width="90vw">
    <v-form v-model="valid">
      <v-container>
        <div class="mb-5">
          <div class="pt-5 text-h6 text--primary">
            <img src="../assets/steps/one.png" style="color: aliceblue" class="logo" alt=""/>
            Basic data
          </div>
          USDT amount you want to distribute between the given cryptocurrencies
        </div>
        <v-row>
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model.number="formData.amount"
                :rules="amountRules"
                label="Amount in USDT"
                required
                outlined
                type="number"
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              md="4"
          >
            <v-select
                v-model="formData.assets"
                :items="assets"
                label="Cryptocurrencies"
                multiple
                chips
                outlined
            ></v-select>
          </v-col>
        </v-row>
        <div class="mb-5">
          <div class="pt-5 text-h6 text--primary">
            <img src="../assets/steps/two.png" style="color: aliceblue" class="logo" alt=""/>
            Fitness function data
          </div>
          Enter data that will be used in the fitness function that can improve the result
        </div>
        <v-row>
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model.number="formData.lambda"
                :rules="lambdaRules"
                label="Lambda"
                outlined
                type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <div class="mb-5">
          <div class="pt-5 text-h6 text--primary">
            <img src="../assets/steps/three.png" style="color: aliceblue" class="logo" alt=""/>
            Genetic algorithm data
          </div>
          Data that will be used to adjust genetic algorithm
        </div>
        <v-row>
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model.number="formData.generationsNumber"
                :rules="positiveRules"
                label="Generations number"
                outlined
                type="number"
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model.number="formData.solutionsPerPopulation"
                :rules="positiveRules"
                label="Solutions per population"
                outlined
                type="number"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-col class=" text-right">
        <v-btn :loading="isLoading" :disabled="isLoading" outlined class="mb-5" color="primary" text
               @click="calculate()">CALCULATE
        </v-btn>
      </v-col>
      <v-row>
        <v-col>
          <v-alert color="darkred" type="error" v-if="getResult.isError">Caught exception:
            {{ getResult.response }}
          </v-alert>
          <p style="color: dodgerblue" v-else>{{ getResult.response }}</p>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import {mapState, mapActions, mapGetters} from "vuex";

export default {
  data: () => ({
    result: [],
    formData: {
      amount: null,
      assets: [],
      generationsNumber: 10,
      solutionsPerPopulation: 10,
      lambda: 0.5
    },
    value: ['BTC', 'ETH', 'SHIB'],
    amountRules: [
      v => (v && v >= 20) || "Value should be above 20$"
    ],
    positiveRules: [
      v => (v && v >= 0) || "Value should be above 0"
    ],
    lambdaRules: [
      v => (v && v >= 0) || "Value should be above 0",
      v => (v && v <= 1) || "Value should be below 1"
    ]
  }),
  methods: {
    ...mapActions(["getAssets", "divideMoneyBetweenAssets"]),
    calculate() {
      this.divideMoneyBetweenAssets(this.formData)
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'getResult']),
    ...mapState({
      assets: (state) => state.infoStore.assets
    }),
  },
  mounted() {
    this.getAssets();
  }
}
</script>