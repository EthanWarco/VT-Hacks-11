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
                <li><button class="">Ambler Johnston (East) </button></li>
                <li><button class="">Ambler Johnston (West)                               </button></li>
                <li><button class="">Campbell (Main)                                      </button></li>
                <li><button class="">Campbell (East)                                      </button></li>
                <li><button class="">Cochrane                                             </button></li>
                <li><button class="">The Creativity and Innovation District Residence Hall</button></li>
                <li><button class="">Eggleston (East)                                     </button></li>
                <li><button class="">Eggleston (Main)                                     </button></li>
                <li><button class="">Eggleston (West)                                     </button></li>
                <li><button class="">Graduate Life Center at Donaldson Brown              </button></li>
                <li><button class="">Harper                                               </button></li>
                <li><button class="">Hillcrest                                            </button></li>
                <li><button class="">Hoge Hall                                            </button></li>
                <li><button class="">Johnson                                              </button></li>
                <li><button class="">Miles                                                </button></li>
                <li><button class="">New Hall West                                        </button></li>
                <li><button class="">New Residence Hall East                              </button></li>
                <li><button class="">Newman                                               </button></li>
                <li><button class="">O'Shaughnessy Hall                                   </button></li>
                <li><button class="">Payne                                                </button></li>
                <li><button class="">Pearson Hall East                                    </button></li>
                <li><button class="">Pearson Hall West                                    </button></li>
                <li><button class="">Peddrew-Yates                                        </button></li>
                <li><button class="">Pritchard Hall                                       </button></li>
                <li><button class="">Slusher Hall                                         </button></li>
                <li><button class="">Upper Quad Hall North                                </button></li>
                <li><button class="">Vawter                                               </button></li>
                <li><button class="">Whitehurst Hall                                      </button></li>
            </ul>
            <div class="area">
                <h2>Submit Review</h2>
                <form onSubmit={submitReview}>
                    <input name="dormName" onChange={handleInputChange} placeholder="Name of the Dorm" />
                    <input name="userName" onChange={handleInputChange} placeholder="First and Last Name" />
                    <input name="body" onChange={handleInputChange} style={{ height: 200 }} placeholder="Enter upto 500 words" />
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    );
}