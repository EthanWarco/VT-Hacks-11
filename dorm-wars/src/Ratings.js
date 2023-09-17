import './Ratings.css';
import { useState } from 'react';


export default function Ratings() {
    const [formData, setFormData] = useState({
        userName: '',
        dormName: '',
        body: 'I\'m a rapper',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitReview = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/review", {
            method: "post",
            headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Ratings</h1>
            <ul>
                <li>Ambler Johnston (East)                               </li>
                <li>Ambler Johnston (West)                               </li>
                <li>Campbell (Main)                                      </li>
                <li>Campbell (East)                                      </li>
                <li>Cochrane                                             </li>
                <li>The Creativity and Innovation District Residence Hall</li>
                <li>Eggleston (East)                                     </li>
                <li>Eggleston (Main)                                     </li>
                <li>Eggleston (West)                                     </li>
                <li>Graduate Life Center at Donaldson Brown              </li>
                <li>Harper                                               </li>
                <li>Hillcrest                                            </li>
                <li>Hoge Hall                                            </li>
                <li>Johnson                                              </li>
                <li>Miles                                                </li>
                <li>New Hall West                                        </li>
                <li>New Residence Hall East                              </li>
                <li>Newman                                               </li>
                <li>O'Shaughnessy Hall                                   </li>
                <li>Payne                                                </li>
                <li>Pearson Hall East                                    </li>
                <li>Pearson Hall West                                    </li>
                <li>Peddrew-Yates                                        </li>
                <li>Pritchard                                            </li>
                <li>Slusher Hall                                         </li>
                <li>Upper Quad Hall North                                </li>
                <li>Vawter                                               </li>
                <li>Whitehurst Hall                                      </li>
            </ul>
            <div class="area">
                <h2>Submit Review</h2>
                <form onSubmit={submitReview}>
                    <input name="dormName" onChange={handleInputChange} style={{ width: 600 }} placeholder="Name of the Dorm" />
                    <input name="userName" onChange={handleInputChange} style={{ width: 600 }} placeholder="First and Last Name" />
                    <input name="body" onChange={handleInputChange} style={{ height: 200, width: 600 }} placeholder="Enter upto 500 words" />
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    );
}