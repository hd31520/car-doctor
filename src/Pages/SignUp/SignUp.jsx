import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
           
          })
          .catch((error) => {
            console.log(error);
          });

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-12  w-1/2">

                        <img src={img} alt="" />
                    </div>
                    <div className="cardflex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSignUp}>
                            <h1 className="text-5xl text-center font-bold">SignUp  now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">

                                <input type="submit" className="btn btn-primary bg-[#FF3811]" value="SignUp" />
                            </div>

                        </form>
                        <div className='my-4 text-center'>
                            <p>Already have an account  Please <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;