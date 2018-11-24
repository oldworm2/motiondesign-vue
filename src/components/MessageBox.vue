<template>
  <div v-if="showMessageBox" class="alert alert-dismissible alert-warning">
    <button v-on:click="closeMessageBox" type="button" class="close" data-dismiss="alert">
      &times;
    </button>
    <h4 class="alert-heading">{{messageLevel}}!</h4>
    <p class="mb-0"> {{message}} </p>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  data: () => ({
    
  }),
  props: {
    showMessageBox: Boolean,
    messageLevel: String,
    message: String,
    closeMessageBox: Function
  }
}
</script>

