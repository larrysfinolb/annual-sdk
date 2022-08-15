const resolveRoutes = (route) => {
	if (route === 'login') return '/login';
	return route === '/' ? '/' : `/${route}`;
};

export default resolveRoutes;
