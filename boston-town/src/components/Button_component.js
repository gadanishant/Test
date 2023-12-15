import { Button } from "antd";

const Button_component = ({
    className,
    onClick,
    children,
    icon,
    type,
    id,
    htmlType,
    href
}) => {

    let buttonProps = {};
    buttonProps = href ? { href: href } : { ...buttonProps };
    buttonProps = { ...buttonProps, htmlType: htmlType ? htmlType : 'button' };

    return (
        <Button
            className={className}
            onClick={onClick}
            icon={icon}
            type={type}
            id={id}
            {...buttonProps}
        >
            {children}
        </Button>
    );
};

export default Button_component;
