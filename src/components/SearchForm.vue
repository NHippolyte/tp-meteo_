<template>
  <div id="searchCityInput">
    <form @submit.prevent="searchCity">
      <label for="searchCity" class="label">Recherchez une ville :</label>
      <input type="text" v-model="search" id="searchCity" class="input" placeholder="Entrez le nom d'une ville...">
      <br>
      <button type="submit" class="button">Valider</button>
    </form>
    <div v-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  props: {
    error: String
  },
  data() {
    return {
      search: ""
    }
  },
  methods: {
    searchCity() {
      if (this.search) {
        this.$emit('city-searched', this.search)
        this.search = ""
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#searchCityInput {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.label {
  font-size: 1.2em;
  margin-bottom: 10px;
  display: block;
}

.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
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

.error-message {
  margin-top: 20px;
  padding: 10px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  text-align: center;
}
</style>
