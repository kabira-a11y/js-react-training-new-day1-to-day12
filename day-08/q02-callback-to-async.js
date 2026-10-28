function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!Number.isInteger(id) || id <= 0) {
        reject(new Error("Invalid user ID"));
        return;
      }

      resolve({ id, name: "Ali" });
    }, 500);
  });
}

function getOrders(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user || !user.id) {
        reject(new Error("User not found"));
        return;
      }

      resolve(["Order 1", "Order 2"]);
    }, 500);
  });
}

function getOrderDetails(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!order) {
        reject(new Error("Order not found"));
        return;
      }

      resolve(order + ": Rs 2500");
    }, 500);
  });
}

// VERSION 1: Using Promises with then(), catch() and finally()
console.log("Starting Promise version...");

getUser(1)
  .then((user) => {
    console.log("User:", user.name);
    return getOrders(user);
  })
  .then((orders) => {
    console.log("Orders:", orders);
    return getOrderDetails(orders[0]);
  })
  .then((details) => {
    console.log("Final result:", "Ali", details);
  })
  .catch((error) => {
    console.error("Promise version error:", error.message);
  })
  .finally(() => {
    console.log("Promise version finished.");
  });

// VERSION 2: Using async/await with try/catch/finally
async function runWithAsyncAwait() {
  console.log("Starting async/await version...");

  try {
    const user = await getUser(1);
    console.log("User:", user.name);

    const orders = await getOrders(user);
    console.log("Orders:", orders);

    const details = await getOrderDetails(orders[0]);

    console.log("Final result:", user.name, details);
  } catch (error) {
    console.error("Async/await version error:", error.message);
  } finally {
    console.log("Async/await version finished.");
  }
}

runWithAsyncAwait();
