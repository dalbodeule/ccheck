<template>
  <div>
    <headers/>
    <div id="contents" class="container">
      <nuxt/>
    </div>
    <footers/>
  </div>
</template>

<script>
import 'materialize-css/dist/css/materialize.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '~/assets/init.css'

import init from '~/assets/init.js'

import Headers from '~/components/Header.vue'
import Footers from '~/components/Footer.vue'

export default {
  components: {
    Headers,
    Footers
  },
  mounted () {
    init()
  },
  updated () {
    setTimeout(() => {
      init()
    }, 700)
  },
  watch: {
    '$route' (to, from) {
      if (to.fullPath === from.fullPath) {
        return
      }
      if (to.path !== from.path) {
        if (this.isServer) {
          return
        }
        this.$nextTick(() => {
          setTimeout(() => {
            init()
          }, 700)
        })
      }
    }
  }
}
</script>
