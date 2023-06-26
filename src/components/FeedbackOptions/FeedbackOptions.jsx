import  PropTypes from 'prop-types';
import scss from './FeedbackOptions.module.css';
 
export const FeedbackOptions = (onLeaveFeedbeck, options) => {
    return (
        <div className={CSS.buttonsWrap}>
            {options.map(option => (
                <button 
                        key={option} 
                        className={CSS.button} 
                        onClick={() => onLeaveFeedbeck(option)}   
                 >
                    {option}
                </button>
            ))}
        </div>
    );
};


FeedbackOptions.propTypes = {
    onLeaveFeedbeck: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};