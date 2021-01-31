import React, { Component } from 'react';
import BlogImage from '../blogimage.png'
import "../App.css"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import SinglePost from './SinglePost';

export class Home extends Component {
   render() {
      <Router><Route path='/post' component={SinglePost}></Route></Router>
      return (
         <div className='mt-4 '>


            {/* Puoular post Section  */}
            <h2 className='text-warning text-uppercase adfadf '>Popular Post</h2>
            <div className='row'>
               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                        </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                        </p>
                        <Link to='/post'><button className='btn btn-info btn-md'>Read More</button></Link>
                     </div>
                  </div>
               </div>

               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                        </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                        </p>
                        <Link to='/post'><button className='btn btn-info btn-md'>Read More</button></Link>
                     </div>
                  </div>
               </div>

               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                        </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                        </p>
                        <Link to='/post'><button className='btn btn-info btn-md'>Read More</button></Link>
                     </div>
                  </div>
               </div>

               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                     </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                     </p>
                        <Link to='/post'><button className='btn btn-info btn-md'>Read More</button></Link>
                     </div>
                  </div>
               </div>
            </div>
            {/* End of Pupular post section  */}



            {/* feature post section  */}
            <h2 className='text-warning text-uppercase adfadf'>Feature Post</h2>
            <div className='row'>
               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                     </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                     </p>
                        <button className='btn btn-info btn-md'>Read More</button>
                     </div>
                  </div>
               </div>

               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                     </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                     </p>
                        <button className='btn btn-info btn-md'>Read More</button>
                     </div>
                  </div>
               </div>

               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                     </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                     </p>
                        <button className='btn btn-info btn-md'>Read More</button>
                     </div>
                  </div>
               </div>

               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                     </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                     </p>
                        <button className='btn btn-info btn-md'>Read More</button>
                     </div>
                  </div>
               </div>
            </div>
            {/* feature post section end here  */}



            <h2 className='text-warning text-uppercase adfadf'>Top Rated Post</h2>
            <div className='row'>
               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                     </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                     </p>
                        <button className='btn btn-info btn-md'>Read More</button>
                     </div>
                  </div>
               </div>

               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                     </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                     </p>
                        <button className='btn btn-info btn-md'>Read More</button>
                     </div>
                  </div>
               </div>

               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                     </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                     </p>
                        <button className='btn btn-info btn-md'>Read More</button>
                     </div>
                  </div>
               </div>

               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                     </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                     </p>
                        <button className='btn btn-info btn-md'>Read More</button>
                     </div>
                  </div>
               </div>
            </div>
            {/* Top reated top section end here  */}






            <h2 className='text-warning text-uppercase adfadf'>Most Viewed Post</h2>
            <div className='row'>
               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                     </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                     </p>
                        <button className='btn btn-info btn-md'>Read More</button>
                     </div>
                  </div>
               </div>

               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                     </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                     </p>
                        <button className='btn btn-info btn-md'>Read More</button>
                     </div>
                  </div>
               </div>

               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                     </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                     </p>
                        <button className='btn btn-info btn-md'>Read More</button>
                     </div>
                  </div>
               </div>

               {/* This is one card  */}
               <div className='card-gorup col-lg-3 col-md-6 col-sm-12 mt-2'>
                  <div className='card'>
                     <img className='card-img-top imageHeight' src={BlogImage} alt='Card'></img>
                     <div className='card-body'>
                        <h4 className='text-secondary mt-1'>
                           This is card header
                     </h4>
                        <p className='text-secondary mt-2'>
                           This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame
                     </p>
                        <button className='btn btn-info btn-md'>Read More</button>
                     </div>
                  </div>
               </div>

            </div>
            {/* This is one card  */}


         </div>
      )
   }
}

export default Home
