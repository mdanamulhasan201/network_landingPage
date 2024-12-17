import './style.css';

const Button = ({ title, onClick, className }) => {
    return (
        <button className={`custom-button ${className}`} onClick={onClick}>
            <span className="transition"></span>
            <span className="gradient"></span>
            <span className="label">{title}</span>
        </button>
    );
};

export default Button;
