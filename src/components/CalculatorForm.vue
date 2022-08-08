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
                v-model="formData.amount"
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
                v-model="formData.lambda"
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
                v-model="formData.generationsNumber"
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
                v-model="formData.solutionsPerPopulation"
                :rules="positiveRules"
                label="Solutions per population"
                outlined
                type="number"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  data: () => ({
    result: "",
    formData: {
      amount: null,
      assets: [],
      generationsNumber: 10,
      solutionsPerPopulation: 10,
      lambda: 0.5,
      result: null
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
    ...mapActions(["getAssets"]),
    /*    divideMoneyBetweenAssets() {
          this.divideMoneyBetweenAssets(this.formData).then((response) => {
            console.log(response.status)
            if (response.status == "201") {
              this.dialog = false;
              this.showSuccessMsg();
            } else if (response.status === "403") {
              this.showErrorMsg();
              this.logout();
              this.resetState();
              this.$router.push({name: "Auth"});
            } else {
              this.errorMessage = "Upewnij się, że wprowadzone dane są prawidłowe.";
            }
          });
        },*/
  },
  computed: {
    ...mapState({
      assets: (state) => state.infoStore.assets,
    }),
  },
  mounted() {
    this.getAssets();
  }
}
</script>