module.exports = {
	facebookAuth: {
		// clientID: "640438313452270",
		clientID: '1222957854762255',
		// clientSecret: "8a9e212557141c8c2ede949785b52151",
		clientSecret: 'f4584ef852d4d73918ffbe2c7d287fb5',
		callbackURL: "http://localhost:7101/v1/auth/facebook/callback",
		profileURL:
			"https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email"
	},

	googleAuth: {
		clientID:
			"660332362380-uem3bp3emnsbq9k4dvdsdikfsmtgg5np.apps.googleusercontent.com",
		clientSecret: "Dt4p0lLtbgZGqlCV63stbmiO",
		callbackURL: "http://localhost:7101/v1/auth/google/callback"
	}
};
