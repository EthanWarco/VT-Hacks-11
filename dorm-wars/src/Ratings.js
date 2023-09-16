import './Ratings.css';

function Ratings() {
    return (
        <div>
            <h1>Ratings</h1>
            <ul>
                <li><button onclick="alert('Submitted.')" class="">Ambler Johnston (East) </button></li>
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
                <li><button class="">Pritchard                                            </button></li>
                <li><button class="">Slusher Hall                                         </button></li>
                <li><button class="">Upper Quad Hall North                                </button></li>
                <li><button class="">Vawter                                               </button></li>
                <li><button class="">Whitehurst Hall                                      </button></li>
            </ul>
            <div class="area">
                <h2>Submit Review</h2>
                <input placeholder="Name of the Dorm" />
                <input placeholder="First and Last Name" />
                <input style={{ height: 200 }} placeholder="Enter upto 500 words" />
                <button type="submit">Submit</button>
            </div>
        </div>
    );
}

export default Ratings;