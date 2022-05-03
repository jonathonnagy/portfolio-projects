import { useState } from "react";

let today = new Date();
let nap;
if (today.getDate() < 10) {
    nap = "0" + today.getDate();
}
else {
    nap = today.getDate();
}
let honap;
if ((today.getMonth()) + 1 < 10) {
    honap = "0" + (today.getMonth() + 1);
}
else {
    honap = today.getMonth() + 1;
}
let dateForm = today.getFullYear() + '-' + honap + '-' + nap;

function Form() {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [date, setDate] = useState("yyyy-MM-dd")
    let [time, setTime] = useState("00:00")
    let [person, setPerson] = useState(1)
    const [showForm, setShowForm] = useState('hidden_form')

    console.log("Név: ", name, "E-mail: ", email, "Dátum: ", date, "Idő :", time, "Személyek:", person);
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log("Név: ", name, "E-mail: ", email, "Dátum: ", date, "Idő :", time, "Személyek:", person);

      };
    return (
        <div className="reserve">
            <div className="buttonSec">
                <button id="buttonBooking" onClick={() => {
                    setShowForm('form_show');
                    document.querySelector("#jumpBooking").scrollIntoView({ behavior: 'smooth' });
                }}
                >Booking a Table</button>
            </div>
            <div id="jumpBooking"></div>
            {showForm === 'form_show' &&
                <form id="Form" onSubmit={handleSubmit}>
                    <h2>Reserve a Table</h2>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" required value={name} />

                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required value={email} />

                    <label>Date:
                        <input type="date" value={dateForm} min={dateForm} onChange={(e) => setDate(e.target.value)} required />
                    </label>
                    <label>Time:
                        <input type="time" onChange={(e) => setTime(e.target.value)} required value={time} />
                    </label>
                    <label>Number of person:
                        <input type="number" min="1" max="7" onChange={(e) => setPerson(e.target.value)} required value={person} />
                    </label>
                    <button id="submit" type="submit">Book the table</button>
                </form>
            }
        </div>
    );
}

export default Form