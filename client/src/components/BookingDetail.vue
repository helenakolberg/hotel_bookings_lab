<template>
  <div>
      <div>{{ booking.fullName }}</div>
      <div>|</div>
      <div>{{ booking.email }} </div>
      <div>|</div>
      <div v-if="booking.checkedIn === false">Not checked in</div>
       <div v-if="booking.checkedIn === true">Checked in</div>
  </div>
</template>

<script>
export default {
    name: 'booking-detail',
    props: ['booking']
}
</script>

<style>

</style>