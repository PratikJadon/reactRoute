export default async function getVans() {
  let res = await fetch("/api/vans/");
  res = await res.json();
  return res.vans;
}
