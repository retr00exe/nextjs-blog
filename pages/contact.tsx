import React from 'react';
import MainLayout from '@components/_layout/MainLayout';
import ContactContent from '@components/Contact';

const Contact: React.FC = () => {
	return (
		<MainLayout title="Contact">
			<ContactContent />
		</MainLayout>
	);
};

export default Contact;
