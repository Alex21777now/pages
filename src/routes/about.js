import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

class About extends React.Component {
  render() {
     return (
       <div className="wrapper">
       <h1>About</h1>
       <h4>
       Как построить дом мечты без ошибок
Процесс строительства дома включает в себя много нюансов. Может показаться, что их множество и учесть все невозможно. А всегда хочется, построить дом так, чтобы ни о чем потом не жалеть – не спотыкаться на лестнице, не мерзнуть зимой в попытке сэкономить, не мучатся с неудобной планировкой. Чтобы помочь вам обратить внимание на самые важные моменты, мы собрали ряд рекомендаций, на которые мы рекомендуем обратить внимание при планировании дома и выборе строительной компании.
       <h3>About</h3>
Подготовительный этап
Подготовительный этап к строительству дома, не менее важен, чем сам процесс его возведения. Ошибки на данном этапе могут повлиять на комфортность вашего будущего дома, планировке участка. Избежать многих ошибок вам поможет опыт наших консультантов и профильных специалистов EuroHouse.
       <h3>About</h3>
Выбор земельного участка
В компании по продаже земельных участков не всегда есть корректная информация об подведённых инженерных коммуникациях. Важно уточнять эти моменты как можно ранее.
       <h3>About</h3>
и положиться на ее опыт. Так как строительство дома процесс комплексный и многогранный. А исправление допущенных ошибок зачастую дорогостоящий вопрос.
       </h4>
       </div>
     );
  }
}

export default About;
