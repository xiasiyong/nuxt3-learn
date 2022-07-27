const useCounterStore = defineStore("counter", {
  state: () => ({ count: 12, userInfo: {} }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
    },
  },
});

export default useCounterStore;
