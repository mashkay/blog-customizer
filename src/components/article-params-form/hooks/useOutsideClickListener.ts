import { useEffect } from 'react';

type useOutsideClickListener = {
	isOpen: boolean;
	onChange: (newValue: boolean) => void;
	onClose?: () => void;
	rootRef: React.RefObject<HTMLDivElement>;
};

export const useOutsideClickListener = ({
	isOpen,
	rootRef,
	onClose,
	onChange,
}: useOutsideClickListener) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			console.log('click');
			const { target } = event;
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				isOpen && onClose?.();
				onChange?.(false);
				console.log('outside');
			} else {
				console.log('inside');
			}
		};
		if (isOpen) {
			window.addEventListener('click', handleClick);
		}

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [onClose, onChange, isOpen]);
};
