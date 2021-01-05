<template>
  <div id="app" class="mui-container">
    <header>
      <h1 class="mui--text-display1">Ashley Sullivan</h1>
      <nav>
        <router-link :to="{ name: 'Home' }" class="mui-btn mui-btn--flat">Home</router-link>
        <button class="mui-btn mui-btn--flat">About</button>
        <button class="mui-btn mui-btn--flat">Contact</button>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style>
body {
  font-family: 'Poppins', sans-serif;
}

header {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>
