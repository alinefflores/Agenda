exportações . middlewareGlobal  =  ( req ,  res ,  próximo )  =>  {
    res . locais . umaVariavelLocal  =  'Este é o valor da variável local.' ;
    próximo ( ) ;
  } ;
  
  exportações . outroMiddleware  =  ( req ,  res ,  próximo )  =>  {
    próximo ( ) ;
  } ;
  
  exportações . checkCsrfError  =  ( err ,  req ,  res ,  próximo )  =>  {
    if ( err  &&  'EBADCSRFTOKEN'  ===  err . código )  {
      retorno  res . render ( '404' ) ;
    }
  } ;
  
  exportações . csrfMiddleware  =  ( req ,  res ,  próximo )  =>  {
    res . locais . csrfToken  =  req . csrfToken ( ) ;
    próximo ( ) ;
  } ;