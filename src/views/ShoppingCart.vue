<template>
  <div>
    <h1>Laptops</h1>
    
    <button v-if="isLoggedIn" @click="handleLogout" class="logout-button">Logout</button>
    
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <img :src="product.image" :alt="product.name" style="width: 100px; height: 100px;">
        <p>{{ product.name }} - ₱{{ product.price }}</p>
        <button @click="addToCart(product)" :disabled="isInCart(product)">Add to Cart</button>
      </div>
    </div>
    
    <div class="cart">
      <h2>Cart Items:</h2>
      <div class="cart-item" v-for="(item, index) in cart" :key="index">
        <img :src="item.image" :alt="item.name" style="width: 100px; height: 100px;">
        <p>{{ item.name }} - ₱{{ item.price }} - Quantity: {{ item.quantity }}</p>
        <button @click="increaseQuantity(index)">+</button>
        <button @click="decreaseQuantity(index)">-</button>
        <button @click="removeFromCart(index)">Remove</button>
      </div>
      <p>Total Price: ₱{{ getTotalPrice() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Yoga 6 (13", Gen 8)', price: 41469, image: require('@/assets/lenovo.avif') },
        { id: 2, name: 'ASUS M415', price: 28995, image: require('@/assets/asus.png') },
        { id: 3, name: 'Apple Macbook Pro', price: 36490, image: require('@/assets/macbook.webp') }
      ],
      cart: []
    };
  },
  computed: {
    isLoggedIn() {
      return localStorage.getItem('token') !== null;
    }
  },
  methods: {
    addToCart(product) {
      if (localStorage.getItem('token')) {
        let existingItem = this.cart.find(item => item.id === product.id);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          this.cart.push({ ...product, quantity: 1 });
        }
      } else {
        alert('Please log in to add items to the cart.');
      }
    },
    isInCart(product) {
      return this.cart.some(item => item.id === product.id);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    increaseQuantity(index) {
      this.cart[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      }
    },
    getTotalPrice() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    handleLogout() {
      localStorage.removeItem('token');
      this.$router.push('/');
    }
  }
};
</script>

<style>
.products {
  display: flex;
  justify-content: space-around;
}
.product {
  text-align: center;
}
.cart-item {
  margin-bottom: 5px;
}

.logout-button {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
