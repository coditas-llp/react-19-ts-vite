import { useState } from "react";
import { LoaderContext } from "./Context";
import { Loader } from "components/Loader/Loader";
import styles from './Provider.module.scss';

export const LoaderProvider = ({ children }: {children: React.ReactNode}) => {
    const [isLoading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    return (
        <LoaderContext.Provider value={{ isLoading, setLoading, hasError, setHasError }}>
            {isLoading && (
                <div className={styles.overlay}>
                    <div className={styles.loaderContent}>
                        <Loader size="large" variant="light" />
                        <div className={styles.loadingText}>Loading...</div>
                    </div>
                </div>
            )}
            {children}
        </LoaderContext.Provider>
    );
};