import Answer_module from './Answer.module.scss';
import Answers_module from './Answers.module.scss';
import Classnames from 'classnames';
type Props = {
    onPress: () => void;
    text: string;
    color?: string;
    disabled?: boolean;
};
function Answer(props: Props) {
    const style = props.color ? { color: props.color } : {};
    return (
        <button
            onClick={props.onPress}
            disabled={props.disabled}
            className={Classnames(Answer_module.button, Answers_module.choices)}
        >
            <span style={style}>{props.text}</span>
        </button>
    );
}

export default Answer;
