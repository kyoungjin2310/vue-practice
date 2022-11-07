export const dateFormat = {
  //mixin 실행, 그다음 컴포넌트 함수가 실행 -> 컴포넌트 함수가 우선적으로 됨
  data() {
    return {
      mixinData: 'mixin data 공부',
    };
  },
  methods: {
    getDate(date) {
      if (date !== null) {
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let fullDate = `${date.getFullYear()}/${
          date.getMonth() + 1
        }/${date.getDate()}`;
        console.log('aaa');
        return `${fullDate} ${hour}:${minutes}`;
      } else {
        return null;
      }
    },
  },
};
