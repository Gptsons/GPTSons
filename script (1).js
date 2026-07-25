function send(){
  let input=document.getElementById("input");
  let msg=input.value;

  if(msg==="") return;

  let messages=document.getElementById("messages");
  messages.innerHTML += "<p><b>आप:</b> "+msg+"</p>";

  let reply="माफ़ कीजिए, मैं अभी विकास के चरण में हूँ।";

  if(msg.includes("नमस्ते")){
    reply="नमस्ते! मैं GPTSon's हूँ।";
  }

  messages.innerHTML += "<p><b>GPTSon's:</b> "+reply+"</p>";

  input.value="";
}