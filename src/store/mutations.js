export default {
  increment(state, payload) {
    console.log(payload);
    // εζ΄ηΆζ
    state.count += payload.amount;
  },
  getPieChartData(state, payload) {
    state.pieChartData = payload;
  },
  getScatterChartData(state, payload) {
    state.scatterChartData = payload;
  },
};
