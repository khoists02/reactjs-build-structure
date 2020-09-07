export const getFullName = (object) => {
  if (!itemObject) {
    return '';
  }

  const firstName = itemObject.firstName || itemObject[firstNameProp];
  const lastName = itemObject.lastName || itemObject[lastNameProp];
  const middleName = itemObject.middleName || '';

  const parts = [];
  if (firstName) {
    parts.push(firstName);
  }

  if (middleName) {
    parts.push(middleName);
  }

  if (lastName) {
    parts.push(lastName);
  }

  return parts.join(' ');
}

export const join = (array, separator = ',') => {
  const condensedArray = array.filter((item) => {
    if (typeof item === 'string' && item.trim().length === 0) {
      return false;
    }

    if (item == null) {
      return false;
    }

    return true;
  });

  return condensedArray.join(separator);
};

export const split = (text, separator = ',') => {
  if (!text) {
    return [];
  }

  let parts = text.split(separator);
  parts = parts.map((part) => part.trim());

  const results = parts.filter((part) => part.length > 0);
  return results;
};
