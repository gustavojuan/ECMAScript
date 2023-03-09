try {
  hello();
} catch (error) {
  console.log(error);
}

try {
  antoherFn();
} catch {
  console.log("Esto es un error sin $error");
}
