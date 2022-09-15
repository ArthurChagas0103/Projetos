nonce = "8192d84d-91d8-427f-8d38-363d5ee2198a" > (function (w, d) { !function (a, e, t, r) { a.zarazData = a.zarazData || {}; a.zarazData.executed = []; a.zaraz = { deferred: [] }; a.zaraz.q = []; a.zaraz._f = function (e) { return function () { var t = Array.prototype.slice.call(arguments); a.zaraz.q.push({ m: e, a: t }) } }; for (const e of ["track", "set", "ecommerce", "debug"]) a.zaraz[e] = a.zaraz._f(e); a.zaraz.init = () => { var t = e.getElementsByTagName(r)[0], z = e.createElement(r), n = e.getElementsByTagName("title")[0]; n && (a.zarazData.t = e.getElementsByTagName("title")[0].text); a.zarazData.x = Math.random(); a.zarazData.w = a.screen.width; a.zarazData.h = a.screen.height; a.zarazData.j = a.innerHeight; a.zarazData.e = a.innerWidth; a.zarazData.l = a.location.href; a.zarazData.r = e.referrer; a.zarazData.k = a.screen.colorDepth; a.zarazData.n = e.characterSet; a.zarazData.o = (new Date).getTimezoneOffset(); a.zarazData.q = []; for (; a.zaraz.q.length;) { const e = a.zaraz.q.shift(); a.zarazData.q.push(e) } z.defer = !0; for (const e of [localStorage, sessionStorage]) Object.keys(e || {}).filter((a => a.startsWith("_zaraz_"))).forEach((t => { try { a.zarazData["z_" + t.slice(7)] = JSON.parse(e.getItem(t)) } catch { a.zarazData["z_" + t.slice(7)] = e.getItem(t) } })); z.referrerPolicy = "origin"; z.src = "/cdn-cgi/zaraz/s.js?z=" + btoa(encodeURIComponent(JSON.stringify(a.zarazData))); t.parentNode.insertBefore(z, t) };["complete", "interactive"].includes(e.readyState) ? zaraz.init() : a.addEventListener("DOMContentLoaded", zaraz.init) }(w, d, 0, "script"); })(window, document);

function salvar() {
    var txtUser = document.getElementById("txtUser").value;
    var txtPassword = document.getElementById("txtPassword").value;

    if (txtUser == "") {
        return false;
    }
    if (txtPassword == "") {
        return false;
    }

    var select = document.getElementById("selecao").value;
    var user = document.getElementById("selectionUser").value;
    var admin = document.getElementById("selectionAdmin").value;
    var nulo = document.getElementById("selectionNull").value;

    if (select == nulo) {
        alert('Selecione o tipo de login');
    }
    else if (select == user) {
        window.open('telaBranco.html');
    }
    else if (select == admin) {
        window.open('cadastroProduto.html');
    }
}

function mostrarSenha() {
    var input = document.getElementById('txtPassword');
    var check = document.getElementById('checkbox');
    
    if(input.type === "password"){
        input.type = "text"
    }
    else{
        input.type = "password"
    }
}

var loginUser = { usuario: null, senha: null };
var loginAdmin = { usuario: null, senha: null };
console.log(loginUser);
console.log(loginAdmin);

document.getElementById("lblUser").innerHTML = "Usuário";
document.getElementById("lblPassword").innerHTML = "Senha";

document.getElementById("txtUser").placeholder = "Usuário";
document.getElementById("txtPassword").placeholder = "Senha";

document.getElementById("txtUser").style.display = "block";
