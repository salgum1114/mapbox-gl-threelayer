import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Menu, Layout } from 'antd';
import styled, { ThemeContext } from 'styled-components';
import { Themes } from '../pages/_app';

const StyledSider = styled(Layout.Sider)<{ themes: Themes }>`
	background: ${props => props.themes.light.backgroundColor};
	height: 100%;
`;

const Logo = styled.div`
	height: 32px;
	background-image: url('${process.env.prefix}/logo.png');
	background-size: cover;
	background-repeat: no-repeat;
	margin: 16px;
	cursor: pointer;
`;

const Left = () => {
	const router = useRouter();
	const themes = useContext(ThemeContext);
	const handleClick = () => router.push(`${process.env.prefix}/`);
	console.log(router.pathname);
	return (
		<StyledSider themes={themes} width={240}>
			<Logo onClick={handleClick} />
			<Menu
				mode="inline"
				defaultOpenKeys={['/examples', '/apis']}
				defaultSelectedKeys={[router.pathname]}
				selectedKeys={[router.pathname]}
			>
				<Menu.Item key="/">
					<Link href="/" as={`${process.env.prefix}/`}>
						<a>Introduction</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="/getting-started">
					<Link href="/getting-started" as={`${process.env.prefix}/getting-started`}>
						<a>Getting Started</a>
					</Link>
				</Menu.Item>
				<Menu.SubMenu title="Examples" key="/examples">
					<Menu.ItemGroup title="Usage">
						<Menu.Divider />
						<Menu.Item key="/examples/mapbox-gl">
							<Link href="/examples/mapbox-gl" as={`${process.env.prefix}/examples/mapbox-gl`}>
								<a>mapbox-gl</a>
							</Link>
						</Menu.Item>
						<Menu.Item key="/examples/react-map-gl">
							<Link href="/examples/react-map-gl" as={`${process.env.prefix}/examples/react-map-gl`}>
								<a>react-map-gl</a>
							</Link>
						</Menu.Item>
						<Menu.Item key="/examples/react-mapbox-gl">
							<Link
								href="/examples/react-mapbox-gl"
								as={`${process.env.prefix}/examples/react-mapbox-gl`}
							>
								<a>react-mapbox-gl</a>
							</Link>
						</Menu.Item>
					</Menu.ItemGroup>
					<Menu.ItemGroup title="Model">
						<Menu.Divider />
						<Menu.Item key="/examples/gltf">
							<Link href="/examples/gltf" as={`${process.env.prefix}/examples/gltf`}>
								<a>GTLF</a>
							</Link>
						</Menu.Item>
						<Menu.Item key="/examples/obj">
							<Link href="/examples/obj" as={`${process.env.prefix}/examples/obj`}>
								<a>OBJ</a>
							</Link>
						</Menu.Item>
						<Menu.Item key="/examples/mtl">
							<Link href="/examples/mtl" as={`${process.env.prefix}/examples/mtl`}>
								<a>OBJ</a>
							</Link>
						</Menu.Item>
					</Menu.ItemGroup>
				</Menu.SubMenu>
				<Menu.SubMenu title="APIs" key="/apis"></Menu.SubMenu>
			</Menu>
		</StyledSider>
	);
};

export default Left;
