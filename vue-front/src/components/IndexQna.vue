<template>
  <div class="qnas">
    <h1>전체 QnA</h1>
    <div v-for="qna in qnas" :key="qna.id" class="qna">
      {{qna.id}} {{qna.main_question}} <br> {{qna.answer}}
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('/qna')
      .then((response) => {
        this.qnas = response.data
      })
  },
  data () {
    return {
      qnas: []
    }
  }
}
</script>
