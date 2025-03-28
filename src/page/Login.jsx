import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
// import logo from '../assets/logoo.png';
import { Link } from 'react-router-dom';
import { TiArrowRight } from 'react-icons/ti';

const LoginPage = () => {
    
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // React Hook Form setup
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Form submission handler
    const onSubmit = (data) => {
        setLoading(true);
        console.log('Form Submitted:', data);
        setTimeout(() => {
            setLoading(false);
            // toast.success('Login Successful!');
            reset();
            navigate('/');
        }, 2000);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#0148AC] lg:bg-gray-100">
            {/* Toast Notification */}
            <ToastContainer position="top-right" autoClose={2000} />

            {/* Background for large devices */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-gray-100 z-0"></div>
                <div
                    className="absolute top-0 right-0 w-full h-full bg-[#0148AC] z-0"
                    style={{
                        clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)',
                    }}
                ></div>
            </div>

            {/* Login Card with Spring Animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="z-10 px-4 sm:px-6 md:px-0 w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-md"
            >
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                    <div className="text-center mb-6">
                        {/* <img src={logo} alt="M Cash Media" className="w-28 sm:w-32 h-auto mx-auto" /> */}
                        <p className="text-[#0148AC] mt-5 font-heebo font-bold text-xl sm:text-2xl">
                            Sign in to your account
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Email <span className='text-red-500'>*</span></label>
                            <input
                                type="email"
                                placeholder="Email"
                                className={`w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#0148AC] ${errors.email ? 'border-red-500' : ''
                                    }`}
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Invalid email address',
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="mb-4 relative">
                            <label className="block text-gray-700">Password <span className='text-red-500'>*</span></label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                className={`w-full border rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#0148AC] ${errors.password ? 'border-red-500' : ''
                                    }`}
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters',
                                    },
                                })}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-8 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </button>
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right mb-4">
                            <a href="#" className="text-[#0148AC] text-sm hover:underline">
                                Forgot Your Password?
                            </a>
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-Blue hover:bg-Blue-hover text-white font-semibold p-3 rounded-lg transition duration-300 flex items-center justify-center'
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="loader border-t-2 border-white w-6 h-6 rounded-full animate-spin"></div>
                            ) : (
                                <div className='flex items-center gap-1'>
                                    <p>Sign In</p>
                                    <TiArrowRight className="text-xl" />
                                </div>
                            )}
                        </button>

                    </form>

                    {/* Links */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Don't have an account?
                            <span className="text-Blue text-sm font-heebo font-semibold">
                                <Link to="/register"> Sign Up</Link>
                            </span>
                        </p>
                    </div>

                    {/* Support Link */}
                    <div className="text-center mt-4">
                        <a href="#" className="text-[#0148AC] text-sm hover:underline">
                            Need Help? Contact Support
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
