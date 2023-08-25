<template>
  <div>
    <PositionCard>
      <div class="flex flex-row gap-3 w-full">
        {{ position }}
        <div class="w-36">
          <ComboBox
            :items="currencyData"
            v-model="selectedCurrency"
            label="Currency"
          ></ComboBox>
        </div>
        <div class="w-44">
          <TextField
            v-model.number="amount"
            label="Amount"
            type="number"
            :full-width="true"
            :dense="false"
          ></TextField>
        </div>
        <div class="w-80">
          <ComboBox
            :items="accountNumbers"
            v-model="selectedAccount"
            label="Account Number"
          ></ComboBox>
        </div>
        <div class="w-48">
          <ComboBox
            :items="paymentMethods"
            v-model="selectedPayment"
            label="Payment Method"
          ></ComboBox>
        </div>
        <div class="w-[580px]">
          <TextField
            v-model="description"
            label="Description"
            :full-width="true"
            :dense="false"
          ></TextField>
        </div>
      </div>
      <div class="flex flex-row border-l-2 h-10 pl-3 items-center">
        <v-icon class="cursor-pointer border p-2 my_icons">mdi-delete</v-icon>
        <v-icon @click="saveHandle()" class="cursor-pointer border p-2 my_icons"
          >mdi-content-save</v-icon
        >
      </div>
    </PositionCard>
    <ToastAlert type="warning" :visible="isVisible" :duration="1000">there are empty fields</ToastAlert>
  </div>
</template>

<script>
import ComboBox from "./ComboBox.vue";
import TextField from "./TextField.vue";
import PositionCard from "../shared/PositionCard.vue";
import { currencyService } from "@/service/currency.service";
import ACCOUNT_NUMBERS from "@/utils/accountNumberList";
import PAYMENT_METHODS from "@/utils/paymentMethodsList";
import { mapActions, mapGetters } from "vuex";
import { areFieldsFilled } from "@/helper/validateInputs";
import ToastAlert from "@/shared/ToastAlert.vue";

export default {
  components: {
    ComboBox,
    TextField,
    PositionCard,
    ToastAlert
},
  data() {
    return {
      currencyData: [],
      selectedCurrency: "",
      amount: "",
      selectedAccount: "",
      selectedPayment: "",
      description: "",
      isVisible: false
    };
  },
  props: {
    position: Object
  },
  computed: {
    ...mapGetters("position", ["positions"]),
    accountNumbers() {
      return ACCOUNT_NUMBERS.map(
        (item) => `${item.account_number} - ${item.caption}`
      );
    },
    paymentMethods() {
      return PAYMENT_METHODS.map((payment) => payment.paymentType);
    },
  },
  methods: {
    ...mapActions("position", ["savePosition"]),
    async getCurrency() {
      const response = await currencyService.getCurrencys();
      this.currencyData = response;
    },
    async saveHandle() {
      const fieldsToValidate = [
        { value: this.selectedCurrency.text },
        { value: this.amount },
        { value: this.selectedAccount },
        { value: this.selectedPayment },
        { value: this.description },
      ];
      if (areFieldsFilled(fieldsToValidate)) {
        const response = await this.savePosition({
          currency: this.selectedCurrency,
          amount: this.amount,
          accountNumber: this.selectedAccount,
          payment: this.selectedPayment,
          description: this.description,
        });
        return response;
      } else {
        this.isVisible = true
        setTimeout(() => {
          this.isVisible = false
        }, 2000)
      }
    },
  },
  created() {
    this.getCurrency();
  },
};
</script>

<style scoped>
.my_icons {
  border: 1px solid #cccccc;
  color: #666666;
}
.my_icons:hover {
  background-color: #4a90e214;
  color: #4a90e2;
}
</style>
