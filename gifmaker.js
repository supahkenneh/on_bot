
function generateGif() {
  const gifArr = ['https://media.giphy.com/media/xT1R9XiB7hOojEDUtO/giphy.gif', 'https://media.giphy.com/media/xUNda5mOh1WQd2wTni/giphy.gif', 'https://media.giphy.com/media/3o6nUTaZ1HHjw9gGRO/giphy.gif', 'https://media.giphy.com/media/xUNd9Y39ViPnSFDdRu/giphy.gif', 'https://media.giphy.com/media/3o6nUYcCO2Qhw2GIGk/giphy.gif', 'https://media.giphy.com/media/3o6nVbhKCTKdYZqnVm/giphy.gif', 'https://media.giphy.com/media/26n8D951WqjomN55u/giphy.gif', 'https://media.giphy.com/media/QM0T3K6K8Q5yg/giphy.gif', 'https://media.giphy.com/media/x1eJuo20LnPag/giphy.gif',
  'https://media.giphy.com/media/QM0T3K6K8Q5yg/giphy.gif', 'https://media.giphy.com/media/YyFPGkqe8Ngt2/giphy.gif', 'https://media.giphy.com/media/6wTZiE0c19Kx2/giphy.gif', 'https://media.giphy.com/media/fQiVS8ixbiERa/giphy.gif', 'https://media.giphy.com/media/3ohjV3X60IUFyrXRm0/giphy.gif', 'https://media.giphy.com/media/xUNd9DokRuhnFaU1Fe/giphy.gif', 'https://media.giphy.com/media/KNHpHnbgdaobS/giphy.gif', 'https://media.giphy.com/media/MpU52wVKhKue4/giphy.gif']
  let randomIndex = Math.floor(Math.random() * gifArr.length);
  return gifArr[randomIndex];
};

module.exports = generateGif