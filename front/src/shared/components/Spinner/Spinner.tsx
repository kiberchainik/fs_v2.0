import React from "react";
import { TbLoader3 } from "react-icons/tb";
import styles from "./spinner.module.scss";

const Spinner: React.FC = () => {
    return (
        <div className={styles.spinnerContainer}>
            <TbLoader3 className={styles.spinnerIcon} />
        </div>
    );
};

export default Spinner