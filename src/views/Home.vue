<template>
  <div class="home">
    <div class="article">
      <img src="../assets/analysis.png" alt="">
    </div>
    <div class="title">
      <h2>All articles</h2>
      <h3>By Claire</h3>
      <router-link :to="{ name: 'Articles' }" class="btn">View Articles</router-link>
    </div>
  </div>
</template>