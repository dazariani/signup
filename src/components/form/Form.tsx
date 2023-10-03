import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Container,
  FreeTrialBox,
  FreeTrialBold,
  FormElem,
  Input,
  InputContainer,
  Button,
  FormWhiteContainer,
  Terms,
  TermsLink,
  ErrorMsg,
} from "./form-styles";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    // console.log(data);
  };
  console.log(errors);

  // validation requirements
  const validations = (name: string) => {
    if (name === "Email") {
      return {
        required: { value: true, message: name + " can't be empty" },
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: "Entered value does not match email format",
        },
      };
    }
    return {
      required: { value: true, message: name + " can't be empty" },
    };
  };

  return (
    <Container>
      <FreeTrialBox>
        <FreeTrialBold>Try it free 7 days </FreeTrialBold>
        then $20/mo. thereafter
      </FreeTrialBox>
      <FormWhiteContainer>
        <FormElem onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input
              iserror={errors.firstName?.message}
              placeholder="First Name"
              {...register("firstName", validations("First Name"))}
            />
            {errors.firstName && (
              <ErrorMsg>{errors.firstName?.message}</ErrorMsg>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              iserror={errors.lastName?.message}
              placeholder="Last Name"
              {...register("lastName", validations("Last Name"))}
            />
            {errors.lastName && <ErrorMsg>{errors.lastName?.message}</ErrorMsg>}
          </InputContainer>
          <InputContainer>
            <Input
              iserror={errors.email?.message}
              placeholder="Email Adress"
              {...register("email", validations("Email"))}
            />
            {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
          </InputContainer>
          <InputContainer>
            <Input
              iserror={errors.password?.message}
              placeholder="Password"
              {...register("password", validations("Password"))}
            />
            {errors.password && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
          </InputContainer>
          <Button>CLAIM YOUR FREE TRIAL</Button>
          <Terms>
            By clicking the button, you are agreeing to our
            <TermsLink href="#"> Terms and Services</TermsLink>
          </Terms>
        </FormElem>
      </FormWhiteContainer>
    </Container>
  );
}

export default Form;
