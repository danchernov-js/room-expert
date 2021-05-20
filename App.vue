<template>
    <section class="calc" id="app">
      <h1 class="calc-title">FTL: Прямая машина</h1>
      <div class="row shift">
        <div class="col">
          <div class="step">
            <div class="step-name">
              <div class="step-name__num">1</div>
              <h2 class="step-name__text">Маршрут</h2>
            </div>
            <div class="form">
              <h3 class="form__name">Откуда</h3>
              <input
                class="form__input"
                type="search"
                autocomplete="off"
                maxlenght="25"
                name="city1"
                placeholder=""
                title="Укажите город отправления"
                autofocus
                required
                v-model="inputAddress1"
              />
            </div>
            <div class="form">
              <h3 class="form__name">Куда</h3>
              <input
                class="form__input"
                type="search"
                autocomplete="off"
                maxlenght="25"
                name="city2"
                placeholder=""
                title="Укажите город назначения"
                autofocus
                required
                v-model="inputAddress2"
              />
            </div>
          </div>
          <Transport
            v-bind="{
              'selectedWeight': selectedWeight, 
              'weights': weights, 
              'selectedLoading': selectedLoading, 
              'loadings': loadings
            }"
          />
          <div class="step">
            <div class="step-name">
              <div class="step-name__num">3</div>
              <h2 class="step-name__text">Груз</h2>
            </div>
            <div class="row">
              <div class="col">
                <div class="row-cargo">
                  <div class="col-100">
                    <div class="form">
                      <h3 class="form__name">Тип груза</h3>
                      <select 
                        v-model="selectedTypeOfCargo"
                        class="form__select" 
                        size="1" 
                        autofocus 
                        required>
                        <option v-for="cargo in cargos">{{cargo}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-50 col-mob-hide">
                    <div class="form">
                      <h3 class="form__name">Класс опасности</h3>
                      <select 
                        v-model="selectedHazardClass"
                        class="form__select" 
                        size="1" 
                        autofocus 
                        required>
                        <option v-for="hazardClass in hazardClasses">
                          {{hazardClass}}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-50">
                    <div class="form">
                      <h3 class="form__name">Объявленная ценность, ₽</h3>
                      <input
                        v-model="selectedDeclaredValue"
                        class="form__select"
                        placeholder="≥ 1"
                        autofocus
                        required
                        type="search"
                        autocomplete="on"
                        maxlenght="4"
                        name="value"
                      />
                    </div>
                  </div>
                </div>

                <details>
                  <summary>
                    <span class="details-span"
                      >Требуется температурный режим</span
                    >
                  </summary>
                  <div class="row">
                    <div class="col">
                      <div class="form">
                        <h3 class="form__name">От, °С</h3>
                        <input
                          v-model="selectedTemp1"
                          class="form__select"
                          placeholder="-20"
                          autofocus
                          required
                          type="search"
                          autocomplete="on"
                          maxlenght="4"
                          name="value"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="form">
                        <h3 class="form__name">До, °С</h3>
                        <input
                          v-model="selectedTemp2"
                          class="form__select"
                          placeholder="+20"
                          autofocus
                          required
                          type="search"
                          autocomplete="on"
                          maxlenght="4"
                          name="value"
                        />
                      </div>
                    </div>
                  </div>
                </details>
              </div>
              <div class="col col-mob-hide"></div>
            </div>
          </div>
          <div class="step">
            <div class="step-name">
              <div class="step-name__num">4</div>
              <h2 class="step-name__text">Время</h2>
            </div>
            <div class="address">
              <div class="address-title">
                <h3 class="address-title__name">Когда прибыть на точку</h3>
                <h3 class="address-title__name">700 км в день</h3>
              </div>

              <div 
                class="address-time" 
                v-bind:class="{ 'address-time__hidden': isSelectedWeight(selectedWeight, address),
                                'address-time__selected': isSelected(address)
                              }"
                v-for="address in addresses">
                <div class="address-time__leftside">
                  <input
                    class="address-time__checkbox"
                    name="address"
                    v-bind:id="'custom-radio-' + address.id"
                    v-bind:value="address"
                    v-model="selectedAddress"
                    type="radio"
                  />
                  <label v-bind:for="'custom-radio-' + address.id">
                  <span class="address-time__address"
                    >{{ address.address }}</span
                  ></label>
                </div>
                <div class="address-time__rightside">
                  <input
                    class="address-time__button"
                    type="button"
                    value="НЕ ВЫБРАНО"
                  />
                </div>
              </div>
            </div>
            <div class="form">
              <h3 class="form__name">Комментарий к заказу</h3>
              <textarea
                v-model="userComment"
                class="form__input comment"
                type="text"
                name="comment"
                placeholder="Укажите особенности въезда на территорию склада или подъезда к адресу"
              ></textarea>
            </div>
            <div class="form">
              <h3 class="form__name">Ваш заказ:</h3>
              <div 
                class="total-order"
                v-if="inputAddress1 !== ''"
              >
                <h2 class="total-order__name">Маршрут</h2>
                <p class="total-order__value">Откуда: {{inputAddress1}}</p>
                <p class="total-order__value">Куда: {{inputAddress2}}</p>

                <h2 class="total-order__name">Транспорт</h2>
                <p class="total-order__value">Грузоподъемность: {{selectedWeight}}</p>
                <p class="total-order__value">Способ погрузки: {{selectedLoading}}</p>

                <h2 class="total-order__name">Груз</h2>
                <p class="total-order__value">Тип груза: {{selectedTypeOfCargo}}</p>
                <p class="total-order__value">Класс опасности: {{selectedHazardClass}}</p>
                <p class="total-order__value">Объявленная ценность: {{selectedDeclaredValue}}</p>
                <p 
                  v-if="selectedTemp1 !== ''" 
                  class="total-order__value"
                >Температурный режим: от {{selectedTemp1}}°С до {{selectedTemp2}}°С</p>
                <p v-else class="total-order__value">*температурный режим не установлен</p>

                <h2 class="total-order__name">Ваш комментарий к заказу:</h2>
                <p class="total-order__value">{{userComment}}</p>

                <button 
                  class="total-order__btn"
                  v-on:click="orderClick()"
                >Оформить заказ</button>

              </div>
              <div 
                class="total-order"
                v-else>
                {{ order }}
              </div>
            </div>

          </div>
        </div>
        <div class="col">
          <div class="hint">
            <p>
              Для расчета стоимости необходимо ввести параметры груза, пункты
              отправки и прибытия.
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
  import Transport from '/components/Transport.vue'


  export default {
    name: 'App',
    components: {
      Transport
    },
    data: () => ({
        weights: ["Не выбрано", "0.5 тонны", "1 тонна", "3 тонны", "10 тонн"],
        loadings: ["Задняя", "Боковая"],
        cargos: [
          "Не выбрано",
          "Детские товары",
          "Одежда и обувь",
          "Стройматериалы",
        ],
        hazardClasses: [
          "Класс 1 Взрывчатые вещества и изделия",
          "Класс 2 Газы",
          "Класс 3 Легковоспламеняющиеся жидкости",
          "Класс 4 Легковоспламеняющиеся твердые вещества, самореактивные вещества и твердые десенсибилизированные взрывчатые вещества",
          "Класс 5 Окисляющие вещества",
        ],
        inputAddress1: '',
        inputAddress2: '',
        order: undefined,
        selectedWeight: undefined,
        selectedLoading: undefined,
        selectedTypeOfCargo: undefined,
        selectedHazardClass: undefined,
        selectedDeclaredValue: undefined,
        selectedTemp1: '',
        selectedTemp2: '',
        userComment: '',
        selectedAddress: undefined,
        addresses: [
          { address: "г. Москва, Лужники", id: 1 },
          { address: "г. Екатеринбург, Екатеринбург-арена", id: 2 },
          { address: "г. Екатеринбург, СКБ-Банк-арена", id: 3 },
        ]
    }),
    methods: {
        isSelected(address) {
          return this.selectedAddress.id == address.id;
        },
        isSelectedWeight(weight, address) {
          if (address.id == 3) {
            if (weight.indexOf("3") > -1 || weight.indexOf("10") > -1) {
              return true;
            } else {
              return false;
            }
          }
        },
        orderClick() {
          alert('Спасибо за заказ!')
        }
      },
      created() {
        this.order = "Здесь будет Ваш заказ."
        this.selectedAddress = this.addresses[0];
        this.selectedWeight = this.weights[0];
        this.selectedLoading = this.loadings[1];
        this.selectedTypeOfCargo = this.cargos[0];
        this.selectedHazardClass = this.hazardClasses[4];
      }
  }

</script>