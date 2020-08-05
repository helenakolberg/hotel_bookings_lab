<template>
  <div>
      <booking-detail v-for="booking in bookings" :booking="booking" :key="booking._id"/>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import BookingDetail from './BookingDetail.vue';

export default {
    name: 'booking-list',
    props: ['bookings'],
    components: {
        'booking-detail': BookingDetail
    }
}
</script>

<style>

</style>