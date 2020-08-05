<template>
  <div class="detail-wrapper">
      <div class="detail-item">{{ booking.firstName }} {{ booking.surname }}</div>
      <div class="detail-item">|</div>
      <div class="detail-item">{{ booking.email }} </div>
      <div class="detail-item">|</div>
      <div v-if="booking.checkedIn === false" class="detail-item not-checked-in">Not checked in</div>
        <div v-if="booking.checkedIn === true" class="detail-item checked-in">Checked in</div>
        <button v-on:click="handleDelete" class="detail-item btn">Delete Booking</button>
        <button v-on:click="changeCheckedIn" v-if="booking.checkedIn" class="detail-item check-out">Check Out</button>
        <button v-on:click="changeCheckedIn" v-if="!booking.checkedIn" class="detail-item check-in">Check In</button>
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
    border: 1px solid darkblue;
    margin-bottom: 15px;
    padding: 10px;
    background-color: white;
    width: 700px;
}

.detail-item {
    margin-left: 10px;
}

.not-checked-in {
    color: red;
}

.checked-in {
    color: green;
}

.check-in {
    background-color: green;
    color: white;
    border: none;
    font-weight: bold;
    padding: 5px;
}

.check-in:hover {
    background-color: mediumseagreen;
    cursor: pointer;
}

.check-out {
    background-color: red;
    color: white;
    border: none;
    font-weight: bold;
    padding: 5px;
}

.check-out:hover {
    background-color: #d15c5c;
    cursor: pointer;
}

</style>