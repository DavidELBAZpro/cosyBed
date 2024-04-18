<script setup lang="ts">
import { useToast, POSITION } from 'vue-toastification'

const toast = useToast()

const toastFunctions = {
  success: toast.success,
  error: toast.error,
  info: toast.info,
  default: toast,
  warning: toast.warning,
}

type ToastType = 'success' | 'error' | 'info' | 'default' | 'warning'

/**
 * Shows a toast with given type and message.
 *
 * @param {ToastType} type - The type of toast to display.
 * @param {ToastContent} message - The message to display in the toast.
 */
const showToast = (type: ToastType, message: string) => {
  const toastFunction = toastFunctions[type]
  if (toastFunction) {
    toastFunction(message, {
      position: POSITION.TOP_RIGHT,
      timeout: 6000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: 'button',
      icon: true,
      rtl: false,
    })
  } else {
    console.error('Invalid toast type')
  }
}
defineExpose({ showToast })
</script>
