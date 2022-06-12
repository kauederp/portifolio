var data = new Date()
var ano = data.getFullYear();
document.getElementById('year').innerText = ano;

var contatoWhasapp = document.getElementById('li-contatos-1')
var contatoEmail = document.getElementById('li-contatos-2')
var contatoInstagram = document.getElementById('li-contatos-3')

contatoWhasapp.innerHTML = '<i class="text-success bi bi-whatsapp"></i> ' + contatoWhasapp.innerHTML
contatoEmail.innerHTML = '<i class = "bi bi-envelope" ></i> ' + contatoEmail.innerHTML

contatoInstagram.innerHTML = '<i style="color:purple;" class="bi bi-instagram"></i> Instagram: <a href="https://www.instagram.com/k_d.p_/">@k_d.p_</a>' + contatoInstagram.innerHTML