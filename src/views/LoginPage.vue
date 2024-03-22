<template>
  <div class="container">
    <div class="login-container">
      <h1>Login</h1>
      <input type="text" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <button @click="login">Login</button>
    </div>
    
    <div class="product-preview-container">
      <h2>Preview of Product List</h2>
      <div class="products">
        <div class="product" v-for="product in products" :key="product.id">
          <img :src="product.image" :alt="product.name" style="width: 100px; height: 100px;">
          <p>{{ product.name }} - ₱{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      products: [ 
        { id: 1, name: 'Yoga 6 (13", Gen 8)', price: 41469, image: require('@/assets/lenovo.avif') },
        { id: 2, name: 'ASUS M415', price: 28995, image: require('@/assets/asus.png') },
        { id: 3, name: 'Apple Macbook Pro', price: 36490, image: require('@/assets/macbook.webp') }
      ]
    };
  },
  methods: {
    login() {
      const token = 'example_token';
      localStorage.setItem('token', token);
      this.$router.push('shopping-cart');
    }
  }
};
</script>

<style>
.container {
  display: flex;
}

.login-container,
.product-preview-container {
  flex: 1;
  padding: 20px;
  border-radius: 5px;
  margin-right: 20px;
}

.login-container {
  background-color: ffffff;
  border: 1px solid #ccc;

}

.product-preview-container {
  background-color: #ffffff;
  border: 1px solid #ccc;
}
</style>
