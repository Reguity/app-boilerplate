<template>
  <div class="apps">
    <div class="columns is-centered">
      <section class="content-box column is-three-quarters">
        <div style="float: right"><a class="button is-primary">Create new app</a></div>
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
          <tr>
            <td>531253879897531</td>
            <td><img src="../assets/images/app-placeholder.png" /></td>
            <td>Värdepapperszonen (VPZ)</td>
            <td>Production</td>
            <td><span class="tag is-light">owner</span></td>
            <td>1836</td>
            <td>
              <a class="button is-primary">Edit</a>
              <a class="button is-danger" style="margin-left: 10px;">Delete</a>
            </td>
          </tr>
          <tr>
            <td>315317895318975</td>
            <td><img src="../assets/images/app-placeholder.png" /></td>
            <td>Shareledger (NVR)</td>
            <td>Production</td>
            <td><span class="tag is-light">administrator</span></td>
            <td>10462</td>
            <td>
              <a class="button is-primary">Edit</a>
              <a class="button is-danger" style="margin-left: 10px;">Delete</a>
            </td>
          </tr>
          <tr>
            <td>45342532789539</td>
            <td><img src="../assets/images/app-placeholder.png" /></td>
            <td>Boardroom</td>
            <td>Production</td>
            <td><span class="tag is-light">administrator</span></td>
            <td>10462</td>
            <td>
              <a class="button is-primary">Edit</a>
              <a class="button is-danger" style="margin-left: 10px;">Delete</a>
            </td>
          </tr>
          <tr>
            <td>64364981895398</td>
            <td><img src="../assets/images/app-placeholder.png" /></td>
            <td>Superadmin</td>
            <td>Production</td>
            <td><span class="tag is-light">superadmin</span></td>
            <td>2</td>
            <td>
              <a class="button is-primary">Edit</a>
              <a class="button is-danger" style="margin-left: 10px;">Delete</a>
            </td>
          </tr>
          <tr>
            <td>6426409094908</td>
            <td><img src="../assets/images/app-placeholder.png" /></td>
            <td>Crowdfunding</td>
            <td>Production</td>
            <td>
              <span class="tag is-light">administrator</span>
              <span class="tag is-light">owner</span>
            </td>
            <td>145</td>
            <td>
              <a class="button is-primary">Edit</a>
              <a class="button is-danger" style="margin-left: 10px;">Delete</a>
            </td>
          </tr>
          <tr>
            <td>53259837289856</td>
            <td><img src="../assets/images/app-placeholder.png" /></td>
            <td>Annual meetings service</td>
            <td>Production</td>
            <td>
              <span class="tag is-light">administrator</span>
              <span class="tag is-light">owner</span>
            </td>
            <td>56</td>
            <td>
              <a class="button is-primary">Edit</a>
              <a class="button is-danger" style="margin-left: 10px;">Delete</a>
            </td>
          </tr>
          <tr>
            <td>6423642689407</td>
            <td><img src="../assets/images/app-placeholder.png" /></td>
            <td>Dividends manager</td>
            <td>Production</td>
            <td><span class="tag is-light">administrator</span></td>
            <td>462</td>
            <td>
              <a class="button is-primary">Edit</a>
              <a class="button is-danger" style="margin-left: 10px;">Delete</a>
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
