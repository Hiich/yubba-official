// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();
      // let cost = await store
      //   .getState()
      //   .blockchain.smartContract.methods.cost()
      //   .call();

      let shares = await store
        .getState()
        .blockchain.smartContract.methods.shares(
          store.getState().blockchain.account
        )
        .call();

      let paused = await store
        .getState()
        .blockchain.smartContract.methods.paused()
        .call();

      let whitelist = await store
        .getState()
        .blockchain.smartContract.methods.whitelist(store.getState().blockchain.account)
        .call();
      
      dispatch(
        fetchDataSuccess({
          totalSupply,
          shares,
          paused,
          whitelist,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
