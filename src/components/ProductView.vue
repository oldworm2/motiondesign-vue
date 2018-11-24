<template>
  <div class="container-fluid">
    <div class="row mb-4 mt-2">
      <h2 class="text-left title">Product View</h2>
    </div>
    <ProductBaseInfo 
      v-bind:suburbs="suburbs"
      v-bind:materials="materials"
      v-bind:colours="colours"
      v-bind:product="product"
      v-bind:selectedColourStyle="selectedColourStyle"
    />
    <Curtains 
      v-bind:curtains="product.curtains"
      v-bind:addCurtain="addCurtain"
      v-bind:removeCurtain="removeCurtain"
    />
    <div class="row">
      <div class="col-sm text-left">
        <button 
          type="button" 
          class="btn btn-outline-primary m-2"
        >
          BACK
        </button>
        <button 
          v-on:click="saveProduct"
          type="button" 
          class="btn btn-outline-success m-2"
        >
          SAVE ALL CHANGES
        </button> 
      </div>
    </div>
    <MessageBox 
      v-bind:showMessageBox="showMessageBox"
      v-bind:messageLevel="messageLevel"
      v-bind:message="message"
      v-bind:closeMessageBox="closeMessageBox"
    />
  </div>
</template>

<script>
import ProductBaseInfo from './ProductBaseInfo';
import Curtains from './Curtains'
import MessageBox from './MessageBox'

export default {
  name: 'ProductView',
  data: () => ({
    product: {
      customerName: '',
      suburb: '',
      material: '',
      colour: '',
      curtains: []
    },
    curtain: {
      room: '',
      length: '',
      width: '',
      pleats: '',
      style: '',
      notes: ''
    },
    suburbs: [],
    materials: [],
    colours: [],
    selectedColour: {
      red: 255,
      green: 255,
      blue: 255,
    },
    showMessageBox: false,
    message: '',
    messageLevel: 'Error',
  }),
  components: {
    ProductBaseInfo,
    Curtains,
    MessageBox
  },
  computed : {
    selectedColourStyle() {
      let selectedColour = this.colours.find(
        colour => colour.name === this.product.colour
      );
      if(!selectedColour){
        selectedColour = this.selectedColour;
      }
      return this.getColourStyle(selectedColour);
    },
  },
  methods: {
    async getSuburbs() {
      try{
        const res = await fetch('/api/suburbs');
        if(!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        this.suburbs = data;
      }catch(e){
        this.openMessageBox('Error', e.message);
      }      
    },
    async getMaterials() {
      try{
        const res = await fetch('/api/materials');
        if(!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        this.materials = data;  
      }catch(e){
        this.openMessageBox('Error', e.message);
      } 
    },
    async getColours() {
      try{
        const res = await fetch('/api/colours');
        if(!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        this.colours = data.map((colour) =>{
          return {
            ...colour,
            colourStyle: this.getColourStyle(colour)
          }
        });
      }catch(e){
        this.openMessageBox('Error', e.message);
      } 
    },
    async getData() {
      try{
        const res = await fetch('/api/data'); 
        if(!res.ok) throw new Error(res.statusText);
        if(res.statusText !== 'No Content'){
          const product = await res.json();
          let selectedColour = this.colours.find(
            colour => colour.id === Number(product.colour)
          );
          if(selectedColour){
            this.selectedColour = selectedColour
          }
          this.product = product;
        }
      }catch(e){
        this.openMessageBox('Error', e.message);
      } 
    },
    getColourStyle(colour) {
      const color =  `rgb(${255 - colour.red}, 
        ${255 - colour.green}, 
        ${255 - colour.blue})`;
      const backgroundColor = `rgb(${colour.red}, 
        ${colour.green}, 
        ${colour.blue})`;
      return {
          color : color,
          backgroundColor : backgroundColor
      };
    },
    addCurtain() {
      const curtain = {...this.curtain};
      this.product.curtains.push(curtain); 
    },
    removeCurtain(index) {
      this.product.curtains.splice(index, 1);
    },
    async saveProduct() {
      try{
        const body = {...this.product}
        const response = await fetch('/api/data', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'content-type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        } 
        this.getData();
        this.openMessageBox('Success', 'Saved');
        setInterval(this.closeMessageBox, 3000);
      }catch(e){
        this.openMessageBox('Error', e.message);
      } 
    },
    openMessageBox(messageLevel, message) {
      this.showMessageBox = true;
      this.messageLevel = messageLevel;
      this.message = message;
    },
    closeMessageBox() {
      this.showMessageBox = false;
    },
  },
  
  async mounted() {
    this.getSuburbs();
    this.getMaterials();
    await this.getColours();
    this.getData();
  },
}
</script>

