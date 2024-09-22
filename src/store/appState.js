import { reactive } from "vue";

export const state = reactive({
  counter: 0,
  formData: {
    input: "",
  },
  incrementCounter() {
    if (this.formData.input === "") return;
    this.counter +=  parseInt(this.formData.input);
  },
});
