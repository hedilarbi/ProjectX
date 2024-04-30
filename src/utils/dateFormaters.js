const dateInFormatMMDDYYYY = (date) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("fr-FR", options);
};

const timeInFormatHHMM = (date) => {
  const options = { hour: "numeric", minute: "numeric" };
  return date.toLocaleTimeString("fr-FR", options);
};

export { dateInFormatMMDDYYYY, timeInFormatHHMM };
