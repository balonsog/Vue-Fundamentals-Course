<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: [
    {
      "id": 1,
      "title": "Beach Cleanup",
      "date": "Aug 28 2018",
      "time": "10:00",
      "location": "Daytona Beach",
      "description": "Let's clean up this beach.",
      "organizer": "Adam Jahr",
      "category": "sustainability",
      "attendees": [
        {
          "id": "abc123",
          "name": "Adam Jahr"
        },
        {
          "id": "def456",
          "name": "Gregg Pollack"
        },
        {
          "id": "ghi789",
          "name": "Beth Swanson"
        },
        {
          "id": "jkl101",
          "name": "Mary Gordon"
        }
      ]
    },
    {
      "id": 2,
      "title": "Park Cleanup",
      "date": "Nov 12 2018",
      "time": "12:00",
      "location": "132 N Magnolia Street, Orlando, Florida",
      "description": "We're going to clean up this park.",
      "organizer": "Adam Jahr",
      "category": "nature",
      "attendees": [
        {
          "id": "ghi789",
          "name": "Beth Swanson"
        },
        {
          "id": "jkl101",
          "name": "Mary Gordon"
        }
      ]
    },
    {
      "id": 3,
      "title": "Pet Adoption Day",
      "date": "Dec 2 2018",
      "time": "12:00",
      "location": "132 N Magnolia Street, Orlando, Florida",
      "description": "Help animals find new homes.",
      "organizer": "Gregg Pollack",
      "category": "animal welfare",
      "attendees": [
        {
          "id": "abc123",
          "name": "Adam Jahr"
        },
        {
          "id": "ghi789",
          "name": "Beth Swanson"
        },
        {
          "id": "jkl101",
          "name": "Mary Gordon"
        }
      ]
    }
  ]
    }
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
