 const orderTransitionOptions = key => ({
    classNames: "order",
    key,
    timeout: { enter: 500, exit: 500 }
  });
 const countTransitionOptions = key => ({
    classNames: "count",
    key,
    timeout: { enter: 500, exit: 500 }
  });

  export {orderTransitionOptions, countTransitionOptions};