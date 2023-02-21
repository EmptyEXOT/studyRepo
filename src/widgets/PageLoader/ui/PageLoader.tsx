import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/ui/Loader/Loader';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className, children } = props;
    return (
        <div className={classNames(classes.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};

export default PageLoader;
