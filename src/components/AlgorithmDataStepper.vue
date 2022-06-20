<template>
  <v-stepper
      v-model="e6"
      vertical
      class="px-15 mx-15"
  >
    <v-stepper-step
        :complete="e6 > 1"
        step="1"
    >
      Mandatory data
      <small class="mt-1">Enter the USDT amount you want to distribute between the cryptocurrencies.</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-form ref="form">
        <v-text-field
            type="number"
            label="Amount in USDT"
            class="quarter-view-width"
        ></v-text-field>
      </v-form>
      <v-btn
          color="primary"
          @click="e6 = 2"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
        :complete="e6 > 2"
        step="2"
    >
      Fitness function data
      <small class="mt-1">Enter data that will be used in the fitness function that can improve the result.</small>
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-form ref="form">
        <v-text-field
            type="number"
            label="Minimum percentage increase"
            class="quarter-view-width"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-text-field
            label="Earliest date to be checked"
            prepend-icon="mdi-calendar"
            readonly
            class="quarter-view-width"
        ></v-text-field>
      </v-form>
      <v-btn
          color="primary"
          @click="e6 = 3"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
        :complete="e6 > 3"
        step="3"
    >
      Cryptocurrencies
      <small class="mt-1">Choose which cryptocurrencies should be taken into account.</small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-col
          cols="12"
          sm="6"
      >
        <v-select
            v-model="value"
            :items="items"
            chips
            label="Cryptocurrencies"
            multiple
            outlined
        ></v-select>
      </v-col>
      <v-btn
          color="primary"
          @click="e6 = 4"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      Genetic algorithm data
      <small class="mt-1">Enter data that will be used in the genetic algorithm.</small>
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-form ref="form">
        <v-row>
          <v-col
              cols="12"
              md="6"
          >
            <v-text-field
                type="number"
                label="Population size"
                class="quarter-view-width"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-text-field
                type="number"
                label="Generations"
                class="quarter-view-width"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-text-field
                type="number"
                label="Crossover probability"
                class="quarter-view-width"
            ></v-text-field>
            <v-spacer></v-spacer>
          </v-col>
          <v-col
              cols="12"
              md="6"
          >
            <v-text-field
                type="number"
                label="Mutation probability"
                class="quarter-view-width"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-text-field
                type="number"
                label="Elitism"
                class="quarter-view-width"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-checkbox
                label="Maximise fitness"
            ></v-checkbox>
            <v-spacer></v-spacer>
          </v-col>
        </v-row>
      </v-form>
      <v-btn
          color="primary"
          @click="getCalculationsResult()"
      >
        Calculate
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>
    <v-textarea
        label="Komentarz"
        :counter="500"
        v-model="result"
        prepend-icon="mdi-comment-outline">
    </v-textarea>
  </v-stepper>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data: () => ({
    result: "",
    items: ['Bitcoin (BTC)', 'Etherium (ETH)', 'Shiba Inu (SHIB)'],
    value: ['BTC', 'ETH', 'SHIB'],
    e6: 1
  }),
  methods: {
    ...mapActions(["getCalculationsResult"]),
    calculate() {
      this.getCalculationsResult().then((response) => {
        this.result = response;
        console.log("UDAO")
      });
    },
  },
}
</script>

<style>

.quarter-view-width {
  width: 25vw;
}
</style>