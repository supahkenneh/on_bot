
function generateGif() {
  const gifArr = ['https://media.giphy.com/media/xT1R9XiB7hOojEDUtO/giphy.gif', 'https://media.giphy.com/media/xUNda5mOh1WQd2wTni/giphy.gif', 'https://media.giphy.com/media/3o6nUTaZ1HHjw9gGRO/giphy.gif', 'https://media.giphy.com/media/xUNd9Y39ViPnSFDdRu/giphy.gif', 'https://media.giphy.com/media/3o6nUYcCO2Qhw2GIGk/giphy.gif', 'https://media.giphy.com/media/3o6nVbhKCTKdYZqnVm/giphy.gif', 'https://media.giphy.com/media/26n8D951WqjomN55u/giphy.gif', 'https://media.giphy.com/media/QM0T3K6K8Q5yg/giphy.gif']
  let randomIndex = Math.floor(Math.random() * gifArr.length);
  return gifArr[randomIndex];
};

module.exports = generateGif