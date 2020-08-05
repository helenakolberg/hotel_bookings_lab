<template>
  <div class="detail-wrapper">
      <div>{{ booking.fullName }}</div>
      <div>|</div>
      <div>{{ booking.email }} </div>
      <div>|</div>
      <div v-if="booking.checkedIn === false">Not checked in</div>
        <div v-if="booking.checkedIn === true">Checked in</div>
        <button v-on:click="handleDelete">Delete Booking</button>
        <button v-on:click="changeCheckedIn" v-if="booking.checkedIn">Check Out</button>
        <button v-on:click="changeCheckedIn" v-if="!booking.checkedIn">Check In</button>
  </div>
</template>

<script>
import BookingService from '../services/BookingService.js';
import { eventBus } from '@/main.js';
export default {
    name: 'booking-detail',
    props: ['booking'],
    methods: {
        handleDelete() {
            BookingService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit('booking-deleted', this.booking._id))
        },

        changeCheckedIn() {
            if (this.booking.checkedIn === true) {
                this.booking.checkedIn = false
            } else {
                this.booking.checkedIn = true
            }
        }
    }
}
</script>

<style scoped>
.detail-wrapper {
    display: flex;
}
</style>