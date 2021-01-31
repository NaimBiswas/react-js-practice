import React, { Component } from 'react'
import '../App.css'
import Image from '../blogimage.png'
export class SinglePost extends Component {
   render() {
      return (
         <div className='text-secondary'>
            <div className='row'>
               {/* Left Side Bar  */}
               <div className='col-lg-8'>
                  <h2 className='text-warning text-uppercase  adfadf'>Post Deatils</h2>
                  {/* Post Image  */}
                  <img className='ImageResponsive' src={Image} alt='Poster' />
                  {/* Post Title  */}
                  <h2 className='mt-4'>This is Your Post Title area</h2>
                  <p>
                     This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description This is our post description
                  </p>
                  {/* Post Tag Here  */}
                  <h2 className='text-warning text-uppercase mt-4'>#Tags</h2>
                  <div className='d-flex'>
                     <span className='bagde bg-danger text-white pl-2 pr-2 pt-1 pb-1 m-1'>Laravel</span>
                     <span className='bagde bg-info text-white pl-2 pr-2 pt-1 pb-1 m-1'>React</span>
                     <span className='bagde bg-success text-white pl-2 pr-2 pt-1 pb-1 m-1'>Vue</span>
                     <span className='bagde bg-warning text-white pl-2 pr-2 pt-1 pb-1 m-1'>Html</span>
                     <span className='bagde bg-secondary text-white pl-2 pr-2 pt-1 pb-1 m-1'>Css</span>
                     <span className='bagde bg-success text-white pl-2 pr-2 pt-1 pb-1 m-1'>Javascript</span>
                     <span className='bagde bg-info text-white pl-2 pr-2 pt-1 pb-1 m-1'>Router</span>
                  </div>
                  {/* Realeted Post Here  */}
                  <h2 className='text-warning text-uppercase mt-4 adfadf'>Recomended For You</h2>
                  <div className='row'>
                     {/* This is one card  */}
                     <div className='card-gorup col-lg-6 col-md-6 col-sm-12 mt-2'>
                        <div className='card'>
                           <img className='card-img-top imageHeight' src={Image} alt='Card'></img>
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
                     <div className='card-gorup col-lg-6 col-md-6 col-sm-12 mt-2'>
                        <div className='card'>
                           <img className='card-img-top imageHeight' src={Image} alt='Card'></img>
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
                     <div className='card-gorup col-lg-6 col-md-6 col-sm-12 mt-2'>
                        <div className='card'>
                           <img className='card-img-top imageHeight' src={Image} alt='Card'></img>
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
                     <div className='card-gorup col-lg-6 col-md-6 col-sm-12 mt-2'>
                        <div className='card'>
                           <img className='card-img-top imageHeight' src={Image} alt='Card'></img>
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
                  {/* End of Pupular post section  */}
               </div>
               {/* Right Side Bar  */}
               <div className='col-lg-4'>
                  {/* Seacrch Option  */}
                  <div className='row'>
                     <h2 className='text-warning text-uppercase mt-4 adfadf '>Search</h2>
                     <input type='text' className='form-control col-lg-9' placeholder='Seacrch....'></input>
                     <button className='col-lg-3 btn btn-outline-danger btn-md'>Search</button>
                  </div>
                  {/* Category Here  */}
                  <h2 className='text-warning text-uppercase mt-4 adfadf '>Categories</h2>
                  <ul className='UlSyle'>
                     <li className=' text-info h6 blod pl-4 pt-2 pb-2 text-uppercase LISYYLE'>
                        Larave 8
                     </li>
                     <li className=' text-info h6 blod pl-4 pt-2 pb-2 text-uppercase LISYYLE'>
                        React v19.0
                     </li>
                     <li className=' text-info h6 blod pl-4 pt-2 pb-2 text-uppercase LISYYLE'>
                        Vuejs 3
                     </li>
                     <li className=' text-info h6 blod pl-4 pt-2 pb-2 text-uppercase LISYYLE'>
                        Javascript ES6
                     </li>
                     <li className=' text-info h6 blod pl-4 pt-2 pb-2 text-uppercase LISYYLE'>
                        HTML5
                     </li>
                     <li className=' text-info h6 blod pl-4 pt-2 pb-2 text-uppercase LISYYLE'>
                        CSS4
                     </li>
                     <li className=' text-info h6 blod pl-4 pt-2 pb-2 text-uppercase LISYYLE'>
                        Bootstrap 5
                     </li>
                  </ul>

                  {/* # tag Area Start Here  */}
                  <h2 className='text-warning text-uppercase mt-4 adfadf '>#Tags</h2>
                  <ul className='UlSyle'>
                     <li className=' text-info h6 blod pl-4 pt-2 pb-2 text-uppercase LISYYLE'>
                        Larave 8
                        </li>
                     <li className=' text-info h6 blod pl-4 pt-2 pb-2 text-uppercase LISYYLE'>
                        React v19.0
                        </li>
                     <li className=' text-info h6 blod pl-4 pt-2 pb-2 text-uppercase LISYYLE'>
                        Vuejs 3
                        </li>
                     <li className=' text-info h6 blod pl-4 pt-2 pb-2 text-uppercase LISYYLE'>
                        Javascript ES6
                        </li>
                     <li className=' text-info h6 blod pl-4 pt-2 pb-2 text-uppercase LISYYLE'>
                        HTML5
                        </li>
                     <li className=' text-info h6 blod pl-4 pt-2 pb-2 text-uppercase LISYYLE'>
                        CSS4
                        </li>
                     <li className=' text-info h6 blod pl-4 pt-2 pb-2 text-uppercase LISYYLE'>
                        Bootstrap 5
                        </li>
                  </ul>

                  {/* Some Popular post  */}
                  <h2 className='text-warning text-uppercase mt-4 adfadf '>Popular Post Title</h2>
                  <ul className='UlSyle'>
                     <li className=' h6 blod pl-4 pt-2 pb-2 POstLISYYLE'>
                        This is your some popular post title
                           </li>
                     <li className=' h6 blod pl-4 pt-2 pb-2 POstLISYYLE'>
                        This is your some popular post title
                           </li>

                     <li className=' h6 blod pl-4 pt-2 pb-2 POstLISYYLE'>
                        This is your some popular post title
                           </li>
                     <li className=' h6 blod pl-4 pt-2 pb-2 POstLISYYLE'>
                        This is your some popular post title
                           </li>
                     <li className=' h6 blod pl-4 pt-2 pb-2 POstLISYYLE'>
                        This is your some popular post title
                           </li>
                     <li className=' h6 blod pl-4 pt-2 pb-2 POstLISYYLE'>
                        This is your some popular post title
                           </li>
                     <li className=' h6 blod pl-4 pt-2 pb-2 POstLISYYLE'>
                        This is your some popular post title
                           </li>
                     <li className=' h6 blod pl-4 pt-2 pb-2 POstLISYYLE'>
                        This is your some popular post title
                           </li>

                     <li className=' h6 blod pl-4 pt-2 pb-2 POstLISYYLE'>
                        This is your some popular post title
                           </li>
                  </ul>
                  {/* Newslater FOrm  */}
                  <h2 className='text-warning text-uppercase mt-4 adfadf '>Newslatter</h2>
                  <table className='table table-bordered'>

                     <thead>
                        <tr>
                           <td>
                              <span className='text-secondary h6'> News Letter </span>
                           </td>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>
                              <form>
                                 <input className='form-control' type='email' placeholder='Enter Your Email For News Latter....' />
                              </form>
                           </td>
                        </tr>
                     </tbody>
                     <tfoot>
                        <tr>
                           <td>
                              <button className='float-right btn btn-outline-success btn-md'>Subscribe</button>
                           </td>
                        </tr>
                     </tfoot>
                  </table>
               </div>
            </div>
         </div>
      )
   }
}

export default SinglePost
