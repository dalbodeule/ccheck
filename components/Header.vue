<template>
  <header>
    <nav class="amber darken-2 theme">
      <div class="nav-wrapper"><nuxt-link to="/" class="brand-logo">아하! 저작권</nuxt-link><nuxt-link to="#" data-activates="mobile-menu" class="button-collapse"><i class="material-icons">menu</i></nuxt-link>
        <ul class="right hide-on-med-and-down">
          <li><nuxt-link to="/judge">간단 저작권 검사</nuxt-link></li>
          <li><nuxt-link to="/sense">저작권 토막상식</nuxt-link></li>
          <li>
            <p style="width: 1em"></p>
          </li>
        </ul>
        <ul id="mobile-menu" class="side-nav">
          <li><nuxt-link to="/judge">간단 저작권 검사</nuxt-link></li>
          <li><nuxt-link to="/sense">저작권 토막상식</nuxt-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
