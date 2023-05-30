import { defineComponent, ref, watch } from 'vue'
import { Textarea, Modal } from 'ant-design-vue'
export default defineComponent({
  setup() {
    
    function modalShow() {
        const value = ref('')
    watch(value,()=>{
        console.log(value.value)
    })
      let operation = Modal.confirm({
        title: 'title',
        width: '940px',
        cancelText: '稍后',
        class: 'conclusion-confirm',
        content: (
          <div class="mdt-conclusion-content">
            <Textarea v-model={[value.value, 'value']} autoSize={{ minRows: 6 }} placeholder="请在此处编辑会诊小结" />
          </div>
        ),
        onOk() {}
      })
    }
    return ()=>(
        <div onClick={modalShow}>点击显示</div>
    )
  }
})
