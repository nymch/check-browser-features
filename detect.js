const navigator = window.navigator;

const appendList = (content) => {
  const info = document.getElementById('info');
  let li = document.createElement('li');
  li.textContent = content;
  info.append(li);
}

const detection = (feature) => {
  appendList(`${feature} Detected.`);
}

const main = () => {
  // Referenced From.
  // https://antoinevastel.com/javascript/2020/02/09/detecting-web-bots.html
  navigator.permissions.query({name:'notifications'}).then(function(permissionStatus) {
    if(Notification.permission === 'denied' && permissionStatus.state === 'prompt') {
        detection('HeadlessChrome')	
    }
});
  console.log(navigator.webdriver);
  if(navigator.webdriver){
    detection('WebDriver');
  }
  if(window.callPhantom || window._phantom || window.phantom){
    detection('PhantomJS');
  }
  if(window.__nightmare){
    detection('Nightmare');
  }
  if(document.__selenium_unwrapped || document.__webdriver_evaluate || document.__driver_evaluate){
    detection('Selenium');
  }
  const info = document.getElementById('info');
  console.log(info.childNodes);
  if(info.childNodes.length === 0){
    appendList('You are not automated browser.');
  }
}

main();