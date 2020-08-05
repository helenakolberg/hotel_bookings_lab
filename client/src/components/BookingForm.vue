<template>
  <div>
      <form id="booking-form" v-on:submit.prevent="handleSubmit" method="post">
          <h3>Add a new booking:</h3>
          <div class="form-item">
            <label for="fullName">Full Name:</label>
            <input type="text" name="fullName" id="full-name" v-model="fullName" required/>
          </div>
        <div class="form-item">
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" v-model="email" required/>
        </div>
        <div class="form-item">
            <input type="submit" value="Submit" id="submit" class="btn"/>
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

<style scoped>
#booking-form {
    border: 2px solid darkblue;
    padding: 0px 30px 15px 30px;
    margin-bottom: 40px;
    width: 250px;
    background-color: white;
}

.form-item {
    margin-bottom: 10px;
}

label {
    margin-right: 10px;
}

</style>