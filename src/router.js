export const getRoute = () => {
const raw = window.location.hash.replace("#", "").trim();
return raw === "" ? "/" : raw;
};
export const navigate = (to) => {
if (!to.startsWith("/")) to = "/" + to;
window.location.hash = to; // changes page without full reload
};