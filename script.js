const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    trafficLightEl1.removeEventListener('click', makeGreen);
    trafficLightEl1.addEventListener('click', makeYellow);
    trafficLightEl2.removeEventListener('click', makeGreen);
    trafficLightEl2.addEventListener('click', makeYellow);
    trafficLightEl3.removeEventListener('click', makeGreen);
    trafficLightEl3.addEventListener('click', makeYellow);
}

trafficLightEl1.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl3.style.background = ('black');
    trafficLightEl1.removeEventListener('click', makeYellow);
    trafficLightEl1.addEventListener('click', makeRed);
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl2.addEventListener('click', makeRed);
    trafficLightEl3.removeEventListener('click', makeYellow);
    trafficLightEl3.addEventListener('click', makeRed);
}

trafficLightEl2.addEventListener('click', makeYellow);

function makeRed() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('red');
    trafficLightEl1.removeEventListener('click', makeRed);
    trafficLightEl1.addEventListener('click', makeGreen);
    trafficLightEl2.removeEventListener('click', makeRed);
    trafficLightEl2.addEventListener('click', makeGreen);
    trafficLightEl3.removeEventListener('click', makeRed);
    trafficLightEl3.addEventListener('click', makeGreen);
}

trafficLightEl3.addEventListener('click', makeRed);

// Интерфейс для управления светофором
class TrafficLight {
    switchToGreen() {}
    switchToYellow() {}
    switchToRed() {}
  }
  
  // Класс, реализующий интерфейс TrafficLight
  class SimpleTrafficLight extends TrafficLight {
    switchToGreen() {
        this.currentColor = 'green';  // логика переключения на зеленый цвет
    }
  
    switchToYellow() {
        this.currentColor = 'yellow';  // логика переключения на желтый цвет
    }
  
    switchToRed() {
        this.currentColor = 'red';  // логика переключения на красный цвет
    }
  }
  
  // Класс для управления отображением светофора
  class TrafficLightUI {
    constructor(trafficLight) {
      this.trafficLight = trafficLight;
    }
  
    displayGreen() {
      this.trafficLight.switchToGreen();
      // отобразить зеленый цвет
    }
  
    displayYellow() {
      this.trafficLight.switchToYellow();
      // отобразить желтый цвет
    }
  
    displayRed() {
      this.trafficLight.switchToRed();
      // отобразить красный цвет
    }
  }
  
  // Использование
  const simpleTrafficLight = new SimpleTrafficLight();
  const trafficLightUI = new TrafficLightUI(simpleTrafficLight);
  
  // отобразить зеленый цвет
  trafficLightUI.displayGreen();
  
  // отобразить желтый цвет
  trafficLightUI.displayYellow();
  
  // отобразить красный цвет
  trafficLightUI.displayRed();