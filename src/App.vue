<template>
  <div id="app" class="app">
    <nav class="navbar navbar-light bg-light">
      <h1>Curtain Co.</h1>
      <span class="navbar-text">
        Welcome, {{this.user}} <i class="fas fa-user"></i>
      </span>
    </nav>
    <main class="p-4">
      <ProductView />
    </main>
    <footer class="footer">
      <div class="text-center">
        <small>Version 1.0.0</small>
        <div class="motion_logo">
          <a href="https://motiondesign.nz/">
            <img
              src="https://motiondesign.nz/wp-content/themes/MD/img/logo@2x.png"
              height="15"
              alt="MotionDesign"
            />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import ProductView from './components/ProductView'

export default {
  name: 'app',
  components: {
    ProductView
  },
  data: () => ({
    user: '',
  }),
  mounted() {
    localStorage.setItem("user", "Clark");
    this.user = localStorage.getItem("user");
    
  },
}
</script>

<style>
  .app {
    text-align: center;
  }

  .app .navbar{
    padding-left:35px;
    padding-right:35px;
  }

  .app .table-area{
    margin-left:0;
    margin-right:0;
    overflow-x:auto;
    overflow-y: hidden;
  }
  h1{
    font-size:20px;
    line-height: 24px;
  }

  .title{
    font-weight: bold;
  }
  h3.title{
    margin-top:30px;
  }
  .table th{
    font-size:1.2em;
  }
  .table td{
    font-size:1.1em;
  }
  .navbar-text{
    font-weight: bold; 
    font-size: 12pt;
  }
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding:10px;
    background: #eef9ee;
  }
  .motion_logo{
    position: absolute;
    top:10px;
    right:10px;
  }
  @media screen and (max-width:480px){
    small{
      display:block;
      text-align:center;
      margin:0 auto;
    }
    .motion_logo{
      position: static;
      display:block;
      margin:10px auto;
    }
  }
</style>
