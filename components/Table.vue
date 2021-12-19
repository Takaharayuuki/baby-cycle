<template>
  <div>
    <b-table striped hover :fields="tableFields" :items="memos" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Table',
  setup() {
    const tableFields = ref(['時間', '食事', 'オムツ', 'ミルク'])
    const memos = ref([
      { 時間: 40, 食事: 'Dickerson', オムツ: 'Macdonald', ミルク: '100ml' },
      { 時間: 21, 食事: 'Larsen', オムツ: 'Shaw', ミルク: '100ml' },
      { 時間: 89, 食事: 'Geneva', オムツ: 'Wilson', ミルク: '100ml' }
    ])
    return {
      memos,
      tableFields
    }
  }
})
</script>
