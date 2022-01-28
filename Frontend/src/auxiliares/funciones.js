export const sortByAz = (a,b) =>{
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  return 0;
}

export const sortByZa = (a,b) =>{
  if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
  if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
  return 0;
}