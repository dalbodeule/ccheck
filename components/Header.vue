<template>
  <header>
    <nav class="amber darken-2 theme">
      <div class="nav-wrapper"><nuxt-link to="/" class="brand-logo">저작권 공격</nuxt-link><nuxt-link to="#" data-activates="mobile-menu" class="button-collapse"><i class="material-icons">menu</i></nuxt-link>
        <ul class="right hide-on-med-and-down">
          <li><nuxt-link to="/judge">저작권 간이 판정</nuxt-link></li>
          <li><nuxt-link to="/donate">Donate</nuxt-link></li>
          <li>
            <p style="width: 1em"></p>
          </li>
        </ul>
        <ul id="mobile-menu" class="side-nav">
          <li><nuxt-link to="/judge">저작권 간이 판정</nuxt-link></li>
          <li><nuxt-link to="/donate">Donate</nuxt-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
