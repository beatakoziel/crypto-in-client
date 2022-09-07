<template>
  <v-card vertical
          class="px-15 mx-15 mb-15" max-width="95vw">
    <v-form v-model="isFormValid">
      <v-container>
        <div class="mb-5">
          <div class="pt-5 text-h6 text--primary">
            <img src="../assets/steps/one.png" style="color: aliceblue" class="logo" alt=""/>
            Basic data
          </div>
          Period or start and end date for analysis
        </div>
        <v-row>
          <v-col
              cols="12"
              md="2"
          >
            <v-select
                label="Period selection*"
                v-model="formData.periodType"
                :items="period"
                item-text="label"
                item-value="value"
                :rules="singleSelectRules"
                outlined
            ></v-select>
          </v-col>
          <v-col
              cols="5"
              md="2"
              v-if="formData.periodType=='period'"
          >
            <v-select
                      v-model="formData.period"
                      :items="periods"
                      label="Period*"
                      :rules="singleSelectRules"
                      outlined
            ></v-select>
          </v-col>
          <v-col
              cols="5"
              md="2"
              v-if="formData.periodType=='dateRange'"
          >
            <v-menu
                ref="menu"
                v-model="menu1"
                :close-on-content-click="false"
                :return-value.sync="formData.startDate"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="formData.startDate"
                    label="Start date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="formData.startDate"
                  no-title
                  scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="primary"
                    @click="menu1 = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                    text
                    color="primary"
                    @click="$refs.menu1.save(formData.startDate)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
            <v-col
                cols="5"
                md="2"
                v-if="formData.periodType=='dateRange'"
            >
            <v-menu
                ref="menu"
                v-model="menu2"
                :close-on-content-click="false"
                :return-value.sync="formData.endDate"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="formData.endDate"
                    label="End date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="formData.endDate"
                  no-title
                  scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="primary"
                    @click="menu2 = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                    text
                    color="primary"
                    @click="$refs.menu2.save(formData.endDate)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5"
                 md="4">
            <v-select
                v-model="formData.assets"
                :items="assets"
                label="Assets*"
                :rules="selectRules"
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
              md="2"
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model.number="formData.lambdaValue"
                    label="Lambda*"
                    outlined
                    type="number"
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <span>𝜆 is the interchangeability coefficient - takes values
from 0 to 1 - for the minimum value of this parameter the investor disregards
risk and maximize profits</span>
            </v-tooltip>
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
              md="2"
          >
            <v-text-field
                v-model.number="formData.generationsNumber"
                :rules="positiveRules"
                label="Generations number*"
                outlined
                type="number"
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              md="2"
          >
            <v-text-field
                v-model.number="formData.solutionsPerPopulation"
                :rules="positiveRules"
                label="Solutions per population*"
                outlined
                type="number"
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              md="2"
          >
            <v-text-field
                v-model.number="formData.parentsMatingNumber"
                :rules="positiveRules"
                label="Parents mating number*"
                outlined
                type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="12"
              md="3"
          >
            <v-select
                label="Crossover type*"
                v-model="formData.crossoverType"
                :items="crossoverTypes"
                item-text="label"
                item-value="value"
                outlined
            ></v-select>
          </v-col>
          <v-col
              cols="12"
              md="2"
              v-if="formData.crossoverType != null"
          >
            <v-text-field
                v-model.number="formData.crossoverProbability"
                :rules="probabilityRules"
                label="Crossover probability"
                outlined
                type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="12"
              md="3"
          >
            <v-select
                label="Mutation type*"
                v-model="formData.mutationType"
                :items="mutationTypes"
                item-text="label"
                item-value="value"
                outlined
            ></v-select>
          </v-col>
          <v-col
              cols="12"
              md="2"
              v-if="formData.mutationType != null"
          >
            <v-text-field
                v-model.number="formData.mutationProbability"
                :rules="probabilityRules"
                label="Mutation probability"
                outlined
                type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="12"
              md="3"
          >
            <v-select
                label="Parent selection type*"
                v-model="formData.parentSelectionType"
                :items="parentSelectionTypes"
                item-text="label"
                item-value="value"
                outlined
            ></v-select>
          </v-col>
          <v-col
              cols="12"
              md="2"
          >
            <v-text-field v-if="formData.parentSelectionType =='tournament'"
                          v-model.number="formData.kTournament"
                          :rules="keepParentsRules"
                          label="Specified number*"
                          required
                          outlined
                          type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="12"
              md="3"
          >
            <v-select
                label="Keep parents*"
                v-model="formData.keepParents"
                :items="keepParentsTypes"
                item-text="label"
                item-value="value"
                outlined
            ></v-select>
          </v-col>
          <v-col
              cols="12"
              md="2"
          >
            <v-text-field v-if="formData.keepParents >=1"
                          v-model.number="formData.keepParents"
                          :rules="keepParentsRules"
                          label="Specified number*"
                          required
                          outlined
                          type="number"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-col>
        <v-btn :loading="isLoading" :disabled="isLoading || !isFormValid" outlined class="mb-5" color="primary" text
               @click="calculate()">CALCULATE
        </v-btn>
      </v-col>
      <v-row>
        <v-col style="max-width: 500px">
          <v-alert border="bottom" color="darkred" type="info" v-if="!isFormValid">Make sure that you filled all the
            required fields
          </v-alert>
          <v-alert border="bottom" color="none" type="error" v-if="getResult.isError">Caught exception:
            {{ getResult.response }}
          </v-alert>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import {mapState, mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      activePicker: null,
      result: [],
      isFormValid: false,
      period: [
        {label: "period value", value: "period"},
        {label: "start-end date", value: "dateRange"},
      ],
      parentSelectionTypes: [
        {label: "steady-state selection", value: "sss"},
        {label: "roulette wheel selection", value: "rws"},
        {label: "stochastic universal selection", value: "sus"},
        {label: "rank selection", value: "rank"},
        {label: "random selection", value: "random"},
        {label: "tournament selection", value: "tournament"}
      ],
      keepParentsTypes: [
        {label: "keep all parents in the next population", value: -1},
        {label: "keep no parents in the next population", value: 0},
        {label: "specified number of parents in the next population", value: 1}
      ],
      crossoverTypes: [
        {label: "single-point crossover", value: "single_point"},
        {label: "two points crossover", value: "two_points"},
        {label: "uniform crossover", value: "uniform"},
        {label: "scattered crossover", value: "scattered"},
        {label: "none", value: null}
      ],
      mutationTypes: [
        {label: "random mutation", value: "random"},
        {label: "swap mutation", value: "swap"},
        {label: "inversion mutation", value: "inversion"},
        {label: "scramble mutation", value: "scramble"},
        {label: "adaptive mutation", value: "adaptive"},
        {label: "none", value: null}],
      formData: {
        periodType: null,
        period: "1mo",
        startDate:"2021-01-01",
        endDate:"2022-01-01",
        assets: [],
        lambdaValue: 0.5,
        generationsNumber: 10,
        solutionsPerPopulation: 10,
        parentsMatingNumber: 1,
        parentSelectionType: "sss",
        kTournament: 3,
        keepParents: -1,
        crossoverType: "single_point",
        crossoverProbability: null,
        mutationType: "random",
        mutationProbability: null
      },
      value: [],
      menu1: false,
      menu2: false,
      positiveRules: [
        v => (v && v >= 0) || "Value should be 0 minimum "
      ],
      keepParentsRules: [
        v => (v && v > 0) || "Value should be above 0",
        v => (v && v <= this.formData.solutionsPerPopulation) || "Value should be below 1"
      ],
      lambdaRules: [
        v => (v && v >= -1) || "Value should be 0 minimum",
        v => (v && v <= 1) || "Value should be 1 maximum"
      ],
      probabilityRules: [
        v => (!v || v > 0) || "Value should be above 0",
        v => (!v || v <= 1) || "Value should be 1 maximum"
      ],
      selectRules: [
        v => !!v || "Selection is required",
        v => v.length > 1 || "At least 2 items selected are required"
      ],
      singleSelectRules: [
        v => !!v || "Selection is required",
      ]
    }
  },
  methods: {
    ...mapActions(["getAssets", "getPeriods", "divideMoneyBetweenAssets"]),
    calculate() {
      this.divideMoneyBetweenAssets(this.formData)
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'getResult']),
    ...mapState({
      assets: (state) => state.infoStore.assets,
      periods: (state) => state.infoStore.periods
    }),
  },
  mounted() {
    this.getAssets();
    this.getPeriods();
  }
}
</script>