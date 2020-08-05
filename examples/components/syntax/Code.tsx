import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

const Code: React.FC<any> = ({ children, className }) => {
	const language = className.replace(/language-/, '');
	return (
		<Highlight {...defaultProps} code={children as any} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={className} style={{ ...style, marginBottom: 0, padding: '20px' }}>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
};

export default Code;
