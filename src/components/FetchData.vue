<script>
import axios from "axios";
export default {
  props: ["url"],
  data() {
    return {
      response: null,
      loading: true,
    };
  },
  created() {
    axios
      .get(this.url)
      .then((res) => {
        this.response = res.data;
        this.loading = false;
        console.log(this.response);
      })
      .catch((e) => {
        console.log(e);
        alert("[ERROR] fetching the data", e);
      });
  },
  //template:'<p>{{message}}</p>'
  render() {
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    });
  },
  //render:function(createElement){
  // return createElement("태그 이름", "태그 속성", "하위 태그 내용")
  // 태그속성에 그냥 문자만 적으면 <태그>문자</태그>
  // 태그속성에 this.url적으면 주소 나옴 <태그>url</태그>
  //}
};
</script>

<style></style>
