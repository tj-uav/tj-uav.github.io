import React from "react";
import "../styles/components/Button.scss";

const Button = ({ className, href, children, form = false }) => {
    if (form)
        return (
            <input className={`button paragraph ${className}`} type="submit" value={href} />
        )
    else
        return (
            <a className={`button paragraph ${className}`} href={href}>
                {children}
            </a>
        );
}

export default Button;