<template lang="pug">
  .row
    sidebox(:data="[{id: 'test', title: '간단 검사'}, {id: 'sense', title: '토막상식'}, {id: 'info', title: '정보'}]")
    .col.s12.l11.pull-l1(style="min-height: 400px;")
      #test.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title 간단 저작권 검사
            span
              | 간단 저작권 검사 페이지로 이동합니다.
            br
            br
            nuxt-link.btn.light-blue.lighten-1(to="/judge") 살펴보기
      #sense.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title 저작권 토막상식
            span
              | 저작권 토막상식을 살펴봅니다.
            br
            br
            nuxt-link.btn.light-blue.lighten-1(to="/sense") 살펴보기
      #info.section.scrollspy
        .card.z-depth-2
          .card-content
            p.card-title 사이트 정보
            span
              | 본 사이트는 2018 진로 행사를 위해 계획, 준비되었습니다.
              | 일부 저작물은 본 사이트의 간이 저작권 검사로 확인해 볼 수 없음을 알립니다.
              | 본 사이트에서는 간이 검사를 제공합니다. 실제로는 다른 결과를 가져올 수 있습니다.
</template>

<style>

</style>

<script>
import Sidebox from '~/components/Sidebox.vue'

import buildmeta from '~/assets/buildmeta'

const title = '아하! 저작권'
const meta = buildmeta(title, '아하! 저작권 메인 페이지 입니다.',
  '', 'small_sunshine', null)

export default {
  components: {
    Sidebox
  },
  head () {
    return {
      title,
      meta
    }
  }
}
</script>