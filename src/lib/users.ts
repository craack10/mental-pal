async function saveToken(token: any) {
  const respone = await fetch("http://localhost:3000/api/auth/saveToken", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  console.log(respone);
}

export { saveToken };
