// import React, { Component, useState } from 'react';


// // NOTE components
// import LoginRegisterContainer from '../../components/LoginRegisterContainer/LoginRegisterContainer';
// import Message from '../../components/Message/Message';

// // NOTE Internal Module
// import Auth from '../../models/auth';

// const Register = () => {

//     const [ first_name, setFirstName] = useState('');
//     const [ last_name, setLastName ] = useState('');
//     const [ email, setEmail ] = useState('');
//     const [ password, setPassword ] = useState('');
//     const [ password2, setPassword2 ] = useState('');
//     const [ profession, setProfession ] = useState('');

//     const userData = { first_name, last_name,  email, password, password2, profession };
//     console.log(userData);

//     const handleRegister = async ( event ) => {
//         event.preventDefault();

//         try {

//             await Auth.register( userData );
            
//             this.props.history.push('/login');

//         } catch (err) {
//             console.log(err);
//         }
//     };

    
//     return (
//         <LoginRegisterContainer colZise={6} >

//             <div className="card p-3 shadow">

//                 <div className="row">

//                     <div className="form-group col p-2">

//                         <header className="text-center">
//                             create a new account
//                         </header>
                            
//                     </div>

//                 </div>
                    
//                 <form>

//                     {/* row 1 */}
//                     <div className="form-row">

//                         <div className="form-group col">
//                             <input
//                                 className="form-control"
//                                 placeholder="First Name"
//                                 name="first_name"
//                                 onChange={ setFirstName }
//                                 required />
//                         </div>

//                         <div className="form-group col">
//                             <input
//                                 className="form-control"
//                                 placeholder="Last Name"
//                                 type="text"
//                                 name="last_name"
//                                 onChange={ setLastName }
//                                 required/>
//                         </div>

//                         <div className="form-group col">
//                             <input
//                                 className="form-control"
//                                 placeholder="Profession"
//                                 type="text"
//                                 name="profession"
//                                 onChange={ setProfession }
//                                 required/>
//                         </div> 

//                     </div>

//                     {/* row 2 */}
//                     <div className="form-group">
//                         <input
//                             className="form-control"
//                             placeholder="E-mail address"
//                             name="email"
//                             onChange={ setEmail }
//                             required />
                            
//                     </div>

//                     {/* row 3  */}
//                     <div className="form-row">
                            
//                         <div className="form-group col">
//                             <input
//                                 className="form-control"
//                                 placeholder="Password"
//                                 type="password"
//                                 name="password"
//                                 onChange={ setPassword }
//                                 required />

//                         </div>

//                         <div className="form-group col">
//                             <input
//                                 className="form-control"
//                                 placeholder="Confirm Password"
//                                 type="password"
//                                 name="password2"
//                                 onChange={ setPassword2 }
//                                 required/>
//                         </div>

//                     </div>

//                     <button type="submit" className="btn btn-primary btn-block">
//                         Register
//                     </button>
    
//                 </form>

//                 <Message message="Already have an Account?" url="/login" title="Login" />

//             </div>

//         </LoginRegisterContainer>
//     );
    
// };

// export default Register;
