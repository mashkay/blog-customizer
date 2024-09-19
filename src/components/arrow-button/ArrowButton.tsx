import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';
import React, { MouseEventHandler } from 'react';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type ArrowButtonProps = {
	/** Функция для обработки открытия/закрытия формы */
	onClick: OnClick;
	/** Состояние открытия формы */
	open: boolean;
};

export const ArrowButton = ({ onClick, open }: ArrowButtonProps) => {
	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		console.log('Клик по кнопке');
		onClick();
	};
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, open ? styles.container_open : '')}
			onClick={handleClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, open ? styles.arrow_open : '')}
			/>
		</div>
	);
};
