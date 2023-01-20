
<template>
  <div>
    <div>
      {{ bind }}
    </div>
    <a v-bind:href="bind">
      {{ bind }}
    </a>
    <!-- bind function -->
    <button @click="newFunction()">to parent</button>
    <button @click="eve()">eve :</button>
    <button v-on:click="eve()">eve2</button>
    <button v-on:click="greetings()">eve2</button>
    <!-- Event Modifiers event.name -->
    <ul>
      <li v-for="(artist, x) in news" :key="x">
        <h3>
          {{ artist }} from
          <span v-if="x != 0">{{ x }}</span>
        </h3>
      </li>
    </ul>
    <input type="text" v-model="name" ref="ele" />
    {{ fun }}
    <div></div>
    <div id="computed_props">
      Kilometers : <input type="text" v-model="kilometers" /> Meters :
      <input type="text" v-model="meters" />
    </div>
  </div>
  <div :style="{ color: kilometers == 1 ? 'red' : '#09c' }">sssssssssssss</div>
  <div :class="{ '11111111111111111': kilometers == 1 }">sssssssssssss</div>
  <div>
    {{ $route.params }}
  </div>
  <div
    v-for="item in dataAll"
    :key="item.id"
    class="shadow p-3 my-3 rounded bg-white postion-relitive"
  >
    <div>
      {{ item.id }}
      <div>{{ item.title }}</div>
      <div>{{ item.userId }}</div>
      <div>
        <div class="all-option">
          <button class="Edit" @click="Edit(item.id)">
            <i class="far fa-edit"></i>
          </button>
          <button class="deleteItem" @click="deleteItem(item.id)">
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <slot name="header"></slot>
</template>

<script>
import { myMixin } from "../../core/mixin/base.mixins";

export default {
  name: "Basic",
  data() {
    return {
      bind: "v-bind",
      name: "name v-model",
      kilometers: 0,
      meters: 0,
      accountBalance: 2000,
      data: [],
    };
  },
  props: ["news"],
  mixins: [myMixin],
  methods: {
    eve() {
      console.log("1");
      // this.$refs.ele.focus()
      this.$refs.ele.style.color = "#09c";
    },
    newFunction() {
      this.$emit("listenerChild", "I'm here my Daddy!");
    },
    Edit(id) {
      this.$router.push("/Edit/" + id);
    },
    deleteItem(id) {
      this.$store.dispatch("deleteUser", id);
    },
  },
  watch: {
    kilometers: function (val) {
      this.kilometers = val;
      this.meters = val * 1000;
    },
    meters: function (val) {
      this.kilometers = val / 1000;
      this.meters = val;
    },
  },
  computed: {
    fun() {
      return this.name + 5;
    },
    dataAll() {
      return this.$store.getters.all;
    },
  },

  beforeCreate() {
    console.log("I'm beforeCreate hook");
  },
  created() {
    console.log("I'm created hook");
  },
  beforeMount() {
    console.log("before mounted!");
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    console.log("mounted!");
  },
  beforeUpdate() {
    console.log("before update!");
  },
  updated() {
    console.log("updated!");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  
};
</script>

<style lang="scss" scoped>
</style>

