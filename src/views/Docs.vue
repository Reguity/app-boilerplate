<template>
  <div class="docs">
    <div class="columns is-centered">
      <section class="content-box column is-three-quarters">
        <h1>Documentation</h1>
      </section>
    </div>
    <div class="columns is-centered">
      <section class="content-box column is-three-quarters">
        <h2>Overview</h2>
        <p>Reguity provides an API that lets you query and mutate information on behalf of a user within Reguity's ecosystem.
        Such as managing companies, shareledgers and owned securities</p>
      </section>
    </div>
    <div class="columns is-centered">
      <section class="content-box column is-three-quarters">
        <h2>OAuth-like flows</h2>
        <p>In order to access a user's data, the user (or <i>Resource owner</i>) has to explicitly grant you permissions do so.
        For this, we have choosen to utilise an OAuth-like flow.</p>
        <p>What does OAuth-like mean? Why not simply OAuth? Actually, the works just like OAuth -
          except that we've implemented it via GraphQL instead of REST endpoints.</p>

        <h3>Logging in a user, with refresh token</h3>
        <div v-html="loginUserWithRefreshTokenSequenceDiagram"></div>

      </section>
    </div>
    <div class="columns is-centered">
      <section class="content-box column is-three-quarters">
        <h2>GraphQL API</h2>
        <p>Our API is GraphQL-based.
          GraphQL is a query language for APIs that allow clients to ask for what they need and receive exactly that,
          within a single roundtrip.</p>
      </section>
    </div>
    <div class="columns is-centered">
      <section class="content-box column is-three-quarters">
        <h2>Getting started</h2>
        <ul>
          <li><a href="#">Tutorial series 1: A web application using Vue and Apollo Client</a></li>
          <li><a href="#">Tutorial series 2: A server-to-server integration written in PHP</a></li>
        </ul>
      </section>
    </div>
    <div class="columns is-centered">
      <section class="content-box column is-three-quarters">
        <h2>User cases</h2>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'docs',
  data: function () {
    return {
      loginUserWithRefreshTokenSequenceDiagram: this.$mermaid.render(
        'id1',
        `sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant ReguityAPIServer
    participant ReguityAuthServer
    User->>Frontend: Clicks login
    Frontend->>Backend: Get redirectUrl
    Backend->>ReguityAPIServer: requestAuthorizationCode (clientId, clientSecret, acceptUrl, declineUrl)
    ReguityAPIServer->>Backend: redirectUrl: https://login.reguity.com?session=123
    Backend->>Frontend: redirectUrl: https://login.reguity.com?session=123
    Frontend->>User: Go to https://login.reguity.com?session=123
    User->>ReguityAuthServer: Grant YourWebApp access to my data
    ReguityAuthServer->>Backend: refreshToken: abc
    ReguityAuthServer->>User: Go to https://mywebapp.com?code=456
    User->>Frontend: Back with code 456
    Frontend->>ReguityAPIServer: authenticateWithAuthorizationCode 456
    ReguityAPIServer->>Frontend: accessToken=aefavndfjav
    `
      )
    };
  }
}
</script>
