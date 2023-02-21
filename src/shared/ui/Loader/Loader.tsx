import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

const Loader: FC<LoaderProps> = (props) => {
    const { className, children } = props;
    return (
        <div className={classNames(classes.ldsEllipsis, {}, [])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};

export default Loader;
