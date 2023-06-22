const handleError = (error, errorMsg) => {
  const tempError = error;
  tempError.innerHTML = errorMsg;
  tempError.className = 'error active';
};

export default handleError;
