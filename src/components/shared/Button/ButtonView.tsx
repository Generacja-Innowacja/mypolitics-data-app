import { twMerge } from "tw-merge";

const styleTypes = {
    primary: 'bg-dark-sea text-white hover:bg-dark-sea-hover',
    outlined: 'border border-dark-sea text-dark-sea bg-gray/0 hover:bg-gray',
    ghost: 'bg-gray text-dark-sea hover:bg-gray-hover',
} as const;

const sizeTypes = {
    small: {
        height: 'h-[40px]',
        width: 'w-[40px]',
    },
    medium: {
        height: 'h-[48px]',
        width: 'w-[48px]',
    }
} as const;

interface GenericProps {
    styleType: keyof typeof styleTypes;
    sizeType?: keyof typeof sizeTypes;
    isIconButton?: boolean;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, GenericProps {
    tag?: 'button';
}

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, GenericProps {
    tag?: 'anchor';
}

type Props = ButtonProps & AnchorProps;

const Button = ({ styleType = 'primary', sizeType = 'medium', tag, isIconButton, children, ...props }: Props) => {
    const baseStyle = 'flex rounded-[32px] leading-none font-bold gap-2 items-center h-[48px] p-4 transition-colors duration-300 no-underline';
    const iconButtonStyle = twMerge(`rounded-full items-center ${sizeTypes[sizeType].width}`)

    const classNames = [
        baseStyle,
        styleTypes[styleType],
        sizeTypes[sizeType].height,
        isIconButton ? iconButtonStyle : '',
        props.className,
    ]

    if (tag === 'anchor') {
        return (
            <a {...props} className={twMerge(classNames.join(" "))}>
                {children}
            </a>
        )
    }

    return (
        <button {...props} className={twMerge(classNames.join(" "))}>
            {children}
        </button>
    )
}

export default Button;