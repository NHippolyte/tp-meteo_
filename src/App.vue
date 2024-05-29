<template>
  <div id="app">
    <SearchForm @city-searched="addCity" :error="error" />
    <div v-if="cities.length" class="cities-list">
      <h2>Liste des villes</h2>
      <div v-for="(city, index) in cities" :key="city.id" class="city">
        <WeatherCard :city="city" @remove-city="removeCity(index)" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchForm from './components/SearchForm.vue'
import WeatherCard from './components/WeatherCard.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    SearchForm,
    WeatherCard
  },
  data() {
    return {
      cities: JSON.parse(localStorage.getItem('cities')) || [],
      error: null
    }
  },
  watch: {
    cities: {
      handler(newCities) {
        localStorage.setItem('cities', JSON.stringify(newCities))
      },
      deep: true
    }
  },
  methods: {
    async addCity(cityName) {
      this.error = null;
      try {
        const key = "cf8fc3bb07dc699248bca57fef4fafad"
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)
        this.cities.push(response.data)
      } catch (err) {
        this.error = "Ville non trouvée. Veuillez réessayer."
      }
    },
    removeCity(index) {
      this.cities.splice(index, 1);
    }
  }
}
</script>

<style>
.cities-list {
  margin-top: 20px;
}

.city {
  margin-bottom: 10px;
}
</style>
