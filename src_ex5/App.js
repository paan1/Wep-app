import './App.css';
import ListMenu from './components/ListMenu';



function App() {

  const food = [ {
    "type": "อาหารคาว",
    "name": "ข้าวผัด",
    "img": "https://almocooking.com/wp-content/uploads/2019/11/%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%88%E0%B8%B5%E0%B8%994.jpg",
    "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lacinia ipsum nec tristique. Fusce a urna neque. Phasellus pellentesque lacinia justo, quis laoreet diam interdum ut. In congue lacus non neque molestie scelerisque. Vestibulum imperdiet, magna nec ornare tristique, quam mauris lobortis tellus, et ullamcorper nibh enim et lorem."
  }, {
    "type": "อาหารหวาน",
    "name": "บัวลอย",
    "img": "https://img.kapook.com/u/2022/wanwanat/1079595941.jpg",
    "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lacinia ipsum nec tristique. Fusce a urna neque. Phasellus pellentesque lacinia justo, quis laoreet diam interdum ut. In congue lacus non neque molestie scelerisque. Vestibulum imperdiet, magna nec ornare tristique, quam mauris lobortis tellus, et ullamcorper nibh enim et lorem."
  }
]

  return (
    <div className="App">
       <h1 className="header">โหวตอาหาร</h1>

      <div className='menu-container'>
        <ListMenu data={food}/>

      </div>
    </div>
  );
}

export default App;