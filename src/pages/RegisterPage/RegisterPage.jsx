import { useDispatch } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { register } from '../../redux/auth/operations';
import toast, { Toaster } from 'react-hot-toast';

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const toastOptions = {
    duration: 3000,
    position: 'top-right',
  };

  const toasts = {
    success: () =>
      toast.success('Registered successfully! Welcome', toastOptions),
    fail: () =>
      toast.error(
        "Sorry! Try again later!",
        toastOptions
      ),
  };

  const handleSignup = signupData => {
    dispatch(
      register({
        name: signupData.name,
        email: signupData.email,
        password: signupData.password,
      })
    )
      .unwrap()
      .then(() => toasts.success())
      .catch(() => toasts.fail());
  };

  return (
    <div>
      <RegistrationForm onSubmit={handleSignup} />
      <Toaster />
    </div>
  );
}