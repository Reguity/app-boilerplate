<template>
  <div id="app">
    <div class="hero is-primary">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="../">
              <img src="./assets/images/reguity-logo-white.png" alt="Logo">
              <span class="sublogo">{{ appName }}</span>
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
                <ApolloQuery style="padding-top: 10px;" :query="currentLoginQuery" @result="onUserResult">
                  <template slot-scope="{ query, result: { data, loading } }">
                    <template v-if="!loading && data">
                      <template v-if="!data.user">
                        <a class="navbar-item" @click.stop="loginStart()">Login</a>
                      </template>
                      <template v-else>
                        {{ data.user.firstname }} {{ data.user.lastname }}
                        <a class="navbar-item" @click.stop="logout()">Logout</a>
                      </template>
                    </template>
                  </template>
                </ApolloQuery>
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
// TODO: Generate menu from router
import ReguityFooter from '@/components/ReguityFooter.vue'
import { onLogin, onLogout } from './vue-apollo.js';

export default {
  name: 'app',
  data: () => ({
    appName: "My App", // TODO: Get from config
    loginStartMutation: require('./graphql/loginStart.gql'),
    loginContinuedMutation: require('./graphql/loginContinued.gql'),
    loggedInUser: null,
    currentLoginQuery: require('./graphql/currentLogin.gql')
  }),
  mounted: function() {
    let self = this;
    let urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    let state = urlParams.get('state');
    if (code && state) {
      let csrf = localStorage.getItem('csrf');
      if (state === csrf) {
        this.$apollo.mutate({
          mutation: this.loginContinuedMutation,
          variables: { code }
        }).then((res) => {
          let { data: { loginContinued: { accessToken, expiresIn, user } } } = res;
          self.loggedInUser = user;
          const apolloClient = this.$apollo.provider.defaultClient;
          onLogin(apolloClient, accessToken);
          //self.currentLoginQuery.refetch();
        });
      } else {
        console.warn('State did not match');
      }
    }
  },
  methods: {
    loginStart: function() {
      let csrf = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
      localStorage.setItem('csrf', csrf);
      this.$apollo.mutate({
        mutation: this.loginStartMutation,
        variables: {
          clientId: '', // TODO: Get from config
          scopeCodes: [], // TODO: Get from config
          acceptUrl: location.href,
          declineUrl: location.href,
          state: csrf
        }
      }).then((res) => {
        let { data: { redirect: { url } } } = res;
        location.href = url;
      });
    },
    logout: function () {
      const apolloClient = this.$apollo.provider.defaultClient;
      onLogout(apolloClient);
    },
    onUserResult: function(res){
      // TODO?
    }
  },
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
  height: calc(100vh - 96px);
}
.sublogo {
  font-family: Poppins;
  margin-left: 10px;
  margin-top: -3px;
}
</style>
