function fetchUserInfo() {
  let userData = null;

  setTimeout(() => {
    /// fetch
    const data = { id: 1, name: "Alex" };

    userData = data;
  });

  return userData;
}

function run() {
  const userInfo = fetchUserInfo();

  console.log(userInfo);
}

run();
