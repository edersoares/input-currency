<template>
  <money v-model="price" v-bind="{ decimal, thousands, prefix, suffix, precision, masked }"></money>
</template>

<script>
  import { Money } from 'v-money';

  export default {
    name: 'currency',
    components: { Money },
    props: {
      value: {
      },
      decimal: {
        default: ','
      },
      thousands: {
        default: '.'
      },
      prefix: {
        default: ''
      },
      suffix: {
        default: ''
      },
      precision: {
        type: Number,
        default: 2
      },
      masked: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value (value) {
        this.price = value;
      },
      price (value) {
        this.$emit('input', value);
      }
    },
    data () {
      return {
        price: this.value
      }
    }
  }
</script>
