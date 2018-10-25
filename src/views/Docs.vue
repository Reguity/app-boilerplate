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
        <h2>OAuth-like flow</h2>
        <p>In order to access a user's data, the user (or <i>Resource owner</i>) has to explicitly grant you permissions do so.
        For this, we have choosen to utilise an OAuth-like flow.</p>
        <p>What does OAuth-like mean? Why not simply OAuth? Actually, the works just like OAuth -
          except that we've implemented it via GraphQL instead of REST endpoints.</p>
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
