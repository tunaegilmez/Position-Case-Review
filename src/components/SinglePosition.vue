<template>
    <PositionCard>
      <div class="flex flex-row gap-3 w-full">
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
        <v-icon
          class="cursor-pointer border p-2 text-green-500 hover:text-green-700 hover:bg-slate-300"
          >mdi-content-save</v-icon
        >
        <v-icon
          class="cursor-pointer border p-2 text-red-500 hover:text-red-700 hover:bg-slate-300"
          >mdi-delete</v-icon
        >
      </div>
    </PositionCard>
</template>

<script>
import ComboBox from "./ComboBox.vue";
import TextField from "./TextField.vue";
import PositionCard from "../shared/PositionCard.vue";
import { currencyService } from "@/service/currency.service";
import ACCOUNT_NUMBERS from "@/utils/accountNumberList";
import PAYMENT_METHODS from "@/utils/paymentMethodsList";

export default {
  components: {
    ComboBox,
    TextField,
    PositionCard,
  },
  data() {
    return {
      currencyData: [],
      selectedCurrency: null,
      amount: null,
      selectedAccount: null,
      selectedPayment: null,
      description: "",
    };
  },
  computed: {
    accountNumbers() {
      return ACCOUNT_NUMBERS.map((account) => account.account_number);
    },
    paymentMethods() {
      return PAYMENT_METHODS.map((payment) => payment.paymentType);
    },
  },
  methods: {
    async getCurrency() {
      const response = await currencyService.getCurrencys();
      this.currencyData = response;
    },
  },
  created() {
    this.getCurrency();
  },
};
</script>
