const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener("click", async () => {

  const name = document.getElementById("name").value;
  const family = document.getElementById("family").value;
  const phone = document.getElementById("phone").value;

  if (!name || !family || !phone) {
    alert("همه فیلدها را پر کنید");
    return;
  }

  const data = {
    name,
    family,
    phone,
    time: new Date().toLocaleString()
  };

  await window.api.saveData(data);

  msg.innerText = "ذخیره شد ✅";

  document.getElementById("name").value = "";
  document.getElementById("family").value = "";
  document.getElementById("phone").value = "";

});
