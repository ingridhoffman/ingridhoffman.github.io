// Global
import React from "react";

// Local
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import Work from "./work";

// Export function
function Home() {
	return (
		<main>
			<header>
				<h1>Ingrid Hoffman</h1>
				<p>
					Aenean condimentum ligula dapibus, luctus ligula a, vehicula metus. Morbi id est velit. Curabitur vestibulum,
					sapien vel venenatis pretium, dui dui vehicula sem, vitae tempus ante tortor a metus. Quisque tincidunt ex
					elit, ut eleifend nisi consequat quis. Quisque iaculis libero ac ultrices aliquam. Vestibulum ultricies nisl
					et arcu porttitor commodo. Nulla sed velit nibh. Fusce id rutrum erat, nec luctus est. Fusce sollicitudin
					pretium pellentesque. Donec sed egestas orci, vel blandit orci. Donec vel nisi nisl. Nulla eu ipsum sed mauris
					malesuada mattis. Phasellus eu lobortis elit, sit amet euismod justo.
				</p>
				<p>
					Suspendisse nec leo laoreet, tincidunt neque nec, dictum sem. Aliquam erat volutpat. Maecenas pretium tempus
					hendrerit. Suspendisse aliquet eleifend iaculis. Integer id sollicitudin quam. Nulla facilisi. Nulla
					ullamcorper velit aliquam elit mattis, et faucibus elit efficitur. Vivamus in dolor lacus. Integer
					pellentesque odio et mauris auctor venenatis. Etiam vitae neque cursus, commodo velit at, dictum ex. Aliquam
					erat volutpat. Fusce posuere elit lectus, ut tincidunt diam volutpat id. Suspendisse eu massa lacus. Nulla
					laoreet nunc vitae eros pellentesque posuere eu nec tellus. Cras a dapibus eros. Donec et pharetra ante.
				</p>
			</header>
			<About />
			<Work />
			<Resume />
			<Contact />
		</main>
	);
}

export default Home;
