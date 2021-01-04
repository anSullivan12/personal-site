<template>
  <div>
    <header>
      <h1>Ashley Sullivan</h1>
      <nav>
        <router-link :to="{ name: 'Home' }" class="mui-btn mui-btn--flat">Home</router-link>
        <button class="mui-btn mui-btn--flat">About</button>
        <button class="mui-btn mui-btn--flat">Contact</button>
      </nav>
    </header>
    <p>I'm a Front End Developer trying to make the Internet a better place. I write HTML, CSS, and JavaScript and specialize in working with small businesses. I'm available to help you build your site, imporve your SEO, set up analytics, and bring more users to your website. You can contact me here, or click the button below to learn more about me. I also feature some of businesses that I've worked with so that you can learn more about my experience. I look forward to hearing from you.</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
