<template>
  <div id="app">
    <div class="hero is-primary">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="../">
              <img src="./assets/images/reguity-logo-white.png" alt="Logo">
            </a>
            <span class="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-end">
                  <router-link class="navbar-item" to="/docs">Docs</router-link>
                  <router-link class="navbar-item" to="/tools">Tools</router-link>
                  <router-link class="navbar-item" to="/api">API</router-link>
                  <router-link class="navbar-item" to="/apps">My apps</router-link>
                  <div class="navbar-item" style="margin-left:50px;">
                    <img alt="RAMPKORV" style="margin-right: 15px;"src="https://www.gravatar.com/avatar/93061b45e1e0769d8df8639a16c1697d?s=40">
                    Logout
                  </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div id="view">
      <router-view/>
    </div>
    <reguity-footer />
  </div>
</template>

<script>
import ReguityFooter from '@/components/ReguityFooter.vue'

export default {
  name: 'app',
  components: {
    ReguityFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: -0.5px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
}
#view {
  height: calc(100vh - 88px);
}
</style>
