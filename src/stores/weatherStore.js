import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    cities: [],
    error: null
  }),
  actions: {
    async fetchWeather(city) {
      this.error = null
      try {
        const key = "cf8fc3bb07dc699248bca57fef4fafad"
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        this.cities.push(response.data)
      } catch (err) {
        this.error = "Ville non trouvée. Veuillez réessayer."
      }
    }
  },
  persist: true
})
