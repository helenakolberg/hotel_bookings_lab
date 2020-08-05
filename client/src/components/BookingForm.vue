<template>
  <div>
      <form id="booking-form" v-on:submit.prevent="handleSubmit" method="post">
          <h3>Add a new booking:</h3>
          <div>
            <label for="firstName">First Name:</label>
            <input type="text" name="firstName" id="first-name" v-model="firstName" required />
          </div>
        <div>
            <label for="lastName">Surname:</label>
            <input type="text" name="lastName" id="last-name" v-model="lastName" required />
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" v-model="email" required />
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
            firstName: '',
            lastName: '',
            email: '',
            checkedIn: false
        }
    },
    methods: {
        handleSubmit(e) {
            const booking = {
                fullName: this.firstName + " " + this.lastName,
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