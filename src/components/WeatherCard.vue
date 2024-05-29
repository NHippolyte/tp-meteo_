<template>
  <div class="weather-card">
    <h2>{{ city.name }}</h2>
    <p>Temperature: {{ city.main.temp }} °C</p>
    <p>Weather: {{ city.weather[0].description }}</p>
    <button @click="$emit('remove-city')" class="button remove-button">Supprimer</button>
  </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    city: Object
  }
}
</script>

<style scoped>
.weather-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  position: relative;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

.button:hover {
  background-color: #0056b3;
}

.remove-button {
  background-color: #dc3545;
  position: absolute;
  top: 10px;
  right: 10px;
}

.remove-button:hover {
  background-color: #c82333;
}
</style>
