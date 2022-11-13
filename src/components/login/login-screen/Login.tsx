import * as React from "react";
import { SyntheticEvent, useState, useEffect } from "react";
// import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/action-thunks/userActions";
import { RootState } from "../../../store";
import { type } from "os";
// import  logo  from "../images/CPaaSLogo.png";
import {useTranslation} from "react-i18next";
import { useNavigate } from "react-router-dom";
// import { useAlert } from "react-alert";
// import styled, { ThemeProvider } from "styled-components"
import {UserState} from "../../../redux/slices/userSlice"

// Importing Material UI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ErrorIcon from '@mui/icons-material/Error';
// Importing Images
import Background from "../../../assets/images/login-bg.png";
import ChartImg from "../../../assets/images/svg/Chart.svg";
import PieChartImg from "../../../assets/images/svg/PieCharts.svg";
import SalesImg from "../../../assets/images/svg/Sales.svg";
import VoiceImg from "../../../assets/images/svg/Voice.svg";
import ChatImg from "../../../assets/images/svg/Chat.svg";
import VideoImg from "../../../assets/images/svg/Video.svg";
import WhatsappImg from "../../../assets/images/svg/Whatsapp.svg";





const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  "color": theme.palette.getContrastText(purple[500]),
  "backgroundColor": purple[500],
  "height": "70px",
  "width": "100%",
  "borderRadius": "35px",
  "mixBlendMode": "luminosity",
  "opacity": 0.5,
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

// const emailValueElement = document.getElementById("username") as HTMLInputElement;
//   const passwordValueElement = document.getElementById("password") as HTMLInputElement;
//   emailValueElement.value='';
//   passwordValueElement.value='';

const Login = () => {
  let navigate = useNavigate();
  // const alert = useAlert();
  const {t, i18n} = useTranslation()
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();
  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  );
  const { userInfo,loading, data, token } = userLogin;
  // const { message, success } = data;

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("token")!== null) {
      navigate('/setpassword')
    }
  }, [data]);

  // let inputs = document.querySelectorAll("input");
  // inputs.forEach((input) => (input.value = null));
  
  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(login(email, password, token));
    setEmail("");
    setPassword("");
    // navigate('/setpassword')

  };

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    // const patternVariable ="(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?|][()-<>/]).{8,}"; //uppercase lowercase symbol and number
    const patternVariable =".{5,}"; 
      const submitButtonElement = document.getElementById("btn-enable-style") as HTMLButtonElement;
    if ((e.target as HTMLInputElement).value.match(patternVariable)) {
      (e.target as HTMLInputElement).className="form-control input-custom is-valid"
      submitButtonElement.className="login-btn btn-enable-style"
      setOpen(false);

    } else {
      (e.target as HTMLInputElement).className="form-control input-custom"
      submitButtonElement.className="login-btn"
      setOpen(true);
    }
  };

  const handleEmailChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const emailVariable =
      ".{5,}";
      // const submitButtonElement = document.getElementById("btn-enable-style") as HTMLInputElement;
    if ((e.target as HTMLInputElement).value.match(emailVariable)) {
      (e.target as HTMLInputElement).className="form-control input-custom is-valid"
      setOpen(false);
    } else {
      (e.target as HTMLInputElement).className="form-control input-custom"
      setOpen(true);
    }
  };

  const eyeToggle = () => {
    // const passwordElement = document.getElementById("password") as HTMLInputElement;
     setPasswordShown(!passwordShown);
  }





  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChanges =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
        <Box className='account__screen'>
        {/* ACCOUNT SCREEN BANNER START*/}
        <picture>
          {" "}
          <source srcSet={Background} type='image/webp' />{" "}
          <source srcSet={Background} type='image/png' />{" "}
          <img src={Background} className='account__screen__banner' alt='' />{" "}
        </picture>
        {/* ACCOUNT SCREEN BANNER END */}
        {/* ACCOUNT SCREEN ANIMATION START */}
        <Box sx={{ flexGrow: 1 }} className='account__form__animation'>
        <div className='floating-wrapper'>
        <div className="floating-wrapper-inner">
        <div className='floating-item floating-item-1'>
          <img src={ChartImg} alt="Chart" />
        </div>
        <div className='floating-item floating-item-2'>
          <img src={PieChartImg} alt="Pie Chart" />
        </div>
        <div className='floating-item floating-item-3'>
          <img src={SalesImg} alt="Sales" />
        </div>
        <div className='floating-item floating-item-4'>
          <img src={VoiceImg} alt="Voice" />
        </div>
        <div className='floating-item floating-item-5'>
 
         <img src={ChatImg} alt="Chat" />

        </div>
        <div className='floating-item floating-item-6'>
          <img src={VideoImg} alt="Video" />
        </div>
        <div className='floating-item floating-item-7'>
           <img src={WhatsappImg} alt="Whatsapp" />
        </div>
        </div>
      </div>
        </Box>
        {/* ACCOUNT SCREEN ANIMATION END */}
        {/* ACCOUNT FORM START */}
        <Box sx={{ flexGrow: 1 }} className='account__form'>
          <div className='form__inner'>
            <Box sx={{ width: 1 }} className='account__form__header'>
              <h3 className='title'>Login</h3>
              <p className='sub__title'>Enter your email ID & password</p>
            </Box>
            <Box sx={{ width: 1 }} className='account__form__error'>
              <p className="error__msg"><ErrorIcon/> Your email id and password do not match. Please try again</p>
            </Box>
            <Box sx={{ flexGrow: 1 }} className='account__form__body'>
              <form action='#' method='post'>
                <Box
                  className='input-wrapper success'
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    position: "relative",
                    width: 1,
                    margin: "20px 0px",
                  }}>
                  <InputLabel htmlFor='username' className='label__icon'>
                    <MailOutlineIcon />
                  </InputLabel>
                  <TextField
                    required
                    id='username'
                    label='Enter your email ID'
                    variant='standard'
                    sx={{ width: 1 }}
                  />
                </Box>

                <Box
                className='input-wrapper password-checkHide success'
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    position: "relative",
                    width: 1,
                    margin: "20px 0px",
                  }}>


                  <InputLabel htmlFor='password' className='label__icon'>
                    <LockOpenIcon />
                  </InputLabel>
                  <TextField
                    required
                    id='password'
                    label='Password'
                    variant='standard'
                    sx={{ width: 1 }}
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChanges('password')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                          className="password-toggle"
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
           
                <Box
                className='input-wrapper password-checkHide'
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    position: "relative",
                    width: 1,
                    margin: "20px 0px",
                  }}>
                   <a href="#" className="forgot-password">Forgot Password ?</a>
                  </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    position: "relative",
                    width: 1,
                    marginTop: '50px',
                  }}>
                  <ColorButton variant='contained' className='customBtn-01 btn-enable-style'>
                    Login
                  </ColorButton>
                </Box>
              </form>
            </Box>
          </div>
        </Box>
        {/* ACCOUNT FROM END */}
      </Box>
    </>
  );
};

export default Login;
