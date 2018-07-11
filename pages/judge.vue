<template lang="pug">
.row
  sidebox(:data="[{id: 'notice', title: '알아두기'},{id: 'judge', title: '검사'},{id: 'flowchart', title: '순서도'}]")
  .col.s12.l11.pull-l1(style="min-height: 400px;")
    #notice.section.scrollspy
      .card.z-depth-2
        .card-content
          p.card-title 알아두기
          p 본 검사는 간이 저작권 검사 입니다.
          br
          b 저작권법의 개정, 본 테스트가 가지고 있는 헛점, 컴퓨터 소프트웨어
          p 등의 특수한 경우에는 다른 결과가
            | 나올 수 있습니다.
            | 이 테스트만을 맹신하여서는 안됩니다.
          br
          p
            | 대부분의 저작물에서는 본 간이 저작권 검사로
            | 저작물의 사용 가능 여부를 가늠해볼 수 있습니다.
    #judge.section.scrollspy
      .card.z-depth-2
        .card-content
          p.card-title 간단 저작권 검사
          p 사용하려는 것이 저작권을 침해하는지 간단히 알아봅시다!
          br
          .center-align
            div(v-if="status=='main'")
              p 질문을 읽어보신 뒤, 버튼을 눌러주세요!
            div(v-else-if="status=='q1'")
              p 자신이 직접 만든 것인가요?
            div(v-else-if="status=='q2'")
              p 저작권자가 혹시 살아계신가요?
            div(v-else-if="status=='q3'")
              p 사후 저작권 보호기간이 끝난 저작물인가요?
            div(v-else-if="status=='q4'")
              p 혹시 저작물에 대해 사용허가를 받으셨나요?
            div(v-else-if="status=='fin1'")
              p 저작권은 자신에게 있습니다. 마음대로 사용하셔도 됩니다.
            div(v-else-if="status=='fin2'")
              p 사후 저작권의 만료로 사용할 수 있는 저작물입니다.
            div(v-else-if="status=='fin3'")
              p 그 저작물은 사용해서는 안되는 저작물입니다.
            div(v-else-if="status=='fin4'")
              p 허락받은 내용 안에서 사용할 수 있는 저작물입니다.
          br
          // 사후저작권 관련 설명
          .card.z-depth-2(v-if="death==true")
            .card-content
              p
                | 2011년 6월 30일 개정(시행 2011년 7월 1일) 전 법령에서는 사후 저작권 보호기간이
                | 50년이였습니다.
              p 하지만 개정 이후의 법령에서는 70년으로 사후 저작권 보호기간이 늘어났습니다.
              p
                | 마찬가지로 공동저작물의 저작재산권의 보호기간도 맨 마지막으로 사망한 저작자가
                | 사망한 후 70년으로 늘어났습니다.
              p
                | 1962년 이전에 돌아가신 분들은 사후 저작권이 만료되었고,
                | 1963년 이후 사망한 저작자의 사후 저작권은 70년까지 보호됩니다.
          br
          // Buttons
          .center-align
            div(v-if="button=='main'")
              button.btn.btn-large.green.darken-2(@click="buttonMethod()") 시작!
            .row(v-else-if="button=='judge'")
              .col.s6
                button.btn.btn-large.green.darken-2(@click="buttonMethod(true)") 네!
              .col.s6
                button.btn.btn-large.red.darken-2(@click="buttonMethod(false)") 아니요?
            div(v-else-if="button=='result'")
              button.btn.btn-large.blue.lighten-1(@click="reset()") 처음으로!
    #flowchart.section.scrollspy
      .card.z-depth-2
        .card-content
          p.card-title 검사 순서도
          p
            | 이 검사는 이 검사 순서도를 이용하고 있습니다.
          img(src='~/static/flowchart.png' style="width: 100%; height: 100%; display: block;")
</template>

<style>

</style>

<script>
import Sidebox from '~/components/Sidebox.vue'

import buildmeta from '~/assets/buildmeta'

import * as Judge from '~/assets/judge'

const title = '간단 저작권 검사 :: 저작권'
const meta = buildmeta(title, '간단 저작권 검사를 해볼 수 있는 페이지입니다.',
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
  },
  data () {
    return {
      status: 'main',
      death: false,
      button: 'main'
    }
  },
  methods: {
    buttonMethod (answer) {
      this.death = false
      if (this.status == 'main') {
        this.status = 'q1'
        this.button = 'judge'
        return
      } else {
        let result
        switch (this.status) {
          case 'q1': result = Judge.q1(answer); break;
          case 'q2': result = Judge.q2(answer); this.death = true; break;
          case 'q3': result = Judge.q3(answer); break;
          case 'q4': result = Judge.q4(answer); break;
        }
        this.status = result
        if (result == 'fin1' || result == 'fin2'
        || result == 'fin3' || result == 'fin4') {
          this.button = 'result'
        }
      }
      return
    },
    reset () {
      this.status = 'main',
      this.death = false,
      this.button = 'main'
      return
    }
  }
}
</script>