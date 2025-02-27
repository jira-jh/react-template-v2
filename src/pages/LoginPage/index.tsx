import { Formik } from "formik"
import { TextField, Button, Divider, FormHelperText } from "@mui/material";
import * as Yup from "yup";
import FadeIn from 'react-fade-in'
import { useNavigate } from "../../hooks/navigate/useNavigate";
import { errorNotification, closeSwal, loadingScreen } from "../../services/sweetalert2.service";
import { useDispatch } from "react-redux";
import { RiAdminFill } from "react-icons/ri";

interface ILoginPage {
  username: string;
  password: string;
}

function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values: ILoginPage) => {
    try {
      loadingScreen()
      console.log('values -> ', values)
      setTimeout(() => {
        closeSwal()
        navigate('/dashboard')
      }, 1000);
    } catch (error: any) {
      errorNotification('error', error.message)
    }
  };


  return (
    <div>
      <FadeIn >
        <div className="flex items-center justify-center h-screen ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={false}
            onSubmit={onSubmit}
          >
            {({ handleSubmit, errors, values, handleChange }) => (
              <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 rounded-xl shadow-md bg-white">
                <div className="flex justify-center"><RiAdminFill className="text-4xl text-center text-primary" /></div>
                <p className="font-normal text-2xl text-center">Welcome</p>
                <span
                  className="flex justify-center items-center cursor-pointer text-center"
                  color="foreground"
                >
                  <p className="font-normal text-center">sign in</p>
                </span>
                <br />
                <Divider />
                <br />
                <div className="mb-2 normal">
                  username
                </div>
                <TextField
                  size="small"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  error={errors?.username && errors.username.length > 0 ? true : false}
                  fullWidth
                />
                <div className="h-[25px]">
                  <FormHelperText error>{errors?.username && errors.username}</FormHelperText>
                </div>
                <div className="mb-2 normal">
                  Password
                </div>
                <TextField
                  size="small"
                  type="password"
                  name="password"
                  fullWidth
                  value={values.password}
                  error={errors?.password && errors.password.length > 0 ? true : false}
                  onChange={handleChange}
                />
                <div className="h-[25px]">
                  <FormHelperText error>{errors?.password && errors.password}</FormHelperText>
                </div>
                <Button type="submit" fullWidth >
                  Login
                </Button>
              </form>
            )}
          </Formik>
        </div >
      </FadeIn>
    </div>
  );
}

export default LoginPage