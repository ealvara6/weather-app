import { handleSubmit } from '../weather-api/weather';

const createWeatherForm = () => {
  const element = document.createElement('form');

  const label = document.createElement('label');
  label.setAttribute('for', 'weather');
  label.innerHTML = 'Enter Location';
  element.appendChild(label);

  const input = document.createElement('input');
  input.id = 'weather';
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'weather');
  element.appendChild(input);

  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.innerHTML = 'Submit';
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    handleSubmit(input.value);
  });
  element.appendChild(submit);

  return element;
};

export default createWeatherForm;
