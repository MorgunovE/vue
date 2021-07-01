<template>
  <div id="app">
    <!-- <h1>{{firstName}}</h1>
    <h2>{{ num + 2}}</h2>
    <h3>{{obj.age}}</h3>
    <a :href="link">Link</a>
    <a :[attrkey]="link">Link</a>
    <template v-if="msgVis == 1">
      <div class="message" >message</div>
    </template>
    <template  v-else-if="msgVis == 2">
      <div class="message">elseif message</div>
    </template>
    <template v-else>
      <div class="newMessage" >newMessage</div>
    </template>
    <div v-show="showBlock">V show block</div>
    <div class="name-imput" v-if="inputName">
      <label>Name</label>
      <input type="text" placeholder="inout name" key="name-input">
    </div>
    <div class="nickname-imput" v-else>
      <label>NickName</label>
      <input type="text" placeholder="input nickname" key="nickname-input">
    </div>
    <button @click="inputName = !inputName">Change form</button> -->
    <!-- <button @click.right="onClick('value', $event)">Click event</button>
    <a href="" @click.prevent="onLinkClick">Link</a>
    <input type="text" @keyup.enter="onKeyup">
    <h1>{{text}}</h1> -->
    <!-- <ul>
      <li v-for="(item, i) in strArr" :key="item.id">
        {{i +1}} {{item}}
      </li>
      <li v-for="user in usersArr" :key="user.id">
        {{user.name}} : {{user.age}}
      </li>
      <li v-for="(item, name, index) in productArr" :key="index">
        {{index + 1}} : {{name}} : {{item}}
      </li>
    </ul> -->
    <!-- <div>
      <input type="text" @keyup.enter="newValueStrArr">
    </div>
    <div>
      <input type="text" @keyup.enter="deleteProp">
    </div> -->
    <!-- <div>
      <h1> {{fullN}}</h1>
    </div>
    <div>
      <input type="text" @keyup.enter="settName">
    </div> -->
    <!-- <h1
    :style="{'font-size': fontSize + 'px'}"
    class="title"
    :class="[classObj, activeClass]">Hello Max
    </h1> -->
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :user-object="user" :title="title" @onClickCounter='onClickCounterHandler' />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    user: {
      name: 'Max',
    },
    title: 'Some title',
    // activeClass: 'my-class',
    // isActive: false,
    // fontSize: 30,
    // fN: 'Max',
    // lN: '',
    // firstName: 'Max',
    // num: 2,
    // obj: {
    //   age: 30,
    // },
    // link: 'https://Google.com',
    // attrkey: 'href',
    // msgVis: 2,
    // showBlock: false,
    // inputName: true,
    // text: '',
    // strArr: ['1', '2', '3'],
    // usersArr: [{ name: 'max', age: '30', id: '1' }, { name: 'jeff', age: '35', id: '2' }],
    // productArr: {
    //   brand: 'Apple',
    //   mode: 11,
    //   price: 1000,
    // },
  }),
  computed: {
    // classObj() {
    //   return {
    //     'active-class': this.isActive,
    //     error: !this.isActive,
    //   };
    // },
    // fullN() {
    //   return `${this.fN || 'Default'} ${this.lN || 'user'}`;
    // },
    // fullN: {
    //   get() {
    //     return `${this.fN || 'Default'} ${this.lN || 'user'}`;
    //   },
    //   set(value) {
    //     console.log(value);
    //     const [fN, lN] = value.split(' ');
    //     console.log(fN, lN);
    //     this.fN = fN;
    //     this.lN = lN;
    //   },
    // },
  },
  watch: {
    // lN: 'onLastNameUpdate',
  },
  methods: {
    onClickCounterHandler(value) {
      console.log('In component: ', value);
    },
    // onLastNameUpdate(value) {
    //   console.log('watch', value);
    // },
    // settName(e) {
    //   // this.fN = e.target.value;
    //   this.fullN = e.target.value;
    // },
    // newValueStrArr(e) {
    //   // this.strArr.push(e.target.value);
    //   this.$set(this.strArr, this.strArr.length, e.target.value);
    // },
    // deleteProp(e) {
    //   // delete this.productArr[e.target.value];
    //   this.$delete(this.productArr, e.target.value);
    // },
    // onClick(value, e) {
    //   console.log(value, e);
    // },
    // onLinkClick() {
    //   console.log('link click');
    // },
    // onKeyup(e) {
    //   console.log(e);
    //   this.text = e.target.value;
    // },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
