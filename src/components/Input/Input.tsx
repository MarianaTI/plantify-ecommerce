import React from "react";
import { Control, useController } from "react-hook-form";
import { ErrorMessage, IconWrapper, InputStyled, InputWrapper, Label } from "./index.style";

/** 
 * Define las propiedades que el componente espera recibir.
*/

interface InputProps {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  control: Control<any>;
  name: string;
  fullWidth?: boolean;
  type?: string;
  defaultValue?: string;
}

/**
 * Definición del componente. Se destructuran las propiedades recibidas por 
 * el componente, asignando valores por defecte a algunas props.
 */

const InputComponent: React.FC<InputProps> = ({
  label,
  icon,
  error,
  control,
  name,
  fullWidth = false,
  type = "text",
  defaultValue = "",
}) => {

  /**
   * Uso de useController para conectar el campo de entrada con el control del 
   * formulario y obtener los estados del campo.
   */

  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    defaultValue,
  });

  return (
    <>
      <Label>{label}</Label>
      <InputWrapper>
        <InputStyled
          {...field}
          fullWidth={fullWidth}
          type={type}
          defaultValue={defaultValue}
        />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default InputComponent;
