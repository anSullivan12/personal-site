<template>
  <div id="app">
    <header>
      <h1>Ashley Sullivan</h1>
      <nav>
        <router-link :to="{ name: 'Home' }" class="mui-btn mui-btn--flat">Home</router-link>
        <button class="mui-btn mui-btn--flat">About</button>
        <button class="mui-btn mui-btn--flat">Contact</button>
      </nav>
    </header>
    <router-view/>
  </div>
</template>
