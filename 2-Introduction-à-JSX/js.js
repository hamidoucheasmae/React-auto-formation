function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Asmae',
    lastName: 'Hamidouche',
  };
  
  const element = <h1>Hello, {formatName(user)}!</h1>;
  
  ReactDOM.render(element, document.getElementById('root'));
  