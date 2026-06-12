'use client';

import { useState } from 'react';
import styles from './slides.module.css';

const getPdfTitle = () => {
	const date = new Intl.DateTimeFormat('sv-SE', {
		timeZone: 'Asia/Seoul',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	}).format(new Date());

	return `${date} 이중훈 포트폴리오`;
};

const waitForImages = (slides: HTMLElement[]) => {
	const images = slides.flatMap((slide) => Array.from(slide.querySelectorAll('img')));

	return Promise.all(images.map((image) => {
		if (image.complete && image.naturalWidth > 0) return Promise.resolve();

		return new Promise<void>((resolve, reject) => {
			image.addEventListener('load', () => resolve(), { once: true });
			image.addEventListener('error', () => reject(new Error('이미지를 불러오지 못했습니다.')), { once: true });
		});
	}));
};

export default function PrintPdfButton() {
	const [isExporting, setIsExporting] = useState(false);

	const handleDownload = async () => {
		if (isExporting) return;

		setIsExporting(true);

		try {
			const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
				import('html2canvas'),
				import('jspdf'),
			]);
			const slides = Array.from(document.querySelectorAll<HTMLElement>('[data-pdf-slide]'));

			await Promise.all([document.fonts.ready, waitForImages(slides)]);

			const pdf = new jsPDF({
				compress: true,
				format: 'a4',
				orientation: 'landscape',
				unit: 'mm',
			});

			for (const [index, slide] of slides.entries()) {
				const canvas = await html2canvas(slide, {
					allowTaint: false,
					backgroundColor: null,
					logging: false,
					scale: 2,
					useCORS: true,
				});

				if (index > 0) pdf.addPage('a4', 'landscape');

				pdf.addImage(
					canvas.toDataURL('image/png'),
					'PNG',
					0,
					0,
					297,
					210,
					undefined,
					'FAST',
				);
			}

			pdf.save(`${getPdfTitle()}.pdf`);
		} catch (error) {
			console.error(error);
			window.alert('PDF 생성 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.');
		} finally {
			setIsExporting(false);
		}
	};

	return (
		<button
			aria-label='포트폴리오를 PDF로 저장'
			className={styles.pdfButton}
			disabled={isExporting}
			onClick={handleDownload}
			title='PDF로 저장'
			type='button'
		>
			{isExporting ? '...' : 'PDF'}
		</button>
	);
}
