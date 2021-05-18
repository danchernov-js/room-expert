import "./styles.scss";
import Vue from "vue/dist/vue.esm";

let app = new Vue({
  el: "#app",
  data: {
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
    order: undefined,
    selectedWeight: undefined,
    selectedAddress: undefined,
    addresses: [
      { address: "г. Москва, Лужники", id: 1 },
      { address: "г. Екатеринбург, Екатеринбург-арена", id: 2 },
      { address: "г. Екатеринбург, СКБ-Банк-арена", id: 3 },
    ],
  },
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
  },
  created() {
    this.order = "Здесь будет Ваш заказ."
    this.selectedAddress = this.addresses[0];
    this.selectedWeight = this.weights[0];
  },
});
