
function make_password(length) {
    let new_password          = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      new_password += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return new_password;
}

console.log(make_password(8));
