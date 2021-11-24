<template>
  <div class="app-container">
    <h1 v-color="color">App 根组件</h1>
    <p v-color="'blue'">why~</p>
    <hr />

    <button @click="color = 'green'">改变color的颜色值</button>
    <hr />
    <button @click="comName = 'Left'">展示 Left</button>
    <button @click="comName = 'Right'">展示 Right</button>

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 1. component 标签是 vue 内置的，作用：组件的占位符 -->
      <!-- 2. is 属性的值，表示要渲染的组件的名字 -->
      <!-- 3. is 属性的值，应该是组件在 components 节点下的注册名称 -->

      <!-- keep-alive 会把内部的组件进行缓存，而不是销毁组件 -->
      <!-- 在使用 keep-alive 的时候，可以通过 include 指定哪些组件需要被缓存； -->
      <!-- 或者，通过 exclude 属性指定哪些组件不需要被缓存；但是：不要同时使用 include 和 exclude 这两个属性 -->
      <keep-alive exclude="MyRight">
        <component :is="comName" :color1="color"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";

export default {
  data() {
    return {
      // comName 表示要展示的组件的名字
      comName: "Left",
      color: "red",
    };
  },
  directives: {
    // 定义名为color的指令，指向一个配置对象
    // color: {
    //   // 当指令第一次被绑定到元素上的时候就会立即触发bind函数
    //   // 形参中的el表示当前指令所绑定的那个DOM对象
    //   bind(el, binding) {
    //     el.style.color = binding.value;
    //     console.log(binding);
    //   },
    //   update(el, binding) {
    //     el.style.color = binding.value;
    //     console.log(binding);
    //   },
    // },
    color(el, binding) {
      el.style.color = binding.value;
    },
  },
  components: {
    // 如果在“声明组件”的时候，没有为组件指定 name 名称，则组件的名称默认就是“注册时候的名称”
    Left,
    Right,
  },
};
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
