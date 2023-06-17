const component = () => {
  const element = document.createElement('div');
  element.innerHTML = 'Webpack is set up';

  return element;
}

document.body.appendChild(component());