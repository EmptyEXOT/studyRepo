import {
    FC,
    MouseEvent,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Portal from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import classes from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const CLOSE_TIMEOUT: number = 300;

const Modal: FC<ModalProps> = (props) => {
    const { t } = useTranslation();
    const { className, children, isOpen, onClose } = props;
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose?.();
            setIsClosing(false);
        }, CLOSE_TIMEOUT);
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [classes.opened]: isOpen,
        [classes.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div
                className={classNames(classes.modal, mods, [
                    className,
                    theme,
                    'app_modal',
                ])}
            >
                <div className={classes.overlay} onClick={closeHandler}>
                    <div className={classes.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
