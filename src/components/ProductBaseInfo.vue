<template>
  <div class="row">
    <div class="col-sm">
      <div class="form-group">
        <input
          v-model="product.customerName"
          type="text"
          class="form-control"
          placeholder="Customer Name"
        />
      </div>
    </div>
    <div class="col-sm">
      <div class="form-group">
        <select
          v-model="product.suburb"
          class="form-control"
        >
          <option disabled value="">Suburb</option>
          <option v-for="suburb in suburbs" :key="suburb.id">
            {{suburb.name}}, {{suburb.city}}
          </option>
        </select>
      </div>
    </div>
    <div class="col-sm">
      <div class="form-group">
        <select
          v-model="product.material"
          class="form-control"
        >
          <option disabled value="">Material</option>
          <option v-for="material in materials" :key="material.id">
            {{material.name}}
          </option>
        </select>
      </div>
    </div>
    <div class="col-sm">
      <div class="form-group">
        <select
          v-model="product.colour"
          v-on:keydown.tab.exact="(0 === product.curtains.length) && addCurtain()"
          class="form-control"
          id="colour"
          v-bind:style="selectedColourStyle"
        >
          <option disabled value=""
            v-bind:style="{'backgroundColor' : 'white', 'colour' : 'black'}"
          >
            Colour
          </option>
          <option v-for="colour in colours" :key="colour.id" 
            v-bind:style="colour.colourStyle"
          >
            {{colour.name}}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductBaseInfo',
  data: () => ({
    
  }),
  props: {
    product: Object,
    suburbs: Array,
    materials: Array,
    colours: Array,
    selectedColourStyle: Object,
    addCurtain: Function
  }
}
</script>

