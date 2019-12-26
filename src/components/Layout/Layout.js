import React, {Fragment} from 'react';
import Navigation from "../Navigation/Navigation";

const Layout = props => (
		<Fragment>
			<Navigation/>
			{props.children}
		</Fragment>
	);


export default Layout;