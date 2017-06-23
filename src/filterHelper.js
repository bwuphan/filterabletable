const filterHelper = (data, query) => {
  return data.reduce((newData, current) => {
    console.log('first name', current.first_name);
    console.log(query);
    if (current.id.toString().includes(query) || current.first_name.toLowerCase().includes(query) || current.last_name.toLowerCase().includes(query) || current.email.toLowerCase().includes(query) || current.gender.toLowerCase().includes(query) || current.ip_address.includes(query)) {
      newData.push(current);
    }
    return newData;
  }, []);
}

export default filterHelper;