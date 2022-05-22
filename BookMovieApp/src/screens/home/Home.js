import React, {Component} from "react";
import Header from "../../common/header/Header";
import "./Home.css";

class Home extends Component{
    render(){
        return ( 
            <React.Fragment>
                <Header /> 
                <main>
                    <div class="headline">
                    <img src="./images/logo-name.png" alt=""></img>
                </div>
                    <section class="main-section">
                    <article class="now-showing-movie">
                        <div class="showing-movie-poster">
                        <div class="position-relative">
                    </div>
                    <div class="movie-detail text-center">
                        <span><span class="mov-name-like"></span> <br/> </span> <span><span class="mov-name-like">The Godfather</span><br/><span></span></span>
                    </div>
                        </div>
                        <div class="showing-movie-poster">
                    <div class="position-relative">
                        </div>
                        <div class="movie-detail text-center">
                        <span><span class="mov-name-like"></span> <br/> </span> <span><span class="mov-name-like">Mile22</span><br/></span>
                        </div>
                        </div>
                        <div class="showing-movie-poster">
                        <div class="position-relative">

                        </div>
                        <div class="movie-detail text-center">
                            <span><span class="mov-name-like"></span></span> <span><span class="mov-name-like">The Revenant</span><br/></span>
                        </div>
                        </div>
                        <div class="showing-movie-poster">
                        <div class="position-relative">
                            </div>
                            <div class="movie-detail text-center">
                            <span><span class="mov-name-like"></span> </span> <span><span class="mov-name-like">The Irishman</span><br/></span>
                            </div>
                        </div>

                        <div class="showing-movie-poster">
                        <div class="position-relative">
                            </div>
                            <div class="movie-detail text-center">
                            <span class="mov-name-like"></span> <span><span class="mov-name-like">Ad Astra</span></span>
                        </div>
                    </div>

                    <div class="showing-movie-poster">
                        <div class="position-relative">
                        </div>
                        <div class="movie-detail text-center">
                        <span><span class="mov-name-like"></span> <span><span class="mov-name-like">The Nun</span></span></span>
                        </div>
                    </div>
                    </article>
                    </section>
                    <div class="find-movies text-left">
                    <fieldset>
                        Find Movies By: <br/><br/>
                    <input type="text" id="mname" name="mname" placeholder="Movie Name"></input><br/>
                    <form><br/>
                        <input list="genre-list" name="genre-list" placeholder="Genre"></input>
                        <datalist id="genres">
                        <option value="gname-1"/>
                        <option value="gname-2"/>
                        <option value="gname-3"/>
                        <option value="gname-4"/>
                        <option value="gname-5"/>
                        </datalist>
                    </form>
                    <form><br/>
                        <input list="artist-list" name="artist-list" placeholder="Artists"></input>
                        <datalist id="artists">
                        <option value="aname-1"/>
                        <option value="aname-2"/>
                        <option value="aname-3"/>
                        <option value="aname-4"/>
                        <option value="aname-5"/>
                        </datalist>
                    </form>
                    </fieldset>
                </div>
                    <main/>
                </main>   
            </React.Fragment>
         );
    }
}
export default Home;