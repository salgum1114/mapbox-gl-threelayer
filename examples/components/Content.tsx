import React from 'react';
import { Layout } from 'antd';
import { MDXProvider } from '@mdx-js/react';

import { Code, Pre } from './syntax';

const components = {
	pre: Pre,
	code: Code,
};

const Content: React.FC = props => {
	const { children } = props;
	return (
		<Layout.Content style={{ padding: '48px 128px', overflow: 'auto' }}>
			<MDXProvider components={components}>{children}</MDXProvider>
		</Layout.Content>
	);
};

export default Content;
