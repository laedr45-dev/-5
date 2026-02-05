function sendRequest() {
  const name = document.getElementById("name").value;
  const discord = document.getElementById("discord").value;
  const reason = document.getElementById("reason").value;
  const msg = document.getElementById("msg");

  if(!name || !discord || !reason){
    msg.style.color = "red";
    msg.textContent = "❌ الرجاء تعبئة جميع الحقول";
    return;
  }

  const webhookURL = "ضع_هنا_Webhook_الرابط";

  const data = {
    content: `**طلب إثبات نفسك جديد**\n**الاسم:** ${name}\n**Discord:** ${discord}\n**السبب:** ${reason}\n\n⚠️ الدعم الفني يمكنه قبول أو رفض الطلب`
  };

  fetch(webhookURL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }).then(() => {
    msg.style.color = "lightgreen";
    msg.textContent = "✅ تم إرسال طلبك، سيتم المراجعة";
    document.getElementById("name").value = "";
    document.getElementById("discord").value = "";
    document.getElementById("reason").value = "";
  }).catch(() => {
    msg.style.color = "red";
    msg.textContent = "❌ حدث خطأ حاول مرة أخرى";
  });
}
