export const sortByAz = (a,b) =>{
  if (a.data.fullname.toLowerCase() > b.data.fullname.toLowerCase()) return 1;
  if (a.data.fullname.toLowerCase() < b.data.fullname.toLowerCase()) return -1;
  return 0;
}

export const sortByZa = (a,b) =>{
  if (a.data.fullname.toLowerCase() < b.data.fullname.toLowerCase()) return 1;
  if (a.data.fullname.toLowerCase() > b.data.fullname.toLowerCase()) return -1;
  return 0;
}