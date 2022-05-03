import pizza1 from './pizza/margherita.png';
import pizza2 from './pizza/quattroformaggi.png';
import pizza3 from './pizza/crudo.png';
import pizza4 from './pizza/pugliese.png';
import pizza5 from './pizza/prosciutto.png';
import pizza6 from './pizza/gorgonzola.png';
import pizza7 from './pizza/sarda.png';
import pizza8 from './pizza/diavola.png';
import pizza9 from './pizza/mareemonti.png';
import pizza10 from './pizza/boscaiola.png';
import pizza11 from './pizza/hawaii.png';
import pizza12 from './pizza/gyrospizza.png';



const menuElements = [
    {type: "Margherita", Toppings: ["tomato sauce, ", "mozzarella, ", "oregano "], Size: "32cm", Price: "1250 HUF"},
    {type: "Quattro Formaggi", Toppings: ["tomato sauce, ", "mozzarella, ", "parmesan, ", "gorgonzola cheese, ", "oregano "], Size: "32cm", Price: "1250 HUF"},
    {type: "Crudo", Toppings: ["tomato sauce, ", "mozzarella, ", "oregano, ", "onions "], Size: "32cm", Price: "1250 HUF"},
    {type: "Pugliese", Toppings: ["tomato sauce, ", "mozzarella, ", "oregano "], Size: "32cm", Price: "1250 HUF"},
    {type: "Prosciutto", Toppings: ["tomato sauce, ", "mozzarella, ", "ham, ", "oregano "], Size: "32cm", Price: "1250 HUF"},
    {type: "Gorgonzola", Toppings: ["tomato sauce, ", "mozzarella, ", "gorgonzola, ", "olives "], Size: "32cm", Price: "1250 HUF"},
    {type: "Sarda", Toppings: ["tomato sauce, ", "mozzarella, ", "spicy salami "], Size: "32cm", Price: "1250 HUF"},
    {type: "Diavola", Toppings: ["tomato sauce, ", "mozzarella, ","spicy salami, ", "chilli pepper "], Size: "32cm", Price: "1250 HUF"},
    {type: "Mare e Monti", Toppings: ["tomato sauce, ", "mozzarella, ", "seafood, ", "porcino mushrooms "], Size: "32cm", Price: "1250 HUF"},
    {type: "Boscaiola", Toppings: ["tomato sauce, ", "mozzarella, ", "porcino mushrooms, ", "bacon "], Size: "32cm", Price: "1250 HUF"},
    {type: "Hawaii", Toppings: ["tomato sauce, ", "mozzarella, ", "pineapple, ", "ham "], Size: "32cm", Price: "1250 HUF"},
    {type: "Gyros Pizza", Toppings: ["tomato sauce, ", "gyro meat, ", "garlic, ", "feta cheese, ", "olives "], Size: "32cm", Price: "1250 HUF"}
]

const Menu = () => {
    let index=0;
    return (
    <div id="menu">
        <div id="menuIcons1"></div>
        <div className="sectionTitle2">
            <h1>Menu</h1>
        </div>
        <div id="pizzaContainer">
            { menuElements.map((pizza) => {
                index += 1;
                return (
                    <div className='pizzaCards' key={index}>
                        <div id='cardTop'>
                            <p className="Type">{pizza.type} </p> 
                        </div>
                            <p className="Size">{pizza.Size}</p>
                        <div className='cardContent'>
                            {index === 1 && <img src={pizza1} className="pizzaImg" alt="Pizza" />}
                            {index === 2 && <img src={pizza2} className="pizzaImg" alt="Pizza" />}
                            {index === 3 && <img src={pizza3} className="pizzaImg" alt="Pizza" />}
                            {index === 4 && <img src={pizza4} className="pizzaImg" alt="Pizza" />}
                            {index === 5 && <img src={pizza5} className="pizzaImg" alt="Pizza" />}
                            {index === 6 && <img src={pizza6} className="pizzaImg" alt="Pizza" />}
                            {index === 7 && <img src={pizza7} className="pizzaImg" alt="Pizza" />}
                            {index === 8 && <img src={pizza8} className="pizzaImg" alt="Pizza" />}
                            {index === 9 && <img src={pizza9} className="pizzaImg" alt="Pizza" />}
                            {index === 10 && <img src={pizza10} className="pizzaImg" alt="Pizza" />}
                            {index === 11 && <img src={pizza11} className="pizzaImg" alt="Pizza" />}
                            {index === 12 && <img src={pizza12} className="pizzaImg" alt="Pizza" />}
                            <div className="toppingDiv">
                                <p className="Toppings">{pizza.Toppings}</p>

                            </div>
                            <p className="Price">{pizza.Price}</p>
                        </div>
                        <div id='cardBottom'></div>
                    </div>
                )
            }
            )
            }
        </div>
        <div id="menuIcons2"></div>
      </div>
      );
  }
  
export default Menu