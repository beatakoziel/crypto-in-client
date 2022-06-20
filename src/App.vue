<template>
  <v-app>

    <v-main>
      <navigation-drawers></navigation-drawers>
        <router-view></router-view>

    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawers from "@/components/NavigationDrawers";
export default {
  components: {NavigationDrawers}
}
</script>

