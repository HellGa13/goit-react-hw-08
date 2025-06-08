import { useDispatch } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import { logIn } from '../../redux/auth/operations';
import toast, { Toaster } from 'react-hot-toast';
import style from "./LoginPage.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();

  const toastOptions = {
    duration: 4000,
    position: 'top-right',
  };

  const toasts = {
    success: () =>
      toast.success('Logged in successfully! Welcome!'),
    fail: () =>
      toast.error(
        "Sorry, we have error:( Try again later!",
        toastOptions
      ),
  };

  const handleSubmit = loginData => {
    dispatch(logIn({ email: loginData.email, password: loginData.password }))
      .unwrap()
      .then(() => toasts.success())
      .catch(() => toasts.fail());
  };

  return (
    <div className={style.cont} >
      <LoginForm onSubmit={handleSubmit} />
      <Toaster />
    </div>
  );
}