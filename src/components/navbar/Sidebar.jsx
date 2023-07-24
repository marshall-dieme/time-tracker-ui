import { ReactSVG } from "react-svg"

import { navigation } from "../../assets/data/nav-menu"



function Sidebar() {

	
	return (
		<>
			<section id="sidebar">
				<a href="/" className="brand">
					<span className="image">
						<ReactSVG src="/src/assets/svg/logo.svg" />
					</span>
					<span className="brand-txt">
						OpenTech
					</span>
				</a>
				<ul className="side-menu ">
					{
						navigation.map(nav => {
							return (
								<li key={nav.id} className={nav.activeClass ? "active" : ''}>
									<a href={nav.link}>
										<i className={`bx ${nav.activeClass ? nav.active : nav.icon}`}></i>
										<span className="nav-text">{nav.nav}</span>
									</a>
								</li>
							)
						})
					}
				</ul>
			</section>
		</>
	)
}

export default Sidebar