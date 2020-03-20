<template>
  <v-app>
    <v-container>
      <v-app-bar
        style="box-shadow: none !important; background-color: white;"
        class="mt-10"
      >
        <img
          src="/group-12.png"
          alt="Logo"
          class="ml-10"
        >
        <v-spacer></v-spacer>
        <img
          src="/user.png"
          class="mr-2"
        >
        <div class="hidden-xs-only">
          <nuxt-link to="/signin" class="link-top" >Entrar</nuxt-link>
          |
          <nuxt-link to="/signup" class="link-top">Criar Conta</nuxt-link>
        </div>
      </v-app-bar>
    </v-container>
    <v-content>
        <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Logo'
    }
  }
}
</script>
<style scoped>
  .link-top {
    margin: 10px;
    text-decoration: none;
    color: black;
    font-weight: 500;
  }
</style>