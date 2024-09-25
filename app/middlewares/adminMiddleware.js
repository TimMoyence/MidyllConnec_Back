const adminMiddleware = (req, res, next) => {
  // Vérifier si l'utilisateur est connecté
  if (!req.session.user) {
    return res.redirect('/login');
  }

  // Vérifier si l'utilisateur est un administrateur
  if (req.session.user.role === 'admin') {
    return next();
  }

  // Si l'utilisateur n'est pas un administrateur, générer une erreur
  const error = new Error('Accès refusé');
  error.status = 401;

  // Passer l'erreur au gestionnaire d'erreurs suivant
  next(error);
};

export default adminMiddleware;
