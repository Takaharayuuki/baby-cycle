<template>
  <div>
    <Navbar />
    <b-container class="pt-5 mx-auto" style="max-width: 1200px" fluid>
      <h2 class="p-1">オムツ記録（仮）</h2>
      <b-row>
        <b-col sm="1">
          <label for="date">日付</label>
        </b-col>
        <b-col sm="3">
          <b-form-input id="date" type="date" />
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="1">
          <label for="time">時間</label>
        </b-col>
        <b-col sm="3">
          <b-form-input id="time" type="time" />
        </b-col>
        <b-col sm="1">
          <label for="food_type">食事</label>
        </b-col>
        <b-col sm="3">
          <b-form-select size="sm" id="food_type" v-model="memo.food_type" :options="foodOptions" />
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="1">
          <label for="excrement">オムツ</label>
        </b-col>
        <b-col sm="3">
          <b-form-select size="sm" id="excrement" v-model="memo.excrement" :options="excrementOptions" />
        </b-col>
        <b-col sm="1">
          <label for="milk">ミルク量</label>
        </b-col>
        <b-col sm="3">
          <b-form-input id="milk" type="text" />
        </b-col>
      </b-row>
      <b-button @click="addMemo" variant="primary">メモを追加する</b-button>
      <Table />
    </b-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, { root }) {
    const memo = reactive({
      date: null,
      time: null,
      food_type: null,
      excrement: null,
      milk: null
    })

    const foodOptions = reactive([
      {
        value: '母乳',
        text: '母乳'
      },
      {
        value: 'ミルク',
        text: 'ミルク'
      }
    ])
    const excrementOptions = reactive([
      {
        value: 'なし',
        text: 'なし'
      },
      {
        value: '大',
        text: '大'
      },
      {
        value: '小',
        text: '小'
      }
    ])

    const addMemo = async () => {
      try {
        await root.$fire.firestore.collection('memos').add({
          date: memo.date,
          time: memo.time,
          food_type: memo.food_type,
          excrement: memo.excrement,
          milk: memo.milk
        })
        memo.date = null
        memo.time = null
        memo.food_type = null
        memo.excrement = null
        memo.milk = null
      } catch (e) {
        console.error(e)
      }
    }

    return { memo, addMemo, foodOptions, excrementOptions }
  }
})
</script>
