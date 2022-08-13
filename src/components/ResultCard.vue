<template>
  <div>
    <v-card v-if="!getResult.isError" vertical
            class="px-15 mx-15 mb-15" max-width="95vw">
      <v-row>
        <v-col>
          <div style="min-height: 4px;">
            <v-progress-linear class="mb-5"
                :indeterminate="isLoading"
                :query="true"
            ></v-progress-linear>
          </div>
          <p v-if="!getResult.isError">
            {{ getResult.response }}
          </p>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from "vuex";

export default {
  data: () => ({
    result: [],
    isFormValid: false,
    formData: {
      amount: null,
      assets: [],
      generationsNumber: 10,
      solutionsPerPopulation: 10,
      lambda: 0.5
    },
    value: [],
    amountRules: [
      v => (v && v >= 20) || "Value should be above 20$"
    ],
    positiveRules: [
      v => (v && v >= 0) || "Value should be above 0"
    ],
    lambdaRules: [
      v => (v && v >= 0) || "Value should be above 0",
      v => (v && v <= 1) || "Value should be below 1"
    ],
    selectRules: [
      v => !!v || "Selection is required",
      v => v.length > 1 || "At least 2 items selected are required"
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