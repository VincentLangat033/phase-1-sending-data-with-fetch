// Add your code here
function submitData( name, email ) {
    //calls fetch and passses two arguments ,URL and object containing details about the request
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        //Stringify the body before it can be passed in the request.
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
//chain a catch() function that will "handle" unsuccessful requests.
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }