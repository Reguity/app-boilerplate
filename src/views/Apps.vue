<template>
  <div class="apps">
    <div class="columns is-centered">
      <section class="content-box column is-three-quarters">
        <div style="float: right">
          <a class="button is-primary">
            <font-awesome-icon class="icon" icon="plus" />
            Create new app
          </a>
        </div>
        <h1>Apps</h1>
        <table id="app-table" class="table" style="margin-top: 15px; width: 100%">
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Status</th>
            <th>Scopes</th>
            <th>Users</th>
            <th>Actions</th>
          </tr>
          <tr v-for="({ id, imgUrl, name, status, scopes, users }) in apps" :key="id">
            <td>{{ id }}</td>
            <td><img :src="imgUrl || placeholderImage" /></td>
            <td>{{ name }}</td>
            <td>{{ status }}</td>
            <td><span v-for="(scope) in scopes" class="tag is-light" :key="scope">{{ scope }}</span></td>
            <td>{{ users }}</td>
            <td>
              <a class="button is-primary">
                <font-awesome-icon class="icon" icon="edit" />
                Edit
              </a>
              <a class="button is-danger" style="margin-left: 10px;">
                <font-awesome-icon class="icon" icon="trash" />
                Delete
              </a>
            </td>
          </tr>
        </table>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.tag {
  border: 1px solid #e0e0e0;
  &:not(first-child) {
    margin-left: 5px;
  }
}
</style>

<script>
const placeholderImage = require('../assets/images/app-placeholder.png');
export default {
  name: 'apps',
  components: {},
  data: () => ({
    placeholderImage,
    // TODO: Fetch from GraphQL!
    scopes: [
      { owner: 'Query and mutate resources for a user by virtue of him/her being an owner of the resource' },
      { administrator: 'Query and mutate resources for a user by virtue of him/her being an administrator or the resource' }
    ],
    // TODO: Fetch from GraphQL!
    apps: [
      {
        id: 531253879897531,
        imageUrl: null,
        name: 'Värdepapperszonen (VPZ)',
        status: 'Production',
        scopes: ['owner'],
        users: 1836
      },
      {
        id: 315317895318975,
        imageUrl: null,
        name: 'Shareledger (NVR)',
        status: 'Production',
        scopes: ['administrator'],
        users: 10462
      },
      {
        id: 45342532789539,
        imageUrl: null,
        name: 'Boardroom',
        status: 'Production',
        scopes: ['administrator'],
        users: 2334
      },
      {
        id: 64364981895398,
        imageUrl: null,
        name: 'Superadmin',
        status: 'Production',
        scopes: ['superadmin'],
        users: 2
      },
      {
        id: 6426409094908,
        imageUrl: null,
        name: 'Crowdfunding',
        status: 'Production',
        scopes: ['administrator','owner'],
        users: 145
      },
      {
        id: 5321537158935,
        imageUrl: null,
        name: 'Annual meetings service',
        status: 'Production',
        scopes: ['administrator','owner'],
        users: 56
      },
      {
        id: 6423642689407,
        imageUrl: null,
        name: 'Dividends manager',
        status: 'Production',
        scopes: ['administrator'],
        users: 462
      }
    ]
  })
}
</script>
