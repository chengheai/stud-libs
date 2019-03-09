const a = () => {
  const b = 1;
  const c = () => {
    console.log(b); // 可以拿到
  }
  c();
}
a();