const modal = document.getElementById("modal");
const abrir = document.getElementById("abrirModal");
const cerrar = document.getElementById("cerrarModal");

abrir.onclick = () => modal.style.display = "block";
cerrar.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};