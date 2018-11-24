<template>
  <div>
    <div class="row m-2">
      <h4 class="text-left title">Curtains</h4>
    </div>

    <div class="row table-area">
      <table class="table table-hover ">
        <thead>
          <tr class="table-success">
            <th scope="col">Room</th>
            <th scope="col">Length</th>
            <th scope="col">Width</th>
            <th scope="col">Pleats</th>
            <th scope="col">Style</th>
            <th scope="col">Notes</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(curtain, index) in curtains" v-bind:key="index">
            <td>
              <div class="form-group mb-0">
                <input
                  v-model="curtain.room"
                  type="text"
                  class="form-control"
                  placeholder="Room"
                  ref="room"
                />
              </div>
            </td>
            <td>
              <div class="form-group mb-0">
                <input
                  v-model="curtain.length"
                  type="text"
                  class="form-control"
                  placeholder="Length"
                />
              </div>
            </td>
            <td>
              <div class="form-group mb-0">
                <input
                  v-model="curtain.width"
                  type="text"
                  class="form-control"
                  placeholder="Width"
                />
              </div>
            </td>
            <td>
              <div class="form-group mb-0">
                <input
                  v-model="curtain.pleats"
                  type="text"
                  class="form-control"
                  placeholder="Pleats"
                />
              </div>
            </td>
            <td>
              <div class="form-group mb-0">
                <input
                  v-model="curtain.style"
                  type="text"
                  class="form-control"
                  placeholder="Style"
                />
              </div>
            </td>
            <td>
              <div class="form-group mb-0">
                <input
                  v-model="curtain.notes"
                  v-on:keydown.tab.exact="(index + 1 === curtains.length) && addCurtain()"
                  type="text"
                  class="form-control"
                  placeholder="Notes"
                />
              </div>
            </td>
            <td>
              <button
                v-on:click="removeCurtain(index)"
                type="button"
                class="btn btn-sm btn-outline-primary"
                tabIndex="-1"
              >
                x
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <div class="col-sm text-right">
        <button
          v-on:click="addCurtain"
          type="button"
          class="btn btn-sm btn-outline-info m-2"
        >
          ADD
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Curtains',
  data: () => ({
    
  }),
  props: {
    curtains: Array,
    addCurtain: Function,
    removeCurtain: Function
  }
}
</script>

