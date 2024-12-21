import { useForm } from "react-hook-form";
// import axios from "axios";
import toast from "react-hot-toast";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            usernameOrEmailOrPhone: data.usernameOrEmailOrPhone, // Accept username, email, or phone number
            password: data.password,
        };

        // Make an API request for login
        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    // Successful login
                    toast.success('Successfully logged in!');
                    document.getElementById("my_modal_3").close();

                    setTimeout(() => {
                        window.location.reload(); // Refresh the page
                        localStorage.setItem("Users", JSON.stringify(res.data.user)); // Save user data to localStorage
                    }, 1000);
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Login Error: " + err.response.data.message);
                }
            });
    };

    return (
        <>
            {/* Login Modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close Button */}
                        <div
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-lg colorChange">Login</h3>
                        <br />

                        {/* Username/Email/Phone */}
                        <div className="mt-4 space-y-2">
                            <label>Username / Email / Phone</label>
                            <br />
                            <input
                                {...register("usernameOrEmailOrPhone", { required: true })}
                                type="text"
                                placeholder="Enter username, email, or phone"
                                className="w-80 px-3 border rounded-md outline-none p-3"
                            />
                            <br />
                            {errors.usernameOrEmailOrPhone && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className="mt-4 space-y-2">
                            <label>Password</label>
                            <br />
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 border rounded-md outline-none p-3"
                            />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="btnChange text-white rounded-md px-4 py-2 duration-200 w-full border:none mt-4"
                        >
                            Login
                        </button>
                    </form>

                    {/* Signup Link */}
                    <div className="mt-4 text-gray-600">
                        <span>
                            Not registered?{" "}
                            <a
                                href="/signup"
                                className="underline text-blue-500 cursor-pointer"
                                onClick={() => document.getElementById("my_modal_3").close()}
                            >
                                Signup
                            </a>
                        </span>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default Login;
