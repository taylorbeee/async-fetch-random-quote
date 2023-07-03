// ASYNC functions (random Maya Angelou quote)

const getData = async function () {
  const res = await fetch("https://api.quotable.io/quotes?author=maya-angelou");
  const data = await res.json();
  console.log(data);
};
getData();
