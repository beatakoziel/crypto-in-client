<template>
      <v-navigation-drawer
          app
          width="210px"
          class="pt-13"
          expand-on-hover
      >
        <v-list
            nav
            dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-calculator-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title><router-link to="/">Calculator</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-finance</v-icon>
            </v-list-item-icon>
            <v-list-item-title><router-link to="/charts">Charts</router-link></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>
<script>

</script>