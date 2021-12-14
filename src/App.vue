
<script  lang="ts">
import { defineComponent, h, ref } from "vue";

export default defineComponent({
  setup() {
    const myEl = ref(2);
    const log = () => console.log("Selem Render Function");
    return () => h('div', { id: 'app' }, [
      h('h2', { onClick: log }, [
        h('span', { class: 'material-icons', style: 'font-size: 100px' }, 
        'whatshot'),
        h('span', myEl.value = Date.now()),
      ])
    ])
  }
});

</script>

<style lang="scss">
@import "./assets/bootstrap.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.main {
  // height: 100vh;
  // width: 100%;
  margin: 50px;

  // flex-direction: column;
}
</style>
