/** Notice: Do not use InputGroupAddon, style conflicts with scss
 *  Use div with className instead
 */

import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  Container,
  Col,
  Card,
  CardBody,
  Form,
  Input,
  InputGroup,
  Row
} from "reactstrap";
import Modal from "../../../components/Modal/";
import axios from "axios";
import config from "../../../config";

// TODO: add form validation

const Register: React.FC = () => {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isPasswordValid: false,
    role: "",
    isRegisteredSucessful: false
  });

  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    body: ""
  });

  const toggleHandler = () => {
    const prevModal = { ...modal };
    setModal({ ...prevModal, isOpen: !prevModal.isOpen });
  };

  const registerHandler = async () => {
    try {
      // TODO: fix password validation
      validatePassword();

      const response = await axios.post(
        `${config.BACKEND_HOST_URL}/api/v1/auth/register`,
        register,
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      if (response) {
        console.log(response);
        setSubmitted(true);
      }
    } catch (error) {
      console.log(error);
      const errorvalue = error.response.data.message[0].value;
      setModal({
        isOpen: true,
        title: "Error Message",
        body: errorvalue
      });
    }
  };

  const inputHandler = (e: any) => {
    e.preventDefault();
    const prevRegister = { ...register };
    const { name, value } = e.target;
    setRegister({ ...prevRegister, [name]: value, role: "USER" });
  };

  const validatePassword = () => {
    if (register.password !== register.confirmPassword) {
      setRegister({ ...register, isPasswordValid: false });
    }
    setRegister({ ...register, isPasswordValid: true });
  };

  const inputsProps: any = [
    {
      id: 1,
      group: {
        className: "mb-3"
      },
      icon: {
        className: "icon-user"
      },
      input: {
        type: "text",
        placeholder: "Nombre de usuario",
        name: "username"
      }
    },
    {
      id: 2,
      group: {
        className: "mb-3"
      },
      icon: {
        className: "fa fa-envelope-o"
      },
      input: {
        type: "email",
        placeholder: "Correo electrónico",
        name: "email"
      }
    },
    {
      id: 3,
      group: {
        className: "mb-3"
      },
      icon: {
        className: "icon-lock"
      },
      input: {
        type: "password",
        placeholder: "Contraseña",
        name: "password"
      }
    },
    {
      id: 4,
      group: {
        className: "mb-3"
      },
      icon: {
        className: "icon-lock"
      },
      input: {
        type: "password",
        placeholder: "Repetir contraseña",
        name: "confirmPassword"
      }
    }
  ];

  const inputs = inputsProps.map((input: any) => {
    return (
      <InputGroup key={input.id} className={input.group.className}>
        <div className="input-group-addon">
          <i className={input.icon.className} />
        </div>
        <Input
          type={input.input.type}
          placeholder={input.input.placeholder}
          onChange={inputHandler}
          name={input.input.name}
        />
      </InputGroup>
    );
  });

  let redirect: any = null;

  if (isSubmitted) {
    redirect = <Redirect to="/dashboard" />;
  }

  return (
    <div className="app flex-row align-items-center">
      {redirect}
      <Container>
        <Form onSubmit={registerHandler}>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <h1>Regístrate</h1>
                  <p className="text-muted">Crea tu cuenta</p>
                  {inputs}
                  <Button color="primary" block>
                    Crear Cuenta
                  </Button>
                  <Modal {...modal} toggleHandler={toggleHandler} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
