import React, { useEffect, useState } from 'react';
import styles from './PriceRangeStyle.module.css';

export default function PriceRange({ t, i18n }) {
    const [rangeInput, setRangeInput] = useState([]);
    const [priceInput, setPriceInput] = useState([]);
    const [range, setRange] = useState(null);
    const [priceGap] = useState(1000);

    useEffect(() => {
        const priceInputs = document.querySelectorAll(`.${styles['price-input']} input`);
        const rangeInputs = document.querySelectorAll(`.${styles['range-input']} input`);
        const rangeElem = document.querySelector(`.${styles['slider']} .${styles['progress']}`);

        setPriceInput(priceInputs);
        setRangeInput(rangeInputs);
        setRange(rangeElem);

        // Clean up event listeners
        return () => {
            priceInputs.forEach(input => {
                input.removeEventListener("input", handlePriceInputChange);
            });
        };
    }, []); 

    const handlePriceInputChange = (e) => {
        let minPrice = parseInt(priceInput[0].value);
        let maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            rangeInput[0].value = minPrice;
            range.style.left = `${(minPrice / rangeInput[0].max) * 100}%`;
            rangeInput[1].value = maxPrice;
            range.style.right = `${100 - (maxPrice / rangeInput[1].max) * 100}%`;
        }
    };

    const handleRangeInputChange = (e) => {
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === `${styles['range-min']}`) {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = `${(minVal / rangeInput[0].max) * 100}%`;
            range.style.right = `${100 - (maxVal / rangeInput[1].max) * 100}%`;
        }
    };

    useEffect(() => {
        priceInput.forEach(input => {
            input.addEventListener("input", handlePriceInputChange);
        });

        rangeInput.forEach(input => {
            input.addEventListener("input", handleRangeInputChange);
        });

        // Clean up event listeners
        return () => {
            priceInput.forEach(input => {
                input.removeEventListener("input", handlePriceInputChange);
            });

            rangeInput.forEach(input => {
                input.removeEventListener("input", handleRangeInputChange);
            });
        };
    }, [priceInput, rangeInput]); 

    return (
        <div className={styles.wrapper}>
            <div>
                <h4>{t("Filter Price Range")}</h4>
            </div>
            <div dir='ltr' className={styles['price-input']}>
                <div className={styles.field}>
                    <span>{t("Filter Min")}</span>
                    <input type="number" className={styles['input-min']+" m-0 "} defaultValue="2500" onChange={handlePriceInputChange} />
                </div>
                <div className={styles.separator}>-</div>
                <div className={styles.field}>
                    <span>{t("Filter Max")}</span>
                    <input type="number" className={styles['input-max']+" m-0 "} defaultValue="7500" onChange={handlePriceInputChange} />
                </div>
            </div>
            <div className={styles.slider}>
                <div className={styles.progress}></div>
            </div>
            <div dir='ltr' className={styles['range-input']}>
                <input type="range" className={styles['range-min']} min="0" max="10000" defaultValue="2500" step="100" onChange={handleRangeInputChange} />
                <input type="range" className={styles['range-max']} min="0" max="10000" defaultValue="7500" step="100" onChange={handleRangeInputChange} />
            </div>
        </div>
    );
}
