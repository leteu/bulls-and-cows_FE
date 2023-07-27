<template>
  <q-dialog
    ref="dialog"
    :seamless="false"
  >
    <q-card class="create-room">
      <q-card-section class="flex items-center justify-between">
        <div class="text-h6 text-weight-bold">방 만들기</div>
        <q-icon
          name="clear"
          size="sm"
          class="cursor-pointer"
          @click="hide"
        />
      </q-card-section>
      <q-separator />
      <q-card-section class="column gap">
        <q-form ref="form">
          <div class="create-room__field-box row gap">
            <div class="text-bold text-subtitle1 essentials">제목</div>
            <!-- TODO: hideErrorClass -->
            <q-input
              dense
              outlined
              v-model="roomName"
              class="col"
              :rules="[(val) => (val && val.length > 0) || 'Please type something']"
              hide-bottom-space
            />
          </div>
          <div class="create-room__field-box row gap">
            <div class="text-bold text-subtitle1 essentials">비밀번호</div>
            <q-checkbox
              dense
              v-model="hasRoomPass"
            />
            <div class="col overflow-hidden">
              <Transition
                name="slide"
                enter-active-class="animate__animated animate__slideInLeft"
                leave-active-class="animate__animated animate__slideOutRight"
                appear
                :duration="100"
              >
                <!-- TODO: hideErrorClass -->
                <q-input
                  v-if="hasRoomPass"
                  dense
                  outlined
                  type="password"
                  maxlength="6"
                  v-model="roomPass"
                  :rules="hasRoomPass ? [(val) => (val && val.length > 0) || 'Please type something'] : []"
                  hide-bottom-space
                >
                  <template #append>
                    <span class="text-body1">
                      {{ `${roomPass.length} / 6` }}
                    </span>
                  </template>
                </q-input>
              </Transition>
            </div>
          </div>
        </q-form>
      </q-card-section>
      <q-separator />
      <q-card-section class="flex items-center justify-end">
        <q-btn
          color="primary"
          label="만들기"
          icon="add"
          class="q-px-sm"
          @click="submit"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useQuasar, QDialog, QForm } from 'quasar'
import { api } from 'src/api'

// defineProps({

// })

// const emit = defineEmits<{
//   (event: 'close', e: Event): void
// }>()

const $q = useQuasar()

const dialog = ref<QDialog>()
const form = ref<QForm>()

const roomName = ref('')
const hasRoomPass = ref(false)
const roomPass = ref('')

const show = () => {
  dialog.value?.show()
}
const hide = () => {
  dialog.value?.hide()
}

const submit = async () => {
  // TODO: 방 생성
  try {
    const chk = await form.value?.validate()
    if (!chk) {
      throw chk
    }
    // const res = await api.post('/room/create', {
    //   name: roomName.value,
    //   password: hasRoomPass.value ? roomPass.value : undefined,
    // })

    // if (res.status === 200) {
    // }

    // hide()
  } catch (e) {
    $q.notify({
      icon: 'error',
      message: '다시 시도해주세요.',
      group: false,
      color: 'green-6',
      textColor: 'white',
      classes: 'text-weight-bold',
    })
  }
}

watch(
  () => hasRoomPass.value,
  () => {
    roomPass.value = ''
  },
  {
    deep: true,
  },
)
</script>

<style lang="sass" scoped>
.create-room
  color: #000
  width: 500px
  &__field-box
    height: 40px
    align-items: center
</style>
