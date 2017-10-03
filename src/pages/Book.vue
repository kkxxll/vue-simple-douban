<template>
  <div>
    <div v-for="(route, index) in $router.options.routes" :key="index">
      <!-- {{route.meta.children}} -->
      <br>
      <!-- {{route.name}} -->
    </div>
    <div>

    </div>
  </div>
</template>
<script>
export default {
  mounted() {
  },
  methods: {
    kk() {
      class Point {
        constructor(age, name) {
          this.age = age
          this.name = name
        }
        toString() {
          return this.age
        }
      }
      class ColorPoint extends Point {
        constructor(age, name, color) {
          super(age, name)
          this.color = color
        }

        toString() {
          return this.color + ' ' + super.toString()
        }
      }
      let a = new ColorPoint(18, 'kkk', 'red')
      return a.toString()
    }
  }
}
</script>

