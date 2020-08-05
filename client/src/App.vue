<template>
  <div class="wrapper">
    <booking-form />
    <booking-list :bookings="bookings" />
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import BookingService from './services/BookingService.js';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },
  mounted() {
    this.fetchBookings();

    eventBus.$on('booking-deleted', (id) => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    });

    eventBus.$on('new-booking', (booking) => {
      this.bookings.push(booking);
    });
  },
  components: {
    'booking-form': BookingForm,
    'booking-list': BookingList
  },
  methods: {
    fetchBookings() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>

</style>