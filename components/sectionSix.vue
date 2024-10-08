<template>
  <section ref="target" :class="{ 'in-view': inView }" class="section-six">
    <img :src="cloudImage" alt="cloud" class="cloud-image">
    <div class="information">
      <h1>{{ $t('section_six.100_percent') }}</h1>
      <h1>{{ $t('section_six.free') }}</h1>
    </div>
    <div class="text">
      <span>{{ $t('section_six.message_part_one') }} <strong>{{ $t('section_six.message_part_two') }}</strong></span>
      <span>{{ $t('section_six.message_part_three') }}</span>
    </div>
    <div class="donation">
      <button
        class="donation-option"
        :class="{ active: amount === 500000 }"
        @click="selectAmount(500000)"
      >
        $5.000
      </button>
      <button
        class="donation-option"
        :class="{ active: amount === 1000000 }"
        @click="selectAmount(1000000)"
      >
        $10.000
      </button>
      <button
        class="donation-option"
        :class="{ active: amount === 2000000 }"
        @click="selectAmount(2000000)"
      >
        $20.000
      </button>
      <input
        v-model="customAmount"
        type="text"
        class="donation-input"
        :placeholder="t('section_six.change_amount')"
      >
      <button
        class="donation-button"
        :disabled="!isDonateEnabled"
        @click="handleDonate"
      >
        {{ $t('section_six.donate') }}
      </button>
    </div>
    <form v-if="hash">
      <component
        :is="'script'"
        src="https://checkout.wompi.co/widget.js"
        data-render="button"
        :data-redirect-url="redirectUrl"
        :data-public-key="publicKey"
        :data-currency="currency"
        :data-amount-in-cents="amount"
        :data-reference="reference"
        :data-signature:integrity="hash"
      />
    </form>
  </section>
</template>

<script lang="ts" setup>
import cloudImage from '~/public/images/section-six/cloud.webp'
import { generateHash } from '~/utils/generateHash'

const inView = ref(false)
const { publicKey } = useEnvConfig()
const { t } = useTranslation()
const { target } = useIntersectionObserver(() => {
  inView.value = true
})

const reference = ref<string>(generateTransactionId())
const amount = ref<number>(0)
const customAmount = ref<string>('')
const currency = 'COP'
const redirectUrl = ref<string>('https://www.rememberme.com.co/payment')
const isDonateEnabled = computed(() => amount.value > 0)

const hash = ref('')

const selectAmount = (value: number) => {
  amount.value = value
  customAmount.value = ''
}

const handleDonate = async () => {
  if (customAmount.value) {
    amount.value = parseInt(customAmount.value) * 100
  }

  if (amount.value > 0) {
    hash.value = await generateHash(reference.value, amount.value, currency)
  } else {
    console.error('Please enter a valid amount')
  }
}
</script>

<style lang="scss" scoped>
.section-six {
  display: flex;
  flex-direction: column;
  padding: 10rem;
  gap: 3rem;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #f1ffe5;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 1s ease-out 0.3s,
    transform 1s ease-out 0.3s;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }

  .cloud-image {
    width: 9%;
    position: absolute;
    top: -30%;
    right: 5%;
    transform: translate(-3%, 50%);
  }

  .information {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translate(-5%, -50%);

    h1 {
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 3.5rem;
      color: var(--color-brand-implemented-500);
      font-family: "Roboto", sans-serif;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    line-height: 3rem;

    strong {
      font-weight: 600;
    }
  }
  .donation {
    display: flex;
    gap: 2rem;
    align-items: center;

    button {
      letter-spacing: 0.5px;
    }

    .donation-option {
      padding: 0.5rem 1rem;
      border: 1px solid var(--color-brand-implemented-500);
      background: transparent;
      color: var(--color-brand-implemented-500);
      border-radius: 2rem;
      font-size: 1.6rem;
      font-family: "Roboto", sans-serif;
      cursor: pointer;
      transition:
        background 0.3s ease,
        color 0.3s ease;

      &:hover {
        background: var(--color-brand-implemented-500);
        color: #fff;
      }
      &.active {
        background: var(--color-brand-implemented-500);
        color: #fff;
      }
    }

    .donation-input {
      padding: 0.5rem 1.8rem;
      border: 2px solid var(--color-brand-implemented-500);
      border-radius: 2rem;
      font-size: 1.6rem;
      font-family: "Roboto", sans-serif;
      outline: none;
      background-color: transparent;
      color: var(--color-brand-implemented-500);

      &::placeholder {
        color: var(--color-brand-implemented-500);
      }
    }

    .donation-button {
      padding: 0.5rem 1rem;
      background: var(--color-brand-implemented-500);
      color: #fff;
      border: none;
      border-radius: 2rem;
      font-size: 1.6rem;
      font-family: "Roboto", sans-serif;
      cursor: pointer;
      transition:
        background 0.3s ease,
        color 0.3s ease;

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }

      &:hover:enabled {
        background-color: darken($color: #1d956a, $amount: 10%);
      }

      &:hover {
        background-color: darken($color: #1d956a, $amount: 10%);
      }
    }
  }
}
@media (max-width: 768px) {
  .section-six {
    padding: 15rem 5rem 5rem 5rem !important;
    text-align: center;

    .information {
      position: absolute;
      left: 50%;
      top: 15%;
      transform: translate(-50%, -50%);
    }

    .text {
      gap: 1.5rem;
    }

    .donation {
      flex-wrap: wrap;
      justify-content: center;
      padding: 0 2rem;
      gap: 2rem;

      &-option,
      &-button {
        width: 100%;
      }

      &-input {
        width: 100%;
      }
    }
  }
}
</style>
