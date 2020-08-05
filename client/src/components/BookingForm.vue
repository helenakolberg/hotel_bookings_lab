<template>
  <div>
      <form id="booking-form" v-on:submit.prevent="handleSubmit" method="post">
          <h3>Add a new booking:</h3>
          <div>
            <label for="fullName">Full Name:</label>
            <input type="text" name="fullName" id="full-name" v-model="fullName" required/>
          </div>
        <div>
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" v-model="email" required/>
        </div>
        <div>
            <input type="submit" value="Submit" id="submit"/>
        </div>
      </form>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import BookingService from '../services/BookingService.js';
export default {
    name: 'booking-form',
    data() {
        return {
            fullName: '',
            email: '',
            checkedIn: false
        }
    },
    methods: {
        handleSubmit(e) {
            const booking = {
                fullName: this.fullName,
                email: this.email,
                checkedIn: this.checkedIn
            }
            BookingService.postBooking(booking)
            .then( res => eventBus.$emit('new-booking', res))
        }
    }
}
</script>

<style>

</style>