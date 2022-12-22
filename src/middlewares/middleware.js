module.exports = (req, res, next) => {
    res.locals.umaVariavelLocal = 'valor local';
    console.log('passei no middleware global');
    next();
};