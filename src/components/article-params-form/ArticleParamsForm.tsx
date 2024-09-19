import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { useOutsideClickListener } from './hooks/useOutsideClickListener';

export const ArticleParamsForm = () => {
	const [formIsOpen, setFormIsOpen] = useState<boolean>(false);
	const toggleSideBar = () => {
		if (!formIsOpen) {
			console.log('Открыть форму');
			setFormIsOpen(true);
		} else {
			console.log('Закрыть форму');
			setFormIsOpen(false);
		}
	};

	const asideRef = useRef<HTMLDivElement>(null);

	useOutsideClickListener({
		isOpen: formIsOpen,
		onChange: setFormIsOpen,
		rootRef: asideRef,
	});

	return (
		<>
			<ArrowButton onClick={toggleSideBar} open={formIsOpen} />
			<aside
				className={clsx(
					styles.container,
					formIsOpen ? styles.container_open : ''
				)}
				ref={asideRef}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
