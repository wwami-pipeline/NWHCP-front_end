export function validateWebsite(website) {
  let w = ""
  if (website.startsWith("http://") || website.startsWith("https://")) {
    w = website;
  } else if (website.includes(".")) {
    w = "https://" + website;
  }
  if (isValidUrl(w)) {
    return w
  } else {
    return ""
  }
}

export function validateWebsiteWithVersion(websiteArr) {
  if (websiteArr.length) {
    const found = websiteArr.find((e) => validateWebsite(e) !== "");
    if (found) {
      return validateWebsite(found);
    }
  }
  return ""
}

const isValidUrl = urlString =>{
      var inputElement = document.createElement('input');
      inputElement.type = 'url';
      inputElement.value = urlString;

      if (!inputElement.checkValidity()) {
        return false;
      } else {
        return true;
      }
} 