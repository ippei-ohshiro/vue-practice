<template>
  <v-app>
    <v-content>
      <v-containar fluid pt-0>
        <router-view />
      </v-containar>
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import FooterComponent from "@/components/Footer.vue";

export default defineComponent({
  components: {
    Footer: FooterComponent
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    // color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
