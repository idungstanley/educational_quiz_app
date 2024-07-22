
export interface SearchInputProps {
    value: string;
    placeholder: string;
    loading?: boolean | string;
    onChange: (value: string) => void;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    placeholderColor?: string;
}

export interface InputDataTypes {
    label?: string;
    required?: boolean;
    placeholder?: string;
    hint?: string;
    name: string;
    cornerHint?: string;
    type?: string;
    autoComplete?: string;
    value?: string | number;
    leadingIcon?: string | JSX.Element;
    trailingIcon?: string | JSX.Element;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
    trailingClick?: () => void;
    bgColor?: string;
    borderRadius?: string;
    height?: string;
    isBorder?: boolean;
    classes?: string;
    styles?: {
        color: string;
        fontSize?: string;
        fontWeight?: string;
        lineHeight?: string;
    };
    labelClasses?: string;
    width?: string;
    valueAsNumber?: boolean;
    isError?: boolean;
    errorMessage?: string;
    handleSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    selectValue?: string;
}

export type ErrorResponse = {
    data: {
        code: number;
        message: string;
    };
    status: number;
    statusText: string;
};

export interface ISuccessRequest {
    message: string;
}

export interface ButtonProps {
    buttonStyle?: string;
    onClick?: () => void;
    loading?: boolean;
    label?: string | null;
    icon?: string | JSX.Element | React.ReactNode;
    width?: string | number;
    height?: string;
    padding?: string;
    disabled?: boolean;
    iconPosition?: string;
    ringOnFocus?: boolean;
    roundedLeft?: boolean;
    roundedRight?: boolean;
    borderLeft?: boolean;
    borderRight?: boolean;
    loaderColor?: string;
    value?: string | number | readonly string[] | undefined;
    bgColor?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    labelSize?: string;
    customClasses?: string;
}

export interface HamburgerProps {
    toggled: boolean;
    color?: string;
    size?: number;
    width?: number;
    height?: number;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
    classname?: string;
}

export type LoginProps = {
    email: string;
    password: string;
};

export interface TextWithLinksProps {
    linkRoute: string;
    linkLabel: string;
    text?: string;
    textPosition?: string;
}