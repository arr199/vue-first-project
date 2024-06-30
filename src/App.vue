<script setup>
import { state } from './store/appState';
import NewComponent from './components/NewComponent.vue';

const itemList = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
];
</script>

<template>
  <header>
  </header>
  <main>
    <h1>Hello there</h1>
    <button @click="state.incrementCounter" class="increase-btn">Increase</button>
    <input  @change="(e) =>  state.formData.input = e.target.value" :value="state.formData.input" type="number">
    <p>{{ state.counter }}</p>
    <NewComponent  :number="state.counter"/>
    <div :key="item.id" v-for="item in itemList">
      <p>{{ item.name }}</p>
      <p>{{ item.id }}</p>
    </div>
    <h1 style="font-size: 2rem;" v-if="state.counter > 20">The state is greater than 20</h1>
  </main>
</template>

<style scoped >

header {
  line-height: 1.5;
}

.increase-btn {
  background-color: #333;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

}
input {
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 0.25rem;
  margin-left: 10px;
}



.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
