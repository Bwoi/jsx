function Menu(props) {

	const {items, opened} = props;

	// ВТОРОЕ РЕШЕНИЕ!!!!
	return (
		<div className={opened === true ? 'menu menu-open' : 'menu'}>
			<div className="menu-toggle"><span> </span></div>
			{opened === true
				? <nav>
						<ul>
							{items.map(function(value, index){
								return (
									<li key={index}>
										<a href={value.href}>{value.title}</a>
									</li>
								)
							})}
						</ul>
					</nav>
				: ''}
		</div>
	)




	// ПЕРВОЕ РЕШЕНИЕ!!!!

	// if ( opened ) {
	//
	// 	return (
	// 		<div className="menu menu-open">
	// 			<div className="menu-toggle"><span> </span></div>
	// 			<nav>
	// 				<ul>
	// 					{items.map(function(value, index){
	// 						return (
	// 							<li key={index}>
	// 								<a href={value.href}>{value.title}</a>
	// 							</li>
	// 						)
	// 					})}
	// 				</ul>
	// 			</nav>
	// 		</div>
	// 	)
	//
	// } else {
	//
	// 	return (
	// 		<div className="menu">
	// 			<div className="menu-toggle"><span> </span></div>
	// 		</div>
	// 	)
	//
	// }
}