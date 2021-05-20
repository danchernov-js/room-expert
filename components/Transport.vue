<template>
  <div class="step">
    <div class="step-name">
      <div class="step-name__num">2</div>
      <h2 class="step-name__text">Транспорт</h2>
    </div>
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="form">
              <h3 class="form__name">Грузоподъёмность</h3>
              <select 
                v-model="selectedWeight" 
                class="form__select" 
                size="1" 
                autofocus 
                required
              >
                <option v-for="weight in weights" v-bind:key="weight">{{ weight }}</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="form">
              <h3 class="form__name">Способ погрузки</h3>
              <select 
                v-model="selectedLoading"
                class="form__select" 
                size="1" 
                autofocus 
                required
              >
                <option v-for="loading in loadings" v-bind:key="loading">
                  {{ loading }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-mob-hide"></div>
    </div>
  </div>

</template>

<script>

export default {
  props: ['selectedWeight', 'weights', 'selectedLoading', 'loadings']
}

</script>